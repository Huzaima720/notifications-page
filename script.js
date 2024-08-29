const notificationElement = document.querySelector('.header .count')
let notificationCount = parseInt(notificationElement.innerHTML) 

let newNotification = document.querySelectorAll('.notification.new')



let markBtn = document.querySelector('.header button')

markBtn.addEventListener('click', () => {
    newNotification.forEach(notification => {
        notificationCount--
        notification.classList.remove('new')
    })
    if (notificationCount <= 0) {
        notificationElement.style.display = 'none'
    }
    else{
        notificationElement.innerHTML = notificationCount
    }
})

newNotification.forEach(notification => {
    notification.addEventListener('click', () => {
        notificationCount--
        notification.classList.remove('new')
        if (notificationCount <= 0) {
            notificationElement.style.display = 'none'
        }
        else{
            notificationElement.innerHTML = notificationCount
        }
        })
    })
