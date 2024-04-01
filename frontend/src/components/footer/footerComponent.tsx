// Footer.js
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'black',
    padding: theme.spacing(3),
    color: 'white',
  },
  card: {
    backgroundColor: 'lightgray',
    marginBottom: theme.spacing(2),
  },
}));

const FooterComponent = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <h1>gg</h1>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
            <h1>gg</h1>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardContent>
            <h1>gg</h1>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </footer>
  );
};

export default FooterComponent;
