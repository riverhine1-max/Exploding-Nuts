(function(){
'use strict';
const fighters=['rookie','blitz','boomer','frostbite','rivet','ember','volt','luna'];
const arenas=['oak','frost','scrap','solar','spore','storm'];
const sumRanks=m=>Object.values(m.armory||{}).reduce((sum,value)=>sum+(Number(value)||0),0);
const countPlayed=value=>Object.values(value||{}).filter(runs=>runs>0).length;
const minimumRuns=(value,ids)=>Math.min(...ids.map(id=>Number(value?.[id])||0));
const defs=[
 {id:'first_forage',tier:'standard',icon:'🌰',name:'First Forage',desc:'Collect 25 acorns across all runs.',target:25,value:m=>m.lifetimeAcorns},
 {id:'pocketful',tier:'standard',icon:'👜',name:'Pocketful of Trouble',desc:'Collect 250 lifetime acorns.',target:250,value:m=>m.lifetimeAcorns},
 {id:'burrow_stash',tier:'standard',icon:'📦',name:'Burrow Stash',desc:'Collect 1,000 lifetime acorns.',target:1000,value:m=>m.lifetimeAcorns},
 {id:'first_run',tier:'standard',icon:'🚩',name:'Into the Uprising',desc:'Complete your first run.',target:1,value:m=>m.runs},
 {id:'seasoned',tier:'standard',icon:'🎖️',name:'Seasoned Squirrel',desc:'Complete 10 runs.',target:10,value:m=>m.runs},
 {id:'wave_five',tier:'standard',icon:'🌊',name:'Wave Rider',desc:'Reach Wave 5.',target:5,value:m=>m.bestWave},
 {id:'wave_ten',tier:'standard',icon:'🌲',name:'Deep Roots',desc:'Reach Wave 10.',target:10,value:m=>m.bestWave},
 {id:'pest_control',tier:'standard',icon:'💥',name:'Pest Control',desc:'Defeat 100 enemies.',target:100,value:m=>m.lifetimeKills},
 {id:'exterminator',tier:'standard',icon:'🎯',name:'Woodland Exterminator',desc:'Defeat 500 enemies.',target:500,value:m=>m.lifetimeKills},
 {id:'scrapjaw',tier:'standard',icon:'👑',name:'Scrapjaw Down',desc:'Defeat your first boss.',target:1,value:m=>m.bossesDefeated},
 {id:'boss_hunter',tier:'standard',icon:'🦷',name:'Crown Collector',desc:'Defeat 5 bosses.',target:5,value:m=>m.bossesDefeated},
 {id:'combo_ten',tier:'standard',icon:'⛓️',name:'Chain Reaction',desc:'Reach a 10-hit combo.',target:10,value:m=>m.highestCombo},
 {id:'combo_twenty_five',tier:'standard',icon:'⚡',name:'Combo Artist',desc:'Reach a 25-hit combo.',target:25,value:m=>m.highestCombo},
 {id:'field_scholar',tier:'standard',icon:'🧲',name:'Magnetic Personality',desc:'Collect 1,000 battlefield acorn pickups.',target:1000,value:m=>m.pickupsCollected},
 {id:'mutation_habit',tier:'standard',icon:'🧬',name:'Mutation Habit',desc:'Confirm 25 run upgrades.',target:25,value:m=>m.upgradesChosen},
 {id:'four_arenas',tier:'standard',icon:'🧭',name:'Branching Out',desc:'Complete runs in 4 different arenas.',target:4,value:m=>countPlayed(m.arenasPlayed)},
 {id:'all_arenas',tier:'standard',icon:'🗺️',name:'Canopy Tour',desc:'Complete a run in every arena.',target:6,value:m=>countPlayed(m.arenasPlayed)},
 {id:'four_fighters',tier:'standard',icon:'🐿️',name:'Roster Call',desc:'Complete runs with 4 different fighters.',target:4,value:m=>countPlayed(m.fightersPlayed)},
 {id:'all_fighters',tier:'standard',icon:'🎒',name:'Full Burrow',desc:'Complete a run with every fighter.',target:8,value:m=>countPlayed(m.fightersPlayed)},
 {id:'first_armory',tier:'standard',icon:'🔧',name:'Burrow Armorer',desc:'Purchase a permanent Armory rank.',target:1,value:m=>sumRanks(m)},
 {id:'five_armory',tier:'standard',icon:'⚙️',name:'Workshop Regular',desc:'Purchase 5 permanent Armory ranks.',target:5,value:m=>sumRanks(m)},
 {id:'pickup_hunter',tier:'standard',icon:'🧲',name:'Treasure Hunter',desc:'Collect 250 battlefield acorn pickups.',target:250,value:m=>m.pickupsCollected},
 {id:'five_minutes',tier:'standard',icon:'⏱️',name:'Five-Minute Stand',desc:'Survive for 5 total minutes.',target:300,value:m=>m.totalSurvivalSeconds,format:'time'},
 {id:'flawless_wave',tier:'standard',icon:'✨',name:'Clean Paws',desc:'Survive a full wave without taking damage.',target:1,value:m=>m.flawlessWaves},
 {id:'big_haul',tier:'standard',icon:'💰',name:'Heavy Pockets',desc:'Bank 250 acorns in a single run.',target:250,value:m=>m.largestRunAcorns},
 {id:'hundred_run_kills',tier:'standard',icon:'🎯',name:'One-Squirrel Army',desc:'Defeat 100 enemies in a single run.',target:100,value:m=>m.maxKillsRun},
 {id:'wave_fifteen',tier:'legendary',icon:'🔥',name:'Apex Survivor',desc:'Reach Wave 15.',target:15,value:m=>m.bestWave},
 {id:'wave_twenty_five',tier:'legendary',icon:'☠️',name:'Endless Uprising',desc:'Reach Wave 25.',target:25,value:m=>m.bestWave},
 {id:'kills_2500',tier:'legendary',icon:'💣',name:'Population Control',desc:'Defeat 2,500 enemies.',target:2500,value:m=>m.lifetimeKills},
 {id:'bosses_twenty',tier:'legendary',icon:'🏆',name:'Throne Breaker',desc:'Defeat 20 bosses.',target:20,value:m=>m.bossesDefeated},
 {id:'combo_hundred',tier:'legendary',icon:'🌩️',name:'Unbroken Circuit',desc:'Reach a 100-hit combo.',target:100,value:m=>m.highestCombo},
 {id:'five_flawless',tier:'legendary',icon:'💎',name:'Untouchable',desc:'Survive 5 waves without taking damage.',target:5,value:m=>m.flawlessWaves},
 {id:'flawless_boss',tier:'legendary',icon:'👻',name:'Perfect Predator',desc:'Defeat a boss without taking damage that wave.',target:1,value:m=>m.flawlessBosses},
 {id:'mayhem_ten',tier:'legendary',icon:'🩸',name:'Mayhem Master',desc:'Reach Wave 10 on Mayhem difficulty.',target:10,value:m=>m.difficultyBest.mayhem||0},
 {id:'apocalypse_ten',tier:'legendary',icon:'🌋',name:'Nutpocalypse Now',desc:'Reach Wave 10 on Nutpocalypse difficulty.',target:10,value:m=>m.difficultyBest.apocalypse||0},
 {id:'max_armory',tier:'legendary',icon:'🛠️',name:'Master of the Workshop',desc:'Purchase every Burrow Armory rank.',target:9,value:m=>sumRanks(m)},
 {id:'fighter_loyalty',tier:'legendary',icon:'🎭',name:'Eight Lives, Three Times',desc:'Complete 3 runs with every fighter.',target:3,value:m=>minimumRuns(m.fightersPlayed,fighters)},
 {id:'arena_mastery',tier:'legendary',icon:'🌐',name:'Home Field Everywhere',desc:'Complete 5 runs in every arena.',target:5,value:m=>minimumRuns(m.arenasPlayed,arenas)},
 {id:'acorn_tycoon',tier:'legendary',icon:'🏦',name:'Acorn Tycoon',desc:'Collect 10,000 lifetime acorns.',target:10000,value:m=>m.lifetimeAcorns},
 {id:'hour_survivor',tier:'legendary',icon:'⌛',name:'The Long Uprising',desc:'Survive for one total hour.',target:3600,value:m=>m.totalSurvivalSeconds,format:'time'},
 {id:'run_kills_500',tier:'legendary',icon:'🚨',name:'No Room Left in the Forest',desc:'Defeat 500 enemies in one run.',target:500,value:m=>m.maxKillsRun}
];
function normalize(meta={}){const oldAcorns=Number(meta.totalAcorns)||0,playedFighters=Object.keys(meta.fightersPlayed||{}),playedMaps=Object.keys(meta.arenasPlayed||{}),fighterUnlocks=Array.isArray(meta.unlockedFighters)?meta.unlockedFighters:playedFighters,mapUnlocks=Array.isArray(meta.unlockedMaps)?meta.unlockedMaps:playedMaps;return{...meta,bestWave:Number(meta.bestWave)||0,totalAcorns:oldAcorns,lifetimeAcorns:meta.lifetimeAcorns==null?oldAcorns:Number(meta.lifetimeAcorns)||0,runs:Number(meta.runs)||0,lifetimeKills:Number(meta.lifetimeKills)||0,bossesDefeated:Number(meta.bossesDefeated)||0,highestCombo:Number(meta.highestCombo)||0,pickupsCollected:Number(meta.pickupsCollected)||0,totalSurvivalSeconds:Number(meta.totalSurvivalSeconds)||0,flawlessWaves:Number(meta.flawlessWaves)||0,flawlessBosses:Number(meta.flawlessBosses)||0,upgradesChosen:Number(meta.upgradesChosen)||0,largestRunAcorns:Number(meta.largestRunAcorns)||0,maxKillsRun:Number(meta.maxKillsRun)||0,arenasPlayed:meta.arenasPlayed||{},fightersPlayed:meta.fightersPlayed||{},difficultyBest:meta.difficultyBest||{},armory:meta.armory||{},unlockedAchievements:Array.isArray(meta.unlockedAchievements)?meta.unlockedAchievements:[],unlockedFighters:[...new Set(['rookie',...fighterUnlocks.filter(id=>fighters.includes(id))])],unlockedMaps:[...new Set(['oak',...mapUnlocks.filter(id=>arenas.includes(id))])]};}
function progress(def,meta){const value=Math.max(0,Number(def.value(meta))||0);return{value,target:def.target,ratio:Math.min(1,value/def.target),unlocked:value>=def.target};}
function evaluate(meta){const unlocked=new Set(meta.unlockedAchievements||[]),newly=[];for(const def of defs){if(progress(def,meta).unlocked&&!unlocked.has(def.id)){unlocked.add(def.id);newly.push(def)}}meta.unlockedAchievements=[...unlocked];return newly;}
function formatValue(value,format){if(format==='time'){const minutes=Math.floor(value/60),seconds=Math.floor(value%60);return minutes+'m '+seconds+'s'}return Math.floor(value).toLocaleString();}
window.ENAchievements={defs,normalize,progress,evaluate,formatValue,fighters,arenas};
})();
