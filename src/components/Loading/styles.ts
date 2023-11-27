import theme from "@theme/index";
import styled from "styled-components/native";

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: ${theme.COLORS.GRAY_600};

`
export const LoadingIndicator = styled.ActivityIndicator.attrs({color:theme.COLORS.GREEN_700})``
