import Alpine from 'alpinejs';
import { statisticsComponent } from './components/statisticsComponent.js';
// import { itemsComponent } from './components/itemsComponent.js';
import { partyState } from "./state/partyState.js";

window.Alpine = Alpine;

window.statisticsComponent = statisticsComponent;
// window.itemsComponent = itemsComponent;

Alpine.start();