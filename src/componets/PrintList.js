import React from 'react'
import Favorite from './Favorite'
function PrintList({element ,list ,setList }) {
const click=(e)=>{

}

    return (
        <>
        <div>
            <img src={element.image}/>
            <h3>{element.name}</h3>
            <h4>Gender   :{element.gender}</h4>
            <h4>Species  :{element.species}</h4>
            <Favorite list={list} setList={setList} element={element.name}/>
        </div>
    </>)
}

export default PrintList
