import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import IntroComp from '../components/Intro/Intro';
import AppIntroSlider from 'react-native-app-intro-slider';
import Home from './Home';
import { YELLOW } from '../utils/constants';

const first = `Find,fund and track  development
               projects in the emerging world
               contributing to the attainment of the
               Sustainable Development Goals(SDGS)`;
const second = `Propose and execute development
                projects in a trasnsparent manner with
                impact-driven measurement and 
                advanced analytics`;
const third = `Provide progress updates on
                project within your community.
                Become an active citizen and lead
                change through accountability`;

const styles = StyleSheet.create({
    image: {
        height: '70%',
        width: '100%',
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

const slides = [
    {
        key: 'first',
        image: require('../../assets/img/building.png'),
    },
    {
        key: 'second',
        image: require('../../assets/img/man.png'),
        imageStyle: styles.image,

    },
    {
        key: 'third',
        image: require('../../assets/img/woman.png'),
    }
];

export default class Intro extends React.Component {
    state = {
        showRealApp: false
    }
    onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        this.setState({ showRealApp: true });
    }
    renderItem = props => (

        <IntroComp
            image={props.image}
            shortText={props.key === 'first' ? 'Fund' : props.key === 'second' ? 'Execute' : 'Evaluate'}
            longText={
                props.key === 'first' ? first
                    : props.key === 'second' ?
                        second : third
            }
        />
    );

    render() {
        if (this.state.showRealApp) {
            return <Home
                props={this.props}
            />;
        } else {
            return <AppIntroSlider style={{ flex: 1 }}
                buttonTextStyle={
                    {
                        color: 'red'
                    }
                }
                activeDotStyle={{
                    backgroundColor: YELLOW
                }}
                buttonTextStyle='red'
                showSkipButton={true}
                slides={slides}
                renderItem={this.renderItem}
                onDone={this.onDone} />
        }
    }
};
