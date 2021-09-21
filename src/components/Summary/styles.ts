import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    max-width: 1120px;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: -8rem auto;

    div{
        background-color: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        &.change-background{
            background: var(--green);
        }
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong{
        display: block; //margin top nao funciona como inline
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;
    }

    &.change-background{
        background: var(--green);
    }

`