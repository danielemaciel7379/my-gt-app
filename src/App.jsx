import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import Home from './Pages/Home';
import Contact from './Pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header brand='Geração Tech'
      description='Sede Bezerra de Menezes'>
        <a href="/#equipe"> Equipe</a>
       <NavLink to ="/contato"> Contato</NavLink>
      </Header>
      <main className='container'>
        <Routes>
          <Route path='/'element={ <Home/>}/>
          <Route path='/contato'element={<Contact/>}/>
        </Routes>
       </main>
    </BrowserRouter>
  );
}

export default App;
