import React from 'react';
import { createRoot } from 'react-dom/client';

class App extends React.Component {
  render() {
    return <div>Hi there</div>;
  }
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
