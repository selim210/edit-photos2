const api = "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";
const inp = document.getElementById('inp')
const images = document.querySelector('.images')

const getImage = async () => {
    // make a request to openai
    const methods = {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${api}`
        },
        body:JSON.stringify(
            {
                "prompt":inp.value,
                "n":3,
                "size":"512x512"
            }
        )
    }
    const res = await fetch("https://api.openai.com/v1/images/generations", methods)
    // parse the response as json
    const data = await res.json()
    const listImages = data.data;
    listImages.map(photo => {
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src = photo.url
    })
}