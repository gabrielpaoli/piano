import React from "react";
import '../../css/Buttons.css';
import ButtonsLoad from "./ButtonsLoad";
import animals from "../../json/animals.json";
import musicalInstruments from "../../json/musicalInstruments.json";
import vowels from "../../json/vowels.json";
import numbers from "../../json/numbers.json";

export default function Buttons() {
	return (
    <div id="container">
			<ButtonsLoad
				title={'Animales'}
				buttons={animals}
				imageClass={'buttonAnimalSound'}
			/>

			<ButtonsLoad
				title={'Instrumentos musicales'}
				buttons={musicalInstruments}
				imageClass={'buttonMusicalInstrumentSound'}
			/>

			<ButtonsLoad
				title={'Vocales'}
				buttons={vowels}
				imageClass={'buttonVowels'}
			/>

			<ButtonsLoad
				title={'Numeros'}
				buttons={numbers}
				imageClass={'buttonNumbers'}
			/>
		</div>
  );
}
