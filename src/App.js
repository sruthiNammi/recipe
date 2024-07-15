import React, { useEffect, useState } from 'react'
import ProductPage from './ProductPage';
const App = () => {
  const [query,setQuery]=useState("");
  const [info,setInfo]=useState([]);
  const YOUR_APP_ID="7c578823";
  const YOUR_APP_KEY="7e475d009c6a081df322d533d7004460";
  const handleChange=(e)=>{
    setQuery(e.target.value);
  }
  const handleSearch=async ()=>{
  const data=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`);
  const json=await data.json();
  setInfo(json.hits);
  }
  useEffect(()=>{

  },[info]);
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',padding:'30px'}}>
      <div>
      <input value={query} onChange={handleChange}/>
      <button onClick={handleSearch}>Search</button>
      </div>
      {info && <ProductPage data={info}/>}
    </div>
  )
}

export default App