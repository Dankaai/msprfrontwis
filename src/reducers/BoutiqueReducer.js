import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.boutiques, action) {
	switch (action.type) {
		case types.GET_BOUTIQUES_SUCCESS:
			return action.boutiques;
		default:
			return state;
	}
}