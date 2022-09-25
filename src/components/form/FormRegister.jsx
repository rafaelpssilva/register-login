import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Close from "../../assets/Close";
import Input from "./Input";

import axios from "axios";

function FormRegister({ dataUsers }) {
    const [newUserEMail, setNewUSerEmail] = React.useState("");
    const [newCourse, setNewCourse] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [newConfirmPassword, setNewConfirmPassword] = React.useState("");

    console.log(`
email: ${newUserEMail}
course: ${newCourse}
password: ${newPassword}
confirm password: ${newConfirmPassword}
`);

    function confirmUserPassword(password, confirmPassword) {
        if (password === confirmPassword) {
            return console.log("está tudo ok");
        } else {
            return console.log("as senhas são diferentes");
        }
    }

    function sendUserDataAPI() {
        axios.post(
            "https://6330e033591935f3c8965331.mockapi.io/registerapi/user",
            {
                email: newUserEMail,
                course: newCourse,
                password: newPassword,
            }
        );
    }

    function validateForm(e) {
        e.preventDefault();

        if (newUserEMail.length <= 0) {
            return console.log(console.log("nome não preenchido"));
        }
        if (newCourse.length <= 0) {
            return console.log("curso nao preenchido");
        }
        if (newPassword <= 0) {
            return console.log("senha não preenchido");
        }
        if (newConfirmPassword.length <= 0) {
            return console.log("senha de confirmação não preenchido");
        }

        confirmUserPassword(newPassword, newConfirmPassword);

        sendUserDataAPI();

        setNewUSerEmail("");
        setNewCourse("");
        setNewPassword("");
        setNewConfirmPassword("");

        console.log(dataUsers.map((user) => console.log(user)));
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger className="bg-yellow py-4 px-16 rounded-2xl w-4/5 text-[#1B1A40] font-semibold">
                Create Account
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
                <Dialog.Content className="fixed overflow-auto bg-formColor p-6 text-black top-[16%] left-1/2 -translate-x-1/2 w-full rounded-t-[40px]">
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
                                value={newUserEMail}
                                handleChange={setNewUSerEmail}
                                required
                            />
                            <Input
                                type="text"
                                placeholder="course"
                                id="user-course-register"
                                name="user-course-register"
                                value={newCourse}
                                handleChange={setNewCourse}
                                required
                            />
                            <Input
                                type="password"
                                placeholder="password"
                                name="user-password-register"
                                id="user-password-register"
                                value={newPassword}
                                handleChange={setNewPassword}
                                required
                            />
                            <Input
                                type="password"
                                placeholder="confirm password"
                                name="user-confirm-password-register"
                                id="user-confirm-password-register"
                                value={newConfirmPassword}
                                handleChange={setNewConfirmPassword}
                                required
                            />
                        </div>

                        <div className="mt-5 w-full">
                            <button
                                className="bg-darkBlue w-full py-4 px-16 rounded-2xl text-yellow font-semibold"
                                onClick={(e) => validateForm(e)}
                            >
                                Login
                            </button>
                        </div>

                        <div className="mt-3 text-center">
                            <p className="text-lg">
                                Already have account?{" "}
                                <span className="text-[#EF5858] font-medium">
                                    Login
                                </span>
                            </p>
                        </div>
                    </form>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}

export default FormRegister;
