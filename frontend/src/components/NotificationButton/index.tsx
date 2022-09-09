import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/notificacion-icon.svg' ;
import { BASE_URL } from '../../utils/request';

import './styles.css';


type Props = {
    salesId: number;
}

function handleClick(Id: number) {
     axios(`${BASE_URL}/sales/${Id}/notification`)
         .then(response => {
          
          toast.info("SMS enviado com sucesso");

         })
}

function NotificationButton( {salesId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(salesId)}>
            <img src={icon} alt="DSmeta" />
        </div>
    )
}

export default NotificationButton; 
