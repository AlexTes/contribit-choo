// @flow
const html = require('choo/html');
const css = require('sheetify');

const prefix = css('./header.css');

module.exports = html`
  <header class=${prefix}>
    <nav>
      <h2>Issues</h2>
      <h2>Add Project</h2>
      <h2>About</h2>
    </nav>
    <img src='/assets/logo-1.png'>
  </header>
`;
