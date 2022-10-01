import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Ragistration from "./components/ragistration/Ragistration";
import Singin from "./page/signin/Signin";
import Home from "./page/home/Home";
import Write from "./page/write/Write";
import Blogbyid from "./components/blogbyid/Blogbyid";
import UserPage from "./components/userdetail/UserPage";
import Profile from "./components/userdetail/Profile";
import BlogHome from "./page/BlogsHome/BlogHome";
import MainAuth from "./components/blogByAuthname/MainAuth";
import PulseLoader from "react-spinners/PulseLoader";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Blogupdate from "./components/userdetail/Blogupdate";


function App() {

  const [loading, setLoading] = useState(false)
  const token = Cookies.get('jwt')
  console.log("token....tt", token)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <div >
      {loading ?
        <div className='container loader'>
          <div className='loading'>
            <PulseLoader color="black" />
          </div>
        </div>
        :
        <>
          <Navbar />
          <Routes>
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path="/detail/:id" element={<Blogbyid />}></Route>
              <Route path="/authdetail/:id" element={<MainAuth />}></Route>
              <Route path="/home" element={<BlogHome />}></Route>
            </Route>
            <Route path="/user">
              <Route index element={<UserPage />}></Route>
              <Route path=":id" element={<Blogupdate />}></Route> 
              <Route path="detail/:id" element={<Blogbyid />}></Route>
              <Route path="userprofile" element={<Profile />}></Route>

            </Route>
            <Route path="/ragistration" element={<Ragistration />}></Route>
            <Route path="/write" element={token ? <Write /> : <Singin />}></Route>
            <Route path="/signin" element={<Singin />}></Route>
          </Routes>
        </>
      }
    </div>
  );
}

export default App;
