const app = document.getElementById('app')
if (!app) throw new Error('Could not find #app element')

export const monitor = document.createElement('main')
monitor.className = 'monitor'
app.append(monitor)