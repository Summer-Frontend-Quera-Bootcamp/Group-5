import { AXIOS } from "../../utils/functions/AXIOS";

interface IRefreshProp {

  refresh: string;
  access:string;

}

export const RefreshApi = ({ refresh,access }: IRefreshProp) =>
	AXIOS.post("/accounts/refresh/", {
                  refresh,
                  access,
	});

export const getAllWorkSpaces = () => AXIOS.get("/workspaces/");
