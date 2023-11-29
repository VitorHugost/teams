import { ThemeProps } from "styled-components/native";
import { css } from "styled-components/native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`
export const Message = styled.Text`
text-align: center;

${({theme}:{theme:ThemeProps}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};

`}
`
