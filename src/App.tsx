import { Loading } from '@/core/components/Loading'
import { RoutesWithNotFound } from '@/core/components/RoutesWithNotFound'
import { PrivateRoutes, PublicRoutes } from '@/core/enums/routes'
import { AuthGuard } from '@/core/guards/AuthGuard'
import { store } from '@/core/store/store'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import './index.css'

const Login = lazy(() => import("@/modules/auth/pages/Login"));
const Dashboard = lazy(() => import("@/modules/dashboard/pages/Dashboard"));
const Settings = lazy(() => import("@/modules/settings/pages/Settings"));

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <RoutesWithNotFound>
            <Route
              path={PublicRoutes.START}
              element={<Navigate to={PrivateRoutes.DASHBOARD} />}
            />
            <Route
              path={PublicRoutes.LOGIN}
              element={<Login />}
            />
            <Route element={<AuthGuard />}>
              <Route
                path={PrivateRoutes.DASHBOARD}
                element={<Dashboard />}
              />
              <Route
                path={PrivateRoutes.SETTINGS}
                element={<Settings />}
              />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </Provider>
  )
}

export default App
