import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./componets/Search";
import './App.css'
function App() {
const [list, setList]=useState([]);
const [search ,setSearch]=useState('');
let searchEli;

useEffect(() => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => setList(response.data.results))
    .catch((error) => console.log(error));
},[]);

const getSearch =(e)=>{
  console.log(list);
  searchEli= e.target.value
  setSearch(searchEli)
}
  return (
    <>
      <div>
        <div className="contener">
        </div>
        <div>
          <input className='searchinput' type='text' onChange={getSearch} placeholder='Search ...' />
        </div>
        <div className='main'>
          <Search search={search} setSearch={setSearch} list={list} setList={setList} />
        </div>
      </div></>
  );
}
export default App;
