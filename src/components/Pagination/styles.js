import styled from 'styled-components';

export const Container_Pagination = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;

    button {
        background-color: transparent;
        border: 1px solid #000;
        border-radius: 5px;
        padding: 5px;
        box-shadow: 4px 4px 0px 0px rgba(0, 0, 0);
        cursor: pointer;
    }

    .number-pages {
        padding: 0 5px;
        color: #fff;
    }
`