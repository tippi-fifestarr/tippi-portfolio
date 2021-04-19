import React from 'react';
import './ImageLinkForm.css'
import * as Tone from 'tone'

// const Player = new Tone.Player("./ipsum-lu_pit(curds).mp3").toMaster();  

// function playPlayer() {
//     Player.start()
// }
var buffer = new Tone.Buffer("./ipsum-lu_pit(curds).mp3", function(){
	//the buffer is now available.
	var buff = buffer.get();
});

const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();
Tone.loaded().then(() => {
	player.start();
});

// https://github.com/Tonejs/Tone.js/
// document.querySelector('button')?.addEventListener('click', async () => {
// 	await Tone.start()
// 	console.log('audio is ready')
// })

// const sampler = new buffer.Tone.Sampler({
// 	urls: {
// 		A1: "./ipsum-lu_pit(curds).mp3",
// 		A2: "./ipsum-lu_pit(curds).mp3",
// 	},
// 	baseUrl: "./ipsum-lu_pit(curds).mp3",
// 	onload: () => {
// 		sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
// 	}
// }).toDestination();

// renamed const ImageLinkForm = () => {
const ImageLinkForm = ({ onInputChange, onDetectPressed }) => {   
    return (
        <div>
            <p className='f3'> 
                {'(:This faces pictures into favfaces 😎. give it a try:)'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    {/* on change! */}
                    <input onChange={onInputChange}  className='f4 pa2 w-70 center' type='text' />
                    {/* added onclik */}
                    <button onClick={onDetectPressed} className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect
                    </button>
                </div>
            </div>
        </div>
    );
}


export default ImageLinkForm;