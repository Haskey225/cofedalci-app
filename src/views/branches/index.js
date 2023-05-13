import React, { Component, useState } from "react";
import {
    CRow,
    CCard,
    CCardHeader,
    CCardBody,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableDataCell,
    CTableBody,
    CCol,
    CButton,
} from "@coreui/react";
// import { getBranchListe } from "src/Functions/Datas";
import BranchListCard from "src/components/branch";
import axios from "axios";
import { render } from "@testing-library/react";

const qs = require('qs');

const item = {
    id: 1,
    name: 'Franck ABo',
    descriptions: 'moi meme'
}

function te() {
    let resps;
    axios.post("http://localhost/cofedal-api/api/", { 'action': 'test' }).then(resp => {
        resps = resp.data;
        console.log(resps)

    })
}

function testPost() {
    fetch("http://localhost/cofedal-api/api/", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({
            action: 'find'
        }), // body data type must match "Content-Type" header
    }).then(response => {
        console.log(response.json())
    });

}
class ListBranche extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.getData();
    }
    // getBranchListe().then(respo => {
    //     console.log(respo)
    // })
    getData = async () => {
        await axios.post("http://localhost/cofedal-api/api/", qs.stringify({
            'action': 'find',
            'table': 'branch'
        })).then(resp => {
            const datas = (resp.data);
            // console.log(data);
            this.setState({ data: datas })
            console.log(this.state.data);
        }).catch(ero => {
            console.log(ero)
        })
    }


    shouldComponentUpdate() {
        //  post = this.state.data ? 'ok' : 'non yet';
        // this.getData();
        // console.log(this.state.data);
    }
    componentDidUpdate() {
    }


    render() {



        return (
            <>
                {this.state.data ? 'ok' : 'non yet'}
                <CRow>
                    <CButton onClick={() => this.getData()}>Change state</CButton>
                    <CCol xs={12}>
                        <CCard className="mb-4">
                            <CCardHeader>
                                <strong>Branches</strong>
                            </CCardHeader>
                            <CCardBody>

                                <CTable>
                                    <CTableHead>
                                        <CTableRow>
                                            <CTableHeaderCell scope="col">id</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Nom</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Nbrs de Fed</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableHead>
                                    <CTableBody>

                                        <CTableRow>
                                            <CTableHeaderCell scope="col">id</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Nom</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                            <CTableHeaderCell scope="col">Nbrs de Fed</CTableHeaderCell>
                                        </CTableRow>
                                    </CTableBody>
                                </CTable>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow></>
        )
    }


}

export default ListBranche