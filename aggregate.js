const matricMarks = prompt('What are your marks in Matric? ')
const totalMatricMarks = prompt('Matric Marks out of? ')
const matricPer = 10

const fscMarks = prompt('What are your marks in Fsc? ')
const totalFscMarks = prompt('Fsc Marks out of? ')
const fscPer = 40

const ntsMarks = prompt('Expected NTS marks out of 100? e.g 75 ')
const totalNtsMarks = 100
const ntsPer = 50

const matricAgg = (matricMarks/totalMatricMarks) * matricPer
const fscAgg = (fscMarks / totalFscMarks) * fscPer
const ntsAgg = ( ntsMarks / totalNtsMarks ) * ntsPer

const totalAgg = matricAgg + fscAgg + ntsAgg
alert(`Your aggregate is ${totalAgg}`)
