import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';

import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';

// import { Container } from './styles';

const Home = () => {

    useEffect(() => {
        if (Platform.OS === 'ios') {
            CardIOUtilities.preload();
        }
    }, []);

    const scanCard = () => {
        CardIOModule
            .scanCard()
            .then(card => {
                console.log(card);
            })
            .catch(() => {
                // the user cancelled
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.desc}>Testes para a parte de pagamento dos apps.</Text>
            <TouchableOpacity 
                style={styles.btnScan}
                onPress={scanCard}>
                <Text style={styles.txtBtn}>Scanear Cartão de credito</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    btnScan: {
        backgroundColor: '#ff3300', 
        height: 56, 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 15,
        borderRadius: 3
    },
    txtBtn: {
        color: '#fff',
        fontSize: 18,
        fontWeight: "600"
    },
    desc: {
        fontWeight: "600",
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20
    }
})

export default Home;

