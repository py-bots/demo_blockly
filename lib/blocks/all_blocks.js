Blockly.Blocks['class_custom_code_chrome'] = {
    init: function () {
        this.appendValueInput("var_a")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("=");
        this.appendValueInput("var_b")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(".code_extension"), "code");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#611BD1');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block is used to create a custom code block.
        ____________________________________________
        Inputs:
        ${'````````'}
        var_a - The variable that will be used in the code. 
        var_b - The variable that will be used in the code. 
        code - The code that will be used in the code. 
        ____________________________________________
        Returns:
        ${'```````````'}
        The code block.
        `);
        this.setHelpUrl("");
    }
};

Blockly.Python['class_custom_code_chrome'] = function (block) {
    var value_var_a = Blockly.Python.valueToCode(block, 'var_a', Blockly.Python.ORDER_ATOMIC);
    var value_var_b = Blockly.Python.valueToCode(block, 'var_b', Blockly.Python.ORDER_ATOMIC);
    var text_code = block.getFieldValue('code');
    // TODO: Assemble Python into code variable.
    var code = `${value_var_a} = ${value_var_b}${text_code}\n`;
    return code;
};

Blockly.Blocks['class_custom_code'] = {
    init: function () {
        this.appendValueInput("var_a")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("=");
        this.appendValueInput("var_b")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(".code_extension"), "code");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#51355A');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block is used to create a custom code block.
        ____________________________________________
        Inputs:
        ${'````````'}
        var_a - The variable that will be used in the code.
        var_b - The variable that will be used in the code.
        code - The code that will be used in the code.
        ____________________________________________
        Returns:
        ${'```````````'}
        The generated code block.
        `);
        this.setHelpUrl("");
    }
};

Blockly.Python['class_custom_code'] = function (block) {
    var value_var_a = Blockly.Python.valueToCode(block, 'var_a', Blockly.Python.ORDER_ATOMIC);
    var value_var_b = Blockly.Python.valueToCode(block, 'var_b', Blockly.Python.ORDER_ATOMIC);
    var text_code = block.getFieldValue('code');
    // TODO: Assemble Python into code variable.
    var code = `${value_var_a} = ${value_var_b}${text_code}\n`;
    return code;
};


Blockly.Blocks['dict_input'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("{");
        this.appendDummyInput()
            .appendField(new Blockly.FieldMultilineInput(""), "dict_value");
        this.appendDummyInput()
            .appendField("}");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block is used to create a dictionary.
        ____________________________________________
        Inputs:
        ${'````````'}
        dict_value: The dictionary that will be used in the code. Example: {"key1": "value", "key2": "value2"}
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Python dictionary object containing the data.
        `);

        this.setHelpUrl("");
    }
};

Blockly.Python['dict_input'] = function (block) {
    var text_dict_value = block.getFieldValue('dict_value');
    // TODO: Assemble Python into code variable.
    var code = `{${text_dict_value}}`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['authenticate_google_spreadsheet'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Authenticate G-Sheets")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("credential_file_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Credential File Path")
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
            .appendField("Auth Object");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block is used to authenticate with Google Sheets.
        NOTE: Create credentials in Google API Console : 
        http://gspread.readthedocs.org/en/latest/oauth2.html
        ____________________________________________
        Inputs:
        ${'````````'}
        Credential File Path - The path to the credential file. Example: "C:\\Users\\User\\Desktop\\credentials.json"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The authentication object.
        `);

        this.setHelpUrl("https://docs.gspread.org/en/latest/oauth2.html");
    }
};

Blockly.Blocks['excel_get_dataframe_from_google_spreadsheet'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe from G-Sheet")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("auth")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Auth Object")
            .appendField("=");
        this.appendValueInput("spreadsheet_url")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Spreadsheet URL")
            .appendField("=");
        this.appendValueInput("sheet_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Sheetname")
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
            .appendField("Dataframe Object");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block is used to get data from Google Sheets.
        ____________________________________________
        Inputs:
        ${'````````'}
        Auth Object - The authentication object.

        Spreadsheet URL - The URL of the spreadsheet. Example: "https://docs.google.com/spreadsheets/d/...../edit?usp=sharing"

        Sheetname - The name of the sheet. Example: "Sheet1"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The dataframe object.
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_upload_dataframe_to_google_spreadsheet'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe to G-Sheet")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("auth")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Auth Object")
            .appendField("=");
        this.appendValueInput("spreadsheet_url")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Spreadsheet URL")
            .appendField("=");
        this.appendValueInput("sheet_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("df")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Dataframe")
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
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block is used to upload Dataframe to Google Sheets.
        ____________________________________________
        Inputs:
        ${'````````'}
        Auth Object - The authentication object.

        Spreadsheet URL - The URL of the spreadsheet. Example: "https://docs.google.com/spreadsheets/d/...../edit?usp=sharing"

        Sheetname - The name of the sheet. Example: "Sheet1"

        Dataframe - The dataframe object. Example: Pandas df which you want to upload.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_copy_range_from_sheet_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Copy From Sheet")
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
        this.appendValueInput("start_col")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Start Column")
            .appendField("=");
        this.appendValueInput("start_row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Start Row")
            .appendField("=");
        this.appendValueInput("end_col")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("End Column")
            .appendField("=");
        this.appendValueInput("end_row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("End Row")
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
            .appendField("Contents in range");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block is used to copy range of data from a excel sheet to a dataframe. 
        NOTE: The first row and first column is 0, 0.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the file. Example: "C:\\Users\\user\\Desktop\\file.xlsx"

        Sheetname - The name of the sheet. Example: "Sheet1" 

        Start Column - The start column of the range. Example: For first column, start_col = 0

        Start Row - The row number of the starting cell of the range. Example: For first row, start_row = 0

        End Column - The column number of the ending cell of the range. Example: For fifth column, end_col = 4

        End Row - The row number of the ending cell of the range. Example: For fifth row, end_row = 4
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The data in the range.
        `);

        this.setHelpUrl("");
    }
};



