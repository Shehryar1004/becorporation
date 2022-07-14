import React, {useState} from 'react'
import './style.css'

const Balance = () => {
  const [profit, setProfit] = useState(13.9); 

  const backgroundForProfit = 
  profit > 0 ?
  {
    backgroundColor: '##55c594' //green
  } :
  {
    backgroundColor: '#800', //red
    color: '#fff'
  }

    return(
        <div className='balance_container container' id='balance'>
          <div className='balance_dots-container'></div>
          <div className='balance_text-container'>
            <h2>International <br /><span>Banking Solutions</span><br /> for Business</h2>
            <p className='balance_text-description'>Curabitur sed icalusis lorem epsum Hamza is a lovely boy epsum shepmsum, Curabitur sed icalusis lorem epsum Hamza is a lovely boy epsum shepmsum</p>

            <a href='#readMore'>
                <p>Read More</p>
            </a>
          </div>

          <div className='balance_value-container'>
            <p>Current Balance</p>
            <h3>$145.55</h3>
            <span style={backgroundForProfit}>{profit}%</span>
          </div>
        </div>
    )
}

export default Balance