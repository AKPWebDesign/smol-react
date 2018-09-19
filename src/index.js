import React from 'react';
import ReactDOM from 'react-dom';

const title = 'smol react';

ReactDOM.render(
  <div><small>{title}</small></div>,
  document.getElementById('app'),
);

// allow hot module replacement, opposed to reloading the browser on every change.
module.hot.accept();
