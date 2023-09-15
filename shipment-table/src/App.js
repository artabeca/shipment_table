import './App.css';
import ShipmentRow from './components/ShipmentRow';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [shipments, setShipments] = useState();

  axios.get("./Shipments.txt")
    .then(function (response) {
      setShipments(response.data);
    });

  const createShipmentRow = function(shipment) {
    return <ShipmentRow shipmentData={shipment}/>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ORDERNO</th>
          <th>DELIVERYDATE</th>
          <th>CUSTOMER</th>
          <th>TRACKINGNO</th>
          <th>STATUS</th>
          <th>CONSIGNEE</th>
        </tr>
      </thead>
      <tbody>
        {shipments && shipments.map(createShipmentRow)}
      </tbody>
    </table>
  );
}

export default App;
