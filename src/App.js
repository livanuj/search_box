import "@fontsource/source-sans-pro";
import './App.css';
import SearchBox from './views/SearchBox';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBox />
      </header>
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
