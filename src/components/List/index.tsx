import React, { useState } from "react";
import Box from "../BoxColor";
import Dropdownlist from "../../icons/DropDownlist";
import moment from "moment-jalaali";
import "moment/locale/fa";

interface ListItem {
	avatar: string;
	deadline: Date;
	priority: JSX.Element;
	description: JSX.Element;
}

interface ListProps {
	listData: ListItem[];
	boxColor: string;
	title: string;
	width: number;
	height: number;
}

const List: React.FC<ListProps> = ({
	listData,
	boxColor,
	title,
	width,
	height,
}) => {
	const [showList, setShowList] = useState(false);

	const toggleList = () => {
		setShowList(!showList);
	};

	const listItemContainerStyle: React.CSSProperties = {
		display: "flex",
		marginBottom: "20px",
		position: "sticky",
		marginRight: "10px",
		width: "100%",
	};

	const listItemStyle: React.CSSProperties = {
		marginLeft: "10px",
		whiteSpace: "nowrap",
		flexGrow: 2, // Add this property to make all list items take up equal space
		minWidth: "150px",
	};

	const listItemMarginTop: React.CSSProperties = {
		marginBottom: "50px",
		marginTop: "50px",
	};

	const persianNumber = new Intl.NumberFormat("fa-IR");

	return (
		<div>
			<div style={listItemContainerStyle}>
				<div style={{ marginLeft: "10px" }}></div>

				<div style={listItemStyle}>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							marginLeft: "50px",
						}}
					>
						<Dropdownlist
							w="40px"
							h="40px"
							mt="10px"
							ml="8px"
							onClick={toggleList}
						/>
						<Box width={width} height={height} color={boxColor} marginRight={0}>
							{title}
						</Box>
						<p
							style={{
								marginRight: "10px",
								marginLeft: "100px",
								whiteSpace: "nowrap",
								marginTop: "8px",
								flexGrow: 5,
								minWidth: "250px",
							}}
						>
							{persianNumber.format(listData.length)} تسک
						</p>
					</div>
					{showList &&
						listData.map((item, index) => (
							<div key={index} style={listItemMarginTop}>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Box
										width={15}
										height={15}
										color={boxColor}
										marginRight={55}
									/>
									<p
										style={{
											whiteSpace: "nowrap",
											marginLeft: "5px",
											marginRight: "5px",
										}}
									>
										این یک تیتر برای این تسک است.
									</p>
								</div>
							</div>
						))}
				</div>
				<div style={listItemStyle}>
					<h2>
						<b>اعضا</b>
					</h2>
					{showList &&
						listData.map((item, index) => (
							<div key={index} style={listItemMarginTop}>
								<img src={item.avatar} alt="Avatar" />
							</div>
						))}
				</div>

				<div style={listItemStyle}>
					<h2>
						<b>ددلاین</b>
					</h2>
					{showList &&
						listData.map((item, index) => (
							<div
								key={index}
								style={{ ...listItemMarginTop, marginBottom: "10px" }}
							>
								<p style={{ whiteSpace: "nowrap" }}>
									{moment(item.deadline).locale("fa").format("jD jMMMM")}
								</p>
							</div>
						))}
				</div>

				<div style={listItemStyle}>
					<h2>
						<b>اولویت</b>
					</h2>
					{showList &&
						listData.map((item, index) => (
							<div key={index} style={listItemMarginTop}>
								<p>{item.priority}</p>
							</div>
						))}
				</div>

				<div style={listItemStyle}>
					<h2>
						<b>توضیحات</b>
					</h2>
					{showList &&
						listData.map((item, index) => (
							<div key={index} style={listItemMarginTop}>
								<p>{item.description}</p>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default List;
