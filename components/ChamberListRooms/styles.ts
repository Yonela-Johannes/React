import { StyleSheet } from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 20,
        paddingLeft: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    midContainer: {
        display: 'flex',
        alignItems: 'flex-start',
    },

});

export default styles;