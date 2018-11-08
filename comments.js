import {
    ADD_COMMENT,
    EDIT_COMMENT,
    REMOVE_COMMENT,
    THUMB_UP_COMMENT,
    THUMB_DOWN_COMMENT
} from './action';

function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }, ...state];

        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);

        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        text: action.text
                    }
                }
                return comment;
            });

        case THUMB_UP_COMMENT:
            //return state.map(comment => (comment.id === action.id) ? comment.up = comment.up + 1 : comment);
            return state.map(comment => {
                if (comment.id === action.id) {
                    return {
                        ...comment,
                        votes: comment.votes + 1
                    }
                }
                return comment;
            });

        case THUMB_DOWN_COMMENT:
            // return state.map(comment => (comment.id === action.id) ? comment.down = comment.down - 1 : comment);
            return state.map(comment => {
                if (comment.id === action.id) {
                    return { ...comment,
                        votes: comment.votes - 1
                    }
                }
                return comment;
            });
        default:
            return state;
    }
}

export default comments;