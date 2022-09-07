import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSmeta"/>
                    <h1>DS META</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://www.instagram.com/duca_liima/">@Carlos Lima</a>
                    </p>
            </div>
        </header>

    )
}

export default Header