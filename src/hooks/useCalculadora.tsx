import { useRef, useState } from 'react'

enum Operadores {
	sumar, restar, multiplicar, dividir
};

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('100');
	const [numero, setNumero] = useState('100');

	const ultimaOperacion = useRef<Operadores>();

	const clean = () => {
		setNumeroAnterior('0');
		setNumero('0');
	};

	const positivoNegativo = () => {
		if (numero.includes('-')) {
			setNumero(numero.replace('-', ''));
		} else {
			setNumero('-' + numero);
		}
	};

	const btnDelete = () => {
		let negativo = '';
		let numeroTemp = numero;
		if (numero.includes('-')) {
			negativo = '-';
			numeroTemp = numero.substring(1);
		}

		if (numeroTemp.length > 1) {
			setNumero(negativo + numeroTemp.slice(0, -1));
		} else {
			setNumero('0');
		}
	};

	const armarNumero = (numeroTexto: string) => {

		// No aceptar más de un punto
		if (numero.includes('.') && numeroTexto === '.') return;

		if (numero.startsWith('0') || numero.startsWith('-0')) {

			// Punto decimal
			if (numeroTexto === '.') {
				setNumero(numero + numeroTexto);

				// Evaluar si es otro cero y hay un punto
			} else if (numeroTexto === '0' && numero.includes('.')) {
				setNumero(numero + numeroTexto);

				// Evaluar si es un numero diferente de cero y no hay punto
			} else if (numeroTexto !== '0' && !numero.includes('.')) {
				setNumero(numeroTexto);

				// Evitar el 00.
			} else if (numeroTexto === '0' && !numero.includes('.')) {
				setNumero(numero);
			} else {
				setNumero(numero + numeroTexto);
			}

		} else {
			setNumero(numero + numeroTexto);
		}

	};

	const cambiarNumeroPorAnterior = () => {
		if (numero.endsWith('.')) {
			setNumeroAnterior(numero.slice(0, -1));
		} else {
			setNumeroAnterior(numero);
		}
		setNumero('0');
	};

	const btnSumar = () => {
		cambiarNumeroPorAnterior();
		ultimaOperacion.current = Operadores.sumar;
	};

	const btnRestar = () => {
		cambiarNumeroPorAnterior();
		ultimaOperacion.current = Operadores.restar;
	};

	const btnMultiplicar = () => {
		cambiarNumeroPorAnterior();
		ultimaOperacion.current = Operadores.multiplicar;
	};

	const btnDividir = () => {
		cambiarNumeroPorAnterior();
		ultimaOperacion.current = Operadores.dividir;
	};

	const calcular = () => {

		const num1 = Number( numero );
		const num2 = Number( numeroAnterior );

		switch ( ultimaOperacion.current ) {
			case Operadores.sumar:
				setNumero(`${ num2 + num1 }`);
				setNumeroAnterior('0');
				break;
			
			case Operadores.restar:
				setNumero(`${ num2 - num1 }`);				
				setNumeroAnterior('0');
				break;
			
			case Operadores.multiplicar:
				setNumero(`${ num2 * num1 }`);				
				setNumeroAnterior('0');
				break;

			case Operadores.dividir:
				console.log({numero, numeroAnterior});
				if ( num1 !== 0 ) {
					setNumero(`${ num2 / num1 }`);
					setNumeroAnterior('0');
				}
				break;
		}
	};

    return {
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
    };


};