import React, { useState, useEffect, useContext } from 'react'
import { testContext } from '../../context/testContext'

import Description from '../Description'
import FormTest from '../Forms/FormTest'
import Spinner from '../Spinner'

const AuthWireTransfer = ({ history }) => {
  const { setDataComponent } = useContext(testContext)
  const [request, setRequest] = useState(false)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))

    const consultarAPI = async () => {
      if (request) {
        try {
          const respuesta = await fetch(
            'http://bankapimaai.azurewebsites.net/api/WireTransfer',
            {
              method: 'POST',
              body: JSON.stringify({ amount: 100, accountToTransfer: 100 }),
              headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
              }
            }
          )

          //Send data to context
          setDataComponent({
            title: 'Auth & WireTransfer Integration',
            dateTime: new Date().toJSON(),
            status: respuesta.status !== 200 ? 'Error' : 'Success',
            comments: respuesta.status !== 200 ? respuesta.statusText : 'Test Successful',
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
      <h1 className='text-primary text-center mt-4'>Auth & WireTransfer Test</h1>
      <Description test='WireTransfer' />

      {!load ? <FormTest setRequest={setRequest} setLoad={setLoad} /> : spinner()}
    </div>
  )
}

export default AuthWireTransfer
