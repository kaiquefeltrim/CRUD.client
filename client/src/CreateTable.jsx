import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


export const CreateTable = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    date: ""
  })
  const navigate = useNavigate()
  const handleSave = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3030/create', values)
      .then(res => navigate('/'))
      .catch(err => console.log(err))
  }
  return (

    <div className="flex items-center bg-gray-700 justify-center h-screen">
      <div className="flex flex-col items-center bg-gray-900 mt-3 p-6 rounded-lg w-96">
        <h1 className="text-xl font-bold text-white mb-4">Novo Cliente</h1>
        <form className="w-full" onSubmit={handleSave}>
          <div className="mb-4">
            <label htmlFor="floating_email" className="text-gray-500 text-sm mb-1">Email address:</label>
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Enter your email"
              required
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-500 text-sm mb-1">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Enter your name"
              required
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="text-gray-500 text-sm mb-1">Data:</label>
            <input
              type="date"
              name="date"
              id="date"
              className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Select date"
              required
              onChange={(e) => setValues({ ...values, date: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="floating_phone" className="text-gray-500 text-sm mb-1">Phone Number:</label>
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="(11-11111-1111)"
              required
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-white font-medium rounded-lg text-sm py-2.5 w-full"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>


  )
}


