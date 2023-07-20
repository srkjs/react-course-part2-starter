import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        mollitia!
      </p>
      {/* Using <Link> tag, the content of the UserList is already shifted to client, so there is no requirement for server call which Users link is clicked */}
      <Link to={'/users'}>Users</Link>
    </>
  );
};

export default HomePage;
