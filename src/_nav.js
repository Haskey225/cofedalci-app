import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilFork,
  cilSpeedometer,
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
    name: 'CONFEDERATION',
  },
  {
    component: CNavGroup,
    name: 'Branches',
    to: '#',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/liste-branches',
      },
      {
        component: CNavItem,
        name: 'Créer',
        to: '/create-branches',
      },
      {
        component: CNavItem,
        name: 'Modifier',
        to: '/edit-branches',
      },
      {
        component: CNavItem,
        name: 'Supprimer',
        to: '/delate-branches',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Federation',
    to: '/base',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/liste-federation',
      },
      {
        component: CNavItem,
        name: 'Créer',
        to: '/create-federation',
      },
      {
        component: CNavItem,
        name: 'Modifier',
        to: '/edit-federation',
      },
      {
        component: CNavItem,
        name: 'Supprimer',
        to: '/delate-federation',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Association',
    to: '/base',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/liste-association',
      },
      {
        component: CNavItem,
        name: 'Créer',
        to: '/create-association',
      },
      {
        component: CNavItem,
        name: 'Modifier',
        to: '/edit-association',
      },
      {
        component: CNavItem,
        name: 'Supprimer',
        to: '/delate-association',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Presidents',
  },
  {
    component: CNavGroup,
    name: 'Fed Presidents',
    to: '/base',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Créer',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Modifier',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Supprimer',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Asso Presidents',
    to: '/base',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Créer',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Modifier',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Supprimer',
        to: '/base/cards',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Membres',
  },
  {
    component: CNavGroup,
    name: 'Membres',
    to: '/base',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Créer',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Modifier',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Supprimer',
        to: '/base/cards',
      },
    ],
  },
]

export default _nav
