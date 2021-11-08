import './App.css';
import Home from "./components/Home";
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import {BrowserRouter as Router,Route ,Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="App">
    <Router>
     
      <h1>CRUD App</h1>
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
