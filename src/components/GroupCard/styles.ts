import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import theme from "@theme/index";

export const Container = styled(TouchableOpacity)`
width: 90%;
height: 90px;
background-color: ${theme.COLORS.GRAY_500};
border-radius: 6px;
flex-direction: row;
align-items: center;
padding: 24px;
margin-left:20px;
margin-bottom: 12px;
gap: 14px;
`

export const Title = styled.Text`
${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color:${theme.COLORS.GRAY_200};
    font-family:${theme.FONT_FAMILY.REGULAR};
`}
`

export const Icon = styled.Image`
padding: 4px;

` 