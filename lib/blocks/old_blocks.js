Blockly.Blocks['chrome_mouse_click'] = {
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
            .appendField(new Blockly.FieldDropdown([["Text", "text"], ["Button", "button"], ["Link", "link"], ["Checkbox", "checkbox"], ["Radio", "radio"], ["Image", "image"], ["XPath", "xpath"]]), "value_type");
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

Blockly.Python['chrome_mouse_click'] = function (block) {
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var dropdown_action_type = block.getFieldValue('action_type');
    var dropdown_value_type = block.getFieldValue('value_type');
    // TODO: Assemble Python into code variable.
    var code = `chrome.mouse(value=${value_value}, action_type = "${dropdown_action_type}", value_type = "${dropdown_value_type}")\n`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['excel_get_single_cell_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get from Cell")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Column Name")
            .appendField("=");
        this.appendValueInput("cell_number")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Cell Number")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Content in Cell");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        This block is used to get data from a cell in a dataframe. 
        NOTE: The first row and first column is 0, 0.
        ____________________________________________
        Inputs:
        Dataframe - The dataframe. Example: df from the previous block

        Header - The header row number of the dataframe stating from 0. Example: If the header row is the first row, then enter as 0

        Column Name - The name of the column. Example: "Age"
        
        Cell Number - The cell number of the cell starting from 0. Example: If the required data is in fourth cell, then enter as 3
        ____________________________________________
        Returns:
        STATUS - Whether the operation was successful or not
        DATA - The data in the cell
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_set_single_cell_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Set to Cell")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Column Name")
            .appendField("=");
        this.appendValueInput("cell_number")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Cell Number")
            .appendField("=");
        this.appendValueInput("text")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Value")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Modified Dataframe");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        This block is used to set a single cell in an excel file. 
        NOTE: The first row and first column is 0, 0.
        ____________________________________________
        Inputs:
        Dataframe - The dataframe to be modified. Example: df from the previous block.

        Column Name - The name of the column to be modified. Example: "column_name"

        Cell Number - The number of the cell to be modified. Example: If the cell is in row 2 of given column, then enter as 1.

        Value - The value to be set to the cell. 
        ____________________________________________
        Returns:
        STATUS - Whether the operation was successful or not.
        DATA - The modified dataframe.
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_get_single_cell'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get from Cell")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Column Name")
            .appendField("=");
        this.appendValueInput("cell_number")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Cell Number")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Content in Cell");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip(`
        Description:
        This block allows get data from single cell of excel file.
        NOTE: All rows and columns are numbered starting from 0.
        ____________________________________________
        Inputs:
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - Header row number. Example: If the header is in the first row, then the value should be 0

        Column Name - The column name of the cell. Example: "A"

        Cell Number - The cell number of the cell. Example: 3 (for the third cell)
        ____________________________________________
        Returns:
        STATUS - Whether the operation was successful or not.
        DATA - The data in the cell.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_set_single_cell'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Set to Cell")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Column Name")
            .appendField("=");
        this.appendValueInput("cell_number")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Cell Number")
            .appendField("=");
        this.appendValueInput("text")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Data")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("STATUS"), "status")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip(`
        Description:
        This block allows to set a single cell in excel sheet.
        NOTE: All rows and columns are numbered starting from 0.
        ____________________________________________
        Inputs:
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - Header row number. Example: If the header is in the first row, then the value should be 0

        Column Name - The column name of the cell. Example: If the column name is in the first column, then the value should be 0

        Cell Number - The cell number of the cell. Example: If the cell number is in the first cell, then the value should be 0

        Data - The data to be set. Example: "Hello World"
        ____________________________________________
        Returns:
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Python['excel_get_single_cell_new'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
    var value_cell_number = Blockly.Python.valueToCode(block, 'cell_number', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.excel_get_single_cell(df=${value_df}, header=${value_header}, column_name=${value_column_name}, cell_number=${value_cell_number})\n`;
    return code;
};

Blockly.Python['excel_set_single_cell_new'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
    var value_cell_number = Blockly.Python.valueToCode(block, 'cell_number', Blockly.Python.ORDER_ATOMIC);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.excel_set_single_cell(df=${value_df}, column_name=${value_column_name}, cell_number=${value_cell_number}, text=${value_text})\n`;
    return code;
};

Blockly.Python['excel_get_single_cell'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
    var value_cell_number = Blockly.Python.valueToCode(block, 'cell_number', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.excel_get_single_cell(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, column_name=${value_column_name}, cell_number=${value_cell_number})\n`;
    return code;
};

Blockly.Python['excel_set_single_cell'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
    var value_cell_number = Blockly.Python.valueToCode(block, 'cell_number', Blockly.Python.ORDER_ATOMIC);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_set_single_cell(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, column_name=${value_column_name}, cell_number=${value_cell_number}, text=${value_text})\n`;
    return code;
};