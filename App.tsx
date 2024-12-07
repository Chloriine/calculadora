import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from "./src/theme/GlobalStyles";

export default function App() {
  const {
    formula,
    numeroAnterior,
    construirNumero,
    clean,
    cambiarSigno,
    borrarDigito,
    operaciones,
    resultado,
    Operadores,
  } = useCalculadora();

  return (
    <ImageBackground
    source={ require('./assets/beemo.jpg') }
      style={{ flex: 1 }} 
      resizeMode="cover" 
    >
      <View style={GlobalStyles.container}>
        <Pantalla sizePantalla="grande">{formula}</Pantalla>

        {formula === numeroAnterior ? (
          <Pantalla sizePantalla="pequeño"> </Pantalla>
        ) : (
          <Pantalla sizePantalla="pequeño">{numeroAnterior}</Pantalla>
        )}

        <StatusBar style="auto" />

        <View style={GlobalStyles.fila}>
          <BotonOperacion label="C" uso="otros" onPress={clean}></BotonOperacion>
          <BotonOperacion label="+/-" uso="otros" onPress={cambiarSigno}></BotonOperacion>
          <BotonOperacion label="del" uso="otros" onPress={borrarDigito}></BotonOperacion>
          <BotonOperacion label="/" uso="operaciones" onPress={() => operaciones(Operadores.dividir)}></BotonOperacion>
        </View>
        <View style={GlobalStyles.fila}>
          <BotonOperacion label="7" uso="numeros" onPress={() => construirNumero('7')}></BotonOperacion>
          <BotonOperacion label="8" uso="numeros" onPress={() => construirNumero('8')}></BotonOperacion>
          <BotonOperacion label="9" uso="numeros" onPress={() => construirNumero('9')}></BotonOperacion>
          <BotonOperacion label="x" uso="operaciones" onPress={() => operaciones(Operadores.multiplicar)}></BotonOperacion>
        </View>
        <View style={GlobalStyles.fila}>
          <BotonOperacion label="4" uso="numeros" onPress={() => construirNumero('4')}></BotonOperacion>
          <BotonOperacion label="5" uso="numeros" onPress={() => construirNumero('5')}></BotonOperacion>
          <BotonOperacion label="6" uso="numeros" onPress={() => construirNumero('6')}></BotonOperacion>
          <BotonOperacion label="-" uso="operaciones" onPress={() => operaciones(Operadores.restar)}></BotonOperacion>
        </View>
        <View style={GlobalStyles.fila}>
          <BotonOperacion label="1" uso="numeros" onPress={() => construirNumero('1')}></BotonOperacion>
          <BotonOperacion label="2" uso="numeros" onPress={() => construirNumero('2')}></BotonOperacion>
          <BotonOperacion label="3" uso="numeros" onPress={() => construirNumero('3')}></BotonOperacion>
          <BotonOperacion label="+" uso="operaciones" onPress={() => operaciones(Operadores.sumar)}></BotonOperacion>
        </View>
        <View style={GlobalStyles.fila}>
          <BotonOperacion label="0" uso="numeros" width={180} onPress={() => construirNumero('0')}></BotonOperacion>
          <BotonOperacion label="." uso="numeros" onPress={() => construirNumero('.')}></BotonOperacion>
          <BotonOperacion label="=" uso="operaciones" onPress={resultado}></BotonOperacion>
        </View>
      </View>
    </ImageBackground>
  );
}
