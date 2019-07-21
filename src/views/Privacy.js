import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    grow: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 50,
    }
});

class Privacy extends Component {
    componentDidMount() {
        document.title = "Lucky-Lamb Privacy"
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.grow}>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={24}>

                    <Grid item md={10}>
                        <h1 style={{ textAlign: 'center' }}>Privacy Notice</h1>
                        <p>
                            This privacy notice discloses the privacy practices for lucky-lamb.com.
                            This privacy notice applies solely to information collected by this website.
                            It will notify you of the following:
                        </p>
                        <ol>
                            <li>
                                What personally identifiable information is collected from you through the website,
                                how it is used and with whom it may be shared.
                            </li>
                            <li>
                                What choices are available to you regarding the use of your data.
                            </li>
                            <li>
                                The security procedures in place to protect the misuse of your information.
                            </li>
                            <li>
                                How you can correct any inaccuracies in the information.
                            </li>
                        </ol>

                        <h3>Information Collection, Use, and Sharing</h3>
                        <p>
                            We are the sole owners of the information collected on this site.
                            We only have access to/collect information that you voluntarily give us via
                            email or other direct contact from you. We will not sell or rent this information to anyone.
                        </p>
                        <p>
                            We will use your information to respond to you, regarding the reason you contacted us.
                            We will not share your information with any third party outside of our organization,
                            other than as necessary to fulfill your request.
                        </p>
                        <h3>Your Access to and Control Over Information.</h3>
                        <p>
                            Your Access to and Control Over Information. You can do the following at
                            any time by contacting us via the email address or phone number given on our website:
                        </p>
                        <ul>
                            <li>
                                See what data we have about you, if any.
                            </li>
                            <li>
                                Change/correct any data we have about you.
                            </li>
                            <li>
                                Have us delete any data we have about you.
                            </li>
                            <li>
                                Express any concern you have about our use of your data.
                            </li>
                        </ul>

                        <h3>Security</h3>
                        <p>
                            We take precautions to protect your information. When you submit sensitive information
                            via the website, your information is protected both online and offline.
                        </p>
                        <p>
                            Wherever we collect sensitive information, that information is encrypted and transmitted
                            to us in a secure way. You can verify this by looking for a lock icon in the address
                            bar and looking for "https" at the beginning of the address of the Web page.
                        </p>
                        <h3>Cookies</h3>
                        <p>
                            We use "cookies" on this site. A cookie is a piece of data stored on a site visitor's
                            hard drive to help us improve your access to our site and identify repeat visitors
                            to our site. For instance, when we use a cookie to identify you, you would not have to
                            log in a password more than once, thereby saving time while on our site.
                            Cookies can also enable us to track and target the interests of our users to enhance
                            the experience on our site. Usage of a cookie is in no way linked to any personally
                            identifiable information on our site.
                        </p>
                        <p>
                            Some of our business partners may use cookies on our site (for example, advertisers).
                            However, we have no access to or control over these cookies.
                        </p>
                        <p>
                            <strong>
                                If you feel that we are not abiding by this privacy policy, you should contact us
                                immediately via email at info@lucky-lamb.com.
                            </strong>
                        </p>
                    </Grid>

                </Grid>
            </Grid>

        );
    }


}

Privacy.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Privacy);
