import React from 'react'

const Display = ({ value }) => {
  return (
    <header className="display">
      <h1 className="display__value">
        {
          value
        }
      </h1>
    </header>
  )
}

export default Display;