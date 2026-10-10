import { readPage, constructPage } from './templatingEngine.js';

const frontpage = readPage('public/pages/frontpage/frontpage.html');
const commands = readPage('public/pages/views/commands.html');
const css = readPage('public/pages/views/css.html');
const dates = readPage('public/pages/views/dates.html');
const errors = readPage('public/pages/views/errors.html');
const functions = readPage('public/pages/views/functions.html');
const fundamentals = readPage('public/pages/views/fundamentals.html');
const html = readPage('public/pages/views/html.html');
const loops = readPage('public/pages/views/loops.html');
const modules = readPage('public/pages/views/modules.html');
const objects = readPage('public/pages/views/objects.html');
const servers = readPage('public/pages/views/servers.html');
const setups = readPage('public/pages/views/setups.html');
const ssr = readPage('public/pages/views/ssr.html');
const tools = readPage('public/pages/views/tools.html');

export const frontpagePage = constructPage(frontpage);

export const commandsPage = constructPage(commands, {
    tabTitle: "Full-Stack | Terminal Commands",
});

export const cssPage = constructPage(css, {
    tabTitle: "Full-Stack | CSS",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const datesPage = constructPage(dates, {
    tabTitle: "Full-Stack | Date()",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const errorsPage = constructPage(errors, {
    tabTitle: "Full-Stack | Errors & Debugging",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const functionsPage = constructPage(functions, {
    tabTitle: "Full-Stack | Functions",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const fundamentalsPage = constructPage(fundamentals, {
    tabTitle: "Full-Stack | Fundamentals",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const htmlPage = constructPage(html, {
    tabTitle: "Full-Stack | HTML",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const loopsPage = constructPage(loops, {
    tabTitle: "Full-Stack | Arrays & Loops",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const modulesPage = constructPage(modules, {
    tabTitle: "Full-Stack | Modules",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const objectsPage = constructPage(objects, {
    tabTitle: "Full-Stack | Objects",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const serversPage = constructPage(servers, {
    tabTitle: "Full-Stack | Start a server",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const setupsPage = constructPage(setups, {
    tabTitle: "Full-Stack | Project setup",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const ssrPage = constructPage(ssr, {
    tabTitle: "Full-Stack | SSR",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});

export const toolsPage = constructPage(tools, {
    tabTitle: "Full-Stack | Tools",
    cssLink: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/styles/stackoverflow-light.min.css">`,
    jsLink: `<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.12.0/highlight.min.js"></script>`,
    script: `<script>hljs.highlightAll();</script>`
});