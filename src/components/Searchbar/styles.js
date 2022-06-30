import styled from "styled-components";

export const Searchbar_Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .search-wrapper {
        display: flex;
        align-items: center;
        background-color: #191629;
        border-radius: 10px;
    }

    .searchbar {
        width: 500px;
        background-color: white;
        margin-right: 1rem;

        input {
            width: 100%;
            background-color: #191629;
            padding: 0.5rem;
            border: none;
            outline: none;
            color: #fff;
            font-weight: 600;
        }
    }

    .searchbar-btn button {
        background-color: transparent;
        border: none;
        height: 44px;
        color: #fff;
        padding: 10px 12px;
        cursor: pointer;
    }

    .pokemons-likes-wrapper {
        display: flex;
        position: relative;
        background-color: #191629;
        border-radius: 10px;
        align-items: center;
        padding: 0 5px;

        img {
            padding: 5px;
            height: 45px;
            
        }
    }

    .pokemons-likes {
        padding: 5px;
        font-weight: bold;
        color: #fff;
    }
`
