export const attackBonusTables = {
    fighterGroup: {
        1: 0, 2: 0, 3: 0,
        4: 2, 5: 2, 6: 2,
        7: 5, 8: 5, 9: 5,
        10: 7, 11: 7, 12: 7,
        13: 9, 14: 9
    },
    clericThiefGroup: {
        1: 0, 2: 0, 3: 0, 4: 0,
        5: 2, 6: 2, 7: 2, 8: 2,
        9: 5, 10: 5, 11: 5, 12: 5,
        13: 7, 14: 7
    },
    magicUserGroup: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
        6: 2, 7: 2, 8: 2, 9: 2, 10: 2,
        11: 5, 12: 5, 13: 5, 14: 5
    }
};

export const classToAttackTableKey = {
    cleric: "clericThiefGroup",
    thief: "clericThiefGroup",
    fighter: "fighterGroup",
    dwarf: "fighterGroup",
    halfling: "fighterGroup",
    elf: "fighterGroup",
    magicUser: "magicUserGroup"
};

export const savingThrowTables = {
    cleric: {
        1: { death: 11, wands: 12, paralysis: 14, breath: 16, spells: 15 },
        2: { death: 11, wands: 12, paralysis: 14, breath: 16, spells: 15 },
        3: { death: 11, wands: 12, paralysis: 14, breath: 16, spells: 15 },
        4: { death: 11, wands: 12, paralysis: 14, breath: 16, spells: 15 },
        5: { death: 9,  wands: 10, paralysis: 12, breath: 14, spells: 12 },
        6: { death: 9,  wands: 10, paralysis: 12, breath: 14, spells: 12 },
        7: { death: 9,  wands: 10, paralysis: 12, breath: 14, spells: 12 },
        8: { death: 9,  wands: 10, paralysis: 12, breath: 14, spells: 12 },
        9: { death: 6,  wands: 7,  paralysis: 9,  breath: 11, spells: 9 },
        10:{ death: 6,  wands: 7,  paralysis: 9,  breath: 11, spells: 9 },
        11:{ death: 6,  wands: 7,  paralysis: 9,  breath: 11, spells: 9 },
        12:{ death: 6,  wands: 7,  paralysis: 9,  breath: 11, spells: 9 },
        13:{ death: 3,  wands: 5,  paralysis: 7,  breath: 8,  spells: 7 },
        14:{ death: 3,  wands: 5,  paralysis: 7,  breath: 8,  spells: 7 }
    },
    fighter: {
        1: { death: 12, wands: 13, paralysis: 14, breath: 15, spells: 16 },
        2: { death: 12, wands: 13, paralysis: 14, breath: 15, spells: 16 },
        3: { death: 12, wands: 13, paralysis: 14, breath: 15, spells: 16 },
        4: { death: 10, wands: 11, paralysis: 12, breath: 13, spells: 14 },
        5: { death: 10, wands: 11, paralysis: 12, breath: 13, spells: 14 },
        6: { death: 10, wands: 11, paralysis: 12, breath: 13, spells: 14 },
        7: { death: 8,  wands: 9,  paralysis: 10, breath: 10, spells: 12 },
        8: { death: 8,  wands: 9,  paralysis: 10, breath: 10, spells: 12 },
        9: { death: 8,  wands: 9,  paralysis: 10, breath: 10, spells: 12 },
        10:{ death: 6,  wands: 7,  paralysis: 8,  breath: 8,  spells: 10 },
        11:{ death: 6,  wands: 7,  paralysis: 8,  breath: 8,  spells: 10 },
        12:{ death: 6,  wands: 7,  paralysis: 8,  breath: 8,  spells: 10 },
        13:{ death: 4,  wands: 5,  paralysis: 6,  breath: 5,  spells: 8 },
        14:{ death: 4,  wands: 5,  paralysis: 6,  breath: 5,  spells: 8 }
    },
    magicUser: {
        1: { death: 13, wands: 14, paralysis: 13, breath: 16, spells: 15 },
        2: { death: 13, wands: 14, paralysis: 13, breath: 16, spells: 15 },
        3: { death: 13, wands: 14, paralysis: 13, breath: 16, spells: 15 },
        4: { death: 13, wands: 14, paralysis: 13, breath: 16, spells: 15 },
        5: { death: 13, wands: 14, paralysis: 13, breath: 16, spells: 15 },
        6: { death: 11, wands: 12, paralysis: 11, breath: 14, spells: 12 },
        7: { death: 11, wands: 12, paralysis: 11, breath: 14, spells: 12 },
        8: { death: 11, wands: 12, paralysis: 11, breath: 14, spells: 12 },
        9: { death: 11, wands: 12, paralysis: 11, breath: 14, spells: 12 },
        10:{ death: 11, wands: 12, paralysis: 11, breath: 14, spells: 12 },
        11:{ death: 8,  wands: 9,  paralysis: 8,  breath: 11, spells: 8 },
        12:{ death: 8,  wands: 9,  paralysis: 8,  breath: 11, spells: 8 },
        13:{ death: 8,  wands: 9,  paralysis: 8,  breath: 11, spells: 8 },
        14:{ death: 8,  wands: 9,  paralysis: 8,  breath: 11, spells: 8 }
    },
    thief: {
        1: { death: 13, wands: 14, paralysis: 13, breath: 16, spells: 15 },
        2: { death: 13, wands: 14, paralysis: 13, breath: 16, spells: 15 },
        3: { death: 13, wands: 14, paralysis: 13, breath: 16, spells: 15 },
        4: { death: 13, wands: 14, paralysis: 13, breath: 16, spells: 15 },
        5: { death: 12, wands: 13, paralysis: 11, breath: 14, spells: 13 },
        6: { death: 12, wands: 13, paralysis: 11, breath: 14, spells: 13 },
        7: { death: 12, wands: 13, paralysis: 11, breath: 14, spells: 13 },
        8: { death: 12, wands: 13, paralysis: 11, breath: 14, spells: 13 },
        9: { death: 10, wands: 11, paralysis: 9,  breath: 12, spells: 10 },
        10:{ death: 10, wands: 11, paralysis: 9,  breath: 12, spells: 10 },
        11:{ death: 10, wands: 11, paralysis: 9,  breath: 12, spells: 10 },
        12:{ death: 10, wands: 11, paralysis: 9,  breath: 12, spells: 10 },
        13:{ death: 8,  wands: 9,  paralysis: 7,  breath: 10, spells: 8 },
        14:{ death: 8,  wands: 9,  paralysis: 7,  breath: 10, spells: 8 }
    },
    dwarfHalfling: {
        1:  { death: 8,  wands: 9,  paralysis: 10, breath: 13, spells: 12 },
        2:  { death: 8,  wands: 9,  paralysis: 10, breath: 13, spells: 12 },
        3:  { death: 8,  wands: 9,  paralysis: 10, breath: 13, spells: 12 },
        4:  { death: 6,  wands: 7,  paralysis: 8,  breath: 10, spells: 10 },
        5:  { death: 6,  wands: 7,  paralysis: 8,  breath: 10, spells: 10 },
        6:  { death: 6,  wands: 7,  paralysis: 8,  breath: 10, spells: 10 },
        7:  { death: 4,  wands: 5,  paralysis: 6,  breath: 7,  spells: 8 },
        8:  { death: 4,  wands: 5,  paralysis: 6,  breath: 7,  spells: 8 },
        9:  { death: 4,  wands: 5,  paralysis: 6,  breath: 7,  spells: 8 },
        10: { death: 2,  wands: 3,  paralysis: 4,  breath: 4,  spells: 6 },
        11: { death: 2,  wands: 3,  paralysis: 4,  breath: 4,  spells: 6 },
        12: { death: 2,  wands: 3,  paralysis: 4,  breath: 4,  spells: 6 }
    },
    elf: {
        1:  { death: 12, wands: 13, paralysis: 13, breath: 15, spells: 15 },
        2:  { death: 12, wands: 13, paralysis: 13, breath: 15, spells: 15 },
        3:  { death: 12, wands: 13, paralysis: 13, breath: 15, spells: 15 },
        4:  { death: 10, wands: 11, paralysis: 11, breath: 13, spells: 12 },
        5:  { death: 10, wands: 11, paralysis: 11, breath: 13, spells: 12 },
        6:  { death: 10, wands: 11, paralysis: 11, breath: 13, spells: 12 },
        7:  { death: 8,  wands: 9,  paralysis: 9,  breath: 10, spells: 10 },
        8:  { death: 8,  wands: 9,  paralysis: 9,  breath: 10, spells: 10 },
        9:  { death: 8,  wands: 9,  paralysis: 9,  breath: 10, spells: 10 },
        10: { death: 6,  wands: 7,  paralysis: 8,  breath: 8,  spells: 8 }
    }
};

