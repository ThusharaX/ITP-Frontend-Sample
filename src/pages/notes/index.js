import React, { useEffect, useState } from "react";
import axios from "axios";

import NewNote from "./new-note";

const baseURL = process.env.REACT_APP_BACKEND_URL;

const Notes = () => {

    // State
    const [data, setData] = useState([]);

    // Fetch data from backend
    useEffect(() => {
        axios.get(baseURL)
            .then(response => setData(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <hr />
            <h1>Notes</h1>

            <ul>
                {data.map(note => (
                    <li key={note._id}>
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>

                        {/* Delete button */}
                        <button
                            onClick={() => {
                                axios.delete(`${baseURL}/${note._id}`)
                                    .then(response => {
                                        console.log(response);
                                        setData(data.filter(item => item._id !== note._id));
                                    })
                                    .catch(error => console.log(error));
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            <hr />
            <NewNote />
            <hr />
        </div>
    )
}

export default Notes
