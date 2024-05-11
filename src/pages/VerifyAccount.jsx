import { useEffect,useContext, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { verifyAccount } from '../services/authServices';
const VerifyAccount = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('Vui lòng chờ xác thực');
  const navigate = useNavigate();
  const { setUserInfor } = useContext(UserContext);

  const params = {};
  searchParams.forEach((value, key) => {
    params[key] = value;
  });

  useEffect(() => {
    async function fetch() {
      const res = await verifyAccount(params);
      if (res.status === 200) {
        setUserInfor(res.data.user, res.data.token);
        navigate('/');
      }
      else{
        setStatus(res.data.message);
      }
    }
    setTimeout(() => {
      fetch();
    }, 1000);
  });

  return (
    <div className='flex w-screen h-screen text-center'>
      <div className='m-auto'>
        <h1 className='font-semibold text-4xl'>
          Chào mừng bạn đến mua sắm tại Navyuh
        </h1>
        <p className='text-[20px] pt-4 text-red-500'>
          {status}
        </p>
      </div>
    </div>
  );
};

export default VerifyAccount;