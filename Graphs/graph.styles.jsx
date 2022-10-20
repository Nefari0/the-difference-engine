import styled from "styled-components";

export const Enclosure = styled.main`
position:absolute;
    height:785px;
    width:495px;
    padding:10px;
    border-radius:10px;
    box-shadow: 0px 5px 20px -7px #000000;
    display:flex;
    flex-direction:column;

    @media (max-width:620px) {
        transform: scale(0.70);
        left:-24%;
        top:-21%;
    }

    @media (max-width:400px) {
        transform: scale(0.50);
        left:-36%;
        top:-28%;
    }
`

export const Table = styled.div`
    position: absolute;
    opacity:.5;
    height: 500px;
    width: 500px;
    background-color: rgb(240, 240, 240);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: stretch;
    border: 2px solid rgba(0, 0, 0, 0.5);
    z-index: 0;
    overflow:hidden;
    left:5px;
`

export const Row = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: stretch;
    z-index:1;
`

export const Origin = styled.span`
    height:1px;
    width:1px;
    background-color:green;
    position: absolute;
    left: ${({polars}) => (!polars ? `125px` : `250px`)};
    transition: all 1000ms;
    bottom:235px;
`

export const GridCell = styled.span`
    height: 48px;
    width: 48px;
    position: relative;
    margin: 0px;
    border: 1px solid rgba(0, 0, 0, 0.5);
`

export const MathFormula = styled.div`
    position:absolute;
    top:0px;
    right:40px;
    font-size:20px;
`