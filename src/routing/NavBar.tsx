import { useContext } from 'react';
import TasksContext from '../state-management/tasks/tasksContext';

const NavBar = () => {
  const context = useContext(TasksContext);

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
      <span className='badge text-bg-secondary'>{context.tasks.length}</span>
    </nav>
  );
};

export default NavBar;
