
import { getPostTeasers } from './search-data'

let content,
  container = document.querySelector('.S_Content')

document.addEventListener('DOMContentLoaded', () => {
  getPostTeasers().then((data) => {
    content = data
    initSearch()
  })
})

function initSearch() {
  const A_SearchInput = document.querySelector('.A_SearchInput')
  const A_SearchButton = document.querySelector('.A_SearchButton')

  let requestText = getSearchRequest()

  if (requestText != undefined) {
    A_SearchInput.value = requestText
    if (content) {
      searchContent(requestText)
    }
  } else {
    A_SearchInput.value = ''
  }

  A_SearchInput.addEventListener('input', (e) => {
    requestText = e.target.value

    if (requestText.length >= 3) {
      A_SearchButton.classList.remove('disabled')
    } else {
      A_SearchButton.classList.add('disabled')
    }
  })

  A_SearchInput.addEventListener('keydown', (e) => {
    requestText = e.target.value
    if (e.key === 'Enter') {
      setSearchRequest(requestText)
      searchContent(requestText)
    }
  })

  A_SearchButton.addEventListener('click', (e) => {
    if (!e.target.classList.contains('disabled')) {
      requestText = A_SearchInput.value
      setSearchRequest(requestText)
      searchContent(requestText)
    }
  })
}

function setSearchRequest(requestText) {
  const url = window.location.href.split('?')[0]
  window.location.href = url + '?request=' + requestText
}

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)
  if (searchParams.has('request')) {
    return searchParams.get('request')
  }
}

function searchContent(requestText) {
  container.innerHTML = ''
  let contentItemIds = []

  content.forEach((contentDataItem) => {
    const nbspRegEx = /[\u202F\u00A0]/gm
    const punctuationRegEx = /[.,\/#!$%\^&\*;:{}=\-_`()]/gm

    let { title, description, id } = contentDataItem

    title = title.replaceAll(nbspRegEx, ' ').replaceAll(punctuationRegEx, '')
    description = description.replaceAll(nbspRegEx, ' ').replaceAll(punctuationRegEx, '')

    if (requestText.length >= 3) {
      if (title.toLowerCase().includes(requestText.toLowerCase()) ||
          description.toLowerCase().includes(requestText.toLowerCase())) {
        contentItemIds.push(id)
      }
    }
  })

  if (contentItemIds.length > 0) {
    renderCardsByIds(contentItemIds)
  } else {
    renderNothingFounded()
  }
}

function renderNothingFounded() {
  container.innerHTML = 'Ничего не найдено :('
}

function renderCardsByIds(ids) {
  ids = [...new Set(ids)]
  ids.forEach((id) => {
    content.forEach((item) => {
      if (item.id === id) {
        createCards(item)
      }
    })
  })
}

function createCards(contentDataItem) {
  let { title, tag, image, url } = contentDataItem

  const cardLink = document.createElement('a')
  cardLink.href = url

  const card = document.createElement('div')
  card.classList.add('O_Articles_Card')

  const cardImage = document.createElement('img')
  cardImage.classList.add('A_Image_Article')
  cardImage.src = image
  cardImage.alt = title

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('W_Article_Info')

  const cardDetails = document.createElement('div')
  cardDetails.classList.add('M_Article_Details')

  const cardTitle = document.createElement('h3')
  cardTitle.classList.add('A_Title_Article')
  cardTitle.innerText = title

  const cardTag = document.createElement('span')
  cardTag.classList.add('A_Cuisine_Tag')
  cardTag.innerText = tag

  cardDetails.appendChild(cardTitle)
  cardDetails.appendChild(cardTag)
  cardInfo.appendChild(cardDetails)
  card.appendChild(cardImage)
  card.appendChild(cardInfo)
  cardLink.appendChild(card)

  container.appendChild(cardLink)
}
