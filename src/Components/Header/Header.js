import '../Header/Header.css';


const Header = () => {
  return (
    <nav>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <ul className="menu">
        <li>
          <a href="/feedback">Feedback</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}



export default Header;
