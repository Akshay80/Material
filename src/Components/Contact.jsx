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
import { datas } from "../data/NewsJSON";

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
}));

const Contact = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  // const [data, setData] = useState();
  // const apiKey = process.env.REACT_APP_API_KEY;

  // const response = axios.get(`https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=${process.env.REACT_APP_API_KEY}`)
  //   .then(function (response) {
  //     // handle success
  //     console.log(response.data);
  //     if(response.status === 'ok')
  //     {
  //         setData(response.data)
  //     }
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })

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
        {datas.articles.map((item) => (
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
                <Link href={item.url} onClick={preventDefault} variant="body2">
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

export default Contact;
