import './style.css'

const Step = ({step, text, lastStep}) => {
    return (
            <div className='hiw_step-container'>
                <div>
                    <div className='hiw_step-icon'>
                        <p>{step}</p>
                    </div>
                    <p className='hiw_step-text'>{text}</p>
                </div>
            </div>
    )
}

const HowItWorks = () => {
    return(
        <div className='hiw_container container' id='howItWorks'>
            <div className='hiw_container-content'>
                <h2>How It Works?</h2>
                <div className='hiw_container-steps'>
                    <Step step='1' text='Lorem epsum larigaade spectrum, insanium'/>
                    <Step step='2' text='Macius mordegae larigaade themanium'/>
                    <Step step='3' text='Solicitus caan drisen aeshteru ja nai'/>
                    <Step step='4' text='Omae wa mo shinderu' lastStep='true'/>
                </div>
            </div>
            <div className='hiw_absoluteImg'></div>
        </div>
    )
}

export default HowItWorks