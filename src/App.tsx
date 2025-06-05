// In your App.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import VirtualGame from './fps';

interface MountAPI {
  updateProps: (props: any) => void;
  unmount: () => void;
  getProps: () => any;
}

export function mount(container: HTMLElement, initialProps?: any): MountAPI {
  const root = ReactDOM.createRoot(container);
  let currentProps = initialProps || {};
  
  const App = () => {
    const [props, setProps] = React.useState(currentProps);
    
    // Expose setProps to the API
    React.useEffect(() => {
      (window as any).__updateProps = setProps;
    }, []);
    
    return <VirtualGame {...props} />;
  };
  
  root.render(<App />);
  
  return {
    updateProps: (newProps: any) => {
      currentProps = { ...currentProps, ...newProps };
      if ((window as any).__updateProps) {
        (window as any).__updateProps(currentProps);
      }
    },
    unmount: () => {
      delete (window as any).__updateProps;
      root.unmount();
    },
    getProps: () => currentProps
  };
}

export default mount;
