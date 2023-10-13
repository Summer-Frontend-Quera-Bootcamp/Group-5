import { Button, chakra } from "@chakra-ui/react";
import { ChangeEvent, FC, useCallback, useRef } from "react";
import { taskDetailButtonStyle } from "../style";
import { CalendarIcon } from "../../../../icons";

const CustomDateInput: FC<{ onChange: (file: any) => void }> = ({
	onChange,
}) => {
	const handleClick = useCallback(() => {
		if (hiddenFileInput.current) {
			hiddenFileInput.current.click();
			hiddenFileInput.current.focus();
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
				type="date"
				onChange={handleChange}
				hidden
			/>
			<Button sx={taskDetailButtonStyle} onClick={handleClick}>
				<CalendarIcon w="30px" h="30px" />
			</Button>
		</>
	);
};

export default CustomDateInput;

