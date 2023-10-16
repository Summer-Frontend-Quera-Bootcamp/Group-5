import { AXIOS } from "../../../utils/functions/AXIOS";

interface Isettings {

    id: number;
    theme:string;
  
}

export const settingsAPI = ({ theme}: Isettings) =>
	AXIOS.post("/settings/" ,{
                  theme,

	});

export const getAllWorkSpaces = () => AXIOS.get("/workspaces/");
