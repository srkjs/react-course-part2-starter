import useCounterStore from '../state-management/counter/store';

const NavBar = () => {
  // Re-render NavBar only if Counter property changes
  // Now this NavBar property is only dependent on counter & not with reset functionality (max)
  const counter = useCounterStore((s) => s.counter);

  console.log('Render NavBar');

  return (
    <nav
      className='navbar navbar-expand-lg'
      style={{ background: '#f0f0f0', marginBottom: '1rem' }}
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          My App
        </a>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Users
              </a>
            </li>
          </ul>
        </div>
      </div>
      <span className='badge text-bg-secondary'>{counter}</span>
    </nav>
  );
};

export default NavBar;
