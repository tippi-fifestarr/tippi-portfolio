import Tilt from 'react-tilt'
import './Logo.css';
import baby from './smilebaby.png'

const Logo = () => {
    return (
        //className with tachyons
     <div className='ma4 mt0'>
         {/* 3d tilting from https://www.npmjs.com/package/react-tilt */}
        <Tilt className="Tilt br2 shadow-2" options={{ max : 69 }} style={{ height: 250, width: 250 }} >
            <div className="Tilt-inner pa3"> 👽 
                <img style={{paddingTop: '2px'}} src={baby} alt="baby logo"/>
            </div>
        </Tilt>
     </div> 
    )
}

export default Logo;