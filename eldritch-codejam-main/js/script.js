const brown1 = '../assets/MythicCards/brown/brown1.png';
const brown2 = '../assets/MythicCards/brown/brown2.png';
const brown3 = '../assets/MythicCards/brown/brown3.png';
const brown4 = '../assets/MythicCards/brown/brown4.png';
const brown5 = '../assets/MythicCards/brown/brown5.png';
const brown6sh = '../assets/MythicCards/brown/brown6sh.png';
const brown7sh = '../assets/MythicCards/brown/brown7sh.png';
const brown8sh = '../assets/MythicCards/brown/brown8sh.png';
const brown9sh = '../assets/MythicCards/brown/brown9sh.png';
const brown10sh = '../assets/MythicCards/brown/brown10sh.png';
const brown11s = '../assets/MythicCards/brown/brown11s.png';
const brown12s = '../assets/MythicCards/brown/brown12s.png';
const brown13s = '../assets/MythicCards/brown/brown13s.png';
const brown14s = '../assets/MythicCards/brown/brown14s.png';
const brown15 = '../assets/MythicCards/brown/brown15.png';
const brown16 = '../assets/MythicCards/brown/brown16.png';
const brown17 = '../assets/MythicCards/brown/brown17.png';
const brown18 = '../assets/MythicCards/brown/brown18.png';
const brown19 = '../assets/MythicCards/brown/brown19.png';
const brown20 = '../assets/MythicCards/brown/brown20.png';
const brown21s = '../assets/MythicCards/brown/brown21s.png';

const green1s = '../assets/MythicCards/green/green1s.png';
const green2sh = '../assets/MythicCards/green/green2sh.png';
const green3sh = '../assets/MythicCards/green/green3sh.png';
const green4sh = '../assets/MythicCards/green/green4sh.png';
const green5sh = '../assets/MythicCards/green/green5sh.png';
const green6sh = '../assets/MythicCards/green/green6sh.png';
const green7 = '../assets/MythicCards/green/green7.png';
const green8 = '../assets/MythicCards/green/green8.png';
const green9 = '../assets/MythicCards/green/green9.png';
const green10 = '../assets/MythicCards/green/green10.png';
const green11 = '../assets/MythicCards/green/green11.png';
const green12s = '../assets/MythicCards/green/green12s.png';
const green13 = '../assets/MythicCards/green/green13.png';
const green14 = '../assets/MythicCards/green/green14.png';
const green15 = '../assets/MythicCards/green/green15.png';
const green16s = '../assets/MythicCards/green/green16s.png';
const green17s = '../assets/MythicCards/green/green17s.png';
const green18s = '../assets/MythicCards/green/green18s.png';

const blue1sh = '../assets/MythicCards/blue/blue1sh.png';
const blue2sh = '../assets/MythicCards/blue/blue2sh.png';
const blue3s = '../assets/MythicCards/blue/blue3s.png';
const blue4s = '../assets/MythicCards/blue/blue4s.png';
const blue5s = '../assets/MythicCards/blue/blue5s.png';
const blue6sh = '../assets/MythicCards/blue/blue6sh.png';
const blue7 =  '../assets/MythicCards/blue/blue7.png';
const blue8sh =  '../assets/MythicCards/blue/blue8sh.png';
const blue9 = '../assets/MythicCards/blue/blue9.png';
const blue10s = '../assets/MythicCards/blue/blue10s.png';
const blue11 = '../assets/MythicCards/blue/blue11.png';
const blue12 = '../assets/MythicCards/blue/blue12.png';
console.log(`Здравствуйте! Большая просьба при оценке работы указывайте свой дискорд для обратной связи, спасибо 😉
Чтобы замешать колоду с выбранными настройками, необходимо нажать MIX`)
let ancientsSelect = 0
let difficultsSelect = 0


const allCards = [
            {green: [{
                    standart: [green7, green8, green9, green10, green11, green13, green14, green15]
                    }, 
                    {
                    snow: [green1s, green12s, green16s, green17s, green18s]
                    },
                    {
                    tentacles: [green2sh, green3sh, green4sh, green5sh, green6sh]}]},

            {brown: [{
                    standart: [brown1, brown2, brown3, brown4, brown5, brown15, brown16, brown17, brown18, brown19, brown20]
                    }, 
                    {
                    snow: [brown11s, brown12s, brown13s, brown14s, brown21s]
                    },
                    {
                    tentacles: [brown6sh, brown7sh, brown8sh, brown9sh, brown10sh]}]},

            {blue: [{
                    standart: [blue7, blue9, blue11, blue12]
                    }, 
                    {
                    snow: [blue3s, blue4s, blue5s, blue10s]
                    },
                    {
                    tentacles: [blue1sh, blue2sh, blue6sh, blue8sh]}]
        }]

function mixin(array) {
    return array.sort(() => Math.random() - 0.5);
  }

