Blockly.Blocks['try_except'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Try :");
        this.appendStatementInput("try")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("If Error")
            .appendField(new Blockly.FieldVariable("Error"), "e");
        this.appendStatementInput("except")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['try_except'] = function (block) {
    var statements_try = Blockly.Python.statementToCode(block, 'try');
    var variable_e = Blockly.Python.nameDB_.getName(block.getFieldValue('e'), 'VARIABLE');
    var statements_except = Blockly.Python.statementToCode(block, 'except');
    var code = `try:
${statements_try}
except Exception as ${variable_e}:
  ap.report_error_user(${variable_e})
${statements_except}
`;
    return code;
};

Blockly.Blocks['try_except_adv'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Try :");
        this.appendStatementInput("try")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("If Error")
            .appendField(new Blockly.FieldVariable("Error"), "e");
        this.appendStatementInput("except")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setDeletable(false);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['try_except_adv'] = function (block) {
    var statements_try = Blockly.Python.statementToCode(block, 'try');
    var variable_e = Blockly.Python.nameDB_.getName(block.getFieldValue('e'), 'VARIABLE');
    var statements_except = Blockly.Python.statementToCode(block, 'except');
    var code = `try:\n  ap.status_report_started()
${statements_try}\n  ap.status_report_completed()
except Exception as ${variable_e}:
  ap.status_report_failed(${variable_e})
  ap.report_error_user(${variable_e})
${statements_except}
`;
    return code;
};

Blockly.Blocks["get_path"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Filepath :")
            .appendField(new Blockly.FieldTextInput("default"), "filename")
            .appendField(
                new Blockly.FieldImage(
                    "./images/upload_white.png",
                    20,
                    20,
                    "*",
                    function () {
                        window.chrome.webview.postMessage({
                            type: "set_field_name",
                            message: "get_filepath",
                            field_id: "filename",
                            block_id: this.sourceBlock_.id,
                        });
                    }
                )
            );
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("#003658");
        this.setTooltip("Converts the string to OS Path.");
        this.setHelpUrl("");
    },
};

// Block for folder path
Blockly.Blocks["folder_path"] = {
    init: function () {
        this.appendDummyInput()

            .appendField("Folder Path :")
            .appendField(new Blockly.FieldTextInput("default"), "folder_path")
            .appendField(
                new Blockly.FieldImage(
                    "./images/upload_white.png",
                    20,
                    20,
                    "*",
                    function () {
                        window.chrome.webview.postMessage({
                            type: "set_field_name",
                            message: "get_folder_path",
                            field_id: "folder_path",
                            block_id: this.sourceBlock_.id,
                        });
                    }
                )
            );
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour("#003658");
        this.setTooltip("Converts the string to OS Path.");
        this.setHelpUrl("");
    },
};

// Python Block for folder path
Blockly.Python["folder_path"] = function (block) {
    Blockly.Python.definitions_["Path"] = "from pathlib import Path";
    var text_folder_path = block.getFieldValue("folder_path");

    var code = `str(Path(r'${text_folder_path}'))`;
    return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python["get_path"] = function (block) {
    Blockly.Python.definitions_["Path"] = "from pathlib import Path";
    var text_filename = block.getFieldValue("filename");
    // TODO: Assemble Python into code variable.
    var code = `str(Path(r'${text_filename}'))`;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks["status_data"] = {
    init: function () {
        this.appendValueInput("status_variable")
            .setCheck(null)
            .appendField("Status ||");
        this.appendValueInput("data_variable")
            .setCheck(null)
            .appendField("Data ||");
        this.appendValueInput("function_variable").setCheck(null).appendField("=");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#12185B");
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Python["status_data"] = function (block) {
    var value_status = Blockly.Python.valueToCode(
        block,
        "status_variable",
        Blockly.Python.ORDER_ATOMIC
    );
    var value_data = Blockly.Python.valueToCode(
        block,
        "data_variable",
        Blockly.Python.ORDER_ATOMIC
    );
    var value_name = Blockly.Python.valueToCode(
        block,
        "function_variable",
        Blockly.Python.ORDER_NONE
    );
    // TODO: Assemble Python into code variable.
    var code = `[ ${value_status}, ${value_data}] = ${value_name}`;
    return code;
};

Blockly.Blocks["status"] = {
    init: function () {
        this.appendValueInput("status_variable")
            .setCheck(null)
            .appendField("Status ||");
        this.appendValueInput("function_variable").setCheck(null).appendField("=");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#12185B");
        this.set
        this.setTooltip("");
        this.setHelpUrl("");
    },
};

Blockly.Python["status"] = function (block) {
    var value_status_variable = Blockly.Python.valueToCode(
        block,
        "status_variable",
        Blockly.Python.ORDER_ATOMIC
    );
    var value_function_variable = Blockly.Python.valueToCode(
        block,
        "function_variable",
        Blockly.Python.ORDER_NONE
    );
    // TODO: Assemble Python into code variable.
    var code = `[ ${value_status_variable} ] = ${value_function_variable}`;
    return code;
};