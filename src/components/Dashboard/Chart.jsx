import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const Chart = ({ tests }) => {

  //Get total test
  const deposit = tests.filter(x => x.title === 'Auth & Deposit Integration')
  const query = tests.filter(x => x.title === 'Auth & Query Integration')
  const transfer = tests.filter(x => x.title === 'Auth & WireTransfer Integration')
  const withdrawal = tests.filter(x => x.title === 'Auth & WithDrawal Integration')
  

  const data = {
    labels: [
      'Auth & Deposit',
      'Auth & Query',
      'Auth & WireTransfer',
      'Auth & WithDrawal'
    ],
    datasets: [
      {
        data: [deposit.length, query.length, transfer.length, withdrawal.length],
        backgroundColor: ['#0BEA08', '#36A2EB', '#FFCE56', '#FF5733'],
        hoverBackgroundColor: ['#0BEA08', '#36A2EB', '#FFCE56', '#FF5733']
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Test Integration App',
      fontSize: 18
    },
    legend: {
      display: true,
      position: 'bottom',
      fullWidth: true,
      reverse: false,
      labels: {
        fontColor: 'rgb(255, 99, 132)'
      }
    }
  }

  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  )
}

export default Chart
