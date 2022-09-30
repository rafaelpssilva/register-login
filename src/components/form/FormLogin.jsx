import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Close from "../../assets/Close";
import Input from "./Input";

import axios from "axios";

function FormLogin() {
    const [userEmail, setUserEmail] = React.useState("");
    const [userPassword, setUserPassword] = React.useState("");

    function LoginValidate(e) {
        e.preventDefault();

        window.location.replace("https://registerapi.vercel.app/login");
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="py-4 px-16 rounded-2xl w-4/5 border-yellow text-yellow border-[3px] font-semibold ">
                Login
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
                <Dialog.Content className="fixed bg-formColor p-6 text-black bottom-[0%] left-1/2 -translate-x-1/2 w-full rounded-t-[40px]">
                    <div className="flex items-center justify-between">
                        <div className="text-darkBlue">
                            <Dialog.Description className="text-xl leading-7">
                                Welcome Back!!!
                            </Dialog.Description>
                            <Dialog.Title className="text-3xl font-bold mt-1 mb-6">
                                Login
                            </Dialog.Title>
                        </div>
                        <Dialog.Close>
                            <Close />
                        </Dialog.Close>
                    </div>
                    <form action="">
                        <div className="flex flex-col gap-6">
                            <Input
                                type="email"
                                name="user-email"
                                placeholder="info@example.com"
                                id="user-id"
                                value={userEmail}
                                handleChange={setUserEmail}
                                required
                            />
                            <Input
                                type="password"
                                placeholder="password"
                                id="login-password"
                                name="login-password"
                                value={userPassword}
                                handleChange={setUserPassword}
                                required
                            />
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                />
                                <label htmlFor="remeber" className="text-xs">
                                    Remember me
                                </label>
                            </div>
                            <span className="text-xs">Forgot Password?</span>
                        </div>

                        <div className="mt-5 w-full">
                            <button
                                className="bg-darkBlue w-full py-4 px-16 rounded-2xl text-yellow font-semibold"
                                onClick={(e) => LoginValidate(e)}
                            >
                                Login
                            </button>
                        </div>
                        <div className="mt-3 text-center">
                            <p className="text-lg">
                                Don´t have an account?{" "}
                                <span className="text-[#EF5858] font-medium">
                                    Register
                                </span>
                            </p>
                        </div>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default FormLogin;
