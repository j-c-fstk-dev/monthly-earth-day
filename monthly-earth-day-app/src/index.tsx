import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './MainApp';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  );
}
