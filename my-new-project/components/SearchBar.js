// Import React library, which is necessary for creating React components.
import React from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const vectorImage = require('../assets/images/vector.png');

const SearchBar = () => {
    return (
        <View style={styles.searchContainer}>
            <TextInput style={styles.searchInput} placeholder="Search" />
            <TouchableOpacity onPress={() => {}}>
                <Image source={vectorImage} style={styles.filterIcon} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginRight: 10,
    },
    filterIcon: {
        width: 24,
        height: 24,
    },
});

export default SearchBar;
