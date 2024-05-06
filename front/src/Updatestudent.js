import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Update() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    function handleSubmit(event) { 
        event.preventDefault(); 
        const updatedStudent = {name, email};
        axios.put(`http://localhost:8081/update/${id}`, updatedStudent)
        .then(res => {
            console.log(res);
            navigate('/'); 
        }).catch(err => console.log(err)); 
    }

    return (
        <>
            <div className="">
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <div className="">
                            <h2>Modifier un étudiant</h2>
                            <div className="">
                                <label htmlFor="">Ancien nom {name}</label>
                                <input type= "text" placeholder="Entrez votre nom" className="" onChange = {e => setName(e.target.value)}/>
                            </div>
                            <div className="">
                                <label htmlFor="">Ancien email {email}</label>
                                <input type="email" placeholder="Exemple@exemple.com" className="" onChange = {e => setEmail(e.target.value)}/>
                            </div>
                            <button className="">Ok</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update;