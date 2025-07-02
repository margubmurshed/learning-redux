import { Link } from 'react-router';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
    return (
        <nav>
            <div className='flex justify-between items-center p-5 border-b-1'>
                <div className='flex items-center gap-3'>
                    <h1 className='font-bold text-xl'>Task Manager</h1>
                    <ul className='flex items-center gap-3'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/tasks">Tasks</Link></li>
                        <li><Link to="/users">Users</Link></li>
                    </ul>
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;