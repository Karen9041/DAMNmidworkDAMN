import NavBar from "./NavBar";
import { Link } from "react-router-dom"

export default function Header() {
   return (
      <div className="header">
         <Link to="/">
            <img  style={{ width: '30%' }}
                  alt="LOGO_tahan"
                  src="https://www.tahan.com.tw/images/LOGO_tahan.jpg"/>
         </Link>
         <NavBar />
      </div>
   );
}