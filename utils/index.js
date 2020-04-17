export const setInitialColor = (cases, originalColor, index) => {
  const lastCase = cases[index]
  const colorIndex = Math.floor(lastCase.totalCase / 30)
  return originalColor[colorIndex]
}

export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

export const countTotalCase = cases => {
  const totalCases = cases
    .map(cse => sumDataPerCase(cse))
    .reduce((prevVal, curVal) => prevVal + curVal)
  return totalCases
}

export const sumDataPerCase = data => {
  const { ODP, PDP, Positive } = data
  return ODP + PDP + Positive
}

const hoverFeature = e => {
  highlightFeature(e)
  setProperties(e.target.feature.properties.name)
}

const hoverOutFeature = e => {
  e.target.setStyle({
    weight: 2,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.4
  })
}
