export const getWordByAmmouth = (amm) => {
    // console.log(amm)
    if (amm % 10 === 1) { return `${amm} серии` }
    return `${amm} сериях`
  }