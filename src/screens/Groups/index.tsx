import { Button } from '@components/Button';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmpty } from '@components/ListEmpty';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { groupsGetAll } from '@storage/group/groupsGetAll';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import * as S from './styles';
import { Loading } from '@components/Loading';

export function Groups() {
  const [groups, setGroup] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const navigation = useNavigation()

  function handleNavigation() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const data = await groupsGetAll();
      setGroup(data);
    } catch (error) {
      console.log("error ", error)
    } finally{
      setIsLoading(false)
    }

  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <S.Container>
      <Header />

      <Highlight title='Turmas' subTitle='Jogue com a sua turma' />

      {isLoading ? <Loading /> :
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <GroupCard
              title={item}
              onPress={() => handleOpenGroup(item)}
            />)}

          ListEmptyComponent={<ListEmpty message='Que tal cadastrar a primeira turma ?' />}

          showsVerticalScrollIndicator={false}
        />
      }
      <Button title='Criar nova turma' onPress={handleNavigation} />
    </S.Container>

  );
}
