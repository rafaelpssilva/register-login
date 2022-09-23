import React from "react";

import Buttons from "./components/layout/Buttons";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";

import FormRegister from "./components/form/FormRegister";

function App() {
    const [openForm, setOpenForm] = React.useState(false);
    return (
        <div className="flex justify-center flex-col h-full font-SegoeUI">
            <div className="bg-base">
                <Home />
                <Buttons openForm={openForm} setOpenForm={setOpenForm} />
                <Footer />
                <FormRegister openForm={openForm} setOpenForm={setOpenForm} />
            </div>
        </div>
    );
}

export default App;
