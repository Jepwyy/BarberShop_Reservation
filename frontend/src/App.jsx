import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import HomePage from './pages/client/HomePage'
import MainLayout from './Layout/mainLayout'
import AboutPage from './pages/client/AboutPage'
import ServicesPage from './pages/client/ServicesPage'
import ContactPage from './pages/client/ContactPage'
import ReservationsPage from './pages/client/ReservationsPage'

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
          <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/reservations' element={<ReservationsPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
