import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function AxiosEffect(){
    const [data,setData] = useState([])
    const API = 'https://jsonplaceholder.typicode.com/posts'
    Axios.get(API)
    useEffect(() => {
        async function calling(){
            const response = await Axios.get(API)
            console.log(response.data)
            setData(response.data)
        }
        calling()
},[API])
    return (
        <div>
            <h1>Axios Effect</h1>
            {data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
        </div>

    )
}
export default AxiosEffect;
