import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margenArriba: {
    marginTop: 40,
  }
}));

function App() {

  const classes = useStyles();

  return (
    <Container fixed>
      <Typography component="div" className={classes.margenArriba} style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >

        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                  <TextField id="outlined-basic" label="Ingrese un valor" variant="outlined" />
                </form>
              </Paper>
            </Grid>


            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  7
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  8
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  9
               </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  /
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
            </Grid>


            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  4
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  5
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  6
               </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  *
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
            </Grid>



            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  1
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  2
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  3
               </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  +
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
            </Grid>



            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  0
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  .
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  =
               </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button variant="contained" color="primary">
                  -
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={2}>
            </Grid>

          </Grid>
        </div>


      </Typography>
    </Container>

  );
}

export default App;
