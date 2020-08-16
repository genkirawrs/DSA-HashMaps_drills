const LinkedList = require('./linkedlist')


class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
	this.MAX_LOAD_RATIO = 0.5;
	this.SIZE_RATIO = 3;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            return null;
        }
        return this._hashTable[index].value;
    }

    set(key, value){
        //Find the slot where this key should be in
        const index = this._findSlot(key);

        if(!this._hashTable[index]){
            const loadRatio = (this.length + this._deleted + 1) / this._capacity;
            if (loadRatio > HashMap.MAX_LOAD_RATIO) {
                this._resize(this._capacity * HashMap.SIZE_RATIO);
            }

	    //if this slot is empty
            this.length++;
            this._hashTable[index] = {
                key,
                value,
                DELETED: false
            }; 
	}else{
	    //otherwise, we need to either add to a linked list or create one
	    const slot = this._hashTable[index];
	    if( slot.head === undefined ){
		const currValue = slot;
		let newList = new LinkedList(key);
		newList.insertFirst(currValue);
		newList.insertLast({key: key, value: value, DELETED: false});
		value = newList;
                this._hashTable[index] = {
                    key,
                    value,
                    DELETED: false
                };
	    }else{
		let currList = slot;
		currList.insertLast({key: key, value: value, DELETED: false});
		value = currList;
                this._hashTable[index] = {
                    key,
                    value,
                    DELETED: false
                };
	    }
	}
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            hash = (hash << 5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0;
    }

}

HashMap.MAX_LOAD_RATIO = 0.9;
HashMap.SIZE_RATIO = 3;
module.exports = HashMap;
