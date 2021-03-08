import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


function Index() {
    const classes = useStyles();

     const info = [
    {
      title: 'Taste the Music',
      img: 'https://i.imgur.com/9BP1HGa.jpeg',
      description: 'AN app that pulls up a random recipe and random song selection to accompany the food you are making.',
      link: 'https://enevarez-ops.github.io/projectOne/'
    },
    {
      title: 'ONTrack',
      img: 'https://i.imgur.com/lP0cfWC.jpg',
      description: 'AN APP that tracks degree progress and degree specifications for students.',
      link: 'https://gentle-brook-68093.herokuapp.com/'
    },
    {
      title: 'Day Planner',
      img: 'data:image/png;base64,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',
      description: 'AN app dedicated to keeping organized and planning your day. While storing your inputs into Local Storage',
      link: 'https://enevarez-ops.github.io/dayPlanner/'
    },
    {
      title: 'Employee Engine',
      img: 'https://i.imgur.com/VzOpZGE.jpg',
      description: 'Uses node and javascript to generate a team for a company.',
      link: 'https://github.com/enevarez-ops/employeeEngine'
    },
  ]

    return (
        <div>
            {info.map(({title, img, description, link})=> (
                 <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {img}
          title= {title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={()=> {window.open(link)}} size="small" color="primary">
          Visit Site
        </Button> 
      </CardActions>
    </Card>
            ))}
        </div>
        
    )
}

export default Index
