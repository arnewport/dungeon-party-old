import { partyState } from "../state/partyState.js";
import {
    calculateMaxHitPoints,
    calculateArmorClass,
    calculateSavingThrows,
    getBaseAttackBonus,
    getMeleeAttackBonus,
    getRangedAttackBonus,
    getAbilityModifier
} from "../util/calculations.js";
import { createCharacter } from "../models/character.js";

let activeTab = "combat";
const editableHpIds = new Set();
const confirmingDeleteIds = new Set();

/**
 * Main entry point to render the statistics view.
 */
export function renderStatisticsView() {
    const container = document.getElementById("statistics-section");
    container.innerHTML = "";
    renderTabs(container);

    // Tab button UI (optional)


    // Build column set
    let columns = [...generalColumns];
    if (activeTab === "combat") {
        columns.push(...combatColumns);
    } else if (activeTab === "saves") {
        columns.push(...saveColumns);
    } else if (activeTab === "abilities") {
        columns.push(...abilityColumns);
    }

    const table = document.createElement("table");
    table.className = "table table-striped table-bordered table-sm";

    const thead = createTableHeader(columns);
    const tbody = document.createElement("tbody");

    for (const character of partyState.characters) {
        const row = renderGeneralRow(character); // this must respect activeTab
        tbody.appendChild(row);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);

    const saveButton = document.createElement("button");
    saveButton.className = "btn btn-primary mt-3";
    saveButton.textContent = "Save All Changes";
    saveButton.onclick = handleSaveAll;
    container.appendChild(saveButton);

    const addRow = createAddCharacterRow();
    const addTbody = document.createElement("tbody");
    addTbody.appendChild(addRow);
    table.appendChild(addTbody);
}

function createAddCharacterRow() {
    const row = document.createElement("tr");

    const nameInput = createAddInput("name");
    const classInput = createAddSelect("class", [
        "cleric", "fighter", "magicUser", "thief",
        "dwarf", "elf", "halfling"
    ]);
    const levelInput = createAddInput("level", "number");
    const alignmentInput = createAddInput("alignment");

    row.appendChild(nameInput.td);
    row.appendChild(classInput.td);
    row.appendChild(levelInput.td);
    row.appendChild(alignmentInput.td);

    if (activeTab === "combat") {
        for (let i = 0; i < 6; i++) {
            row.appendChild(document.createElement("td"));
        }
    }

    if (activeTab === "saves") {
        for (let i = 0; i < 5; i++) {
            row.appendChild(document.createElement("td"));
        }
    }

    if (activeTab === "abilities") {
        for (let i = 0; i < 12; i++) {
            row.appendChild(document.createElement("td"));
        }
    }

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Character";
    addBtn.className = "btn btn-success btn-sm";
    addBtn.onclick = () => {
        const name = nameInput.input.value.trim();
        const charClass = classInput.input.value.trim();
        const level = parseInt(levelInput.input.value, 10);
        const alignment = alignmentInput.input.value.trim();

        if (!name || !charClass || isNaN(level)) return;

        const newChar = createCharacter(name, charClass);
        newChar.level = level;
        newChar.alignment = alignment;

        partyState.characters.push(newChar);
        renderStatisticsView();
    };

    const td = document.createElement("td");
    td.appendChild(addBtn);
    row.appendChild(td);

    return row;
}

function createAddInput(name, type = "text") {
    const td = document.createElement("td");
    const input = document.createElement("input");
    input.type = type;
    input.className = "form-control form-control-sm";
    td.appendChild(input);
    return { td, input };
}

function createAddSelect(name, options) {
    const td = document.createElement("td");
    const select = document.createElement("select");
    select.className = "form-select form-select-sm";

    for (const value of options) {
        const opt = document.createElement("option");
        opt.value = value;
        opt.textContent = value;
        select.appendChild(opt);
    }

    td.appendChild(select);
    return { td, input: select };
}

function createTableHeader(columns) {
    const thead = document.createElement("thead");
    const header = document.createElement("tr");

    for (const col of columns) {
        const th = document.createElement("th");
        th.textContent = col;
        header.appendChild(th);
    }

    thead.appendChild(header);
    return thead;
}

const generalColumns = ["Name", "Class", "Level", "Alignment"];
const combatColumns = ["Current HP", "Max HP", "Armor Class", "Atk Bonus", "Melee Bonus", "Ranged Bonus"];
const saveColumnMap = [
    { label: "Death", key: "death" },
    { label: "Wands", key: "wands" },
    { label: "Paralysis", key: "paralysis" },
    { label: "Breath", key: "breath" },
    { label: "Spells", key: "spells" }
];
const saveColumns = saveColumnMap.map(col => col.label);
const abilityColumnMap = [
    { label: "STR", key: "strength" },
    { label: "STR Mod", key: "strength" },
    { label: "INT", key: "intelligence" },
    { label: "INT Mod", key: "intelligence" },
    { label: "WIS", key: "wisdom" },
    { label: "WIS Mod", key: "wisdom" },
    { label: "DEX", key: "dexterity" },
    { label: "DEX Mod", key: "dexterity" },
    { label: "CON", key: "constitution" },
    { label: "CON Mod", key: "constitution" },
    { label: "CHA", key: "charisma" },
    { label: "CHA Mod", key: "charisma" }
];
const abilityColumns = abilityColumnMap.map(col => col.label);

