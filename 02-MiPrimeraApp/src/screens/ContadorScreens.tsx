import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

export const ContadorScreens = () => {
    const [contador, setContador] = useState(10)
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center'
            }}
        >
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: 40,
                    top: 100,
                }}
            >
                Contador: {contador}
            </Text>

            <Button
                title="Incrementar"
                onPress={()=>setContador(1)}
                
            />
        </View>
    )
}
