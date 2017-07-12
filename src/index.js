// @flow
const choo = require('choo');
const html = require('choo/html');

const app = choo();

function mainView() {
  return html`
    <body>
      <h1>ContriBit</h1>
    </body>
  `;
}

app.route('/', mainView);
app.mount('body');