let green = 0
let brown = 0
let blue = 0


let fullDeca = []
let FirstStageCount = 0
let SecondStageCount = 0
let ThirdStageCount = 0


function decaLogic (){
    let greenCardsdecaLogic = []
    let brownCardsdecaLogic = []
    let blueCardsdecaLogic = []
    if (ancientsSelect === 1){
        if (difficultsSelect === 1){
            /* Выбираем нужные карты исходя из сложности:
            Очень легкий уровень сложности: из набора берутся все карты 
            со снежинками, если карт не хватает то добираются обычные карты
            */
            greenCardsdecaLogic = mixin(allCards[0].green[1].snow) /* берем все зеленые карты со снежинками */

            let brownSnow = (allCards[1].brown[1].snow) /* берем все коричневые  карты со снежинками, но их не хватает, добираем обычными, предварительно миксуем массив стандартных карт и добираем нужное колличество */
            let brownStandart = mixin(allCards[1].brown[0].standart)
            brownStandart = brownStandart.slice(1,5)
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow])

            // console.log(brownCardsdecaLogic)
            blueCardsdecaLogic = mixin(allCards[2].blue[1].snow)
            console.log(typeof blueCardsdecaLogic)
        }

        if (difficultsSelect === 2){
            /* Выбираем нужные карты исходя из сложности:
            Легкий уровень сложности: из набора убираются карты с щупальцами
            */
            let greenStandart = allCards[0].green[0].standart
            let greenSnow = allCards[0].green[1].snow
            greenCardsdecaLogic = mixin([...greenStandart, ...greenSnow])

            let brownStandart = allCards[1].brown[0].standart
            let brownSnow = allCards[1].brown[1].snow
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow])

            let blueStandart = allCards[2].blue[0].standart
            let blueSnow = allCards[2].blue[1].snow
            blueCardsdecaLogic = mixin([...blueStandart, ...blueSnow])

            // console.log(greenCardsdecaLogic)
            // console.log(brownCardsdecaLogic)
            // console.log(blueCardsdecaLogic)
        }

        if (difficultsSelect === 3){
            /* Средний уровень сложности: набор остается нетронутым
            */
            let greenStandart = allCards[0].green[0].standart
            let greenSnow = allCards[0].green[1].snow
            let greenTentacles = allCards[0].green[2].tentacles
            greenCardsdecaLogic = mixin([...greenStandart, ...greenSnow, ...greenTentacles])
            // console.log(greenCardsdecaLogic)


            let brownStandart = allCards[1].brown[0].standart
            let brownSnow = allCards[1].brown[1].snow
            let brownTentacles = allCards[1].brown[2].tentacles
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow, ...brownTentacles])
            // console.log(brownCardsdecaLogic)


            let blueStandart = allCards[2].blue[0].standart
            let blueSnow = allCards[2].blue[1].snow
            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin([...blueStandart, ...blueSnow, ...blueTentacles])
            // console.log(blueCardsdecaLogic)
            
        }
        if (difficultsSelect === 4){
            /* Высокий уровень сложности: из набора убираются карты 
            со снежинками
            */
            let greenStandart = allCards[0].green[0].standart
            let greenTentacles = allCards[0].green[2].tentacles
            greenCardsdecaLogic = mixin([...greenStandart, ...greenTentacles])
            // console.log(greenCardsdecaLogic)


            let brownStandart = allCards[1].brown[0].standart
            let brownTentacles = allCards[1].brown[2].tentacles
            brownCardsdecaLogic = mixin([...brownStandart, ...brownTentacles])
            // console.log(brownCardsdecaLogic)


            let blueStandart = allCards[2].blue[0].standart
            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin([...blueStandart, ...blueTentacles])
            // console.log(blueCardsdecaLogic)

            
        }
        if (difficultsSelect === 5){
            /* Очень высокий уровень сложности: из набора берутся все карты 
            со щупальцами, если карт не хватает то добираются обычные карты
            */
            let greenTentacles = allCards[0].green[2].tentacles  /* берем все карты с щупальцами */
            greenCardsdecaLogic = mixin(greenTentacles)
            // console.log(greenCardsdecaLogic)

            let brownTentacles = allCards[1].brown[2].tentacles  /* берем все карты с щупальцами, но их не хватае, добираем обычные, предварительно миксуем  */
            let brownStandart = mixin((allCards[1].brown[0].standart).slice(0, 4))
            brownCardsdecaLogic = mixin([...brownStandart, ...brownTentacles])
            // console.log(brownTentacles)
            
            // console.log(brownCardsdecaLogic)

            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin(blueTentacles)
            // console.log(blueTentacles) 
        }
    }
    // ВТОРОЙ ДРЕВНИЙ
    if (ancientsSelect === 2){
        if (difficultsSelect === 1){
            /* Выбираем нужные карты исходя из сложности:
            Очень легкий уровень сложности: из набора берутся все карты 
            со снежинками, если карт не хватает то добираются обычные карты
            */

            greenCardsdecaLogic = mixin(allCards[0].green[1].snow) /* берем все зеленые карты со снежинками */

            let brownSnow = (allCards[1].brown[1].snow) /* берем все коричневые  карты со снежинками, но их не хватает, добираем обычными, предварительно миксуем массив стандартных карт и добираем нужное колличество */
            let brownStandart = mixin(allCards[1].brown[0].standart)
            brownStandart = brownStandart.slice(1,5)
            console.log(greenCardsdecaLogic)
            console.log(brownStandart)
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow])
            
            // console.log(brownCardsdecaLogic)
            blueCardsdecaLogic = mixin(allCards[2].blue[1].snow)
            console.log(typeof blueCardsdecaLogic)
            
        }

        if (difficultsSelect === 2){
            /* Выбираем нужные карты исходя из сложности:
            Легкий уровень сложности: из набора убираются карты с щупальцами
            */
            let greenStandart = allCards[0].green[0].standart
            let greenSnow = allCards[0].green[1].snow
            greenCardsdecaLogic = mixin([...greenStandart, ...greenSnow])


            let brownStandart = allCards[1].brown[0].standart
            let brownSnow = allCards[1].brown[1].snow
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow])


            let blueStandart = allCards[2].blue[0].standart
            let blueSnow = allCards[2].blue[1].snow
            blueCardsdecaLogic = mixin([...blueStandart, ...blueSnow])

            // console.log(greenCardsdecaLogic)
            // console.log(brownCardsdecaLogic)
            // console.log(blueCardsdecaLogic)
        }

        if (difficultsSelect === 3){
            /* Средний уровень сложности: набор остается нетронутым
            */
            let greenStandart = allCards[0].green[0].standart
            let greenSnow = allCards[0].green[1].snow
            let greenTentacles = allCards[0].green[2].tentacles
            greenCardsdecaLogic = mixin([...greenStandart, ...greenSnow, ...greenTentacles])
            // console.log(greenCardsdecaLogic)


            let brownStandart = allCards[1].brown[0].standart
            let brownSnow = allCards[1].brown[1].snow
            let brownTentacles = allCards[1].brown[2].tentacles
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow, ...brownTentacles])
            // console.log(brownCardsdecaLogic)


            let blueStandart = allCards[2].blue[0].standart
            let blueSnow = allCards[2].blue[1].snow
            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin([...blueStandart, ...blueSnow, ...blueTentacles])
            // console.log(blueCardsdecaLogic)
            
        }
        if (difficultsSelect === 4){
            /* Высокий уровень сложности: из набора убираются карты 
            со снежинками
            */
            let greenStandart = allCards[0].green[0].standart
            let greenTentacles = allCards[0].green[2].tentacles
            greenCardsdecaLogic = mixin([...greenStandart, ...greenTentacles])
            // console.log(greenCardsdecaLogic)


            let brownStandart = allCards[1].brown[0].standart
            let brownTentacles = allCards[1].brown[2].tentacles
            brownCardsdecaLogic = mixin([...brownStandart, ...brownTentacles])
            // console.log(brownCardsdecaLogic)


            let blueStandart = allCards[2].blue[0].standart
            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin([...blueStandart, ...blueTentacles])
            // console.log(blueCardsdecaLogic)

            
        }
        if (difficultsSelect === 5){
            /* Очень высокий уровень сложности: из набора берутся все карты 
            с щупальцами, если карт не хватает то добираются обычные карты
            */
            let greenTentacles = allCards[0].green[2].tentacles  /* берем все карты с щупальцами */
            greenCardsdecaLogic = mixin(greenTentacles)
            // console.log(greenCardsdecaLogic)

            let brownTentacles = allCards[1].brown[2].tentacles  /* берем все карты с щупальцами, но их не хватае, добираем обычные, предварительно миксуем  */
            let brownStandart = mixin((allCards[1].brown[0].standart).slice(0, 4))
            brownCardsdecaLogic = mixin([...brownStandart, ...brownTentacles])
            // console.log(brownTentacles)
            
            // console.log(brownCardsdecaLogic)

            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin(blueTentacles)
            // console.log(blueTentacles)
        }
        
    }
    if (ancientsSelect === 3){
        // ТРЕТИЙ ДРЕВНИЙ
        if (difficultsSelect === 1){
            /* Выбираем нужные карты исходя из сложности:
            Очень легкий уровень сложности: из набора берутся все карты 
            со снежинками, если карт не хватает то добираются обычные карты
            */
            greenCardsdecaLogic = mixin(allCards[0].green[1].snow) /* берем все зеленые карты со снежинками */

            let brownSnow = (allCards[1].brown[1].snow) /* берем все коричневые  карты со снежинками, но их не хватает, добираем обычными, предварительно миксуем массив стандартных карт и добираем нужное колличество */
            let brownStandart = mixin(allCards[1].brown[0].standart)
            brownStandart = brownStandart.slice(1,5)
            console.log(greenCardsdecaLogic)
            console.log(brownStandart)
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow])
            console.log(brownCardsdecaLogic)
            
            blueCardsdecaLogic = mixin(allCards[2].blue[1].snow)
            console.log(blueCardsdecaLogic)
        }

        if (difficultsSelect === 2){
            /* Выбираем нужные карты исходя из сложности:
            Легкий уровень сложности: из набора убираются карты с щупальцами
            */
            let greenStandart = allCards[0].green[0].standart
            let greenSnow = allCards[0].green[1].snow
            greenCardsdecaLogic = mixin([...greenStandart, ...greenSnow])
            let brownStandart = allCards[1].brown[0].standart
            let brownSnow = allCards[1].brown[1].snow
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow])
            let blueStandart = allCards[2].blue[0].standart
            let blueSnow = allCards[2].blue[1].snow
            blueCardsdecaLogic = mixin([...blueStandart, ...blueSnow])
            // console.log(greenCardsdecaLogic)
            // console.log(brownCardsdecaLogic)
            // console.log(blueCardsdecaLogic)
        }

        if (difficultsSelect === 3){
            /* Средний уровень сложности: набор остается нетронутым
            */
            let greenStandart = allCards[0].green[0].standart
            let greenSnow = allCards[0].green[1].snow
            let greenTentacles = allCards[0].green[2].tentacles
            greenCardsdecaLogic = mixin([...greenStandart, ...greenSnow, ...greenTentacles])
            // console.log(greenCardsdecaLogic)
            let brownStandart = allCards[1].brown[0].standart
            let brownSnow = allCards[1].brown[1].snow
            let brownTentacles = allCards[1].brown[2].tentacles
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow, ...brownTentacles])
            // console.log(brownCardsdecaLogic)
            let blueStandart = allCards[2].blue[0].standart
            let blueSnow = allCards[2].blue[1].snow
            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin([...blueStandart, ...blueSnow, ...blueTentacles])
            // console.log(blueCardsdecaLogic)
            
        }
        if (difficultsSelect === 4){
            /* Высокий уровень сложности: из набора убираются карты 
            со снежинками
            */
            let greenStandart = allCards[0].green[0].standart
            let greenTentacles = allCards[0].green[2].tentacles
            greenCardsdecaLogic = mixin([...greenStandart, ...greenTentacles])
            // console.log(greenCardsdecaLogic)
            let brownStandart = allCards[1].brown[0].standart
            let brownTentacles = allCards[1].brown[2].tentacles
            brownCardsdecaLogic = mixin([...brownStandart, ...brownTentacles])
            // console.log(brownCardsdecaLogic)
            let blueStandart = allCards[2].blue[0].standart
            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin([...blueStandart, ...blueTentacles])
            // console.log(blueCardsdecaLogic)

        }
        if (difficultsSelect === 5){
            /* Очень высокий уровень сложности: из набора берутся все карты 
            со щупальцами, если карт не хватает то добираются обычные карты
            */
            let greenTentacles = allCards[0].green[2].tentacles  /* берем все карты с щупальцами */
            greenCardsdecaLogic = mixin(greenTentacles)
            // console.log(greenCardsdecaLogic)

            let brownTentacles = allCards[1].brown[2].tentacles  /* берем все карты с щупальцами, но их не хватае, добираем обычные, предварительно миксуем  */
            let brownStandart = mixin((allCards[1].brown[0].standart).slice(0, 4))
            brownCardsdecaLogic = mixin([...brownStandart, ...brownTentacles])
            // console.log(brownTentacles)
            
            // console.log(brownCardsdecaLogic)

            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin(blueTentacles)
            // console.log(blueTentacles)
        }
    }
    if (ancientsSelect === 4){
           // ЧЕТВЕРТЫЙ ДРЕВНИЙ
        if (difficultsSelect === 1){
            /* Выбираем нужные карты исходя из сложности:
            Очень легкий уровень сложности: из набора берутся все карты 
            со снежинками, если карт не хватает то добираются обычные карты
            */
            let greenSnow = mixin(allCards[0].green[1].snow) /* берем все зеленые карты со снежинками, но их не хватает */
            let greenStandart = (mixin(allCards[0].green[0].standart)).slice(1,2) /* Добираем стандарты, предварительно замиксив их, чтобы карта которую мы достанем из набора была рандомной */
            greenCardsdecaLogic = mixin([...greenStandart, ...greenSnow])

            let brownSnow = (allCards[1].brown[1].snow)  /* берем все коричневые  карты со снежинками, но их не хватает, добираем обычными, предварительно миксуем массив стандартных карт и добираем нужное колличество */
            let brownStandart = (mixin(allCards[1].brown[0].standart)).slice(1,4)
           
            // console.log(greenCardsdecaLogic)
            // console.log(brownStandart)
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow])
            // console.log(brownCardsdecaLogic)
            
            blueCardsdecaLogic = mixin(allCards[2].blue[1].snow)
            // console.log(blueCardsdecaLogic)
        }

        if (difficultsSelect === 2){
            /* Выбираем нужные карты исходя из сложности:
            Легкий уровень сложности: из набора убираются карты с щупальцами
            */
            let greenStandart = allCards[0].green[0].standart
            let greenSnow = allCards[0].green[1].snow
            greenCardsdecaLogic = mixin([...greenStandart, ...greenSnow])
            let brownStandart = allCards[1].brown[0].standart
            let brownSnow = allCards[1].brown[1].snow
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow])
            let blueStandart = allCards[2].blue[0].standart
            let blueSnow = allCards[2].blue[1].snow
            blueCardsdecaLogic = mixin([...blueStandart, ...blueSnow])
            // console.log(greenCardsdecaLogic)
            // console.log(brownCardsdecaLogic)
            // console.log(blueCardsdecaLogic)
        }
        
        if (difficultsSelect === 3){
            /* Средний уровень сложности: набор остается нетронутым
            */
            let greenStandart = allCards[0].green[0].standart
            let greenSnow = allCards[0].green[1].snow
            let greenTentacles = allCards[0].green[2].tentacles
            greenCardsdecaLogic = mixin([...greenStandart, ...greenSnow, ...greenTentacles])
            // console.log(greenCardsdecaLogic)
            let brownStandart = allCards[1].brown[0].standart
            let brownSnow = allCards[1].brown[1].snow
            let brownTentacles = allCards[1].brown[2].tentacles
            brownCardsdecaLogic = mixin([...brownStandart, ...brownSnow, ...brownTentacles])
            // console.log(brownCardsdecaLogic)
            let blueStandart = allCards[2].blue[0].standart
            let blueSnow = allCards[2].blue[1].snow
            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin([...blueStandart, ...blueSnow, ...blueTentacles])
            // console.log(blueCardsdecaLogic)
            
        }
        if (difficultsSelect === 4){
            /* Высокий уровень сложности: из набора убираются карты 
            со снежинками
            */
            let greenStandart = allCards[0].green[0].standart
            let greenTentacles = allCards[0].green[2].tentacles
            greenCardsdecaLogic = mixin([...greenStandart, ...greenTentacles])
            // console.log(greenCardsdecaLogic)
            let brownStandart = allCards[1].brown[0].standart
            let brownTentacles = allCards[1].brown[2].tentacles
            brownCardsdecaLogic = mixin([...brownStandart, ...brownTentacles])
            // console.log(brownCardsdecaLogic)
            let blueStandart = allCards[2].blue[0].standart
            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin([...blueStandart, ...blueTentacles])
            // console.log(blueCardsdecaLogic)

        }
        if (difficultsSelect === 5){
            /* Очень высокий уровень сложности: из набора берутся все карты 
            со щупальцами, если карт не хватает то добираются обычные карты
            */
           
            let greenTentacles = allCards[0].green[2].tentacles  /* берем все карты с щупальцами, но их не хватает, добираем обычные */
            let greenStandart = (mixin((allCards[0].green[0].standart))).slice(1,2)
            greenCardsdecaLogic = mixin([...greenTentacles, ...greenStandart]) 
            // console.log(greenCardsdecaLogic)

            let brownTentacles = allCards[1].brown[2].tentacles  /* берем все карты с щупальцами, но их не хватает, добираем обычные, предварительно миксуем  */
            let brownStandart = mixin((allCards[1].brown[0].standart).slice(0, 3))
            brownCardsdecaLogic = mixin([...brownStandart, ...brownTentacles])
            // console.log(brownCardsdecaLogic)
            
            // console.log(brownCardsdecaLogic)

            let blueTentacles = allCards[2].blue[2].tentacles
            blueCardsdecaLogic = mixin(blueTentacles)
            // console.log(blueTentacles)
        } 
    }
    console.log(`Отработала функция decaLogic - мы получили массивы карт по цветам, отталкиваяся от выбранного 
    древнего и сложности. Древний учитывается, поскольку в некоторых пунктах не хватает 
    нужных карт и нужно добирать обычные. На данном этапе карты миксуются и предварительно обрезаются 
    под нужное колличество(это касается коллод, где не хватало особенных карт и добирались обычные.
    Следующим этапом массив ниже, будет обрезаться под нужное колличество карт в коллоде ↓↓↓↓↓↓`)
    console.log([greenCardsdecaLogic, brownCardsdecaLogic, blueCardsdecaLogic])
    return  [greenCardsdecaLogic, brownCardsdecaLogic, blueCardsdecaLogic]
};

