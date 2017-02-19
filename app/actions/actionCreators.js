//search user and add

export function searchUser(username, plat){

	return{
		type: "SEARCH_USER",
		 username,
		 plat
	}
}

//remove user

export function removeUser(index){
	return{
		type: "REMOVE_USER",
		index
	}
}

export function changeBackground(colorindex){

	return{
		type: "CHANGE_BACKGROUND",
		colorindex
	}
}