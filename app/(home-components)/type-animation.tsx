'use client'

import { TypeAnimation } from "react-type-animation";

export default function TypeAnimationComponent () {
    return(<>
         <TypeAnimation
      sequence={[
        'Controle suas finanças', // Deletes 'One' and types 'Two'
        1000, // Waits 2s
        'Controle seus gastos', // Types 'Three' without deleting 'Two'
        1000,
        'Tudo em um só lugar!',
        2000,
        () => {
        }
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
    </>)
}