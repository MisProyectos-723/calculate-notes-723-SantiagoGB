const userName = document.getElementById('name')
const data1 = document.getElementById('data1')
const data2 = document.getElementById('data2')
const data3 = document.getElementById('data3')
const btnCalculate = document.getElementById('btn-calculate')
const btnPredict = document.getElementById('btn-predict')
const response = document.getElementById('response')

btnCalculate.addEventListener('click', calculateNotes)

function calculateNotes (event) {
    let user = userName.value
    let note1 = Number(data1.value)
    let note2 = Number(data2.value)
    let note3 = Number(data3.value)

    if((note1 >= 1 && note1 <= 5) && (note2 >= 1 && note2 <= 5) && (note3 >= 1 && note3 <= 5)){

        let result = (note1*0.3) + (note2*0.3) + (note3*0.4)

        if (result < 3.5) {
            response.style.color = 'black'
            response.textContent = `SR/SRA ${user.value} su nota definitiva es: ${result} perdio la materia`
            event.preventDefault()
        }else 
        if(result >= 3.5 && result <= 4.5){
            response.style.color = 'orange'
            response.textContent = `SR/SRA ${user.value} su nota definitiva es: ${result} gano la materia`
            event.preventDefault()
        }else
        if(result > 4.5){
            response.style.color = 'green'
            response.textContent = `SR/SRA ${user.value} su nota definitiva es: ${result} optuvo un resultado sobresaliente`
            event.preventDefault()
        }
    }else {
        response.textContent = `SR/SRA ${user.value} las notas ingresadas son incorrectas`
        event.preventDefault()
    }
}

