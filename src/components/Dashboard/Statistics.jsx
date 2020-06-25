import React from 'react'

const Statistics = ({ tests }) => {
  const deposit = tests.filter(x => x.title === 'Auth & Deposit Integration')
  const totalDepositSuccess = deposit.filter(x => x.status === 'Success')
  const totalDepositError = deposit.length - totalDepositSuccess.length

  const query = tests.filter(d => d.title === 'Auth & Query Integration')
  const totalQuerySuccess = query.filter(x => x.status === 'Success')
  const totalQueryError = query.length - totalQuerySuccess.length

  const transfer = tests.filter(x => x.title === 'Auth & WireTransfer Integration')
  const totalTransferSuccess = transfer.filter(x => x.status === 'Success')
  const totalTransferError = transfer.length - totalTransferSuccess.length
  
  const withdrawal = tests.filter(x => x.title === 'Auth & WithDrawal Integration')
  const totalWithDrawalSuccess = withdrawal.filter(x => x.status === 'Success')
  const totalWithDrawalError = withdrawal.length - totalWithDrawalSuccess.length
  

  return (
    <div>
      <h2 className='text-center text-primary'>Statistics Table</h2>
      <table className='table table-hover'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>Test Name</th>
            <th scope='col'>Total Success</th>
            <th scope='col'>Total Error</th>
            <th scope='col'>Total Tests</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Auth & Deposit Integration</td>
            <td className='text-center'>{totalDepositSuccess.length}</td>
            <td className='text-center'>{totalDepositError}</td>
            <td className='text-center'>{deposit.length}</td>
          </tr>
          <tr>
            <td>Auth & Query Integration</td>
            <td className='text-center'>{totalQuerySuccess.length}</td>
            <td className='text-center'>{totalQueryError}</td>
            <td className='text-center'>{query.length}</td>
          </tr>
          <tr>
            <td>Auth & WireTransfer Integration</td>
            <td className='text-center'>{totalTransferSuccess.length}</td>
            <td className='text-center'>{totalTransferError}</td>
            <td className='text-center'>{transfer.length}</td>
          </tr>
          <tr>
            <td>Auth & WithDrawal Integration</td>
            <td className='text-center'>{totalWithDrawalSuccess.length}</td>
            <td className='text-center'>{totalWithDrawalError}</td>
            <td className='text-center'>{withdrawal.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
