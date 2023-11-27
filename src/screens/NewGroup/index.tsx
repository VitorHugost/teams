import { Header } from "@components/Header";
import { Container, Content, IconNewGroup } from "./styles";
import { Highlight } from "@components/Highlight";
import Icon from '@assets/Icons.png'
import { Button } from "@components/Button";
import { InputText } from "@components/InputText";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />
            <Content>
                <IconNewGroup source={Icon} />

                <Highlight
                    title="Nova Turma"
                    subTitle="Crie uma turma para adicionar pessoas" />
                    <InputText placeholder="Nome da turma"/>
                <Button title="Criar" style={{marginTop:20}} />
            </Content>
        </Container>
    )
}