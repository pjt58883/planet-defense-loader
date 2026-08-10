# Fighter base mesh

Replace the placeholder slab under fighters (currently a flat grey box) with the uploaded modular road platform model.

## Steps

1. Compress the uploaded model (78 MB) with gltf-transform: geometry simplify, textures resized and re-encoded as plain JPEG (no WebP/Draco, so the game's inline GLB loader can read them). Target well under the 10 MB repo limit, like the other models.
2. Commit it as `public/assets/jetpad.glb` — the loader already looks there first, and `jetpad` is currently in the optional-models list.
3. In `public/game.html`:
   - Measure the model's widest footprint radius and set `JETPAD_R` to it so the pad scales to exactly fit a hex tile.
   - Keep the existing base-at-y=0 re-centering so the deck sits flush on the ground.
   - Drop `jetpad` from `OPTIONAL_MODELS` once the real file ships (the box fallback stays as a safety net if the file fails to load).
4. Verify in a headless browser run: place a fighter, confirm the new deck renders at the right size, sits flat on the tile, keeps its ally outline, and no console errors appear.

No gameplay, cost, or behaviour changes — visual swap only.
