import {
    TouchableOpacity,
    Text
} from "react-native";

type CustomButtonProps = {
    title: string
};

export const CustomButton = ({ title }: CustomButtonProps) => {
    return (
        <TouchableOpacity style={{ flex: 1, backgroundColor: "#000" }}>
            <Text style={{ flex: 1, color: "#000" }}>{ title }</Text>
        </TouchableOpacity>
    );
}