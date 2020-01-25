// START SCRIPT. Is executed once for transformation at the start.
// Open Item_0 script tab for transform script, which is executed
// for each row.


// return a empty field if the variable is NULL
function emptyIfNull(variable) {
	if(variable === null || variable === undefined) {
		return '';
	}
	// IMPORTANT!!! cast to Javascript String:
	return '' + variable;
}



// getColumn with ensure that you will get the right Column
function getColumn(columnName) {
	var value = row[getInputRowMeta().indexOfValue(columnName)];
	return emptyIfNull(value);
}



// check if a String is empty
function stringIsEmpty(string) {
	return ((string === null) 
		|| (string === undefined) 
		|| (string === '') 
		|| ! (string.length >= 1)
	);
}


// concatenate items from array, separating them by separator, don't use separator, if array item is empty.
function separateNonEmpty(arr, separator) {
	var str = '';
	for (var i = 0; i < arr.length; ++i) {
		var item = arr[i];
		if(stringIsEmpty(item)) {
			continue;
		}
		else{
			if(str.length > 0) {
				str += separator;
			}
			str += item;
		}
	}
	return str;
}
