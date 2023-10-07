type TColorInputProps = Record<"color" | "selectedColor", TColorSchemes> & {
	setSelectedColor: Dispatch<SetStateAction<TColorSchemes>>;
};
