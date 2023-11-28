import { Container, Logo, TouchButton } from "./styles";
import logo from '@assets/logo.png';
import Icon from '@expo/vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native'

interface Props {
    showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
    
    const navigation = useNavigation()

    function handleGoBack(){
        navigation.navigate('groups')
    }

    return (
        <Container>
            {showBackButton &&
                <TouchButton onPress={handleGoBack}>
                    <Icon name="left" style={{ color: "white", fontSize: 32 }} />
                </TouchButton>
            }
            <Logo source={logo}/>
        </Container>
    )
}