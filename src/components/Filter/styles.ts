import { TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ThemeType, css } from "styled-components";
import styled from "styled-components/native";

export type FilterStyleProps = {
    isActive?: boolean;
    theme?: ThemeType
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
    ${({ theme, isActive }: FilterStyleProps) => isActive && css`
    border: 1px solid ${theme!.COLORS.GREEN_700};
    `};
    border-radius:4px;
    margin-right:12px;
    
    height: 38px;
    width: 70px;
    
    align-items:center;
    justify-content:center;
    `;

export const Title = styled.Text`
    ${({ theme }:{theme:ThemeType}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color:${theme.COLORS.WHITE};
        
        `}
        text-transform:uppercase;
    
`