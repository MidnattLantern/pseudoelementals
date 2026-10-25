import { sceneContainer } from "./mainMenu.sceneContainer"
import { mainMenuProfiles } from "./mainMenu.profiles"

function mount() {
    mainMenuProfiles.useLandingProfile()
    return sceneContainer.reference
}

export const mainMenuScene = {
    mount
}