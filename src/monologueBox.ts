import Styles from './monologueBox.module.scss'
import pilotMonologueContent from './monologueContent/pilot.json'

function useTypewriter(content: string, element: HTMLParagraphElement) {
    var i = 0
    var speed = 10

    const typewriter = setInterval(() => {
        if (i < content.length) {
            element.textContent += content.charAt(i)
            i++
        } else {
            stopTypewriter()
        }

    }, speed);

    function stopTypewriter() {
        console.log('stop typewriter')
        clearInterval(typewriter)
    }
}

function mount() {
    const container = document.createElement('div')
    container.className = Styles.container

    const textBox = document.createElement('div')
    textBox.className = Styles.textBox

    const tContent = document.createElement('p')
    tContent.className = Styles.tContent

    useTypewriter(pilotMonologueContent[0], tContent)

    const progressButton = document.createElement('button')
    progressButton.ariaLabel = 'Progress monologue'
    progressButton.textContent = 'Progress monologue'
    progressButton.className = Styles.progressButton

    textBox.append(tContent, progressButton)
    container.append(textBox)
    return container
}

export const monologueBox = {
    mount
}