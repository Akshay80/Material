import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { data } from '../data/MusicJSON';
import '../css/home.css';

const Home = () => {
return(
    <Grid container justifyContent="center" spacing={20}>
    {data.map((item, index) => (
      <Box key={index} width={210} marginRight={0.5} my={5}>
        {item ? (
          <img
            style={{ width: 210, height: 118 }}
            alt={item.title}
            src={item.src}
            id="images"
          />
        ) : null}

        {item ? (
          <Box pr={2}>
            <Link href={item.links} color="inherit" id="links" target="_blank">
            <Typography gutterBottom variant="body2" style={{marginTop: 15}}>
              {item.title}
            </Typography>
            </Link>
            <Typography
              display="block"
              variant="caption"
              color="textSecondary"
            >
              {item.channel}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {`${item.views} • ${item.createdAt}`}
            </Typography>
          </Box>
        ) : null}
      </Box>
    ))}
  </Grid>
)
}

export default Home