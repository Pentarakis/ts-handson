function countLines(text){
	var count;
	for(const line of text){
		if(line.length !== 0 ){
			count +=1;
		}
	}
	return count;
}

let a = countLines(['one', 'two', 'three']);
let b = countLines(['hello', null, 'world']);
let c = countLines();

console.log(a);
console.log(b);
console.log(c);