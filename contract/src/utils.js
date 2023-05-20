export function assert(statement, message){
	if (!statement)
		throw Error(`Assertion failed: ${message}`)
}

export function currentYear(){
	return (new Date()).getFullYear();
}