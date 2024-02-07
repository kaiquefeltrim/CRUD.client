import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import ModalService from './ModalService';



export const ServiceTable = () => {
    
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    const { id } = useParams()
    const [servtable, setServiceTable] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3030/service/' + id)
            .then(res => setServiceTable(res.data))
            .catch(err => console.log(err))
    }, [])
    const handleDeleteService = (id) => {
        axios.delete("http://localhost:3030/deleteservice/" + id )
            .then(res => window.location.reload())
            .catch(err => console.log(err))


    }
    return (
        <div className=" flex  justify-center min-h-screen  bg-gray-700 ">
            <div className="relative   overflow-x-auto shadow-md sm:rounded-lg flex flex-col w-full items-center bg-gray-600">
                <div >
                    <button data-modal-target="ModalService" data-modal-toggle="ModalService" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={openModal} >Open Modal</button>
                    {modalIsOpen ? <ModalService/> : null }
                </div>

                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                E-mail
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Celular
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Data
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            servtable.map(servtable =>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={servtable.service_id}>
                                    <td className="px-6 py-4" >{servtable.serv_name}</td>
                                    <td className="px-6 py-4">{servtable.serv_money}</td>
                                    <td className="px-6 py-4">{servtable.cost}</td>
                                    <td className="px-6 py-4">{servtable.finish_date}</td>
                                    <td className="flex  my-auto ">
                                        <button type='button' id='edit' className='me-2 bg-blue-700 hover:bg-blue-800 text-white  mb-4 mt-4 font-medium  py-2 px-4 mb-4 rounded-full shadow-md'><a href={`/update/${servtable.service_id}`}>Edit</a></button>
                                        <button type='button' onClick={() => handleDeleteService(servtable.service_id)} className=' bg-blue-700 hover:bg-blue-800 text-white  mb-4 mt-4 font-medium py-2 px-4  mb-4 rounded-full shadow-md  '>Excluir</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
