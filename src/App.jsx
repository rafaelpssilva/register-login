import React from "react";

import Buttons from "./components/layout/Buttons";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";

import axios from "axios";

function App() {
    const [dataUsers, setDataUsers] = React.useState();
    React.useEffect(() => {
        axios
            .get("https://6330e033591935f3c8965331.mockapi.io/registerapi/user")
            .then((res) => setDataUsers(res.data));
    }, []);
    return (
        <div className="flex justify-center flex-col h-full font-SegoeUI overflow-hidden">
            <div className="bg-base">
                <Home />
                <Buttons dataUsers={dataUsers} />
                <Footer />
            </div>
        </div>
    );
}

export default App;
