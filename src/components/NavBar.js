import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import MobileNav from './MobileNav';
import * as Scroll from 'react-scroll';
import logo from './../assets/logo.svg';

const LinkTo = Scroll.Link;

const styles = {
    grow: {
        flexGrow: 1,
    },
    navBar: {
        backgroundColor: '#38c357',
        boxShadow: 'none',
    },
    navBarMobile: {
        height: 50,
        backgroundColor: '#38c357',
        boxShadow: 'none',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navBtn: {
        cursor: 'pointer',
        fontWeight: 500,
        padding: 10,
        '&:hover': {
            color: '#605f5f',
            backgroundColor: 'transparent'
        },
        '&:active': {
            backgroundColor: 'transparent'
        },
        '&:focus': {
            backgroundColor: 'transparent'
        }
    }
};

const NavBar = props => {
    const { classes, width } = props;
    let nav;

    if (width === 'xs') {
        nav = (
            <AppBar className={classes.navBarMobile} position="fixed">
                <Toolbar style={{ minHeight: 0 }}>
                    <LinkTo style={{ flex: 1, marginLeft: -10 }} className={classes.navBtn} activeClass="active" to="top" spy={true} smooth={true}
                        offset={-100} duration={500}>
                        <img height={30} src={logo} alt="Lucky Lamb Logo" />
                    </LinkTo>
                    <MobileNav />
                </Toolbar>
            </AppBar>
        );
    } else {
        nav = (
            <AppBar className={classes.navBar} position="fixed">
                <Toolbar style={{ minHeight: 64 }}>
                    <LinkTo className={classes.navBtn} activeClass="active" to="top" spy={true} smooth={true}
                        offset={-100} duration={500}>
                        <img height={30} src={logo} alt="Lucky Lamb Logo" />
                    </LinkTo>
                    <Grid container={true} justify={"flex-end"}>
                        <LinkTo className={classes.navBtn} activeClass="active" to="how-it-works" spy={true}
                            smooth={true} offset={-80} duration={500}>
                            How It Works
                        </LinkTo>
                        <LinkTo className={classes.navBtn} activeClass="active" to="why-justgo" spy={true} smooth={true}
                            offset={-80} duration={500}>
                            Why JustGo?
                        </LinkTo>
                        <LinkTo className={classes.navBtn} activeClass="active" to="about" spy={true} smooth={true}
                            offset={-80} duration={500}>
                            About Us
                        </LinkTo>
                        <LinkTo className={classes.navBtn} activeClass="active" to="contact" spy={true} smooth={true}
                            offset={-80} duration={500}>
                            Contact Us
                        </LinkTo>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
    return nav;
};

export default withStyles(styles)(withWidth()(NavBar));
