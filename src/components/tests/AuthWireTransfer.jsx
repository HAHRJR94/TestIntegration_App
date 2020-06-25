import React, { useState, useEffect, useContext } from 'react';
import { testContext } from '../../context/testContext'

import Description from '../Description'
import FormTest from '../Forms/FormTest'

const AuthWireTransfer = () => {
  const { setDataComponent } = useContext(testContext)
  const [request, setRequest] = useState(false)

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem('token'))

    const consultarAPI = async () => {
      if(request){
        await fetch('http://bankapimaai.azurewebsites.net/api/WireTransfer', {
        method: 'POST',
        body: JSON.stringify({ amount: 100, accountToTransfer: 100 }),
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .catch(error => {
          console.log(error)
          setDataComponent({
            title: 'Auth & WireTransfer Integration',
            dateTime: new Date().toJSON(),
            status: error,
            comments: 'Test Failed'
          })
        })
        .then(response => {
          console.log(response)
          setDataComponent({
            title: 'Auth & WireTransfer Integration',
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
      <h1 className='text-primary text-center mt-4'>Auth & WireTransfer Test</h1>
      <Description test='WireTransfer'/>

      <FormTest setRequest={setRequest} />
    </div>
  );
};

export default AuthWireTransfer;