import React, { useState, useEffect, createContext } from 'react'
import Axios from 'axios'

export const testContext = createContext()

const Provider = props => {
  const [tests, setTests] = useState([])
  const [dataForm, setDataForm] = useState({})
  const [dataComponent, setDataComponent] = useState({})
  const [dataTest, setDataTest] = useState({})

  //Concatenate two objects
  useEffect(() => {
    const data = () => {
      if (
        Object.entries(dataForm).length === 0 ||
        Object.entries(dataComponent).length === 0
      )
        return

      const test = Object.assign({}, dataComponent, dataForm)

      setDataTest(test)
      setDataComponent({}) //Reset Object
      setDataForm({}) //Reset Object
    }

    data()
  }, [dataForm, dataComponent])

  //Authentication, save Token
  useEffect(() => {
    const guardarToken = async () => {
      await Axios.post('http://bankapimaai.azurewebsites.net/api/Authentication', {
        userName: 'maai',
        passWord: 'maai123'
      }).then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.token))
      })
    }

    guardarToken() //eslint-disable-next-line
  }, [])
  // console.log(test)

  // Send data test
  useEffect(() => {
    const sendTestAPI = async () => {
      const { title, status, comments, dateTime, responsible } = dataTest
      
      try {
        const respuesta = await fetch(
          'https://bankapimaai.azurewebsites.net/api/TestHistory/',
          {
            method: 'POST',
            body: JSON.stringify({
              title,
              status,
              comments,
              dateTime,
              responsible
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )

        console.log(respuesta)
      } catch (error) {
        console.log(error)
      }
    }

    sendTestAPI()
  }, [dataTest])

  return (
    <testContext.Provider
      value={{
        tests,
        dataTest,
        setTests,
        setDataForm,
        setDataComponent
      }}
    >
      {props.children}
    </testContext.Provider>
  )
}

export default Provider
