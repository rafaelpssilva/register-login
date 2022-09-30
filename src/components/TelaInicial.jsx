import React from "react";
import Buttons from "./layout/Buttons";
import Footer from "./layout/Footer";
import Home from "./layout/Home";

import axios from "axios";

function TelaInicial() {
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

export default TelaInicial;
