import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Ragistration from "./components/ragistration/Ragistration";
import Singin from "./page/signin/Signin";
import Home from "./page/home/Home";
import Write from "./page/write/Write";
import Blogbyid from "./components/blogbyid/Blogbyid";
import UserPage from "./components/userdetail/UserPage";
import Profile from "./components/userdetail/Profile";
import BlogHome from "./page/BlogsHome/BlogHome";


function App() {
  return (
    <div >
    <Navbar/>
      <Routes>
         <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path="/detail/:id" element={<Blogbyid />}></Route>
          <Route path="/user" element={<UserPage />}></Route>
          <Route path="/userprofile" element={<Profile/>}></Route>
          <Route path="/home" element={<BlogHome/>}></Route>
          </Route>
         <Route path="/ragistration" element={<Ragistration/>}></Route>
         <Route path="/write" element={<Write/>}></Route>
         <Route path="/signin" element={<Singin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
