import Styles from './monologueBox.module.scss'
import pilotMonologueContent from './monologueContent/pilot.json'

function mount() {
    const container = document.createElement('div')
    container.className = Styles.container

    const textBox = document.createElement('p')
    textBox.textContent = pilotMonologueContent[0]

    container.append(textBox)
    return container
}

export const monologueBox = {
    mount
}