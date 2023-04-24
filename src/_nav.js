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
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'GESTION',
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
]

export default _nav