export const classToSavingThrowKey = {
    cleric: "cleric",
    magicUser: "magicUser",
    thief: "thief",
    fighter: "fighter",
    dwarf: "dwarfHalfling",
    halfling: "dwarfHalfling",
    elf: "elf"
};

export const spellSlotTables = {
    cleric: {
        1:  {},
        2:  { 1: 1 },
        3:  { 1: 2 },
        4:  { 1: 2, 2: 1 },
        5:  { 1: 2, 2: 2 },
        6:  { 1: 2, 2: 2, 3: 1, 4: 1 },
        7:  { 1: 2, 2: 2, 3: 2, 4: 1, 5: 1 },
        8:  { 1: 3, 2: 3, 3: 2, 4: 2, 5: 1 },
        9:  { 1: 3, 2: 3, 3: 3, 4: 2, 5: 2 },
        10: { 1: 4, 2: 4, 3: 3, 4: 3, 5: 2 },
        11: { 1: 4, 2: 4, 3: 4, 4: 3, 5: 3 },
        12: { 1: 5, 2: 5, 3: 4, 4: 4, 5: 3 },
        13: { 1: 5, 2: 5, 3: 5, 4: 4, 5: 4 },
        14: { 1: 6, 2: 5, 3: 5, 4: 5, 5: 4 }
    },

    magicUser: {
        1:  { 1: 1 },
        2:  { 1: 2 },
        3:  { 1: 2, 2: 1 },
        4:  { 1: 2, 2: 2 },
        5:  { 1: 2, 2: 2, 3: 1 },
        6:  { 1: 2, 2: 2, 3: 2 },
        7:  { 1: 3, 2: 2, 3: 2, 4: 1 },
        8:  { 1: 3, 2: 3, 3: 2, 4: 2 },
        9:  { 1: 3, 2: 3, 3: 3, 4: 2, 5: 1 },
        10: { 1: 3, 2: 3, 3: 3, 4: 3, 5: 2 },
        11: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1 },
        12: { 1: 4, 2: 4, 3: 3, 4: 3, 5: 3, 6: 2 },
        13: { 1: 4, 2: 4, 3: 4, 4: 3, 5: 3, 6: 3 },
        14: { 1: 4, 2: 4, 3: 4, 4: 4, 5: 3, 6: 3 }
    }
};

