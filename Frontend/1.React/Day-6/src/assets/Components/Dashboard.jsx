import React from 'react'
import { useState } from 'react'

const Dashboard = ({user}) => {

    const {name,email,url}=user;

  return (
    <div className='w-fit bg-gray-300'>
        <div className="card border border-green-300 flex flex-col items-center">
            <div className="image">
                <img className='w-30' src={url} alt="" />
            </div>
            <div className="name">{name}</div>
            <div className="mail">{email}</div>
        </div>
    </div>
  )
}

export default Dashboard