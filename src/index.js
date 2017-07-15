// @flow
const css = require('sheetify');
const choo = require('choo');
const html = require('choo/html');
const Header = require('./components/header');

const app = choo();
const prefix = css`
  :host {
    display: flex;
    justify-content: center;
    margin: 0 5%;
  }
`;

function mainView() {
  return html`
    <body class=${prefix}>
      ${Header}
    </body>
  `;
}

app.route('/', mainView);
app.mount('body');
