import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ModalService = ({ isOpen, onClose }) => {
  const { id } = useParams()
  const [values, setValues] = useState({
    serv_name: "",
    serv_money: "",
    cost: "",
    finish_date: "",
  })
  const handleSave = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3030/service/' + id, values)
      .then(res => window.location.reload())
      .catch(err => console.log(err))
  }

  return (
    <div id="ModalService" tabIndex="-1" aria-hidden="true" className={` modal ${isOpen ? 'is-open' : 'is-closed'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full md:inset-0 bg-gray-900 bg-opacity-50`}>
      <div className="relative p-4 w-full max-w-lg max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Novo Serviço
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form onSubmit={handleSave} className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Serviço</label>
                <input type="text" name="name" id="name" onChange={(e) => setValues({ ...values, serv_name: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" />
              </div>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <label htmlFor="serv_money" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Valor do Projeto</label>
                <input type="number" onChange={(e) => setValues({ ...values, serv_money: e.target.value })} name="serv_money" id="serv_money" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" />
              </div>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <label htmlFor="cost" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Custo</label>
                <input type="number" onChange={(e) => setValues({ ...values, cost: e.target.value })} name="cost" id="cost" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" />
              </div>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data de Entrega</label>
                <input type='date' onChange={(e) => setValues({ ...values, finish_date: e.target.value })} id="finish_date" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write product description here" />
              </div>
            </div>
            <button type="submit" className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Adicionar Serviço
            </button>
          </form>
        </div>
      </div>
    </div>


  );
};
export default ModalService;