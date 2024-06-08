import Login from "../pages/Login";
import { Navigate, Route, Routes } from 'react-router-dom';
import Register from "../pages/Register";
import LoginGoogle from "../pages/LoginGoogle";
import VerifyAccount from "../pages/VerifyAccount"
import Homepage from "../pages/Homepage";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import AdminPage from "../pagesAdmin/AdminPage";
import AdminLayout from "../layout/AdminLayout";
import CategoryIndex from "../pagesAdmin/CategoryIndex";
import Server from "../pagesAdmin/Server";
import CreateServer from "../pagesAdmin/CreateServer";
import ClientLayout from "../layout/ClientLayout";
import ServerPage from "../pages/ServerPage";
import JoinServer from "../pages/JoinServer";
function App() {
  return (
    <Routes>
      <Route path="/admin" element={<Navigate to={'/admin/dashboard'}/>}/>
      <Route element={<AdminLayout/>}>
        <Route index path="/admin/dashboard" element={<AdminPage/>}/>
        <Route path="/admin/servers" element={<Server/>}/>
        <Route path="/admin/servers/add" element={<CreateServer/>}/>
        <Route path="/admin/category" element={<CategoryIndex/>}/>
        <Route path="/admin/users" element={<CategoryIndex/>}/>
        <Route path="/admin/subcategory" element={<CategoryIndex/>}/>
        <Route path="/admin/*" element={<h1>Chưa hỗ trợ</h1>} />
      </Route>
      <Route element={<ClientLayout/>}>
        <Route index element={<Homepage />} />
        <Route path="/servers/join/:serverID" element={<JoinServer />} />
        <Route path="/servers/:serverID" element={<ServerPage />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/api/login/google/callback' element={<LoginGoogle />} />
      <Route path='/register' element={<Register />} />
      <Route path='/register/verify' element={<VerifyAccount />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/reset-password' element={<ResetPassword />} />
    </Routes>
  );
}

export default App;