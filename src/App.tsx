import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./global.css";
import MainPage from "./pages/MainPage";

const App = () => {
    return <>
    
    
    <BrowserRouter>
    
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

        {/* * bhaneko chai / pachi jj aucha tyo mainpage le handle garcha */}
        <Route path="/*" element={<  MainPage/>} />  
    </Routes>
    
    </BrowserRouter>
    
    </>
}

export default App;