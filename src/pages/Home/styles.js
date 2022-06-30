import styled from 'styled-components';

export const Home_Container = styled.main`
    background-color: #2c2945;
    min-height: 100vh;
    padding-bottom: 20px;

    .not-found-text {
        text-align: center;
        font-size: 1.25rem;
        padding:20px;

        span {
            font-weight: bold;
            font-size: 2rem;
            color: #fff;
        }

        img {
            margin-top: 10px;
            width: 200px;
        }
    }
`

export const Header_Wrapper = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    padding: 0 20px;
`