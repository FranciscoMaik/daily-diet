import { Header } from "@components/Header";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Home: React.FC = () => {
	const { top } = useSafeAreaInsets();

	return (
		<View style={{ marginTop: top, padding: 24 }}>
			<Header />
		</View>
	);
};

export default Home;
