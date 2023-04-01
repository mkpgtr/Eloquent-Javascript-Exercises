// defining the journal
// ! when we will push our events into this journal as entries with the addEntry function, then our journal array will look something like the
// ! the data inside the journal.js file
let journal = [
   
]


// define a function to add an entry

function addEntry(events,squirrel){
    journal.push({events,squirrel})
}

// phi table function

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
  }

//   this tableFor function helps us get the array of four values for a certain event like "Pizza", "touch tree", etc

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
      let entry = journal[i], index = 0;
      if (entry.events.includes(event)) index += 1;
      if (entry.squirrel) index += 2;
      table[index] += 1;
    }
    return table;
  }

//   ! this function will collect every type of event in the journal

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
      for (let event of entry.events) {
        if (!events.includes(event)) {
          events.push(event);
        }
      }
    }
    return events;
  }

// and finally we use all of this as 

for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event, JOURNAL)));
    }
    