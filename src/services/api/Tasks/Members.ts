import { AXIOS } from "../../../utils/functions/AXIOS";

interface IMember  {
    user: {
      id: number;
      username: string;
      email: string;
      first_name: string;
      last_name: string;
      phone_number: number;
      thumbnail: string;
    }
  }


  
export const memberAPI = ({user: {username,email,first_name,last_name, phone_number,thumbnail }
}: IMember) =>
	AXIOS.post(`/workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/assignee/`,
		{
		username,email,first_name,last_name,phone_number,thumbnail
		}
	);


export const getAllWorkSpaces = () => AXIOS.get(`/workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/assignee/`);

export const deleteTasks = (board_id:string,workspace_id:string,project_id:string,task_id:string) =>
	AXIOS.delete(`/workspaces/{workspace_id}/projects/{project_id}/boards/{board_id}/tasks/{task_id}/assignee/`,
	);
