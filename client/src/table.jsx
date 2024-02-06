import React, { useEffect, useState } from 'react'
import axios from 'axios'



export const Table = () => {
    const [table, setTable] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3030')
            .then(res => setTable(res.data))
            .catch(err => console.log(err))
    }, [])
    const handleDelete = (id) => {
        axios.delete("http://localhost:3030/delete/" + id)
            .then(res => window.location.reload())
            .catch(err => console.log(err))
    }
    return (
        <div className=" flex  justify-center min-h-screen  bg-gray-700 ">
            <div className="relative   overflow-x-auto shadow-md sm:rounded-lg flex flex-col w-full items-center bg-gray-600">
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 mb-4 mt-4 rounded-full shadow-md" ><a href="/create">Novo Cliente</a></button>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-300 dark:border-gray-700">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                            table.map(table =>
                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={table.id}>
                                    <td className="px-6 py-4"><a href={`/service/${table.id}`}>{table.name}</a></td>
                                    <td className="px-6 py-4">{table.email}</td>
                                    <td className="px-6 py-4">{table.phone}</td>
                                    <td className="px-6 py-4">{table.date}</td>
                                    <td className="flex  my-auto ">
                                        <button type='button' id='edit' className='me-2 bg-blue-700 hover:bg-blue-800 text-white  mb-4 mt-4 font-medium  py-2 px-4 mb-4 rounded-full shadow-md'><a href={`/update/${table.id}`}>Edit</a></button>
                                        <button type='button' onClick={() => handleDelete(table.id)} className=' bg-blue-700 hover:bg-blue-800 text-white  mb-4 mt-4 font-medium py-2 px-4  mb-4 rounded-full shadow-md  '>Excluir</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
