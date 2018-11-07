import { ADD_COMMENT } from './action';
import { EDIT_COMMENT} from './action';
import { REMOVE_COMMENT} from './action';
import { THUMB_UP_COMMENT} from './action';
import { THUMB_DOWN_COMMENT} from './action';

function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votes: 0
            }
                , ...state.comments];

        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
            });

        case EDIT_COMMENT:
            return state.map(comment => { //czy moge po prostu stworzyc nowa tablice?
                if (comment.id === action.id) {
                    comment.text = action.id //czy wykonana akcje moge traktowac jako edytowany komentarz?
                }
                return comment;
            });
            
        case THUMB_UP_COMMENT:
          return state.map(comment => (comment.id === action.id) ? comment.up = comment.up + 1 : comment);

        case THUMB_DOWN_COMMENT:
          return state.map(comment => (comment.id === action.id) ? comment.down = comment.down - 1 : comment);

        default:
          return state;
    }
}

export default comments;