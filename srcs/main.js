function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

var toolbox_xml = "";
var htmlEditor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  mode: "python",
  // theme: "ayu-dark",
  theme: "night",
});
const toolbox = document.getElementById("toolbox")
const options = {
  renderer: 'zelos',
  toolbox: toolbox,
  collapse: true,
  comments: true,
  disable: true,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: "start",
  zoom: {
    controls: true,
    // wheel : true,
    startScale: 0.75,
    maxScale: 1,
    minScale: 0.3,
    scaleSpeed: 1.2,
  },
  scrollbars: true,
  sounds: true,
  oneBasedIndex: true,
  // grid: {
  //   spacing: 20,
  //   length: 2,
  //   colour: "#1919B5",
  //   snap: true,
  // },
  move: {
    scrollbars: {
      vertical: true,
      horizontal: true
    },
  },
  theme: "Darker",
}

const workspace = Blockly.inject("blocklyDiv", options);
const workspaceSearch = new WorkspaceSearch(workspace);
workspaceSearch.init();
workspace.addChangeListener(block_added);
const zoomToFit = new ZoomToFitControl(workspace);
zoomToFit.init();

const plugin = new CrossTabCopyPaste();
plugin.init({
  contextMenu: true,
  shortcut: true,
});

function block_added() {
  Blockly.Python.INFINITE_LOOP_TRAP = null;
  const code = Blockly.Python.workspaceToCode(workspace);
  complete_code = code;
  htmlEditor.setValue(complete_code);
}

function add_block() {
  var search_input = document.getElementById("search-input");
  console.log(search_input.value);
  add_xml_to_workspace(search_input.value);
}

function getScreenShot() {
  workspace.zoomToFit();
  workspace.getToolbox().setVisible(false)
  canvas = html2canvas(document.querySelector("#blocklyDiv"))
  let base64data = canvas.toDataURL("image/png");

  // html2canvas(document.querySelector("#blocklyDiv")).then(canvas => {
  //   var base64data = canvas.toDataURL("image/png");
  //   console.log(base64data);
  // });
  console.log(base64data);
  workspace.getToolbox().setVisible(true)
}
