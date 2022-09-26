import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./page/home/Home";


function App() {
  return (
    <div >
    <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
