import * as types from '../constants/ActionTypes';
import InitialState from './InitialState';

export default function (state = InitialState.scenes, action) {
	switch (action.type) {
		case types.GET_SCENES_SUCCESS:
			return action.scenes;
		default:
			return state;
	}
}