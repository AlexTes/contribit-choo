const choo = require('choo')
const html = require('choo/html')
const app = choo()
app.route('/', mainView);
app.mount('body')

function mainView() {
  return html`
  <body>
    <h1>ContriBit</h1>
  </body>
  `;
};
