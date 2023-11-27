import { Container, Logo, TouchButton } from "./styles";
import logo from '@assets/logo.png';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
    showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
    return (
        <Container>
            {showBackButton &&
                <TouchButton>
                    <Icon name="left" style={{ color: "white", fontSize: 32 }} />
                </TouchButton>
            }
            <Logo source={logo}/>
        </Container>
    )
}