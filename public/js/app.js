const weatherForm = document.querySelector('form')
const inputData = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')



messageOne.textContent = ''
messageTwo.textContent = ''
messageThree.textContent = ''
messageFour.textContent = ''



weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = inputData.value

    fetch('/weather?address=' + location).then((response) => {

        response.json().then(({ location, temperature, feelsLikeTemp, humidity, error }) => {
            if (error) {
                messageOne.textContent = error
                messageTwo.textContent = ''
                messageThree.textContent = ''
                messageFour.textContent = ''
            }
            else {
                messageOne.textContent = location
                messageTwo.textContent = `Temperature: ${temperature} °C`
                messageThree.textContent = `Feels like: ${feelsLikeTemp} °C`
                messageFour.textContent = `Humidity: ${humidity}%`
            }

        })

    })

})