export const classToSpellSlotKey = {
    cleric: "cleric",
    magicUser: "magicUser",
    elf: "magicUser" // per your earlier instruction
};

export const arcaneSpells = [
    // 1st Level
    { name: "Charm Person", level: 1 },
    { name: "Detect Magic", level: 1 },
    { name: "Floating Disc", level: 1 },
    { name: "Hold Portal", level: 1 },
    { name: "Light (Darkness)", level: 1 },
    { name: "Magic Missile", level: 1 },
    { name: "Protection from Evil", level: 1 },
    { name: "Read Languages", level: 1 },
    { name: "Read Magic", level: 1 },
    { name: "Shield", level: 1 },
    { name: "Sleep", level: 1 },
    { name: "Ventriloquism", level: 1 },

    // 2nd Level
    { name: "Continual Light (Continual Darkness)", level: 2 },
    { name: "Detect Evil", level: 2 },
    { name: "Detect Invisible", level: 2 },
    { name: "ESP", level: 2 },
    { name: "Invisibility", level: 2 },
    { name: "Knock", level: 2 },
    { name: "Levitate", level: 2 },
    { name: "Locate Object", level: 2 },
    { name: "Mirror Image", level: 2 },
    { name: "Phantasmal Force", level: 2 },
    { name: "Web", level: 2 },
    { name: "Wizard Lock", level: 2 },

    // 3rd Level
    { name: "Clairvoyance", level: 3 },
    { name: "Dispel Magic", level: 3 },
    { name: "Fire Ball", level: 3 },
    { name: "Fly", level: 3 },
    { name: "Haste", level: 3 },
    { name: "Hold Person", level: 3 },
    { name: "Infravision", level: 3 },
    { name: "Invisibility 10’ Radius", level: 3 },
    { name: "Lightning Bolt", level: 3 },
    { name: "Protection from Evil 10’ Radius", level: 3 },
    { name: "Protection from Normal Missiles", level: 3 },
    { name: "Water Breathing", level: 3 },

    // 4th Level
    { name: "Charm Monster", level: 4 },
    { name: "Confusion", level: 4 },
    { name: "Dimension Door", level: 4 },
    { name: "Growth of Plants", level: 4 },
    { name: "Hallucinatory Terrain", level: 4 },
    { name: "Massmorph", level: 4 },
    { name: "Polymorph Others", level: 4 },
    { name: "Polymorph Self", level: 4 },
    { name: "Remove Curse (Curse)", level: 4 },
    { name: "Wall of Fire", level: 4 },
    { name: "Wall of Ice", level: 4 },
    { name: "Wizard Eye", level: 4 },

    // 5th Level
    { name: "Animate Dead", level: 5 },
    { name: "Cloudkill", level: 5 },
    { name: "Conjure Elemental", level: 5 },
    { name: "Contact Higher Plane", level: 5 },
    { name: "Feeblemind", level: 5 },
    { name: "Hold Monster", level: 5 },
    { name: "Magic Jar", level: 5 },
    { name: "Pass-Wall", level: 5 },
    { name: "Telekinesis", level: 5 },
    { name: "Teleport", level: 5 },
    { name: "Transmute Rock to Mud (Mud to Rock)", level: 5 },
    { name: "Wall of Stone", level: 5 },

    // 6th Level
    { name: "Anti-Magic Shell", level: 6 },
    { name: "Control Weather", level: 6 },
    { name: "Death Spell", level: 6 },
    { name: "Disintegrate", level: 6 },
    { name: "Geas (Remove Geas)", level: 6 },
    { name: "Invisible Stalker", level: 6 },
    { name: "Lower Water", level: 6 },
    { name: "Move Earth", level: 6 },
    { name: "Part Water", level: 6 },
    { name: "Projected Image", level: 6 },
    { name: "Reincarnation", level: 6 },
    { name: "Stone to Flesh (Flesh to Stone)", level: 6 }
];

