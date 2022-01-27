import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import NotFound from '../routes/NotFound';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path=":id" element={<Detail/>} />
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
