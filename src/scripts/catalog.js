export const catalog = (harvestedObject) => {
    let harvestCatalogString = '';
    // harvestCatalogString += `<div>`

    for (const harvest of harvestedObject) {
        harvestCatalogString += `<section class="mf__harvest">${harvest.type}</section>`
    }
    // harvestCatalogString += `</div>`

    return harvestCatalogString
}