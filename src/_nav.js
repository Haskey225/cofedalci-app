import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilFork,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
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
    name: 'Federation',
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
    name: 'Association',
    to: '/base',
    icon: <CIcon icon={cilFork} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Créer',
        to: '/forms/layout',
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
    name: 'Gestionnaires',
  },
  {
    component: CNavGroup,
    name: 'President',
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
