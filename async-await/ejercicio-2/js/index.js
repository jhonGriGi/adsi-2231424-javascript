const app = {
    baseUrl: 'https://picsum.photos/v2/',
    getPictures: async function() {
        const response = await fetch(`${this.baseUrl}/list`);
        const data = await response.json();
        if (response.status !== 200)
            throw new Error(`Message: ${data.message}`)

        this.renderPicture(data);
    },
    renderPicture: (data) => {
        console.log(data)
    }
};
(async () => {
    try {
        await app.getPictures();
    } catch (e) {
        console.log(e.message)
    }
})()