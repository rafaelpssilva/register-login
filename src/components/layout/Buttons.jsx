import React from "react";

function Buttons({ openForm, setOpenForm }) {
    return (
        <section className="flex flex-col justify-center items-center gap-4 text-xl font-SegoeUI">
            <button
                className="bg-yellow w-fit py-4 px-16 rounded-2xl w-4/5 text-[#1B1A40] font-semibold"
                onClick={() => setOpenForm(!openForm)}
            >
                Create Account
            </button>
            <button className="w-fit py-4 px-16 rounded-2xl w-4/5 border-yellow text-yellow border-[3px] font-semibold ">
                Login
            </button>
        </section>
    );
}

export default Buttons;
