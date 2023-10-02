type TColorInputProps = Record<"color" | "selectedColor", TColors> & {
	setSelectedColor: Dispatch<SetStateAction<TColors>>;
};
