function mount() {
    const container = document.createElement('div')

    const message = document.createElement('h1')
    message.textContent = 'About'

    container.append(message)
    return container
}

export const aboutScene = {
    mount
}