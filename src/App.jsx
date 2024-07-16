import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NuevoVideo from './Pages/Nuevovideo'
import HomePage from './Pages/Home'
import NotFound from './Pages/404';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';

import { useEffect, useState } from 'react';
import CartaVideo from './componentes/Card/Card';








function App() {
  /* const [videoData, setVideoData] = useState(null)


  useEffect(() => {
    const getData = async () => {
    const res = await fetch('http://localhost:3000/videos');
    const data = await res.json();
    setVideoData(data); //Se almacena los datos en el estado
    }
    getData();
}, []) */


  return (
  
      <Router>
        <Header/>
        <Routes>
          <Route path='/'element ={<HomePage/>} />
          <Route path='/nvideo' element={<NuevoVideo/>}/>
          <Route path='*' element = {<NotFound/>}/>
        </Routes>
        
        <Footer/>
      </Router>
  
  );
}

export default App
