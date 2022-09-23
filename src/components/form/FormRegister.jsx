import React from "react";
import Close from "../../assets/Close";

import Input from "./Input";
function FormRegister({ openForm, setOpenForm }) {
    return (
        openForm && (
            <section className="bg-formColor z-10 absolute  bottom-0 w-full h-4/6 rounded-t-[40px] overflow-hidden p-6">
                <div className="flex justify-between items-center">
                    <div className="text-darkBlue">
                        <p className="text-xl">Hello...</p>
                        <h2 className="text-3xl font-bold ">Register</h2>
                    </div>
                    <div onClick={() => setOpenForm(!openForm)}>
                        <Close />
                    </div>
                </div>
                <form action="" className="mt-6 flex flex-col gap-5">
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="email"
                    />
                    <Input
                        id="course"
                        type="text"
                        name="course"
                        placeholder="course"
                    />
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="password"
                    />
                    <Input
                        id="password-confirm"
                        type="password"
                        name="password-confirm"
                        placeholder="confirm password"
                    />
                </form>
            </section>
        )
    );
}

export default FormRegister;
