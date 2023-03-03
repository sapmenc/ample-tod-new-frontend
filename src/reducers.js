import { seggregateProfiles } from "./assets/utilityFunctions";
export const filteredProfilesReducer = (
  state = [[], [], [], [], []],
  action
) => {
  switch (action.type) {
    case "ADD_NEW_DATA": {
      return seggregateProfiles(action.newData);
    }
  }
};
