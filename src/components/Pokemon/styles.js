import styled from "styled-components";

export const Pokemon_Container = styled.div`
    display: flex;
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0);
    border-radius: 3px;
    border: 1px solid #000;
    background-color: #25213C;

    .pokemon-image-container {
        padding: 0px 5px;
    }

    .pokemon-image {
        width: 80px;
        height: 80px;
        margin-right: 10px;
    }

    .card-body {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 10px 10px 10px 0;
        flex: 1;
        color: #fff;
    }

    .card-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .card-top h3 {
        text-transform: capitalize;
    }

    .card-bottom {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    
    }

    .pokemon-type {
        display: flex;
    }

    .pokemon-type-text {
        margin-right: 10px;
        text-transform: capitalize;
    }

    .pokemon-heart-btn {
        border: none;
        background-color: #fff;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.25);
        padding: 4px;
        cursor: pointer;
        transition: all 0.5s;
        border-radius: 100px;

        &:hover {
            background-color: #333;
        }
    }
`;
