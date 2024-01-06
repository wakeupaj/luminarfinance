import React, { useState } from 'react'
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);


const Dashboard = () => {

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard