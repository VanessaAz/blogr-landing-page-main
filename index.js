const iconMenu = document.getElementById('icon-menu')
const closeMenu = document.getElementById('close-menu')
const linksTable = document.getElementById('links')

iconMenu.addEventListener('click', () => {
    linksTable.style.display = 'inline'
    iconMenu.style.display = 'none'
    closeMenu.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
    linksTable.style.display = 'none'
    iconMenu.style.display = 'block'
    closeMenu.style.display = 'none'
})