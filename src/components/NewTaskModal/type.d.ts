interface INewTaskFormProps {
	project: string;
	boardId: number;
	handleChange: Dispatch<SetStateAction<any[]>>;
	onClose: () => void;
}

type TPriority = "پایین" | "متوسط" | "بالا" | "فوری" | "حذف اولویت";
