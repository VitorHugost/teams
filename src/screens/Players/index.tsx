import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import {useRoute} from '@react-navigation/native'

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { InputText } from "@components/InputText";
import { Filter } from "@components/Filter";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

type Props = {
    groups:string
}

export function Players() {
    const {params} = useRoute()
    const {groups} = params as Props
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState(['Vitor'])

    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title={groups}
                subTitle="Adicione a galera e sepere os times"
            />

            <Form>
                <InputText placeholder="Nome da pessoa" />
                <ButtonIcon icon="add" />
            </Form>
            <HeaderList>

                <FlatList
                    data={['Time A', 'Time B']}
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

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard name={item} onRemove={()=>{}} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={()=>(
                    <ListEmpty message="Não há pessoas nesse time."/>
                )}
                contentContainerStyle={[{paddingBottom:100},players.length === 0 && {flex:1}]}
            />

            <Button title="Remover turma" type="SECONDARY"/>
            
        </Container>

    )
}