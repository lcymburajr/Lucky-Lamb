import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PermIdentity from '@material-ui/icons/PermIdentity';
import PhonelinkRing from '@material-ui/icons/PhonelinkRing';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Email from '@material-ui/icons/EmailOutlined';
import Paper from '@material-ui/core/Paper';
import NavBar from '../components/NavBar';
import SliderTop from '../components/SliderTop';
import CookieConsent from "react-cookie-consent";

// import appStore from './../assets/Download_on_the_App_Store.svg';
import justgoApp from './../assets/go_app.png';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: 'center',
    },
    bounceHeader: {
        width: '100%',
        height: 200,
        backgroundColor: '#38c357',
        position: 'fixed',
        zIndex: 1,
        top: -200
    },
    title: {
        paddingTop: 10,
        paddingBottom: 5,
        textAlign: 'center',
    },
    title2: {
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 30,
        textAlign: 'left'
    },
    footer: {
        flexGrow: 1,
        paddingTop: 5,
        paddingBottom: 5,
        width: '100%',
        color: '#fff',
        backgroundColor: "#605f5f",
    },
    footerLink: {
        textDecoration: 'none',
        color: '#fff',
    },
    bounceFooter: {
        width: '100%',
        height: 200,
        backgroundColor: '#605f5f',
        position: 'fixed',
        bottom: -200
    },
    marginTop: {
        marginTop: 64
    },
    marginTop2: {
        marginTop: 50
    },
    padding: {
        padding: 10
    }
});

class HomePage extends Component {
    state = {
        slide: 0
    };

    render() {
        const { classes, width } = this.props;
        const date = new Date();
        const username = "info";
        const hostname = "lucky-lamb.com";
        const linktext = username + "@" + hostname;
        const email = <a className={classes.footerLink} href={`mailto:${username}@${hostname}`}>{linktext}</a>;
        let appImage;
        if (width === 'xs') {
            appImage = <img style={{ display: 'inline-block', margin: "0px 20px 20px 20px" }} src={justgoApp} alt="Just Go Home" height="300" />
        } else {
            appImage = <img style={{ display: 'inline-block', margin: "50px 20px 20px 20px" }} src={justgoApp} alt="Just Go Home" height="425" />
        }

        return (
            <div name={"top"}>
                <div className={classes.bounceHeader}></div>

                <NavBar />
                <SliderTop />

                <div className={classes.root}>
                    <Grid name="how-it-works" container justify="center" spacing={0} style={{ marginTop: 20, paddingLeft: 24, paddingRight: 24 }}>
                        <Grid item xs={12} className={classes.title}>
                            <Typography variant="h4" style={{ marginBottom: 20 }}>How it works</Typography>
                        </Grid>
                        <Grid item xs={12} md={3} className={classes.padding}>
                            <Paper className={classes.paper}>
                                <PhonelinkRing style={{ color: '#605f5f', fontSize: 40, marginBottom: 10 }} />
                                <Typography style={{ color: '#605f5f', fontSize: 18 }} variant="body1">Scan the QR code on your bill using the JustGo app.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3} className={classes.padding}>
                            <Paper className={classes.paper}>
                                <PermIdentity style={{ color: '#605f5f', fontSize: 40, marginBottom: 10 }} />
                                <Typography style={{ color: '#605f5f', fontSize: 18 }} variant="body1">Log in to your account or select a one-time payment.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3} className={classes.padding}>
                            <Paper className={classes.paper}>
                                <AttachMoney style={{ color: '#605f5f', fontSize: 40, marginBottom: 10 }} />

