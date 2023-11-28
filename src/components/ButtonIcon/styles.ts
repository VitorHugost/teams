import { MaterialIcons } from '@expo/vector-icons'
import {TouchableOpacity, TouchableOpacityProps} from 'react-native'
import { ThemeType } from 'styled-components'
import styled from 'styled-components/native'

export type ButtonIcontypeStyleProps = 'PRIMARY' | 'SECONDARY' 

type Props = {
    type: ButtonIcontypeStyleProps;
    theme:ThemeType
}

export const Container = styled(TouchableOpacity)`
width: 56px;
height: 56px;

justify-content: center;
align-items: center;
margin-left: 12px;
border-radius: 6px;
`

export const Icon = styled(MaterialIcons).attrs(({theme, type}:Props) => ({
    size:24,
    color: type == 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``