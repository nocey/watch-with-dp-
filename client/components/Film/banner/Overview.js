import React from 'react'

export default function Overview({content}) {
    return (
        <div className='h-100 d-inline-block text-truncat col-12' style={{ textOverflow: 'ellipsis'}}>
            <h3>Overview</h3>
            <p>{content}</p>
        </div>
    )
}
