import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Header/Home';
import About from './Header/About';
import Personal from './Header/Personal';
import Suggestion from './Header/Suggestion';
import Blog from './Header/Blog';
import History from './Header/History';
import LogIn from './Header/LogIn';
import Patient from './login/Patient';
import Hospital from './login/Hospital';
import Admin from './login/Admin';
import SignIn from './Header/SignIn';
function App() {
  return (
      <div className='w-full h-full'>
        <Navbar />
        <div className='pt-[50px] w-full h-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/suggestion" element={<Suggestion />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/history" element={<History />} />
            <Route path='/signin' element={<SignIn></SignIn>}></Route>
            <Route path="/login" element={<LogIn />} />
            <Route path="/login/patient" element={<Patient />} />
            <Route path="/login/hospital" element={<Hospital />} />
            <Route path="/login/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
