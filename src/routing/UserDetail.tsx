import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const UserDetail = () => {
  const params = useParams();
  console.log(params);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.toString());
  console.log(searchParams.get('name'));

  const location = useLocation();
  console.log(location);
  return <p>{params.id}</p>;
};

export default UserDetail;
