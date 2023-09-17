import * as React from 'react';
import ShipmentDetails from './ShipmentDetails';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

function ShipmentRow({ shipmentData }){
    return (
        <TableRow sx={{ '&:last-child TableCell, &:last-child th': { border: 0 } }}>
            <TableCell>{shipmentData.orderNo}</TableCell>
            <TableCell>{shipmentData.date}</TableCell>
            <TableCell>{shipmentData.customer}</TableCell>
            <TableCell>{shipmentData.trackingNo}</TableCell>
            <TableCell>{shipmentData.status}</TableCell>
            <TableCell>{shipmentData.consignee}</TableCell>
            <TableCell>
                <ShipmentDetails shipmentData={shipmentData}/>
            </TableCell>
        </TableRow>
    )
}

export default ShipmentRow;