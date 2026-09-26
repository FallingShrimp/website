import { rmSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { Window } from "happy-dom";
import { build } from "vite";
const dom = new Window();
globalThis.window = dom;
globalThis.document = dom.document;
globalThis.localStorage = dom.localStorage;
for (const key of Object.getOwnPropertyNames(dom)) {
    if (key in globalThis) continue;
    try {
        globalThis[key] = dom[key];
    } catch {}
}
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = ".ssr-temp";
await build({
    root: root,
    logLevel: "warn",
    ssr: { noExternal: true },
    build: {
        ssr: path.resolve(root, "src/ssr.ts"),
        outDir: path.resolve(root, dist),
        emptyOutDir: true,
    },
});
const { render } = await import(pathToFileURL(path.join(root, dist, "ssr.js")).href);
const html = await render();
const index = path.join(root, "dist", "index.html");
writeFileSync(
    index,
    readFileSync(index, "utf8").replace(
        /(<div[^>]*id=["']?app["']?[^>]*>)(<\/div>)/,
        `$1${html}$2`,
    ),
);
rmSync(path.join(root, dist), { recursive: true, force: true });
