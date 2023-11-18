export const apiUrl = () => {
    if (process.env.NODE_ENV === 'development') {
        return 'http://localhost:6300/'
    }
    else {
        return 'https://api.jstore.fr/'
    }
}