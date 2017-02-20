import {getBFStats} from '../utils/battlefieldHelper';

//reducer that calls the battlefield stats api based on the paramters supplied 

function users(state=[], action){
	
		switch(action.type){
		
			//updates the state of the userArray with the newly searched user from the bfstats api.
		case 'SEARCH_USER':
			const user = action.username;
			const platform = action.plat;
			
			var data = getBFStats(platform, user);
		
			
			
			
			
			return [
				...state,
					{data}]
					//removes the user at the specified index from the userArray
		case 'REMOVE_USER':
			return [
                ...state.slice(0, action.index),
                ...state.slice(action.index+1)
            ];
			
		default:
			return state;
	}

}

export default users;