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
    to: '/Federation/president',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/liste-fed-presi',
      },
      {
        component: CNavItem,
        name: 'Créer',
        to: '/create-fed-presi',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Asso Presidents',
    to: '/association/president',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/liste-asso-presi',
      },
      {
        component: CNavItem,
        name: 'Créer',
        to: '/create-asso-presi',
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
    to: '/Member',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Liste',
        to: '/liste-member',
      },
      {
        component: CNavItem,
        name: 'Créer',
        to: '/create-member',
      },
    ],
  },
]

export default _nav
