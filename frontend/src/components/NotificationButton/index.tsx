import icon from '../../assets/img/notificacion-icon.svg' 

import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={icon} alt="DSmeta" />
        </div>
    )
}

export default NotificationButton
