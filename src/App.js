import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Blog from './Components/Pages/Blog';
import ComingSoon from './Components/ComingSoon.js'
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer/Footer.js'

function App() {
  return (
    <div className="App">

     
    <Router>
    <Navbar/>

    <Routes>
    <Route path="/" exact element={<Home/>} />

    <Route path="/Blogs" exact element={<Blog/>} />        
    
    <Route path="*"  element={<ComingSoon/>} />        


    </Routes>

    
    <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
