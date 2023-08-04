import {TouchableOpacity} from "react-native";
import {Label} from "@react-native-ui-components/label";

//todo use native component and remove label peer dependency

export const Button = ({
	title,
	disabled,
	preferred,
	size,
	fillColor,
	color,
	...rest
}) => (
	<TouchableOpacity
		{...rest}
		style={[
			{
				backgroundColor: fillColor,
				borderRadius: 8
			},
			{
				small: {},
				medium: {
					padding: 8
				},
				large: {}
			}[size ?? "medium"],
			rest.style
		]}
		key={String(title)}
	>
		<Label
			style={{
				color: color ? color : disabled ? "#999999" : "blue"
			}}
			bold={preferred}
		>
			{title}
		</Label>
	</TouchableOpacity>
);
