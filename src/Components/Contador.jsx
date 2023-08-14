import React from 'react'

const Contador = (props) => {
  return (
    <div>
      <div class="contador">
        <button onClick={()=>props.setCount(props.count +1)}>Aumentar</button>
        <button onClick={()=>props.setCount(props.count -1) }>Disminuir</button>
        <button onClick={()=>props.setCount(0)}>Reset</button>
      </div>
    </div>
  )
}

export default Contador