/**
 * =======================================
 *  Utilities
 * =======================================
 */
function sequencialIntNoRepeated(rang, arr = []) {
  x = Math.floor(Math.random() * 10).toString()
  if(arr.indexOf(x) == -1 && x < rang) {
    arr.push(x)
  }
  if(arr.length < rang) {
    return sequencialIntNoRepeated(rang, arr)
  }
  return arr
}

function setCards(a) {
  let cards = ['saber', 'archer', 'lancer', 'saber', 'archer', 'lancer']
  for(let i = 0; i < a.length; i++) {
    document.getElementById("item-"+(i+1)).className = 'hidden_'+a[i]
  }
}

function removeHidden(card) {
  return card.split('_')[1]
}

function addHidden(card) {
  return ['hidden_', card].join('')
}

function flipLimiter() {

}

function comparator() {

}

function lockCards() {

}

/**
 * =======================================
 *  Main Functions
 * =======================================
 */
function shuffle() {
  let cards = ['saber', 'archer', 'lancer', 'saber', 'archer', 'lancer']
  let x = []
  let sequence = sequencialIntNoRepeated(6)

  for(let i = 0; i < cards.length; i++) {
    x[i] = cards[parseInt(sequence[i])]

  }
  setCards(x)
}

/**
 * =======================================
 *  Html Manager
 * =======================================
 */

function flipCard1() {
  let card = document.getElementById("item-1").className
  if(card.indexOf('hidden_') != -1){
    document.getElementById("item-1").className = removeHidden(card)
  }else{
    document.getElementById("item-1").className = addHidden(card)
  }
}

function flipCard2() {
  let card = document.getElementById("item-2").className
  if(card.indexOf('hidden_') != -1){
    document.getElementById("item-2").className = removeHidden(card)
  }else{
    document.getElementById("item-2").className = addHidden(card)
  }
}

function flipCard3() {
  let card = document.getElementById("item-3").className
  if(card.indexOf('hidden_') != -1){
    document.getElementById("item-3").className = removeHidden(card)
  }else{
    document.getElementById("item-3").className = addHidden(card)
  }
}

function flipCard4() {
  let card = document.getElementById("item-4").className
  if(card.indexOf('hidden_') != -1){
    document.getElementById("item-4").className = removeHidden(card)
  }else{
    document.getElementById("item-4").className = addHidden(card)
  }
}

function flipCard5() {
  let card = document.getElementById("item-5").className
  if(card.indexOf('hidden_') != -1){
    document.getElementById("item-5").className = removeHidden(card)
  }else{
    document.getElementById("item-5").className = addHidden(card)
  }
}

function flipCard6() {
  let card = document.getElementById("item-6").className
  if(card.indexOf('hidden_') != -1){
    document.getElementById("item-6").className = removeHidden(card)
  }else{
    document.getElementById("item-6").className = addHidden(card)
  }
}