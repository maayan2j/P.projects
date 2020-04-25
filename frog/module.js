////module

const LaFrog = function () {
    /* const body = [1, 2, 3, 4, 5] */
    let frogs = [1]
    let level = [1]
    let numberOfFrogs = 1
    let numberOfLevel = 1
   /*  let getBody = () => body */
    let getFrogs = () => frogs
    let getLevel = () => numberOfLevel
    let addFrogs = function(){
       for (let i=0 ; i<=(numberOfLevel); i++){
           frogs.push(1)  
        } numberOfFrogs=numberOfLevel
    } /* () => { frogs.push(numberOfLevel += 1), numberOfFrogs += 1 } */
    let addLevel = () => { level.push(numberOfLevel + 1), numberOfLevel += 1 }
    let removeFrog = () => { frogs.splice((numberOfFrogs-1),1)/* , numberOfFrogs -= 1 */ }
    let removeLevel = () => { level.splice(numberOfLevel - 1, 1), numberOfLevel -= 1 }
    return {
        /*   getBody, */
        
        getFrogs,
        getLevel,
        addFrogs,
        addLevel,
        removeFrog,
        removeLevel
    }
}
const laFrog = LaFrog() 
console.log(laFrog.getFrogs())

/////render 
const Render = function () {

    /*   const renderBody = function () {
          laFrog.getBody().forEach(b => {
              $('.container').append($(`<div class=${b}><div>`))
              $(`.${b}`).css('gridarea',`${b}`)
            
  
  
          });
          $('.3').text(` Frogs left`)
          $('.5').text(`Level `)
          $('.4').text(`start`)
      } */
    const renderClearInterval = function () {
        $('.meadle').empty()
        $('.meadle').append('<p id="m"></p>')
        $('#m').text(`oops no more frogs for you!!`)
    }
    const timer = function () {
        $('#top').text(`${count} secs left`)
        $('#top').css({ color: "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")" })
    }
    const renderFrogs = function () {
        $('.meadle').empty()
        laFrog.getFrogs().forEach(f => {
            $('.meadle').append($(`<i class="fas fa-frog" id=${f+=1}><i>`))

            let width = Math.floor(Math.random() * 10 * 10) + 10
            const meadleHight = $('.meadle').height()
            const meadleWidth = $('.meadle').width()
            let maxTop = meadleHight - width
            let maxLeft = meadleWidth - width
            let left = Math.floor(Math.random() * maxLeft + 1)
            let htht = Math.floor(Math.random() * maxTop + 1)
            $('.meadle').css({ position: "relative" })
            $(`i`).css({ fontSize: width, fontSize: width, left: left, top: htht, position: 'absolute' })
            $(`i`).css({ color: "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")" })
            $('.Frogsleft').text(`${laFrog.getFrogs().length}Frogs left`)
            $('.level').text(` Level${laFrog.getLevel()} `)
            $('.start').text(`cath the frogs!`)

        })

       /*  $('.Frogsleft').text(`${laFrog.getFrogs().length}Frogs left`)
        $('.level').text(` Level${laFrog.getLevel()} `)
        $('.start').text(`cath the frogs!`) */
    }
    return {
        /*     renderBody, */
        renderFrogs,
        renderClearInterval,
        timer,
    }

}

const render = Render()
/* render.renderBody(laFrog.getBody()) */
/* render.renderFrogs(laFrog.getFrogs()) */


/////controler
let count = 5;
$('.center').on('click', function () {

    
   /*  let jo = false */
   
    let counter = setInterval(timer, 1000); //1000 will  run it every 1 second
    function timer() {
        count = count - 1;
        if (count < 0) {
              clearInterval(counter);
             render.renderClearInterval() 
            return;
        } else if (laFrog.getFrogs().length===0) {
            laFrog.addLevel()
            console.log(laFrog.getLevel())
            laFrog.addFrogs()
            count=5
            console.log(laFrog.getFrogs())
            render.renderFrogs(laFrog.getFrogs())
            /* clearInterval(counter); */
        }
        render.timer()
        /*  $('#top').text(`${count} secs left`)
         $('#top').css({color: "rgba(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) +")"})
        */
    }
    render.renderFrogs(laFrog.getFrogs())
    
})


/* console.log(laFrog.getFrogs()) */
$('.meadle').on('click','#2',function(){
/* $(this).closet('.meadle').find(this).id */

laFrog.removeFrog()

render.renderFrogs()
})


