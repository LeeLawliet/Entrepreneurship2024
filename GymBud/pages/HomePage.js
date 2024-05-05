import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const HomePage = () => {
    const screenWidth = Dimensions.get('window').width;
    const squareWidth = 200;
    const data = [
        { id: 1, name: 'Square 1' },
        { id: 2, name: 'Square 2' },
        { id: 3, name: 'Square 3' },
        { id: 4, name: 'Square 4' },
    ];

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={styles.square}
            onPress={() => console.log(`${item.name} pressed`)}
        >
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Carousel
                data={data}
                renderItem={renderItem}
                sliderWidth={screenWidth}
                itemWidth={squareWidth}
                containerCustomStyle={styles.carouselContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    carouselContainer: {
        paddingTop: 20,
    },
    square: {
        width: 200,
        height: 200,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
        borderRadius: 10,
        overflow: 'hidden',
    },
});

export default HomePage;
