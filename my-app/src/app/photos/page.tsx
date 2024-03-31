"use client"

import React, { useState, useEffect } from "react";

async function getPhotos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await res.json();

    return photos;
    
}

export default function Page() {

    const [photos, setPhotos] = useState([]);

    const intialPhotos = async () => {
        const photos = await getPhotos();
        setPhotos(photos);
    };

    useEffect(() => {
        intialPhotos();
        console.log(photos);
    },[]);

    return (
    <div>
        <h1>Photos</h1>
        {photos.length > 0 ? (
        <ul>
            {photos.map((photo: any) => (
                <li key={photo.id}>
                    <h2>{photo.title}</h2>
                    <img src={photo.thumbnailUrl} alt={photo.title} />
                </li>
            ))}
        </ul>
)  : (
    <p>Loading...</p>
)}
        </div>
    );
}
