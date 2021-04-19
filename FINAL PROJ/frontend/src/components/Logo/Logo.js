import React from 'react';
import Tilt from 'react-tilt'
import brain from './thejorge2.png'
import kiwi from './kiwi.svg'
import './Logo.css';
import * as Tone from 'tone'
// react-icons
import { FaBeer } from 'react-icons/fa';


const Synth = new Tone.MembraneSynth();  

const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
const pingPong2 = new Tone.PingPongDelay("1n", 0.5).toDestination();

function playSynth() {
    const vol = new Tone.Volume(-24).toDestination();
    Synth.triggerAttackRelease('F#2', '8n').connect(vol);
}

function playNoSynth() {
    Synth.triggerAttackRelease('F#2', '2n').connect(pingPong2);
}

// tried to get this https://course-source-err.herokuapp.com/public/camel(melody).mp3 to play no success

function playKiwi() {
    // const filter = new Tone.Filter(1500, "highpass").toDestination();
    // filter.frequency.rampTo(20000, 10);
    // const noise = new Tone.Noise().connect(filter).start();
    // const filter = new Tone.Filter(100, 'lowpass').toDestination();
    // const feedbackDelay = new Tone.FeedbackDelay(0.125, 0.5).toDestination();
    const vol = new Tone.Volume(-12).toDestination();


    const player = new Tone.Player("https://tippi-fifestarr.github.io/Present/ipsum-navajobeat(0).wav").toDestination();
    
    Tone.loaded().then(() => {
	//    feedback delay and filter in parallel  
        // player.connect(filter);
        // player.connect(feedbackDelay);  
        player.connect(vol).start();
    });
}

const Logo = () => {
    return (
        // i'd like to replace this with the "user" img
        <div className='ma4 mt0 flex'>
            <Tilt className="Tilt br3 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa1"> 
                    <img onClick={playSynth} style={{paddingTop: '10px'}} alt="the jorge in his arte 101" src={brain}/>
                </div>
            </Tilt>
            <Tilt options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa1"> 
                    <img onClick={playKiwi} style={{paddingTop: '10px'}} alt="sliced kiwi cartoon" src={kiwi}/>
                </div>
            </Tilt>
            <Tilt options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa1"> 
                    <FaBeer onClick={playNoSynth} size='10rem' style={{paddingTop: '10px', }} alt="its a beer"/>
                </div>
            </Tilt>
            
        </div>
    )
}

export default Logo;