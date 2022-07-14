import modelImage from '../../assets/modelImage.png'
import './style.css'

const Model = () => {
    return(
        <div className='model_container container' id='model'>
            <div className='model_content-container'>
                <div className='model_image-container'>
                    <img src={modelImage} />
                    <div className='model_dots'></div>
                </div>

                <div className='model_text-container'>
                    <h2>Our <span>Business Model</span></h2>

                    <ul>
                        <li>Fusces lorem thormal seen dounrn metroy</li>
                        <li>Seraphim slipeneir dober elbat gab htolc</li>
                    </ul>
                </div>
            </div>

            <div className='model_button-container'>
                <a>
                    Read More About Us
                </a>
            </div>
        </div>
    )
}

export default Model;