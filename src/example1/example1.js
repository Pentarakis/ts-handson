function sortByName(a){
	var result = a.slice(0);
	result.sort((x,y) => {
		return x.name.localCompare(y.name);
	});
	return result;
}

var result = sortByName(5);
console.log(result);