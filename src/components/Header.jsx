import "../scss/App.scss";
import hpLogo from "../image/HP-logo.png";

function Header() {
  return (
    <header className="title">
      <img src={hpLogo} alt="HarryPotter" className="title--hplogo" />
    </header>
  );
}

export default Header;
