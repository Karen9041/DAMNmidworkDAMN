import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <Link to="/tableware" className="nav-item" activeClassName="nav-item--active">
                關於我們
            </Link>
            <Link to="/cookware" className="nav-item" activeClassName="nav-item--active">
                產品櫥窗
            </Link>
            <Link to="/home-accessories" className="nav-item" activeClassName="nav-item--active">
                客製化服務
            </Link>
            <Link to="/lighting" className="nav-item" activeClassName="nav-item--active">
                產品知識
            </Link>
            <Link to="/textile" className="nav-item" activeClassName="nav-item--active">
                聯絡我們
            </Link>
        </div>
    );
}