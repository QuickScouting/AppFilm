const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '15170828fce2ef8682554b4cf2eaba4e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;