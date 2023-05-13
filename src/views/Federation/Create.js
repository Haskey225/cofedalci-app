import React, { useState } from "react";

import {
    CCard,
    CCardHeader,
    CCardBody,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
    CCol,
    CFormLabel,
    CFormSelect,
    CFormTextarea,
    CButton
} from "@coreui/react";

import { setFederation } from "src/Functions/Datas";

const fedInitialState = {
    s_name: '',
    f_name: '',
    presi: 0,
    branch: 0,
    description: ''
}
const FederationCreate = () => {

    const [fedState, setFedState] = useState(fedInitialState);

    const handleDataChange = e => {
        const { name, value } = e.target;

        setFedState({ ...fedState, [name]: value });
        // console.log(name)
    }

    const submitFed = () => {
        setFederation(fedState)
    }

    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Creer une federation</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Short Name</CInputGroupText>
                                    <CFormInput onChange={(e) => handleDataChange(e)} name='s_name' />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Full Name</CInputGroupText>
                                    <CFormInput onChange={(e) => handleDataChange(e)} name="f_name" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>President</CInputGroupText>
                                    <CFormSelect onChange={(e) => handleDataChange(e)} name="presi" placeholder="Selectionner une president">
                                        <option>Coul</option>
                                        <option>Coul</option>
                                        <option>Coul</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Branche</CInputGroupText>
                                    <CFormSelect onChange={(e) => handleDataChange(e)} name="branch">
                                        <option>Branche1</option>
                                        <option>Branche1</option>
                                        <option>Branche1</option>
                                        <option>Branche1</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={12} className="mb-4">
                                <CFormLabel htmlFor="description"></CFormLabel>
                                <CFormTextarea onChange={(e) => handleDataChange(e)} name="description" id="description" />
                            </CCol>
                            <CCol md={12}>
                                <CButton onClick={() => submitFed()}>Creer</CButton>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default FederationCreate