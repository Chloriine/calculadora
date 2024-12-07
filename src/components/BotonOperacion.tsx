import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from '../theme/GlobalStyles';
import { Vibration } from 'react-native';
import * as Haptics from 'expo-haptics';

interface Props {
    label: string,
    width?: number,
    onPress: () => void;
    uso: 'numeros' | 'operaciones' | 'otros'
}


export const BotonOperacion = ({label, width=80, uso, onPress}:Props) => {

    const handlePress = () => {
        onPress();
        Haptics.selectionAsync();
        console.log('ahora vibro');
    };

    return (
        <Pressable>
            <Text 
                style={[uso === 'numeros' ? GlobalStyles.botonNumero : uso === 'operaciones' ? GlobalStyles.botonOperaciones : GlobalStyles.botonOtros, {width}]}
                onPress={handlePress}>{label}</Text>
        </Pressable>
    )
};