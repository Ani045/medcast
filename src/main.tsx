// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import './index.css'; // Your Tailwind CSS file

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  );
};

// Render the app
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

export default App;