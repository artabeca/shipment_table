import * as React from 'react';
import ShipmentDetails from './ShipmentDetails';

function ShipmentRow({ shipmentData }){
    return (
        <tr>
            <td>{shipmentData.orderNo}</td>
            <td>{shipmentData.date}</td>
            <td>{shipmentData.customer}</td>
            <td>{shipmentData.trackingNo}</td>
            <td>{shipmentData.status}</td>
            <td>{shipmentData.consignee}</td>
            <td>
                <ShipmentDetails shipmentData={shipmentData}/>
            </td>
        </tr>
    )
}

export default ShipmentRow;