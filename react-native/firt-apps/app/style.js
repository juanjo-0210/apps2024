import { TextInput, View, Pressable,Text } from "react-native";
import styled from "styled-components";

export const Input = styled.TextInput`
    background-color: salmon;
    border: 1px solid #000;
    width: 80%;
    height: 30px;
    display: inline-block;
`

export const Container = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: black;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: auto;
`

export const Button = styled.Pressable`
    padding: 10px;
    border: 1px solid #000;
    display: inline-block;
    width: 20%;
`

export const Box = styled.Text`
display: block;
width: 100%;
background-color: orange;
padding: 8px;
text-align: center;
margin-top: 10px;
`
