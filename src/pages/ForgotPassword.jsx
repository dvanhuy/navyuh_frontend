import { useState } from 'react';
import Logo from '../assets/images/logonavyuh.png';
import Banner from '../assets/images/bannerlogin.jpg'
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import TextField from '../components/inputField/TextField';
import * as Yup from 'yup';
import NoticeBox from '../components/box/NoticeBox';
import { forgotPassword } from '../services/authServices';
import ButtonForm from '../components/button/ButttonForm';

const schemaYub = Yup.object().shape({
  email: Yup.string()
    .trim()
    .required('Hãy nhập email!')
    .email('Email không đúng định dạng!'),
});

const ForgotPassword = () => {
  const [next, setNext] = useState(false);
  const [boxmessage, setBoxmessage] = useState({
    visible:false,
    message:"",
    type:'warning'
  });

  const handleSubmit = async (values) => {
      const res = await forgotPassword(values);
      if (res.status === 200) {
        setNext(true);
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
            email: '',
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
              <ButtonForm content='Gửi email' disabled={isSubmitting}/>
              {next && <Link
                  className='text-center whitespace-nowrap mt-[25px] text-[14px] font-semibold py-[20px] bg-black rounded text-white'
                  to={'/reset-password?email='+values.email}
              >
              Tiếp tục
              </Link>}
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

export default ForgotPassword;
