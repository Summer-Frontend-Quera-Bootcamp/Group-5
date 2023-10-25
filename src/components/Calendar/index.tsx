import { useDisclosure } from "@chakra-ui/react";
import fa from "@fullcalendar/core/locales/fa";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { Dispatch, FC, SetStateAction, useCallback, useState } from "react";
import NewTask from "./NewTask";
import "./style.css";

interface ICalendarProps {
	workspaceId: number;
	projectId: number;
	boardId?: number;
	type: "page" | "modal";
	handleDateClick?: Dispatch<SetStateAction<string>>;
	onParentClose?: () => void;
}

const Calendar: FC<ICalendarProps> = ({
	workspaceId,
	projectId,
	boardId,
	type,
	handleDateClick,
	onParentClose,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [dateInfo, setDateInfo] = useState<string>("2000-01-01");

	// const [tasks, setTasks] = useState();
	// /workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/
	// useEffect(() => {
	// 	AXIOS.get("");
	// });

	const events = [
		{
			title: "تسک دوم",
			start: "2023-10-20",
			end: "2023-10-20",
		},
		{
			title: "تسک سوم",
			start: "2023-10-22",
			end: "2023-10-22",
		},
		{
			title: "تسک اول",
			start: "2023-10-16",
			end: "2023-10-16",
		},
	];

	const handleClick = (info: DateClickArg) => {
		if (type === "page") {
			onOpen();
			setDateInfo(info.dateStr);
		} else {
			handleDateClick && handleDateClick(info.dateStr);
			onParentClose && onParentClose();
		}
	};

	return (
		<>
			<FullCalendar
				plugins={[dayGridPlugin, interactionPlugin]}
				fixedWeekCount={false}
				showNonCurrentDates={true}
				aspectRatio={
					type === "page" ? window.innerWidth / window.innerHeight : 1.5
				}
				locale={fa}
				timeZone="Asia/Tehran"
				initialView="dayGridMonth"
				events={events}
				dateClick={handleClick}
			/>
			<NewTask isOpen={isOpen} onClose={onClose} dateInfo={dateInfo} />
		</>
	);
};

export default Calendar;
