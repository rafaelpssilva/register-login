import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";

import { DividerHorizontalIcon, CheckIcon } from "@radix-ui/react-icons";

import Close from "../../assets/Close";
import Input from "../form/Input";

function Buttons({ openForm, setOpenForm }) {
    const [checked, setChecked] = React.useState("true");

    return (
        <section className="flex flex-col justify-center items-center gap-4 text-xl font-SegoeUI">
            <button
                className="bg-yellow w-fit py-4 px-16 rounded-2xl w-4/5 text-[#1B1A40] font-semibold"
                onClick={() => setOpenForm(!openForm)}
            >
                Create Account
            </button>

            <Dialog.Root>
                <Dialog.Trigger className="w-fit py-4 px-16 rounded-2xl w-4/5 border-yellow text-yellow border-[3px] font-semibold ">
                    Login
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
                    <Dialog.Content className="fixed bg-formColor p-6 text-black top-1/3 left-1/2 -translate-x-1/2 h-full w-full rounded-[40px]">
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
                                />
                                <Input
                                    type="password"
                                    placeholder="password"
                                    id="login-password"
                                    name="login-password"
                                />
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <input
                                        type="checkbox"
                                        name="remember"
                                        id="remember"
                                    />
                                    <label
                                        htmlFor="remeber"
                                        className="text-xs"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <span className="text-xs">
                                    Forgot Password?
                                </span>
                            </div>

                            <div className="mt-5 w-full">
                                <button className="bg-darkBlue w-full py-4 px-16 rounded-2xl text-yellow font-semibold">
                                    Login
                                </button>
                            </div>
                            <div className="mt-3 text-center">
                                <p className="text-lg">
                                    Don´t have an account?{" "}
                                    <sapn className="text-[#EF5858] font-medium">
                                        Register
                                    </sapn>
                                </p>
                            </div>
                        </form>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </section>
    );
}

export default Buttons;
