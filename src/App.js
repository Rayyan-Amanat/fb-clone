
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

    document.title = "Welcome to facebook clone"


 const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
    {!user ? 
     <Login/>
    : (
      <>
     <Header/>
     <div className="app__body">
      <Sidebar/>
      <Feed/>
      <Widgets/>
     </div>
     </>
    ) }
  
    </div>
  );
}

export default App;
