// Jquery Starter 
$(document).ready(function() {
  // Icon set
  const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

  const colors = [
    'blue',
    'orange',
    'purple'
  ];

  // Icons container
  const container = $('.icons');

  // Print Icon with color
  const coloredIcons = colorIcons(icons, colors);
  printIcons(coloredIcons, container);

   // Filter by icons 
   const select = $('#type');
   const types = getType(icons);
  // gen options 
  genOption(types, select);

  // event change 
  select.change(() => {
    const selected = select.val();

    const filteredIcons = filterIcons(coloredIcons, selected);
    printIcons(filteredIcons, container);
  });
});  // <- End Jquery



/***************************************************************************
 * FUNCTIONS
***************************************************************************/

/**
 * PRINT ICONS ON SCREEN
 */
function printIcons(icons, container) {

  // Previous output 
  container.html('');

  icons.forEach((icon) => {
    const {family, prefix, name, color} = icon;

    const html = 
    `<div class="icon">
        <i 
          class="${family} ${prefix}${name}" 
          style="color: ${color}">
        </i>
        <div class="title">${name}</div>
    </div>`;

    container.append(html);
  });
}



/**
 * COLORED ICONS
 */
function colorIcons(icons, colors) {

  // Get types
  const types = getType(icons);

  // Assign color by types
  const coloredIcons = icons.map((icon) => {
    const indexType = types.indexOf(icon.type);

    return {
      ...icon,
      color: colors[indexType]
    };
  });

  return coloredIcons;
}
    


/**
 * ICON TYPE FUNCTIONS 
 */
function getType(icons) {

  const types = [];

  icons.forEach((icon) => {
    if (! types.includes(icon.type)) {
        types.push(icon.type);
    }
  });

  return types;
}



/**
 * GEN OPTIONS BY TYPE
 */
function genOption(types, select) {

  types.forEach((opt) => {
    select.append(`<option value="${opt}">${opt}</option>`);
  });
}



/**
 * FILTER ICONS DISPLAY
 */
function filterIcons(coloredIcons, selected) {

  if (selected === 'all') {
    return coloredIcons;
  }

  const filtered = coloredIcons.filter((icon) => {
    return icon.type === selected;
  });

  return filtered;
}


