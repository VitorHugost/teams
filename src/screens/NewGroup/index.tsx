import { useState } from 'react'
import Icon from '@assets/Icons.png'
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { InputText } from "@components/InputText";
import { Highlight } from "@components/Highlight";
import { useNavigation } from '@react-navigation/native'
import { groupCreate } from "@storage/group/groupCreate";
import { Container, Content, IconNewGroup } from "./styles";

export function NewGroup() {
    const [groups, setGroups] = useState('')
    const navigation = useNavigation()

    async function handleNew() {
        if (groups.trim().length === 0) return Alert.alert("Novo Grupo", "Informe o nome do grupo.")
            try {
                await groupCreate(groups)
                navigation.navigate('players', { group:groups })

            } catch (error) {
                if (error instanceof AppError) {
                    return Alert.alert("Novo Grupo", error.message)
                }
                console.log(error)
                return Alert.alert("Novo Grupo", 'Não foi possivel cadastrar grupo.')
            }

    }

    return (
        <Container>
            <Header showBackButton />
            <Content>
                <IconNewGroup source={Icon} />

                <Highlight
                    title="Nova Turma"
                    subTitle="Crie uma turma para adicionar pessoas" />

                <InputText placeholder="Nome da turma" onChangeText={setGroups} />

                <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
            </Content>
        </Container>
    )
}