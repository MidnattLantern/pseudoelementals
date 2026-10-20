import './style.scss'

const app = document.getElementById('app')

const hello = document.createElement('h1')
hello.textContent = 'Hello'

if (app) app.append(hello)