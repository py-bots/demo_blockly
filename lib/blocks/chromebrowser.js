Blockly.Blocks["chrome_instance_v2"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Chrome ||")
      .appendField("Dummy:")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "dummy_browser")
      .appendField("Incognito :")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "incognito")
      .appendField("Profile :")
      .appendField(new Blockly.FieldTextInput("Default"), "profile");
    this.appendValueInput("chrome_driver").setCheck(null);
    this.appendValueInput("selenium_driver").setCheck(null);
    this.appendStatementInput("chrome_actions").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to create a Chrome browser instance.
    ____________________________________________
    Inputs:
    ${'````````'}
  
    DummyBrowser - A boolean value indicating whether to use a dummy browser. Example : True

    Incognito - A boolean value indicating whether to use an incognito browser. Example : False
    ____________________________________________
    Returns:
    ${'```````````'}
    None
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_instance_v2"] = function (block) {
  var checkbox_dummy_browser = block.getFieldValue("dummy_browser") === "TRUE";
  var checkbox_incognito = block.getFieldValue("incognito") === "TRUE";
  var text_profile = block.getFieldValue("profile");
  var value_chrome_driver = Blockly.Python.valueToCode(
    block,
    "chrome_driver",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_selenium_driver = Blockly.Python.valueToCode(
    block,
    "selenium_driver",
    Blockly.Python.ORDER_ATOMIC
  );

  var statements_chrome_actions = Blockly.Python.statementToCode(
    block,
    "chrome_actions"
  );

  if (statements_chrome_actions.length > 0) {
    statements_chrome_actions = statements_chrome_actions.replace(
      /chrome/g,
      value_chrome_driver
    );
  }

  var code = `def run_browser():\n  ${value_chrome_driver}=ap.ChromeBrowser()\n  [status, ${value_selenium_driver}] = ${value_chrome_driver}.open_browser(${capitalize(
    checkbox_dummy_browser.toString()
  )}, "${text_profile}", ${capitalize(
    checkbox_incognito.toString()
  )})\n${statements_chrome_actions}  ${value_chrome_driver}.close()\nrun_browser()\n`;
  return code;
};

Blockly.Blocks["chrome_instance"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Chrome ||")
      .appendField("Dummy:")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "dummy_browser")
      .appendField("Incognito :")
      .appendField(new Blockly.FieldCheckbox("TRUE"), "incognito")
      .appendField("Profile :")
      .appendField(new Blockly.FieldTextInput("Default"), "profile");
    this.appendValueInput("chrome_driver").setCheck(null);
    this.appendStatementInput("chrome_actions").setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to create a Chrome browser instance.
    ____________________________________________
    Inputs:
    ${'````````'}
    
    DummyBrowser - A boolean value indicating whether to use a dummy browser. Example : False (uses your regular browser profile)

    Incognito - A boolean value indicating whether to use an incognito browser. Example : False
    ____________________________________________
    Returns:
    ${'```````````'}
    None
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_instance"] = function (block) {
  var checkbox_dummy_browser = block.getFieldValue("dummy_browser") === "TRUE";
  var checkbox_incognito = block.getFieldValue("incognito") === "TRUE";
  var text_profile = block.getFieldValue("profile");
  var value_chrome_driver = Blockly.Python.valueToCode(
    block,
    "chrome_driver",
    Blockly.Python.ORDER_ATOMIC
  );
  var statements_chrome_actions = Blockly.Python.statementToCode(
    block,
    "chrome_actions"
  );

  if (statements_chrome_actions.length > 0) {
    statements_chrome_actions = statements_chrome_actions.replace(
      /chrome/g,
      value_chrome_driver
    );
  }

  var code = `def run_browser():\n  ${value_chrome_driver}=ap.ChromeBrowser()\n  ${value_chrome_driver}.open_browser(${capitalize(
    checkbox_dummy_browser.toString()
  )}, "${text_profile}", ${capitalize(
    checkbox_incognito.toString()
  )})\n${statements_chrome_actions}  ${value_chrome_driver}.close()\nrun_browser()\n`;
  return code;
};

