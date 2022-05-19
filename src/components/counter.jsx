import React from "react"

const Counter=({value})=>{

    const [count,setCount] =React.useState(value)
    const clr={}
    if(count%2==1){
        clr.color="red"
    }
    else{
        clr.color="green"
    }
    
    return(
        <div>
          <h1> Counter App : <span style={clr}>{count}</span></h1>
          <button onClick={()=>setCount(count+1)}>increase</button>
          <button  onClick={()=>
             {if(count>0){setCount(count-1)}} 
             }>decrease</button>
         <button onClick={()=>setCount(count*2)}>double</button>
        </div>
    )
}
export default Counter