Blockly.Blocks['excel_paste_range_to_sheet_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Paste to Sheet")
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
        this.appendValueInput("start_col")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Start Column")
            .appendField("=");
        this.appendValueInput("start_row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Start Row")
            .appendField("=");
        this.appendValueInput("copied_data")
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
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block is used to paste range of data to a sheet in an excel file. 
        NOTE: The first row and first column is 0, 0.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\user\\Desktop\\file.xlsx"

        Sheetname - The name of the sheet in the excel file. Example: "Sheet1"

        Start Column - The column number of the start of the range. Example: If the start of the range is in column 3, then enter as 2.

        Start Row - The row number of the start of the range. Example: If the start of the range is in row 2, then enter as 1.

        Data - The data to be pasted.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        `);

        this.setHelpUrl("");
    }
};


Blockly.Blocks['excel_get_all_header_columns_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Headers")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Dataframe")
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
            .appendField("[Head1, Hea..]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block is used to get all the header columns in an excel file.
        NOTE: The first row and first column is 0, 0.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - The dataframe to be modified. Example: df from the previous block.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The header columns.
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_get_row_column_count_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Row Column Count")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Dataframe")
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
            .appendField("[Row, Column]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block is used to get the number of rows and columns in an excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - The dataframe to be modified. Example: df from the previous block.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The number of rows and columns.
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_get_all_sheet_names_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Sheet Names")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filepath")
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
            .appendField("[Sheet 1, Sheet..]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block is used to get all the sheet names in an excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        input_filepath - The filepath of the excel file. Example: "C:\\Users\\...\\file.xlsx"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The sheet names.
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_clear_sheet_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Clear Sheet")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Dataframe")
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
            .appendField(new Blockly.FieldVariable("Data"), "data")
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
        ${'````````````````'}
        This block is used to clear the contents of a sheet.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - The dataframe to be modified. Example: df from the previous block.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The modified dataframe.
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_drop_columns_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Drop Columns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("cols")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Columns")
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
            .appendField(new Blockly.FieldVariable("Data"), "data")
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
        ${'````````````````'}
        This block is used to drop columns from a dataframe.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - The dataframe to be modified. Example: df from the previous block.

        Columns - The columns to be dropped. Example:  Single column name "A" or a list of column names ["A", "B", "C"]
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The modified dataframe.
        `);
        
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_remove_duplicates_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Remove Duplicates")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Columns")
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
        ${'````````````````'}
        This block removes duplicate rows from a dataframe.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - The dataframe to be modified. Example: df from the previous block.

        Columns - The columns to be checked for duplicates. Example:  Single column name "A" or a list of column names ["A", "B", "C"]
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Dataframe with duplicates removed.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_group_by_column_values_n_split_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Group By Column and Split")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Columns")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
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
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block groups the dataframe by the given column and splits the dataframe into multiple dataframes.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - The dataframe to be modified. Example: df from the previous block.

        Columns - The columns to be grouped. Example:  Single column name "A" or a list of column names ["A", "B", "C"]

        Output Folder - The folder to save the split dataframes to. Example: "C:\\Users\\User\\Desktop\\"

        Output Filename - The filename to save the split dataframes to. Example: "Split_Dataframe"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - List of dataframes split by the given column.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_if_value_exists_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Check Value Exists")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("cols")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Columns")
            .appendField("=");
        this.appendValueInput("value")
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
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block checks if the given value exists in the given columns of the dataframe.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - The dataframe to be checked. Example: df from the previous block.

        Columns - The columns to be checked. Example:  Single column name "A" or a list of column names ["A", "B", "C"]

        Value - The value to be checked. Example: "Hello"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Whether the value exists or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_apply_template_format_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Apply Template Format")
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
        this.appendValueInput("input_template_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Template Filepath")
            .appendField("=");
        this.appendValueInput("input_template_sheetname")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Template Sheetname")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Save to Same file")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "same_file");
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
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block applies the given template to the given dataframe.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the dataframe. Example: "C:\\Users\\User\\Desktop\\data.xlsx"

        Sheetname - The sheetname of the dataframe. Example: "Sheet1"

        Template Filepath - The filepath of the template. Example: "C:\\Users\\User\\Desktop\\template.xlsx"

        Template Sheetname - The sheetname of the template. Example: "Sheet1"

        Output Folder (OPT) - The folder to save the output file to. Example: "C:\\Users\\User\\Desktop"

        Output Filename (OPT) - The filename of the output file. Example: "output.xlsx"

        Save to Same file - Whether to save to the same file or not. Example: true
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The output filepath.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_apply_format_as_table_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Apply Table Format")
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
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block applies the given template to the given dataframe.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the dataframe. Example: "C:\\Users\\User\\Desktop\\data.xlsx"

        Sheetname - The sheetname of the dataframe. Example: "Sheet1"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The output filepath.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_merge_all_files_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Merge All Files")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Folder Path")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
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
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block merges all files in the given folder.
        ____________________________________________
        Inputs:
        ${'````````'}
        Folder Path - The folder path to the files. Example: "C:\\Users\\User\\Desktop"

        Output Folder (OPT) - The folder to save the output file to. Example: "C:\\Users\\User\\Desktop\\My Folder"

        Output Filename (OPT) - The filename of the output file. Example: "output.xlsx"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The output filepath.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_create_file_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Create Excel File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("output_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Sheet Name")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename")
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
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block creates an excel file with the given sheetname and saves it to the given folder.
        ____________________________________________
        Inputs:
        ${'````````'}
        Sheet Name - The name of the sheet. Example: "Sheet1"

        Output Folder - The folder to save the output file to. Example: "C:\\Users\\User\\Desktop\\My Folder"

        Output Filename - The filename of the output file. Example: "output.xlsx"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The output filepath.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dataframe_to_excel_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe to Excel")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("output_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Sheet Name")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename")
            .appendField("=");
        this.appendDummyInput()
            .appendField("Mode")
            .appendField("=")
            .appendField(
                new Blockly.FieldDropdown([
                    ["Append", "a"],
                    ["Overwrite", "x"]
                ]),
                "mode"
            );
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
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block converts a dataframe to an excel file and saves it to the given folder.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - The dataframe to convert. Example: df from the previous block.

        Sheet Name - The name of the sheet. Example: "Sheet1"

        Output Folder - The folder to save the output file to. Example: "C:\\Users\\User\\Desktop\\My Folder"

        Output Filename - The filename of the output file. Example: "output.xlsx"

        Mode - Whether to append or overwrite the file. Example: "a" or "x" 
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The output filepath.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_to_dataframe_new'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Excel to Dataframe")
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
            .appendField("Dataframe (object)");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block converts an excel file to a dataframe.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the excel file. Example: "C:\\Users\\User\\Desktop\\My Folder\\My File.xlsx"

        Sheetname - The name of the sheet. Example: "Sheet1"

        Header - The number of rows to skip. Example: 1
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The dataframe.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};



