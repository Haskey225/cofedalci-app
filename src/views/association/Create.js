import React, { useState } from "react";
import {
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody,
    CInputGroup,
    CInputGroupText,
    CFormInput,
    CFormTextarea,
    CFormSelect,
    CButton,

} from '@coreui/react';

import { setAssociation } from "src/Functions/Datas";

const assoInitialState = {
    asso_name: "",
    fed_name: "",
    asso_description: ""
}
const CreateAssociation = () => {

    const [assoState, setAssoState] = useState(assoInitialState);

    const handleCahnge = (e) => {
        const { name, value } = e.target;

        setAssoState({ ...assoState, [name]: value });
    }

    const assoSubmit = () => {
        setAssociation(assoState);
    }

    return (
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <strong>{"Creation de l'association"}</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CCol md={12}>
                            <CRow>
                                <CCol md={6} className="mb-4">
                                    <CInputGroup>
                                        <CInputGroupText>Nom</CInputGroupText>
                                        <CFormInput onChange={(e) => handleCahnge(e)} name="asso_name" />
                                    </CInputGroup>
                                </CCol>

                                <CCol md={6} className="mb-4">
                                    <CInputGroup>
                                        <CInputGroupText>Fédération parente</CInputGroupText>
                                        <CFormSelect onChange={(e) => handleCahnge(e)} name='fed_name'>
                                            <option>Selectionnez la fed parente</option>
                                            <option>Fed 1</option>
                                            <option>Fed 2</option>
                                        </CFormSelect>
                                    </CInputGroup>
                                </CCol>
                                <CCol md={12} className="mb-4">
                                    <CInputGroup>
                                        <CInputGroupText>Description</CInputGroupText>
                                        <CFormTextarea onChange={(e) => handleCahnge(e)} name="asso_description" />
                                    </CInputGroup>
                                </CCol>
                            </CRow>
                            <CButton onClick={() => assoSubmit()}>Créer</CButton>
                        </CCol>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default CreateAssociation;