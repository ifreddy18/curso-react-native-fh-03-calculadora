import React, { VoidFunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    texto: string,
    backgroundColor?: string,
    color?: string,
    ancho?: boolean,
    accion: (numeroTexto: string) => void,
};

export const BotonCalc = ({ 
    texto, 
    backgroundColor = '#2D2D2D', 
    color = 'white',
    ancho = false,
    accion
}: Props) => {
    return (
        <TouchableOpacity onPress={ () => accion(texto) }>
            <View style={{
                ...styles.boton,
                backgroundColor: backgroundColor,
                width: (ancho) ? 180 : 80
            }}>
                <Text style={{
                    ...styles.botonTexto,
                    color: color,
                }}>{ texto }</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: '400',
    }
});