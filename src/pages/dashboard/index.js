import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'


const Data = ({
    hari,
    tanggal,
    waktu,
    agenda,
    lokasi,
    media,
    progress,
    ket,
    no
}) => {
    return(
    <tr>
        <td scope="row">{no}</td>
        <td>{hari}</td>
        <td>{tanggal}</td>
        <td>{waktu}</td>
        <td>{agenda}</td>
        <td>{lokasi}</td>
        <td>{media}</td>
        <td>{progress}</td>
        <td>{ket}</td>
    </tr>
    )
}


function Dashboard() {

    
        const [users, setUsers] = useState([])

        useEffect(() => {
            getData()
        }, [])

        const getData = () => {
            axios
            .get( 'https://sheet.best/api/sheets/a7037885-7b13-47bc-8963-4e49d36b2a0e',)
            .then((res) => {
                console.log('res', res)
                setUsers(res.data)
            })
        }
 
    return (
        <div className='container-fluid'>
            <h1>DATA FROM GOOGLE SHEET</h1>
            <br/>  
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Hari</th>
                        <th scope="col">Tanggal</th>
                        <th scope="col">Waktu</th>
                        <th scope="col">Agenda</th>
                        <th scope="col">Lokasi</th>
                        <th scope="col">Media</th>
                        <th scope="col">Progress</th>
                        <th scope="col">Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return(
                        <Data 
                            hari={user.Hari}
                            tanggal={user.tanggal}
                            waktu={user.Waktu}
                            agenda={user.agenda}
                            media={user.media}
                            lokasi={user.Lokasi}
                            progress={user.progress}
                            ket={user.ket}/>
                            )
                            })}
                </tbody>
                </table>
                 
        </div>
        )
    }

export default Dashboard
