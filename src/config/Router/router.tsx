import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../../component/ragistration/login/login'
import SignUp from '../../component/ragistration/signup/signup'
import InstituteForm from '../../screen/institude'
import ProtectedScreen from '../../screen/protectyourscreen/protected'
import Student from '../../screen/Student'
import Pagenotfound from '../../screen/pagenotfound'
import AdminPannel from '../../screen/admin'
import AdmissionForm from '../../component/Dashboard/admissionForm'
import Home from '../../screen/Student'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<ProtectedScreen Screen={Home} />} />
                <Route path="/admin/*" element={<ProtectedScreen Screen={AdminPannel} />} />
                <Route path="/institute" element={<ProtectedScreen Screen={InstituteForm} />} />
                <Route path="/institute/:id" element={<ProtectedScreen Screen={InstituteForm} />} />
                <Route path="/instituteForm" element={<InstituteForm />} />
                <Route path="*" element={<Pagenotfound />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
        </Router>
    )
}
