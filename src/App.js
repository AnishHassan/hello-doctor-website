import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';

function App() {
  return (
    <div className="App">
    <Router>
    

    <Routes>
    <Route path="/" exact element={<Home/>} />


    <Route path="/Blogs" exact element={<Blog/>} />        
        
    </Routes>

    
    </Router>
    
    </div>
  );
}

export default App;
