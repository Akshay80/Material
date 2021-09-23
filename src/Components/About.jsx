import React , {useState} from "react";
import {
  Typography,
  Grid,
  Card,
  TextField,
  CardContent,
  TextareaAutosize,
  Button,
  Box,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "../css/services.css";
import Map from "./Map";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {

const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
const [mail, setMail] = useState('');

const notify = () => toast.success('Data Saved!', {
  position: "bottom-center",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  progress: 0,
  limit: 1
});


const handleSubmit = () => {
  // const id = 1;
  // id = id + 1;
  const datas = {
    id: "2",
    firstname: fname,
    lastname: lname,
    email: mail
  }

  console.log(datas)
  notify();

  // alert(JSON.stringify(datas));

//   fetch(`https://retoolapi.dev/xlOzz1/sampledata`,
//   {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(datas)
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
}


  return (
    <React.Fragment>


<ToastContainer
position="bottom-center"
autoClose={4000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss={false}
draggable={false}
pauseOnHover={false}
limit={1}
/>


      <Typography variant="h4" align="center" style={{ paddingTop: 30, paddingBottom: 40 }}>
        About Us
      </Typography>

      <Grid
        container
        justifyContent="center"
        spacing={10}
        style={{ paddingRight: 56, paddingLeft: 56 }}
      >
        <Typography variant="body1" style={{ paddingTop: 30 }}>
          Ftechiz Solutions has been launched with a clear vision to become
          multi-skilled and multi-dimensional IT service providers with a focus
          on high end strategic solutions and with the ultimate aim to evolve
          and become a leading One Stop internet strategy consulting company.We
          have been successful because we believe in keeping our promises and
          our simple but highly effective websites are known to interest the
          viewers greatly as the design is eye catching with the navigation easy
          making it a comfortable experience.
        </Typography>

        <Typography variant="body1" style={{ paddingTop: 30 }}>
          Innovation, creativity, quality and promptness are the main mantras of
          ftechiz and we imbibe these mantras in our work, to the core. ftechiz
          provides comprehensive online solutions that integrates Android and
          IOS App, development, eCommerce solutions enables online players to
          create cohesive and seamless experience for their recurring and
          prospective clients. Based Globally, ftechiz is a forthright Mobile
          App and Web Development Company in the country and globally acclaimed
          for its professional approach and consistency.
        </Typography>

        <Typography
          variant="body1"
          style={{ paddingTop: 30, paddingBottom: 30 }}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Typography>
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} style={{ marginBottom: 70 }}>
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
            <form onSubmit={handleSubmit}>
            <Card style={{ boxShadow: "0px 1px 5px" }}>
              <CardContent>
                <Typography
                  variant="h5"
                  color="textPrimary"
                  align="center"
                  style={{ paddingTop: 20, paddingBottom: 20 }}
                >
                  Contact us
                </Typography>
                <Grid
                  container
                  spacing={3}
                  style={{ padding: 20 }}
                  justifyContent="center"
                >
                  <Grid item sm={6} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="First Name"
                      variant="outlined"
                      required={true}
                      onChange={e => setFname(e.target.value)}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      required={true}
                      onChange={e => setLname(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Email"
                      type="email"
                      variant="outlined"
                      required={true}
                      onChange={e => setMail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextareaAutosize
                      maxRows={15}
                      col="50"
                      aria-label="maximum height"
                      placeholder="Your Feedback"
                      //   defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                      //       ut labore et dolore magna aliqua."
                    />
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ marginTop: 30, width: "230px" }}
                  >
                    Submit
                  </Button>
                </Grid>
              </CardContent>
            </Card>
            </form>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            // spacing={3}
            style={{ verticalAlign: "middle", marginBottom: 70 }}
          >
            {/* <Map/> */}
            <Card style={{ boxShadow: "0px 1px 5px", padding: 20 }}>
              <Typography
                variant="h5"
                color="textPrimary"
                align="center"
                style={{ paddingTop: 20, paddingBottom: 20 }}
              >
                Want to support us? Rate us 5 stars 😉
              </Typography>
              <div style={{ textAlign: "center" }}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography
                    component="legend"
                    style={{ fontStyle: "italic" }}
                  >
                    Rate Us
                  </Typography>
                  <Rating
                    name="customized-empty"
                    defaultValue={1}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                </Box>
              </div>

              <Typography
                variant="h6"
                align="center"
                style={{
                  fontWeight: "400",
                  fontStyle: "italic",
                  textDecoration: "underline",
                }}
              >
                Our Address
              </Typography>
              <Typography variant="body1" align="center">
                3rd Floor Pitambar Plaza,
              </Typography>
              <Typography variant="body1" align="center">
                Near Canara Bank Haridwar Road,
                <br />
                shastri nagar Dehradun,
              </Typography>
              <Typography variant="body1" align="center">
                Uttrakhand 248001
              </Typography>
              <Typography variant="body1" align="center">
                INDIA
              </Typography>
              <br />
              <br />
              <br />
              <br />
              <Typography variant="body2" align="center">
                Contact no. +91 7534078989
              </Typography>
              <Typography variant="body2" align="center">
                sales@ftechiz.com
              </Typography>
              <Typography variant="body2" align="center">
                www.ftechiz.com
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Grid>
{/*       
     <Grid container>
     <Grid item xs={12}>
      <Map style={{zIndex:"unset!important"}}/>
        </Grid>
        </Grid> */}

        {/* <div className="row" style={{width:'100%'}}>
        <Map/>
        </div> */}
        <Map />
    </React.Fragment>
  );
};

export default About;
