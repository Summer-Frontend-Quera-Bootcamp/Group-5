import { Button, chakra } from "@chakra-ui/react";
import { ChangeEvent, FC, useCallback, useRef } from "react";
import { useAppSelector } from "../../../../hooks";
import { buttonStyle } from "../style";

interface IThumbnailInputProps {
	onChange: (file: any) => void;
}

const ThumbnailInput: FC<IThumbnailInputProps> = ({ onChange }) => {
	const { accent } = useAppSelector((state) => state.theme);

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
			<chakra.input
				ref={hiddenFileInput}
				type="file"
				onChange={handleChange}
				hidden
			/>
			<Button
				variant="outline"
				onClick={handleClick}
				colorScheme={accent}
				sx={buttonStyle}
			>
				ویرایش تصویر پروفایل
			</Button>
		</>
	);
};

export default ThumbnailInput;
