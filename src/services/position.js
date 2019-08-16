function getLocation () {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position)
        }, (error) => {
            console.log(error)
        })
    } else {
        alert('Ops')
    }
}

export default getLocation