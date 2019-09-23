import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    header {
        margin-top: 50px;
        display: flex;
        width: 100%;
        align-self: center;
        align-items: center;
        justify-content: space-between;

        button {
            display: flex;
            align-items: center;
            justify-content: space-around;
            border: 0;
            background: none;
            border-radius: 4px;
            background-color: #f94d6a;
            height: 32px;
            width: 164px;
            font-size: 18px;
            &:hover {
                background-color: ${darken(0.08, '#F94D6A')};
            }
        }
    }

    ul {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 15px;
        margin-top: 30px;
    }
`;

export const Meetup = styled.li`
    padding: 22px;
    background: #000;
    height: 62px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    aside {
        display: flex;
        align-items: center;

        span {
            color: #999;
        }
    }
`;
