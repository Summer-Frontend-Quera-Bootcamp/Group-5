import "moment/locale/fa";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AXIOS } from "../../utils/functions/AXIOS";
import Row from "./Row";

const List: FC = ({}) => {
	const [boards, setBoards] = useState<any[]>([]);
	const { workspaceId, projectId } = useParams();
	useEffect(() => {
		AXIOS.get(`/workspaces/${workspaceId}/projects/${projectId}/boards/`).then(
			(res) => setBoards(res.data)
		);
	}, []);

	return (
		<>
			{boards?.map((item) => (
				<Row name={item.name} id={item.id} color={item.color} />
			))}
		</>
	);
};

export default List;
