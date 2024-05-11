import { useState } from 'react';
import Logo from '../assets/images/logonavyuh.png';
import Banner from '../assets/images/bannerlogin.jpg'
import { Link, useSearchParams } from 'react-router-dom';
import { Form, Formik } from 'formik';
import TextField from '../components/inputField/TextField';
import * as Yup from 'yup';
import NoticeBox from '../components/box/NoticeBox';
import { resetPassword } from '../services/authServices';
import PasswordField from '../components/inputField/PasswordField';

const schemaYub = Yup.object().shape({
  otp: Yup.string().trim().required('Hãy nhập mã OTP!').length(6, "Mã otp phải có 6 kí tự!"),
  password: Yup.string().trim().required('Hãy nhập mật khẩu!'),
  password_confirmation: Yup.string()
    .trim()
    .required('Xác nhận mật khẩu!')
    .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp!')
});

const ResetPassword = () => {
  const [boxmessage, setBoxmessage] = useState({
    visible:false,
    message:"",
    type:'warning'
  });

  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');

  const handleSubmit = async (values) => {
      const res = await resetPassword({...values,email});
      if (res.status === 200) {
        setBoxmessage({
          visible:true,
          message:res.data.message,
          type:'success'
        })
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
            otp: '',
            password: '',
            password_confirmation: ''
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
                label='OTP'
                name='otp'
                required
                error={touched.otp ? errors.otp : ''}
                value={values.otp}
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
              <PasswordField
                label='Xác nhận mật khẩu'
                name='password_confirmation'
                required
                error={
                  touched.password_confirmation
                    ? errors.password_confirmation
                    : ''
                }
                value={values.password_confirmation}
                onChange={handleChange}
                onBlur={(e) => {
                  handleBlur(e);
                }}
                placeHolder='Nhập lại mật khẩu'
              />

              <button
                type='submit'
                disabled={isSubmitting}
                className='whitespace-nowrap mt-[10px] text-[14px] font-semibold py-[20px] bg-black rounded text-white'
              >
                Đặt lại mật khẩu
              </button>
            </Form>
          )}
        </Formik>
        <p className='text-[14px] pt-8'>
          Trở về trang đăng nhập ?{' '}
          <Link className='underline underline-offset-2 font-medium' to='/login'>
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
