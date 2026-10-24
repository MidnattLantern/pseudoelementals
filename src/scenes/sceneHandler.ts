import { main } from "../main";
import { sessionMemory } from "../sessionMemory";
import { aboutScene } from "./about";
import { gameSessionScene } from "./gameSession";
import { mainMenuScene } from "./mainMenu";

function handleSetSwitchScene(setScene: string) {
    const monitor = main.getMonitor()
    if (!monitor) throw new Error('Scene handler could not switch scene because the "monitor" element could not be detected')

    sessionMemory.setCurrentScene(setScene)

    switch (setScene) {
        case 'mainMenu':
            monitor.replaceChildren(mainMenuScene.mount())
            break
        case 'gameSession':
            monitor.replaceChildren(gameSessionScene.mount())
            break
        case 'about':
            monitor.replaceChildren(aboutScene.mount())
            break
        default:
            break
    }
}

export const sceneHandler = {
    handleSetSwitchScene
}