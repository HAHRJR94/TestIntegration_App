import React, { useState, useEffect, useContext } from 'react'
import { testContext } from '../../context/testContext'

import Description from '../Description'
import FormTest from '../Forms/FormTest'

const AuthDeposit = () => {

  const { setDataComponent } = useContext(testContext)
  const [request, setRequest] = useState(false)

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))

    const consultarAPI = async () => {
      if(request){
        await fetch('http://bankapimaai.azurewebsites.net/api/Deposit', {
        method: 'POST',
        body: JSON.stringify({ amount: 100, accountToTransfer: 50 }),
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .catch(error => {
          console.log(error)
          setDataComponent({
            title: 'Auth & Deposit Integration',
            dateTime: new Date().toJSON(),
            status: error,
            comments: 'Test Failed'
          })
        })
        .then(response => {
          console.log(response.status)
          setDataComponent({
            title: 'Auth & Deposit Integration',
            dateTime: new Date().toJSON(),
            status: 'Success',
            comments: 'Test Successful'
          })
        })
      }
      
    }

    consultarAPI() //eslint-disable-next-line
  }, [request])

  return (
    <div className='container vh-100'>
      <h1 className='text-primary text-center mt-4'>Auth & Deposit Test</h1>
      <Description test='Deposit'/>

      <FormTest setRequest={setRequest} />
    </div>
  )
}

export default AuthDeposit
