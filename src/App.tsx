import React from 'react';
import ReactDOM from 'react-dom/client';
import VirtualGame from './fps';


export function mount(container: HTMLElement) {
  const root = ReactDOM.createRoot(container);
  root.render(<VirtualGame />);
  
  return () => {
    root.unmount();
  };
}

export default mount;
