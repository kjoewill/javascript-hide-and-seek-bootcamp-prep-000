function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  return list
}