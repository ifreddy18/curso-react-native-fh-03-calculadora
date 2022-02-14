import React from 'react';
import { View, Text } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

	const {
		numeroAnterior,
		numero,
		clean,
		positivoNegativo,
		btnDelete,
		btnDividir,
		armarNumero,
		btnMultiplicar,
		btnRestar,
		btnSumar,
		calcular,
	} = useCalculadora();

	return (
		<View style={styles.calculadoraContainer}>
			{
				( numeroAnterior !== '0' ) &&
					<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
			}
			<Text
				style={styles.resultado}
				numberOfLines={1}
				adjustsFontSizeToFit
			>{numero}</Text>

			{/* Fila de Botones */}
			<View style={styles.row}>
				<BotonCalc texto="C" backgroundColor="#9B9B9B" color="black" accion={clean} />
				<BotonCalc texto="+/-" backgroundColor="#9B9B9B" color="black" accion={positivoNegativo} />
				<BotonCalc texto="del" backgroundColor="#9B9B9B" color="black" accion={btnDelete} />
				<BotonCalc texto="/" backgroundColor="#FF9427" accion={btnDividir} />
			</View>

			{/* Fila de Botones */}
			<View style={styles.row}>
				<BotonCalc texto="7" accion={armarNumero} />
				<BotonCalc texto="8" accion={armarNumero} />
				<BotonCalc texto="9" accion={armarNumero} />
				<BotonCalc texto="X" backgroundColor="#FF9427" accion={btnMultiplicar} />
			</View>

			{/* Fila de Botones */}
			<View style={styles.row}>
				<BotonCalc texto="4" accion={armarNumero} />
				<BotonCalc texto="5" accion={armarNumero} />
				<BotonCalc texto="6" accion={armarNumero} />
				<BotonCalc texto="-" backgroundColor="#FF9427" accion={btnRestar} />
			</View>

			{/* Fila de Botones */}
			<View style={styles.row}>
				<BotonCalc texto="1" accion={armarNumero} />
				<BotonCalc texto="2" accion={armarNumero} />
				<BotonCalc texto="3" accion={armarNumero} />
				<BotonCalc texto="+" backgroundColor="#FF9427" accion={btnSumar} />
			</View>

			{/* Fila de Botones */}
			<View style={styles.row}>
				<BotonCalc texto="0" accion={armarNumero} ancho />
				<BotonCalc texto="." accion={armarNumero} />
				<BotonCalc texto="=" backgroundColor="#FF9427" accion={calcular} />
			</View>

		</View>
	);
};
