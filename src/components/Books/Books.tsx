import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { DialogContent, DialogContentText, makeStyles, Button, Dialog, DialogTitle, DialogActions } from '@material-ui/core';
import { LibraryForm } from '../LibraryForm';
import { DataTable } from '../DataTable';



const useStyles = makeStyles({
  col: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  topLeft: {
    position: 'absolute',
    left: '85%',
    top: '10%'
  },
  button: {
    backgroundColor: '#FF9500',
    '&:hover': {
      backgroundColor: '#CC7700',
    },
    borderRadius: '20px'
  },
  buttonText: {
    color: '#FFF',
    textDecoration: 'none'
  },
  spacing: {
    padding: '10px',
    margin: '10px'
  },
  cancelButton: {
    backgroundColor: '#D1495B',
    '&:hover': {
      backgroundColor: '#C43145'
    }
  },
  border: {
    borderColor: '#4A3830'
  },
  pTop: {
    paddingTop: '25px'
  }
});

export const Books = () => {

  const classes = useStyles();
  const [dialogOpen, setDialogOpen ] = useState(false);

  const handleDialogClickOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClickClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
        <Navbar />
        <div className={`${classes.col} ${classes.spacing}`}>
          <div className={`${classes.row} ${classes.spacing}`}>
            <div className={classes.row}>
              <h1 className={classes.pTop}>Available Books</h1>
            </div>
            <div className={classes.topLeft}>
              <Button onClick={ handleDialogClickOpen } className={`${classes.button} ${classes.buttonText}`}>Add a Book!</Button>

              <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a new Book to the Library</DialogTitle>
                <DialogContent>
                  <DialogContentText></DialogContentText>
                  <LibraryForm />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleDialogClickClose} className={classes.cancelButton}>Cancel</Button>
                </DialogActions>
              </Dialog>
            </div>
          </div>
          <div className={classes.row}>
            <DataTable />
          </div>
        </div>
    </>
  )
}
