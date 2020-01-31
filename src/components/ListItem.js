import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import * as Animatable from 'react-native-animatable';

const deviceWidth = Dimensions.get('window').width;

export const ListItem = (props) => {
    const zoomOut = {
        0: {
            opacity: 0,
            scale: 0,
        },
        0.5: {
            opacity: 0,
            scale: 0.3,
        },
        1: {
            opacity: 1,
            scale: 1,
        },
    };

    return (
        <Animatable.View animation="fadeInUpBig" style={styles.container}>
            <View style={styles.containerImage}>
                <Animatable.Image delay={1000} animation="pulse" iterationCount={2} style={styles.image} source={{ uri: props.image }}></Animatable.Image>
            </View>
            <View style={styles.containerText}>
                <Animatable.Text style={styles.textTitle} delay={1000} animation="zoomInUp" > {props.title} </Animatable.Text>
                <Animatable.Text delay={1000} animation="fadeInRight" style={styles.description}> {props.description} </Animatable.Text>
            </View>
        </Animatable.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 5,
        paddingTop: 10
    },
    containerImage: {
        width: deviceWidth / 2.5,
        alignItems: 'center'
    },
    image: {
        width: deviceWidth / 2.7,
        height: deviceWidth / 2.5
    },
    containerText: {
        flex: 1,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
    },
    textDescription: {
        flexWrap: 'wrap'
    }
})
