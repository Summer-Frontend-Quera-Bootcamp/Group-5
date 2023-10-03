import React from "react";
import FlagRed from "../../assets/svg/Flag, Red.svg";
import FlagBlue from "../../assets/svg/Flag, Blue.svg";
import FlagGray from "../../assets/svg/Flag, Gray.svg";
import FlagYellow from "../../assets/svg/Flag, Yellow.svg";

interface PriorityFlagProps {
	flag: string;
}

const PriorityFlag: React.FC<PriorityFlagProps> = ({ flag }) => {
	let flagIcon = null;

	switch (flag) {
		case "urgent":
			flagIcon = <img src={FlagRed} alt="Urgent" />;
			break;

		case "high":
			flagIcon = <img src={FlagYellow} alt="High" />;
			break;

		case "medium":
			flagIcon = <img src={FlagBlue} alt="Medium" />;
			break;

		case "low":
			flagIcon = <img src={FlagGray} alt="Low" />;
			break;
		default:
			flagIcon = null;
	}

	return <div>{flagIcon}</div>;
};

export default PriorityFlag;