function sliceDeca (arr) {
    let greenCardSliceDeca = arr[0].slice()
    let brownCardsSliceDeca = arr[1].slice()
    let blueCardsSliceDeca = arr[2].slice()
    if(ancientsSelect === 1){
        green = 5
        brown = 9
        blue = 2
    }
    if(ancientsSelect === 2){
        green = 4
        brown = 9
        blue = 2
    }
    if(ancientsSelect === 3){
        green = 5
        brown = 9
        blue = 2
    }
    if(ancientsSelect === 4){
        green = 6
        brown = 8
        blue = 2
    }
    if (greenCardSliceDeca.length > green) {
        greenCardSliceDeca = greenCardSliceDeca.slice(0, green) 
    }
    if (brownCardsSliceDeca.length > brown) {
        brownCardsSliceDeca = brownCardsSliceDeca.slice(0, brown)
    }
    if (blueCardsSliceDeca.length > blue) {
        blueCardsSliceDeca = blueCardsSliceDeca.slice(0, blue)
    }
    console.log(`Отработала функция sliceDeca. Массивы обрезаны под нужное колличество карт ↓↓↓↓↓↓`)
    console.log([greenCardSliceDeca, brownCardsSliceDeca, blueCardsSliceDeca])
    return [greenCardSliceDeca, brownCardsSliceDeca, blueCardsSliceDeca]
}

