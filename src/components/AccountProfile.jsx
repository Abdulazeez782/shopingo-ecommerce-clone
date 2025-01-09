import React from 'react'

const AccountProfile = ({activeSection}) => {
  return (
    <article className={`${(activeSection === "Dashboard") ? "block" : "hidden"}`}>
        <h1>Hello Oludare Ajadi (not Oludare Ajadi? <a>Logout</a>)</h1>
        <p>From your account dashboard you can view your Recent Orders, manage your shipping and billing addesses and edit your password and account details</p>
    </article>
  )
}

export default AccountProfile