import $ from 'jquery'

$.fn.extend({
  novaFuncao() {
    console.log('Chamou nova função')
  }
})

$('#input').novaFuncao()