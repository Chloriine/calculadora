import { Text, type TextProps, StyleSheet } from 'react-native';
import { GlobalStyles } from '../theme/GlobalStyles';

interface Props extends TextProps {
    sizePantalla: 'grande' | 'pequeño'
};

export const Pantalla = ({children, sizePantalla, ...rest}:Props) => {
  return (
    <Text style={sizePantalla === 'grande' ? GlobalStyles.pantallaPrincipal : GlobalStyles.pantallaPrincipal2} numberOfLines={1} adjustsFontSizeToFit {...rest}>
        {children}
    </Text>
  )
}


