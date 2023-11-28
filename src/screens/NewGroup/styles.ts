import theme from "@theme/index";
import styled from "styled-components/native";


export const Container = styled.View`
    flex:1;
    background-color:${theme.COLORS.GRAY_600} ;
    padding: 14px;
`
export const Content = styled.View`
    flex: 1;
    justify-content: center;
`

export const IconNewGroup = styled.Image`
    padding: 26px;
    color: ${theme.COLORS.GREEN_700};
    align-self: center
`


