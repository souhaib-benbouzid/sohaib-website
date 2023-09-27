import { MainSettings } from "src/types";
import { Reducer } from "src/redux";

const initialState: MainSettings = {
  language: "en",
  mode: "dark",
  status: "IDLE",
  message: undefined,
  user: undefined,
};

export const mainSettings: Reducer<MainSettings> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "UPDATE_SETTINGS":
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
