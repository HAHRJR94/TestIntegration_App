import React, { useState, useEffect, useContext } from 'react'
import { testContext } from '../../context/testContext'

import Description from '../Description'
import FormTest from '../Forms/FormTest'
import Spinner from '../Spinner'

const AuthQuery = ({ history }) => {
  const { setDataComponent } = useContext(testContext)
  // const [responsible, setResponsible] = useState({})
  const [request, setRequest] = useState(false)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const consultarAPI = async () => {
      const token = JSON.parse(localStorage.getItem('token'))

      if (request) {
        try {
          const consulta = await fetch('http://bankapimaai.azurewebsites.net/api/Query', {
            headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'application/json'
            }
          })
          
          //Send data to context
          setDataComponent({
            title: 'Auth & Query Integration',
            dateTime: new Date().toJSON(),
            status: consulta.status !== 200 ? 'Error' : 'Success',
            comments: consulta.status !== 200 ? consulta.statusText : 'Test Successful',
          })
        } catch (error) {
          console.log(error)
        }
      }
    }
    
    consultarAPI() //eslint-disable-next-line
  }, [request])

  const spinner = () => {
    setTimeout(() => {
      setLoad(false)
      history.push('/')
    }, 3000)

    return (
      <>
        <h1 className='Display-4 text-center'>Running...</h1>
        <Spinner />
      </>
    )
  }

  return (
    <div className='container vh-100'>
      <h1 className='text-primary text-center mt-4'>Auth & Query Test</h1>
      <Description test='Query' />

      {!load ? <FormTest setRequest={setRequest} setLoad={setLoad} /> : spinner()}
    </div>
  )
}

export default AuthQuery
