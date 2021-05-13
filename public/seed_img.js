const images = [
    {
        id: 1,
        name: "Graduate",
        detail: "It is such a great feeling that I will finally graduate, but the fact that I have to go out living in the real world of chaos and competition is causing me to get a panic attack.",
        url: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
        id: 2,
        name: "Go Thailand",
        detail: "After graduation, it's time to go back to my country, Thailand. It has been almost 5 years that I have been in the US. This is such an exciting moment and I will miss the life here a lot.",
        url: "https://images.pexels.com/photos/3770090/pexels-photo-3770090.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
        id: 3,
        name: "Stay on an island",
        detail: "I think about spending time with myself on a small island, watching the waves lapping the shore, precipitating my thoughts and planning on my own business.",
        url: "https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },

    {
        id: 4,
        name: "Be back like a Phoenix",
        detail: "In the fairytale, Phoenix will be reborn from its own ashes to an even better and more skillful form. I will be like that too. Hopefully I can finally come up with some great ideas that could stun the world!",
        url: "https://www.bbntimes.com/images/articles/companies/Phoenix_.jpg"
    },
]

const mappedImages = images.map(img => `<div><img src="${img.url}" alt="${img.name}"/>${img.name}</div><div class="detail">${img.detail}</div>`).join("")

document.getElementById('container').innerHTML = mappedImages
