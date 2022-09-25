import React from "react";
import FormRegister from "../form/FormRegister";
import FormLogin from "../form/FormLogin";

function Buttons({ dataUsers }) {
    return (
        <section className="flex flex-col justify-center items-center gap-4 text-xl font-SegoeUI w-full">
            <FormRegister dataUsers={dataUsers} />

            <FormLogin />
        </section>
    );
}

export default Buttons;
