import type { UserListResponse } from "../interfaces/reqres.response";
import axios from "axios";

export const loadUsersAction = async (page: number) => {
  try {
    const { data } = await axios.get<UserListResponse>(
      `https://reqres.in/api/users`,
      {
        headers: {
          "x-api-key": import.meta.env.VITE_X_API_KEY,
        },
        params: {
          page: page,
        },
      },
    );

    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
