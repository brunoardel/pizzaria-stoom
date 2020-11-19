import React from 'react'
import Paper from '@material-ui/core/Paper'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Ribbon from 'components/Ribbon'

import { useStyles } from './styles'

export default function MediaCard({ img, title, recommended, selected }) {
  const classes = useStyles()

  return (
    <Paper className={selected ? `${classes.root}` : `${classes.option}`}>
      <CardActionArea>
        {recommended && <Ribbon />}
        <CardMedia className={classes.media} image={img} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Paper>
  )
}
