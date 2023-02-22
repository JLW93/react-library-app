import React, { useState } from 'react'
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { LibraryForm } from '../LibraryForm';
import { Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    makeStyles
} from '@material-ui/core';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90, hide: true },
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'author', headerName: 'Author', flex: 1 },
    { field: 'release_date', headerName: 'Number of Pages', flex: 1 },
    { field: 'length', headerName: 'Release Date', flex: 1 },
    { field: 'isbn', headerName: 'ISBN', flex: 1 }
];

interface gridData {
    data: {
        id?: string;
    }
};

const useStyles = makeStyles({
    lightBackground: {
        backgroundColor: '#FF9500',
        color: '#4A3830',
        '&:hover': {
            backgroundColor: '#CC7700'
        }
    },
    darkBackground: {
        backgroundColor: '#CC5803',
        color: '#4A3830',
        '&:hover': {
            backgroundColor: '#B54D03'
        }
    },
    padding: {
        padding: '5px',
        margin: '5px'
    },
})

export const DataTable = () => {

    let { libraryData, getData } = useGetData();
    let [open, setOpen ] = useState(false);
    let [ gridData, setData ] = useState<gridData>( { data: {} } );
    const [selectionModel, setSelectionModel ] = useState<any>( [] );
    const classes = useStyles();

    let handleOpen = () => {
        setOpen(true);
    };

    let handleClose =() => {
        setOpen(false);
    };

    let deleteData = () => {
        server_calls.delete( selectionModel );
        getData();
        setTimeout( () => { window.location.reload() }, 1000 );
    };

  return (
    <div style={{ height: 400, width: '100%'}}>
        <DataGrid rows={ libraryData } columns={ columns } pageSize={ 5 } checkboxSelection={ true }
        onSelectionModelChange={ (item) => {
            setSelectionModel( item )
        }} />

        <Button onClick={ handleOpen } className={`${classes.lightBackground} ${classes.padding}`}>Update</Button>
        <Button variant="contained" onClick={ deleteData } className={`${classes.darkBackground} ${classes.padding}`}>Delete</Button>

        <Dialog open={ open } onClose={ handleClose } aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Entry { selectionModel }</DialogTitle>
            <DialogContent>
                <DialogContentText></DialogContentText>
                <LibraryForm id={ selectionModel! } />
            </DialogContent>
            <DialogActions>
                <Button onClick={ handleClose } color="primary">Cancel</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}
