import logo from '../assets/Vector.png';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} className="nav--logo" alt={logo}/>
    </nav>
  );
};

export default Navbar;
