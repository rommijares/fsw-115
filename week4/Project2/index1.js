const button = document.getElementById('button1')

function buttonClick() {
    axios.get("https://www.breakingbadapi.com/api/characters")
        .then(response => {
            for (let i=0; i<response.data.length; i++) {

                const div = document.createElement('div')
                document.getElementById('main').appendChild(div) 

                const h2 = document.createElement('h2')
                h2.textContent = response.data[i].name
                div.appendChild(h2)

                const img = document.createElement('img')
                img.src =  response.data[i].img
                img.height = 150
                div.appendChild(img)

                const p1 = document.createElement('p')
                p1.textContent = 'Birthday: ' + response.data[i].birthday
                div.appendChild(p1)

                const p2 = document.createElement('p')
                p2.textContent = 'Occupation: ' + response.data[i].occupation
                div.appendChild(p2)

                const p3 = document.createElement('p')
                p3.textContent = 'Status: ' + response.data[i].status
                div.appendChild(p3)

                const p4 = document.createElement('p')
                p4.textContent = 'Nickname: ' + response.data[i].nickname
                div.appendChild(p4)

                const p5 = document.createElement('p')
                p5.textContent = 'Seasons: ' + response.data[i].appearance
                div.appendChild(p5)

                const p6 = document.createElement('p')
                p6.textContent = 'Portrayed: ' + response.data[i].portrayed
                div.appendChild(p6)

                const p7 = document.createElement('p')
                p7.textContent = 'Category: ' + response.data[i].category
                div.appendChild(p7)

                const p8 = document.createElement('p')
                p8.textContent = 'Better Call Saul appearance: ' + response.data[i].better_call_saul_appearance
                div.appendChild(p8)
            }
        })
     
        .catch()
}

button.addEventListener('click', buttonClick)


        