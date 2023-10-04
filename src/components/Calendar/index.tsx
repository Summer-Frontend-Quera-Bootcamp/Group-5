import { FC } from "react";
import "./style.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import fa from "@fullcalendar/core/locales/fa";

const Calendar: FC = () => {
	return (
		<FullCalendar
			plugins={[dayGridPlugin, interactionPlugin]}
			headerToolbar={{ center: "", end: "", start: "" }}
			fixedWeekCount={false}
			showNonCurrentDates={true}
			aspectRatio={window.innerWidth / window.innerHeight}
			locale={fa}
			timeZone="Asia/Tehran"
			dateClick={(info) => {
				console.log(info);
			}}
			initialView="dayGridMonth"
		/>
	);
};

export default Calendar;
