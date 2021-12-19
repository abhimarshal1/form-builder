import styled from 'styled-components';

export const StyledContainer = styled.div`
    border: 1px solid lightgrey;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: #1E1E1E;

    & .monaco-editor {
        font-size: 1rem;
    }
`;