import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import Close from "../../assets/Close";
import Input from "../form/Input";

function Buttons() {
    return (
        <section className="flex flex-col justify-center items-center gap-4 text-xl font-SegoeUI w-full">
            <Dialog.Root>
                <Dialog.Trigger className="bg-yellow py-4 px-16 rounded-2xl w-4/5 text-[#1B1A40] font-semibold">
                    Create Account
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
                    <Dialog.Content className="fixed bg-formColor p-6 text-black top-[16%] left-1/2 -translate-x-1/2 w-full rounded-t-[40px]">
                        <div className="flex items-center justify-between">
                            <div className="text-darkBlue">
                                <Dialog.Description className="text-xl leading-7">
                                    Hello...
                                </Dialog.Description>
                                <Dialog.Title className="text-3xl font-bold mt-1 mb-6">
                                    Register
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
                                    name="user-email-register"
                                    placeholder="info@example.com"
                                    id="user-email-register"
                                />
                                <Input
                                    type="text"
                                    placeholder="course"
                                    id="user-course-register"
                                    name="user-course-register"
                                />
                                <Input
                                    type="password"
                                    placeholder="password"
                                    name="user-password-register"
                                    id="user-password-register"
                                />
                                <Input
                                    type="password"
                                    placeholder="confirm password"
                                    name="user-confirm-password-register"
                                    id="user-confirm-password-register"
                                />
                            </div>

                            <div className="mt-5 w-full">
                                <button className="bg-darkBlue w-full py-4 px-16 rounded-2xl text-yellow font-semibold">
                                    Login
                                </button>
                            </div>

                            <div className="mt-3 text-center">
                                <p className="text-lg">
                                    Already have account?{" "}
                                    <sapn className="text-[#EF5858] font-medium">
                                        Login
                                    </sapn>
                                </p>
                            </div>
                        </form>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            <Dialog.Root>
                <Dialog.Trigger className="py-4 px-16 rounded-2xl w-4/5 border-yellow text-yellow border-[3px] font-semibold ">
                    Login
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
                    <Dialog.Content className="fixed bg-formColor p-6 text-black top-[36%] left-1/2 -translate-x-1/2 h-full w-full rounded-[40px]">
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
