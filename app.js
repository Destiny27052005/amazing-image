const form = document.querySelector("form");
const container = document.querySelector('#imgs')
const div = document.querySelector(".img");
const search = document.getElementById("search").value;
const button = document.querySelector('.click')
const footer = document.querySelector('footer')


form.addEventListener('submit', (e) => {
    e.preventDefault()
})


async function fetchData() {
    try {
        const search = document.getElementById("search");
        container.innerHTML = ""
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${search.value}&client_id=YRJfxxZ8trO8zfBGKCMERyGykg8j9Eh1Xe557k-HV5o`)

        if (!response.ok) {
            throw new Error('Could not fetch resource')
        }
        const data = await response.json()
        
        footer.style.display = "none"
        div.style.display = "none"
        const result = data.results
        const image = [...result]

        for (const images of image) {
            const img = document.createElement('img')
            const link = document.createElement('a')
            const url = images.urls.small
            const id = images.id
            container.append(link)
            link.append(img)
            img.src = url
            img.id = `${id}`
            link.href = url
            link.target = "_blank"
        }
        footer.style.display = 'block'
    } catch (error) {
        console.error(error);
    }
}





