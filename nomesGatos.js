var _gatos = [
  { 
    nome: 'galinda',
    pelo: 'tiramissu',
   
  },
  {
    nome: 'bibi',
    pelo: 'vaquinha',
    
  },
  {
    nome: 'fumaça',
    pelo: 'albino',
    
  },
  {
    nome: 'Fantasminha',
    pelo: 'gordinha',
   
  }
]
function _retornaNomes (parametro) {
  var listaNomes = []
  for (var i = 0; i < parametro.length; i++){
  listaNomes[i] = parametro[i].nome
  }
  return listaNomes
}
console.log(_retornaNomes(_gatos))