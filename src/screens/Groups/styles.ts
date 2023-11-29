import styled from "styled-components/native";
import { SafeAreaView} from 'react-native-safe-area-context'
import { ThemeProps } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex:1;
    background-color:${({theme}:{theme:ThemeProps}) => theme.COLORS.GRAY_600} ;
    padding: 14px;
`

export const Title = styled.Text`
    color:#fff;
    font-size: 26px;
    font-weight: bold;
`