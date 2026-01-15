import React from 'react'
import ChildB from './ChildB'

function ChildA(props) {
  return (
    <div>
      this is A
      <br/>
      number:{props.num}<br/>
      string:{props.str}
      Ispassed={props.Ispassed}
      Ispassed={props.Ispassed.toString()}
      <br/>
      Array element
      {
        props.arr.map((v,i)=>(
            
            <div>{v}</div>
      ))
      }
      <br/>
      <ChildB num={props.num}/>

    </div>
  )
}

export default ChildA
