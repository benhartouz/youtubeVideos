export const ADD_COLUMN_YOUTUBE = "ADD_COLUMN_YOUTUBE";
export const REMOVE_COLUMN_YOUTUBE = "REMOVE_COLUMN_YOUTUBE";

export const addColumn = count => {
    return {
        type: ADD_COLUMN_YOUTUBE,
        count
    };
};

export const removeColumn = id => {
    return {
        type: REMOVE_COLUMN_YOUTUBE,
        id
    };
};
