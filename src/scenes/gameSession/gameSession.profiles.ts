import { monologueBox } from '../../monologueBox'
import { sceneHandler } from '../../sceneHandler'
import { sessionMemory } from '../../sessionMemory'
import { sceneContainer } from './gameSession.sceneContainer'

function useLandingProfile() {
    const container = document.createElement('div')

    // elements
    const message = document.createElement('h1')
    message.textContent = 'Game session 2'

    const setMainMenuButton = document.createElement('button')
    setMainMenuButton.textContent = 'Main menu'

    const testInitiateMonologueButton = document.createElement('button')
    testInitiateMonologueButton.textContent = 'Test initiate monologue'

    // lifecycles
    function mountEventListeners() {
        setMainMenuButton.addEventListener('click', handleSetMainMenuScene)
        testInitiateMonologueButton.addEventListener('click', handleTestInitiateMonologueButton)
    }
    function unmountEventListeners() {
        setMainMenuButton.removeEventListener('click', handleSetMainMenuScene)
        testInitiateMonologueButton.removeEventListener('click', handleTestInitiateMonologueButton)
    }

    // handlers
    function handleSetMainMenuScene() {
        unmountEventListeners()
        const sceneName = 'mainMenu'
        sceneHandler.handleSetSwitchScene(sceneName)
        sessionMemory.setCurrentScene(sceneName)
    }

    function handleTestInitiateMonologueButton() {
        unmountEventListeners()
        useTestMonologueProfile()
    }

    // init & apply
    mountEventListeners()
    container.append(message, setMainMenuButton, testInitiateMonologueButton)
    sceneContainer.reference.replaceChildren(container)
}

function useTestMonologueProfile() {
    const container = document.createElement('div')

    container.append(monologueBox.mount())
    sceneContainer.reference.replaceChildren(container)
}

export const gameSessionProfiles = {
    useLandingProfile,
    useTestMonologueProfile
}