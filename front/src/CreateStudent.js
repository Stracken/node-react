import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function CreateStudent() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/create', {name, email})
        .then(res => {
            console.log("created Student", res);
            navigate("/");
        })
    }

    return (
        <>
            <div className="">
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <h2>Ajouter un étudiant</h2>
                            <div className="">
                                <label htmlFor="">Nom </label>
                                <input type= "text" placeholder="Entrez votre nom" className="" onChange = {e => setName(e.target.value)}/>
                            </div>
                            <div className="">
                                <label htmlFor="">Email </label>
                                <input type="email" placeholder="Exemple@exemple.com" className="" onChange = {e => setEmail(e.target.value)}/>
                            </div>
                            <button className="">Ajouter</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateStudent;