// Import React library, which is necessary for creating React components.
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import OngoingTask from './components/OngoingTask';
import Category from './components/Category';

const App = () => {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Header />
            <SearchBar />
            <Category />
            <OngoingTask />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF0E6',
    },
    contentContainer: {
      alignItems: 'center',
      paddingBottom: 20,
      paddingTop: 50
    }
});

export default App;
