export const hours = () => {
    let time = Date.UTC(2019, 7, 19, 13, 0, 0, 0) - Date.now() 
    let seconds = time/1000
    let minutes = seconds/60
    let hours = minutes/60
    let days = Math.floor(hours/24)
    hours = Math.floor(hours - (days*24))
    return(hours)
}

export const days = () => {
    let time = Date.UTC(2019, 7, 22, 13, 0, 0, 0) - Date.now()
    let seconds = time/1000
    let minutes = seconds/60
    let hours = minutes/60
    let days = Math.floor(hours/24)
    return(days)
}