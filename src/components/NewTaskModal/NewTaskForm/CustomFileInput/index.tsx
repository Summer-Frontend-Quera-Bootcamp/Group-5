import { Button, chakra } from "@chakra-ui/react";
import { ChangeEvent, FC, useCallback, useRef } from "react";
import { useAppSelector } from "../../../../hooks";
import { LinkIcon } from "../../../../icons";

interface ICustomFileInputProps {
	file: any;
	onChange: (file: any) => void;
}

const CustomFileInput: FC<ICustomFileInputProps> = ({ file, onChange }) => {
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
				leftIcon={<LinkIcon w="24px" h="24px" />}
				onClick={handleClick}
				colorScheme={accent}
			>
				{file ? `تغییر فایل` : `آپلود فایل`}
			</Button>
		</>
	);
};

export default CustomFileInput;
