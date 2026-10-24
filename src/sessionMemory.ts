let currentScene: String = 'mainMenu'
function getCurrentScene() {
    return currentScene
}
function setCurrentScene(newScene: String) {
    currentScene = newScene
}

export const sessionMemory = {
    getCurrentScene, setCurrentScene
}