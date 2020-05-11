
class Render {
    constructor(){

    }
renderPlayers(players){
    const source = $('#players-template').html()
    const template = Handlebars.compile(source)
    const newHTML = template({players:players})
    $('.result').empty()
    $('.result').append(newHTML)
  
}

}

const render= new Render