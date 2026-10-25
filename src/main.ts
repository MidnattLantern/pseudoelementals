import './style.scss'
import './monitor'
import { sceneHandler } from './sceneHandler'

const app = document.getElementById('app')
if (!app) throw new Error('Could not find #app element')

sceneHandler.handleSetSwitchScene('mainMenu')