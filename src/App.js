import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom"
import MainSection from "./Components/Main/MainSection"
import Technology from './Components/Technology/Technology';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element = {<MainSection/>}/>
        <Route path='/Technology' element = {<Technology/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
