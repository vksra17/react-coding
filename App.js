import './App.css';
import First from './First';
import Second from './Second';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Table from './Table';

function App() {
  return (
    <>
 
  <Router>
        
        <Routes>
        
          <Route path="/me" exact element={<First />} />
          <Route path="/transactions" exact element={<Second />} />
          <Route path="/vk" exact element={<Table/>} />
         

        
        </Routes>
      
      </Router>
    
    </>
    
  );
}

export default App;
