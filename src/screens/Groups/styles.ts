import { ThemeType } from "styled-components";
import styled from "styled-components/native";


export const Container = styled.View`
    flex:1;
    background-color:${({theme}:{theme:ThemeType}) => theme.COLORS.GRAY_600} ;
    padding: 14px;
`

export const Title = styled.Text`
    color:#fff;
    font-size: 26px;
    font-weight: bold;
`