import { useEffect,useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { loginGoogle } from '../services/authServices';
const LoginGoogle = () => {
  const navigate = useNavigate();
  const { setUserInfor } = useContext(UserContext);

  
  const [searchParams] = useSearchParams();
  const params = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  useEffect(() => {
    async function fetch() {
      try {
        const res = await loginGoogle(params);
        setUserInfor(res.data.user, res.data.token);
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  });

  return (
    <div className='flex w-screen h-screen text-center'>
      <div className='m-auto'>
        <h1 className='font-semibold text-4xl'>
          Chào mừng bạn đến mua sắm tại Navyuh
        </h1>
        <p className='text-[18px] pt-4'>
          Vui lòng chờ chuyển hướng đến trang mua sắm
        </p>
      </div>
    </div>
  );
};

export default LoginGoogle;