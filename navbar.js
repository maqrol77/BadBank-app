function NavBar() {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-md bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#/">
                        <img src="./img/logo.png" alt="Bad Bank Logo" className="logo" />
                        Bad Bank
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">Home</NavLink>
                                <div className="popover__content" id="homePopover">
                                    <p className="popover__message">Welcome to Bad Bank</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/CreateAccount" className="nav-link">Create Account</NavLink>
                                <div className="popover__content" id="createPopover">
                                    <p className="popover__message">Join our Bad Bank family</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                                <div className="popover__content" id="loginPopover">
                                    <p className="popover__message">Here begins your nightmare</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/deposit" className="nav-link">Deposit</NavLink>
                                <div className="popover__content" id="depositPopover">
                                    <p className="popover__message">Give us your money</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/withdraw" className="nav-link">Withdraw</NavLink>
                                <div className="popover__content" id="withdrawPopover">
                                    <p className="popover__message">Don't take your money from us</p>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/alldata" className="nav-link">All Data</NavLink>
                                <div className="popover__content" id="dataPopover">
                                    <p className="popover__message">We know your dirty secret</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
