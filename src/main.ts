import { sceneHandler } from './scenes/sceneHandler'
import './style.scss'

const app = document.getElementById('app')

const monitor = document.createElement('div')
monitor.className = 'monitor'

if (app) app.append(monitor)

function getMonitor() {
	return monitor
}

export const main = {
	getMonitor
}

// initialize
sceneHandler.handleSetSwitchScene('mainMenu')