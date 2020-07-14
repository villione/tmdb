import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },
})

export const CardItem: React.FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Paper className={classes.root}>
        <Card className={classes.root}>
          <CardActionArea className={classes.cardAction}>
            {children}
          </CardActionArea>
        </Card>
      </Paper>
    </Grid>
  )
}
