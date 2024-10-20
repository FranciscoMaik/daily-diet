import { Text, View } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const basePercentage = 50;

export const Percentage: React.FC = () => {
	const { navigate } = useNavigation();

	return (
		<View
			style={{
				backgroundColor: basePercentage >= 50 ? "#E5F0DB" : "#F4E6E7",
				paddingHorizontal: 16,
				paddingVertical: 20,
				alignItems: "center",
				gap: 8,
				borderRadius: 8,
				position: "relative",
			}}
		>
			<Feather
				name="arrow-up-right"
				size={28}
				color={basePercentage >= 50 ? "#639339" : "#BF3B44"}
				style={{ position: "absolute", top: 8, right: 8 }}
				onPress={() => navigate("statistics")}
			/>
			<Text
				style={{
					fontSize: 32,
					fontWeight: "bold",
				}}
			>
				90,86%
			</Text>
			<Text>das refeições dentro da dieta</Text>
		</View>
	);
};
