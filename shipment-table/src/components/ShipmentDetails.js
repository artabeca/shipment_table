import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function ShipmentDetails({shipmentData}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        DETAILS
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>SHIPMENT DETAILS</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <p>ORDER NO</p>
                    <Box component="div" sx={{ p: 2, border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                        {shipmentData.orderNo}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <p>DATE</p>
                    <Box component="div" sx={{ p: 2, border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                        {shipmentData.date}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <p>CUSTOMER</p>
                    <Box component="div" sx={{ p: 2, border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                        {shipmentData.customer}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <p>TRACKING NO</p>
                    <Box component="div" sx={{ p: 2, border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                        {shipmentData.trackingNo}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <p>STATUS</p>
                    <Box component="div" sx={{ p: 2, border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                        {shipmentData.status}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <p>CONSIGNEE</p>
                    <Box component="div" sx={{ p: 2, border: '1px solid rgba(0, 0, 0, 0.05)' }}>
                        {shipmentData.consignee}
                    </Box>
                </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}