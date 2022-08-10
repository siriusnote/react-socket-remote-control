import './App.css';
import { SocketContext, socket } from "context/socket";
import ChangeModeView from "views/ChangeModeView";

function App() {

  return (
      <SocketContext.Provider value={socket}>
        <div className="App">
            <ChangeModeView/>
        </div>
      </SocketContext.Provider>
  );
}

export default App;
