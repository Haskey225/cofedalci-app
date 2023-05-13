import React, { useEffect, useState } from "react";
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
    CButton,
} from "@coreui/react";
import axios from "axios";
import { setMember, getBranchListe } from "src/Functions/Datas";

const qs = require('qs');

const initialMemberState = {
    'name': '',
    'birth_date': '10/10/1991',
    'birth_place': '',
    'nationnality': '',
    'phone_number': '',
    'whatsapp': '',
    'email': '',
    'community_id': 0,
    'area_name': 0
}

const initialActivityState = {
    'start_date': '10/10/2023',
    'min_month_ca': '',
    'max_month_ca': '',
    'min_month_customer': '',
    'max_month_customer': '',
    'total_fix_worker': 0,
    'total_contract_worker': 0,
    'total_familly_worker': 0,
    'total_intern_worker': 0
}
export default function Create() {

    const [memberState, setMemberState] = useState(initialMemberState);
    const [activityState, setActivityState] = useState(initialActivityState);
    const [branchLise, setBranchListe] = useState({});


    const loadData = () => {

        axios.post('http://localhost/cofedal-api/api/', qs.stringify({
            'action': 'find',
            'table': 'branch'
        })).then(resp => {

            setBranchListe(resp.data)
            // data = rp.split('-');
            console.log(resp.data);
        });

    }


    const handleMemberDataChange = (e) => {
        const { name, value } = e.target;
        setMemberState({ ...memberState, [name]: value });
        // console.log(value);

    }
    const handleActivityDataChange = (e) => {
        const { name, value } = e.target;
        setActivityState({ ...activityState, [name]: value });
    }

    const submitMember = () => {

        console.log(branchLise)

    }

    useEffect(() => {
        loadData();
        console.log(branchLise);

    }, []);




    return (
        <CRow>
            <CCol>
                <CCard>
                    <CCardHeader>
                        <strong>Inscription de membre</strong>
                    </CCardHeader>
                </CCard>
            </CCol>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Info sur le membre</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Nom</CInputGroupText>
                                    <CFormInput onChange={(e) => handleMemberDataChange(e)} name='name' />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Anniversaire</CInputGroupText>
                                    <CFormInput type="date" onChange={(e) => handleMemberDataChange(e)} name="birth_date" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Lieu de naissance</CInputGroupText>
                                    <CFormInput onChange={(e) => handleMemberDataChange(e)} name="birth_place" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Nationnalité</CInputGroupText>
                                    <CFormInput onChange={(e) => handleMemberDataChange(e)} name="nationnality" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Téléphone</CInputGroupText>
                                    <CFormInput onChange={(e) => handleMemberDataChange(e)} name="phone_number" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Whatsapp</CInputGroupText>
                                    <CFormInput onChange={(e) => handleMemberDataChange(e)} name="whatsapp" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Email</CInputGroupText>
                                    <CFormInput onChange={(e) => handleMemberDataChange(e)} name="email" />
                                </CInputGroup>
                            </CCol>


                            {/* <CCol md={12}>
                                <CButton onClick={() => submitMember()}>Creer</CButton>
                            </CCol> */}
                        </CRow>
                    </CCardBody>

                    <CCardHeader>
                        <strong>Information sur l activité</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Corps de métier</CInputGroupText>
                                    <CFormSelect onChange={(e) => handleActivityDataChange(e)} name="association" >
                                        <option>Selction du Corps de metiers</option>
                                        <option>Corps</option>
                                        <option>Corps</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Branche</CInputGroupText>
                                    <CFormSelect onChange={(e) => handleActivityDataChange(e)} name="branch" >
                                        <option>Branch</option>
                                        {
                                            branchLise ? Object.keys(branchLise).map((item, index) => {
                                                <option>{branchLise[item].name} </option>
                                            }) : <p>Loading</p>
                                        }
                                    </CFormSelect>                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Spécialité</CInputGroupText>
                                    <CFormSelect onChange={(e) => handleActivityDataChange(e)} name="speciality">
                                        <option>Selectionnez une spécialité</option>
                                        <option>Spécialité</option>
                                        <option>Spécialité</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Debut d activité</CInputGroupText>
                                    <CFormInput name="start_date" onChange={(e) => handleActivityDataChange(e)} />
                                </CInputGroup>
                            </CCol>

                            <CCol md={12}>
                                <strong>Estimation du chiffre d affaire</strong>
                                <CRow>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Minimum</CInputGroupText>
                                            <CFormInput type="numeric" name="min_month_ca" onChange={(e) => handleActivityDataChange(e)} />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Maximum</CInputGroupText>
                                            <CFormInput type="numeric" name="max_month_ca" onChange={(e) => handleActivityDataChange(e)} />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                            </CCol>
                            <CCol md={12}>
                                <strong>Estimation du nombre de client par mois</strong>
                                <CRow>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Minimum</CInputGroupText>
                                            <CFormInput type="numeric" name="min_month_customer" onChange={(e) => handleActivityDataChange(e)} />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Maximum</CInputGroupText>
                                            <CFormInput type="numeric" name='max_month_customer' onChange={(e) => handleActivityDataChange(e)} />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                            </CCol>
                            <CCol md={12}>
                                <strong>Estimation du nombre d ouvrier ou salarier</strong>
                                <CRow style={{ borderWidth: '1px', borderColor: 'GrayText' }}>
                                    <strong>Salariers</strong>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Total</CInputGroupText>
                                            <CFormInput type="numeric" name="total_fix_worker" onChange={(e) => handleActivityDataChange(e)} />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>nombre de femme</CInputGroupText>
                                            <CFormInput type="numeric" name="women_fix" onChange={(e) => handleActivityDataChange(e)} />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <strong>Contractuel</strong>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Total</CInputGroupText>
                                            <CFormInput type="numeric" name="total_contract_worker" onChange={(e) => handleActivityDataChange(e)} />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Nombre de femme</CInputGroupText>
                                            <CFormInput type="numeric" name="women_contract" onChange={(e) => handleActivityDataChange(e)} />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <strong>Aides familliales</strong>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Total</CInputGroupText>
                                            <CFormInput type="numeric" name="total_familly_worker" onChange={(e) => handleActivityDataChange(e)} />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Nombre de femme</CInputGroupText>
                                            <CFormInput type="numeric" name="women_familly" onChange={(e) => handleActivityDataChange(e)} />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <strong>Stagiare</strong>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Total</CInputGroupText>
                                            <CFormInput type="numeric" name="total_intern_worker" onChange={(e) => handleActivityDataChange(e)} />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Nombre de femme</CInputGroupText>
                                            <CFormInput type="numeric" />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                            </CCol>
                        </CRow>
                    </CCardBody>
                    <CCardHeader>
                        <strong>Info sur la localité</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>District</CInputGroupText>
                                    <CFormSelect defaultValue={''} placeholder="Selectionnez un district">
                                        <option>Selectionnez votre district</option>
                                        <option>District 1</option>
                                        <option>District 1</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Redion</CInputGroupText>
                                    <CFormSelect defaultValue={''} placeholder="Selectionnez un district">
                                        <option>Selectionnez votre Region</option>
                                        <option>Region 1</option>
                                        <option>Region 1</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Departement</CInputGroupText>
                                    <CFormSelect defaultValue={''} placeholder="Selectionnez un district">
                                        <option>Selectionnez votre Departement </option>
                                        <option>Departement 1</option>
                                        <option>Departement 1</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Commune</CInputGroupText>
                                    <CFormSelect name='community_id' placeholder="Selectionnez un district">
                                        <option>Selectionnez votre Commune</option>
                                        <option>Commune 1</option>
                                        <option>Commune 1</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Quartier/Village</CInputGroupText>
                                    <CFormInput placeholder="Saisir le nom de son quartier ou son village" name="area_name" />
                                </CInputGroup>
                            </CCol>
                        </CRow>



                    </CCardBody>


                    <CCardHeader>
                        <strong>Autre information</strong> Veuillez verifier ces information avant de soumette le formulare
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <strong>Federation de base</strong>
                            <CCol md={4}>
                                <CInputGroup>
                                    <CInputGroupText>Nom</CInputGroupText>
                                    <CFormInput readOnly name="" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={4}>
                                <CInputGroup>
                                    <CInputGroupText>President</CInputGroupText>
                                    <CFormInput readOnly name="" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={4}>
                                <CInputGroup>
                                    <CInputGroupText>Contact</CInputGroupText>
                                    <CFormInput readOnly name="" />
                                </CInputGroup>
                            </CCol>
                        </CRow>
                        <CRow>
                            <strong>Association de base</strong>
                            <CCol md={4}>
                                <CInputGroup>
                                    <CInputGroupText>Nom</CInputGroupText>
                                    <CFormInput readOnly name="" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={4}>
                                <CInputGroup>
                                    <CInputGroupText>President</CInputGroupText>
                                    <CFormInput readOnly name="" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={4}>
                                <CInputGroup>
                                    <CInputGroupText>Contact</CInputGroupText>
                                    <CFormInput readOnly name="" />
                                </CInputGroup>
                            </CCol>
                        </CRow>
                    </CCardBody>

                    <CCardHeader>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md={12}>
                                <CButton onClick={() => submitMember()}>Creer</CButton>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}