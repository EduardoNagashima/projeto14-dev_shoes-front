import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "../Produtos/Produtos"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;