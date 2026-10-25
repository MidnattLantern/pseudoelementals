import { sceneHandler } from "../../sceneHandler"
import { sessionMemory } from "../../sessionMemory"
import { sceneContainer } from "./mainMenu.sceneContainer"

function useLandingProfile() {
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
        const sceneName = 'gameSession'
        sceneHandler.handleSetSwitchScene(sceneName)
        sessionMemory.setCurrentScene(sceneName)
    }

    //init & apply
    mountEventListeners()
    container.append(heading, setGameSessionButton)
    sceneContainer.reference.replaceChildren(container)
}

export const mainMenuProfiles = {
    useLandingProfile
}