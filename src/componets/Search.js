import React from 'react'
import PrintList from './PrintList';
function Search({list ,search ,setList}) {

    return (<>
      {list.filter((ele)=>{
        if (search==""){
          return ele
        }else if (ele.name.toLowerCase().includes(search.toLowerCase())||ele.species.toLowerCase().includes(search.toLowerCase())){
          return ele
        }
      }).map((element, index)=>{
        return <div className='card' kay={index}>
            <PrintList element={element} list ={list} setList={setList} />
            </div>
      })}
      </>);

}

export default Search
