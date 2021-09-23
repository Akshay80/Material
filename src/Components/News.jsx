import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Avatar,
  IconButton,
  Grid,
  Link,
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CircularProgress from '@material-ui/core/CircularProgress';
// import { datas } from "../data/NewsJSON";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: theme.spacing(2),
  },
  media: {
    height: 190,
  },
  title: {
    paddingTop: 40,
    paddingBottom: 15,
  },
  progress: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
      marginBottom: 80
    },
  },
}));

const News = () => {
  const classes = useStyles();
  const [data,setData]=useState([])
  const [loading, setLoading] = useState(false);
  const apiKey = process.env.REACT_APP_API_KEY;

  
  useEffect(() => {
    fetchdata();
  }, [])

  // yesh@leaplogix.in 

  useEffect(() => {
    console.log(data.articles)
  }, [data])

  const fetchdata=async()=>{
    setLoading(true)
    const response=await axios(`/top-headlines?sources=google-news-in&apiKey=${apiKey}`);
    setData(response.data.articles)
    setLoading(false)    
  }



  return (





    <React.Fragment>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        className={classes.title}
      >
        Current News
      </Typography>


    

      <Grid container justifyContent="center">
        {/* Card code */}
        {loading === true ? <div className={classes.progress}><CircularProgress style={{marginBottom:80}}/></div>: null}
        {data.map((item) => (
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Ted talk"
                  src="https://source.unsplash.com/1600x900/?news"
                />
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.author}
              subheader={item.publishedAt}
            />
            <CardMedia
              className={classes.media}
              image={item.urlToImage}
              title="Ted talk"
            />

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.content}
              </Typography>
              <br />
              <br />
              <Typography className={classes.root}>
                <Link href={item.url} variant="body2" target="_blank">
                  {item.url}
                </Link>
              </Typography>
            </CardContent>
          </Card>
         ))}
      </Grid>
    </React.Fragment>
  );
};

export default News;
