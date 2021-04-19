import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
        {/* mt2 margin top 2 */}
            <div className='absolute mt2'>
                <img id='inputImage'
                    alt="user provided link shown with box on face" 
                    src={imageUrl} 
                    width='420px' 
                    height='auto'/>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
        
    )
}

export default FaceRecognition;