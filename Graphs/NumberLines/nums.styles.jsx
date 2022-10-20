import styled from "styled-components";

export const Numbers = styled.ul`
    position:absolute;
    // bottom:0px;
    // left:0px;
    // background-color:red;
    width:500px;
    margin:0px;
    padding:0px;
    bottom:${({parameters}) => parameters.lineB}px;
    left:${({parameters}) => parameters.lineL}px;
    list-style:none;
    display:flex;
    align-items:flex-end;
    transform:rotate(${({parameters}) => parameters.lRotation}deg);

    li {
        position:relative;
        height:50px;
        width:50px;
        
        strong {
            position:absolute;
            background-color: rgb(240, 240, 240);
            padding:2px;
            right:${({parameters}) => parameters.strongR}px;
            bottom:${({parameters}) => parameters.strongB}px;
            transform:rotate(${({parameters}) => parameters.numRotation}deg);
        }
    }
`