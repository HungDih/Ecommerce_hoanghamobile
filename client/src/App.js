import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import Mobile from "./componets/pages/Mobile";
import { Routes, Route, Link } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes >
        <Route path="/dien-thoai" element={<Mobile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