Blockly.Blocks["chrome_navigate"] = {
  init: function () {
    this.appendValueInput("NAME")
      .setCheck("String")
      .appendField("Go to url ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to navigate to a desired website url.
    ____________________________________________
    Inputs:
    ${'````````'}
    URL - The website url to navigate to. Example : https://www.google.com
    ____________________________________________
    Returns:
    ${'```````````'}
    The website would be navigated to.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};


Blockly.Python["chrome_navigate"] = function (block) {
  var value_name = Blockly.Python.valueToCode(
    block,
    "NAME",
    Blockly.Python.ORDER_ATOMIC
  );
  var code = `chrome.navigate(${value_name})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_download_path"] = {
  init: function () {
    this.appendValueInput("download_path")
      .setCheck("String")
      .appendField("Set Download Path ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to set the download path for the chrome browser.
    ____________________________________________
    Inputs:
    ${'````````'}
    Path - The path to set the download path to. Example : C:\\Users\\Downloads
    ____________________________________________
    Returns:
    ${'```````````'}
    The download path would be set to the given path.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_download_path"] = function (block) {
  var value_name = Blockly.Python.valueToCode(
    block,
    "download_path",
    Blockly.Python.ORDER_ATOMIC
  );
  var code = `chrome.set_download_path(path=${value_name})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_write"] = {
  init: function () {
    this.appendValueInput("text").setCheck("String").appendField("Write ||");
    this.appendValueInput("user_visible_text_element")
      .setCheck("String")
      .appendField("in field name ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to write text in a given field of the chrome browser page.
    ____________________________________________
    Inputs:
    ${'````````'}
    Text - The text to write in the field. Example : "Hello World"

    Field Name - The name of the field to write in. Example : search_box
    ____________________________________________
    Returns:
    ${'```````````'}
    The text would be written in the given field.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_write"] = function (block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    "text",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_user_visible_text_element = Blockly.Python.valueToCode(
    block,
    "user_visible_text_element",
    Blockly.Python.ORDER_ATOMIC
  );
  var code = `chrome.write(${value_text}, ${value_user_visible_text_element})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['chrome_mouse_click_v2'] = {
  init: function () {
    this.appendValueInput("value")
      .setCheck("String")
      .appendField("Mouse Click |")
      .appendField("On");
    this.appendDummyInput()
      .appendField("|| Click Type")
      .appendField(new Blockly.FieldDropdown([["Single", "single"], ["Double", "double"], ["Right", "right"], ["Hover", "hover"]]), "action_type");
    this.appendDummyInput()
      .appendField("|| Value Type")
      .appendField(new Blockly.FieldDropdown([["Text", "t"],
      ["Link", "l"],
      ["ListItem", "li"],
      ["Button", "b"],
      ["Image", "i"],
      ["TextField", "tf"],
      ["ComboBox", "cob"],
      ["Checkbox", "chb"],
      ["RadioButton", "rd"],
      ["XPath", "xpath"]]), "value_type");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#611BD1");
    this.setTooltip(` 
    Description:
    ${'````````````````'}
    This block is used to click on a given text or element in the chrome browser page.
    ____________________________________________
    Inputs:
    ${'````````'}
    Click Type - The type of click (Single, Double, Right, Hover) to perform. Example : Single

    Value Type - The element (Text, Button, Link, Checkbox, Radio, Image, XPath) to click on. Example : Text
    ____________________________________________
    Returns:
    ${'```````````'}
    The element would be clicked on.
    ____________________________________________
    `);

    this.setHelpUrl("");
  }
};

Blockly.Python['chrome_mouse_click_v2'] = function (block) {
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var dropdown_action_type = block.getFieldValue('action_type');
  var dropdown_value_type = block.getFieldValue('value_type');
  var code = `chrome.mouse_v2(value=${value_value}, action_type = "${dropdown_action_type}", value_type = "${dropdown_value_type}")\n`;
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks["chrome_check_exists"] = {
  init: function () {
    this.appendValueInput("text")
      .setCheck("String")
      .appendField("Check If ||")
      .appendField(
        new Blockly.FieldDropdown([
          ["Text", "t"],
          ["Link", "l"],
          ["ListItem", "li"],
          ["Button", "b"],
          ["Image", "i"],
          ["TextField", "tf"],
          ["ComboBox", "cob"],
          ["Checkbox", "chb"],
          ["RadioButton", "rd"],
        ]),
        "element"
      );
    this.appendDummyInput()
      .appendField("exists");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to check if a given text or element exists in the chrome browser page.
    ____________________________________________
    Inputs:
    ${'````````'}
    Value Type - The element (Text, Button, Link, Image, ListItem) to check if exists. Example : Text
    ____________________________________________
    Returns:
    ${'```````````'}
    The element would be checked if exists.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_check_exists"] = function (block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    "text",
    Blockly.Python.ORDER_ATOMIC
  );
  var dropdown_element = block.getFieldValue("element");
  var code = `chrome.check_if(${value_text}, "${dropdown_element}")\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_wait_until"] = {
  init: function () {
    this.appendValueInput("text")
      .setCheck("String")
      .appendField("Wait until ||");
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["Text", "t"],
          ["Button", "b"],
          ["Link", "l"],
          ["Image", "i"],
          ["ListItem", "li"],
        ]),
        "element"
      )
      .appendField("appears");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to wait until a given text or element appears in the chrome browser page.
    ____________________________________________
    Inputs:
    ${'````````'}
    Value Type - The element (Text, Button, Link, Image, ListItem) to wait until appears. Example : Text
    ____________________________________________
    Returns:
    ${'```````````'}
    The element would be checked if exists.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_wait_until"] = function (block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    "text",
    Blockly.Python.ORDER_ATOMIC
  );
  var dropdown_element = block.getFieldValue("element");
  var code = `chrome.wait_until(${value_text}, "${dropdown_element}")\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_wait_until_v2"] = {
  init: function () {
    this.appendValueInput("text")
      .setCheck("String")
      .appendField("Wait until ||");
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["Text", "t"],
          ["Button", "b"],
          ["Link", "l"],
          ["Image", "i"],
          ["ListItem", "li"],
        ]),
        "element"
      )
      .appendField("appears");
    this.appendValueInput("delay")
      .setCheck("Number")
      .appendField("|| Delay");
    // this.appendValueInput("navigate")
    // .setCheck("chrome")
    // .appendField("|| in ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to wait until a given text or element appears in the chrome browser page.
    ____________________________________________
    Inputs:
    ${'````````'}
    Value Type - The element (Text, Button, Link, Image, ListItem) to wait until appears. Example : Text
    ____________________________________________
    Returns:
    ${'```````````'}
    The element would be checked if exists.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_wait_until_v2"] = function (block) {
  var value_text = Blockly.Python.valueToCode(
    block,
    "text",
    Blockly.Python.ORDER_ATOMIC
  );
  var dropdown_element = block.getFieldValue("element");
  var value_delay = Blockly.Python.valueToCode(
    block,
    "delay",
    Blockly.Python.ORDER_ATOMIC
  );
  var code = `chrome.wait_until(${value_text}, "${dropdown_element}", ${value_delay})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_refresh_page"] = {
  init: function () {
    this.appendDummyInput().appendField("Refresh Page");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to refresh the chrome browser page.
    ____________________________________________
    Returns:
    ${'```````````'}
    The page would be refreshed.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_refresh_page"] = function (block) {
  var code = `chrome.refresh_page()\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_hit_enter"] = {
  init: function () {
    this.appendDummyInput().appendField("Press Enter Key");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to hit the enter key on the chrome browser page.
    ____________________________________________
    Returns:
    ${'```````````'}
    The enter key would be pressed.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_hit_enter"] = function (block) {
  var code = `chrome.hit_enter()\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_key_press"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Press Key")
      .appendField(
        new Blockly.FieldDropdown([
          ["", "''"],
          ["a", "'a'"],
          ["b", "'b'"],
          ["c", "'c'"],
          ["d", "'d'"],
          ["e", "'e'"],
          ["f", "'f'"],
          ["g", "'g'"],
          ["h", "'h'"],
          ["i", "'i'"],
          ["j", "'j'"],
          ["k", "'k'"],
          ["l", "'l'"],
          ["m", "'m'"],
          ["n", "'n'"],
          ["o", "'o'"],
          ["p", "'p'"],
          ["q", "'q'"],
          ["r", "'r'"],
          ["s", "'s'"],
          ["t", "'t'"],
          ["u", "'u'"],
          ["v", "'v'"],
          ["w", "'w'"],
          ["x", "'x'"],
          ["y", "'y'"],
          ["z", "'z'"],
          ["A", "'A'"],
          ["B", "'B'"],
          ["C", "'C'"],
          ["D", "'D'"],
          ["E", "'E'"],
          ["F", "'F'"],
          ["G", "'G'"],
          ["H", "'H'"],
          ["I", "'I'"],
          ["J", "'J'"],
          ["K", "'K'"],
          ["L", "'L'"],
          ["M", "'M'"],
          ["N", "'N'"],
          ["O", "'O'"],
          ["P", "'P'"],
          ["Q", "'Q'"],
          ["R", "'R'"],
          ["S", "'S'"],
          ["T", "'T'"],
          ["U", "'U'"],
          ["V", "'V'"],
          ["W", "'W'"],
          ["X", "'X'"],
          ["Y", "'Y'"],
          ["Z", "'Z'"],
          ["1", "'1'"],
          ["2", "'2'"],
          ["3", "'3'"],
          ["4", "'4'"],
          ["5", "'5'"],
          ["6", "'6'"],
          ["7", "'7'"],
          ["8", "'8'"],
          ["9", "'9'"],
          ["0", "'0'"],
          ["ADD", "helium.ADD"],
          ["ALT", "helium.ALT"],
          ["ARROW_DOWN", "helium.ARROW_DOWN"],
          ["ARROW_LEFT", "helium.ARROW_LEFT"],
          ["ARROW_RIGHT", "helium.ARROW_RIGHT"],
          ["ARROW_UP", "helium.ARROW_UP"],
          ["BACKSPACE", "helium.BACKSPACE"],
          ["BACK_SPACE", "helium.BACK_SPACE"],
          ["CANCEL", "helium.CANCEL"],
          ["CLEAR", "helium.CLEAR"],
          ["COMMAND", "helium.COMMAND"],
          ["CONTROL", "helium.CONTROL"],
          ["DECIMAL", "helium.DECIMAL"],
          ["DELETE", "helium.DELETE"],
          ["DIVIDE", "helium.DIVIDE"],
          ["DOWN", "helium.DOWN"],
          ["END", "helium.END"],
          ["ENTER", "helium.ENTER"],
          ["EQUALS", "helium.EQUALS"],
          ["ESCAPE", "helium.ESCAPE"],
          ["F1", "helium.F1"],
          ["F10", "helium.F10"],
          ["F11", "helium.F11"],
          ["F12", "helium.F12"],
          ["F2", "helium.F2"],
          ["F3", "helium.F3"],
          ["F4", "helium.F4"],
          ["F5", "helium.F5"],
          ["F6", "helium.F6"],
          ["F7", "helium.F7"],
          ["F8", "helium.F8"],
          ["F9", "helium.F9"],
          ["HELP", "helium.HELP"],
          ["HOME", "helium.HOME"],
          ["INSERT", "helium.INSERT"],
          ["LEFT", "helium.LEFT"],
          ["LEFT_ALT", "helium.LEFT_ALT"],
          ["LEFT_CONTROL", "helium.LEFT_CONTROL"],
          ["LEFT_SHIFT", "helium.LEFT_SHIFT"],
          ["META", "helium.META"],
          ["MULTIPLY", "helium.MULTIPLY"],
          ["NULL", "helium.NULL"],
          ["NUMPAD0", "helium.NUMPAD0"],
          ["NUMPAD1", "helium.NUMPAD1"],
          ["NUMPAD2", "helium.NUMPAD2"],
          ["NUMPAD3", "helium.NUMPAD3"],
          ["NUMPAD4", "helium.NUMPAD4"],
          ["NUMPAD5", "helium.NUMPAD5"],
          ["NUMPAD6", "helium.NUMPAD6"],
          ["NUMPAD7", "helium.NUMPAD7"],
          ["NUMPAD8", "helium.NUMPAD8"],
          ["NUMPAD9", "helium.NUMPAD9"],
          ["PAGE_DOWN", "helium.PAGE_DOWN"],
          ["PAGE_UP", "helium.PAGE_UP"],
          ["PAUSE", "helium.PAUSE"],
          ["RETURN", "helium.RETURN"],
          ["RIGHT", "helium.RIGHT"],
          ["SEMICOLON", "helium.SEMICOLON"],
          ["SEPARATOR", "helium.SEPARATOR"],
          ["SHIFT", "helium.SHIFT"],
          ["SPACE", "helium.SPACE"],
          ["SUBTRACT", "helium.SUBTRACT"],
          ["TAB", "helium.TAB"],
          ["UP", "helium.UP"]




        ]),
        "key_1"
      )
      .appendField("+")
      .appendField(
        new Blockly.FieldDropdown([
          ["", "''"],
          ["a", "'a'"],
          ["b", "'b'"],
          ["c", "'c'"],
          ["d", "'d'"],
          ["e", "'e'"],
          ["f", "'f'"],
          ["g", "'g'"],
          ["h", "'h'"],
          ["i", "'i'"],
          ["j", "'j'"],
          ["k", "'k'"],
          ["l", "'l'"],
          ["m", "'m'"],
          ["n", "'n'"],
          ["o", "'o'"],
          ["p", "'p'"],
          ["q", "'q'"],
          ["r", "'r'"],
          ["s", "'s'"],
          ["t", "'t'"],
          ["u", "'u'"],
          ["v", "'v'"],
          ["w", "'w'"],
          ["x", "'x'"],
          ["y", "'y'"],
          ["z", "'z'"],
          ["A", "'A'"],
          ["B", "'B'"],
          ["C", "'C'"],
          ["D", "'D'"],
          ["E", "'E'"],
          ["F", "'F'"],
          ["G", "'G'"],
          ["H", "'H'"],
          ["I", "'I'"],
          ["J", "'J'"],
          ["K", "'K'"],
          ["L", "'L'"],
          ["M", "'M'"],
          ["N", "'N'"],
          ["O", "'O'"],
          ["P", "'P'"],
          ["Q", "'Q'"],
          ["R", "'R'"],
          ["S", "'S'"],
          ["T", "'T'"],
          ["U", "'U'"],
          ["V", "'V'"],
          ["W", "'W'"],
          ["X", "'X'"],
          ["Y", "'Y'"],
          ["Z", "'Z'"],
          ["1", "'1'"],
          ["2", "'2'"],
          ["3", "'3'"],
          ["4", "'4'"],
          ["5", "'5'"],
          ["6", "'6'"],
          ["7", "'7'"],
          ["8", "'8'"],
          ["9", "'9'"],
          ["0", "'0'"],
          ["ADD", "helium.ADD"],
          ["ALT", "helium.ALT"],
          ["ARROW_DOWN", "helium.ARROW_DOWN"],
          ["ARROW_LEFT", "helium.ARROW_LEFT"],
          ["ARROW_RIGHT", "helium.ARROW_RIGHT"],
          ["ARROW_UP", "helium.ARROW_UP"],
          ["BACKSPACE", "helium.BACKSPACE"],
          ["BACK_SPACE", "helium.BACK_SPACE"],
          ["CANCEL", "helium.CANCEL"],
          ["CLEAR", "helium.CLEAR"],
          ["COMMAND", "helium.COMMAND"],
          ["CONTROL", "helium.CONTROL"],
          ["DECIMAL", "helium.DECIMAL"],
          ["DELETE", "helium.DELETE"],
          ["DIVIDE", "helium.DIVIDE"],
          ["DOWN", "helium.DOWN"],
          ["END", "helium.END"],
          ["ENTER", "helium.ENTER"],
          ["EQUALS", "helium.EQUALS"],
          ["ESCAPE", "helium.ESCAPE"],
          ["F1", "helium.F1"],
          ["F10", "helium.F10"],
          ["F11", "helium.F11"],
          ["F12", "helium.F12"],
          ["F2", "helium.F2"],
          ["F3", "helium.F3"],
          ["F4", "helium.F4"],
          ["F5", "helium.F5"],
          ["F6", "helium.F6"],
          ["F7", "helium.F7"],
          ["F8", "helium.F8"],
          ["F9", "helium.F9"],
          ["HELP", "helium.HELP"],
          ["HOME", "helium.HOME"],
          ["INSERT", "helium.INSERT"],
          ["LEFT", "helium.LEFT"],
          ["LEFT_ALT", "helium.LEFT_ALT"],
          ["LEFT_CONTROL", "helium.LEFT_CONTROL"],
          ["LEFT_SHIFT", "helium.LEFT_SHIFT"],
          ["META", "helium.META"],
          ["MULTIPLY", "helium.MULTIPLY"],
          ["NULL", "helium.NULL"],
          ["NUMPAD0", "helium.NUMPAD0"],
          ["NUMPAD1", "helium.NUMPAD1"],
          ["NUMPAD2", "helium.NUMPAD2"],
          ["NUMPAD3", "helium.NUMPAD3"],
          ["NUMPAD4", "helium.NUMPAD4"],
          ["NUMPAD5", "helium.NUMPAD5"],
          ["NUMPAD6", "helium.NUMPAD6"],
          ["NUMPAD7", "helium.NUMPAD7"],
          ["NUMPAD8", "helium.NUMPAD8"],
          ["NUMPAD9", "helium.NUMPAD9"],
          ["PAGE_DOWN", "helium.PAGE_DOWN"],
          ["PAGE_UP", "helium.PAGE_UP"],
          ["PAUSE", "helium.PAUSE"],
          ["RETURN", "helium.RETURN"],
          ["RIGHT", "helium.RIGHT"],
          ["SEMICOLON", "helium.SEMICOLON"],
          ["SEPARATOR", "helium.SEPARATOR"],
          ["SHIFT", "helium.SHIFT"],
          ["SPACE", "helium.SPACE"],
          ["SUBTRACT", "helium.SUBTRACT"],
          ["TAB", "helium.TAB"],
          ["UP", "helium.UP"]
        ]),
        "key_2"
      );
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to perform keypress action on the chrome browser page.
    ____________________________________________
    Inputs:
    ${'````````'}
    Press Key - The key(s) to be pressed. The key can be a single key or a combination of keys. 
    ____________________________________________
    Returns:
    ${'```````````'}
    The key(s) would be pressed on the chrome browser page.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_key_press"] = function (block) {
  Blockly.Python.definitions_["Helium"] = "import helium";
  var dropdown_key_1 = block.getFieldValue("key_1");
  var dropdown_key_2 = block.getFieldValue("key_2");

  var code = `chrome.key_press(${dropdown_key_1}, ${dropdown_key_2})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_mouse_hover"] = {
  init: function () {
    this.appendValueInput("user_visible_text_element")
      .setCheck("String")
      .appendField("Hover on Text ||");
    this.appendValueInput("element")
      .setCheck("String")
      .appendField("or Element ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to perform mouse hover action on the chrome browser page.
    ____________________________________________
    Inputs:
    ${'````````'}
    User Visible Text Element - The text element to be hovered. Example: "Search"
    ____________________________________________
    Returns:
    ${'```````````'}
    The text element or element would be hovered on the chrome browser page.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_mouse_hover"] = function (block) {
  var value_user_visible_text_element = Blockly.Python.valueToCode(
    block,
    "user_visible_text_element",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_element = Blockly.Python.valueToCode(
    block,
    "element",
    Blockly.Python.ORDER_ATOMIC
  );
  var code = `chrome.mouse_hover(${value_user_visible_text_element}, ${value_element})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_set_waiting_time"] = {
  init: function () {
    this.appendValueInput("element")
      .setCheck("Number")
      .appendField("Set waiting time ||");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to set the waiting time  for the respective element to appear on the chrome browser page.
    ____________________________________________
    Inputs:
    ${'````````'}
    Waiting Time - The waiting time in seconds. Example: "10"
    ____________________________________________
    Returns:
    ${'```````````'}
    The waiting time would be set for the chrome browser page.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_set_waiting_time"] = function (block) {
  var value_element = Blockly.Python.valueToCode(
    block,
    "element",
    Blockly.Python.ORDER_ATOMIC
  );
  var code = `chrome.set_waiting_time(${value_element})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["chrome_scroll"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Scroll the page ||")
      .appendField(
        new Blockly.FieldDropdown([
          ["Down side", "down"],
          ["Up side", "up"],
          ["Left side", "left"],
          ["Right side", "right"],
        ]),
        "direction"
      )
      .appendField(new Blockly.FieldNumber(300, 1, Infinity, 1), "weight")
      .appendField(" pixels");
    this.setInputsInline(true);
    this.setOutput(true, "Array");
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to perform scroll action on the chrome browser page.
    ____________________________________________
    Inputs:
    ${'````````'}
    Direction - The direction (Down, Up, Left, Right) to be scrolled. Example: "Down"

    Weight - The weight of the scroll. Example: "300"
    ____________________________________________
    Returns:
    ${'```````````'}
    The direction (Down, Up, Left, Right) would be scrolled on the chrome browser page.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["chrome_scroll"] = function (block) {
  var dropdown_direction = block.getFieldValue("direction");
  var number_weight = block.getFieldValue("weight");
  var code = `chrome.scroll("${dropdown_direction}", ${number_weight})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["get_text"] = {
  init: function () {
    this.appendValueInput("get_element_image")
      .setCheck(null)
      .appendField("Get Text |")
      .appendField("Element XPath");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to get the text from the desired element on the chrome browser page.
    ____________________________________________
    Inputs:
    ${'````````'}
    Element XPath - The XPath of the element to be clicked. Example: "//*[@id='search']"
    ____________________________________________
    Returns:
    ${'```````````'}
    The text from the element would be returned.
    ____________________________________________
    `);


    this.setHelpUrl("");
  },
};

Blockly.Python["get_text"] = function (block) {
  var value_get_element_image = Blockly.Python.valueToCode(
    block,
    "get_element_image",
    Blockly.Python.ORDER_ATOMIC
  );
  var code = `chrome.get_text(element_xpath=${value_get_element_image})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["get_element_image"] = {
  init: function () {
    this.appendValueInput("get_element_image")
      .setCheck(null)
      .appendField("Get Image |")
      .appendField("Element XPath");
    this.appendValueInput("image_name")
      .setCheck(null)
      .appendField("Image Name");
    this.appendDummyInput()
      .appendField("Base64")
      .appendField(new Blockly.FieldCheckbox("FALSE"), "base64_image");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to get the image from the desired element on the chrome browser page.
    ____________________________________________
    Inputs:
    ${'````````'}
    Element XPath - The XPath of the element to be clicked. Example: "//*[@id='search']"

    Image Name - The name of the image to be saved. Example: "image_name"

    Base64 - The option to save the image as base64. Example: "True"
    ____________________________________________
    Returns:
    ${'```````````'}
    The image from the element would be returned.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};


Blockly.Python["get_element_image"] = function (block) {
  var value_get_element_image = Blockly.Python.valueToCode(
    block,
    "get_element_image",
    Blockly.Python.ORDER_ATOMIC
  );
  var value_image_name = Blockly.Python.valueToCode(
    block,
    "image_name",
    Blockly.Python.ORDER_ATOMIC
  );
  var checkbox_base64_image = block.getFieldValue("base64_image") === "TRUE";
  var code = `chrome.get_element_image(element_xpath=${value_get_element_image}, image_name=${value_image_name}, base64_image=${capitalize(
    checkbox_base64_image.toString()
  )})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["get_value_relatively"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Get Value |")
      .appendField("Element Type")
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["Text", "Text"],
          ["Button", "Button"],
          ["Link", "Link"],
          ["Image", "Image"],
          ["ListItem", "ListItem"],
        ]),
        "element_type"
      )
    this.appendDummyInput()
      .appendField("Above =");
    this.appendValueInput("above")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("Below =");
    this.appendValueInput("below")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("To Left of =");
    this.appendValueInput("to_left_of")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("To Right of =");
    this.appendValueInput("to_right_of")
      .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#611BD1");
    this.setTooltip(`
    Description:
    ${'````````````````'}
    This block is used to get the value from the desired element on the chrome browser page with respect to the other elements.
    ____________________________________________
    Inputs:
    ${'````````'}
    Element Type - The type of the element to be clicked. Example: "Text"

    Above - The text element above the desired element. Example: "Search"

    Below - The text element below the desired element. Example: "About"

    To Left of - The text element to the left of the desired element. Example: "Gmail"

    To Right of - The text element to the right of the desired element. Example: "Images"
    ____________________________________________
    Returns:
    ${'```````````'}
    The value from the element would be returned.
    ____________________________________________
    `);

    this.setHelpUrl("");
  },
};

Blockly.Python["get_value_relatively"] = function (block) {
  var value_above = Blockly.JavaScript.valueToCode(block, 'above', Blockly.JavaScript.ORDER_ATOMIC);
  var value_below = Blockly.JavaScript.valueToCode(block, 'below', Blockly.JavaScript.ORDER_ATOMIC);
  var value_to_left_of = Blockly.JavaScript.valueToCode(block, 'to_left_of', Blockly.JavaScript.ORDER_ATOMIC);
  var value_to_right_of = Blockly.JavaScript.valueToCode(block, 'to_right_of', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_element_type = block.getFieldValue('element_type');

  var code = `chrome.get_value_relatively(element_type='${dropdown_element_type}', above=${value_above}, below=${value_below}, to_left_of=${value_to_left_of}, to_right_of=${value_to_right_of})\n`;
  return [code, Blockly.Python.ORDER_NONE];
};
