import React, { useContext, useRef } from 'react'
import { testContext } from '../../context/testContext'

const FormTest = ({ setRequest, setLoad }) => {
  const { setDataForm } = useContext(testContext)
  const responsible = useRef('')

  const handleSubmit = e => {
    e.preventDefault()

    if (responsible === '') {
      return
    }

    setDataForm({ responsible: responsible.current.value })
    setLoad(true)
    setRequest(true)
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
            <button type='submit' className='btn btn-success btn-block'>
              Comenzar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormTest
