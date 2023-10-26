import React, { useState } from "react";
import BoxColor from "../BoxColor";
import Dropdownlist from "../../icons/DropDownlist";
import moment from "moment-jalaali";
import "moment/locale/fa";
import { Box, Heading, Img, Text } from "@chakra-ui/react";

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

	const listItemContainerStyle = {
		display: "flex",
		alignItem: "center",
		mb: "20px",
		pos: "sticky",
		ms: "10px",
		w: "100%",
	};

	const listItemStyle = {
		me: "10px",
		whiteSpace: "nowrap",
		flexGrow: 2,
		minWidth: "150px",
	};

	const listItemMarginTop = {
		mb: "50px",
		mt: "50px",
	};

	const persianNumber = new Intl.NumberFormat("fa-IR");

	return (
		<Box>
			<Box sx={listItemContainerStyle}>
				<Box sx={{ marginLeft: "10px" }}></Box>
				<Box sx={listItemStyle}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							me: "50px",
						}}
					>
						<Box onClick={toggleList}>
							<Dropdownlist w="40px" h="40px" mt="10px" ml="8px" />
						</Box>
						<BoxColor
							width={width}
							height={height}
							color={boxColor}
							marginRight={0}
						>
							{title}
						</BoxColor>
						<Text
							sx={{
								marginRight: "10px",
								marginLeft: "100px",
								whiteSpace: "nowrap",
								marginTop: "8px",
								flexGrow: 5,
								minWidth: "250px",
							}}
						>
							{persianNumber.format(listData.length)} تسک
						</Text>
					</Box>
					{showList &&
						listData.map((item, index) => (
							<Box key={index} sx={listItemMarginTop}>
								<Box sx={{ display: "flex", alignItems: "center" }}>
									<BoxColor
										width={15}
										height={15}
										color={boxColor}
										marginRight={55}
									/>
									<Text
										sx={{
											whiteSpace: "nowrap",
											marginLeft: "5px",
											marginRight: "5px",
										}}
									>
										این یک تیتر برای این تسک است.
									</Text>
								</Box>
							</Box>
						))}
				</Box>
				<Box sx={listItemStyle}>
					<Heading as="h2">
						<Text fontSize="16px">اعضا</Text>
					</Heading>
					{showList &&
						listData.map((item, index) => (
							<Box key={index} sx={listItemMarginTop}>
								<Img src={item.avatar} alt="Avatar" />
							</Box>
						))}
				</Box>
				<Box sx={listItemStyle}>
					<Heading as="h2">
						<Text fontSize="16px">ددلاین</Text>
					</Heading>
					{showList &&
						listData.map((item, index) => (
							<Box
								key={index}
								sx={{ ...listItemMarginTop, marginBottom: "10px" }}
							>
								<Text sx={{ whiteSpace: "nowrap" }}>
									{moment(item.deadline).locale("fa").format("jD jMMMM")}
								</Text>
							</Box>
						))}
				</Box>
				<Box sx={listItemStyle}>
					<Heading as="h2">
						<Text fontSize="16px">اولویت</Text>
					</Heading>
					{showList &&
						listData.map((item, index) => (
							<Box key={index} sx={listItemMarginTop}>
								<Text>{item.priority}</Text>
							</Box>
						))}
				</Box>
				<Box sx={listItemStyle}>
					<Heading as="h2">
						<Text fontSize="16px">توضیحات</Text>
					</Heading>
					{showList &&
						listData.map((item, index) => (
							<Box key={index} sx={listItemMarginTop}>
								<Text>{item.description}</Text>
							</Box>
						))}
				</Box>
			</Box>
		</Box>
	);
};

export default List;
