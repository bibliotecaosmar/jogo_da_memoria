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

function removeHidden(arr) {
  return arr.split('_')[1]
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

function showCard1() {
  document.getElementById("item-1").className = removeHidden(document.getElementById("item-1").className)
}

function showCard2() {
  document.getElementById("item-2").className = removeHidden(document.getElementById("item-2").className)
}

function showCard3() {
  document.getElementById("item-3").className = removeHidden(document.getElementById("item-3").className)
}

function showCard4() {
  document.getElementById("item-4").className = removeHidden(document.getElementById("item-4").className)
}

function showCard5() {
  document.getElementById("item-5").className = removeHidden(document.getElementById("item-5").className)
}

function showCard6() {
  document.getElementById("item-6").className = removeHidden(document.getElementById("item-6").className)
}