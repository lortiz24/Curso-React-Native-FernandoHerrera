import React, { useState } from 'react';
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export const ContadorScreens = () => {
    const [contador, setContador] = useState(10);
    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.text}
            >
                Contador: {contador}
            </Text>


            <TouchableOpacity
                style={styles.fabLocationBR}
                onPress={() => setContador(contador + 1)} >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        +1
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={() => setContador(contador - 1)} >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        -1
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 40,
        top: 100,
    },

    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 20,
        right: 10,
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 20,
        left: 10,
    },
    /* bottonIncrement: {
        backgroundColor: 'red',
        borderRadius: 100,
    } */
});