import { MathComponent,Node } from "mathjax-react"
import { RadianContainer } from "./rads.styles";
import {
    Fraction,
    evaluate,
    Simplify
} from "mathjs";

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
// import { fraction } from "mathjs";

const RationalRads = (props) => {

    const { degrees,radians,showDegrees } = props
    // const angle = 3*(Math.PI/4).toFixed(2) // Should equal 2.36...
    // const angle = (2*Math.PI)/(3).toFixed(2) // Should equal 2.09...
    // const angle = (Math.PI/6) // === .52
    // const angle = (127* (Math.PI/1))
    const angle = radians
    const decimal = angle/Math.PI
    const toNumerator = Math.round((decimal*100))
    const denomintator = () => {return (angle < 1 ? 100:(parseInt(angle)*100))}
    

    const fraction = reduce(toNumerator,100)
    // const fraction = reduce(50,100)
    const rad = `\\frac{${fraction[0]}\\pi }{${fraction[1]}}`

    function reduce(number,denomin){
        var gcd = function gcd(a,b){
          return b ? gcd(b, a%b) : a;
        };
        gcd = gcd(number,denomin);
        return [number/gcd, denomin/gcd];
      }
    // console.log(wholeInt/Math.PI)
    // console.log('angle / pi',decimal)
    console.log('toNumerator',toNumerator)
    // console.log('fraction',fraction)
    // console.log('angle',angle)
    //   console.log('denominator',denomintator())
    // randoundingFuncton(fraction)
    // console.log('numerator',numerator)

    // --- ORIGINAL --- //
    // const inlineFormula = '\\pi\\cos (2\\theta) = \\cos^2 \\theta - \\sin^2 \\theta';
    // const blockFormula = `\\frac{\\pi n!}{k!(n-k)!} = \\binom{n}{k}`;
    // --------------- //

    // ----PROTOTYPING RADIAN FORMAT----//
    const piFormat = `\\frac{\\pi}{2}`
    const cosFormat = `\\frac{\\sqrt{3}}{2}`
    const sinFormat = '\\frac{-1}{2}'
    const bynom = `\\binom{n}{k}`
    const pair = `\\left(${sinFormat},${cosFormat}\\right)`
    // ---------------------------------//

    const blockStyle = {
        // transform: 'scale(0.50)',
        // fontSize:'10px',

    }

    return (
        <RadianContainer>
            {/* <InlineMath math={cosFormat} /> */}
            {/* <BlockMath math={cosFormat} /> */}
            {/* <BlockMath math={sinFormat} /> */}
            {/* <BlockMath math={sinFormat+cosFormat} /> */}
            {/* <BlockMath math={bynom} /> */}
            <div style={blockStyle}><BlockMath math={rad} /></div>
        </RadianContainer>
    )
}

export default RationalRads

// const randoundingFuncton = (frac) => {
//     console.log('from rounding function',frac)
// }