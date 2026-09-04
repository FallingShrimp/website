declare module "*.txt?raw" {
    const content: string;
    export default content;
}
declare module "v3-markdown-stream" {
    export class MarkdownRender { }
}