// import s from './App.module.css'

import Layout from './Layout'
import RestrictedRoute from './RestrictedRoute'
import PrivateRoute from './PrivateRoute'
import { useDispatch, useSelector} from 'react-redux'
import { lazy, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { refreshUser } from '../redux/auth/operations'
import { selectIsRefreshing } from '../redux/auth/selectors'

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage/RegistrationPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])
  
  return isRefreshing ? (
    <b>Please wait...</b>
    ) : (
    <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/register' element={
              <RestrictedRoute redirectTo='/contacts' component={<RegistrationPage />} />
          } />
          <Route
            path='/login'
            element={
              <RestrictedRoute redirectTo='/contacts' component={<LoginPage />}
            /> }
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoute redirectTo='/login' component={<ContactsPage />} />
            }
          />
        </Routes>
    </Layout>
  )
}

export default App;
