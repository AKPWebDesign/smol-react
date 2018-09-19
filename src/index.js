import React from 'react';
import ReactDOM from 'react-dom';
const e = React.createElement;

const title = 'smol react';

ReactDOM.render(
  e('div', null,
    e('small', null, title)
  ),
  document.getElementById('app'),
);
