import React from "react";
import ImagemApresentacao from "../../../public/ImagemApresentacao.png";

function Home() {
    return (
        <section>
            <div className="w-fit m-auto">
                <img src={ImagemApresentacao} alt="homem usando computador" />
            </div>
            <div className="mt-4 text-center">
                <h1 className="text-apresentation text-4xl mb-4 font-normal font-Roboto">
                    Welcome
                </h1>
                <p className="text-xl text-center font-light w-72 m-auto mb-14 text-[#f4f4f4] font-SegoeUI ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmodu
                </p>
            </div>
        </section>
    );
}

export default Home;