function renderTabs(container) {
    const tabs = ["combat", "saves", "abilities"];
    const tabRow = document.createElement("div");
    tabRow.className = "mb-3";

    for (const tab of tabs) {
        const button = document.createElement("button");
        button.textContent = tab.charAt(0).toUpperCase() + tab.slice(1);
        button.className = `btn btn-sm me-2 ${activeTab === tab ? "btn-primary" : "btn-outline-primary"}`;
        button.onclick = () => {
            activeTab = tab;
            renderStatisticsView();
        };
        tabRow.appendChild(button);
    }

    container.appendChild(tabRow);
}

function renderGeneralRow(character) {
    const row = document.createElement("tr");

    row.appendChild(createCell(character.name));
    row.appendChild(createCell(character.class));
    row.appendChild(createCell(character.level));
    row.appendChild(createCell(character.alignment));

    if (activeTab === "combat") {
        row.appendChild(createEditableInputCell(
            character.currentHitPoints,
            character.id,
            "currentHitPoints"
        ));
        row.appendChild(createMaxHpCell(character));
        row.appendChild(createCell(calculateArmorClass(character)));
        row.appendChild(createCell(getBaseAttackBonus(character)));
        row.appendChild(createCell(getMeleeAttackBonus(character)));
        row.appendChild(createCell(getRangedAttackBonus(character)));
    }

    if (activeTab === "saves") {
        const saves = calculateSavingThrows(character);
        for (const { key } of saveColumnMap) {
            row.appendChild(createCell(saves[key].total));
        }
    }

    if (activeTab === "abilities") {
        for (const stat of ["strength", "intelligence", "wisdom", "dexterity", "constitution", "charisma"]) {
            row.appendChild(createEditableInputCell(
                character[stat],
                character.id,
                stat
            ));
            row.appendChild(createCell(getAbilityModifier(character[stat])));
        }
    }

    row.appendChild(createDeleteCell(character));

    return row;
}

function createMaxHpCell(character) {
    const td = document.createElement("td");

    if (editableHpIds.has(character.id)) {
        const input = document.createElement("input");
        input.type = "number";
        input.value = character.rolledHitPoints;
        input.className = "form-control form-control-sm";
        input.dataset.charId = character.id;
        input.dataset.field = "rolledHitPoints";

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "−";
        closeBtn.className = "btn btn-sm btn-secondary ms-2";
        closeBtn.onclick = () => {
            editableHpIds.delete(character.id);
            renderStatisticsView();
        };

        td.appendChild(input);
        td.appendChild(closeBtn);
    } else {
        const display = document.createElement("span");
        display.textContent = calculateMaxHitPoints(character).toString();
        display.classList.add("clickable");
        display.onclick = () => {
            editableHpIds.add(character.id);
            renderStatisticsView();
        };
        td.appendChild(display);
    }

    return td;
}

function createDeleteCell(character) {
    const td = document.createElement("td");

    if (confirmingDeleteIds.has(character.id)) {
        const confirmBtn = document.createElement("button");
        confirmBtn.className = "btn btn-sm btn-danger me-2";
        confirmBtn.textContent = "Confirm";
        confirmBtn.onclick = () => {
            partyState.characters = partyState.characters.filter(c => c.id !== character.id);
            renderStatisticsView();
        };

        const cancelBtn = document.createElement("button");
        cancelBtn.className = "btn btn-sm btn-secondary";
        cancelBtn.textContent = "Cancel";
        cancelBtn.onclick = () => {
            confirmingDeleteIds.delete(character.id);
            renderStatisticsView();
        };

        td.appendChild(confirmBtn);
        td.appendChild(cancelBtn);
    } else {
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-sm btn-outline-danger";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            confirmingDeleteIds.add(character.id);
            renderStatisticsView();
        };

        td.appendChild(deleteBtn);
    }

    return td;
}

function createCell(content) {
    const td = document.createElement("td");
    td.textContent = content;
    return td;
}

function createEditableInputCell(value, charId, fieldName) {
    const td = document.createElement("td");
    const input = document.createElement("input");
    input.type = "number";
    input.className = "form-control form-control-sm";
    input.value = value;
    input.dataset.charId = charId;
    input.dataset.field = fieldName;
    td.appendChild(input);
    return td;
}

function handleSaveAll() {
    const inputs = document.querySelectorAll("input[data-char-id][data-field]");

    for (const input of inputs) {
        const charId = input.dataset.charId;
        const field = input.dataset.field;
        const value = parseInt(input.value, 10);

        const character = partyState.characters.find(c => c.id === charId);
        if (character && !isNaN(value)) {
            character[field] = value;
        }
    }

    renderStatisticsView();
}
