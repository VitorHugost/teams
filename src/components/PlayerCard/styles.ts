import { ThemeType, css } from "styled-components";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'
export const Container = styled.View`
width: 100%;
height: 56px;

background-color: ${({theme}:{theme:ThemeType})=> theme.COLORS.GRAY_500};

flex-direction: row;
align-items: center;
border-radius: 6px;
margin-bottom: 16px;
` 

export const Name = styled.Text`
    flex:1;
${({theme}:{theme:ThemeType})=> css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
`}

`

export const Icon = styled(MaterialIcons).attrs(({theme}:{theme:ThemeType})=> ({
size:24,
color:theme.COLORS.GRAY_200
}))`
margin-left: 16px;
margin-right: 4px;
`