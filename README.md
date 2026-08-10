# Planet Defense Loader

load these files into a Planet Defense game

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/45adb167-bdc5-4ab0-827b-82964991ab04).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

### 3D models

The game's GLB models (`pad`, `gun`, `jet`, `foundry`, `mother`, `viper`,
`hover`, `core`) are stored in Lovable's asset store, referenced by the
`/__l5e/assets-v1/...` URLs in `public/game.html` (see the manifests in
`src/assets/*.asset.json`). Those URLs only resolve when the site is served
by Lovable.

The loader tries `public/assets/<name>.glb` first, so to run the game with
full models anywhere else, download the GLBs (e.g. from the Lovable editor)
and drop them into `public/assets/`. Any model that can't be loaded renders
as a simple placeholder shape — the game stays fully playable either way.

Two slots have no shipped model yet and use placeholders by design:
`dart.glb` (the dart flies the retired viper model) and `dread.glb` (the
dreadnaught flies a placeholder slab). Drop a GLB with that name into
`public/assets/` to fill one, and update its measured length constant in
`game.html` (`ENEMY_LEN`).
