import React from 'react'
import Button from './Button'

const tableRows = [
    {orderNumber: "#800", date: "January 6, 2022", status: "completed", total: "$100", actions: [
        {label: "view"}
    ]},
    {orderNumber: "#801", date: "January 6, 2022", status: "failed", total: "$100", actions: [
        {label: "view"},
        {label: "pay"},        
        {label: "cancel"},
    ]},
    {orderNumber: "#802", date: "January 6, 2022", status: "cancelled", total: "$100", actions: [
        {label: "view"},        
        {label: "pay"},
    ]},
    {orderNumber: "#802", date: "January 6, 2022", status: "completed", total: "$100", actions: [
        {label: "view"}
    ]},
    {orderNumber: "#803", date: "January 6, 2022", status: "completed", total: "$100", actions: [
        {label: "view"}
    ]},
    {orderNumber: "#804", date: "January 6, 2022", status: "completed", total: "$100", actions: [
        {label: "view"}
    ]},
]

const AccountOrders = ({activeSection}) => {
  return (
    <article 
        className={`${(activeSection === "Orders" ? "block" : "hidden")}`}
    >
        <table>
            <thead>
                <tr>
                    <th className='text-left'>Order</th>
                    <th className='text-left'>Date</th>
                    <th className='text-left'>Status</th>
                    <th className='text-left'>Total</th>
                    <th className='text-left'>Actions</th>
                </tr>
            </thead>

            <tbody>
                {tableRows.map((row, index) => (
                    <tr className='border-b-[1px] border-gray-300'>
                        <td className='p-3'>{row.orderNumber}</td>
                        <td className='p-3'>{row.date}</td>
                        <td 
                            className={`${(row.status === "completed" ? "bg-green-700 text-white" : "bg-red-700 text-white")} text-center p-3`}                                                    
                        >
                            {row.status}
                        </td>
                        <td className='p-3'>{row.total}</td>
                        {row.actions.map((action, index) => (
                           <td className='h-[5px]'><Button label={action.label}/></td> 
                        ))}                        
                    </tr>
                ))}
                
            </tbody>
        </table>
    </article>
  )
}

export default AccountOrders