import { Send } from '@styled-icons/fluentui-system-filled/Send';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MS;

    background-color: ${(props) => props.theme.colors.background[300]};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    overflow-y: hidden;

    padding: 39px 70px;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const TypeInput = styled.form`
    width: 100%;
    margin-top: 50px;
    position: relative;
    display: flex;
`;

export const TextareaInput = styled(TextareaAutosize)`
    width: 100%;
    height: 50px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.background[100]};
    padding: 16px;
    padding-right: 60px;
    color: ${(props) => props.theme.colors.text};

    border: none;
    outline: none;
    resize: none;
`;

export const SendButton = styled.button`
    position: absolute;
    right: 8px;
    bottom: 5px;
    width: 39px;
    height: 39px;
    border-radius: 8px;

    border: none;
    outline: none;
    cursor: pointer;

    background-color: ${(props) => props.theme.colors.primary.main};

    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.primary.dark};
    }
`;

export const SendIcon = styled(Send)`
    width: 50%;
    height: 50%;

    color: white;
`;

export const DateSeparator = styled.div`
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.secondary};

    display: flex;
    flex-direction: row;

    margin-top: 5rem;

    width: 100%;

    span {
        margin: 0 20px;
    }

    ::before,
    ::after {
        content: '';
        flex: 1 1;
        width: 100%;
        border-bottom: 1px solid ${(props) => props.theme.colors.secondary};
        margin: auto;
    }

    ::before {
        margin-right: 10px;
    }
    ::after {
        margin-left: 10px;
    }
`;
