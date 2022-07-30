import { App } from './components/app';
import { StrictMode } from 'react';
import { render } from 'react-dom';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('main')
);
