Blockly.Blocks['df_convert_column_to_type'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe Change Column Type")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck(null)
            .appendField("Column name")
            .appendField("=");
        this.appendValueInput("column_type")
            .setCheck(null)
            .appendField("Column Type")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
            Description:
            ${'````````````````'}
            Converts a column of a dataframe to a given type
            ____________________________________________
            Inputs:
            ${'````````'}
            Dataframe - The dataframe to get the cell from.
    
            Column name - The name of the column, Example: "A"

            Column type - Column type to be converted to like string, int, float, date, boolean, complex, bytes, etc.
            ____________________________________________
            Returns:
            ${'```````````'}
            DATA - The modified dataframe object
            ____________________________________________
            `);

        this.setHelpUrl("");
    }
};


Blockly.Python['df_convert_column_to_type'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
    var value_column_type = Blockly.Python.valueToCode(block, 'column_type', Blockly.Python.ORDER_ATOMIC);
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_data}] = ap.df_convert_column_to_type(df=${value_df}, column_name=${value_column_name}, column_type=${value_column_type})\n`;
    return code;
};


Blockly.Blocks['excel_tabular_data_from_website'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe from Website")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("website_url")
            .setCheck("String")
            .appendField("URL")
            .appendField("=");
        this.appendValueInput("table_number")
            .setCheck(null)
            .appendField("Table Number")
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
        Description :
        This block will return desired tabular data from a website as a dataframe object.
        ____________________________________________
        Inputs:
        ${'````````'}
        URL - URL of the website as a string. Example : "https://www.google.com"

        Table Number - Table number to be extracted as a number starting from 1. Example : 3
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Dataframe object containing the data.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['df_from_list'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe from List")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("list_of_lists")
            .setCheck(null)
            .appendField("List")
            .appendField("=");
        this.appendValueInput("column_names")
            .setCheck(null)
            .appendField("Column Names")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DF"), "df")
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
        Description :
        This block will return a dataframe object created from a list of lists.
        ____________________________________________
        Inputs:
        ${'````````'}
        List - List of lists. Example : [[1,2,3],[4,5,6]]

        Column Names - List of column names. Example : ["A","B","C"]
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Dataframe object containing the data.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['df_from_string'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe from Text")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df_string")
            .setCheck("String")
            .appendField("Text")
            .appendField("=");
        this.appendValueInput("word_delimeter")
            .setCheck("String")
            .appendField("Word Separator")
            .appendField("=");
        this.appendValueInput("line_delimeter")
            .setCheck("String")
            .appendField("Line Separator")
            .appendField("=");
        this.appendValueInput("column_names")
            // .setCheck("String")
            .appendField("Column Names")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DF"), "df")
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
        Description :
        This block will return a dataframe object created from a string.
        ____________________________________________
        Inputs:
        ${'````````'}
        String - String containing the data. Example : "1,2,3\n4,5,6"

        Word Separator - Word separator used to separate words in the string. Example : ","

        Line Separator - Line separator used to separate lines in the string. Example : "\n"

        Column Names - List of column names. Example : ["A","B","C"]
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Dataframe object containing the data.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['df_extract_sub_df_v2'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Extract Sub Dataframe")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck("String")
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("row_start")
            .setCheck("Number")
            .appendField("Row Start")
            .appendField("=");
        this.appendValueInput("row_end")
            .setCheck("Number")
            .appendField("Row End")
            .appendField("=");
        this.appendValueInput("column_start")
            .setCheck("Number")
            .appendField("Column Start")
            .appendField("=");
        this.appendValueInput("column_end")
            .setCheck("Number")
            .appendField("Column End")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        // this.appendDummyInput()
        //     .setAlign(Blockly.ALIGN_CENTRE)
        //     .appendField("[")
        //     .appendField(new Blockly.FieldVariable("STATUS"), "status")
        //     .appendField("]");
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
        Description :
        This block will return a sub-dataframe object created from a dataframe object.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - Dataframe object. Example: Dataframe (created in previous block)

        Row Start - Row number to start extracting from (number starts from 0). Example : 0

        Row End - Row number to end extracting from (number starts from 0). Example : 1

        Column Start - Column number to start extracting from (number starts from 0). Example : 0

        Column End - Column number to end extracting from (number starts from 0). Example : 1
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Dataframe object containing the data.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['set_value_in_df_v2'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Set Value in Dataframe")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("row_number")
            .setCheck("Number")
            .appendField("Row Number")
            .appendField("=");
        this.appendValueInput("column_number")
            .setCheck("Number")
            .appendField("Column Number")
            .appendField("=");
        this.appendValueInput("value")
            .setCheck(null)
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
        // this.appendDummyInput()
        //     .setAlign(Blockly.ALIGN_CENTRE)
        //     .appendField("[")
        //     .appendField(new Blockly.FieldVariable("DATA"), "data")
        //     .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Modified Dataframe Object");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description :
        This block will set a value in a given dataframe object.
        Note: Row and column numbers start from 1.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - Dataframe object to be modified. Example: Dataframe (created in previous block)

        Row Number - Row number to set the value in. Example : 1

        Column Number - Column number to set the value in. Example : 1

        Value - Value to be set in the dataframe. Example : "Hello"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Dataframe object containing the data.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['get_value_in_df_v2'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Value from Dataframe")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("row_number")
            .setCheck("Number")
            .appendField("Row Number")
            .appendField("=");
        this.appendValueInput("column_number")
            .setCheck("Number")
            .appendField("Column Number")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        // this.appendDummyInput()
        //     .setAlign(Blockly.ALIGN_CENTRE)
        //     .appendField("[")
        //     .appendField(new Blockly.FieldVariable("STATUS"), "status")
        //     .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Data :")
            .appendField("Value");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description :
        This block will get a value from a given dataframe object.
        Note: Row and column numbers start from 1.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - Dataframe object to be modified. Example: Dataframe (created in previous block)

        Row Number - Row number to get the value from. Example : 1

        Column Number - Column number to get the value from. Example : 1
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Value from the dataframe.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['df_extract_sub_df'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Extract Sub Dataframe")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck("String")
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("row_start")
            .setCheck("Number")
            .appendField("Row Start")
            .appendField("=");
        this.appendValueInput("row_end")
            .setCheck("Number")
            .appendField("Row End")
            .appendField("=");
        this.appendValueInput("column_start")
            .setCheck("Number")
            .appendField("Column Start")
            .appendField("=");
        this.appendValueInput("column_end")
            .setCheck("Number")
            .appendField("Column End")
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
        Description :
        This block will return a sub-dataframe object created from a dataframe object.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - Dataframe object. Example: Dataframe (created in previous block)

        Row Start - Row number to start extracting from (number starts from 0). Example : 0

        Row End - Row number to end extracting from (number starts from 0). Example : 1

        Column Start - Column number to start extracting from (number starts from 0). Example : 0

        Column End - Column number to end extracting from (number starts from 0). Example : 1
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Dataframe object containing the data.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['set_value_in_df'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Set Value in Dataframe")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("row_number")
            .setCheck("Number")
            .appendField("Row Number")
            .appendField("=");
        this.appendValueInput("column_number")
            .setCheck("Number")
            .appendField("Column Number")
            .appendField("=");
        this.appendValueInput("value")
            .setCheck(null)
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
            .appendField("Modified Dataframe Object");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description :
        This block will set a value in a given dataframe object.
        Note: Row and column numbers start from 1.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - Dataframe object to be modified. Example: Dataframe (created in previous block)

        Row Number - Row number to set the value in. Example : 1

        Column Number - Column number to set the value in. Example : 1

        Value - Value to be set in the dataframe. Example : "Hello"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Dataframe object containing the data.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['get_value_in_df'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Get Value from Dataframe")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("row_number")
            .setCheck("Number")
            .appendField("Row Number")
            .appendField("=");
        this.appendValueInput("column_number")
            .setCheck("Number")
            .appendField("Column Number")
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
            .appendField("Value");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description :
        This block will get a value from a given dataframe object.
        Note: Row and column numbers start from 1.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - Dataframe object to be modified. Example: Dataframe (created in previous block)

        Row Number - Row number to get the value from. Example : 1

        Column Number - Column number to get the value from. Example : 1
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Value from the dataframe.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};


Blockly.Blocks['screen_scrape_extract_table'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Screen Scrape Extract Table")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("switch_to_window")
            .setCheck("String")
            .appendField("Switch to Window")
            .appendField("=");
        this.appendValueInput(",after_this_word")
            .setCheck("String")
            .appendField("After Word")
            .appendField("=");
        this.appendValueInput("before_this_word")
            .setCheck("String")
            .appendField("Before Word")
            .appendField("=");
        this.appendDummyInput()
            .appendField("Include After Word")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "include_after_this_word");
        this.appendDummyInput()
            .appendField("Include Before Word")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "include_before_this_word");
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
        Description :
        This block is used for scraping given window and then using substring (after and before) to extract desired table.
        ____________________________________________
        Inputs:
        ${'````````'}
        Switch to Window - Window to switch to for scraping. Example: "Google"

        After Word - Word to be searched after. Example: "Next"

        Before Word - Word to be searched before. Example: "Date"

        Include After Word - Whether to include the word after or not. Example: "True"

        Include Before Word - Whether to include the word before or not. Example: "False"
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Dataframe object containing the scraped tabular data.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['string_extract_substring'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("String Extract Substring")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("string")
            .setCheck("String")
            .appendField("String")
            .appendField("=");
        this.appendValueInput("start_word")
            .setCheck("String")
            .appendField("Start Word")
            .appendField("=");
        this.appendValueInput("end_word")
            .setCheck("String")
            .appendField("End Word")
            .appendField("=");
        this.appendDummyInput()
            .appendField("Include Start Word")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "include_start_word");
        this.appendDummyInput()
            .appendField("Include End Word")
            .appendField(new Blockly.FieldCheckbox("FALSE"), "include_end_word");
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
            .appendField("Modified String");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#025451');
        this.setTooltip(`
        Description :
        This block is used for extracting substring from given string.
        ____________________________________________
        Inputs:
        ${'````````'}
        String - String to be extracted from. Example: "Hello My-AutoPylot World"

        Start Word - Word to be searched after. Example: "Hello"

        End Word - Word to be searched before. Example: "World"

        Include Start Word - Whether to include the start word in the extracted substring. 

        Include End Word - Whether to include the end word in the extracted substring. 
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether the operation was successful or not.
        DATA - Modified string.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['date_time_now'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Date Time Now")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATE"), "date")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description :
        This block is used for getting current date and time.
        ____________________________________________
        Returns:
        ${'```````````'}
        DATE - Current date.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['add_datetime'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Add Date")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_date")
            .setCheck("String")
            .appendField("Input Date")
            .appendField("=");
        this.appendDummyInput()
            .appendField("Add Type")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["DAY", "days"], ["HOUR", "hours"], ["MINUTE", "minutes"], ["WEEK", "weeks"], ["MONTH", "months"]]), "time_type");
        this.appendValueInput("value")
            .setCheck(null)
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
            .appendField(new Blockly.FieldVariable("DATE"), "date")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description :
        This block is used for adding days and time to given date.
        ____________________________________________
        Inputs:
        ${'````````'} 
        Input Date - Date to be added to. Example: "2020-01-01"

        Value - Value (days/hours/minutes/weeks/months) to be added. Example: "1"
        ____________________________________________
        Returns:
        ${'```````````'}
        DATE - Modified date.   
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['subtract_datetime'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Subtract Date")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("input_date")
            .setCheck("String")
            .appendField("Input Date")
            .appendField("=");
        this.appendDummyInput()
            .appendField("Add Type")
            .appendField("=")
            .appendField(new Blockly.FieldDropdown([["DAY", "days"], ["HOUR", "hours"], ["MINUTE", "minutes"], ["WEEK", "weeks"], ["MONTH", "months"]]), "time_type");
        this.appendValueInput("value")
            .setCheck(null)
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
            .appendField(new Blockly.FieldVariable("DATE"), "date")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description :
        This block is used for subtracting days and time from given date.
        ____________________________________________
        Inputs:
        ${'````````'}
        Input Date - Date to be subtracted from. Example: "2020-01-01"

        Add Type - Type of time to be subtracted. Example: "days" or "hours" or "minutes" or "weeks" or "months"

        Value - Value (days/hours/minutes/weeks/months) to be subtracted. Example: "1"
        ____________________________________________
        Returns:
        ${'```````````'}
        DATE - Modified date.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Python['excel_tabular_data_from_website'] = function (block) {
    var value_website_url = Blockly.Python.valueToCode(block, 'website_url', Blockly.Python.ORDER_ATOMIC);
    var value_table_number = Blockly.Python.valueToCode(block, 'table_number', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.excel_tabular_data_from_website(website_url=${value_website_url}, table_number=${value_table_number})\n`;
    return code;
};

Blockly.Python['df_from_list'] = function (block) {
    var value_list_of_lists = Blockly.Python.valueToCode(block, 'list_of_lists', Blockly.Python.ORDER_ATOMIC);
    var value_column_names = Blockly.Python.valueToCode(block, 'column_names', Blockly.Python.ORDER_ATOMIC);
    var variable_df = Blockly.Python.nameDB_.getName(block.getFieldValue('df'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_df}] = ap.df_from_list(list_of_lists=${value_list_of_lists}, column_names=${value_column_names})\n`;
    return code;
};

Blockly.Python['df_from_string'] = function (block) {
    var value_df_string = Blockly.Python.valueToCode(block, 'df_string', Blockly.Python.ORDER_ATOMIC);
    var value_word_delimeter = Blockly.Python.valueToCode(block, 'word_delimeter', Blockly.Python.ORDER_ATOMIC);
    var value_line_delimeter = Blockly.Python.valueToCode(block, 'line_delimeter', Blockly.Python.ORDER_ATOMIC);
    var value_column_names = Blockly.Python.valueToCode(block, 'column_names', Blockly.Python.ORDER_ATOMIC);
    var variable_df = Blockly.Python.nameDB_.getName(block.getFieldValue('df'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_df}] = ap.df_from_string(df_string=${value_df_string}, word_delimeter=${value_word_delimeter}, line_delimeter=${value_line_delimeter}, column_names=${value_column_names})\n`;
    return code;
};

Blockly.Python['df_extract_sub_df'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_row_start = Blockly.Python.valueToCode(block, 'row_start', Blockly.Python.ORDER_ATOMIC);
    var value_row_end = Blockly.Python.valueToCode(block, 'row_end', Blockly.Python.ORDER_ATOMIC);
    var value_column_start = Blockly.Python.valueToCode(block, 'column_start', Blockly.Python.ORDER_ATOMIC);
    var value_column_end = Blockly.Python.valueToCode(block, 'column_end', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.df_extract_sub_df(df=${value_df}, row_start=${value_row_start}, row_end=${value_row_end}, column_start=${value_column_start}, column_end=${value_column_end})\n`;
    return code;
};

Blockly.Python['set_value_in_df'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_row_number = Blockly.Python.valueToCode(block, 'row_number', Blockly.Python.ORDER_ATOMIC);
    var value_column_number = Blockly.Python.valueToCode(block, 'column_number', Blockly.Python.ORDER_ATOMIC);
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_status}] = ap.set_value_in_df(df=${value_df}, row_number=${value_row_number}, column_number=${value_column_number}, value=${value_value})\n`;
    return code;
};

Blockly.Python['get_value_in_df'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_row_number = Blockly.Python.valueToCode(block, 'row_number', Blockly.Python.ORDER_ATOMIC);
    var value_column_number = Blockly.Python.valueToCode(block, 'column_number', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.get_value_in_df(df=${value_df}, row_number=${value_row_number}, column_number=${value_column_number})\n`;
    return code;
};

Blockly.Python['df_extract_sub_df_v2'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_row_start = Blockly.Python.valueToCode(block, 'row_start', Blockly.Python.ORDER_ATOMIC);
    var value_row_end = Blockly.Python.valueToCode(block, 'row_end', Blockly.Python.ORDER_ATOMIC);
    var value_column_start = Blockly.Python.valueToCode(block, 'column_start', Blockly.Python.ORDER_ATOMIC);
    var value_column_end = Blockly.Python.valueToCode(block, 'column_end', Blockly.Python.ORDER_ATOMIC);
    // var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_data}] = ap.df_extract_sub_df(df=${value_df}, row_start=${value_row_start}, row_end=${value_row_end}, column_start=${value_column_start}, column_end=${value_column_end})\n`;
    return code;
};

Blockly.Python['set_value_in_df_v2'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_row_number = Blockly.Python.valueToCode(block, 'row_number', Blockly.Python.ORDER_ATOMIC);
    var value_column_number = Blockly.Python.valueToCode(block, 'column_number', Blockly.Python.ORDER_ATOMIC);
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.set_value_in_df(df=${value_df}, row_number=${value_row_number}, column_number=${value_column_number}, value=${value_value})\n`;
    return code;
};

Blockly.Python['get_value_in_df_v2'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_row_number = Blockly.Python.valueToCode(block, 'row_number', Blockly.Python.ORDER_ATOMIC);
    var value_column_number = Blockly.Python.valueToCode(block, 'column_number', Blockly.Python.ORDER_ATOMIC);
    // var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_data}] = ap.get_value_in_df(df=${value_df}, row_number=${value_row_number}, column_number=${value_column_number})\n`;
    return code;
};

Blockly.Python['screen_scrape_extract_table'] = function (block) {
    var value_switch_to_window = Blockly.Python.valueToCode(block, 'switch_to_window', Blockly.Python.ORDER_ATOMIC);
    var value__after_this_word = Blockly.Python.valueToCode(block, ',after_this_word', Blockly.Python.ORDER_ATOMIC);
    var value_before_this_word = Blockly.Python.valueToCode(block, 'before_this_word', Blockly.Python.ORDER_ATOMIC);
    var checkbox_include_after_this_word = block.getFieldValue('include_after_this_word') === 'TRUE';
    var checkbox_include_before_this_word = block.getFieldValue('include_before_this_word') === 'TRUE';
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.screen_scrape_extract_table(switch_to_window=${value_switch_to_window}, after_this_word=${value__after_this_word}, before_this_word=${capitalize(value_before_this_word.toString())}, include_after_this_word=${capitalize(checkbox_include_after_this_word.toString())}, include_before_this_word=${capitalize(checkbox_include_before_this_word.toString())})\n`;
    return code;
};

Blockly.Python['string_extract_substring'] = function (block) {
    var value_string = Blockly.Python.valueToCode(block, 'string', Blockly.Python.ORDER_ATOMIC);
    var value_start_word = Blockly.Python.valueToCode(block, 'start_word', Blockly.Python.ORDER_ATOMIC);
    var value_end_word = Blockly.Python.valueToCode(block, 'end_word', Blockly.Python.ORDER_ATOMIC);
    var checkbox_include_start_word = block.getFieldValue('include_start_word') === 'TRUE';
    var checkbox_include_end_word = block.getFieldValue('include_end_word') === 'TRUE';
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.string_extract_substring(string=${value_string}, start_word=${value_start_word}, end_word=${value_end_word}, include_start_word=${capitalize(checkbox_include_start_word.toString())}, include_end_word=${capitalize(checkbox_include_end_word.toString())})\n`;
    return code;
};

Blockly.Python['date_time_now'] = function (block) {
    var variable_date = Blockly.Python.nameDB_.getName(block.getFieldValue('date'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `${variable_date} = ap.date_time_now()\n`;
    return code;
};

Blockly.Python['add_datetime'] = function (block) {
    var value_input_date = Blockly.Python.valueToCode(block, 'input_date', Blockly.Python.ORDER_ATOMIC);
    var dropdown_time_type = block.getFieldValue('time_type');
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var variable_date = Blockly.Python.nameDB_.getName(block.getFieldValue('date'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `${variable_date} = ap.add_datetime(input_date=${value_input_date}, time_type='${dropdown_time_type}', value=${value_value})\n`;
    return code;
};

Blockly.Python['subtract_datetime'] = function (block) {
    var value_input_date = Blockly.Python.valueToCode(block, 'input_date', Blockly.Python.ORDER_ATOMIC);
    var dropdown_time_type = block.getFieldValue('time_type');
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var variable_date = Blockly.Python.nameDB_.getName(block.getFieldValue('date'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `${variable_date} = ap.subtract_datetime(input_date=${value_input_date}, time_type='${dropdown_time_type}', value=${value_value})\n`;
    return code;
};

Blockly.Blocks['excel_concat_all_sheets_of_given_excel'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Excel merge all sheets")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("excel_file_path")
            .setCheck(null)
            .appendField("Excel File Path")
            .appendField("=");
        this.appendValueInput("sheet_names_as_list")
            .setCheck(null)
            .appendField("Sheetnames as List")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block merges all sheets of an excel file into a single dataframe.
        ____________________________________________
        Inputs:
        ${'````````'}
        Excel File Path - The path to the excel file. Example: "C:\\Users\\User\\Desktop\\Excel\\Excel.xlsx"

        Sheetnames as List - A list of sheetnames. Example: ["Sheet1", "Sheet2"] or None for all sheets.
        ____________________________________________
        Returns:
        ${'```````````'}
        DATA - A single dataframe containing all sheets.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['df_drop_rows'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe Drop Rows")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("row_start")
            .setCheck("Number")
            .appendField("Start Row")
            .appendField("=");
        this.appendValueInput("row_end")
            .setCheck("Number")
            .appendField("End row")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block drops desired range of rows from a dataframe.
        NOTE: Both start and end rows are included in the range
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - The dataframe to drop rows from.

        Start Row - The row number to start dropping rows from. Example: 1 for the first row.

        End Row - The row number to stop dropping rows from. Example: 5 for the fifth row.
        ____________________________________________
        Returns:
        ${'```````````'}
        DATA - A dataframe with the desired rows dropped.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['df_vlookup'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Dataframe V-Lookup")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df1")
            .setCheck(null)
            .appendField("Dataframe 1")
            .appendField("=");
        this.appendValueInput("df2")
            .setCheck(null)
            .appendField("Dataframe 2")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck(null)
            .appendField("Column name")
            .appendField("=");
        this.appendValueInput("how")
            .setCheck(null)
            .appendField("How")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block performs vlookup on a dataframe.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe 1 - The dataframe to perform the vlookup on.

        Dataframe 2 - The dataframe to perform the vlookup on.

        Column name - The column name (available in both Dataframes) to perform the vlookup on.

        How - The way to perform the vlookup. Example: "left" or "right" or "inner" or "outer".
        Inner join: Inner join produces an output data frame of only those rows for which the condition is satisfied in both the rows.
        Left join: Left join operation provides all the rows from 1st dataframe and matching rows from the 2nd dataframe.
        Right join: Right join is somewhat similar to left join in which the output dataframe will consist of all the rows from the 2nd dataframe and matching rows from the 1st dataframe.
        Outer join: Outer join provides the output dataframe consisting of rows from both the dataframes.
        ____________________________________________
        Returns:
        ${'```````````'}
        DATA - A dataframe with the vlookup performed.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_get_single_cell_new_2'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Excel get cell")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("header")
            .setCheck("Number")
            .appendField("Header")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck(null)
            .appendField("Column name")
            .appendField("=");
        this.appendValueInput("cell_number")
            .setCheck("Number")
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
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block gets a single cell from an excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - The dataframe to get the cell from.

        Header - The header number of the column. Example: 1 for the first column.

        Column name - The name of the column. Example: "A" or "Employee"

        Cell Number - The number of the cell to get. Example: 2 for the first cell after the header.
        ____________________________________________
        Returns:
        ${'```````````'}
        DATA - A dataframe with the desired cell.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['excel_set_single_cell_new_2'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Excel set cell")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("df")
            .setCheck(null)
            .appendField("Dataframe")
            .appendField("=");
        this.appendValueInput("column_name")
            .setCheck(null)
            .appendField("Column name")
            .appendField("=");
        this.appendValueInput("cell_number")
            .setCheck("Number")
            .appendField("Cell Number")
            .appendField("=");
        this.appendValueInput("text")
            .setCheck(null)
            .appendField("Text")
            .appendField("=");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Returns")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 15, 15, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("[")
            .appendField(new Blockly.FieldVariable("DATA"), "data")
            .appendField("]");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block sets a single cell in an excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Dataframe - The dataframe to set the cell in.

        Column name - The name of the column. Example: "A" or "Employee"

        Cell Number - The number of the cell to set. Example: 2 for the first cell after the header.

        Text - The text to set in the cell. Example: "Hello"
        ____________________________________________
        Returns:
        ${'```````````'}
        DATA - Modified dataframe with the desired cell.
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
            .appendField("PDF extract all tables")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("pdf_file_path")
            .setCheck(null)
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("output_folder")
            .setCheck(null)
            .appendField("Output Folder")
            .appendField("=");
        this.appendValueInput("output_file_name")
            .setCheck(null)
            .appendField("Output Filename")
            .appendField("=");
        this.appendDummyInput()
            .appendField("Borders for table")
            .appendField("=")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "table_with_borders");
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
        This block extracts all tables from a pdf file and saves them as separate sheets in a given excel file.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the pdf file. Example: "C:/Users/User/Desktop/file.pdf"

        Output Folder - The folder to save the tables in. Example: "C:/Users/User/Desktop/output"

        Output Filename - The filename of the output file. Example: "output.xlsx"

        Borders for table - Whether or not to include borders for the tables. Example: True or False. Default: True.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether or not the extraction was successful.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Blocks['folder_delete_file_or_folder'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("Delete File or Folder")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("file_or_folder_path")
            .setCheck(null)
            .appendField("File / Folder Path")
            .appendField("=");
        this.appendDummyInput()
            .appendField("Print Status")
            .appendField("=")
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
        this.setColour(240);
        this.setTooltip(`
        Description:
        ${'````````````````'}
        This block deletes a given file or folder (with all its contents).
        NOTE: There is no confirmation before deleting the file or folder.
        ____________________________________________
        Inputs:
        ${'````````'}
        File / Folder Path - The path of the file or folder to delete. Example: "C:/Users/User/Desktop/file.pdf"

        Print Status - Whether or not to print the status of the deletion. Example: True or False. Default: True.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether or not the deletion was successful.
        ____________________________________________
        `);
        this.setHelpUrl("");
    }
};

Blockly.Blocks['pdf_extract_table'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
            .appendField("PDF extract table")
            .appendField(new Blockly.FieldImage("./images/white_star.png", 20, 20, { alt: "*", flipRtl: "FALSE" }));
        this.appendValueInput("pdf_file_path")
            .setCheck("String")
            .appendField("Filepath")
            .appendField("=");
        this.appendValueInput("table_number")
            .setCheck("Number")
            .appendField("Table number")
            .appendField("=");
        this.appendValueInput("page_number")
            .setCheck("Number")
            .appendField("Page number")
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
        This block extracts desired table from desired page of pdf file and returns it as a dataframe object.
        ____________________________________________
        Inputs:
        ${'````````'}
        Filepath - The filepath of the pdf file. Example: "C:/Users/User/Desktop/file.pdf"

        Table number - The number of the table to extract. Example: 1

        Page number - The number of the page to extract the table from. Example: 1

        Print Status - Whether or not to print the status of the extraction. Example: True or False. Default: True.
        ____________________________________________
        Returns:
        ${'```````````'}
        STATUS - Whether or not the extraction was successful.
        ____________________________________________
        `);

        this.setHelpUrl("");
    }
};

Blockly.Python['excel_concat_all_sheets_of_given_excel'] = function (block) {
    var value_excel_file_path = Blockly.Python.valueToCode(block, 'excel_file_path', Blockly.Python.ORDER_ATOMIC);
    var value_sheet_names_as_list = Blockly.Python.valueToCode(block, 'sheet_names_as_list', Blockly.Python.ORDER_ATOMIC);
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_data}] = ap.excel_concat_all_sheets_of_given_excel(excel_file_path=${value_excel_file_path}, sheet_names_as_list=${value_sheet_names_as_list})\n`;
    return code;
};

Blockly.Python['df_drop_rows'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_row_start = Blockly.Python.valueToCode(block, 'row_start', Blockly.Python.ORDER_ATOMIC);
    var value_row_end = Blockly.Python.valueToCode(block, 'row_end', Blockly.Python.ORDER_ATOMIC);
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_data}] = ap.df_drop_rows(df=${value_df}, row_start=${value_row_start}, row_end=${value_row_end})\n`;
    return code;
};

Blockly.Python['df_vlookup'] = function (block) {
    var value_df1 = Blockly.Python.valueToCode(block, 'df1', Blockly.Python.ORDER_ATOMIC);
    var value_df2 = Blockly.Python.valueToCode(block, 'df2', Blockly.Python.ORDER_ATOMIC);
    var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
    var value_how = Blockly.Python.valueToCode(block, 'how', Blockly.Python.ORDER_ATOMIC);
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_data}] = ap.df_vlookup(df1=${value_df1}, df2=${value_df2}, column_name=${value_column_name}, how=${value_how})\n`;
    return code;
};

Blockly.Python['excel_get_single_cell_new_2'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
    var value_cell_number = Blockly.Python.valueToCode(block, 'cell_number', Blockly.Python.ORDER_ATOMIC);
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_data}] = ap.excel_get_single_cell(df=${value_df}, header=${value_header}, column_name=${value_column_name}, cell_number=${value_cell_number})\n`;
    return code;
};

Blockly.Python['excel_set_single_cell_new_2'] = function (block) {
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
    var value_cell_number = Blockly.Python.valueToCode(block, 'cell_number', Blockly.Python.ORDER_ATOMIC);
    var value_text = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC);
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_data}] = ap.excel_set_single_cell(df=${value_df}, column_name=${value_column_name}, cell_number=${value_cell_number}, text=${value_text})\n`;
    return code;
};

Blockly.Python['pdf_extract_all_tables'] = function (block) {
    var value_pdf_file_path = Blockly.Python.valueToCode(block, 'pdf_file_path', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_file_name = Blockly.Python.valueToCode(block, 'output_file_name', Blockly.Python.ORDER_ATOMIC);
    var checkbox_table_with_borders = block.getFieldValue('table_with_borders') === 'TRUE';
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.pdf_extract_all_tables(pdf_file_path=${value_pdf_file_path}, output_folder=${value_output_folder}, output_file_name=${value_output_file_name}, table_with_borders=${checkbox_table_with_borders})\n`;
    return code;
};

Blockly.Python['folder_delete_file_or_folder'] = function (block) {
    var value_file_or_folder_path = Blockly.Python.valueToCode(block, 'file_or_folder_path', Blockly.Python.ORDER_ATOMIC);
    var checkbox_print_status = block.getFieldValue('print_status') === 'TRUE';
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.folder_delete_file_or_folder(file_or_folder_path=${value_file_or_folder_path}, print_status=${capitalize(checkbox_print_status.toString())})\n`;
    return code;
};

Blockly.Python['pdf_extract_table'] = function (block) {
    var value_pdf_file_path = Blockly.Python.valueToCode(block, 'pdf_file_path', Blockly.Python.ORDER_ATOMIC);
    var value_table_number = Blockly.Python.valueToCode(block, 'table_number', Blockly.Python.ORDER_ATOMIC);
    var value_page_number = Blockly.Python.valueToCode(block, 'page_number', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status},${variable_data}] = ap.pdf_extract_table(pdf_file_path=${value_pdf_file_path}, table_number=${value_table_number}, page_number=${value_page_number})\n`;
    return code;
};
