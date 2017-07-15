// @flow
const html = require('choo/html');
const css = require('sheetify');

const prefix = css`
  :host {
    background: #368C81;
    color: white;
    display: flex;
    flex-direction: row;
    flex: auto;
  }

  :host nav h2 {
    font-family: Helvetica;
    text-transform: uppercase;
  }

  :host img {
    width: 50px;
    height: 50px;
    margin: auto 10px;
  }

  :host nav {
    display: flex;
    flex-grow: .8;
    justify-content: space-around;
  }
`;

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
