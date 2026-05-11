import React from 'react'

const ServerErrors = ({errors}) => {
  return (
    <div>
        <div className="alert alert-danger m-3 mb-0">
        <h6 className="alert-heading fw-bold">
          ⚠️ Please fix the following errors:
        </h6>
        <hr />
        <ul className="mb-0">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>      
    </div>
  )
}

export default ServerErrors
