import { sceneContainer } from './gameSession.sceneContainer'
import { gameSessionProfiles } from './gameSession.profiles'

function mount() {
    gameSessionProfiles.useLandingProfile()
    return sceneContainer.reference
}

export const gameSessionScene = {
    mount
}