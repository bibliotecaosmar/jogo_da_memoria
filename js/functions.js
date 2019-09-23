/**
 * =======================================
 *  Utilities
 * =======================================
 */
function removeHidden(card) {
  return card.split('_')[1]
}

function addHidden(card) {
  return ['hidden_', card].join('')
}

function addLocked(card) {
  return ['locked_', card].join('')
}

function lockAll() {
  for(let i = 0; i < 6; i++) {
    document.getElementById('item-'(i+1)).onclick = 'null'
  }
}

function unlockAll() {
  for(let i = 0; i < 6; i++) {
    document.getElementById('item-'(i+1)).onclick = flip(i+1)
  }
}

/**
 * =======================================
 *  Main Functions
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

function fail() {
  deductPoints()
  resetChance()
}

function checkFlips() {
  if(document.getElementById('FlippedCards').innerHTML == 2) {
    if(comparator()) {
      addPoints()
      lockCards()
    }else {
      time = setTimeout(function(){fail(); clearTimeout(time)}, 2000)
    }
  }
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

function addPoints() {
  currentPoints = parseInt(document.getElementById('Points').innerHTML)
  document.getElementById('Points').innerHTML = currentPoints + 2
}

function deductPoints() {
  currentPoints = parseInt(document.getElementById('Points').innerHTML)
  document.getElementById('Points').innerHTML = currentPoints - 2
}


/**
 * =======================================
 *  Features
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
  document.getElementById('Screen').hidden = false
  document.getElementById('start').innerHTML = "Shuffle"
}

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