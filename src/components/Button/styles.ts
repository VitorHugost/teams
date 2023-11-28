import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import theme from "@theme/index";
import { ThemeType, css } from "styled-components";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
flex:1;
min-height: 56px;
max-height: 56px;
background-color:${({ type }: Props) => type == "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK} ;
border-radius: 5px;
justify-content: center;
align-items: center;
`;

export const Title = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
`}
`
