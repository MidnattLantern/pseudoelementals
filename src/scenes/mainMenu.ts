import { sceneHandler } from "./sceneHandler"

function mount() {
    const container = document.createElement('div')
    const hello = document.createElement('h1')
    hello.textContent = 'Hello 2'

    function handleSetGameSessionScene() {
        sceneHandler.handleSetSwitchScene('gameSession')
    }

    function handleSetAboutScene() {
        sceneHandler.handleSetSwitchScene('about')
    }

    const setGameSessionButton = document.createElement('button')
    setGameSessionButton.textContent = 'Game session'
    setGameSessionButton.addEventListener('click', handleSetGameSessionScene)

    const setAboutButton = document.createElement('button')
    setAboutButton.textContent = 'About'
    setAboutButton.addEventListener('click', handleSetAboutScene)

    container.append(hello, setGameSessionButton, setAboutButton)
    return container
}

export const mainMenuScene = {
    mount
}