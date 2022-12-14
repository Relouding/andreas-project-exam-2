import styled from "styled-components";

/* Navigation container */
export const ContainerForm = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-bottom: 3rem;
    padding-top: .5rem;
`;

export const ContainerHeader = styled.div`
    max-width: 500px;
    margin: 0 auto;
    padding-top: 3rem;
    }
    h1 {
        font-size: 1.3rem;
        font-family: sans-serif;
	    letter-spacing: 0.15rem;
        font-weight: 700;
        margin: 0;
        color: #000;
    }
    @media (max-width: 850px) {
        max-width: 95%;
    }
`;

export const StyleForm = styled.form`
    display: block;
    max-width: 500px;
    margin: 0 auto;
    background-color: #004250;
    border-radius: .5rem;
    box-shadow: .1rem .1rem .5rem #565656;
    }
    p {
        color: #FFF;
        font-weight: 700;
        font-size: .8rem;
        font-family: sans-serif;
        padding-left: .5rem;
    }
    @media (max-width: 850px) {
        max-width: 95%;
    }
`;

export const StyleInput = styled.input`
    display: block;
    width: 95%;
    margin: 0 auto;
    margin-bottom: .5rem;
    margin-top: .7rem;
    padding: .5rem;
    border-radius: .5rem;
    border: none;
    }
    @media (max-width: 850px) {
        max-width: 95%;
    }
`;

export const StyleTextarea = styled.textarea`
    display: block;
    width: 95%;
    height: auto;
    margin: 0 auto;
    margin-bottom: .5rem;
    margin-top: .7rem;
    padding: .5rem;
    resize: none;
    border-radius: .5rem;
    border: none;
    font-family: sans-serif;
    }
    @media (max-width: 850px) {
        max-width: 95%;
    }
`;

export const StyleButton = styled.button`
    display: block;
    width: 98.5%;
    margin: 0 auto;
    margin-bottom: .5rem;
    margin-top: .7rem;
    padding: .5rem;
    border-radius: .5rem;
    border-color: transparent;
    background-color: rgba(230, 229, 202, 0.25);
    
    color: #FFF;
    text-align: center;
    line-height: 40px;
    font-size: .8rem;
    font-family: sans-serif;
    text-decoration: none;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    font-weight: 700;

    &:hover{
        background-color: rgba(215, 214, 170, 0.25);
        cursor: pointer;
        color: #000
    }
    @media (max-width: 850px) {
        max-width: 97.1%;
    }
`;

export const StyleFieldset = styled.fieldset`
    border: none;
`;