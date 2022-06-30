import styled from 'styled-components';

export const Pokedex_Container = styled.section`
    .pokedex-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;

        h2 {
            color: #ddd;
        }
    }

    .pokedex-grid {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(3, 1fr);
        padding: 0 10px;
    }

    .loading {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
            color: #ddd;
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        img {
            width: 200px;
        }
    }
` 