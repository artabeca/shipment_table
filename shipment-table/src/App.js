import './App.css';
import ShipmentRow from './components/ShipmentRow';
import axios from 'axios';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{"& th": {color: "rgba(96, 96, 96)", backgroundColor: "pink"}}}>
            <TableCell>ORDER NO</TableCell>
            <TableCell>DELIVERY DATE</TableCell>
            <TableCell>CUSTOMER</TableCell>
            <TableCell>TRACKING NO</TableCell>
            <TableCell>STATUS</TableCell>
            <TableCell>CONSIGNEE</TableCell>
            <TableCell></TableCell>
           </TableRow>
        </TableHead>
        <TableBody>
          {shipments && shipments.map(createShipmentRow)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
