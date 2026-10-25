import Styles from './monitor.module.scss'

const app = document.getElementById('app')
if (!app) throw new Error('Could not find #app element')

export const monitor = document.createElement('main')
monitor.className = Styles.container
app.append(monitor)