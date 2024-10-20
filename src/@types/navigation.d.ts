import type { PublicStack } from "@routes/types";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends PublicStack {}
	}
}
