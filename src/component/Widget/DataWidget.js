import React from 'react'
import Widget from './Widget'

function DataWidget() {
    const data1 = {
        value1: 'Wallet',
        value2: '$143,432',
        value3: 'Your bank balance'
      };
      const data2 = {
        value1: 'PieChart',
        value2: '$56,35,000',
        value3: 'Revenue'
      };
      const data3 = {
        value1: 'PersonCheck',
        value2: '7',
        value3: 'Employee Working today'
      };
      const data4 = {
        value1: 'Cash',
        value2: '$3,28,000',
        value3: "This week's card spending"
      };

  return (
    <>
         <Widget data = {data1}/>
         <Widget data = {data2}/>
         <Widget data = {data3}/>
         <Widget data = {data4}/>
    </>
  )
}

export default DataWidget
