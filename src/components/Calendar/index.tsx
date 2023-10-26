import { useDisclosure } from "@chakra-ui/react";
import { EventSourceInput } from "@fullcalendar/core/index.js";
import fa from "@fullcalendar/core/locales/fa";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllTasks } from "../../services/api";
import { AXIOS } from "../../utils/functions/AXIOS";
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

interface ITask {
	attachment: string;
	created_at: string;
	deadline: string;
	description: string;
	id: number;
	members: any[];
	name: string;
	order: number;
	priority: number;
	thumbnail: string;
}

interface IEvent {
	title: string;
	start: string;
	end: string;
}

const Calendar: FC<ICalendarProps> = ({
	type,
	handleDateClick,
	onParentClose,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [dateInfo, setDateInfo] = useState<string>("2000-01-01");
	const [events, setEvents] = useState<IEvent[]>();
	const { workspaceId, projectId } = useParams();

	useEffect(() => {
		const getProjects = async () => {
			return await AXIOS.get(
				`/workspaces/${workspaceId}/projects/${projectId}/boards/`
			).then((res) => res.data);
		};

		getProjects().then((boards: any[]) => {
			const tasks = boards.map(({ id }) =>
				getAllTasks(+workspaceId!, +projectId!, id).then((res) => res.data)
			);
			Promise.all(tasks).then((res) => {
				let tasks: ITask[] = [];
				res.forEach((taskList: ITask[]) =>
					taskList.forEach((task: ITask) => tasks.push(task))
				);
				const events = tasks.map((task) => ({
					title: task.name,
					start: task.deadline,
					end: task.deadline,
				}));
				setEvents(events);
			});
		});
	}, []);

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
				events={events as EventSourceInput}
				dateClick={handleClick}
			/>
			<NewTask isOpen={isOpen} onClose={onClose} dateInfo={dateInfo} />
		</>
	);
};

export default Calendar;
