import React from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormInput,
    CFormTextarea,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react'

const Add = () => {
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>AJOUTER UNE BRANCHE</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CRow>
                            <CCol md={6}>
                                <CInputGroup>
                                    <CInputGroupText>Nom de la branche</CInputGroupText>
                                    <CFormInput placeholder='Entrer le nom de la branche' />
                                </CInputGroup>
                            </CCol>
                            <CCol md={6}>
                                <CInputGroup >
                                    <CInputGroupText>Description</CInputGroupText>
                                    <CFormTextarea placeholder='Entrer le nom de la branche' />
                                </CInputGroup>
                            </CCol>
                        </CRow>
                        
                        <CButton>Enregistrer</CButton>
                    </CCardBody>
                </CCard>
            </CCol>

        </CRow>
    )
}

// const card = () => {
//     return (
//         <CRow>
//             <CCol xs={12}>
//                 <CCard className="mb-4">
//                     <CCardHeader>
//                         <strong>Layout</strong> <small>Inline forms</small>
//                     </CCardHeader>
//                     <CCardBody>
//                         <p className="text-medium-emphasis small">
//                             Use the <code>&lt;CCol xs=&#34;auto&#34;&gt;</code> class to create horizontal
//                             layouts. By adding{' '}
//                             <a href="https://coreui.io/docs/layout/gutters/">gutter modifier classes</a>, we will
//                             have gutters in horizontal and vertical directions. The{' '}
//                             <code>.align-items-center</code> aligns the form elements to the middle, making the{' '}
//                             <code>&lt;CFormCheck&gt;</code> align properly.
//                         </p>

//                         <CForm className="row row-cols-lg-auto g-3 align-items-center">
//                             <CCol xs={12}>
//                                 <CFormLabel className="visually-hidden" htmlFor="inlineFormInputGroupUsername">
//                                     Username
//                                 </CFormLabel>
//                                 <CInputGroup>
//                                     <CInputGroupText>@</CInputGroupText>
//                                     <CFormInput id="inlineFormInputGroupUsername" placeholder="Username" />
//                                 </CInputGroup>
//                             </CCol>
//                             <CCol xs={12}>
//                                 <CFormLabel className="visually-hidden" htmlFor="inlineFormSelectPref">
//                                     Preference
//                                 </CFormLabel>
//                                 <CFormSelect id="inlineFormSelectPref">
//                                     <option>Choose...</option>
//                                     <option value="1">One</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </CFormSelect>
//                             </CCol>
//                             <CCol xs={12}>
//                                 <CFormCheck type="checkbox" id="inlineFormCheck" label="Remember me" />
//                             </CCol>
//                             <CCol xs={12}>
//                                 <CButton type="submit">Submit</CButton>
//                             </CCol>
//                         </CForm>
//                     </CCardBody>
//                 </CCard>
//             </CCol>
//             <CCol xs={12}>
//                 <CCard className="mb-4">
//                     <CCardHeader>
//                         <strong>AJOUTER UNE BRANCHE</strong>
//                     </CCardHeader>
//                     <CCardBody>
//                         <CRow className="g-3">
//                             <CCol xs>
//                                 <CFormInput placeholder="First name" aria-label="First name" />
//                             </CCol>
//                             <CCol xs>
//                                 <CFormInput placeholder="Last name" aria-label="Last name" />
//                             </CCol>
//                         </CRow>
//                         <CForm className="row g-3" action=''>
//                             <CCol md={6}>
//                                 <CFormLabel htmlFor="inputEmail4">Email</CFormLabel>
//                                 <CFormInput type="email" id="inputEmail4" />
//                             </CCol>
//                             <CCol md={6}>
//                                 <CFormLabel htmlFor="inputPassword4">Password</CFormLabel>
//                                 <CFormInput type="password" id="inputPassword4" />
//                             </CCol>
//                             <CCol xs={12}>
//                                 <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
//                                 <CFormInput id="inputAddress" placeholder="1234 Main St" />
//                             </CCol>
//                             <CCol xs={12}>
//                                 <CFormLabel htmlFor="inputAddress2">Address 2</CFormLabel>
//                                 <CFormInput id="inputAddress2" placeholder="Apartment, studio, or floor" />
//                             </CCol>
//                             <CCol md={6}>
//                                 <CFormLabel htmlFor="inputCity">City</CFormLabel>
//                                 <CFormInput id="inputCity" />
//                             </CCol>
//                             <CCol md={4}>
//                                 <CFormLabel htmlFor="inputState">State</CFormLabel>
//                                 <CFormSelect id="inputState">
//                                     <option>Choose...</option>
//                                     <option>...</option>
//                                 </CFormSelect>
//                             </CCol>
//                             <CCol md={2}>
//                                 <CFormLabel htmlFor="inputZip">Zip</CFormLabel>
//                                 <CFormInput id="inputZip" />
//                             </CCol>
//                             <CCol xs={12}>
//                                 <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
//                             </CCol>
//                             <CCol xs={12}>
//                                 <CButton type="submit">Sign in</CButton>
//                             </CCol>
//                         </CForm>
//                     </CCardBody>
//                 </CCard>
//             </CCol>
//         </CRow>
//     )
// }

export default Add