Blockly.Blocks['import_text_field'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Import Section")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldMultilineInput("import pandas as pd\nimport numpy as np"), "text");

        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#003658');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block imports a section of code.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};


Blockly.Python['import_text_field'] = function (block) {
    var text_text = block.getFieldValue('text');
    // Add the imports to the top of the program
    Blockly.Python.definitions_['custom_imports'] = text_text;
    return '';
};


Blockly.Blocks['code_text_line'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Custom Line")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldTextInput("Here you can write single line code."), "text");

        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#003658');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to write single line of custom code. 
        For multiple lines use the import_text_field block.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Python['code_text_line'] = function (block) {
    var text_text = block.getFieldValue('text');
    // return the code 
    return text_text + '\n';
};

Blockly.Blocks['code_text_field'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Custom Script")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldMultilineInput("You can write your custom script here.\nThis supports next lines, indentations, etc."), "text");

        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#003658');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to write your custom script with multiple lines.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Python['code_text_field'] = function (block) {
    var text_text = block.getFieldValue('text');
    // TODO: Assemble JavaScript into code variable.
    var code = text_text + '\n';
    return code;
};

Blockly.Blocks['simple_equals_line'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput(""), "text");
        this.setOutput(true, null);
        this.setColour('#003658');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to write simple one-line equations.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['simple_equals_multiline'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldMultilineInput("'Multi-line Code. Assign Type'"), "text");
        this.setOutput(true, null);
        this.setColour('#003658');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to write multi-line equations without use of variables.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Python['simple_equals_line'] = function (block) {
    var text_name = block.getFieldValue('text');
    // TODO: Assemble Python into code variable.
    var code = text_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['simple_equals_multiline'] = function (block) {
    var text_name = block.getFieldValue('text');
    // TODO: Assemble Python into code variable.
    var code = text_name;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['simple_equals_text'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldMultilineInput("You can write multi lines here.\nInvolving variables.\nThis supports next lines, indentations, etc. Assign Type"), "text");
        this.setOutput(true, null);
        this.setColour('#003658');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to write multi-line equations with variables.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Python['simple_equals_text'] = function (block) {
    var text_name = block.getFieldValue('text');
    // TODO: Assemble Python into code variable.
    var code = `"""${text_name}"""` + '\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['art_simple_effects'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Simple Effects")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("user_input_img_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Image Path")
            .appendField("=");
        this.appendValueInput("name_required_on_image")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Name (OPT)")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
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
        this.setColour('#511B73');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to create simple effects on images.
        ____________________________________________
        Inputs:
        ${'````````'}
        Image Path - Path to the image you want to apply the effect on. 
        Name (OPT) - Name of the image.
        Output Folder (OPT) - Path to the folder you want to save the image to.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the effect was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['art_neural_effects'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Neural Effects")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_image_folder_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Image Folder")
            .appendField("=");
        this.appendValueInput("style_image_folder_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Styles Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_image_folder_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
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
        this.setColour('#511B73');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to create neural effects on images.
        ____________________________________________
        Inputs:
        ${'````````'}
        Image Folder - Path to the folder containing the images you want to apply the effect on.
        Styles Folder (OPT) - Path to the folder containing the styles you want to apply the effect on.
        Output Folder (OPT) - Path to the folder you want to save the image to.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the effect was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['ar_facecam'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("AR Facecam")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("left_eye_image")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Left Eye Pic (OPT)")
            .appendField("=");
        this.appendValueInput("right_eye_image")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Right Eye Pic (OPT)")
            .appendField("=");
        this.appendValueInput("mouth_animation")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Mouth Video (OPT)")
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
        this.setColour('#800080');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to create an augmented reality facecam.
        ____________________________________________
        Inputs:
        ${'````````'}
        Left Eye Pic (OPT) - Path to the image you want to use for the left eye.
        Right Eye Pic (OPT) - Path to the image you want to use for the right eye.
        Mouth Video (OPT) - Path to the video you want to use for the mouth.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the effect was successful or not.
        ____________________________________________

        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['ar_trackhands'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Track Hands")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
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
        this.setColour('#800080');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to create an augmented reality facecam.
        ____________________________________________
        Inputs:
        ${'````````'}
        Live video from your laptop camera.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the effect was successful or not.
        ____________________________________________

        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ar_facemesh'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Face Mesh")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
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
        this.setColour('#800080');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to create an augmented reality face mesh.
        ____________________________________________
        Inputs:
        ${'````````'}
        Live video from your laptop camera.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the effect was successful or not.
        ____________________________________________

        `);
        
        this.setHelpUrl("");
    }
};


Blockly.Blocks['convert_change_corrupt_xls_to_xlsx'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Corrupt XLS to XLSX")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_file")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("input_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Sheetname")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
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
        this.setColour('#0D3F5E');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to convert corrupt xls files to xlsx files.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the xls file. Example: "C:\\Users\\User\\Desktop\\file.xls"

        Sheetname - The name of the sheet you want to convert. Example: "Sheet1"

        Output Folder (OPT) - The folder you want to save the xlsx file to. Example: "C:\\Users\\User\\Desktop\\"

        Output Filename (OPT) - The name you want to give the xlsx file. Example: "file.xlsx"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_xls_to_xlsx'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("XLS to XLSX")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_file")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
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
        this.setColour('#0D3F5E');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to convert xls files to xlsx files.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the xls file. Example: "C:\\Users\\User\\Desktop\\file.xls"

        Output Folder (OPT) - The folder to save the xlsx file in. Example: "C:\\Users\\User\\Desktop\\"

        Output Filename (OPT) - The filename of the xlsx file. Example: "file.xlsx"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________

        `);
        
        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_image_to_base64'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Image to Base64")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_file")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filepath")
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
            .appendField("[x,y]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#0D3F5E');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to convert image file to base64 strings.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the image file. Example: "C:\\Users\\User\\Desktop\\file.png"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The base64 string.
        ____________________________________________
        `);
        
        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_base64_to_img'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Base64 to Image")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("imgBase64Str")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Base64")
            .appendField("=");
        this.appendValueInput("img_folder_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("img_file_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
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
        this.setColour('#0D3F5E');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to convert base64 strings to image file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Base64 - The base64 string.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_csv_to_excel'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("CSV to Excel")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("csv_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("sep")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Separator")
            .appendField("=");
        this.appendValueInput("excel_output_folder_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("excel_file_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
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
        this.setColour('#0D3F5E');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to convert csv file to excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the csv file. Example: "C:\\Users\\User\\Desktop\\file.csv"

        Output Folder (OPT) - The folder path of the excel file. Example: "C:\\Users\\User\\Desktop\\"

        Output Filename (OPT) - The filename of the excel file. Example: "file.xlsx"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_jpg_to_png'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("JPG to PNG")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
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
        this.setColour('#0D3F5E');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to convert jpg file to png file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input jpg file. Example: "C:\\Users\\User\\Desktop\\file.jpg"

        Output Folder (OPT) - The folder path of the png file. Example: "C:\\Users\\User\\Desktop\\"

        Output Filename (OPT) - The filename of the png file. Example: "file.png"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________

        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_png_to_jpg'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("PNG to JPG")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filename (OPT)")
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
        this.setColour('#0D3F5E');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to convert png file to jpg file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input png file. Example: "C:\\Users\\User\\Desktop\\file.png"

        Output Folder (OPT) - The folder path of the jpg file. Example: "C:\\Users\\User\\Desktop\\"

        Output Filename (OPT) - The filename of the jpg file. Example: "file.jpg"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['convert_excel_to_colored_html'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Excel to HTML")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
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
        this.setColour('#0D3F5E');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to convert excel file to colored html file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Output Folder - The folder path of the html file. Example: "C:\\Users\\User\\Desktop\\"
         
        Output Filename - The filename of the html file. Example: "file.html"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};


Blockly.Blocks['ds_html_table_from_website'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("HTML Table from Website")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("website_url")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Website URL")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder")
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
        this.setColour('#623A2C');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to convert html table from website to excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Website URL - The website url of the html table. Example: "https://www.google.com"

        Output Folder - The folder path of the csv file. Example: "C:\\Users\\User\\Desktop\\"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ds_pivot_excel_table'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Pivot Table")
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
        this.appendValueInput("rows")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Rows")
            .appendField("=");
        this.appendValueInput("cols")
            .setCheck("Array")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Cols")
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
        this.setColour('#623A2C');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to convert excel file to HTML based pivot table.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - The header row number. Example: If the header is in the first row, then the value should be 0  

        Rows - The array of row names. Example: ["A", "B", "C"]

        Cols - The array of column names. Example: ["D", "E", "F"]
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ds_describe_excel_data'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Describe Excel")
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
            .appendField("About the Excel");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#623A2C');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to describe the excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - Header row number. Example: If the header is in the first row, then the value should be 0
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The data of the excel file.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['ds_draw_charts_from_excel'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Excel Chart")
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
        this.appendValueInput("x_col")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("X Column")
            .appendField("=");
        this.appendValueInput("y_col")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Y Column")
            .appendField("=");
        this.appendValueInput("title")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Title")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Type")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["BAR", "bar"], ["SCATTER", "scatter"], ["PIE", "pie"], ["SUNBURST", "sun"], ["HISTOGRAM", "histogram"], ["BOX", "box"], ["STRIP", "strip"]]), "chart_type");
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
        this.setColour('#623A2C');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to draw charts from excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - Header row number. Example: If the header is in the first row, then the value should be 0

        X Column - The column name of the x axis. Example: "X"

        Y Column - The column name of the y axis. Example: "Y"

        Title - The title of the chart. Example: "Chart Title"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_copy_range_from_sheet'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Copy From Sheet")
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
        this.appendValueInput("start_col")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Start Column")
            .appendField("=");
        this.appendValueInput("start_row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Start Row")
            .appendField("=");
        this.appendValueInput("end_col")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("End Column")
            .appendField("=");
        this.appendValueInput("end_row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("End Row")
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
            .appendField("Contents in range");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to copy data from excel file.
        NOTE: All rows and columns are numbered starting from 0.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Start Column - The column number of the start column. Example: If the start column is in the first column, then the value should be 0

        Start Row - The row number of the start row. Example: If the start row is in the first row, then the value should be 0

        End Column - The column number of the end column. Example: If the end column is in the last column, then the value should be the number of columns in the sheet - 1

        End Row - The row number of the end row. Example: If the end row is in the last row, then the value should be the number of rows in the sheet - 1
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_paste_range_to_sheet'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Paste to Sheet")
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
        this.appendValueInput("start_col")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Start Column")
            .appendField("=");
        this.appendValueInput("start_row")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Start Row")
            .appendField("=");
        this.appendValueInput("copied_data")
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
        ${'````````````````'}
        This block allows paste range of data to excel sheet.
        NOTE: All rows and columns are numbered starting from 0.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Start Column - The column number of the start column. Example: If the start column is in the first column, then the value should be 0

        Start Row - The row number of the start row. Example: If the start row is in the first row, then the value should be 0

        Data - The data to be pasted. Variable used as a return value of the copy range block.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};


Blockly.Blocks['excel_get_all_header_columns'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Headers")
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
            .appendField("[Head1, Hea..]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows to get all the header columns in excel sheet.
        NOTE: All rows and columns are numbered starting from 0.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - Header row number. Example: If the header is in the first row, then the value should be 0
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The header column names
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_get_row_column_count'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Row Column Count")
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
            .appendField("[Row, Column]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows to get the row and column count of the excel sheet.
        NOTE: All rows and columns are numbered starting from 0.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - Header row number. Example: If the header is in the first row, then the value should be 0
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The row and column count
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_get_all_sheet_names'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Sheet Names")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filepath")
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
            .appendField("[Sheet 1, Sheet..]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows to get all the sheet names in excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The sheet names
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_clear_sheet'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Clear Sheet")
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
        ${'````````````````'}
        This block allows to clear the  contents of the excel sheet.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - Header row number. Example: If the header is in the first row, then the value should be 0
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_drop_columns'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Drop Columns")
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
        this.appendValueInput("cols")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Columns")
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
        ${'````````````````'}
        This block allows to drop the columns from the excel sheet.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - Header row number. Example: If the header is in the first row, then the value should be 0

        Columns - The column names to be dropped. Example: "A" or ["A","B"]
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_remove_duplicates'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Remove Duplicates")
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
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Columns")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Save to Same file")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "same_file");
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
        ${'````````````````'}
        This block allows to remove the duplicates from the excel sheet.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - Header row number. Example: If the header is in the first row, then the value should be 0

        Columns - The column names for duplicate removal. Example: "A" or ["A","B"]

        Output Folder - The folder where the output excel file will be saved. Example: "C:\\Users\\User\\Desktop"

        Output Filename - The filename of the output excel file. Example: "file.xlsx"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_group_by_column_values_n_split'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Group By Column and Split")
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
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Columns")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
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
        ${'````````````````'}
        This block allows to group the values of the column and split the values into multiple columns.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - Header row number. Example: If the header is in the first row, then the value should be 0

        Columns - The column names for grouping and splitting. Example: "A" or ["A","B"]

        Output Folder - The folder where the output excel file will be saved. Example: "C:\\Users\\User\\Desktop"

        Output Filename - The filename of the output excel file. Example: "file.xlsx"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_if_value_exists'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Check Value Exists")
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
        this.appendValueInput("cols")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Columns")
            .appendField("=");
        this.appendValueInput("value")
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
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#12641D');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows to check if the value exists in the column.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Header - Header row number. Example: If the header is in the first row, then the value should be 0

        Columns - The column names for grouping and splitting. Example: "A" or ["A","B"]

        Value - The value to be checked. Example: "Hello"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_apply_template_format'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Apply Template Format")
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
        this.appendValueInput("input_template_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Template Filepath")
            .appendField("=");
        this.appendValueInput("input_template_sheetname")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Template Sheetname")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Save to Same file")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "same_file");
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
        ${'````````````````'}
        This block allows to apply the template format to the input excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"

        Template Filepath - The filepath of the template excel file. Example: "C:\\Users\\User\\Desktop\\template.xlsx"

        Template Sheetname - The sheetname of the template excel file. Example: "Sheet1"

        Output Folder (OPT) - The folder to save the output excel file. Example: "C:\\Users\\User\\Desktop"

        Output Filename (OPT) - The filename of the output excel file. Example: "output.xlsx"

        Save to Same file - Whether to save the output excel file to the same file or not. Example: "True"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_apply_format_as_table'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Apply Table Format")
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
        ${'````````````````'}
        This block allows to apply the table format to the input excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the input excel file. Example: "C:\\Users\\User\\Desktop\\file.xlsx"

        Sheetname - The sheetname of the input excel file. Example: "Sheet1"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_merge_all_files'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Merge All Files")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_filepath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Folder Path")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
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
        ${'````````````````'}
        This block allows to merge all the excel files in the input folder.
        ____________________________________________
        Inputs:
        ${'````````'}
        Folder Path - The folder path of the input excel files. Example: "C:\\Users\\User\\Desktop\\files"

        Output Folder (OPT) - The folder to save the output excel file. Example: "C:\\Users\\User\\Desktop"

        Output Filename (OPT) - The filename of the output excel file. Example: "output.xlsx"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_create_file'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Create Excel File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("output_sheetname")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Sheet Name")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder")
            .appendField("=");
        this.appendValueInput("output_filename")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename")
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
        ${'````````````````'}
        This block allows to create an excel file with the given sheet name and in the desired output folder.
        ____________________________________________
        Inputs:
        ${'````````'}
        Sheet Name - The sheet name of the output excel file. Example: "Sheet1"

        Output Folder - The folder to save the output excel file. Example: "C:\\Users\\User\\Desktop"

        Output Filename - The filename of the output excel file. Example: "output.xlsx"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};


Blockly.Blocks['pause_program'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Pause Program")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("seconds")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Seconds")
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
        this.setColour('#003658');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows to pause the program for the given number of seconds.
        ____________________________________________
        Inputs:
        ${'````````'}
        Seconds - The number of seconds to pause the program. Example: "5"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['text_to_speech'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Text To Speech")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("audio")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Text")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Show Text")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "show");
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
        this.setColour('#1E797D');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows to speak-out the given text.
        ____________________________________________
        Inputs:
        ${'````````'}
        Text - The text to be spoken. Example: "Hello World"

        Show Text - Whether to show the spoken text or not. Example: "True"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['speech_to_text'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Speech To Text")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
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
            .appendField("Text you spoke..");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#1E797D');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows to listen to the microphone and get the text spoken by the user.
        ____________________________________________
        Inputs:
        ${'````````'}
        Access to the microphone. 
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The text spoken by the user.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['image_to_text'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Image To Text")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("img_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Path")
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
            .appendField("Text from image");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#102F24');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows to convert an image to text (OCR) using PyTesseract.
        ____________________________________________
        Inputs:
        ${'````````'}
        Path - The path of the image. Example: "C:\\Users\\User\\Desktop\\image.jpg"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The text from the image.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['api_request'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("API")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("url")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Endpoint URL")
            .appendField("=");
        this.appendValueInput("headers")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Headers")
            .appendField("=");
        this.appendValueInput("body")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Body")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Method")
            .appendField(new Blockly.FieldDropdown([["GET", "GET"], ["POST", "POST"], ["PUT", "PUT"], ["DELETE", "DELETE"]]), "method");
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
            .appendField("Text from image");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#003658');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows to make an API request.
        ____________________________________________
        Inputs:
        ${'````````'}
        Endpoint URL - The URL of the API. Example: "https://www.google.com"

        Headers - The headers of the API. Example: "Content-Type: application/json"

        Body - The body of the API. Example: "{\"name\":\"John\"}"

        Method - The method of the API. Example: "GET"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The data returned by the API.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_write_text_file'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Write Text File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("txt_file_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("File Path")
            .appendField("=");
        this.appendValueInput("contents")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Contents")
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
        this.setColour('#800080');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows to write desired data to a text file.
        ____________________________________________
        Inputs:
        ${'````````'}
        File Path - The path of the file. Example: "C:\\Users\\User\\Desktop\\file.txt"

        Contents - The contents of the file. Example: "Hello World!"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_create'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Create Folder")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("strFolderPath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Folder Path")
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
        this.setColour('#800080');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to create a folder at the desired location.
        ____________________________________________
        Inputs:
        ${'````````'}
        Folder Path - The path of the folder. Example: "C:\\Users\\User\\Desktop\\folder"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_create_text_file'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Create Text File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("textFolderPath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Folder Path")
            .appendField("=");
        this.appendValueInput("txtFileName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Filename")
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
        this.setColour('#800080');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to create a text file at the desired location.
        ____________________________________________
        Inputs:
        ${'````````'}
        Folder Path - The path of the folder. Example: "C:\\Users\\User\\Desktop\\folder"

        Filename - The name of the file. Example: "file.txt"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_delete_all_files'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Delete Files")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("fullPathOfTheFolder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Folder Path")
            .appendField("=");
        this.appendValueInput("file_extension_without_dot")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Extension")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Print Status")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "print_status");
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
        this.setColour('#800080');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to delete all files of a certain extension from a folder.
        ____________________________________________
        Inputs:
        ${'````````'}
        Folder Path - The path of the folder. Example: "C:\\Users\\User\\Desktop\\folder"

        Extension - The extension of the files to be deleted. Example: "txt"

        Print Status - Whether to print the status of the operation or not.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['file_rename'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Rename File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("old_file_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Old File Path")
            .appendField("=");
        this.appendValueInput("new_file_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("New File Name")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Print Status")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "print_status");
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
        this.setColour('#800080');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to rename a file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Old File Path - The path of the file to be renamed. Example: "C:\\Users\\User\\Desktop\\file.txt"

        New File Name - The new name of the file. Example: "new_file.txt"

        Print Status - Whether to print the status of the operation or not.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_get_all_filenames_as_list'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Filenames")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("strFolderPath")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Folder Path")
            .appendField("=");
        this.appendValueInput("extension")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Extension")
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
            .appendField("[file1, file2..]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to get all filenames of a certain extension from a folder.
        ____________________________________________
        Inputs:
        ${'````````'}
        Folder Path - The path of the folder. Example: "C:\\Users\\User\\Desktop\\folder"

        Extension - The extension of the files to be deleted. Example: "png" or "pdf"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_read_text_file'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Read Text File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("txt_file_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("File Path")
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
            .appendField("Contents of File");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to read a text file.
        ____________________________________________
        Inputs:
        ${'````````'}
        File Path - The path of the file to be read. Example: "C:\\Users\\User\\Desktop\\file.txt"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['file_get_json_details'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get JSON Data")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("path_of_json_file")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("JSON File Path")
            .appendField("=");
        this.appendValueInput("section")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Section (Key)")
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
            .appendField("Info under Key");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#800080');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to get the data under a certain key from a JSON file.
        ____________________________________________
        Inputs:
        ${'````````'}
        JSON File Path - The path of the JSON file. Example: "C:\\Users\\User\\Desktop\\file.json"

        Section (Key) - The key of the data to be retrieved. Example: "name"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['key_press'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Press Keys")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Key 1")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["", "''"],
            ["WINDOWS", "'{RWIN}'"],
            ["ALT", "'{VK_MENU}'"],
            ["BACKSPACE", "'{BACKSPACE}'"],
            ["CONTROL", "'{VK_CONTROL}'"],
            ["DELETE", "'{DELETE}'"],
            ["SHIFT", "'{VK_SHIFT}'"],
            ["SPACE", "'{SPACE}'"],
            ["TAB", "'{TAB}'"],
            ["HOME", "'{HOME}'"],
            ["INSERT", "'{INSERT}'"],
            ["END", "'{END}'"],
            ["ENTER", "'{ENTER}'"],
            ["ESCAPE", "'{VK_ESCAPE}'"],
            ["PAGE_DOWN", "'{PGDN}'"],
            ["PAGE_UP", "'{PGUP}'"],
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
            ["ADD", "'{VK_ADD}'"],
            ["DIVIDE", "'{VK_DIVIDE}'"],
            ["EQUALS", "'{VK_RETURN}'"],
            ["MULTIPLY", "'{VK_MULTIPLY}'"],
            ["SUBTRACT", "'{VK_SUBTRACT}'"],
            ["ARROW_DOWN", "'{VK_DOWN}'"],
            ["ARROW_LEFT", "'{LEFT}'"],
            ["ARROW_RIGHT", "'{RIGHT}'"],
            ["ARROW_UP", "'{UP}'"],
            ["F1", "'{F1}'"],
            ["F2", "'{F2}'"],
            ["F3", "'{F3}'"],
            ["F4", "'{F4}'"],
            ["F5", "'{F5}'"],
            ["F6", "'{F6}'"],
            ["F7", "'{F7}'"],
            ["F8", "'{F8}'"],
            ["F9", "'{F9}'"],
            ["F10", "'{F2}'"],
            ["F11", "'{F11}'"],
            ["F12", "'{F12}'"]]), "key_1");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Key 2")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["", "''"],
            ["WINDOWS", "'{RWIN}'"],
            ["ALT", "'{VK_MENU}'"],
            ["BACKSPACE", "'{BACKSPACE}'"],
            ["CONTROL", "'{VK_CONTROL}'"],
            ["DELETE", "'{DELETE}'"],
            ["SHIFT", "'{VK_SHIFT}'"],
            ["SPACE", "'{SPACE}'"],
            ["TAB", "'{TAB}'"],
            ["HOME", "'{HOME}'"],
            ["INSERT", "'{INSERT}'"],
            ["END", "'{END}'"],
            ["ENTER", "'{ENTER}'"],
            ["ESCAPE", "'{VK_ESCAPE}'"],
            ["PAGE_DOWN", "'{PGDN}'"],
            ["PAGE_UP", "'{PGUP}'"],
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
            ["ADD", "'{VK_ADD}'"],
            ["DIVIDE", "'{VK_DIVIDE}'"],
            ["EQUALS", "'{VK_RETURN}'"],
            ["MULTIPLY", "'{VK_MULTIPLY}'"],
            ["SUBTRACT", "'{VK_SUBTRACT}'"],
            ["ARROW_DOWN", "'{VK_DOWN}'"],
            ["ARROW_LEFT", "'{LEFT}'"],
            ["ARROW_RIGHT", "'{RIGHT}'"],
            ["ARROW_UP", "'{UP}'"],
            ["F1", "'{F1}'"],
            ["F2", "'{F2}'"],
            ["F3", "'{F3}'"],
            ["F4", "'{F4}'"],
            ["F5", "'{F5}'"],
            ["F6", "'{F6}'"],
            ["F7", "'{F7}'"],
            ["F8", "'{F8}'"],
            ["F9", "'{F9}'"],
            ["F10", "'{F2}'"],
            ["F11", "'{F11}'"],
            ["F12", "'{F12}'"]]), "key_2");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Key 3")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["", "''"],
            ["WINDOWS", "'{RWIN}'"],
            ["ALT", "'{VK_MENU}'"],
            ["BACKSPACE", "'{BACKSPACE}'"],
            ["CONTROL", "'{VK_CONTROL}'"],
            ["DELETE", "'{DELETE}'"],
            ["SHIFT", "'{VK_SHIFT}'"],
            ["SPACE", "'{SPACE}'"],
            ["TAB", "'{TAB}'"],
            ["HOME", "'{HOME}'"],
            ["INSERT", "'{INSERT}'"],
            ["END", "'{END}'"],
            ["ENTER", "'{ENTER}'"],
            ["ESCAPE", "'{VK_ESCAPE}'"],
            ["PAGE_DOWN", "'{PGDN}'"],
            ["PAGE_UP", "'{PGUP}'"],
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
            ["ADD", "'{VK_ADD}'"],
            ["DIVIDE", "'{VK_DIVIDE}'"],
            ["EQUALS", "'{VK_RETURN}'"],
            ["MULTIPLY", "'{VK_MULTIPLY}'"],
            ["SUBTRACT", "'{VK_SUBTRACT}'"],
            ["ARROW_DOWN", "'{VK_DOWN}'"],
            ["ARROW_LEFT", "'{LEFT}'"],
            ["ARROW_RIGHT", "'{RIGHT}'"],
            ["ARROW_UP", "'{UP}'"],
            ["F1", "'{F1}'"],
            ["F2", "'{F2}'"],
            ["F3", "'{F3}'"],
            ["F4", "'{F4}'"],
            ["F5", "'{F5}'"],
            ["F6", "'{F6}'"],
            ["F7", "'{F7}'"],
            ["F8", "'{F8}'"],
            ["F9", "'{F9}'"],
            ["F10", "'{F2}'"],
            ["F11", "'{F11}'"],
            ["F12", "'{F12}'"]]), "key_3");
        this.appendValueInput("write_to_window")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Window Name")
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
        this.setColour('#511B73');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block will write a string to a window.
        ____________________________________________
        Inputs:
        ${'````````'}
        Key 1 - The first key to press. Example: "CTRL" or "a" 

        Key 2 - The second key to press. Example: "SHIFT" or "" (You can leave this blank if you don't want to press a second key)

        Key 3 - The third key to press. Example: "DELETE" or "" (You can leave this blank if you don't want to press a third key)

        Window Name - The name of the window to write to. Example: "Console"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        Parameters:

        this.setHelpUrl("");
    }
};

Blockly.Blocks['key_write_enter'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Write Text")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("text_to_write")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Text")
            .appendField("=");
        this.appendValueInput("write_to_window")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Window Name")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("At End")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["Enter", "e"], ["Tab", "t"]]), "key");
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
        this.setColour('#511B73');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block will write a string to an application identified by the window name.
        ____________________________________________
        Inputs:
        ${'````````'}
        Text - The text to write. Example: "Hello World"

        Window Name - The name of the window to write to. Example: "Notepad"

        At End - The key to press at the end of the text. Example: Enter or Tab
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['key_hit_enter'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Press Enter")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("write_to_window")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Window Name")
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
        this.setColour('#511B73');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block will press the enter key on an application identified by the window name.
        ____________________________________________
        Inputs:
        ${'````````'}
        Window Name - The name of the window to press enter on. Example: "Notepad"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mail_send_via_desktop_outlook'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Desktop Outlook")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("to_email_id")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("To Email")
            .appendField("=");
        this.appendValueInput("subject")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Subject")
            .appendField("=");
        this.appendValueInput("message")
            // .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Message")
            .appendField("=");
        this.appendValueInput("attachment_path")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Attachment (OPT)")
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
        this.setColour('#611BD1');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to send an email via desktop outlook.
        ____________________________________________
        Inputs:
        ${'````````'}
        To Email - The email address to send the email to. Example: "support@pybots.ai"

        Subject - The subject of the email. Example: "Hello World - Test Email"

        Message - The message of the email. Example: "Hello World"

        Attachment (OPT) - The path to the attachment. Example: "C:\\Users\\User\\Desktop\\test.txt"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['mail_send_gmail_with_app_password'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("GMAIL")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("gmail_username")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Username")
            .appendField("=");
        this.appendValueInput("gmail_app_password")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("App Password")
            .appendField("=");
        this.appendValueInput("to_email_id")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("To Email")
            .appendField("=");
        this.appendValueInput("subject")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Subject")
            .appendField("=");
        this.appendValueInput("message")
            // .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Message")
            .appendField("=");
        this.appendValueInput("attachment_path")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Attachment (OPT)")
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
        this.setColour('#611BD1');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to send an email via gmail.
        Tip: Please refer these steps to create an App Password for your gmail account:
        https://support.google.com/accounts/answer/185833
        ____________________________________________
        Inputs:
        ${'````````'}
        Username - The username of the gmail account. Example: "support@pybots.ai" 

        App Password - The app password of the gmail account. Example: "123456789"

        To Email - The email address to send the email to. Example: "support@pybots.ai" 

        Subject - The subject of the email. Example: "Hello World - Test Email"

        Message - The message of the email. Example: "Hello World"

        Attachment (OPT) - The path to the attachment.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("https://support.google.com/accounts/answer/185833#:~:text=Create%20%26%20use%20App%20Passwords");
    }
};

Blockly.Blocks['msg_box_info'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Message")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("msg_for_user")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Message")
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
        this.setColour('#3C0C88');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to display a message to the user using a message box.
        ____________________________________________
        Inputs:
        ${'````````'}
        Message - The message to display to the user. Example: "Hello World"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['msg_box_ask_yes_no'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Yes or No")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("msg_for_user")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Message")
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
        this.setColour('#3C0C88');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you take the user's input in a yes or no question.
        ____________________________________________
        Inputs:
        ${'````````'}
        Message - The message to display to the user. Example: "Hello World"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['msg_count_down'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Count Down")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("msg_for_user")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Message")
            .appendField("=");
        this.appendValueInput("default_time")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Time")
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
        this.setColour('#3C0C88');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to display a count down timer to the user.
        ____________________________________________
        Inputs:
        ${'````````'}
        Message - The message to display to the user. Example: "Hello World"

        Time - The time in seconds to count down. Example: 10
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['print_ap'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("      PRINT")
            .appendField(new Blockly.FieldVariable("STATUS"), "status");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to print a variable to the user on Python Console.
        ____________________________________________
        Inputs:
        ${'````````'}
        None
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['mouse_click'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Mouse Click")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("x")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("X Pos")
            .appendField("=");
        this.appendValueInput("y")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Y Pos")
            .appendField("=");
        this.appendValueInput("no_of_clicks")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("No of Clicks")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Button")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["Left", "left"], ["Right", "right"]]), "left_or_right");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Type =")
            .appendField(new Blockly.FieldDropdown([["Absolute", "abs"], ["Relative", "rel"]]), "type_of_movement");
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
        this.setColour('#42668B');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to click the mouse at a certain location.
        ____________________________________________
        Inputs:
        ${'````````'}
        X Pos - The x position to click. Example: 100

        Y Pos - The y position to click. Example: 100

        No of Clicks - The number of times to click. Example: 2

        Button - The button to click. Example: "left"

        Type - The type of click - absolute or relative. Example: "abs"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['mouse_move'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Mouse Move")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("x")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("X Pos")
            .appendField("=");
        this.appendValueInput("y")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Y Pos")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Type =")
            .appendField(new Blockly.FieldDropdown([["Absolute", "abs"], ["Relative", "rel"]]), "type_of_movement");
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
        this.setColour('#42668B');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to move the mouse to a certain location.
        ____________________________________________
        Inputs:
        ${'````````'}
        X Pos - The x position to move to. Example: 100

        Y Pos - The y position to move to. Example: 100

        Type - The type of movement - absolute or relative. Example: "abs"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mouse_drag_from_to'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Mouse Drag")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("x1")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Start X Pos")
            .appendField("=");
        this.appendValueInput("y1")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Start Y Pos")
            .appendField("=");
        this.appendValueInput("x2")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Final X Pos")
            .appendField("=");
        this.appendValueInput("y2")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Final Y Pos")
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
        this.setColour('#42668B');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to drag the mouse from one location to another.
        ____________________________________________
        Inputs:
        ${'````````'}
        Start X Pos - The x position to start the drag. Example: 100

        Start Y Pos - The y position to start the drag. Example: 100

        Final X Pos - The x position to end the drag. Example: 200

        Final Y Pos - The y position to end the drag. Example: 200  
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['mouse_search_snip_return_coordinates_x_y'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Image Position")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("img")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Image Path")
            .appendField("=");
        this.appendValueInput("wait")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Wait (If not found)")
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
            .appendField("] ");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("[x,y]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#42668B');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to search for an image on the screen and return the coordinates of the image.
        ____________________________________________
        Inputs:
        ${'````````'}
        Image Path - The path to the image to search for. Example: "C:\\Users\\User\\Desktop\\image.png"

        Wait (If not found) - The number of seconds to wait for the image to be found. Example: 10
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The coordinates of the image.
        ____________________________________________
        `);


        this.setHelpUrl("");
    }
};

Blockly.Blocks['pdf_extract_all_tables'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Tables From PDF")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("pdf_file_path")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("File Path")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Folder (OPT)")
            .appendField("=");
        this.appendValueInput("output_file_name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Output Filename (OPT)")
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
        this.setColour('#6D1010');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to extract all tables from a pdf file.
        ____________________________________________
        Inputs:
        ${'````````'}
        File Path - The path to the pdf file. Example: "C:\\Users\\User\\Desktop\\file.pdf"

        Output Folder (OPT) - The folder to save the tables to. Example: "C:\\Users\\User\\Desktop\\"

        Output Filename (OPT) - The filename to save the tables to. Example: "file.csv"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['citrix_scrape_contents_by_search_copy_paste'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Scrape Contents By Search Copy Paste")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("highlight_text")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Search Text")
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
            .appendField("] ");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Contents that is copied to clipboard.");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#2672A1');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to scrape the contents of a webpage and copy it to the clipboard.
        ____________________________________________
        Inputs:
        ${'````````'}
        Search Text - The text to search for. Example: "Search Text"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The contents that is copied to clipboard.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['citrix_window_clear_search'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Clear Search Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
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
        this.setColour('#2672A1');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block clears the window from previous searches. This is used in Citrix Systems.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['clipboard_get_data'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Data from Clipboard")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
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
            .appendField("Contents in Clipboard");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#003658');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to get the contents of the clipboard.
        ____________________________________________
        Inputs:
        ${'````````'}
        None
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The contents in the clipboard.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['clipboard_set_data'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Data to Clipboard")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("data")
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
        this.setColour('#003658');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to set the contents of the clipboard.
        ____________________________________________
        Inputs:
        ${'````````'}
        Data - The contents to set in the clipboard. Example: "Hello World" or any variable name.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['screen_clear_search'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Clear search")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("delay")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Delay")
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
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to clear the search.
        ____________________________________________
        Inputs:
        ${'````````'}
        Delay - The delay in seconds before the search is cleared. Example: 10.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['scrape_save_contents_to_notepad'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Scrape to File")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("folderPathToSaveTheNotepad")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Folder path")
            .appendField("=");
        this.appendValueInput("switch_to_window")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Window Name")
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
            .appendField("File path");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to scrape the contents of a window and save it to a notepad file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Folder path - The path to the folder where the notepad file will be saved. Example: "C:\\Users\\username\\Desktop\\".

        Window Name - The name of the application window to scrape. Example: "Notepad".
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['string_extract_only_alphabets'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Extract Alphabets")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("inputString")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("String (or) Text")
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
            .appendField("ModifiedString");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#025451');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to extract only the alphabets from a string.
        ____________________________________________
        Inputs:
        ${'````````'}
        String (or) Text - The string or text to extract the alphabets from. Example: "Hello World".
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The modified string having only alphabets
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['string_extract_only_numbers'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Extract Numbers")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("inputString")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("String (or) Text")
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
            .appendField("123456789");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#025451');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to extract only the numbers from a string.
        ____________________________________________
        Inputs:
        ${'````````'}
        String (or) Text - The string or text to extract the numbers from. Example: "Hello World".
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The modified string having only numbers
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['string_remove_special_characters'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Remove Symbols")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("inputStr")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("String (or) Text")
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
            .appendField("Abc123");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#025451');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to remove all the special characters from a string.
        ____________________________________________
        Inputs:
        ${'````````'}
        String (or) Text - The string or text to remove the special characters from. Example: "Hello World".
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['windows_show_desktop'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Show Desktop")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
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
        this.setColour('#a56e5b');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to show the desktop by minimizing all the open application windows.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['windows_launch_app'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Launch App")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("pathOfExeFile")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Name (or) Path")
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
        this.setColour('#a56e5b');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to launch an application or executable or batch file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Name (or) Path - The name or path of the executable file to launch. Example: "C:\\Program Files\\MyApp.exe".
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_restore_windows'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Restore Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("windowName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Name (or) Title")
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
        this.setColour('#a56e5b');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to restore a window by its name or title.
        ____________________________________________
        Inputs:
        ${'````````'}
        Name (or) Title - The name or title of the window to restore. Example: "Paint" or "Excel".
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_activate_and_maximize_windows'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Maximize Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("windowName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Name (or) Title")
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
        this.setColour('#a56e5b');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to maximize any application window by its name or title.
        ____________________________________________
        Inputs:
        ${'````````'}
        Name (or) Title - The name or title of the window to maximize. Example: "Paint" or "MyApp".
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_minimize_windows'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Minimize Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("windowName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Name (or) Title")
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
        this.setColour('#a56e5b');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to minimize any application window by its name or title.
        ____________________________________________
        Inputs:
        ${'````````'}
        Name (or) Title - The name or title of the window to minimize. Example: "Google Chrome"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_close_windows'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Close Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("windowName")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Name (or) Title")
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
        this.setColour('#a56e5b');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to close any application window by its name or title.
        ____________________________________________
        Inputs:
        ${'````````'}
        Name (or) Title - The name or title of the window to close. Example: "Google Chrome"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_get_all_opened_titles_windows'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get All Window Names")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
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
            .appendField("[title1, title2, ..]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a56e5b');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to get all titles of all opened application windows.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The titles of all opened application windows as a list.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_get_active_window'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Active Window Title")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
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
            .appendField("Title of Window");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#a56e5b');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to get the title of the active application window.
        ____________________________________________
        Inputs:
        ${'````````'}
        Active Window Title - The title of the active application window. Example: "Google Chrome"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - The title of the active application window.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['window_activate_window'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Activate Window")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("window_title")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_LEFT)
            .appendField("Name (or) Title")
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
        this.setColour('#a56e5b');
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block allows you to activate a window by its title.
        ____________________________________________
        Inputs:
        ${'````````'}
        Name (or) Title - The title of the window to be activated. Example: "Google Chrome"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};