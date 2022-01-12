import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_URL;

const NewNote = () => {
    const navigate = useNavigate();
    
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'title') {
            setTitle(value);
        } else if (name === 'content') {
            setContent(value);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(baseURL, { title, content })
            .then(response => {
                navigate('/notes');
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h3>New Note</h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    name="title"
                    onChange={handleChange}
                />
                <br />
                <input
                    placeholder="Content"
                    value={content}
                    name="content"
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};


export default NewNote;