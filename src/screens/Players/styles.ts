import styled, { css } from "styled-components/native";
import { SafeAreaView} from 'react-native-safe-area-context'
import { ThemeProps } from 'styled-components/native';


export const Container = styled(SafeAreaView)`
    flex:1;
    background-color: ${({theme}:{theme:ThemeProps})=> theme.COLORS.GRAY_600};
    padding: 10px;
`
export const Form = styled.View`
    width:100%;
    background-color: ${({theme}:{theme:ThemeProps})=> theme.COLORS.GRAY_700};
    flex-direction: row;
`

export const HeaderList = styled.View`
    width: 95%;
    flex-direction: row;
    align-items: center;
    margin: 32px 0 12px ;
`

export const NumberOfPlayers = styled.Text`
    ${({theme}:{theme:ThemeProps}) => css`
        color:${theme.COLORS.GRAY_200};
        font-family:${theme.FONT_FAMILY.BOLD};
        font-size:${theme.FONT_SIZE.SM}px;
    `}
`