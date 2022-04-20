//From https://www.robinwieruch.de/react-router-private-routes/
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { User } from '../models/User'

interface IProps {
  isAllowed: boolean
  redirectPath?: string
  children: any
}

const ProtectedRoute = ({
  isAllowed,
  redirectPath = '/',
  children,
}: IProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return children || <Outlet />
}

export default ProtectedRoute
