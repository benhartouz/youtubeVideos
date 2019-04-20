import { ADD_COLUMN_YOUTUBE, REMOVE_COLUMN_YOUTUBE } from "../Actions/search";

export const searchColumn = (state = 1, action) => {
    switch (action.type) {
        case ADD_COLUMN_YOUTUBE:
            return action.count;
            break;
        default:
            return state;
            break;
    }
};

export const removeColumn = (state = [], action) => {
    switch (action.type) {
        case REMOVE_COLUMN_YOUTUBE:
            return action.id;
            break;
        default:
            return state;
            break;
    }
};
