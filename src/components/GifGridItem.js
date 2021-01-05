import React from 'react'

import {} from "animate.css";

export const GifGridItem = (  {id, title, url}  ) => {
    return (
        <div className="card animate__animated animate__flash">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
