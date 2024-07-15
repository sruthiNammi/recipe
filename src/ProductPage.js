import React from 'react'

const ProductPage = (info) => {
    const data=info.data;
    //console.log(data);
  return (
    <div style={{margin:'10px',display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        {data && data.map((r,index)=>(
            <div key={index} style={{display:'flex', flexDirection:'column',padding:'10px',border:'10px',width:'330px',height:'auto',alignItems:'center',borderRadius:'2px',borderColor:'black',borderStyle:"solid",margin:'13px'}}>
                <img src={r.recipe.image} alt="rimage" style={{width:'170px',height:'170px'}}/>
                <div style={{padding:'12px'}}>
                <p style={{fontWeight:'bold'}}>{r.recipe.label}</p>
                <p><span style={{fontWeight:'bold'}}>Calories: </span>{r.recipe.calories}</p>
                <p style={{fontWeight:'bold'}}>Ingredients</p>
                <ul>
                {r.recipe.ingredients.map((i,index)=>(<li key={index}>{i.text}</li>))}
                </ul>
                </div>
            </div>
))}
    </div>
  )
}

export default ProductPage