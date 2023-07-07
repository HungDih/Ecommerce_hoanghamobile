import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Home from "./componets/Home";

import Mobile from "./componets/pages/Mobile";
import Register from "./componets/Register";
import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./componets/NotFound";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/dien-thoai" element={<Mobile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
