import React, { useContext, useRef } from 'react'
import { testContext } from '../../context/testContext'

const FormTest = ({ setRequest, history }) => {
  const { setDataForm } = useContext(testContext)
  const responsible = useRef('')

  const handleSubmit = e => {
    e.preventDefault()

    if (responsible === '') {
      // TODO:Show alert if responsible is void
      return
    }

    // TODO: Send responsible to component
    setRequest(true)
    setDataForm({responsible: responsible.current.value})

    history.push('/')
  }

  return (
    <div className='row justify-content-center mt-5'>
      <div className='card col-md-8'>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <legend className='text-center'>Test Integration</legend>
            <div className='form-group'>
              <label>User Name</label>
              <input
                type='text'
                className='form-control'
                name='responsible'
                ref={responsible}
              />
            </div>
            <button type='button' className='btn btn-success btn-block' onClick={() => {
              
            }}>Comenzar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormTest
