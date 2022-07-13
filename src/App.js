import './app.css';
import {Decisions} from './components';
import DecisionsContextProvider from './context/DecisionsContext';
function App() {  

  return (
    <div className="App">
      <DecisionsContextProvider>
        <Decisions />
      </DecisionsContextProvider>
    </div>
  );
}

export default App;
