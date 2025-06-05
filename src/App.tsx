import React from 'react';
import ReactDOM from 'react-dom/client';
import VirtualGame from './fps';

export function mount(container: HTMLElement, initialProps?: any) {
  const root = ReactDOM.createRoot(container);
  
  // Wrapper component to handle prop updates
  const MountWrapper = ({ children, ...props }: any) => {
    return <VirtualGame {...props} />;
  };
  
  let currentProps = initialProps || {};
  
  const render = (props: any = {}) => {
    currentProps = { ...currentProps, ...props };
    root.render(<MountWrapper {...currentProps} />);
  };
  
  // Initial render
  render(initialProps);
  
  return {
    // Method to update props
    updateProps: (newProps: any) => render(newProps),
    // Method to unmount
    unmount: () => root.unmount()
  };
}

export default mount;
