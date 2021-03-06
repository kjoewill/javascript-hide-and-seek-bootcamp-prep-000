function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    var num = parseInt(list[i].innerHTML)
    list[i].innerHTML = num + n 
  }
}
  
function deepestChild() {
  var child = document.getElementById('grand-node')
  while (child.querySelector('div')) {
    child = child.querySelector('div')
  }
  return child
}
