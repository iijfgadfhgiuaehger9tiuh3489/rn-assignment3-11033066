// components/OngoingTask.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const tasks = [
    'Mobile App Development', 'Web Development', 'Push Ups', // add 12 more tasks here
];

const OngoingTask = () => {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.heading}>Ongoing Task</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <Text style={styles.task}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        padding: 20,
        marginTop: -260
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    task: {
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 5,
        height: 110,
        width: 350
    },
});

export default OngoingTask;
