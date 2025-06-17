export const generalColumns = [
    {
        key: 'name',
        label: 'Name',
        render: char => char.name
    },
    {
        key: 'class',
        label: 'Class',
        render: char => char.class
    }
];

export const combatColumns = [
    {
        key: 'hp',
        label: 'HP',
        render: char => char.hp
    },
    {
        key: 'ac',
        label: 'AC',
        render: char => char.ac
    }
];

export const saveColumns = [
    {
        key: 'fort',
        label: 'Fort',
        render: char => char.fort || '-'
    },
    {
        key: 'ref',
        label: 'Ref',
        render: char => char.ref || '-'
    }
];

export const abilityColumns = [
    {
        key: 'str',
        label: 'STR',
        render: char => char.str
    },
    {
        key: 'dex',
        label: 'DEX',
        render: char => char.dex
    },
    {
        key: 'con',
        label: 'CON',
        render: char => char.con
    },
    {
        key: 'int',
        label: 'INT',
        render: char => char.int
    },
    {
        key: 'wis',
        label: 'WIS',
        render: char => char.wis
    },
    {
        key: 'cha',
        label: 'CHA',
        render: char => char.cha
    }
];