import React, { useState } from 'react'
import './style.scss'

const Count = () => {
  const [count, setCount] = useState(0)

  const addCount = () => {
    setCount(count + 1)
  }

  const deleteCount = () => {
    setCount(count - 1)
  }

  return (
    <div className='example-count'>
      <div className="container">
        <div className="chevron chevron-up" onClick={addCount}></div>
        <div className="number">
          {count}
        </div>
        <div className="chevron chevron-down" onClick={deleteCount}></div>
      </div>
    </div>
  )
}

export default Count
