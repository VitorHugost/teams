import * as S from './styles';
import { FlatList } from 'react-native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  return (
      <S.Container>
        <Header />

        <Highlight title='Turmas' subTitle='Jogue com a sua turma' />

        <FlatList
          data={groups}
          keyExtractor={msg => msg}
          renderItem={({ item }) => (<GroupCard title={item} />)}
          ListEmptyComponent={<ListEmpty message='Que tal cadastrar a priomeira turma ?' />}
          showsVerticalScrollIndicator={false}
        />
      <Button title='Criar nova turma'></Button>
      </S.Container>

  );
}
