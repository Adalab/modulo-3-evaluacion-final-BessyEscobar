import "../scss/App.scss";
import hpLogo from "../../docs/assets/images/HP-logo.png";

function Header() {
  return (
    <header className="title">
      <img src={hpLogo} alt="HarryPotter" className="title--hplogo" />
    </header>
  );
}

export default Header;
