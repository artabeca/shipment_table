/**
 * {
 *    orderNo : int
 *    orderDate : Date
 *    customer : string
 *    trackingNo : string
 *    Status : enum
 *    consignee : string
 * }
 */
function ShipmentRow({ shipmentData }){
    return (
        <tr>
            <td>{shipmentData.orderNo}</td>
            <td>{shipmentData.date}</td>
            <td>{shipmentData.customer}</td>
            <td>{shipmentData.trackingNo}</td>
            <td>{shipmentData.status}</td>
            <td>{shipmentData.consignee}</td>
        </tr>
    )
}

export default ShipmentRow;