change_time = new Date().getTime();

workspace.addChangeListener(block_add);
idle_time = new Date().getTime();
//just an event notifier function that workspace has changed. THe flutter side will automatically call autosave after it receives this trigger
function block_add(event) {
    if (event.type == Blockly.Events.BLOCK_CREATE || event.type == Blockly.Events.BLOCK_DELETE || event.type == Blockly.Events.BLOCK_CHANGE || event.type == Blockly.Events.VAR_CREATE || event.type == Blockly.Events.VAR_DELETE || event.type == Blockly.Events.VAR_RENAME) {
        // let base64data = "";
        Blockly.Python.INFINITE_LOOP_TRAP = null;


        if (event.type == Blockly.Events.BLOCK_CHANGE) {
            change_time = new Date().getTime();
            if (change_time - idle_time > 2000) {
                change_time = new Date().getTime();
                idle_time = change_time;
                window.chrome.webview.postMessage({
                    message: "workspace_changed",
                    type: "workspace_activity",

                    // image: base64data
                });
                // window.chrome.webview.postMessage({
                //     type: "workspace_activity",
                //     message: "workspace_changed",
                // });
            }

        } else {
            window.chrome.webview.postMessage({
                message: "workspace_changed",
                type: "workspace_activity",

                // image: base64data
            });
            // window.chrome.webview.postMessage({
            //     type: "workspace_activity",
            //     message: "workspace_changed",
            // });
        }

    }
}

function readOnly() {
    workspace.options.readOnly = true
    workspace.getToolbox().setVisible(false)
}

function emitcode() {
    window.chrome.webview.postMessage({
        type: "run_code",
        code: Blockly.Python.workspaceToCode(workspace)
    });
}

function add_xml_to_workspace(xml) {
    var xml_string = '<xml xmlns="https://developers.google.com/blockly/xml">' + xml + '</xml>';
    XML_DATA = Blockly.Xml.textToDom(xml_string);
    Blockly.Xml.appendDomToWorkspace(XML_DATA, workspace);
    block_added();
    var last_block = workspace.getTopBlocks()[workspace.getTopBlocks().length - 1];
    var last_block_id = last_block.id;
    workspace.centerOnBlock(last_block_id);
}

Blockly.Blocks['import_cf'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("My-AutoPylot Starts")
            .appendField(new Blockly.FieldImage("./images/crown.png", 30, 30, { alt: "*", flipRtl: "FALSE" }));
        this.setColour("#000");
        this.setNextStatement(true, null);
        this.setStyle("hat_blocks")
        this.setDeletable(true);
        this.setEditable(false);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.Python["import_cf"] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    // TODO: Assemble Python into code variable.
    var code = "";
    return code;
};


Blockly.Blocks['Advanced_AP'] = {
    init: function () {
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("My-AutoPylot Starts")
            .appendField(new Blockly.FieldImage("./images/crown.png", 30, 30, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("Imports")
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(new Blockly.FieldMultilineInput("import pandas as pd\nimport numpy as np"), "text");
        this.setColour("#000");
        this.setNextStatement(true, null);
        this.setStyle("hat_blocks")
        this.setDeletable(true);
        this.setEditable(true);
        this.getField('text').setVisible(true);
        this.setTooltip(`To begin with, this is the default block. When you drag 'Custom blocks', you can use this block to import additional libraries in the import field.

        Example: import pandas as pd`);
        this.setHelpUrl("");
    }
};

Blockly.Python["Advanced_AP"] = function (block) {
    var text_text = block.getFieldValue('text');
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    Blockly.Python.definitions_['custom_imports'] = text_text;
    // TODO: Assemble Python into code variable.
    var code = "";
    return code;
};



window.chrome.webview.addEventListener("message", function (message) {
    console.log("message", message.data)
    var msg_data = message.data;
    if (msg_data.type == "set_field_name") {
        workspace.getBlockById(msg_data.block_id).setFieldValue(msg_data.value, msg_data.field_id)
    }
    if (msg_data.type == "alert_output") {
        alert(msg_data.value)
    }
    if (msg_data.type == "set_workspace") {
        var xml = Blockly.Xml.textToDom(msg_data.value);
        Blockly.Xml.domToWorkspace(xml, workspace);
        console.log("workspace set", msg_data.value)

        window.chrome.webview.postMessage({
            message: "start_autosave",
            type: "autosave"
        });

    }
    //is this necessary ?causes double save
    if (msg_data.type == "autosave") {
        autosave();
    }
});


function autosave() {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    complete_xml = Blockly.Xml.domToText(xml);
    // let base64data = "";

    Blockly.Python.INFINITE_LOOP_TRAP = null;
    const code = Blockly.Python.workspaceToCode(workspace);
    complete_code = code

    // workspace.zoomToFit();
    // workspace.getToolbox().setVisible(false)
    // canvas = await html2canvas(document.querySelector("#blocklyDiv"))
    // let base64data = canvas.toDataURL("image/png");
    // workspace.getToolbox().setVisible(true)

    window.chrome.webview.postMessage({
        message: "save_code_blockly",
        type: "autosave",
        code: complete_code,
        workspace: complete_xml,
        // image: base64data
    });
}

function autosave_cloud() {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    complete_xml = Blockly.Xml.domToText(xml);
    // var base64data = "";

    Blockly.Python.INFINITE_LOOP_TRAP = null;
    const code = Blockly.Python.workspaceToCode(workspace);
    complete_code = code

    // workspace.zoomToFit();
    // workspace.getToolbox().setVisible(false)
    // html2canvas(document.querySelector("#blocklyDiv")).then(canvas => {
    //     base64data = canvas.toDataURL("image/png");
    // });
    // workspace.getToolbox().setVisible(true)

    window.chrome.webview.postMessage({
        message: "save_code_blockly_cloud",
        type: "autosave",
        code: complete_code,
        workspace: complete_xml,
    });

}

function autosave_back() {
    let xml = Blockly.Xml.workspaceToDom(workspace);
    complete_xml = Blockly.Xml.domToText(xml);

    Blockly.Python.INFINITE_LOOP_TRAP = null;
    const code = Blockly.Python.workspaceToCode(workspace);
    complete_code = code

    window.chrome.webview.postMessage({
        message: "save_code_blockly_back",
        type: "autosave",
        code: complete_code,
        workspace: complete_xml,
    });

}

window.chrome.webview.postMessage({
    message: "initialize_blockly",
});
