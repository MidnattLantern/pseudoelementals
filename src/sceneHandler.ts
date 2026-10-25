import { sessionMemory } from "./sessionMemory";
import { gameSessionScene } from "./scenes/gameSession/gameSession";
import { monitor } from "./monitor";
import { mainMenuScene } from "./scenes/mainMenu/mainMenu";

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