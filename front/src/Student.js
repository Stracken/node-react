import React from "react";
import { useEffect, useState} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

function Student() {

    const [students, setStudents] = useState([]);

    useEffect (() => {
        axios.get('http://localhost:8081/')
        .then(res => setStudents(res.data))
        .catch(err => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8081/student/${id}`);
            window.location.reload()
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <div className="">
            <div className="">
                
                <Link to="/create"><button className="">Ajouter</button></Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nom </th>
                            <th>Email</th>
                        </tr>
                    </thead>
                <tbody>
                    {
                        students.map((data, i) => (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>
                                    <Link to={`/update/${data.id}`}><button className="">Modifier</button></Link>
                                    <button className="" onClick={e => handleDelete(data.id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student;