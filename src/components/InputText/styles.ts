import styled from "styled-components/native";
import {TextInput} from 'react-native'
import theme from "@theme/index";

export const Container = styled(TextInput)`
    flex: 1;
    min-height: 56px;
    max-height: 56px;

    background-color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};

    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.WHITE};

    border-radius: 6px;
    padding: 16px;

`