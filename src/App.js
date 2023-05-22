import Edit from "./components/Edit";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import List from "./components/List";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/lists" element={<List/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
