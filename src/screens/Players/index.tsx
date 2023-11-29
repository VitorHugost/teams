import { useState, useEffect, useRef } from "react";
import { FlatList, Alert, TextInput } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native'


import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { InputText } from "@components/InputText";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroupsAndTeam } from "@storage/player/playerGetByGroupAndTeam";
import { PlayerStorageDTO } from "@storage/player/playerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroups";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import { Loading } from "@components/Loading";

type Props = {
    group: string
}

export function Players() {

    const [team, setTeam] = useState('Time A')
    const [isLoading, setIsLoading] = useState(true)
    const [newPlayerName, setNewPlayerName] = useState('')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
    
    const { params } = useRoute()
    const { group } = params as Props
    const navigation = useNavigation()
    const newPlayerNameRef = useRef<TextInput>(null)


    async function handleAddPlayer() {

        if (newPlayerName.trim().length === 0) {
            return Alert.alert("Adicione um Player", "Você deve adicionar o nome de um player.")
        }

        const newPlayer = {
            name: newPlayerName,
            team
        }

        try {

            await playerAddByGroup(newPlayer, group)
            fetchPlayersByTeam()
            newPlayerNameRef.current?.blur()
            setNewPlayerName('')

        } catch (error) {

            if (error instanceof AppError) return Alert.alert("Nova pessoa", error.message)

            return Alert.alert("Nova pessoa", "Não foi possivel adicionar.")
        }
    }

    async function handleRemovePlayer(name: string) {
        try {
            await playerRemoveByGroup(name, group)
            fetchPlayersByTeam()

        } catch (error) {
            console.log(error)
            Alert.alert("Não foi possivel remover", "Não foi possivelremover participante")
        }
    }

    async function fetchPlayersByTeam() {

        try {
            setIsLoading(true)
            const playersByTeam = await playersGetByGroupsAndTeam(group, team)
            setPlayers(playersByTeam)
            

        } catch (error) {

            console.log(error)
            Alert.alert("Pessoa", "Não foi possivel carregar as pessoas do time selecionado")

        }finally{
            setIsLoading(false)
        }
    }

    async function groupRemove() {
        await groupRemoveByName(group)
        navigation.navigate('groups')

    }

    function handleRemoveGroup() {
        Alert.alert("Romover", "Deseja remove esse grupo ?", [
            { text: "Não", style: 'cancel' },
            { text: "Sim", onPress: () => groupRemove() }
        ])
    }

    useEffect(() => {
        fetchPlayersByTeam()
    }, [team])

    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title={group}
                subTitle="Adicione a galera e separe os times"
            />

            <Form>
                <InputText
                    placeholder="Nome da pessoa"
                    value={newPlayerName}
                    onChangeText={setNewPlayerName}
                    inputRef={newPlayerNameRef}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />

                <ButtonIcon icon="add" onPress={handleAddPlayer} />
            </Form>

            <HeaderList>

                <FlatList
                    data={['Time A', 'Team B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />

                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>

            </HeaderList>
            {isLoading ? <Loading /> :
                <FlatList

                    data={players}
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <PlayerCard name={item.name} onRemove={() => handleRemovePlayer(item.name)} />
                    )}
                    showsVerticalScrollIndicator={false}

                    ListEmptyComponent={() => (
                        <ListEmpty message="Não há pessoas nesse time." />
                    )}
                    contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
                />
            }

            <Button title="Remover turma" type="SECONDARY" onPress={handleRemoveGroup} />

        </Container>

    )
}