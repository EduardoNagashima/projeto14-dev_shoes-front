import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Produtos from "./../Produtos/Produtos"
import Footer from "../Footer";
import UserContext from "./../Contexts/UserContext"


const App = () => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        setToken(localStorage.getItem("token"));
    })

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ token }}>
                <Routes>
                    <Route path="/" element={<Produtos />} />
                </Routes>
                <Footer />
            </UserContext.Provider>
        </BrowserRouter>
    );
}
export default App;