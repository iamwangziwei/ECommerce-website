import React from 'react'

export default function MessageBox(props) {
    return (
        <div className ={`alert alert-${props.variant || 'info'}`}>
            {/* the content of props */}
            {props.children}  
        </div>
    )
}
