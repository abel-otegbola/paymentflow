import "./header.css";


const Header = ({ active }) => {
    return (
        <div className="header" style={{ display: (active===4)? "none": "block" }}>
            <h1>Complete your Purchase</h1>

            <ul>
                <li className={active === 1? "active": "box"}>Personal Info</li>
                <li className={active === 2? "active": "box"}>Billing Info</li>
                <li className={active === 3? "active": "box"}>Confirm Payment</li>
            </ul>
        </div>
    )
}

export default Header;