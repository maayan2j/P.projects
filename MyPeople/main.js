
/*******************************************AJAX & Intro to APIs************************************************/

/*******************************************Exercise1***********************************************************/
/* const fetch= function(queryValue){
    $.ajax({
        method:"GET",
        url:`https://www.googleapis.com/books/v1/volumes?q="isbn":${queryValue}`,
        success: function(data){
            console.log(`${data.items[0].volumeInfo.title} ${data.items[0].volumeInfo.authors[0]}`)
        },
        error:function(xhr,text,error){
            console.log(text)
        }
         
    })
    
    } 

    fetch(1440633908) */
/*******************************************Exercise2***********************************************************/
/* const fetch= function(queryType,queryValue){
$.ajax({
    method:"GET",
    url:`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function(data){
        console.log(`${data.items[0].volumeInfo.title} ${data.items[0].volumeInfo.authors[0]}`)
    },
    error:function(xhr,text,error){
        console.log(text)
    }
     
})

} 
fetch("isbn", 9789814561778)
fetch("title", "How to Win Friends and Influence People")
 fetch("title", "The Wise Man's Fears")  */
/*******************************************Exercise3***********************************************************/

/* const fetch= function(queryType,queryValue){
   $.ajax({
       method:"GET",
       url:`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
       success: function(data){
          data.items.forEach(i => {console.log(`${i.volumeInfo.title} ${i.volumeInfo.authors}  ${i.volumeInfo.industryIdentifiers[0].identifier}`)} ) 
   
          },
       
       error:function(xhr,text,error){
           console.log(text)
       }
        
   })
}
   
fetch("isbn", 9789814561778)
fetch("title", "How to Win Friends and Influence People")  */
/*******************************************Exercise4***********************************************************/

/* const fetch = function () {
    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=g54v2nv2iOPfmR0lf4mAdFMbBITLEzAY&limit=5`,
        success: function (data) {
            const img = $(`<iframe src = "${data.data[0].embed_url}">`)
            $('body').append(img)

        },

        error: function (xhr, text, error) {
            console.log(text)
        }

    })
}

fetch() */
/*******************************************Exercise5***********************************************************/
/* const input = $(`<div class="input"><input><button>Search</button></div><br><br>`)

$('body').append(input)

 $('button').on('click',function(){
     
            

const fetch = function () {
    $.ajax({
        method: "GET",
        url: `http://api.giphy.com/v1/gifs/search?q=${$('input').val()}&api_key=g54v2nv2iOPfmR0lf4mAdFMbBITLEzAY&limit=5`,
        success: function (data) {
           const img = $(`<div class="ss"><iframe src = "${data.data[0].embed_url}"></div>`)
            $('.ss').empty()        
            $(".input").append(img)
        },

        error: function (xhr, text, error) {
            console.log(text)
        }

    })
}

fetch()

}) */
/*******************************************My People - Handlebars & API Tiny Project***********************************************************/


const fetch = function(){
$.ajax({
    url: 'https://randomuser.me/api/?results=10',
    dataType: 'json',
    success: function (data) {
     
     let names=data.results
     
      render(names)
      $('.results').hover( function(){
        $(this).css('background-color',"rgb(26, 188, 156");
      },function(){
          $(this).css('background-color','')
      })
        
    },
    error: function (xhr, text, error) {
        console.log(text)
    }
});

}

const source = $('#store-template').html()
const template = Handlebars.compile(source)
const render = function (names) {
    let newHTML = template({data:names})
    $('.view').append(newHTML)
}

fetch()

