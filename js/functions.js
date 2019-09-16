/**
 * =======================================
 *  Utilities
 * =======================================
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

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

//============================================//
function flip(card_num) {
  card = document.getElementById('item-'+card_num).className
  cardsFlippeds = parseInt(document.getElementById('FlippedCards').innerHTML)
  if(card.indexOf('hidden_') != -1) {
    document.getElementById("item-"+card_num).className = removeHidden(card)
    ++cardsFlippeds
    document.getElementById('FlippedCards').innerHTML = cardsFlippeds.toString()
  }
  checkFlips()
}

function checkFlips() {
  if(document.getElementById('FlippedCards').innerHTML == 2) {
    if(comparator()) {
      lockCards()
    }else {
      sleep(1000)
      resetChance()
    }
  }
}

function removeHidden(card) {
  return card.split('_')[1]
}

function addHidden(card) {
  return ['hidden_', card].join('')
}

function addLocked(card) {
  return ['locked_', card].join('')
}

function comparator() {
  let cards = []
  for(let i = 0; i < 6; i++) {
    card = document.getElementById('item-'+(i+1)).className
    if(card.indexOf('hidden_') == -1 && card.indexOf('locked_') == -1) {
      cards.push(card)
    }
  }
  if(cards[0] == cards[1]) {
    return true
  }
  return false
}

// function applyCards() {

// }

function lockCards() {
  for(let i = 0; i < 6; i++) {
    card = document.getElementById('item-'+(i+1)).className
    if(card.indexOf('hidden_') == -1 && card.indexOf('locked_') == -1) {
      document.getElementById('item-'+(i+1)).className = addLocked(card)
    }
  }
  document.getElementById('FlippedCards').innerHTML = "0"
}

function setCardsNotLockeds() {
  for(let i = 0; i < 6; i++) {
    card = document.getElementById('item-'+(i+1)).className
    if(card.indexOf('hidden_') == -1 && card.indexOf('locked_') == -1) {
      document.getElementById('item-'+(i+1)).className = addHidden(card)
    }
  }
}

function resetChance() {
  setCardsNotLockeds()
  document.getElementById('FlippedCards').innerHTML = "0"
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
  flip(1)
}

function flipCard2() {
  flip(2)
}

function flipCard3() {
  flip(3)
}

function flipCard4() {
  flip(4)
}

function flipCard5() {
  flip(5)
}

function flipCard6() {
  flip(6)
}