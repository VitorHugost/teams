import { Container, Icon, Title } from "./styles";
import {TouchableOpacityProps} from 'react-native'
import Users from '@assets/IconCard.png'


type Props = TouchableOpacityProps & {
    title:string
}

export function GroupCard({title}:Props){
    return(
        <Container>
            <Icon source={Users}/>
            <Title>{title}</Title>
        </Container>
    )
}