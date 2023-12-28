import React from 'react';
import { createRoot } from 'react-dom/client';

interface AppProps {
  color?: string;
}

class App extends React.Component<AppProps> {
  render() {
    return <div>Hi there, {this.props.color}</div>;
  }
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App color="red" />);
