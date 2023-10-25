interface INewTaskFormProps {
	project: string;
	boardId: number;
	handleChange: Dispatch<SetStateAction<any[]>>;
}

type TPriority = "پایین" | "متوسط" | "بالا" | "فوری" | "حذف اولویت";
