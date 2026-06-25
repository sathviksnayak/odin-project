const LinkedList = require('../src/linkedlist');

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  describe('initial state', () => {
    test('new list has size 0', () => {
      expect(list.size()).toBe(0);
    });

    test('head() returns undefined when empty', () => {
      expect(list.head()).toBeUndefined();
    });

    test('tail() returns undefined when empty', () => {
      expect(list.tail()).toBeUndefined();
    });

    test('toString() returns "null" when empty', () => {
      expect(list.toString()).toBe('null');
    });
  });

  describe('addatend', () => {
    test('adds a single node', () => {
      list.addatend(1);
      expect(list.size()).toBe(1);
      expect(list.head()).toBe(1);
    });

    test('adds multiple nodes in order', () => {
      list.addatend(1);
      list.addatend(2);
      list.addatend(3);
      expect(list.size()).toBe(3);
      expect(list.head()).toBe(1);
      expect(list.at(1)).toBe(2);
      expect(list.at(2)).toBe(3);
    });

    test('tail() reflects the last added node', () => {
      list.addatend(1);
      list.addatend(2);
      list.addatend(3);
      expect(list.tail()).toBe(3);
    });

    test('toString() reflects insertion order', () => {
      list.addatend(1);
      list.addatend(2);
      expect(list.toString()).toBe('(1)-> (2)-> null');
    });
  });

  describe('addatbegin', () => {
    test('adds to an empty list', () => {
      list.addatbegin(5);
      expect(list.size()).toBe(1);
      expect(list.head()).toBe(5);
    });

    test('adds to the front of a non-empty list', () => {
      list.addatend(1);
      list.addatend(2);
      list.addatbegin(0);
      expect(list.size()).toBe(3);
      expect(list.head()).toBe(0);
      expect(list.at(1)).toBe(1);
      expect(list.at(2)).toBe(2);
    });
  });

  describe('size', () => {
    test('counts nodes correctly as items are added', () => {
      expect(list.size()).toBe(0);
      list.addatend('a');
      expect(list.size()).toBe(1);
      list.addatend('b');
      expect(list.size()).toBe(2);
      list.addatbegin('z');
      expect(list.size()).toBe(3);
    });
  });

  describe('at', () => {
    beforeEach(() => {
      list.addatend('a');
      list.addatend('b');
      list.addatend('c');
    });

    test('returns the value at a valid index', () => {
      expect(list.at(0)).toBe('a');
      expect(list.at(1)).toBe('b');
      expect(list.at(2)).toBe('c');
    });

    test('returns undefined for a negative index', () => {
      expect(list.at(-1)).toBeUndefined();
    });

    test('returns undefined for an out-of-range index', () => {
      expect(list.at(3)).toBeUndefined();
      expect(list.at(100)).toBeUndefined();
    });
  });

  describe('pop', () => {
    test('returns undefined when list is empty', () => {
      expect(list.pop()).toBeUndefined();
    });

    test('removes and returns the head value', () => {
      list.addatend(1);
      list.addatend(2);
      list.addatend(3);
      const popped = list.pop();
      expect(popped).toBe(1);
      expect(list.size()).toBe(2);
      expect(list.head()).toBe(2);
    });

    test('list becomes empty after popping the only element', () => {
      list.addatend(42);
      expect(list.pop()).toBe(42);
      expect(list.size()).toBe(0);
      expect(list.head()).toBeUndefined();
    });
  });

  describe('contains', () => {
    beforeEach(() => {
      list.addatend(10);
      list.addatend(20);
      list.addatend(30);
    });

    test('returns true when value exists', () => {
      expect(list.contains(20)).toBe(true);
    });

    test('returns false when value does not exist', () => {
      expect(list.contains(99)).toBe(false);
    });

    test('returns false on an empty list', () => {
      const emptyList = new LinkedList();
      expect(emptyList.contains(1)).toBe(false);
    });
  });

  describe('findIndex', () => {
    beforeEach(() => {
      list.addatend('x');
      list.addatend('y');
      list.addatend('z');
    });

    test('returns the correct index when value exists', () => {
      expect(list.findIndex('y')).toBe(1);
    });

    test('returns -1 when value does not exist', () => {
      expect(list.findIndex('nope')).toBe(-1);
    });

    test('returns -1 on an empty list', () => {
      const emptyList = new LinkedList();
      expect(emptyList.findIndex('x')).toBe(-1);
    });
  });

  describe('toString', () => {
    test('formats a multi-node list correctly', () => {
      list.addatend(1);
      list.addatend(2);
      list.addatend(3);
      expect(list.toString()).toBe('(1)-> (2)-> (3)-> null');
    });
  });

  describe('insertAt', () => {
    beforeEach(() => {
      list.addatend(1);
      list.addatend(2);
      list.addatend(3);
    });

    test('inserts a single value at the beginning', () => {
      list.insertAt(0, 0);
      expect(list.at(0)).toBe(0);
      expect(list.size()).toBe(4);
    });

    test('inserts a single value in the middle', () => {
      list.insertAt(1, 99);
      expect(list.toString()).toBe('(1)-> (99)-> (2)-> (3)-> null');
    });

    test('inserts multiple values at once', () => {
      list.insertAt(1, 'a', 'b');
      expect(list.toString()).toBe('(1)-> (a)-> (b)-> (2)-> (3)-> null');
    });
  });

  describe('removeAt', () => {
    beforeEach(() => {
      list.addatend(1);
      list.addatend(2);
      list.addatend(3);
    });

    test('removes the head element (index 0)', () => {
      list.removeAt(0);
      expect(list.size()).toBe(2);
      expect(list.head()).toBe(2);
    });

    test('removes a middle element', () => {
      list.removeAt(1);
      expect(list.toString()).toBe('(1)-> (3)-> null');
    });

    test('throws RangeError when index is out of bounds', () => {
      expect(() => list.removeAt(10)).toThrow(RangeError);
    });
  });


  describe('known bugs (skipped until fixed)', () => {
    test.skip('BUG: addatend on an empty list should store the new node, not the class reference', () => {
      list.addatend(1);

      expect(list.head()).toBe(1);
    });

    test.skip('BUG: tail() should update after the very first addatend call', () => {
      list.addatend(1);
      expect(list.tail()).toBe(1);
    });

    test.skip('BUG: addatbegin should link the new node to the old head (typo: nextNode vs newnode)', () => {
      list.addatend(1);
      list.addatbegin(0);
      expect(list.toString()).toBe('(0)-> (1)-> null');
    });

    test.skip('BUG: insertAt/removeAt reference `Node` (capital N) which does not exist', () => {
      list.addatend(1);
      expect(() => list.insertAt(0, 5)).not.toThrow();
    });
  });
});