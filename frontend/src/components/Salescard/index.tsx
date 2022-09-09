import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { sales } from "../../models/sales";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../NotificationButton';
import './styles.css';
function Salescard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date ();
  
  const [minDate, setMinDate] = useState (min);
  const [maxDate, setMaxdate] = useState (max);

  const [sales, setSales] = useState<sales[]>([]); 

     useEffect(() => {

        const dmin = minDate.toISOString().slice(0,10);
        const dmax = maxDate.toISOString().slice(0,10);

        console.log(dmin);

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
             .then(response => {
              setSales(response.data.content);
             });
     }, [minDate,maxDate]);


    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxdate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendendor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sales.map(sales => {
                            return (
                                <tr key={sales.id}>
                                <td className="show992">{sales.id}</td>
                                <td className="show576">{new Date(sales.date).toLocaleDateString()}</td>
                                <td>{sales.sellerName}</td>
                                <td className="show992">{sales.visited}</td>
                                <td className="show992">{sales.deals}</td>
                                <td> $ {sales.amount.toFixed(2)}</td>
                                <td>
                                    <div className="dsmeta-red-btn-container">
                                        <NotificationButton salesId={sales.id}/>
                                    </div>
                                </td>
                            </tr> 
                            )
                        })}                                             
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Salescard;
