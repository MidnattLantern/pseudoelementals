import { sceneHandler } from "../sceneHandler"

import { sessionMemory } from "../sessionMemory"

function mount() {
    const container = document.createElement('div')

    // elements
    const message = document.createElement('h1')
    message.textContent = 'Game session'

    const setMainMenuButton = document.createElement('button')
    setMainMenuButton.textContent = 'Main menu'

    // lifecycles
    function mountEventListeners() {
        setMainMenuButton.addEventListener('click', handleSetMainMenuScene)
    }
    function unmountEventListeners() {
        setMainMenuButton.removeEventListener('click', handleSetMainMenuScene)
    }

    // handlers
    function handleSetMainMenuScene() {
        unmountEventListeners()
        sceneHandler.handleSetSwitchScene('mainMenu')
        sessionMemory.setCurrentScene('mainMenu')
    }

    // init & export
    mountEventListeners()
    container.append(message, setMainMenuButton)
    return container
}

export const gameSessionScene = {
    mount
}