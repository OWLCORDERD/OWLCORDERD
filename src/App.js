import './App.css';
import {Routes, BrowserRouter, Route} from "react-router-dom"
import MainSection from "./Components/Main/MainSection"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<MainSection/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
