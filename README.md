# Exploding Nuts: Acorn Uprising

## Included in this build

This browser-game prototype now includes:

- A polished home screen with a guided three-stage drop setup: choose one fighter, one arena, then difficulty before launching
- The Drop Forge now adds cinematic art-driven themes, three-tab fighter and arena dossiers, tactical recommendations, deep stat scans, equipped-versus-preview comparison, unlocked-choice roulette, touch swiping, keyboard shortcuts, animated transitions, acquisition progress, predicted fighter-map synergy, and a live deployment manifest
- The supplied GLB remains available in ModelPreview.html; the playable arena now uses a polished transparent fighter hologram on a lit pedestal
- Six reactive arenas: Oakwood Outpost, Frostbite Basin, Squirrel Scrapworks, Sunspire Canopy, Mooncap Grotto, and Tempest Treetops
- Eight fighters with gameplay perks, including shield, ignite, critical-hit, and regeneration specialists
- Seven weapons, including the new Twin Acorn Cannons dual-wield path
- Forty-two upgrades, with four random choices after each 45-second survival wave; cards are selected first and applied only after a separate confirmation press
- Real-time survival rounds with a prominent top-center countdown, escalating enemy pressure, boss intervals, and automatic end-of-wave salvage collection
- Rebalanced enemy pressure: Wave 1 begins with a five-enemy cap, reinforcements arrive at readable intervals, kills create a short breathing window, and threat caps ramp gradually during each wave
- Eight rebuilt articulated enemy models with detailed faces, armor, tails, wings, equipment, spawn telegraphs, walking cycles, wing flaps, body movement, and rotating mechanical parts
- A new original dual-cannon key-art image on the home screen, plus distinct visual set dressing for the new arenas
- Ten home-screen effects: cinematic staged reveal, subtle depth parallax, layered atmospheric lighting, drifting woodland mist, falling leaves, distant sky flashes, energized title sheen, button impact ripples, a scanning loadout card, and an explosive launch transition
- A redesigned home command deck with a larger cinematic title, expandable live wallet, quick-drop remix, rotating field intelligence, clearer utility controls, persistent field records, and a larger image-led deployment summary
- Fully connected audio and settings: licensed CC0 menu and battle music, event sound effects, master/music/effects volume, motion, graphics quality, render scale, color filters, sensitivity, camera shake, fullscreen, and remappable controls
- A dedicated 41-entry achievement catalog with 26 standard goals and 15 legendary challenges, live progress bars, persistent unlock tracking, and Steam-style bottom-right unlock notifications with a custom chime
- A working progression screen with lifetime records, Burrow Rank, an acorn wallet, direct achievement navigation, and four multi-rank permanent Burrow Armory upgrades
- Acorns are now physical battlefield pickups that must be collected, bank at the end of a run, and can be spent on permanent health, salvage, damage, and shield bonuses
- Detailed one-at-a-time fighter dossiers and arena intelligence, with arrow navigation, eight distinct fighter mechanics, four difficulty modes, six map bonuses, strategy advice, stat profiles, relic explanations, and persistent selections
- Rookie and Oakwood Outpost are available from the start; every other fighter and arena is a permanent unlock purchased with banked acorns through a separate unlock-and-confirm flow
- A device-local admin console beside fullscreen unlocks the complete catalog and provides achievement, armory, wallet, God Mode, one-hit, infinite Overdrive, healing, swarm, and wave-testing controls
- Escape now pauses and freezes active gameplay, with resume, admin, fullscreen, and return-home controls available from the pause screen
- A cinematic graphics pass with ACES tone mapping, physically based lights, 2048px soft shadows, atmospheric fog, glass HUD panels, a panoramic aurora sky, high-detail textured terrain, ambient motes, projectile glow, muzzle flash, explosion shockwaves, smoke, scorch marks, and enemy health markers
- Browser-local tracking for best wave, acorns banked, and completed runs

## Play locally

Open Home.html through a small local web server rather than double-clicking the file. The game loads Three.js and the GLB model from web URLs, so the first run needs an internet connection.

Controls: **WASD** move, **mouse** aim, **left-click** fire, **Space** jump, **Shift** dash, **Q / 1–7** change weapons, **E** Overdrive, **F** arena relic.

## Before charging money on Steam

This is now a strong vertical slice, but an HTML prototype by itself is not a shippable Steam product. Before release:

1. Package it in Electron, Tauri, or a native engine build so it has an offline executable and no CDN dependency.
2. License or replace every production asset, sound, font, and 3D model; keep a record of each license.
3. Add sound effects, music, save migration, pause/settings/accessibility menus, controller support, and remappable input.
4. Test common screen sizes, low-end hardware, and every operating system you plan to support.
5. Set up Steamworks: builds, store page, legal/privacy details, achievements, capsules, screenshots, trailer, and support contact.
6. Run external playtests, then tune difficulty and fix the issues they find.

This separates the feature-complete game prototype from the testing, packaging, licensing, and store work required for a commercial release.
