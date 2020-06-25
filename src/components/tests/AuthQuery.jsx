import React, { useState, useEffect, useContext } from 'react'
import { testContext } from '../../context/testContext'

import Description from '../Description'
import FormTest from '../Forms/FormTest'

const AuthQuery = () => {
  const { setDataComponent } = useContext(testContext)
  // const [responsible, setResponsible] = useState({})
  const [request, setRequest] = useState(false)

  useEffect(() => {
    const consultarAPI = async () => {
      const token = JSON.parse(localStorage.getItem('token'))

      const consulta = await fetch('http://bankapimaai.azurewebsites.net/api/Query', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })
      const response = await consulta.json()

      if (response) {
        setDataComponent({
          title: 'Auth & Query Integration',
          dateTime: new Date().toJSON(),
          status: 'Success',
          comments: 'Test Successful'
        })
        setRequest(true)
      } else {
        setDataComponent({
          title: 'Auth & Query Integration',
          dateTime: new Date().toJSON(),
          status: 'Error',
          comments: 'Test Successful'
        })
      }
    }

    consultarAPI() //eslint-disable-next-line
  }, [request])

  return (
    <div className='container vh-100'>
      <h1 className='text-primary text-center mt-4'>Auth & Query Test</h1>
      <Description test='Query' />

      <FormTest setRequest={setRequest} />
    </div>
  )
}

export default AuthQuery
