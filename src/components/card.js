import { Button, FormLabel, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import WidgetsOutlinedIcon from "@material-ui/icons/WidgetsOutlined";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import StorageSharpIcon from "@material-ui/icons/StorageSharp";
import FilterDramaSharpIcon from "@material-ui/icons/FilterDramaSharp";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },

  card: {
    //flexGrow: 1,
    width: "88%",

    backgroundColor: "#dedede",
    justifyContent: "space-evently",
    marginInline: "auto",
  },
  heading: {
    fontSize: "34px",
    fontWeight: "bold",
    paddingLeft: "63px",
    marginBottom: "10px",
  },
  head: {
    fontSize: "34px",
    fontWeight: "900px",
    width: "600px",
    backgroundColor: "#dedede",
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  itemgrid: {
    margin: "27px",
  },
  "& .MuiGrid-item": {
    margin: "27px",
  },
  cardcontent: {
    backgroundColor: "#dedede",
    color: "black",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
     
      
    },
  },
  button:{
    backgroundColor: "white",
    color: "black",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
     
      
    },
// display:"none"
  },
  blockchain: {
    color: "yellowgreen",
    fontSize: "55px",
  },
}));
const CardComponent = () => {
  const classes = useStyles();
  const [style, setStyle] = React.useState({display: 'none'});
  const [styledatascience,setStyleData]=React.useState({display: 'none'});
  const [styledevops,setStyleDevops]=React.useState({display: 'none'});
  const [styleprograms,setStylePrograms]=React.useState({display: 'none'});
  const [stylecloud,setStyleCloud]=React.useState({display: 'none'});
  const [styleinternet,setStyleInternet]=React.useState({display: 'none'});



  const blockchainMore=()=>{
    console.log("clicked")
    window.open("https://www.happiestminds.com/services/blockchain-solutions-services/")
  }
  const datascienceMore=()=>{
    console.log("clicked")
    window.open("https://www.happiestminds.com/services/data-science/")
  }
  const devopsMore=()=>{
    console.log("clicked")
    window.open("https://www.happiestminds.com/services/devops-solutions/")
  }
  
  const programsMore=()=>{
    console.log("clicked")
    window.open("https://www.happiestminds.com/services/sdn-nfv/")
  }
  const cloudMore=()=>{
    console.log("clicked")
    window.open("https://www.happiestminds.com/services/cloud-computing/")
  }
  const internetMore=()=>{
    console.log("clicked")
    window.open("https://www.happiestminds.com/services/internet-of-things/")
  }
  return (
    <>
      <Paper style={{ backgroundColor: "#dedede" }}>
        <Grid container className={classes.card}>
          <div className={classes.head}>
            <Typography className={classes.heading}>
              Technologies we work with
            </Typography>
          </div>
        </Grid>
        <Grid container className={classes.card}>
          <div
            style={{
              backgroundColor: "#dedede",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <Grid
              container
              style={{
                marginBottom: "auto",
              }}
              spacing={3}
            >
              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}   onMouseOver={e => {
                     setStyle({display: 'block'});
                 }}
                 
                 onMouseLeave={e => {
                  setStyle({display: 'none'})
              }}>
                  <CardActionArea >
                    <CardContent className={classes.cardcontent} >
                      <Grid container style={{justifyContent:"space-between"}}>
                        <Grid item>
                      <WidgetsOutlinedIcon className={classes.blockchain} />
                      </Grid>
                      <Grid item>
                      <Button className={classes.button} style={style} onClick={blockchainMore}>More</Button>
                      </Grid>  </Grid>
                      <Typography gutterBottom variant="h5" component="h2">
                        Block chain
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        As Blockchain technologies continues to evolve rapidly,
                        Happiest Mind is one of the early implementor using
                        Hyperledger Fabric, Ethereum, R3 Corda and many others
                        in multiple business use cases. Happiest Minds continues
                        to stay focus in Blockchain technologies.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}  onMouseOver={e => {
                     setStyleData({display: 'block'});
                 }}
                 
                 onMouseLeave={e => {
                  setStyleData({display: 'none'})
              }}>
                  <CardActionArea>
                    <CardContent className={classes.cardcontent}>
                    <Grid container style={{justifyContent:"space-between"}}>
                        <Grid item>
                        <StorageRoundedIcon className={classes.blockchain} />
                      </Grid>
                      <Grid item>
                      <Button className={classes.button} style={styledatascience} onClick={datascienceMore}>More</Button>
                      </Grid>  </Grid>

                   
                    
                      <Typography gutterBottom variant="h5" component="h2">
                        Data Science
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        "AI is another exciting area where deep learning is
                        revolutionizing audio, video, image & text analysis as
                        pre-trained models are becoming more prominent than
                        traditional statistical models. We have specialized in
                        developing deep learning models that work on low cost
                        devices while continuing to build solutions that enhance
                        the efficacy of Auto ML and Explainable AI frameworks.",
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}
                onMouseOver={e => {
                  setStyleDevops({display: 'block'});
              }}
              
              onMouseLeave={e => {
                setStyleDevops({display: 'none'})
           }}>
                  <CardActionArea>
                    <CardContent className={classes.cardcontent}>
                    <Grid container style={{justifyContent:"space-between"}}>
                        <Grid item>
                        <SettingsOutlinedIcon className={classes.blockchain} />
                      </Grid>
                      <Grid item>
                      <Button className={classes.button} style={styledevops} onClick={devopsMore}>More</Button>
                      </Grid>  </Grid>
                      
                      <Typography gutterBottom variant="h5" component="h2">
                        Dev Ops
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        It's long that Dev Ops has become main stream in
                        Engineering process bringing Development, IT Operations
                        and Quality Engineering together. We thrive to take Dev
                        Ops automation to a new level, leveraging new tools and
                        technologies like - Prometheus, Site24x7, New Relic,
                        Kubernetes, Dockers etc.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}
                onMouseOver={e => {
                  setStylePrograms({display: 'block'});
              }}
              
              onMouseLeave={e => {
                setStylePrograms({display: 'none'})
           }}>
                  <CardActionArea>
                    <CardContent className={classes.cardcontent}>
                    <Grid container style={{justifyContent:"space-between"}}>
                        <Grid item>
                        <StorageSharpIcon className={classes.blockchain} />
                      </Grid>
                      <Grid item>
                      <Button className={classes.button} style={styleprograms} onClick={programsMore}>More</Button>
                      </Grid>  </Grid>
                     

                      <Typography gutterBottom variant="h5" component="h2">
                        Programmable Network
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        We at Happiest Minds are building the next generation of
                        Programmable Networks - working on Disaggregation,
                        containerized Networking OS development and integration
                        of programmable platforms such as NPUs, FPGAs and
                        popular ASICs, and virtual network functions,
                        programmable Data plane technologies such as DPDK and P4
                        , and closed loop Network Automation including Network
                        Monitoring and Visibility, Network Analytics and Intent
                        Driven Networks.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}
                 onMouseOver={e => {
                  setStyleCloud({display: 'block'});
              }}
              
              onMouseLeave={e => {
                setStyleCloud({display: 'none'})
           }}>
                  <CardActionArea>
                    <CardContent className={classes.cardcontent}>
                    <Grid container style={{justifyContent:"space-between"}}>
                        <Grid item>
                        <FilterDramaSharpIcon className={classes.blockchain} />
                      </Grid>
                      <Grid item>
                      <Button className={classes.button} style={stylecloud} onClick={cloudMore}>More</Button>
                      </Grid>  </Grid>
                      

                      <Typography gutterBottom variant="h5" component="h2">
                        Cloud Computing
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        Happiest Minds Cloud implementation offerings takes next
                        leap towards finding innovative ways to strategize and
                        optimize the services/operations, information access,
                        application development and find new venues of market
                        expansion opportunities.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>

              <Grid item className={classes.itemgrid} xs={3}>
                <Card className={classes.root} lg={3} sm={2}
                   onMouseOver={e => {
                    setStyleInternet({display: 'block'});
                }}
                
                onMouseLeave={e => {
                  setStyleInternet({display: 'none'})
             }}
                >
                  <CardActionArea>
                    <CardContent className={classes.cardcontent}>
                    <Grid container style={{justifyContent:"space-between"}}>
                        <Grid item>
                        <EmojiObjectsOutlinedIcon
                        className={classes.blockchain}
                      />
                      </Grid>
                      <Grid item>
                      <Button className={classes.button} style={styleinternet} onClick={internetMore}>More</Button>
                      </Grid>  </Grid>
                    

                      <Typography gutterBottom variant="h5" component="h2">
                        Internet Of Things
                      </Typography>
                      <Typography variant="body2" color="black" component="p">
                        We at Happiest Minds are deeply focused into 3rd wave of
                        Internet of Things. Smart and connected devices
                        comprises of sensors, microprocessors, edge computing,
                        data storage, controls, cloud computing and essentially
                        embedded operating system. We continue to bolster our
                        capabilities and solutions by aligning ourselves with
                        industry leading alliance partners - AWS, Azure. We also
                        have our home grown IoT platform.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Paper>
    </>
  );
};

export default CardComponent;
