import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';
import Slider from "react-slick";
import pic from './../assets/dan-gold-105699-unsplash.jpg';
import pic1 from './../assets/david-straight-341873-unsplash.jpg';
import pic2 from './../assets/jay-wennington-2065-unsplash.jpg';
import pic3 from './../assets/katlyn-giberson-185277-unsplash.jpg';
import pic4 from './../assets/stil-336188-unsplash.jpg';

const styles = {
    grow: {
        flexGrow: 1,
    },
    bounceHeader: {
        width: '100%',
        height: 200,
        backgroundColor: '#69c39e',
        position: 'fixed',
        zIndex: 1,
        top: -200
    },
    sliderText: {
        position: 'absolute',
        display: 'block',
        zIndex: 2,
        marginTop: -40,
        top: '50%',
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 50,
        fontWeight: 500
    },
    sliderTextMediaQuerySM: {
        position: 'absolute',
        display: 'block',
        zIndex: 2,
        marginTop: -20,
        top: '50%',
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 45,
        fontWeight: 500
    },
    sliderTextMediaQueryXS: {
        position: 'absolute',
        display: 'block',
        marginTop: -40,
        zIndex: 2,
        top: '50%',
        color: '#fff',
        width: '100%',
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: 30,
        fontWeight: 500
    },
    sliderLayOver: {
        position: 'absolute',
        zIndex: 1,
        marginTop: -2,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '100%',
        height: '100%'
    },
    photoCredit: {
        position: 'absolute',
        zIndex: 1,
        fontSize: 12,
        color: '#cccccc',
        right: 15,
        bottom: 0
    },
    footer: {
        height: 100,
        width: '100%',
        backgroundColor: 'gray'
    },
    footerBox: {
        width: '100%',
        height: 200,
        backgroundColor: 'grey',
        position: 'fixed',
        bottom: -200
    },
    marginTop: {
        marginTop: 64
    },
    marginTop2: {
        marginTop: 50
    },
};

class SliderTop extends Component {
    constructor() {
        super();
        this.state = {
            slide: 0,
        }
    }

    render() {
        const { classes, width } = this.props;
        const counter = () => {
            this.setState(prevState => ({
                slide: prevState.slide + 1
            }));
        };
        const resetCounter = () => {
            this.setState({ slide: 0 });
        };

        var settings = {
            dots: false,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 3000,
            arrows: false,
            fade: true,
            pauseOnHover: false,
            beforeChange: () => {
                if (this.state.slide === 4) {
                    resetCounter();
                } else {
                    counter();
                }
            }
        };
        let mediaQuery;
        let mediaQuery2;
        if (width === 'sm') {
            mediaQuery = styles.sliderTextMediaQuerySM;
        } else if (width === 'xs') {
            mediaQuery = styles.sliderTextMediaQueryXS;
            mediaQuery2 = classes.marginTop2;
        } else {
            mediaQuery = styles.sliderText;
            mediaQuery2 = classes.marginTop;
        }
        return (
            <Slider className={mediaQuery2} {...settings}>
                <div>
                    <Typography variant="h1" style={mediaQuery}
                        className={
                            this.state.slide === 0 ?
                                "animated fadeInRight delay-2s" :
                                ""}
                    >
                        Pay when you’re done, go when you’re ready.
                    </Typography>

                    <span style={styles.sliderLayOver}
                        className={
                            this.state.slide === 0 ?
                                "animated fadeIn delay-2s" :
                                ""}
                    />
                    <p className={classes.photoCredit}>Photo by Dan Gold on Unsplash</p>
                    <img src={pic} alt="pic" width={'100%'} />
                </div>
                <div>
                    <Typography variant="h1" style={mediaQuery}
                        className={
                            this.state.slide === 1 ?
                                "animated fadeInRight delay-2s" :
                                ""}>
                        Never forget your card at the bar again.
                    </Typography>

                    <span style={styles.sliderLayOver}
                        className={
                            this.state.slide === 1 ?
                                "animated fadeIn delay-2s" :
                                ""}
                    />
                    <p className={classes.photoCredit}>Photo by David Straight on Unsplash</p>
                    <img src={pic1} alt="pic 1" width={'100%'} />
                </div>
                <div>
                    <Typography variant="h1" style={mediaQuery}
                        className={
                            this.state.slide === 2 ?
                                "animated fadeInRight delay-2s" :
                                ""}>
                        A better way to pay at bars and restaurants.
                    </Typography>

                    <span style={styles.sliderLayOver}
                        className={
                            this.state.slide === 2 ?
                                "animated fadeIn delay-2s" :
                                ""}
                    />
                    <p className={classes.photoCredit}>Photo by Jay Wennington on Unsplash</p>
                    <img src={pic2} alt="pic 2" width={'100%'} />
                </div>
                <div>
                    <Typography variant="h1" style={mediaQuery}
                        className={
                            this.state.slide === 3 ?
                                "animated fadeInRight delay-2s" :
                                ""}>
                        Eat, pay, go!
                    </Typography>

                    <span style={styles.sliderLayOver}
                        className={
                            this.state.slide === 3 ?
                                "animated fadeIn delay-2s" :
                                ""}
                    />
                    <p className={classes.photoCredit}>Photo by Katlyn Giberson on Unsplash</p>
                    <img src={pic3} alt="pic 3" width={'100%'} />
                </div>
                <div>
                    <Typography variant="h1" style={mediaQuery}
                        className={
                            this.state.slide === 4 ?
                                "animated fadeInRight delay-2s" :
                                ""}>
                        Don’t keep the babysitter waiting...
                    </Typography>

                    <span style={styles.sliderLayOver}
                        className={
                            this.state.slide === 4 ?
                                "animated fadeIn delay-2s" :
                                ""}
                    />
                    <p className={classes.photoCredit}>Photo by STIL on Unsplash</p>
                    <img src={pic4} alt="pic 4" width={'100%'} />
                </div>
            </Slider>
        );
    }
}

SliderTop.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withWidth()(SliderTop));
