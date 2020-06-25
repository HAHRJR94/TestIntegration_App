import React from 'react'

const Description = ({ test }) => {
  return (
    <div className='alert alert-success mt-4'>
      <h3 className='alert-heading text-center'>Description</h3>
      <hr />
      <p>
        This test serves to check the reability of the <strong>{test}</strong> area. To
        start you must write your <strong>name like responsible of the test</strong>
      </p>
    </div>
  )
}

export default Description
