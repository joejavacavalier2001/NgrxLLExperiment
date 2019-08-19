import {
	Action,
	createAction,
	on,
 	ActionReducerMap,
	MetaReducer,
	createReducer,
	props
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
	displayString: string; 
};

const initialState: State = {
	displayString: "original string"
};


export const changeStringAction = createAction(
	'Change String',
	props<{differentString: string}>()
);

const changeStringReducer = createReducer(
	initialState,
	on(changeStringAction, (oldState, actionParameters)=> ({...oldState, displayString: actionParameters.differentString}))
);

export function reducer(state: State | undefined, action: Action) {
  return changeStringReducer(state, action);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
