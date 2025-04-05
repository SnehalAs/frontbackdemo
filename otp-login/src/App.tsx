import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Verify from './pages/Verify';
import Success from './pages/Success';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}
