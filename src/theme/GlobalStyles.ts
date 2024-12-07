import { StyleSheet  } from 'react-native';
import { Colores } from './Colores';
import { Tamaño } from './Tamaño';

export const GlobalStyles = StyleSheet.create({


    pantallaPrincipal: {
        fontSize: Tamaño.textoGrandeFontSize,
        textAlign: 'right',
        fontWeight: Tamaño.anchoGrandeFontWeight,
        width: '90%',
        color: Colores.colorTextoApp,
    },

    pantallaPrincipal2: {
        fontSize: Tamaño.textoPequeñoFontSize,
        textAlign: 'right',
        width: '90%',
        color: Colores.colorTextoApp,
    },

    botonNumero: {
        width: 80,
        textAlign: 'center',
        padding: 10,
        fontSize: Tamaño.textoBotonFontSize,
        fontWeight: Tamaño.anchoBotonFontWeight,
        borderColor: Colores.bordeBoton, 
        borderWidth: 2,
        backgroundColor: Colores.botonNumero,
        borderRadius: 30, 
    },

    botonOperaciones: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: Tamaño.textoBotonFontSize,
        fontWeight: Tamaño.anchoBotonFontWeight,
        borderColor: Colores.bordeBoton,
        borderWidth: 2,
        backgroundColor: Colores.botonOperacion,
        borderRadius: 30,
    },

    botonOtros: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: Tamaño.textoBotonFontSize,
        fontWeight: Tamaño.anchoBotonFontWeight,
        borderColor: Colores.bordeBoton,
        borderWidth: 2,
        backgroundColor: Colores.botonOtros,
        borderRadius: 30,
    },

    container: {
        flex: 1,
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:0,
    },
      
    fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
    },

});