import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TelaInicial from "./components/TelaInicial";
import AreaLogin from "./components/pages/AreaLogin";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<TelaInicial />} />
                <Route path="/login" element={<AreaLogin />} />
            </Routes>
        </Router>
    );
}

export default App;
