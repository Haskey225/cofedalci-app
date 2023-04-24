import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilUser,
  cilLocationPin,
  cilCursor,
  cilUserPlus,
  cilNotes,
  cilSpeedometer,
  cilSettings,
  cilFork,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Tableau de bord',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Gestionnaire',
  },
  {
    component: CNavGroup,
    name: 'Branches',
    to: '/base',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Modifier',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Ajouter',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Suprimer',
        to: '/base/carousels',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Federations',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Association',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Presidents',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Membres',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Localités',
    icon: <CIcon icon={cilLocationPin} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Paramettres',
    to: '/charts',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
]

export default _nav
