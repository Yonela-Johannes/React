import { StyleSheet } from 'react-native';
import React from 'react';
import { grey } from '@material-ui/core/colors';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingTop: 20,
        paddingLeft: 10,
        display: 'flex',
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
        cursor: 'pointer',
        '&hover': {
            color: 'grey',
            backgroundColor: 'grey',
        }
    },

});

export default styles;