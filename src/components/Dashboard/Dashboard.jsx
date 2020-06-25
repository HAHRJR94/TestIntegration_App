import React, { useContext, useEffect } from 'react'
import { testContext } from '../../context/testContext'

import Test from './Test'
import Chart from './Chart'
import Statistics from './Statistics'

const Dashboard = () => {
  const { tests, setTests } = useContext(testContext)

  useEffect(() => {
    const dashboardApi = async () => {
      const consulta = await fetch('http://bankapimaai.azurewebsites.net/api/TestHistory')
      const respuesta = await consulta.json()

      setTests(respuesta)
    }

    dashboardApi()
  }, [setTests])

  return (
    <section className='p-2'>
      <div className='container-fluid row justify-content-around my-5'>
        <div className="col-md-6">
          <Chart tests={tests} />
        </div>
        <div className="col-md-6">
          <Statistics tests={tests} />
        </div>
      </div>
      <hr/>
      <div className='container mt-4'>
        <h1 className='text-center text-danger'>Dashboard</h1>
        <table className='table mt-4'>
          <thead className='bg-primary table-dark'>
            <tr className='text-center font-weight-bold'>
              <th scope='col'>ID</th>
              <th scope='col'>Test</th>
              <th scope='col'>Status</th>
              <th scope='col'>Comments</th>
              <th scope='col'>DateTime</th>
              <th scope='col'>Responsible</th>
            </tr>
          </thead>
          <tbody>
            {tests.length > 0 && tests.map(test => <Test key={test.id} test={test} />)}
          </tbody>
        </table>
        {tests.length === 0 ? (
          <h2 className='text-center text-danger'>There are not tests</h2>
        ) : null}
      </div>
    </section>
  )
}

export default Dashboard
