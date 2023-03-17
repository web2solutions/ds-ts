function eIntersecao (grupo: Set<number>, subGrupo: Set<number>) {
  for (const numero of subGrupo) { 
    if (!grupo.has(numero)) { 
      return false
    }
  } 
  return true
}

const grupo1: Set<number> = new Set([1, 2, 3, 4, 5, 6])
const grupo2: Set<number> = new Set([3, 4, 5])

console.log(eIntersecao(grupo1, grupo2)) // true