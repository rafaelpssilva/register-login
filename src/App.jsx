import React from "react";

import Buttons from "./components/layout/Buttons";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";

function App() {
    return (
        <div className="flex justify-center flex-col h-full font-SegoeUI overflow-hidden">
            <div className="bg-base">
                <Home />
                <Buttons />
                <Footer />
            </div>
        </div>
    );
}

export default App;
