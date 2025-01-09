import React from 'react'
import Button from './Button'

const tableRow = [
    {cardName: "Visa ending in 8764", expires: "08/28", actions: [
        {label: "Delete"}
    ]},
    {cardName: "Visa ending in 0936", expires: "03/26", actions: [
        {label: "Delete"},
        {label: "Make Default"},
    ]}
]

const AccountPayments = ({activeSection}) => {
  return (
    <article
        className={`${(activeSection === "Payment Methods" ? "block" : "hidden")}`}
    >
        <table>
            <thead>
                <tr>
                    <th className='text-left'>Method</th>
                    <th className='text-left'>Expires</th>
                </tr>
            </thead>

            <tbody>
                {tableRow.map((row, index) => (
                    <tr key={index}>
                        <td className='pr-5'>{row.cardName}</td>
                        <td className='pr-5'>{row.expires}</td>
                        {row.actions.map((action, index) => (
                           <td><Button key={index} label={action.label}/></td> 
                        ))}
                        
                    </tr>
                ))}
                
            </tbody>
        </table>

        <div className='w-[15rem] mt-5'>
            <Button label={"Add New Payment Method"}/>
        </div>
        
    </article>
  )
}

export default AccountPayments