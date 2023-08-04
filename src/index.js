import {TouchableOpacity} from "react-native";
import {Label} from "../layout/Label";

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
			props.style
		]}
		key={String(title)}
	>
		<Label
			style={{
				color: color ? color : disabled ? "#999999" : colors.blue
			}}
			bold={preferred}
		>
			{title}
		</Label>
	</TouchableOpacity>
);
