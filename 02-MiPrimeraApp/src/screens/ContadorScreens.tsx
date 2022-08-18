import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

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


            <Fab title='+1' onPress={() => setContador(contador +1)} />
            <Fab title='-1' onPress={() => setContador(contador -1)} position='bl'/>



            {/* <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={() => setContador(contador - 1)} >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        -1
                    </Text>
                </View>
            </TouchableOpacity> */}
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

    /* bottonIncrement: {
        backgroundColor: 'red',
        borderRadius: 100,
    } */
});

