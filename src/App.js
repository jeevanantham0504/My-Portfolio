import logo from './logo.svg';
import './App.css';
import Menu from './components/menu/menu';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Aboutme from './components/aboutme/aboutme';
import Project from './components/projects/projects';
import Contact from './components/contact/contact';
import Certificates from './components/certificates/certificates';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Home/>]}/>
      <Route path='/Aboutme' element={[<Aboutme/>]}/>
      <Route path='/Projects' element={[<Project/>]}/>
      <Route path='/Contact' element={[<Contact/>]}/>
      <Route path='/certificates' element={[<Certificates/>]}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
