import { partyState } from "../state/partyState.js";

/**
 * Renders the main inventory card view.
 */
export function renderItemsView() {
    const container = document.getElementById("inventory-section");
    container.innerHTML = "";

    const allHolders = [...partyState.characters, { name: "Limbo" }, { name: "Storage" }];
    const grid = document.createElement("div");
    grid.className = "inventory-grid";

    for (const holder of allHolders) {
        grid.appendChild(createInventoryCard(holder));
    }

    container.appendChild(grid);
}

/**
 * Creates an inventory card for a character or location.
 * @param {Object} holder Character object or zone placeholder
 * @returns {HTMLElement}
 */
function createInventoryCard(holder) {
    const card = document.createElement("div");
    card.className = "inventory-card";

    const title = document.createElement("h5");
    title.textContent = holder.name;
    card.appendChild(title);

    const itemGrid = document.createElement("div");
    itemGrid.className = "item-grid";

    const items = holder.items || [];

    for (let i = 0; i < 10; i++) {
        const item = items[i];
        const slot = document.createElement("div");
        slot.className = "item-slot";
        slot.textContent = item ? item.name : "";
        itemGrid.appendChild(slot);
    }

    card.appendChild(itemGrid);
    return card;
}
