import React from 'react';
import { Navbar } from '../Navbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Reader from '../../assets/images/book_lover.svg'

interface Props {
  title: string;
}

const useStyles = makeStyles({
    main: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#4A3830',
      fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
      marginLeft: '25px',
      marginRight: '25px',
      padding: '15px'
    },
    title: {
      fontSize: '2.2em',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      alignItems: 'left',
      textAlign: 'left',
      paddingLeft: '15px'
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
    image: {
      padding: '15px',
      paddingTop: '75px',
      width: '100%',
      height: 'auto'
    }
});

export const Home = ( props: Props ) => {

  const classes = useStyles();

  return (
    <>
      <Navbar />
      <div className={ classes.main }>
        <div className={`${classes.spacing}`}>
          <div className={classes.title}>
            <h1>{ props.title }</h1>
          </div>
          <div className={classes.spacing}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Incidunt aliquid, commodi ullam molestiae culpa iure temporibus, 
              vero quasi a amet optio, sunt veritatis perspiciatis maiores. 
              Incidunt atque consequuntur delectus blanditiis!
            </p>
          </div>
          <div className={classes.spacing}>
            <Button className={classes.button}>
              <Link to='/books' className={classes.buttonText}>View the Library</Link>
            </Button>
          </div>
        </div>
        <div>
          <img src={ Reader } className={classes.image} />
        </div>
      </div>
    </>
  )
}
