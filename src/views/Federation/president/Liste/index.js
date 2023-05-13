import React, { useEffect, useState } from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
} from '@coreui/react';
import axios from "axios";
import { getBranchListe } from "src/Functions/Datas";

const qs = require('qs');

export default function Liste() {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const setLoad = async () => {

        setTimeout(() => {
            axios.post("http://localhost/cofedal-api/api/", qs.stringify({
                'action': 'find',
                'table': 'branch'
            })).then(resp => {
                setData(resp.data);
                console.log(data);
                setIsLoading(false)
            })
        }, 3000)
    }

    useEffect(() => {
        setLoad();
    }, [])
    if (!isLoading) {
        return (
            <>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>

                </table>
                {
                    isLoading ? <p>Liste des president de federatoon</p> : <p>yes</p>
                }
            </>
        )
    }
    if (isLoading) {
        <>
            <p>attendez</p>
        </>
    }
}

function TableCard() {

    return (
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
    )
}