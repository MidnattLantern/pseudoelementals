function mount() {
    const container = document.createElement('div')

    const message = document.createElement('h1')
    message.textContent = 'Game session'

    container.append(message)

    return container
}

export const gameSessionScene = {
    mount
}