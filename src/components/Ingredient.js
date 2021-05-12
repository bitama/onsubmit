import React from 'react'

const Ingredient =(props)=>{
    const breadStyle ={
        backgroundColor:"brown"
    }
    return (
    <div>
        {
        props.text==="bread" ? <div style={breadStyle}>{props.text}</div>:
        <div>{props.text}</div>
        }
        {props.text}
    </div>
    )
}
export default Ingredient
