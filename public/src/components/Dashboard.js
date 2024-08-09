import React from 'react'
import {Grid, Paper} from '@material-ui/core'

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>Widget 1: Line chart showing user activity over time</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Widget 2: Bar chart displaying sales data</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper>Widget 3: Pie chart depicting user demographics</Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper>Widget 4: Recent activity feed</Paper>
      </Grid>
    </Grid>
  )
}

export default Dashboard
