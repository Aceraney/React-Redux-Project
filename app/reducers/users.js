import {getBFStats} from '../utils/battlefieldHelper';

function users(state=[], action){
	
		switch(action.type){
		

		case 'SEARCH_USER':
			const user = action.username;
			const platform = action.plat;
			
			var data = getBFStats(platform, user);
		
			
			
			
			
			return [
				...state,
					{data}]
			
		default:
			return state;
	}

}

export default users;