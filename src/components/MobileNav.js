import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import * as Scroll from 'react-scroll';
import { withStyles } from "@material-ui/core";

const LinkTo = Scroll.Link;
// const scroll = Scroll.animateScroll;

const styles = {
    navMenu: {
        color: 'white',
        backgroundColor: 'transparent',
        marginRight: -10,
        '&:active': {
            backgroundColor: 'transparent'
        },
        '&:focus': {
            backgroundColor: 'transparent'
        }
    }
};

const ITEM_HEIGHT = 48;

class MobileNav extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        // const { classes } = this.props;

        return (
            <div>
                <IconButton
                    style={styles.navMenu}
                    aria-label="More"
                    aria-owns={open ? 'long-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    <Icon fontSize="large">menu</Icon>
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: 200,
                        },
                    }}
                >
                    <LinkTo style={{ outline: 'none' }} activeClass="active" to="how-it-works" spy={true} smooth={true} offset={-50} duration={500}>
                        <MenuItem onClick={this.handleClose}>
                            How It Works
                        </MenuItem>
                    </LinkTo>
                    <LinkTo style={{ outline: 'none' }} activeClass="active" to="why-justgo" spy={true} smooth={true} offset={-50} duration={500}>
                        <MenuItem onClick={this.handleClose}>
                            Why JustGo
                        </MenuItem>
                    </LinkTo>
                    <LinkTo style={{ outline: 'none' }} activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}>
                        <MenuItem onClick={this.handleClose}>
                            About Us
                        </MenuItem>
                    </LinkTo>
                    <LinkTo style={{ outline: 'none' }} activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>
                        <MenuItem onClick={this.handleClose}>
                            Contact
                        </MenuItem>
                    </LinkTo>
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(MobileNav);
