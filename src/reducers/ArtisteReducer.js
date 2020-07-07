import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.artistes, action) {
	switch (action.type) {
		case types.GET_ARTISTES_SUCCESS:
			return action.artistes;
		default:
			return state;
	}
}