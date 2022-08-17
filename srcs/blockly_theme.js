TEXT_CATEGORY_COLOUR = '#492B07';
LOOP_CATEGORY_COLOUR = '#330B0B';

Darker = Blockly.Theme.defineTheme("Darker", {
  base: Blockly.Themes.Zelos,

  // Set default font colours

  fontStyle: {
    family: "Roboto, serif",
    // weight: "bold",
    size: 12,
  },

  blockStyles: {
    // logic_blocks: {
    //   colourPrimary: LOGIC_CATEGORY_COLOUR,
    // },
    // loop_blocks: {
    //   colourPrimary: LOOP_CATEGORY_COLOUR,
    // },
    text_blocks: {
      colourPrimary: TEXT_CATEGORY_COLOUR,
      // sec
    },
    // math_blocks: {
    //   colourPrimary: MATH_CATEGORY_COLOUR,
    // },
    // list_blocks: {
    //   colourPrimary: LIST_CATEGORY_COLOUR,
    // },
    // colour_blocks: {
    //   colourPrimary: COLOR_CATEGORY_COLOUR,
    // },

    // variable_blocks: {
    //   colourPrimary: VARIABLE_CATEGORY_COLOUR,
    // },
    // procedure_blocks: {
    //   colourPrimary: PROCEDURE_CATEGORY_COLOUR,
    // },
  },

  componentStyles: {
    workspaceBackgroundColour: "#0C0C32",
    toolboxBackgroundColour: "#0C0C32",
    toolboxForegroundColour: "#fff",
    flyoutBackgroundColour: "#0A0A53",
    flyoutForegroundColour: "#0C0C32",
    flyoutOpacity: 0.5,
    scrollbarColour: "#229DDB",
    scrollbarOpacity: 0.2,
    insertionMarkerColour: "#fff",
    insertionMarkerOpacity: 0.3,
    cursorColour: "#0C0C32",
    // blackBackground: "#333",
  },
}).setBlockStyle("hat_blocks", {
  colourPrimary: "#1551A4", colourSecondary: "#4280D7", colourTertiary: "#3373CC",
  hat: "cap",
}).setStartHats(startHats);