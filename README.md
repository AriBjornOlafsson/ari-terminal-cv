# ari-terminal-cv

A terminal emulator CV — browse my résumé entirely from your browser, no server required.

**[Live demo →](https://aribuornolafsson.github.io/ari-terminal-cv)**

```
ari@cv:~$ help

  Available commands:

  about          Who I am
  experience     Work history
  skills         Technical skills
  education      Academic background
  projects       Side projects
  hackathons     Competition wins
  contact        Get in touch
  interests      Outside of work
  neofetch       System info
  cv             Full CV summary
  clear          Clear screen
  help           Show this message
```

## Features

- No server, no build step — single `index.html`
- Tab completion & command history (↑↓)
- Animated boot sequence
- JetBrains Mono, Icelandic flag palette

## Running locally

```bash
open index.html
# or
python3 -m http.server
```

## Hosting on GitHub Pages

1. Fork or clone this repo
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Done — live at `https://<username>.github.io/ari-terminal-cv`

## License

MIT
