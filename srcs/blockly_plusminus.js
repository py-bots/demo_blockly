/*! For license information please see index.js.LICENSE.txt */
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("blockly/core"));else if("function"==typeof define&&define.amd)define(["blockly/core"],e);else{var n="object"==typeof exports?e(require("blockly/core")):e(t.Blockly);for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(this,(function(t){return(()=>{"use strict";var e={573:e=>{e.exports=t}},n={};function i(t){var s=n[t];if(void 0!==s)return s.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};return(()=>{i.r(s);var t=i(573),e=i.n(t);function n(e){const n=new t.FieldImage(r,15,15,void 0,o);return n.args_=e,n}function o(e){const n=e.getSourceBlock();if(n.isInFlyout)return;t.Events.setGroup(!0);const i=n.mutationToDom(),s=i&&t.Xml.domToText(i);n.minus(e.args_);const o=n.mutationToDom(),r=o&&t.Xml.domToText(o);s!=r&&t.Events.fire(new t.Events.BlockChange(n,"mutation",null,s,r)),t.Events.setGroup(!1)}const r="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTggMTFoLTEyYy0xLjEwNCAwLTIgLjg5Ni0yIDJzLjg5NiAyIDIgMmgxMmMxLjEwNCAwIDItLjg5NiAyLTJzLS44OTYtMi0yLTJ6IiBmaWxsPSJ3aGl0ZSIgLz48L3N2Zz4K";function a(e){const n=new t.FieldImage(l,15,15,void 0,u);return n.args_=e,n}function u(e){const n=e.getSourceBlock();if(n.isInFlyout)return;t.Events.setGroup(!0);const i=n.mutationToDom(),s=i&&t.Xml.domToText(i);n.plus(e.args_);const o=n.mutationToDom(),r=o&&t.Xml.domToText(o);s!=r&&t.Events.fire(new t.Events.BlockChange(n,"mutation",null,s,r)),t.Events.setGroup(!1)}const l="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48cGF0aCBkPSJNMTggMTBoLTR2LTRjMC0xLjEwNC0uODk2LTItMi0ycy0yIC44OTYtMiAybC4wNzEgNGgtNC4wNzFjLTEuMTA0IDAtMiAuODk2LTIgMnMuODk2IDIgMiAybDQuMDcxLS4wNzEtLjA3MSA0LjA3MWMwIDEuMTA0Ljg5NiAyIDIgMnMyLS44OTYgMi0ydi00LjA3MWw0IC4wNzFjMS4xMDQgMCAyLS44OTYgMi0ycy0uODk2LTItMi0yeiIgZmlsbD0id2hpdGUiIC8+PC9zdmc+Cg==",d={elseIfCount_:0,hasElse_:!1,mutationToDom:function(){if(!this.elseIfCount_&&!this.hasElse_)return null;const t=e().utils.xml.createElement("mutation");return t.setAttribute("elseif",this.elseIfCount_),this.hasElse_&&t.setAttribute("else",1),t},domToMutation:function(t){const n=parseInt(t.getAttribute("elseif"),10)||0;this.hasElse_=!!parseInt(t.getAttribute("else"),10)||0,this.hasElse_&&!this.getInput("ELSE")&&this.appendStatementInput("ELSE").appendField(e().Msg.CONTROLS_IF_MSG_ELSE),this.updateShape_(n)},updateShape_:function(t){for(;this.elseIfCount_<t;)this.addElseIf_();for(;this.elseIfCount_>t;)this.removeElseIf_()},plus:function(){this.addElseIf_()},minus:function(t){0!=this.elseIfCount_&&this.removeElseIf_(t)},addElseIf_:function(){this.elseIfCount_++,this.appendValueInput("IF"+this.elseIfCount_).setCheck("Boolean").appendField(e().Msg.CONTROLS_IF_MSG_ELSEIF).appendField(n(this.elseIfCount_),"MINUS"+this.elseIfCount_),this.appendStatementInput("DO"+this.elseIfCount_).appendField(e().Msg.CONTROLS_IF_MSG_THEN),this.getInput("ELSE")&&this.moveInputBefore("ELSE",null)},removeElseIf_:function(t){if(void 0!==t&&t!=this.elseIfCount_){const e=2*t,n=this.inputList;let i=n[e].connection;i.isConnected()&&i.disconnect(),i=n[e+1].connection,i.isConnected()&&i.disconnect(),this.bumpNeighbours();for(let t,n=e+2;(t=this.inputList[n])&&"ELSE"!=t.name;n++){const e=t.connection.targetConnection;e&&this.inputList[n-2].connection.connect(e)}}this.removeInput("IF"+this.elseIfCount_),this.removeInput("DO"+this.elseIfCount_),this.elseIfCount_--}};e().Extensions.unregister("controls_if_mutator"),e().Extensions.registerMutator("controls_if_mutator",d,(function(){this.getInput("IF0").insertFieldAt(0,a(),"PLUS")})),delete e().Blocks.lists_create_with,e().defineBlocksWithJsonArray([{type:"lists_create_with",message0:"%{BKY_LISTS_CREATE_EMPTY_TITLE} %1",args0:[{type:"input_dummy",name:"EMPTY"}],output:"Array",style:"list_blocks",helpUrl:"%{BKY_LISTS_CREATE_WITH_HELPURL}",tooltip:"%{BKY_LISTS_CREATE_WITH_TOOLTIP}",mutator:"new_list_create_with_mutator"}]);const _={itemCount_:0,mutationToDom:function(){const t=e().utils.xml.createElement("mutation");return t.setAttribute("items",this.itemCount_),t},domToMutation:function(t){const e=parseInt(t.getAttribute("items"),10);this.updateShape_(e)},updateShape_:function(t){for(;this.itemCount_<t;)this.addPart_();for(;this.itemCount_>t;)this.removePart_();this.updateMinus_()},plus:function(){this.addPart_(),this.updateMinus_()},minus:function(){0!=this.itemCount_&&(this.removePart_(),this.updateMinus_())},addPart_:function(){0==this.itemCount_?(this.removeInput("EMPTY"),this.topInput_=this.appendValueInput("ADD"+this.itemCount_).appendField(a(),"PLUS").appendField(e().Msg.LISTS_CREATE_WITH_INPUT_WITH)):this.appendValueInput("ADD"+this.itemCount_),this.itemCount_++},removePart_:function(){this.itemCount_--,this.removeInput("ADD"+this.itemCount_),0==this.itemCount_&&(this.topInput_=this.appendDummyInput("EMPTY").appendField(a(),"PLUS").appendField(e().Msg.LISTS_CREATE_EMPTY_TITLE))},updateMinus_:function(){const t=this.getField("MINUS");!t&&this.itemCount_>0?this.topInput_.insertFieldAt(1,n(),"MINUS"):t&&this.itemCount_<1&&this.topInput_.removeField("MINUS")}};e().Extensions.registerMutator("new_list_create_with_mutator",_,(function(){this.getInput("EMPTY").insertFieldAt(0,a(),"PLUS"),this.updateShape_(3)})),e().Msg.PROCEDURE_VARIABLE="variable:",delete e().Blocks.procedures_defnoreturn,delete e().Blocks.procedures_defreturn,e().defineBlocksWithJsonArray([{type:"procedures_defnoreturn",message0:"%{BKY_PROCEDURES_DEFNORETURN_TITLE} %1 %2",message1:"%{BKY_PROCEDURES_DEFNORETURN_DO} %1",args0:[{type:"field_input",name:"NAME",text:""},{type:"input_dummy",name:"TOP"}],args1:[{type:"input_statement",name:"STACK"}],style:"procedure_blocks",helpUrl:"%{BKY_PROCEDURES_DEFNORETURN_HELPURL}",tooltip:"%{BKY_PROCEDURES_DEFNORETURN_TOOLTIP}",extensions:["get_procedure_def_no_return","procedure_context_menu","procedure_rename","procedure_vars"],mutator:"procedure_def_mutator"},{type:"procedures_defreturn",message0:"%{BKY_PROCEDURES_DEFRETURN_TITLE} %1 %2",message1:"%{BKY_PROCEDURES_DEFRETURN_DO} %1",message2:"%{BKY_PROCEDURES_DEFRETURN_RETURN} %1",args0:[{type:"field_input",name:"NAME",text:""},{type:"input_dummy",name:"TOP"}],args1:[{type:"input_statement",name:"STACK"}],args2:[{type:"input_value",align:"right",name:"RETURN"}],style:"procedure_blocks",helpUrl:"%{BKY_PROCEDURES_DEFRETURN_HELPURL}",tooltip:"%{BKY_PROCEDURES_DEFRETURN_TOOLTIP}",extensions:["get_procedure_def_return","procedure_context_menu","procedure_rename","procedure_vars"],mutator:"procedure_def_mutator"}]),e().Extensions.registerMixin("get_procedure_def_no_return",{getProcedureDef:function(){const t=this.argData_.map((t=>t.model.name));return[this.getFieldValue("NAME"),t,!1]},callType_:"procedures_callnoreturn"}),e().Extensions.registerMixin("get_procedure_def_return",{getProcedureDef:function(){const t=this.argData_.map((t=>t.model.name));return[this.getFieldValue("NAME"),t,!0]},callType_:"procedures_callreturn"});const p={customContextMenu:function(t){if(this.isInFlyout)return;const n=this.getFieldValue("NAME"),i=e().Msg.PROCEDURES_CREATE_DO.replace("%1",n),s=e().utils.xml.createElement("block");s.setAttribute("type",this.callType_),s.appendChild(this.mutationToDom(!0));const o=e().ContextMenu.callbackFactory(this,s);if(t.push({enabled:!0,text:i,callback:o}),this.isCollapsed())return;const r=this.getVarModels();for(const n of r){const i=e().Msg.VARIABLES_SET_CREATE_GET.replace("%1",n.name),s=e().utils.xml.createElement("block");s.setAttribute("type","variables_get"),s.appendChild(e().Variables.generateVariableFieldDom(n));const o=e().ContextMenu.callbackFactory(this,s);t.push({enabled:!0,text:i,callback:o})}}};e().Extensions.registerMixin("procedure_context_menu",p);const c={mutationToDom:function(t=!1){const n=e().utils.xml.createElement("mutation");return t&&n.setAttribute("name",this.getFieldValue("NAME")),this.argData_.forEach((i=>{const s=e().utils.xml.createElement("arg"),o=i.model;s.setAttribute("name",o.name),s.setAttribute("varid",o.getId()),s.setAttribute("argid",i.argId),t&&s.setAttribute("paramid",i.argId),n.appendChild(s)})),this.hasStatements_||n.setAttribute("statements","false"),n},domToMutation:function(t){this.hasStatements_="false"!==t.getAttribute("statements"),this.hasStatements_||this.removeInput("STACK");const e=[],n=[],i=[];for(const s of t.childNodes)"arg"==s.nodeName.toLowerCase()&&(e.push(s.getAttribute("name")),n.push(s.getAttribute("varid")||s.getAttribute("varId")),i.push(s.getAttribute("argid")));this.updateShape_(e,n,i)},updateShape_:function(t,n,i){if(t.length!=n.length)throw Error("names and varIds must have the same length.");for(let t=this.argData_.length-1;t>=0;t--)this.removeArg_(this.argData_[t].argId);this.argData_=[];const s=n.length;for(let e=0;e<s;e++)this.addArg_(t[e],n[e],i[e]);e().Procedures.mutateCallers(this)},plus:function(){this.addArg_(),e().Procedures.mutateCallers(this)},minus:function(t){this.argData_.length&&(this.removeArg_(t),e().Procedures.mutateCallers(this))},addArg_:function(t=null,n=null,i=null){if(!this.argData_.length){const t=new(e().FieldLabel)(e().Msg.PROCEDURES_BEFORE_PARAMS);this.getInput("TOP").appendField(t,"WITH")}const s=this.argData_.map((t=>t.model.name));t=t||e().Variables.generateUniqueNameFromOptions(e().Procedures.DEFAULT_ARG,s);const o=e().Variables.getOrCreateVariablePackage(this.workspace,n,t,"");i=i||e().utils.idGenerator.genUid(),this.addVarInput_(t,i),this.getInput("STACK")?this.moveInputBefore(i,"STACK"):this.moveInputBefore(i,"RETURN"),this.argData_.push({model:o,argId:i})},removeArg_:function(t){this.removeInput(t,!0)&&(1==this.argData_.length&&this.getInput("TOP").removeField("WITH"),this.argData_=this.argData_.filter((e=>e.argId!=t)))},addVarInput_:function(t,i){const s=new(e().FieldTextInput)(t,this.validator_);s.onFinishEditing_=this.finishEditing_.bind(s),s.varIdsToDelete_=[],s.preEditVarModel_=null,this.appendDummyInput(i).setAlign(e().ALIGN_RIGHT).appendField(n(i)).appendField(e().Msg.PROCEDURE_VARIABLE).appendField(s,i)},validator_:function(t){const n=this.getSourceBlock(),i=n.workspace,s=n.argData_,o=n.argData_.find((t=>t.argId==this.name)),r=o.model.getId(),a=(t=t.replace(/[\s\xa0]+/g," ").trim()).toLowerCase();if(!t||!s.every((t=>t.argId==this.name||a!=t.model.name.toLowerCase())))return this.preEditVarModel_&&(o.model=this.preEditVarModel_,this.preEditVarModel_=null),e().Procedures.mutateCallers(n),null;this.varIdsToDelete_.length||(this.preEditVarModel_=o.model,i.getVariableUsesById(r).every((t=>t.id==n.id||t.getProcedureCall&&t.getProcedureCall()==n.getProcedureDef()[0]))&&this.varIdsToDelete_.push(r));let u=i.getVariable(t,"");return u?u.name!=t&&i.renameVariableById(u.getId(),t):(u=i.createVariable(t,""),this.varIdsToDelete_.push(u.getId())),u.getId()!=r&&(o.model=u),e().Procedures.mutateCallers(n),t},finishEditing_:function(t){const e=this.getSourceBlock(),n=e.argData_.find((t=>t.argId==this.name)).model.getId();this.varIdsToDelete_.forEach((t=>{t!=n&&e.workspace.deleteVariableById(t)})),this.varIdsToDelete_.length=0,this.preEditVarModel_=null}};e().Extensions.registerMutator("procedure_def_mutator",c,(function(){this.argData_=[],this.hasStatements_=!0,this.getInput("TOP").insertFieldAt(0,a(),"PLUS")})),e().Extensions.register("procedure_rename",(function(){this.getField("NAME").setValidator(e().Procedures.rename)})),e().Extensions.register("procedure_vars",(function(){const t={getVars:function(){return this.argData_.map((t=>t.model.name))},getVarModels:function(){return this.argData_.map((t=>t.model))},renameVarById:function(t,n){const i=this.argData_.find((e=>e.model.getId()==t));if(!i)return;const s=this.workspace.getVariableById(n),o=s.name;this.addVarInput_(o,n),this.moveInputBefore(n,t),this.removeInput(t),i.model=s,e().Procedures.mutateCallers(this)},updateVarName:function(t){const e=t.getId(),n=this.argData_.find((t=>t.model.getId()==e));n&&(this.setFieldValue(t.name,n.argId),n.model=t)}};this.mixin(t,!0)}));const m={itemCount_:0,mutationToDom:function(){const t=e().utils.xml.createElement("mutation");return t.setAttribute("items",this.itemCount_),t},domToMutation:function(t){const e=parseInt(t.getAttribute("items"),10);this.updateShape_(e)},updateShape_:function(t){for(;this.itemCount_<t;)this.addPart_();for(;this.itemCount_>t;)this.removePart_();this.updateMinus_()},plus:function(){this.addPart_(),this.updateMinus_()},minus:function(){0!=this.itemCount_&&(this.removePart_(),this.updateMinus_())},addPart_:function(){0==this.itemCount_?(this.getInput("EMPTY")&&this.removeInput("EMPTY"),this.topInput_=this.appendValueInput("ADD"+this.itemCount_).appendField(a(),"PLUS").appendField(e().Msg.TEXT_JOIN_TITLE_CREATEWITH)):this.appendValueInput("ADD"+this.itemCount_),this.itemCount_++},removePart_:function(){this.itemCount_--,this.removeInput("ADD"+this.itemCount_),0==this.itemCount_&&(this.topInput_=this.appendDummyInput("EMPTY").appendField(a(),"PLUS").appendField(this.newQuote_(!0)).appendField(this.newQuote_(!1)))},updateMinus_:function(){const t=this.getField("MINUS");!t&&this.itemCount_>0?this.topInput_.insertFieldAt(1,n(),"MINUS"):t&&this.itemCount_<1&&this.topInput_.removeField("MINUS")}};e().Extensions.unregister("text_join_mutator"),e().Extensions.registerMutator("text_join_mutator",m,(function(){e().Extensions.apply("text_quotes",this,!1),this.updateShape_(2)}))})(),s})()}));
//# sourceMappingURL=index.js.map