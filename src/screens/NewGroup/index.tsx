import { Header } from "@components/Header";
import { Container, Content, IconNewGroup } from "./styles";
import { Highlight } from "@components/Highlight";
import Icon from '@assets/Icons.png'
import { Button } from "@components/Button";
import { InputText } from "@components/InputText";
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

export function NewGroup() {
    const navigation = useNavigation()
    const [groups, setGroups] = useState('')

    function handleNew(){
        navigation.navigate('players',{groups})
    }
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <IconNewGroup source={Icon} />

                <Highlight
                    title="Nova Turma"
                    subTitle="Crie uma turma para adicionar pessoas" />
                    
                    <InputText placeholder="Nome da turma" onChangeText={setGroups}/>

                <Button title="Criar" style={{marginTop:20}} onPress={handleNew} />
            </Content>
        </Container>
    )
}