import React, { useState, useEffect, createContext } from 'react'
import Axios from 'axios'

export const testContext = createContext()

const Provider = props => {
  const [tests, setTests] = useState([])
  const [dataTest, setDataTest] = useState({})
  const [dataForm, setDataForm] = useState({})
  const [dataComponent, setDataComponent] = useState({})

  useEffect(() => {
    const data = () => {
      if (
        Object.entries(dataForm).length === 0 ||
        Object.entries(dataComponent).length === 0
      )
        return

      const test = Object.assign({}, dataComponent, dataForm)

      setDataTest(test)
    }

    data()
  }, [dataForm, dataComponent])

  //Save Token
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

  // TODO:Send data test
  useEffect(() => {
    const sendTestAPI = async () => {
      const { title, status, comments, dateTime, responsible } = dataTest
      await fetch('https://bankapimaai.azurewebsites.net/api/TestHistory/', {
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
      })
        .then(res => res.json())
        .catch(error => console.log(error))
        .then(response => {
          console.log(response)
        })
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
