// @flow
const choo = require('choo');
const html = require('choo/html');
const css = require('sheetify');
const Header = require('./components/header');

const app = choo();

const prefix = css`
  :host {
    display: flex;
    justify-content: center;
    margin: 0 5%;
  }
`;

function Main() {
  return html`
    <body class=${prefix}>
      ${Header}
    </body>
  `;
}

app.route('/', Main);
app.mount('body');
