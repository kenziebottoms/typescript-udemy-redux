import React from 'react';
import { createRoot } from 'react-dom/client';

interface AppProps {
  color?: string;
}
interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }

  increment = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
