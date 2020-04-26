import React from 'react';
import '../../css/Buttons.css';

export default function ButtonsLoad(props) {

  function playSound(id){
		let button = document.getElementById(id+"Button");
		let originalBackgroundImage = button.style.backgroundImage;
		let audio = document.getElementById(id+"Sound");

		changeImageText(button, originalBackgroundImage, 1);

		audio.play();
		audio.onended = function() {
			changeImageText(button, originalBackgroundImage, 0);
		};
	}

	function changeImageText(button, originalBackgroundImage, audioContext){
		if(audioContext){
			button.style.fontSize = '20px';
			button.style.backgroundImage = 'none';
		}else{
			button.style.fontSize = 0;
			button.style.backgroundImage = originalBackgroundImage;
		}
	}

	return (
    <div id="container">
			<h1 className="title">{props.title}</h1>
    	<div id="container-buttons">
				{	
					props.buttons.map(function(item, i){
						return (
							<div className="containerInn" key={i}>
								<audio id={item.id + 'Sound'}>
									<source src={item.soundPath} type="audio/wav" />
								</audio>
								<button 
									className={item.id + " " + props.imageClass}
									id={item.id + 'Button'} 
									onClick={() => {playSound(item.id)}}>
									{item.name}
								</button>								
							</div>
						)
					})
				}
			</div>
		</div>
  );
}
