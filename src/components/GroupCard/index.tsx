import { Container, Icon, Title } from "./styles";
import {TouchableOpacityProps} from 'react-native'
import Users from '@assets/IconCard.png'


type Props = TouchableOpacityProps & {
    title:string;
}

export function GroupCard({title, ...rest}:Props){
    return(
        <Container {...rest}>
            <Icon source={Users}/>
            <Title>{title}</Title>
        </Container>
    )
}