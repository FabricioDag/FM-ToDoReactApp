import React from 'react'

const Actionsarea = ({filter, setFilter, arrLen}) => {

  const handleClick = (value) =>{
    // console.log('chego'+ value)
    setFilter(value)
  }

  return (
    <div className="actionsArea">
      <p>{arrLen} items left</p>

        <div className="filters">
            
              <a onClick={() =>handleClick('All')} value="All">All</a>
              <a onClick={() =>handleClick('Completed')} value="Completed">Completed</a>
              <a onClick={() =>handleClick('Incomplete')} value="Incomplete">Active</a>
            
        </div>

        <p>Clear Completed</p>
    </div>
  )
}

export default Actionsarea