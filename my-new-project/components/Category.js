// components/Category.js
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const categories = [
    { name: 'Exercise', image: require('../assets/images/exercise.png'), tasks: 12 },
    { name: 'Study', image: require('../assets/images/study.png'), tasks: 12 },
    { name: 'Code', image: require('../assets/images/code.png'), tasks: 10 },
    { name: 'Cook', image: require('../assets/images/cook.png'), tasks: 8 },
    { name: 'Read', image: require('../assets/images/read.png'), tasks: 6 },
    { name: 'Meditate', image: require('../assets/images/meditate.png'), tasks: 7 },
    { name: 'Shop', image: require('../assets/images/shop.png'), tasks: 5 },
    { name: 'Clean', image: require('../assets/images/clean.png'), tasks: 9 },
];

const Category = () => {
    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.heading}>Categories</Text>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <View style={styles.category}>
                        <Image source={item.image} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>{item.name}</Text>
                        <Text style={styles.taskCount}>{item.tasks} Tasks</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
            />
        </View>
    );
};

const styles = StyleSheet.create({
    categoryContainer: {
        padding: 20,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    category: {
        alignItems: 'center',
        marginRight: 15,
    },
    categoryImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
    taskCount: {
        fontSize: 14,
        color: 'grey',
    },
});

export default Category;
