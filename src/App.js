import './App.css';
import Home from "./components/Home";
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Header from './components/Header';
import {BrowserRouter as Router,Route ,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App" style={{height:"100vh", Width:"100vw"}}>
    <Router>
    <Header/>
 
      <Routes>
      
        <Route path="/" element={ <Home/>}/>
        <Route path="/add" element={ <AddUser/>}/>
        <Route path="/edit/:id" element={ <EditUser/>}/>
      </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
