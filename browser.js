import React from 'react';
import { render } from 'react-dom';
import App from './app/components/app';

let initialData = document.getElementById('initial-data').textContent;

if(initialData.length > 0) {
  initialData = JSON.parse(initialData);
}

render(<App initialData={initialData} />,
  document.getElementById('root')
);
