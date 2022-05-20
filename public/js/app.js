const weatherForm = document.querySelector('form')
const inputData = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')


messageOne.textContent = ''
messageTwo.textContent = ''
messageThree.textContent = ''


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = inputData.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {

        response.json().then(({ location, temperature, feelsLikeTemp, error }) => {
            if (error) {
                return messageOne.textContent = error
            }
            messageOne.textContent = location
            messageTwo.textContent = `Temperature: ${temperature}`
            messageThree.textContent = `Feels like: ${feelsLikeTemp}`
        })

    })

})

