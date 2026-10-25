import { sceneHandler } from "../sceneHandler"

function mount() {
    const container = document.createElement('div')

    // elements
    const heading = document.createElement('h1')
    heading.textContent = 'Main menu'

    const setGameSessionButton = document.createElement('button')
    setGameSessionButton.textContent = 'Game session'

    // lifecycles
    function mountEventListeners() {
        setGameSessionButton.addEventListener('click', handleSetGameSessionScene)
    }
    function unmountEventListeners() {
        setGameSessionButton.removeEventListener('click', handleSetGameSessionScene)
    }

    // handlers
    function handleSetGameSessionScene() {
        unmountEventListeners()
        sceneHandler.handleSetSwitchScene('gameSession')
    }

    // init & export
    mountEventListeners()
    container.append(heading, setGameSessionButton)
    return container
}

export const mainMenuScene = {
    mount
}