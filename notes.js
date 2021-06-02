const dailyLearnings = [
  {
    id: 1,
    subject: "HTML",
    date: "5/25/21",
    feeling: "good",
    timeSpent: 2
  },
  {
    id: 2,
    subject: "CSS",
    date: "5/26/21",
    feeling: "ok",
    timeSpent: 3
  }
]

const noteAboutToday = {
    id: 3,
    subject: "Javascript",
    date: "5/27/21",
    feeling: "good",
    timespent: 3
}

dailyLearnings.push(noteAboutToday)
// checked to see if notes were added to dailyLearnings
//console.log(dailyLearnings)

// (const dailyNote of dailyLearnings) {
// console.log(`Day ${dailyNote.id}
// ${dailyNote.date}  
// I learned ${dailyNote.subject}
// I felt ${dailyNote.feeling}
// I spent ${dailyNote.timeSpent} hours
// ---------------`)
// }
// Confirmed code in node.  Indention matters on the sentences.

// const searchTerm = "ok"
// for (notes of dailyLearnings) {
//   if (notes.feeling === searchTerm) {
//     console.log (notes)
//   }
// }
// Out put { id: 2, subject: 'CSS', date: '5/26/21', feeling: 'ok', timeSpent: 3 }

const createNote = (notes) => {
    const lastIndex = dailyLearnings.length - 1
    const lastNotes = dailyLearnings[lastIndex]
    const newNotesId = lastNotes.id
    const newLearningNotes = newNotesId + 1

    notes.id = newLearningNotes
    dailyLearnings.push(notes)
}

const moreNotes = {
    subject: "JavaScript",
    date: "6/1/21",
    feeling: "good",
    timeSpent: 4
}

createNote(moreNotes)
console.log(dailyLearnings)