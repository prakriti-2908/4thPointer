import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import OrderTable from "./components/Table";
import Navbar from "./components/Navbar";
import IntroDiv from "./components/IntroDiv";
import EditClientForm from "./components/Form";  
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<><IntroDiv /><OrderTable /></>} />
            <Route path="/edit-client" element={<EditClientForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;