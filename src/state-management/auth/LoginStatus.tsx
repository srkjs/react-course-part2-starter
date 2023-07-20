import useAuthStore from './store';

const LoginStatus = () => {
  const store = useAuthStore();
  if (store.user)
    return (
      <>
        <div>
          <span className='mx-2'>{store.user}</span>
          <a onClick={() => store.logout()} href='#'>
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => store.login('sivark')} href='#'>
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
