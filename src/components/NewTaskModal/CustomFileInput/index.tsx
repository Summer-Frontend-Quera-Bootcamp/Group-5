import { Button, chakra } from "@chakra-ui/react";
import { ChangeEvent, FC, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { LinkIcon } from "../../../icons";
import { RootState } from "../../../store";

const CustomFileInput: FC<{ onChange: (file: any) => void }> = ({
	onChange,
}) => {
	const { accent } = useSelector((state: RootState) => state.theme);

	const handleClick = useCallback(() => {
		if (hiddenFileInput.current) {
			hiddenFileInput.current.click();
		}
	}, []);

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			onChange(e.target.files[0]);
		}
	}, []);

	const hiddenFileInput = useRef<HTMLInputElement>(null);

	return (
		<>
			{" "}
			<chakra.input
				ref={hiddenFileInput}
				type="file"
				onChange={handleChange}
				hidden
			/>
			<Button
				variant="outline"
				leftIcon={<LinkIcon w="24px" h="24px" />}
				onClick={handleClick}
				colorScheme={accent}
			>
				آپلود فایل
			</Button>
		</>
	);
};

export default CustomFileInput;
