import React from "react";

function Input({ type, name, placeholder, id }) {
    return (
        <input
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            className="
        bg-transparent
        border-2
        border-darkBlue
        rounded-[10px]                                  
        py-[13px]
        px-4
        text-lg
        text-black
        placeholder:text-darkBlue/50
    "
        />
    );
}

export default Input;
