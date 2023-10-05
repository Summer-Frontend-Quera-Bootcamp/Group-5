import React, { useState } from "react";
import moment from "moment-jalaali";
import "moment/locale/fa";
import Box from "../BoxColor";
import Dropdownlist from "../../icons/DropDownlist";

interface ListItem {
	avatar: string;
	deadline: Date;
	priority: JSX.Element;
	description: JSX.Element;
}

interface ListProps {
	listData: ListItem[];
}

const List: React.FC<ListProps> = ({ listData }) => {
	const [showList, setShowList] = useState(false);

	const toggleList = () => {
		setShowList(!showList);
	};

	const listItemContainerStyle: React.CSSProperties = {
		display: "flex",
		marginBottom: "20px",
	};

	const listItemStyle: React.CSSProperties = {
		marginRight: "90px",
	};

	const listItemMarginTop: React.CSSProperties = {
		marginTop: "60px",
	};

	return (
		<div>
			<div style={listItemContainerStyle}>
				<div style={{ marginLeft: "10px" }}>
					{/* Render the Dropdownlist component as a button */}
				</div>

				<div style={listItemStyle}>
					{/* Render the pink rectangle box */}
					<div style={{ display: "flex" }}>
						<Dropdownlist w="40px" h="40px" mt="10px" onClick={toggleList} />
						<Box width={90} height={45} color="#E30B5C">
							Pending
						</Box>
						<p
							style={{
								marginLeft: "420px",
								marginRight: "10px",
								whiteSpace: "nowrap",
								marginTop: "8px",
							}}
						>
							{listData.length} تسک
						</p>
					</div>

					{/* Render the listData items if showList is true */}
					{showList &&
						listData.map((item, index) => (
							<div key={index} style={listItemMarginTop}>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Box width={15} height={15} color="#E30B5C">
										{" "}
									</Box>

									<p style={{ whiteSpace: "nowrap", marginLeft: "5px" }}>
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

					{/* Render the listData items */}
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

					{/* Render the listData items */}
					{showList &&
						listData.map((item, index) => (
							<div key={index} style={listItemMarginTop}>
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

					{/* Render the listData items */}
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

					{/* Render the listData items */}
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
