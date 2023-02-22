import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, chooseAuthor, chooseReleaseDate, chooseLength, chooseISBN } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button, makeStyles } from '@material-ui/core';
import { server_calls } from '../../api';

interface LibraryFormProps {
    id?: string;
    data?: {}
};

interface BookState {
    title: string;
    author: string;
    release_date: string;
    length: string;
    isbn: string;
};

const useStyles = makeStyles({
    button: {
        backgroundColor: '#FF9500',
        color: '#FFF',
        '&:hover': {
            backgroundColor: '#CC7700'
        }
    }
});

export const LibraryForm = ( props: LibraryFormProps ) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<BookState>(state => state.title);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = ( data: any, event: any) => {
        if (props.id!) {
            server_calls.update( props.id!, data );
            setTimeout ( () => { window.location.reload() }, 1000 );
            event.target.reset();
        } else {
            dispatch(chooseTitle(data.title));
            dispatch(chooseAuthor(data.author));
            dispatch(chooseReleaseDate(data.release_date));
            dispatch(chooseLength(data._length));
            dispatch(chooseISBN(data.isbn));
            server_calls.create(store.getState());
            setTimeout( () => { window.location.reload() }, 1000 )
        }
    }

  return (
    <div>
      <form onSubmit={ handleSubmit( onSubmit ) }>
        <div>
            <label htmlFor="title">Title</label>
            <Input { ...register('title') } name="title" placeholder="Book Title" />
        </div>
        <div>
            <label htmlFor="author">Author</label>
            <Input { ...register('author') } name="author" placeholder="Book Author" />
        </div>
        <div>
            <label htmlFor="release_date">Release Date</label>
            <Input { ...register('release_date') } name="release_date" placeholder="Release Date" />
        </div>
        <div>
            <label htmlFor="length">Number of Pages</label>
            <Input { ...register('length') } name="length" placeholder="Book Length" />
        </div>
        <div>
            <label htmlFor="isbn">International Standard Book Number</label>
            <Input { ...register('isbn') } name="isbn" placeholder="ISBN" />
        </div>
        <Button type="submit" className={classes.button}>Submit</Button>
      </form>
    </div>
  )
}