const dificultList = document.querySelector('.dificult-list')
const ancientsContainer = document.querySelector('.ancients-container')
const azathoth = document.querySelector('.azathoth')
const cthulthu = document.querySelector('.cthulthu')
const iogSothoth = document.querySelector('.iogSothoth')
const shubNiggurath = document.querySelector('.shubNiggurath')

const mixDeca = document.querySelector('.mixin-deca')
const pushCard = document.querySelector('.push-card')

const dotGreen1 = document.querySelector('.dot-green1')
const dotBrown1 = document.querySelector('.dot-brown1')
const dotBlue1 = document.querySelector('.dot-blue1')

const dotGreen2 = document.querySelector('.dot-green2')
const dotBrown2 = document.querySelector('.dot-brown2')
const dotBlue2 = document.querySelector('.dot-blue2')

const dotGreen3 = document.querySelector('.dot-green3')
const dotBrown3 = document.querySelector('.dot-brown3')
const dotBlue3 = document.querySelector('.dot-blue3')


function getRandomArrayElement(arr){
    let index = Math.floor(Math.random()*arr.length)
    return index
 }

// Мешаем карты под уровни
function mixingCardsforStage(arr){
    curCart.style.backgroundImage = ``
    let firstStageGreen = [] 
    let firstStageBrown = [] 
    let firstStageBlue = []

    let secondStageGreen = [] 
    let secondStageBrown = [] 
    let secondStageBlue = [] 

    let thirdStageGreen = [] 
    let thirdStageBrown = [] 
    let thirdStageBlue = []

    let greenCardsmixingCards = arr[0].slice()
    let brownCardsmixingCards = arr[1].slice()
    let blueCardsmixingCards = arr[2].slice()
    let ancients = []
    let ancients1 = [{
        'first-stage': [1, 2, 1],
        'second-stage': [2, 3, 1],
        'third-stage': [2, 4, 0]
    }]
    let ancients2 = [{
        'first-stage': [0, 2, 2],
        'second-stage': [1, 3, 0],
        'third-stage': [3, 4, 0]
    }]
    let ancients3 = [{
        'first-stage': [0, 2, 1],
        'second-stage': [2, 3, 1],
        'third-stage': [3, 4, 0]
    }]
    let ancients4 = [{
        'first-stage': [1, 2, 1],
        'second-stage': [3, 2, 1],
        'third-stage': [2, 4, 0]
    }]
    if(ancientsSelect === 1) {
        ancients = ancients1
    }
    if(ancientsSelect === 2) {
        ancients = ancients2
        

    }
    if(ancientsSelect === 3) {
        ancients = ancients3
        
    }
    if(ancientsSelect === 4) {
        ancients = ancients4
    }
    dotGreen1.textContent = ancients[0]['first-stage'][0]
    dotBrown1.textContent = ancients[0]['first-stage'][1]
    dotBlue1.textContent = ancients[0]['first-stage'][2]
    dotGreen2.textContent = ancients[0]['second-stage'][0]
    dotBrown2.textContent = ancients[0]['second-stage'][1]
    dotBlue2.textContent = ancients[0]['second-stage'][2]
    dotGreen3.textContent = ancients[0]['third-stage'][0]
    dotBrown3.textContent = ancients[0]['third-stage'][1]
    dotBlue3.textContent = ancients[0]['third-stage'][2]

    // Первая стадия
    for (let i = 0; i < ancients[0]["first-stage"][0]; i++){
        let index = getRandomArrayElement(greenCardsmixingCards)
        firstStageGreen.push(greenCardsmixingCards[index])
        greenCardsmixingCards.splice(index, 1)
        // console.log(greenCardsmixingCards)
        // console.log(firstStageGreen)
        // console.log('Первая стади зеленая')
    }
    for (let i = 0; i < ancients[0]["first-stage"][1]; i++){
        let index = getRandomArrayElement(brownCardsmixingCards)
        firstStageBrown.push(brownCardsmixingCards[index])
        brownCardsmixingCards.splice(index, 1)
        // console.log(brownCardsmixingCards)
        // console.log(firstStageBrown)
        // console.log('Первая стадия браун')
    }
    for (let i = 0; i < ancients[0]["first-stage"][2]; i++){
        let index = getRandomArrayElement(blueCardsmixingCards)
        firstStageBlue.push(blueCardsmixingCards[index])
        blueCardsmixingCards.splice(index, 1)
        // console.log(blueCardsmixingCards)
        // console.log(firstStageBlue)
        // console.log('Первая стадия синий')
    }
    // Вторая стадия
    for (let i = 0; i < ancients[0]["second-stage"][0]; i++){
        let index = getRandomArrayElement(greenCardsmixingCards)
        secondStageGreen.push(greenCardsmixingCards[index])
        greenCardsmixingCards.splice(index, 1)
        // console.log(greenCardsmixingCards)
        // console.log(secondStageGreen)
        // console.log('Вторая стади зеленая')
    }
    for (let i = 0; i < ancients[0]["second-stage"][1]; i++){
        let index = getRandomArrayElement(brownCardsmixingCards)
        secondStageBrown.push(brownCardsmixingCards[index])
        brownCardsmixingCards.splice(index, 1)
        // console.log(brownCardsmixingCards)
        // console.log(secondStageBrown)
        // console.log('Вторая стадия браун')
    }
    for (let i = 0; i < ancients[0]["second-stage"][2]; i++){
        let index = getRandomArrayElement(blueCardsmixingCards)
        secondStageBlue.push(blueCardsmixingCards[index])
        blueCardsmixingCards.splice(index, 1)
        // console.log(blueCardsmixingCards)
        // console.log(secondStageBlue)
        // console.log('Вторая стадия синий')
    }
// Третья стадия
    for (let i = 0; i < ancients[0]["third-stage"][0]; i++){
        let index = getRandomArrayElement(greenCardsmixingCards)
        thirdStageGreen.push(greenCardsmixingCards[index])
        greenCardsmixingCards.splice(index, 1)
        // console.log(greenCardsmixingCards)
        // console.log(thirdStageGreen)
        // console.log('Третья стадия зеленый')
    }
    for (let i = 0; i < ancients[0]["third-stage"][1]; i++){
        let index = getRandomArrayElement(brownCardsmixingCards)
        thirdStageBrown.push(brownCardsmixingCards[index])
        brownCardsmixingCards.splice(index, 1)
        // console.log(brownCardsmixingCards)
        // console.log(thirdStageBrown)
        // console.log('Третья стадия браун')
    }
    for (let i = 0; i < ancients[0]["third-stage"][2]; i++){
        let index = getRandomArrayElement(blueCardsmixingCards)
        thirdStageBlue.push(blueCardsmixingCards[index])
        blueCardsmixingCards.splice(index, 1)
        // console.log(blueCardsmixingCards)
        // console.log(thirdStageBlue)
        // console.log('Третья стадия синий')
    }

    let firstStage = mixin([...firstStageGreen, ...firstStageBrown, ...firstStageBlue])
    console.log('Карты 1 стадии ↓↓↓↓↓↓')
    console.log(firstStage)
    let secondtStage = mixin([...secondStageGreen, ...secondStageBrown, ...secondStageBlue])
    console.log(`Карты 2 стадии ↓↓↓↓↓↓`)
    console.log(secondtStage)
    let thirtStage = mixin([...thirdStageGreen, ...thirdStageBrown, ...thirdStageBlue])
    console.log(`Карты 3 стадии ↓↓↓↓↓↓`)
    console.log(thirtStage)
    let fullDeca = [...thirtStage, ...secondtStage, ...firstStage ]
    FirstStageCount = firstStage.length
    SecondStageCount = secondtStage.length
    ThirdStageCount = thirtStage.length

    console.log(`Отработала функция mixingCardsforStage. Получаем итоговую колоду карт в нужном порядке ↓↓↓↓↓↓`)
    console.log(fullDeca)
    console.log(`При нажатии на рубашку начнут выходить карты. Для удобства проверки карты замаркированы следующим образом.
    Например: "eldritch-codejam-main/assets/MythicCards/blue/[[[[blue4s]]]].png"
    blue4s - карта со снежинкой,
    blue4sh - карта с шупальцами,
    blue4 - обычная карта.
    Карты переименованны сугубо для удобства проверки. На сортировку это никак не влияет `)
    return fullDeca
}

        
const curCart = document.querySelector('.current-card')

