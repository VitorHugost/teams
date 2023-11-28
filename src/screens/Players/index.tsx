import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { InputText } from "@components/InputText";
import { FlatList } from "react-native";
import { Filter } from "@components/Filter";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {

    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState(['Vitor'])

    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title="Nome da turma"
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
                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
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