const cards = document.querySelector('.cards')

const populate = async () => {
  const response = await fetch('./data.json')
  const data = await response.json()
  cards.innerHTML = data.map(card => {
    return `<div class="card">
    <img src="${card.icon}" alt="icon-reaction"/>
    <h4>${card.category}</h4>
    <p>${card.score} <span>/ 100</span></p>
    </div>`
  }).join('')
}

populate()