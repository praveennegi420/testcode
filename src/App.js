import "./styles.css";

import Home from './pages/Home'
import BookDj from './pages/BookDj'
import Promo from "./pages/Promo";
import NearbyDjs from "./pages/NearbyDjs";

import { Route, Routes } from "react-router-dom";
import Sidebar from "./Component/Sidebar";

export default function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bookdj' element={<BookDj/>} />
        <Route path='/promo' element={<Promo/>} />
        <Route path='/nearbydjs' element={<NearbyDjs/>} />

        {/* <Route path='*' element={<Notfound/>}/> */}
      </Routes>
    </div>
  );
}
