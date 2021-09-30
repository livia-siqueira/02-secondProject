import styled from "styled-components";

export const Container = styled.div`
    width: 60rem;
    margin: 10rem auto;
    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
    
            
        }

        td{
            border-radius: 0.25rem;    
            padding: 1rem 2rem;
            border: 0;
            background-color: var(--shape);
            color: var(--text-body);

            &:first-child{
                color: var(--text-title);
            }

            &.withdraw{
                color: var(--red);
            }

            &.deposit {
                color: var(--green)
            }
            
        }
    }
`