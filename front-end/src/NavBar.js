import './NavBar.css'
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
   <div className="nav">
    <h3 className='nm'>FrajaFlix</h3>
    <input
    className='inp'
    type="text"
    placeholder ="find movies & series..."
    />
    <li className='signi'>Sign in</li>
    <Button className='signu' variant="outline-dark">Sign up</Button>
   </div>

  );
}

export default NavBar;