const text1 = document.querySelector('#stage-text1')
const text2 = document.querySelector('#stage-text2')
const text3 = document.querySelector('#stage-text3')

function checkStage() {
    if(FirstStageCount === 1 || FirstStageCount === 0 ) {
        text1.classList.add('stage-text-end')
    }else{
        text1.classList.remove('stage-text-end')
    }
    if (SecondStageCount === 0 || SecondStageCount === 1) {
        text2.classList.add('stage-text-end')
    }else{
        text2.classList.remove('stage-text-end')
    }
    if (ThirdStageCount === 0 || ThirdStageCount === 1) {
        text3.classList.add('stage-text-end')
    }else{
        text3.classList.remove('stage-text-end')
    }


    if (FirstStageCount >= 1) {
    FirstStageCount -= 1
    let currentCart = (fullDeca.pop()).slice(2);
    console.log(`${currentCart} <-- вышедшая карта`)
    if(currentCart.indexOf('blue') !== -1){
        dotBlue1.textContent -=1
    }
    if(currentCart.indexOf('green') !== -1){
        dotGreen1.textContent -=1
    }
    if(currentCart.indexOf('brown') !== -1){
        dotBrown1.textContent -=1
    }
    curCart.style.backgroundImage = `url('${currentCart}')`
    if(FirstStageCount ===0){
        return 
    }
    
    console.log('1 стадия')
    }
    if (SecondStageCount > 0 && FirstStageCount ===0){
    
    let currentCart = (fullDeca.pop()).slice(2);
    console.log(`${currentCart} <-- вышедшая карта`)
    if(currentCart.indexOf('blue') !== -1){
        dotBlue2.textContent -=1
    }
    if(currentCart.indexOf('green') !== -1){
        dotGreen2.textContent -=1
    }
    if(currentCart.indexOf('brown') !== -1){
        dotBrown2.textContent -=1
    }
    curCart.style.backgroundImage = `url('${currentCart}')`
    SecondStageCount -=1
    if(SecondStageCount ===0){
        return 
    
    }
    console.log('2 стадия')
}
    if (ThirdStageCount > 0 && FirstStageCount ===0 && SecondStageCount === 0 ){
        let currentCart = (fullDeca.pop()).slice(2);
        console.log(`${currentCart} <-- вышедшая карта`)
        if(currentCart.indexOf('blue') !== -1){
            dotBlue3.textContent -= 1
        }
        if(currentCart.indexOf('green') !== -1){
            dotGreen3.textContent -=1
        }
        if(currentCart.indexOf('brown') !== -1){
            dotBrown3.textContent -=1
        }
        curCart.style.backgroundImage = `url('${currentCart}')`
        ThirdStageCount -=1
        if(ThirdStageCount ===0){
            return 
        
        }
        console.log('3 стадия')
        
    }return NaN
}



