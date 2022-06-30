import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './src/Login';
import Register from './src/Register';
import Home from './src/Home';
import { Movies } from './src/Movies';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <React.Fragment>
      <h1>Not found</h1>
      <Link to="/">Go back</Link>
    </React.Fragment>
  );
}
