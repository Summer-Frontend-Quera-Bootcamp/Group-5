import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	ModalCloseButton,
	Heading,
	Box,
} from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { chakra } from "@chakra-ui/react";
import { ValidateInput, Button } from "../..";
import { AXIOS } from "../../../utils/functions/AXIOS";
import { useAppDispatch } from "../../../hooks";
import { setProjectItems } from "../../../features/projectSlice";

interface IModalItemProps {
	isOpen: any;
	onClose: any;
	workSpacekey?: any;
	porojectItemkey?: any;
	type?: string;
}

const ModalItem: React.FC<IModalItemProps> = ({
	isOpen,
	onClose,
	workSpacekey,
	porojectItemkey,
	type,
}) => {
	const dispatch = useAppDispatch();
	const {
		handleSubmit,
		watch,
		formState: { errors },
		register,
	} = useForm();
	const watchField = watch();

	const onsubmit: SubmitHandler<FieldValues> = (data) => {
		const dataObj = {
			name: data.newProject,
		};
		if (type === "edit") {
			AXIOS.patch(
				`/workspaces/${workSpacekey}/projects/${porojectItemkey}/`,
				dataObj
			)
				.then((res) => console.log(res))
				.then(() => dispatch(setProjectItems()))
				.catch((err) => console.log(err.response.status));
		} else {
			AXIOS.post(`/workspaces/${workSpacekey}/projects/`, dataObj).then(() =>
				dispatch(setProjectItems())
			);
		}
	};

	return (
		<>
			<Modal
				onClose={onClose}
				isOpen={isOpen}
				isCentered
				blockScrollOnMount={true}
				size="xl"
			>
				<ModalOverlay />
				<ModalContent borderRadius="8px" p="24px">
					<ModalCloseButton left="unset" right="sm" top="sm" />
					<ModalBody>
						<chakra.form
							display="flex"
							flexDir="column"
							gap="xl"
							onSubmit={handleSubmit(onsubmit)}
						>
							<Heading textAlign="center" fontWeight="800" fontSize="24px">
								{type === "edit" ? "ویرایش نام پروژه" : "ساختن پروژه جدید"}
							</Heading>
							<ValidateInput
								type="text"
								label="نام پروژه"
								register={register}
								errors={errors}
								name="newProject"
							/>
							<Box
								as="button"
								onClick={onClose}
								disabled={!watchField.newProject}
							>
								<Button isActive={true} type="submit" fullWidth={true}>
									{type === "edit" ? "ویرایش" : "ثبت"}
								</Button>
							</Box>
						</chakra.form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalItem;
