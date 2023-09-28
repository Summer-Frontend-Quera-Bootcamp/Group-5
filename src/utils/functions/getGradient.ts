import { theme } from "../../theme";

export function getGradient(color: string): string[] {
	const themeColors = theme.colors as Record<string, string>;
	return [`${color}-primary`, themeColors[`${color}-primary`] + "77"];
}
