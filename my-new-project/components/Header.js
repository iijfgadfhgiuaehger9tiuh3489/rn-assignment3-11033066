// Import React library, which is necessary for creating React components.
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const profileImage = require('../assets/images/avatar.png');

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.greeting}>Hello, Devs</Text>
            <Text style={styles.taskCount}>14 tasks today</Text>
            <Image source={profileImage} style={styles.avatar} />
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF0E6',
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    taskCount: {
        fontSize: 16,
        color: 'grey',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});

export default Header;
