import React from 'react'
import { Wheel } from 'react-custom-roulette'
 
const data = [
  { option: 'L', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: 'U', style: { backgroundColor: 'teal', textColor: 'black'} },
  { option: 'N', style: { backgroundColor: 'grey', textColor: 'black'} },
  { option: 'C', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: 'H', style: { backgroundColor: 'orange', textColor: 'black' } },
  { option: 'P', style: { backgroundColor: 'purple', textColor: 'black' } },
  { option: 'I', style: { backgroundColor: 'green', textColor: 'black' } },
  { option: 'C', style: { backgroundColor: 'white', textColor: 'black'} },
  { option: 'K', style: { backgroundColor: 'teal', textColor: "black"} },
  { option: 'E', style: { backgroundColor: 'red', textColor: 'black' } },
  { option: 'R', style: { backgroundColor: 'orange', textColor: 'black' } },

]
 

export default () => (
  <>
    <Wheel
      mustStartSpinning={true}
      prizeNumber={15}
      data={data}
      backgroundColors={['#3e3e3e', '#df3428']}
      textColors={['#ffffff']}
    />
  </>
)