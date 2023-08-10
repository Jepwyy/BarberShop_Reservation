import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import HomePage from './pages/client/HomePage'
import AboutPage from './pages/client/AboutPage'
import ServicesPage from './pages/client/ServicesPage'
import ContactPage from './pages/client/ContactPage'
import ReservationsPage from './pages/client/ReservationsPage'
import Dashboard from './pages/admin/Dashboard'
import MainLayout from './Layout/MainLayout'
import PersistLogin from './utils/PersistLogin'
import AuthChecker from './utils/AuthChecker'
import PrivateRouteAdmin from './utils/PrivateRouteAdmin'
import PrivateRouteClient from './utils/PrivateRouteClient'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: 'always',
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<PersistLogin />}>
            <Route element={<AuthChecker />}>
              <Route element={<MainLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<AboutPage />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route element={<PrivateRouteClient />}>
                  <Route path='/reservations' element={<ReservationsPage />} />
                </Route>
              </Route>
            </Route>
            <Route element={<PrivateRouteAdmin />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
