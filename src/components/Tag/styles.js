import styled from "styled-components";

export const Container = styled.div`
    height: 24px;
    border-radius: 8px;
    padding: 5px 16px;
    width: fit-content;
    font-family: 'Roboto', sans-serif;

    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.COLORS.FC_GRAY2};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_TAG};
`