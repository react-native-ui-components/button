import {FunctionComponent} from "react";
import {TouchableOpacityProps} from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
	disabled?: boolean;
	title: string;
	preferred?: boolean;
	size?: "small" | "medium" | "large";
	fillColor?: string;
	color?: string;
}

export declare const Button = FunctionComponent<ButtonProps>;