// Event listeners

// Выбираем карту и обновляем выбранного древнего 

const forReviewer = ['Азатот','Ктулху', 'Йог-Сотот', 'Шуб-Ниггурат']


function checkOpacity (arr) {
    curCart.style.backgroundImage = ``
    if(arr.children.length === 4){
        for (let elem of arr.children) {
            if(elem.classList.contains('active-ancient')){
            elem.classList.remove('active-ancient')
        }
    }
    }else {
        for (let elem of arr.children) {
            if(elem.classList.contains('active-btn')){
            elem.classList.remove('active-btn')
        }
    }
}
};

for(let i = 0; i < ancientsContainer.children.length; i++) {
    ancientsContainer.children[i].addEventListener('click', () => {
    text1.classList.remove('stage-text-end')
    text2.classList.remove('stage-text-end')
    text3.classList.remove('stage-text-end')
    ancientsSelect = i + 1
    checkOpacity(ancientsContainer)
    ancientsContainer.children[i].classList.add('active-ancient')
    console.log('Выбран древний: ', forReviewer[i])
    });
};

// обновляем сложность
for(let i = 0; i < dificultList.children.length; i++) {
    dificultList.children[i].addEventListener('click', () => {
    text1.classList.remove('stage-text-end')
    text2.classList.remove('stage-text-end')
    text3.classList.remove('stage-text-end')
    difficultsSelect = i + 1
    checkOpacity(dificultList)
    dificultList.children[i].classList.add('active-btn')
    console.log('Выбранная сложность: ', dificultList.children[i].textContent)
    });
};


mixDeca.addEventListener('click', ()=>{
    let decaLogicReturn = decaLogic()
    let sliceDecaReturn = sliceDeca(decaLogicReturn)
    fullDeca = mixingCardsforStage(sliceDecaReturn) 
});

pushCard.addEventListener('click', (checkStage));

