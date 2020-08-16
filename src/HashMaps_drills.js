const HashMap = require('./hashmap');
const HashMapChained = require('./hashmap_chaining');
const LinkedList = require('./linkedlist')

function main(){
    let lotr = new HashMap();

    lotr.set('Hobbit','Bilbo');
    lotr.set('Hobbit','Frodo');
    lotr.set('Wizard','Gandalf');
    lotr.set('Human','Aragorn');
    lotr.set('Elf','Legolas');
    lotr.set('Maiar','The Necromancer');
    lotr.set('Maiar','Sauron');
    lotr.set('RingBearer','Gollum');
    lotr.set('LadyOfLight','Galadriel');
    lotr.set('HalfElven','Arwen');
    lotr.set('Ent','Treebeard');

let hobbit = lotr.get('Hobbit');
console.log(hobbit);

let maiar = lotr.get('Maiar');
console.log(maiar);

console.log(lotr);

}

//main();




//Drill 1
/*

-- it looks like the second entry with key 'maiar' and 'hobbit' over wrote the value of the first
-- capacity is 24 instead of 8 because every 4 (50% max load ratio) we will resize our array up by capacity (8) x size load (3)

*/


/*
Drill 2

//the function will log 10 then 20

*/



//Drill 3


/*
open addressing:

slot 0:  22
slot 1:  88
slot 2:  
slot 3: 
slot 4:  4
slot 5:  15
slot 6:  28
slot 7:  17
slot 8:  59
slot 9:  31
slot 10: 10




separate chaining:

slot 0:  
slot 1:  28 -> 19 -> 10 
slot 2:  20
slot 3:  12
slot 4:
slot 5:  5
slot 6:  15 -> 33
slot 7:
slot 8:  17



*/

/*
//Drill 4
function removeDups(string){
    let dupe = new HashMap();
    let reducedString = "";

    for(let i = 0; i < string.length; i++){
	if( dupe.get(string[i]) === null ){
	    dupe.set(string[i],string[i]);
	    reducedString += string[i];
	}
    }

console.log(reducedString);

}

removeDups('google');
*/


/*
//Drill 5

function isPalindrome(string){
    let palTracker = new HashMap();
    let i = 0;

    for(i = 0; i < string.length; i++){
        if( palTracker.get(string[i]) === null ){
            palTracker.set(string[i],1);
        }else{
	    let currEntry = palTracker.get(string[i]);
	    let newCount = currEntry + 1;
	    palTracker.set(string[i],newCount);
	}
    }

    let finalTable = palTracker._hashTable;

    if( i % 2 === 0 ){
	//even, every entry should be even
	for(let j = 0; j < finalTable.length; j++){
	    if(finalTable[j] !== undefined){
		if(finalTable[j]['value'] % 2 !== 0){
		    return false;
		}
	    }
	}
	return true;
    }else{
	let oddCount = 0;
	for(let j = 0; j < finalTable.length; j++){
            if(finalTable[j] !== undefined){
                if(finalTable[j]['value'] % 2 !== 0){
                    oddCount++;
		    if(oddCount > 1){
			return false;
		    }
                }
            }   
        }
        return true;
    }
console.log(palTracker);
}

console.log(isPalindrome('accarr'));
console.log(isPalindrome('accearr'));
console.log(isPalindrome('1001'));
console.log(isPalindrome('north'));

*/


/*
//Drill 6

function groupAnagrams(list){
    let anagramTracker = new HashMap();

    for(let i = 0; i < list.length; i++){
	let hash = 0;	
        for (let j = 0; j < list[i].length; j++) {
            hash = hash + list[i].charCodeAt(j);
        }
	if(anagramTracker.get(hash) === null){
	    let newAnagramList = [list[i]];
	    anagramTracker.set(hash,newAnagramList);
	}else{
	    let anagramList = anagramTracker.get(hash);
	        anagramList.push(list[i]);
	    anagramTracker.set(hash,anagramList);
	}
    }

    let groupedAnagrams = [];
    let finalTable = anagramTracker._hashTable;
    for(let k = 0; k < finalTable.length; k++){
	if( finalTable[k] !== undefined){
	    let toPush = finalTable[k]['value'];
	    groupedAnagrams.push(toPush);
	}
    }

console.log(groupedAnagrams);

}


groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']);

*/



//Drill 7


function display(list){
    let listLength = list.size;
    let pos = 1;
    let currNode = list.head;
    let str = currNode.value.value;

    while( pos <= listLength ){
        if(currNode.next !== null){
            currNode = currNode.next;
            str = str + ' -> ' + currNode.value.value;
        }
        pos++;
    }

    console.log(str);
}

    let lotr = new HashMapChained();

    lotr.set('Hobbit','Bilbo');
    lotr.set('Hobbit','Frodo');
    lotr.set('Wizard','Gandalf');
    lotr.set('Human','Aragorn');
    lotr.set('Elf','Legolas');
    lotr.set('Maiar','The Necromancer');
    lotr.set('Maiar','Sauron');
    lotr.set('RingBearer','Gollum');
    lotr.set('LadyOfLight','Galadriel');
    lotr.set('HalfElven','Arwen');
    lotr.set('Ent','Treebeard');

let test = lotr.get('Maiar');

display(test);

console.log(lotr);


