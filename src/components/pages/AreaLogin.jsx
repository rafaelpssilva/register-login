import React from "react";
import axios from "axios";

function AreaLogin() {
    const [dataUser, setDataUser] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        axios
            .get("https://6330e033591935f3c8965331.mockapi.io/registerapi/user")
            .then((res) => {
                if (res.status === 200) {
                    setLoading(() => false);
                    return setDataUser(res.data);
                }
            });
    }, []);

    if (loading) {
        return <p>Loading</p>;
    }

    return (
        <section className="p-10 text-white font-SegoeUI">
            <h2 className="font-Roboto text-2xl text-apresentation font-bold">
                Área de Login
            </h2>

            {loading === false &&
                dataUser.map(({ email, course }) => (
                    <div className="my-2">
                        <p>
                            <span className="text-apresentation">Email:</span>{" "}
                            {email}
                        </p>
                        <p>
                            <span className="text-apresentation">Curso:</span>{" "}
                            {course}
                        </p>
                    </div>
                ))}
        </section>
    );
}

export default AreaLogin;

// URL API = https://6330e033591935f3c8965331.mockapi.io/registerapi/user
