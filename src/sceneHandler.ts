import { sessionMemory } from "./sessionMemory";
import { gameSessionScene } from "./scenes/gameSession";
import { mainMenuScene } from "./scenes/mainMenu";
import { monitor } from "./monitor";

function handleSetSwitchScene(name: string) {
    sessionMemory.setCurrentScene(name)

    switch (name) {
        case 'mainMenu':
            monitor.replaceChildren(mainMenuScene.mount())
            break
        case 'gameSession':
            monitor.replaceChildren(gameSessionScene.mount())
            break
        default:
            break
    }
}

export const sceneHandler = {
    handleSetSwitchScene
}