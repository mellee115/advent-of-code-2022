import {useState} from 'react';

export default function Day3(){

  const [rucksacks, setRucksacks] = useState('');
  const [sum, setSum] = useState(undefined);

  let priorityLegend = {};
  let a = 97;
  let A = 65;

  //generating the priorityLegend
  for (let i = 0; i<26; i++) {
    priorityLegend[String.fromCharCode(a + i)] = i + 1;
  }
  for (let i=0; i<26; i++){
    priorityLegend[String.fromCharCode(A + i)] = i + 1 + 26;
  }

  const handleChange = (e) => {
    setRucksacks(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    findCommonItems(rucksacks);
  }

  const findCommonItems = sacks => {
    let commons = [];

    sacks = sacks.split('\n');

    checkSack:for (let sack in sacks){
      console.log(sacks[sack])
      let first = sacks[sack].substring(0, sacks[sack].length/2);
      let second = sacks[sack].substring(sacks[sack].length/2, sacks[sack].length);

      for(let i = 0; i < first.length; i++) {
        for (let j = 0; j < second.length ; j++) {
          if(first[i] === second[j]){
            commons.push(first[i])
            continue checkSack;
          }
        }
      }
    }

    if (commons.length > 0){
      calculatePrioritySum(commons);
    }
    else{
      console.error('There are no common items found in the given rucksack compartments.')
    }
  }

  const calculatePrioritySum = items => {
    let total = 0;
    console.log(items)
    for(let item in items){
      total = total + priorityLegend[items[item]];
    }
    setSum(total);
  }

  return (
    <>
      <div className='puzzle'>
        <h3>--- Day 3: Rucksack Reorganization ---</h3>
        One Elf has the important job of loading all of the rucksacks with supplies for the jungle journey.
        Unfortunately, that Elf didn't quite follow the packing instructions, and so a few items now need to be
        rearranged.
        <br/><br/>
        Each rucksack has two large compartments. All items of a given type are meant to go into exactly one of the two
        compartments. The Elf that did the packing failed to follow this rule for exactly one item type per rucksack.
        <br/><br/>
        The Elves have made a list of all of the items currently in each rucksack (your puzzle input), but they need
        your help finding the errors. Every item type is identified by a single lowercase or uppercase letter (that is,
        a and A refer to different types of items).
        <br/><br/>
        The list of items for each rucksack is given as characters all on a single line. A given rucksack always has
        the same number of items in each of its two compartments, so the first half of the characters represent items
        in the first compartment, while the second half of the characters represent items in the second compartment.
        <br/><br/>
        For example, suppose you have the following list of contents from six rucksacks:
        <br/><br/>
        vJrwpWtwJgWrhcsFMMfFFhFp<br/>
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL<br/>
        PmmdzqPrVvPwwTWBwg<br/>
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn<br/>
        ttgJtRGJQctTZtZT<br/>
        CrZsJsPPZsGzwwsLwLmpwMDw
        <br/><br/>
        The first rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp,
        which means its first compartment contains the items vJrwpWtwJgWr,
        while the second compartment contains the items hcsFMMfFFhFp.
        The only item type that appears in both compartments is lowercase p.
        <br/><br/>
        The second rucksack's compartments contain jqHRNqRjqzjGDLGL and rsFMfFZSrLrFZsSL.
        The only item type that appears in both compartments is uppercase L.
        <br/><br/>
        The third rucksack's compartments contain PmmdzqPrV and vPwwTWBwg; the only common item type is uppercase P.
        <br/><br/>
        The fourth rucksack's compartments only share item type v.<br/>
        The fifth rucksack's compartments only share item type t.<br/>
        The sixth rucksack's compartments only share item type s.
        <br/><br/>
        To help prioritize item rearrangement, every item type can be converted to a priority:
        <br/><br/>
        Lowercase item types a through z have priorities 1 through 26.<br/>
        Uppercase item types A through Z have priorities 27 through 52.
        <br/><br/>
        In the above example, the priority of the item type that appears in both compartments of each rucksack is:
        <br/><br/>
        16 (p), 38 (L), 42 (P), 22 (v), 20 (t), and 19 (s); the sum of these is 157.
        <br/><br/>
        <b>
          Find the item type that appears in both compartments of each rucksack.<br/>
          What is the sum of the priorities of those item types?
        </b>
      </div>
      <div className='solution'>
        <form onSubmit={handleSubmit}>
          <label>
            Submit your rucksack list:<br/>
            <textarea
              value={rucksacks}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <input type='submit' value='Submit'  />
        </form>
        { sum  && `The sum would be ${sum}.`}
      </div>
    </>
  );
}