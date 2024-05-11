import { useContext, useEffect, useState } from 'react';
import Logo from '../assets/images/logonavyuh.png';
import Banner from '../assets/images/bannerlogin.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import TextField from '../components/inputField/TextField';
import * as Yup from 'yup';
import PasswordField from '../components/inputField/PasswordField';
import { IoLogoGoogle } from "react-icons/io";
import { getGoogleLoginURL, login } from '../services/authServices'
import { UserContext } from '../context/UserContext';
import NoticeBox from '../components/box/NoticeBox';

const schemaYub = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required('Hãy nhập email!')
    .email('Email không đúng định dạng!'),
  password: Yup.string().trim().required('Hãy nhập mật khẩu!')
});

const Login = () => {
  //context user
  const { setUserInfor } = useContext(UserContext);

  const [boxmessage, setBoxmessage] = useState({
    visible:false,
    message:"",
    type:'warning'
  });
  const [googleLogInURL, setGoogleLoginURL] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    async function fetch() {
      try {
        const res = await getGoogleLoginURL();
        setGoogleLoginURL(res.data.url);
      } catch (error) {
        setGoogleLoginURL('');
      }
    }
    fetch();
  }, []);

  const handleSubmit = async (values) => {
      const res = await login(values);
      if (res.status === 200) {
        setUserInfor(res.data.user, res.data.token);
        navigate('/');
      }
      else{
        setBoxmessage({
          visible:true,
          message:res.data.message,
          type:'warning'
        })
      }
  };

  return (
    <div className='flex relative'>
      <div className='hidden flex-1 lg:flex h-screen sticky top-0 left-0 overflow-hidden'>
        <img src={Banner} className='w-full object-contain' alt='' />
      </div>
      <div className='flex-1 flex flex-col items-center px-10 py-5 min-h-screen relative'>
        <div className='flex mt-10 max-w-[600px] items-center'>
          <Link to='/'>
            <img className='h-14 mx-' src={Logo} alt='' />
          </Link>
        </div>
        {boxmessage.visible && 
        <div className='w-full max-w-[600px] pt-6'>
          <NoticeBox 
          visible={boxmessage.visible} 
          message={boxmessage.message}  
          type={boxmessage.type} 
          onClose={
            ()=>setBoxmessage((prevState) => ({
              ...prevState,
              visible: false,}))
            }
          />
        </div>}
        <Formik
          validationSchema={schemaYub}
          initialValues={{
            email: '',
            password: ''
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
            touched
          }) => (
            <Form className='flex w-full flex-col gap-2 mt-6 max-w-[600px]'>
              <TextField
                label='Email'
                name='email'
                required
                error={touched.email ? errors.email : ''}
                value={values.email}
                onChange={handleChange}
                onBlur={(e) => {
                  handleBlur(e);
                }}
                placeHolder='Nhập email'
              />
              <PasswordField
                label='Mật khẩu'
                name='password'
                required
                error={touched.password ? errors.password : ''}
                value={values.password}
                onChange={handleChange}
                onBlur={(e) => {
                  handleBlur(e);
                }}
                placeHolder='Nhập mật khẩu'
              />

              <button
                type='submit'
                disabled={isSubmitting}
                className='whitespace-nowrap mt-[20px] text-[14px] font-semibold py-[20px] bg-black rounded text-white'
              >
                Đăng nhập
              </button>
            </Form>
          )}
        </Formik>
        <Link className='text-[14px] mt-5 underline underline-offset-2 font-medium' to={'/forgot-password'}>
            Quên mật khẩu ?
        </Link>
        <p className='text-[14px] py-5'>Hoặc</p>

        <a
          href={googleLogInURL}
          className='whitespace-nowrap flex items-center gap-[16px] w-full justify-center text-[14px] font-semibold py-[16px] text-black rounded border-2 border-black max-w-[600px]'
        >
          <IoLogoGoogle size={28} className='-translate-y-[1px]' />
          Tiếp tục với Google
        </a>

        <p className='text-[14px] pt-8'>
          Chưa có tài khoản?{' '}
          <Link className='underline underline-offset-2 font-medium' to='/register'>
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
