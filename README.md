# Exploding Nuts: Acorn Uprising

## Included in this build

This browser-game prototype now includes:

- A polished home screen with a guided three-stage drop setup: choose a fighter and integrated run modifier, choose an arena, then calibrate difficulty before launching
- The Drop Forge now adds cinematic art-driven themes, three-tab fighter and arena dossiers, tactical recommendations, deep stat scans, equipped-versus-preview comparison, unlocked-choice roulette, touch swiping, keyboard shortcuts, animated transitions, acquisition progress, predicted fighter-map synergy, and a live deployment manifest
- The supplied GLB remains available in ModelPreview.html, while the playable maps use natural landmarks instead of a central display figure
- Six rebuilt seamless-loop arenas, each with three continuous rings, four curved reconnecting routes, twelve preview-matched landmarks, route-safe scenery placement, concealed natural boundaries, and roughly ten times the former playable footprint
- Nine fighters with gameplay perks, including Twinshot: a lower-health, slower specialist who dual-wields every weapon and owns the exclusive Bullet Ballet ability
- Six distinct weapon families; dual-wielding has been retired as a generic unlock and is now Twinshot's defining character trait
- Eighty-one upgrades with four random choices after each 45-second survival wave, including 28 fighter-specific upgrades and stronger offense, defense, status, economy, mobility, and high-risk branches
- Real-time survival rounds with a prominent top-center countdown, escalating enemy pressure, boss intervals, and automatic end-of-wave salvage collection
- Rebalanced enemy pressure: Wave 1 starts below the cap, reinforcements arrive at readable intervals, kills create a difficulty-scaled breathing window, and threat caps ramp gradually during each wave
- Seven real difficulty tiers from Scout through Canopy Legend, scaling durability, damage, movement, ranged accuracy, reinforcement pressure, aggression, projectile speed, elite frequency, and rewards
- Sequential difficulty progression: Scout and Uprising begin open, and surviving a wave unlocks the next tier in order
- Ten distinct run modifiers with one-time acorn unlocks, unique icons, visible rule changes, and an admin progression bypass
- Enemy projectiles are fully ballistic after launch: difficulty controls initial aim error and shot speed, but shots never bend or auto-track the player
- Eight rebuilt articulated enemy models with detailed faces, armor, tails, wings, equipment, quality-scaled layered fur with wind and movement response, spawn telegraphs, walking cycles, wing flaps, body movement, and rotating mechanical parts
- A new original dual-cannon key-art image on the home screen, plus distinct visual set dressing for the new arenas
- Ten home-screen effects: cinematic staged reveal, subtle depth parallax, layered atmospheric lighting, drifting woodland mist, falling leaves, distant sky flashes, energized title sheen, button impact ripples, a scanning loadout card, and an explosive launch transition
- A redesigned home command deck with a larger cinematic title, expandable live wallet, quick-drop remix, rotating field intelligence, clearer utility controls, persistent field records, and a larger image-led deployment summary
- Fully connected audio and settings: a distinct instrumental CC0 soundtrack for every arena, credited music previews, event sound effects, master/music/effects volume, motion, graphics quality, render scale, color filters, sensitivity, camera shake, fullscreen, and remappable controls
- A dedicated 51-entry achievement catalog with collection milestones, legendary challenges, live progress bars, persistent unlock tracking, and Steam-style bottom-right unlock notifications with a custom chime
- A working progression screen with lifetime records, Burrow Rank, an acorn wallet, direct achievement navigation, and four multi-rank permanent Burrow Armory upgrades
- Acorns are now physical battlefield pickups that must be collected, bank at the end of a run, and can be spent on permanent health, salvage, damage, and shield bonuses
- Detailed one-at-a-time fighter dossiers and arena intelligence, with arrow navigation, nine distinct fighter mechanics, ten integrated modifiers, seven sequential difficulty modes, six map bonuses, strategy advice, stat profiles, relic explanations, and persistent selections
- A minimal destination-art loading screen, a deliberate final ready action, a custom favicon, and 81 distinct sourced upgrade icons with full CC BY attribution
- Rookie and Oakwood Outpost are available from the start; every other fighter and arena is a permanent unlock purchased with a single safe acquire-and-select transaction that cannot charge twice
- A device-local admin console beside fullscreen unlocks the complete catalog and provides achievement, armory, wallet, God Mode, one-hit, infinite Overdrive, healing, swarm, and wave-testing controls
- Escape now pauses and freezes active gameplay, with resume, admin, fullscreen, and return-home controls available from the pause screen
- A cinematic graphics pass with ACES tone mapping, biome reflection environments, physically based lights and materials, weathered metal/brass weapon surfaces, 2048px soft shadows, atmospheric fog, panoramic skies, high-detail textured terrain, ambient particles, projectile glow, muzzle flash, explosion shockwaves, smoke, scorch marks, and enemy health markers
- Browser-local tracking for best wave, acorns banked, and completed runs

## Play locally

Open index.html through a small local web server rather than double-clicking the file. The game loads Three.js and the GLB model from web URLs, so the first run needs an internet connection.

Controls: **WASD** move, **mouse** aim, **left-click** fire, **Space** jump, **Shift** dash, **Q / 1–7** change weapons, **E** Overdrive, **F** arena relic, **R** fighter ability, **Esc** pause, **F11** fullscreen.

## Before charging money on Steam

This is now a strong vertical slice, but an HTML prototype by itself is not a shippable Steam product. Before release:

1. Package it in Electron, Tauri, or a native engine build so it has an offline executable and no CDN dependency.
2. License or replace every production asset, sound, font, and 3D model; keep a record of each license.
3. Add sound effects, music, save migration, pause/settings/accessibility menus, controller support, and remappable input.
4. Test common screen sizes, low-end hardware, and every operating system you plan to support.
5. Set up Steamworks: builds, store page, legal/privacy details, achievements, capsules, screenshots, trailer, and support contact.
6. Run external playtests, then tune difficulty and fix the issues they find.

This separates the feature-complete game prototype from the testing, packaging, licensing, and store work required for a commercial release.
