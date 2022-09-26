import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Ragistration from "./components/ragistration/Ragistration";
import Singin from "./page/signin/Signin";
import Home from "./page/home/Home";


function App() {
  return (
    <div >
    <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/ragistration" element={<Ragistration/>}></Route>
         <Route path="/signin" element={<Singin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
