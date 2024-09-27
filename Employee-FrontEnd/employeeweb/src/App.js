import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import Dasboard from './pages/dasboard/Dasboard';
import NoMatch from './pages/noMatch/NoMatch';
import PostUser from './pages/employee/PostUser';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Dasboard/>}/>
      <Route path='/employee' element={<PostUser/>}/>

      <Route path='*' element={<NoMatch/>}/>

    </Routes>
    </>
  );
}

export default App;
