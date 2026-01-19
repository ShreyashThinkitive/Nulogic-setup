import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "./Auth/LoginPage"
import ProtectedRoute from "./Routes/ProtectedRoute"
import DashBoard from "./components/DashBoard"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App




