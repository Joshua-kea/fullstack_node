import fs from 'fs';


export function constructPage(page, options = {}) {

    const header = readPage('public/components/header/header.html');
    const nav = readPage('public/components/navigation/nav.html');
    const footer = readPage('public/components/footer/footer.html');

    return header
    .replace('{{CSS_LINKS}}', options.cssLink || "")
    .replace('{{JS_LINKS}}', options.jsLink || "")
    .replace('{{SCRIPT}}', options.script || "")
    .replace('{{TAB_TITLE}}', options.tabTitle || "Full-Stack")
     
    + nav 
    + page 
    + footer;
}


export function readPage(path) {
    return fs.readFileSync(path, 'utf-8');
}