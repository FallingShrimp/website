import path from "path-browserify";

const loadings: Promise<string>[] = [];
export const articles: Record<string, string> = Object.fromEntries(
    Object.entries(import.meta.glob("./articles/*.md", { query: "?raw", import: "default" })).map(
        ([k, v]) => {
            const key = path.basename(k, path.extname(k));
            loadings.push(v().then((e) => (articles[key] = e)));
            return [key, ""];
        },
    ),
);
await Promise.all(loadings);
