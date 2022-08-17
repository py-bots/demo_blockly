// The raw blocks

Blockly.Msg.TYPE_CHECK = "check type of"
Blockly.Msg.DICT_KEYS = "get all keys of "
Blockly.Msg.DICT_GET = "get value of key"
Blockly.Msg.DICT_GET_TO = "from"
Blockly.Msg.DICTS_CREATE_WITH_INPUT_WITH = "dict of"
Blockly.Msg.DICTS_CREATE_WITH_TOOLTIP = "Create a new dictionary"
Blockly.Msg.DICTS_CREATE_EMPTY_TITLE = "Create empty dict"
Blockly.Msg.DICTS_CREATE_WITH_CONTAINER_TITLE_ADD = "key-value pairs"
Blockly.Msg.DICTS_CREATE_WITH_CONTAINER_TOOLTIP = "**"
Blockly.Msg.DICTS_CREATE_WITH_ITEM_TITLE = "key-value"
Blockly.Msg.DICTS_CREATE_WITH_ITEM_TOOLTIP = "Make a new key-value pair"
Blockly.Msg.DICTS_CREATE_WITH_ITEM_KEY = "key"
Blockly.Msg.DICTS_CREATE_WITH_ITEM_VALUE = "value"
Blockly.Blocks['dicts_create_with_container'] = {
    // Container.
    init: function () {
        this.setColour(260);
        this.appendDummyInput()
            .appendTitle(Blockly.Msg.DICTS_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.DICTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['dicts_create_with_item'] = {
    // Add items.
    init: function () {
        this.setColour(260);
        this.appendDummyInput()
            .appendTitle(Blockly.Msg.DICTS_CREATE_WITH_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.DICTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
};
Blockly.Blocks['dicts_create_with'] = {
    init: function () {
        this.setColour(260);
        this.appendDummyInput('TITLE_TEXT')
            .appendTitle(Blockly.Msg.DICTS_CREATE_WITH_INPUT_WITH);
        this.appendValueInput('KEY0')
        this.appendValueInput('VALUE0');
        this.appendValueInput('KEY1');
        this.appendValueInput('VALUE1');
        this.appendValueInput('KEY2');
        this.appendValueInput('VALUE2');

        this.setOutput(true, 'dict');
        this.setMutator(new Blockly.Mutator(['dicts_create_with_item']));
        this.setTooltip(Blockly.Msg.DICTS_CREATE_WITH_TOOLTIP);
        this.itemCount_ = 3;
    },
    mutationToDom: function (workspace) {
        var container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        return container;
    },
    domToMutation: function (container) {
        this.removeInput('TITLE_TEXT');
        for (var x = 0; x < this.itemCount_; x++) {
            this.removeInput('KEY' + x);
            this.removeInput('VALUE' + x);
        }
        this.itemCount_ = parseInt(container.getAttribute('items'), 10);
        this.appendDummyInput('TITLE_TEXT')
            .appendTitle(Blockly.Msg.DICTS_CREATE_WITH_INPUT_WITH);
        for (var x = 0; x < this.itemCount_; x++) {
            var key_input = this.appendValueInput('KEY' + x)
                .setCheck(null)
                .appendTitle(Blockly.Msg.DICTS_CREATE_WITH_ITEM_KEY);
            var value_input = this.appendValueInput('VALUE' + x)
                .setCheck(null)
                .appendTitle(Blockly.Msg.DICTS_CREATE_WITH_ITEM_VALUE);
        }
    },
    decompose: function (workspace) {
        var containerBlock = new Blockly.Block(workspace,
            'dicts_create_with_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var x = 0; x < this.itemCount_; x++) {
            var itemBlock = new Blockly.Block(workspace, 'dicts_create_with_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    compose: function (containerBlock) {
        // Disconnect all input blocks and remove all inputs.
        if (this.itemCount_ == 0) {
            this.removeInput('EMPTY');
        } else {
            this.removeInput('TITLE_TEXT');
            for (var x = this.itemCount_ - 1; x >= 0; x--) {
                this.removeInput('KEY' + x);
                this.removeInput('VALUE' + x);
            }
        }
        this.itemCount_ = 0;
        // Rebuild the block's inputs.
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        this.appendDummyInput('TITLE_TEXT')
            .appendTitle(Blockly.Msg.DICTS_CREATE_WITH_INPUT_WITH);
        while (itemBlock) {
            var key_input = this.appendValueInput('KEY' + this.itemCount_)
                .appendTitle(Blockly.Msg.DICTS_CREATE_WITH_ITEM_KEY);
            var value_input = this.appendValueInput('VALUE' + this.itemCount_)
                .appendTitle(Blockly.Msg.DICTS_CREATE_WITH_ITEM_VALUE);
            // Reconnect any child blocks.
            if (itemBlock.valueConnection_) {
                value_input.connection.connect(itemBlock.valueConnection_);
            }
            this.itemCount_++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        if (this.itemCount_ == 0) {
            this.appendDummyInput('EMPTY')
                .appendTitle(Blockly.Msg.DICTS_CREATE_EMPTY_TITLE);
        }
    },
    saveConnections: function (containerBlock) {
        // Store a pointer to any connected child blocks.
        var itemBlock = containerBlock.getInputTargetBlock('STACK');
        var x = 0;
        while (itemBlock) {
            var key_input = this.getInput('KEY' + x);
            var value_input = this.getInput('VALUE' + x);
            itemBlock.valueConnection_ = value_input && value_input.connection.targetConnection;
            x++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    }
};

Blockly.Blocks['dict_get'] = {
    // Set element at index.
    init: function () {
        this.setColour(260);
        this.appendValueInput('ITEM')
            .appendTitle(Blockly.Msg.DICT_GET);
        this.appendValueInput('DICT')
            .setCheck('dict')
            .appendTitle(Blockly.Msg.DICT_GET_TO);
        this.setInputsInline(true);
        this.setOutput(true);
        //this.setPreviousStatement(true);
        //this.setNextStatement(true);
    }
};


// The following is for the Python generator

Blockly.Python['dict_get'] = function (block) {
    var dict = Blockly.Python.valueToCode(block, 'DICT',
        Blockly.Python.ORDER_MEMBER) || '{}';
    var value = Blockly.Python.valueToCode(block, 'ITEM',
        Blockly.Python.ORDER_NONE) || 'None';
    var code = dict + '[' + value + ']';
    return [code, Blockly.Python.ORDER_ATOMIC];
};



Blockly.Python['dicts_create_with'] = function (block) {
    var value_keys = Blockly.Python.valueToCode(block, 'keys', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = new Array(block.itemCount_);

    for (var n = 0; n < block.itemCount_; n++) {
        var key = Blockly.Python.valueToCode(block, 'KEY' + n,
            Blockly.Python.ORDER_NONE) || 'None';
        var value = Blockly.Python.valueToCode(block, 'VALUE' + n,
            Blockly.Python.ORDER_NONE) || 'None';
        code[n] = key + ": " + value;
    }
    code = '{' + code.join(',\n\t') + '}';
    return [code, Blockly.Python.ORDER_ATOMIC];
};