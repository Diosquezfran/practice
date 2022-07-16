import logo from './logo.svg';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path=':categoryID' element={<ItemListContainer />}/>
          <Route path='/detail/:id' element={<ItemDetailContainer />}/>
        </Routes>
        <div>Footer</div>
      </BrowserRouter>
    </div>
  );
}

export default App;
