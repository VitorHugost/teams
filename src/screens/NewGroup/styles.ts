import theme from "@theme/index";
import styled from "styled-components/native";
import { SafeAreaView} from 'react-native-safe-area-context'


export const Container = styled(SafeAreaView)`
    flex:1;
    background-color:${theme.COLORS.GRAY_600} ;
    padding: 20px;
`
export const Content = styled.View`
    flex: 1;
    justify-content: center;
`

export const IconNewGroup = styled.Image`
    padding: 26px;
    align-self: center
`