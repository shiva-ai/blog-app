import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom" ;
import Home from "./pages/Home" ;
import Login from "./pages/Login" ;
import CreatePost from "./pages/CreatePost" ;
import './App.css';
import { useState } from "react";

import {signOut} from "firebase/auth" ;
import { auth } from "./firebase-config";

function App() {

  const [isauth , setIsauth] = useState(localStorage.getItem("isAuth")) ;

  const signOutUser = () => {
    signOut(auth).then(()=>{
      localStorage.clear() ;
      setIsauth(false) ;
      window.location.pathname = "/login" ;
    })
  }

  return (
    <Router>
    
      <nav>
        <Link to="/" >Home</Link>
        
        {!isauth ? <Link to="/login" >Login</Link> : <><Link to="/createpost" > CreateBlog</Link>
        <button onClick={signOutUser} >Logout</button>
        </> }
      </nav>

      <Routes>
        <Route path="/" element={<Home isauth={isauth}/>} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login  setIsauth = {setIsauth} />} />
      </Routes>
    </Router>
  );
}

export default App;
