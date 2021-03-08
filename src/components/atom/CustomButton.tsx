
import React from "react";
import {
    TouchableOpacity,
    Text
} from "react-native";

type CustomButtonProps = {
    title: string,
    buttonPress: () => void
};

export const CustomButton = ({ title, buttonPress }: CustomButtonProps) => {
    return (
        <TouchableOpacity style={{ flex: 1, backgroundColor: "#000", height: 50, alignItems: "center", justifyContent: "center" }} onPress={buttonPress}>
            <Text style={{ color: "#FFF", textAlign: "center" }}>{ title }</Text>
        </TouchableOpacity>
    );
}