                                <Typography style={{ color: '#605f5f', fontSize: 18 }} variant="body1">Select a tip percentage to add it your bill and submit payment.</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3} className={classes.padding}>
                            <Paper className={classes.paper}>
                                <Email style={{ color: '#605f5f', fontSize: 40, marginBottom: 10 }} />

                                <Typography style={{ color: '#605f5f', fontSize: 18 }} variant="body1">A copy of the receipt is sent to your email address!</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

                <div className={classes.root}>
                    <Grid style={{ marginTop: 20, marginBottom: 20 }} name="why-justgo" container justify="flex-end" spacing={0}>
                        <Grid item xs={12} md={6}>
                            <div style={{ textAlign: 'center' }}>
                                {appImage}
                            </div>
                        </Grid>



                        <Grid style={{ marginTop: 10, paddingLeft: 50, paddingRight: 50 }} item xs={12} md={6}>
                            <Typography variant="h5">Why JustGo?</Typography>

                            <Typography style={{ marginTop: 20, color: '#605f5f', fontSize: 18 }} variant="body1">The traditional method works – but it leaves a lot on the table.</Typography>

                            <Typography style={{ marginTop: 20, color: '#605f5f', fontSize: 18 }} variant="body1">Consumers are coming to expect a mobile payment option wherever they spend, but restaurants and bars have been slow to adapt. For decades, waitstaff and bartenders have had to take time to complete purchases, and patrons have been left waiting before they can pay and leave. Cards get lost, purchased items get missed, and everyone gets frustrated.</Typography>

                            <Typography style={{ marginTop: 20, color: '#605f5f', fontSize: 18 }} variant="body1">JustGo improves customer handling efficiency and turnaround time by reducing the number of touches needed to complete transactions.</Typography>

                            <Typography style={{ marginTop: 20, color: '#605f5f', fontSize: 18 }} variant="body1">At its base, JustGo has been designed to stay out of the way of its users on both ends, facilitating smoother transactions and better customer experiences. Restaurants and bars benefit from the faster turnaround time and reduced handling time for waitstaff and bartenders, and customers can simply pay when they’re done and leave as soon as they’re ready.</Typography>

                        </Grid>
                    </Grid>
                </div>

                <div className={classes.root}>
                    <Grid style={{ marginBottom: 50 }} name="about" container justify="left" spacing={0}>
                        <Grid style={{ marginTop: 20, paddingLeft: 50, paddingRight: 50 }} item xs={12} md={6}>
                            <Typography variant="h5">Misssion</Typography>
                            <Typography style={{ color: '#605f5f', fontSize: 18 }} variant="body1">JustGo was developed by Lucky-Lamb to simplify how transactions are completed in bars and restaurants, allowing patrons to make payments through an intuitive and familiar process right on their smartphones.</Typography>

                            <Typography style={{ marginTop: 30 }} variant="h5">About Lucky-Lamb</Typography>
                            <Typography style={{ color: '#605f5f', fontSize: 18 }} variant="body1">Founder Lawrence Cymbura and Co-Founder Eric Tine developed the JustGo concept into a fully functioning application.</Typography>
                        </Grid>

                    </Grid>
                </div>

                {/* <div className={classes.root}>
                    <Grid container justify="center" spacing={0}>
                        <Grid item xs={12} style={{ marginTop: 20, marginBottom: 20, paddingLeft: 50, paddingRight: 50 }}>
                            <img style={{ display: 'block', margin: '10px auto 10px auto' }} width="250" src={appStore} alt="App Store Logo" />
                        </Grid>
                    </Grid>
                </div> */}

                <footer className={classes.footer} name="contact">
                    <CookieConsent>
                        This website uses cookies to enhance the user experience.
                    </CookieConsent>
                    <ul style={{ paddingLeft: 0, textAlign: 'center' }}>
                        <li style={{ display: 'inline', marginRight: 10 }}>&#169; Lucky-Lamb {date.getFullYear()}</li>
                        <li style={{ display: 'inline', marginRight: 10 }}>{email}</li>
                        <li style={{ display: 'inline' }}><Link className={classes.footerLink} target={'_blank'} to="/privacy">Privacy</Link></li>
                    </ul>
                </footer>
                <div className={classes.bounceFooter}></div>
            </div >
        );
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(HomePage));
