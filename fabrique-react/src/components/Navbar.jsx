import './Navbar.css';
import Dropdownmenu from './Dropdownmenu';

function Navbar() {
    return (
        <>
            <nav>
                <a href="#">
                    <div className="logo-container">
                        <img className="logo-qatar" src="/logo-qatar.png" alt="Qatar Museums"/>
                        <p className="title"><span>متاحف قطر</span>Qatar Museums</p>  
                    </div>  
                </a>
                <ul>
                    <li><span>قصص</span><a href="#"> stories</a></li>
                    <li><span>ما هو الجديد</span><a href="#">what's on</a></li>
                    <li><span>المجموعة</span><a href="#">collection</a></li>
                    <li><span>زيارة</span><a href="#">visit</a></li>
                    <li><a className="ticket-nav-item" href="#">tickets</a></li>
                    <li><a href="#">members</a></li>
                    <li><a href="#">venues</a></li>
                </ul>
            </nav>
            <Dropdownmenu />
        </>
    )
}

export default Navbar