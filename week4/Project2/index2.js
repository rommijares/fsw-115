const button = document.getElementById('button1')

function buttonClick() {
    axios.get("https://ghibliapi.herokuapp.com/locations")
        .then(response => {
            for (let i=0; i<response.data.length; i++) {

                const div = document.createElement('div')
                document.getElementById('main').appendChild(div) 

                const h2 = document.createElement('h2')
                h2.textContent = response.data[i].name
                div.appendChild(h2)

                const p1 = document.createElement('p')
                p1.textContent = 'Climate: ' + response.data[i].climate
                div.appendChild(p1)

                const p2 = document.createElement('p')
                p2.textContent = 'Terrain: ' + response.data[i].terrain
                div.appendChild(p2)

                const p3 = document.createElement('p')
                p3.textContent = 'Surface Water: ' + response.data[i].surface_water
                div.appendChild(p3)

                const p4 = document.createElement('p')
                p4.textContent = 'Residents: ' + response.data[i].residents
                div.appendChild(p4)

                const p5 = document.createElement('p')
                p5.textContent = 'Films: ' + response.data[i].films
                div.appendChild(p5)

                const p6 = document.createElement('p')
                p6.textContent = 'URL: ' + response.data[i].url
                div.appendChild(p6)

            }
        })
     
        .catch()
}

button.addEventListener('click', buttonClick)


        