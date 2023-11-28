import styled from "styled-components/native";
import { TextInput } from 'react-native'
import { ThemeType, css } from "styled-components";

export const Container = styled(TextInput)`
${({ theme }: { theme: ThemeType }) => css`

    background-color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};

    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    
    `}
    flex: 1;
    min-height: 56px;
    max-height: 56px;

    border-radius: 6px;
    padding: 16px;
`