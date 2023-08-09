import {StyleSheet, View} from "react-native";
import {Button} from "@react-native-ui-components/button";

export default function App() {
	return (
		<View style={styles.container}>
			<Button title="Click me" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	}
});
