import React from "react";
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



export default function Create() {

    const handleDataChange = (e) => {

    }

    const submitMember = () => {

    }



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
                                    <CFormInput onChange={(e) => handleDataChange(e)} name='s_name' />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Prénoms</CInputGroupText>
                                    <CFormInput onChange={(e) => handleDataChange(e)} name="f_name" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Anniversaire</CInputGroupText>
                                    <CFormInput type="date" onChange={(e) => handleDataChange(e)} name="f_name" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Lieu de naissance</CInputGroupText>
                                    <CFormSelect onChange={(e) => handleDataChange(e)} name="presi" placeholder="Selectionner une president">
                                        <option>Coul</option>
                                        <option>Coul</option>
                                        <option>Coul</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Nationnalité</CInputGroupText>
                                    <CFormSelect onChange={(e) => handleDataChange(e)} name="presi" placeholder="Selectionner une president">
                                        <option>Coul</option>
                                        <option>Coul</option>
                                        <option>Coul</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Téléphone</CInputGroupText>
                                    <CFormInput onChange={(e) => handleDataChange(e)} name="f_name" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Whatsapp</CInputGroupText>
                                    <CFormInput onChange={(e) => handleDataChange(e)} name="f_name" />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Email</CInputGroupText>
                                    <CFormInput onChange={(e) => handleDataChange(e)} name="f_name" />
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
                                    <CFormSelect onChange={(e) => handleDataChange(e)} name="presi" placeholder="Selectionner une president">
                                        <option>Corps</option>
                                        <option>Corps</option>
                                        <option>Corps</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Branche</CInputGroupText>
                                    <CFormInput readOnly style={{ backgroundColor: 'c4c4c4', color: 'white' }} name='s_name' />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Spécialité</CInputGroupText>
                                    <CFormSelect onChange={(e) => handleDataChange(e)} name="presi" placeholder="Selectionner une president">
                                        <option>Spécialité</option>
                                        <option>Spécialité</option>
                                        <option>Spécialité</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Debut d activité</CInputGroupText>
                                    <CFormInput onChange={(e) => handleDataChange(e)} name="f_name" />
                                </CInputGroup>
                            </CCol>

                            <CCol md={12}>
                                <strong>Estimation du chiffre d affaire</strong>
                                <CRow>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Minimum</CInputGroupText>
                                            <CFormInput />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Maximum</CInputGroupText>
                                            <CFormInput />
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
                                            <CFormInput />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Maximum</CInputGroupText>
                                            <CFormInput />
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
                                            <CInputGroupText>Homme</CInputGroupText>
                                            <CFormInput />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Femmes</CInputGroupText>
                                            <CFormInput />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <strong>Contractuel</strong>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Homme</CInputGroupText>
                                            <CFormInput />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Femmes</CInputGroupText>
                                            <CFormInput />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <strong>Aides familliales</strong>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Homme</CInputGroupText>
                                            <CFormInput />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Femmes</CInputGroupText>
                                            <CFormInput />
                                        </CInputGroup>
                                    </CCol>
                                </CRow>
                                <CRow>
                                    <strong>Stagiare</strong>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Homme</CInputGroupText>
                                            <CFormInput />
                                        </CInputGroup>
                                    </CCol>
                                    <CCol md={6} className="mb-4">
                                        <CInputGroup>
                                            <CInputGroupText>Femmes</CInputGroupText>
                                            <CFormInput />
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
                                    <CFormSelect defaultValue={''} placeholder="Selectionnez un district">
                                        <option>Selectionnez votre Commune</option>
                                        <option>Commune 1</option>
                                        <option>Commune 1</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Sous-Pefecture</CInputGroupText>
                                    <CFormSelect defaultValue={'Entrez'} placeholder="Selectionnez un district">
                                        <option>Selectionnez votre Sous prefecture</option>
                                        <option>Sous prefecture 1</option>
                                        <option>Sous prefecture 1</option>
                                    </CFormSelect>
                                </CInputGroup>
                            </CCol>
                            <CCol md={6} className="mb-4">
                                <CInputGroup>
                                    <CInputGroupText>Quartier/Village</CInputGroupText>
                                    <CFormInput placeholder="Saisir le nom de son quartier ou son village" onChange={(e) => handleDataChange(e)} name='s_name' />
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