export const divineSpells = [
    // 1st Level
    { name: "Cure Light Wounds (Cause Lt. Wounds)", level: 1 },
    { name: "Detect Evil", level: 1 },
    { name: "Detect Magic", level: 1 },
    { name: "Light (Darkness)", level: 1 },
    { name: "Protection from Evil", level: 1 },
    { name: "Purify Food and Water", level: 1 },
    { name: "Remove Fear (Cause Fear)", level: 1 },
    { name: "Resist Cold", level: 1 },

    // 2nd Level
    { name: "Bless (Blight)", level: 2 },
    { name: "Find Traps", level: 2 },
    { name: "Hold Person", level: 2 },
    { name: "Know Alignment", level: 2 },
    { name: "Resist Fire", level: 2 },
    { name: "Silence 15’ Radius", level: 2 },
    { name: "Snake Charm", level: 2 },
    { name: "Speak with Animals", level: 2 },

    // 3rd Level
    { name: "Continual Light (Continual Darkness)", level: 3 },
    { name: "Cure Disease (Cause Disease)", level: 3 },
    { name: "Growth of Animal", level: 3 },
    { name: "Locate Object", level: 3 },
    { name: "Remove Curse (Curse)", level: 3 },
    { name: "Striking", level: 3 },

    // 4th Level
    { name: "Create Water", level: 4 },
    { name: "Cure Serious Wounds (Cause Sr. Wounds)", level: 4 },
    { name: "Neutralize Poison", level: 4 },
    { name: "Protection from Evil 10’ Radius", level: 4 },
    { name: "Speak with Plants", level: 4 },
    { name: "Sticks to Snakes", level: 4 },

    // 5th Level
    { name: "Commune", level: 5 },
    { name: "Create Food", level: 5 },
    { name: "Dispel Evil", level: 5 },
    { name: "Insect Plague", level: 5 },
    { name: "Quest (Remove Quest)", level: 5 },
    { name: "Raise Dead (Finger of Death)", level: 5 }
];
