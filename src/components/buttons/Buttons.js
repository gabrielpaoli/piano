import React from "react";
import '../../css/Buttons.css';
import ButtonsLoad from "./ButtonsLoad";
import animals from "../../json/animals.json";
import musicalInstruments from "../../json/musicalInstruments.json";

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

		</div>
  );
}
