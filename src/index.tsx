import {TouchableOpacity, type TouchableOpacityProps} from "react-native";
import {Label} from "@react-native-ui-components/label";

interface ButtonProps extends TouchableOpacityProps {
	title?: string;
	disabled?: boolean;
	preferred?: boolean;
	size?: "small" | "medium" | "large";
	fillColor?: string;
	color?: string;
}

export const Button = ({
	title,
	disabled,
	preferred,
	size,
	fillColor,
	color,
	style,
	...rest
}: ButtonProps) => (
	<TouchableOpacity
		{...rest}
		style={[
			{
				backgroundColor: fillColor ?? "transparent",
				borderRadius: 8
			},
			{
				small: {},
				medium: {
					padding: 8
				},
				large: {}
			}[size ?? "medium"],
			style
		]}
	>
		<Label
			title={title}
			bold={preferred}
			style={{
				color: color ? color : disabled ? "#999999" : "blue"
			}}
		/>
	</TouchableOpacity>
);
