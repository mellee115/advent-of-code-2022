import {useState} from "react";

export default function Day1() {

  const [foodList, setFoodList] = useState();
  const [maxCal, setMaxCal] = useState(undefined);

  const findMaxCal = x => {
    let max = 0;
    let counter = 0;

    x = x.split('\n')

    console.log(x)
    console.log(typeof x)
    for (let cal in  x) {
      if(Number(x[cal]) === 0){
        if (counter > max) {
          max = counter;
        }
        counter = 0;
      } else if (Number(x[cal]) !== 0) {
        counter = Number(x[cal]) + counter;
      }
    }
    if (counter > max) {
      max = counter;
    }
    return max;
  }

  const handleChange = (e) => {
    setFoodList(e.target.value);
  }

  const handleKeyUp = (e) => {
    if (e.code === 'Enter'){
      setFoodList(e.target.value);
      handleSubmit(e);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( typeof foodList === "string") {
      setMaxCal(findMaxCal(foodList));
    }

  }

  return (
    <>
      <div className='puzzle'>
        <h3>--- Day 1: Calorie Counting ---</h3>
        The jungle must be too overgrown and difficult to navigate in vehicles or access from the air; the Elves'
        expedition traditionally goes on foot.
        As your boats approach land, the Elves begin taking inventory of their supplies.
        One important consideration is food - in particular, the number of Calories each Elf is carrying (your puzzle
        input).
        The Elves take turns writing down the number of Calories contained by the various meals, snacks, rations, etc.
        that they've brought with them, one item per line. Each Elf separates their own inventory from the previous
        Elf's
        inventory (if any) by a blank line.<br/><br/>
        For example, suppose the Elves finish writing their items' Calories and end up with the following list:<br/>
        1000<br/>
        2000<br/>
        3000<br/>
        <br/>
        4000<br/>
        <br/>
        5000<br/>
        6000<br/>
        <br/>
        7000<br/>
        8000<br/>
        9000<br/>
        <br/>
        10000<br/>
        <br/>
        This list represents the Calories of the food carried by five Elves:
        <br/>
        The first Elf is carrying food with 1000, 2000, and 3000 Calories, a total of 6000 Calories.<br/>
        The second Elf is carrying one food item with 4000 Calories.<br/>
        The third Elf is carrying food with 5000 and 6000 Calories, a total of 11000 Calories.<br/>
        The fourth Elf is carrying food with 7000, 8000, and 9000 Calories, a total of 24000 Calories.<br/>
        The fifth Elf is carrying one food item with 10000 Calories.<br/><br/>
        In case the Elves get hungry and need extra snacks, they need to know which Elf to ask: they'd like to know how
        many Calories are being carried by the Elf carrying the most Calories. In the example above, this is 24000
        (carried by the fourth Elf).
        <br/><br/>
        <b>Find the Elf carrying the most Calories. How many total Calories is that Elf carrying?</b>
      </div>
      <div className='solution'>
        <form onSubmit={handleSubmit}>
          <label>
            Submit your calorie list:<br/>
            <textarea
              value={foodList}
              onChange={(e) => handleChange(e)}
              onKeyUp={handleKeyUp}
            />
          </label>
          <input type="submit" value="Submit"  />
        </form>

        { (maxCal !== 0 && maxCal !== undefined)  && `The elf carrying the most calories is carrying ${maxCal} total calories.`}
      </div>
    </>
  )
}