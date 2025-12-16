class TerminalEffect {
    constructor() {
        this.terminalBody = document.getElementById('terminal-body');
        if (!this.terminalBody) return;

        this.messages = [
            { type: 'output', text: '[SUCCESS] Connexion établie...' },
            { type: 'output', text: '[INFO] Récupération des données...' },
            { type: 'output', text: '' },
            { type: 'output', text: '> Nouvelle faille critique dans OpenSSL détectée' },
            { type: 'output', text: '> IA et cybersécurité : nouveaux défis identifiés' },
            { type: 'output', text: '> Wi-Fi 7 : spécifications finalisées' },
            { type: 'output', text: '> Ransomware : nouvelles techniques analysées' },
            { type: 'output', text: '> Architecture Zero Trust en progression' },
            { type: 'output', text: '> ANSSI : mise à jour des recommandations' },
            { type: 'output', text: '' },
            { type: 'output', text: '[SUCCESS] 6 articles chargés avec succès' },
            { type: 'prompt', command: '' }
        ];

        this.currentIndex = 2;
        this.typeMessage();
    }

    typeMessage() {
        if (this.currentIndex >= this.messages.length) {
            return;
        }

        const message = this.messages[this.currentIndex];
        const line = document.createElement('div');
        line.className = 'terminal-line';

        if (message.type === 'prompt') {
            line.innerHTML = `
                <span class="terminal-prompt">root@nazim:~$</span>
                <span class="terminal-command blink">_</span>
            `;
        } else {
            const textClass = message.text.startsWith('[SUCCESS]') ? 'terminal-output' :
                            message.text.startsWith('[INFO]') ? 'terminal-output' :
                            message.text.startsWith('>') ? 'terminal-command' : 'terminal-output';

            line.innerHTML = `<span class="${textClass}">${message.text}</span>`;
        }

        this.terminalBody.appendChild(line);
        this.currentIndex++;

        const delay = message.text === '' ? 100 : Math.random() * 300 + 200;
        setTimeout(() => this.typeMessage(), delay);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        new TerminalEffect();
    }, 500);
});

const style = document.createElement('style');
style.textContent = `
    .blink {
        animation: blink-animation 1s steps(2, start) infinite;
    }
    @keyframes blink-animation {
        to { visibility: hidden; }
    }
`;
document.head.appendChild(style);