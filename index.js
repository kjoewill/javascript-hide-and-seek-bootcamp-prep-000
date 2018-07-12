function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    
  }
  return list
}