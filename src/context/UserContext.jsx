import { useState } from 'react';
import { createContext } from 'react';
import { localStorageHelper } from '../services/localStorageHelper';

export const ROLE = {
  ADMIN: 'Admin',
  CLIENT: 'Client',
  EMPLOYEE: 'Employee',
};

const initValue = {
  name: '',
  email: '',
  role: ROLE.CLIENT
};

export const UserContext = createContext({
  user: initValue,
  isLogin: false,
  loadUserInfo: () => {},
  resetUserInfo: () => {},
  setUserInfor: () => {}
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorageHelper.load('user-info') ?? initValue
  );

  const loadUserInfo = () => {
    const user = localStorageHelper.load('user-info');
    setUser(user);
  };

  const resetUserInfo = () => {
    setUser(initValue);
    localStorage.clear();
  };

  const setUserInfor = (user, token) => {
    setUser(user);
    localStorageHelper.store('user-info', user);
    localStorageHelper.store('accessToken', token);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loadUserInfo,
        resetUserInfo,
        setUserInfor,
        isLogin: !! user?.email
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
