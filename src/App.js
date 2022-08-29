import './App.css';
import Feed from './Feed';
import SideBar from './SideBar';
import Widjet from './Widjet';

function App() {  
  return (
    <div className="app">
       <SideBar/>
       <Feed/>
       <Widjet/>
    </div>
  );
}

export default App;
