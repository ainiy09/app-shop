import LogoSRC from "../Logo/logo.svg";
import "../Logo/Logo.css";

function Logo () {
    return (
        <a href="" className="logo">
            <img src={LogoSRC} alt="Logo" className="logo__picture" />
        </a>
    )
}

export default Logo;