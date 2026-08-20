# Exploding Nuts: Acorn Uprising — Credits

## Creative direction

- Original game concept, creative direction, and project ownership: **River**
- Development support, UI engineering, gameplay systems, balancing, effects, and production assistance: **OpenAI Codex**

## Music

The home theme and all six arena themes are instrumental tracks released under CC0 1.0. Each map has its own local track chosen to match its environment without covering dialogue or combat cues.

| Location | Track | Creator | Local file | License | Source |
| --- | --- | --- | --- | --- | --- |
| Home screen | “Dark Forest Theme” | The Cynic Project / cynicmusic | `Audio/HomeTheme.mp3` | CC0 1.0 | [OpenGameArt](https://opengameart.org/content/dark-forest-theme) |
| Oakwood Outpost | “JRPG Epic Rock Battle Theme #1” | HydroGene | `Audio/BattleTheme.mp3` | CC0 1.0 | [OpenGameArt](https://opengameart.org/content/jrpg-epic-rock-battle-theme-1) |
| Frostbite Basin | “8 bit lofi — Ice Cave” | TAD | `Audio/FrostbiteTheme.mp3` | CC0 1.0 | [OpenGameArt](https://opengameart.org/content/8-bit-lofi-ice-cave) |
| Squirrel Scrapworks | “Noisy Battle” | Some Weirdo | `Audio/ScrapworksTheme.ogg` | CC0 1.0 | [OpenGameArt](https://opengameart.org/content/noisy-battle) |
| Sunspire Canopy | “Prepare to Fight” | Basil | `Audio/SunspireTheme.mp3` | CC0 1.0 | [OpenGameArt](https://opengameart.org/content/prepare-to-fight) |
| Mooncap Grotto | “Mysterious Cave Theme Loop” | beardalaxy | `Audio/MooncapTheme.ogg` | CC0 1.0 | [OpenGameArt](https://opengameart.org/content/mysterious-cave-theme-loop) |
| Tempest Treetops | “Eye of the Storm” | Joth | `Audio/TempestTheme.mp3` | CC0 1.0 | [OpenGameArt](https://opengameart.org/content/eye-of-the-storm) |

Weapon blasts, relic activations, pickups, damage feedback, interface cues, and achievement sounds are generated procedurally in the game with the Web Audio API.

## Artwork and characters

- Original title-screen, fighter, arena, terrain, and interface imagery was created specifically for **Exploding Nuts: Acorn Uprising** under River's art direction with AI-assisted image production.
- `Pictures/Fighter_Crossfire_v1.png` is the original selection portrait for Twinshot, the dedicated dual-wield fighter, generated specifically for this project with AI-assisted image production and then integrated under River's art direction.
- Every one of the 81 upgrade choices has a distinct sourced SVG from [Game-icons.net](https://game-icons.net/) under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). The complete local-file, upstream-file, and author mapping is in `Pictures/UpgradeIcons/SOURCE.md`.
- The original squirrel character model, fighter hologram, character portraits, arena concepts, and woodland world-building assets were produced for this project.
- Unicode emoji glyphs used by the interface are rendered by the player's operating-system fonts and may look different between platforms.

## Technology and formats

- [Three.js](https://threejs.org/) powers real-time 3D rendering and is distributed under the MIT License.
- The project uses the open [glTF](https://www.khronos.org/gltf/) 3D asset format maintained by the Khronos Group.
- Browser audio playback and procedural sound effects use the HTML Audio and Web Audio APIs.
- Music discovery and source hosting: [OpenGameArt.org](https://opengameart.org/).

## License note

The seven music files are CC0 1.0. The upgrade icons are CC BY 3.0 and require the attribution documented in their source file. The rest of the original game code, artwork, characters, names, and project-specific assets remain part of the Exploding Nuts project unless a file states otherwise.
