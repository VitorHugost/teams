import { ThemeType, css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    background-color: ${({theme}:{theme:ThemeType})=> theme.COLORS.GRAY_600};
    padding: 14px;
`
export const Form = styled.View`
    width:100%;
    background-color: ${({theme}:{theme:ThemeType})=> theme.COLORS.GRAY_700};
    flex-direction: row;
`

export const HeaderList = styled.View`
    width: 95%;
    flex-direction: row;
    align-items: center;
    margin: 32px 0 12px ;
`

export const NumbersOfPlayers = styled.Text`
    ${({theme}:{theme:ThemeType}) => css`
        color:${theme.COLORS.GRAY_200};
        font-family:${theme.FONT_FAMILY.BOLD};
        font-size:${theme.FONT_SIZE.SM}px;
    `}
`