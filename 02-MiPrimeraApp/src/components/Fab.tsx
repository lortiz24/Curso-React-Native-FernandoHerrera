import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native'

interface Props {
    title: string,
    onPress: () => void,
    position?: 'br' | 'bl',
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                style={[styles.fabLocation, styles[position]]}
                activeOpacity={0.75}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    };
    const android = () => {
        return (
            <View style={[styles.fabLocation, styles[position]]}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                    onPress={onPress} >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    };


    return Platform.OS === 'android' ?android() : ios()
};

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 20,
    },
    br: {
        right: 10,
    },
    bl: {
        left: 10,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000", shadowOffset: { width: 0, height: 1, },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
