import styled from "styled-components";

export const CircleOverlay = styled.div`
    position:absolute;
    width:400px;
    height:400px;
    border: solid 1px #555;
    border-radius:50%;
    left:-202px;
    top:-216px;
    transition: all 1000ms;
`

export const Crosshair = styled.span`
    position:absolute;
    width:px;
    top:-15px;
    height:430px;
    border-left-style: dashed;
    border-left-width: 3px;
    opacity:.5;

    transform: rotate(${({rotation}) => rotation}deg);
`