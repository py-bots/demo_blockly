function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

Blockly.Python['authenticate_google_spreadsheet'] = function (block) {
    var value_credential_file_path = Blockly.Python.valueToCode(block, 'credential_file_path', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.authenticate_google_spreadsheet(credential_file_path=${value_credential_file_path})\n`;
    return code;
};

Blockly.Python['excel_get_dataframe_from_google_spreadsheet'] = function (block) {
    var value_auth = Blockly.Python.valueToCode(block, 'auth', Blockly.Python.ORDER_ATOMIC);
    var value_spreadsheet_url = Blockly.Python.valueToCode(block, 'spreadsheet_url', Blockly.Python.ORDER_ATOMIC);
    var value_sheet_name = Blockly.Python.valueToCode(block, 'sheet_name', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.excel_get_dataframe_from_google_spreadsheet(auth=${value_auth}, spreadsheet_url=${value_spreadsheet_url}, sheet_name=${value_sheet_name})\n`;
    return code;
};

Blockly.Python['excel_upload_dataframe_to_google_spreadsheet'] = function (block) {
    var value_auth = Blockly.Python.valueToCode(block, 'auth', Blockly.Python.ORDER_ATOMIC);
    var value_spreadsheet_url = Blockly.Python.valueToCode(block, 'spreadsheet_url', Blockly.Python.ORDER_ATOMIC);
    var value_sheet_name = Blockly.Python.valueToCode(block, 'sheet_name', Blockly.Python.ORDER_ATOMIC);
    var value_df = Blockly.Python.valueToCode(block, 'df', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_upload_dataframe_to_google_spreadsheet(auth=${value_auth}, spreadsheet_url=${value_spreadsheet_url}, sheet_name=${value_sheet_name}, df=${value_df})\n`;
    return code;
};

Blockly.Python['art_simple_effects'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_user_input_img_path = Blockly.Python.valueToCode(block, 'user_input_img_path', Blockly.Python.ORDER_ATOMIC);
    var value_name_required_on_image = Blockly.Python.valueToCode(block, 'name_required_on_image', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');



    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.art_simple_effects(user_input_img_path=${value_user_input_img_path}, name_required_on_image=${value_name_required_on_image}, output_folder=${value_output_folder})\n`;
    return code;
};

Blockly.Python['art_neural_effects'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_image_folder_path = Blockly.Python.valueToCode(block, 'input_image_folder_path', Blockly.Python.ORDER_ATOMIC);
    var value_style_image_folder_path = Blockly.Python.valueToCode(block, 'style_image_folder_path', Blockly.Python.ORDER_ATOMIC);
    var value_output_image_folder_path = Blockly.Python.valueToCode(block, 'output_image_folder_path', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.art_neural_effects(input_image_folder_path=${value_input_image_folder_path}, style_image_folder_path=${value_style_image_folder_path}, output_image_folder_path=${value_output_image_folder_path})\n`;
    return code;
};

Blockly.Python['ar_facecam'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_left_eye_image = Blockly.Python.valueToCode(block, 'left_eye_image', Blockly.Python.ORDER_ATOMIC);
    var value_right_eye_image = Blockly.Python.valueToCode(block, 'right_eye_image', Blockly.Python.ORDER_ATOMIC);
    var value_mouth_animation = Blockly.Python.valueToCode(block, 'mouth_animation', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.ar_facecam(left_eye_image=${value_left_eye_image}, right_eye_image=${value_right_eye_image}, mouth_animation=${value_mouth_animation})\n`;
    return code;
};

Blockly.Python['ar_trackhands'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.ar_trackhands()\n`;
    return code;
};

Blockly.Python['ar_facemesh'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.ar_facemesh()\n`;
    return code;
};

Blockly.Python['convert_change_corrupt_xls_to_xlsx'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_file = Blockly.Python.valueToCode(block, 'input_file', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.convert_change_corrupt_xls_to_xlsx(input_file=${value_input_file}, input_sheetname=${value_input_sheetname}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
    return code;
};

Blockly.Python['convert_xls_to_xlsx'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_file = Blockly.Python.valueToCode(block, 'input_file', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.convert_xls_to_xlsx(input_file=${value_input_file}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
    return code;
};

Blockly.Python['convert_image_to_base64'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_file = Blockly.Python.valueToCode(block, 'input_file', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.convert_image_to_base64(input_file=${value_input_file})\n`;
    return code;
};

Blockly.Python['convert_base64_to_img'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_imgbase64str = Blockly.Python.valueToCode(block, 'imgBase64Str', Blockly.Python.ORDER_ATOMIC);
    var value_img_folder_path = Blockly.Python.valueToCode(block, 'img_folder_path', Blockly.Python.ORDER_ATOMIC);
    var value_img_file_name = Blockly.Python.valueToCode(block, 'img_file_name', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.convert_base64_to_img(imgBase64Str=${value_imgbase64str}, img_folder_path=${value_img_folder_path}, img_file_name=${value_img_file_name})\n`;
    return code;
};

Blockly.Python['convert_csv_to_excel'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_csv_path = Blockly.Python.valueToCode(block, 'csv_path', Blockly.Python.ORDER_ATOMIC);
    var value_sep = Blockly.Python.valueToCode(block, 'sep', Blockly.Python.ORDER_ATOMIC);
    var value_excel_output_folder_path = Blockly.Python.valueToCode(block, 'excel_output_folder_path', Blockly.Python.ORDER_ATOMIC);
    var value_excel_file_name = Blockly.Python.valueToCode(block, 'excel_file_name', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.convert_csv_to_excel(csv_path=${value_csv_path}, sep=${value_sep}, excel_output_folder_path=${value_excel_output_folder_path}, excel_file_name=${value_excel_file_name})\n`;
    return code;
};

Blockly.Python['convert_jpg_to_png'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.convert_jpg_to_png(input_filepath=${value_input_filepath}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
    return code;
};

Blockly.Python['convert_png_to_jpg'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.convert_png_to_jpg(input_filepath=${value_input_filepath}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
    return code;
};

Blockly.Python['convert_excel_to_colored_html'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.convert_excel_to_colored_html(input_filepath=${value_input_filepath}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
    return code;
};


Blockly.Python['ds_html_table_from_website'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_website_url = Blockly.Python.valueToCode(block, 'website_url', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.ds_html_table_from_website(website_url=${value_website_url}, output_folder=${value_output_folder})\n`;
    return code;
};

Blockly.Python['ds_pivot_excel_table'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var value_rows = Blockly.Python.valueToCode(block, 'rows', Blockly.Python.ORDER_ATOMIC);
    var value_cols = Blockly.Python.valueToCode(block, 'cols', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.ds_pivot_excel_table(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, rows=${value_rows}, cols=${value_cols})\n`;
    return code;
};

Blockly.Python['ds_describe_excel_data'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.ds_describe_excel_data(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header})\n`;
    return code;
};

Blockly.Python['ds_draw_charts_from_excel'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var value_x_col = Blockly.Python.valueToCode(block, 'x_col', Blockly.Python.ORDER_ATOMIC);
    var value_y_col = Blockly.Python.valueToCode(block, 'y_col', Blockly.Python.ORDER_ATOMIC);
    var value_title = Blockly.Python.valueToCode(block, 'title', Blockly.Python.ORDER_ATOMIC);
    var dropdown_chart_type = block.getFieldValue('chart_type');
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.ds_draw_charts_from_excel(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, x_col=${value_x_col}, y_col=${value_y_col}, title=${value_title}, chart_type='${dropdown_chart_type}')\n`;
    return code;
};

Blockly.Python['excel_copy_range_from_sheet'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_start_col = Blockly.Python.valueToCode(block, 'start_col', Blockly.Python.ORDER_ATOMIC);
    var value_start_row = Blockly.Python.valueToCode(block, 'start_row', Blockly.Python.ORDER_ATOMIC);
    var value_end_col = Blockly.Python.valueToCode(block, 'end_col', Blockly.Python.ORDER_ATOMIC);
    var value_end_row = Blockly.Python.valueToCode(block, 'end_row', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.excel_copy_range_from_sheet(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, start_col=${value_start_col}, start_row=${value_start_row}, end_col=${value_end_col}, end_row=${value_end_row})\n`;
    return code;
};


Blockly.Python['excel_paste_range_to_sheet'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_start_col = Blockly.Python.valueToCode(block, 'start_col', Blockly.Python.ORDER_ATOMIC);
    var value_start_row = Blockly.Python.valueToCode(block, 'start_row', Blockly.Python.ORDER_ATOMIC);
    var value_copied_data = Blockly.Python.valueToCode(block, 'copied_data', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_paste_range_to_sheet(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, start_col=${value_start_col}, start_row=${value_start_row}, copied_data=${value_copied_data})\n`;
    return code;
};


Blockly.Python['excel_get_all_header_columns'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.excel_get_all_header_columns(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header})\n`;
    return code;
};

Blockly.Python['excel_get_row_column_count'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.excel_get_row_column_count(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header})\n`;
    return code;
};

Blockly.Python['excel_get_all_sheet_names'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.excel_get_all_sheet_names(input_filepath=${value_input_filepath})\n`;
    return code;
};

Blockly.Python['excel_clear_sheet'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_clear_sheet(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header})\n`;
    return code;
};

Blockly.Python['excel_drop_columns'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var value_cols = Blockly.Python.valueToCode(block, 'cols', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_drop_columns(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, cols=${value_cols})\n`;
    return code;
};

Blockly.Python['excel_remove_duplicates'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
    var checkbox_same_file = block.getFieldValue('same_file') === 'TRUE';
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_remove_duplicates(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, column_name=${value_column_name}, output_folder=${value_output_folder}, output_filename=${value_output_filename}, same_file=${capitalize(checkbox_same_file.toString())})\n`;
    return code;
};

Blockly.Python['excel_group_by_column_values_n_split'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var value_column_name = Blockly.Python.valueToCode(block, 'column_name', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_group_by_column_values_n_split(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, column_name=${value_column_name}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
    return code;
};

Blockly.Python['excel_if_value_exists'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_header = Blockly.Python.valueToCode(block, 'header', Blockly.Python.ORDER_ATOMIC);
    var value_cols = Blockly.Python.valueToCode(block, 'cols', Blockly.Python.ORDER_ATOMIC);
    var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_if_value_exists(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, header=${value_header}, cols=${value_cols}, value=${value_value})\n`;
    return code;
};

Blockly.Python['excel_apply_template_format'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_input_template_filepath = Blockly.Python.valueToCode(block, 'input_template_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_template_sheetname = Blockly.Python.valueToCode(block, 'input_template_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
    var checkbox_same_file = block.getFieldValue('same_file') === 'TRUE';
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_apply_template_format(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname}, input_template_filepath=${value_input_template_filepath}, input_template_sheetname=${value_input_template_sheetname}, output_folder=${value_output_folder}, output_filename=${value_output_filename}, same_file=${capitalize(checkbox_same_file.toString())})\n`;
    return code;
};

Blockly.Python['excel_apply_format_as_table'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_input_sheetname = Blockly.Python.valueToCode(block, 'input_sheetname', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_apply_format_as_table(input_filepath=${value_input_filepath}, input_sheetname=${value_input_sheetname})\n`;
    return code;
};

Blockly.Python['excel_merge_all_files'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_input_filepath = Blockly.Python.valueToCode(block, 'input_filepath', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_merge_all_files(input_filepath=${value_input_filepath}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
    return code;
};

Blockly.Python['excel_create_file'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_output_sheetname = Blockly.Python.valueToCode(block, 'output_sheetname', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_filename = Blockly.Python.valueToCode(block, 'output_filename', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.excel_create_file(output_sheetname=${value_output_sheetname}, output_folder=${value_output_folder}, output_filename=${value_output_filename})\n`;
    return code;
};

Blockly.Python['pause_program'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.pause_program(seconds=${value_seconds})\n`;
    return code;
};

Blockly.Python['text_to_speech'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_audio = Blockly.Python.valueToCode(block, 'audio', Blockly.Python.ORDER_ATOMIC);
    var checkbox_show = block.getFieldValue('show') === 'TRUE';
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.text_to_speech(audio=${value_audio}, show=${capitalize(checkbox_show.toString())})\n`;
    return code;
};

Blockly.Python['speech_to_text'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.speech_to_text()\n`;
    return code;
};

Blockly.Python['image_to_text'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_img_path = Blockly.Python.valueToCode(block, 'img_path', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.image_to_text(img_path=${value_img_path})\n`;
    return code;
};

Blockly.Python['api_request'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);
    var value_headers = Blockly.Python.valueToCode(block, 'headers', Blockly.Python.ORDER_NONE);
    var value_body = Blockly.Python.valueToCode(block, 'body', Blockly.Python.ORDER_NONE);
    var dropdown_method = block.getFieldValue('method');
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.api_request(url=${value_url}, headers=${value_headers}, body=${value_body}, method='${dropdown_method}')\n`;
    return code;
};

Blockly.Python['folder_write_text_file'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_txt_file_path = Blockly.Python.valueToCode(block, 'txt_file_path', Blockly.Python.ORDER_ATOMIC);
    var value_contents = Blockly.Python.valueToCode(block, 'contents', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.folder_write_text_file(txt_file_path = ${value_txt_file_path}, contents = ${value_contents})\n`;
    return code;
};

Blockly.Python['folder_create'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_strfolderpath = Blockly.Python.valueToCode(block, 'strFolderPath', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.folder_create(strFolderPath = ${value_strfolderpath})\n`;
    return code;
};

Blockly.Python['folder_create_text_file'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_textfolderpath = Blockly.Python.valueToCode(block, 'textFolderPath', Blockly.Python.ORDER_ATOMIC);
    var value_txtfilename = Blockly.Python.valueToCode(block, 'txtFileName', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.folder_create_text_file(textFolderPath = ${value_textfolderpath}, txtFileName = ${value_txtfilename})\n`;
    return code;
};

Blockly.Python['folder_delete_all_files'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_fullpathofthefolder = Blockly.Python.valueToCode(block, 'fullPathOfTheFolder', Blockly.Python.ORDER_ATOMIC);
    var value_file_extension_without_dot = Blockly.Python.valueToCode(block, 'file_extension_without_dot', Blockly.Python.ORDER_ATOMIC);
    var checkbox_print_status = block.getFieldValue('print_status') === 'TRUE';
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.folder_delete_all_files(fullPathOfTheFolder = ${value_fullpathofthefolder}, file_extension_without_dot = ${value_file_extension_without_dot}, print_status = ${capitalize(checkbox_print_status.toString())})\n`;
    return code;
};

Blockly.Python['file_rename'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_old_file_path = Blockly.Python.valueToCode(block, 'old_file_path', Blockly.Python.ORDER_ATOMIC);
    var value_new_file_name = Blockly.Python.valueToCode(block, 'new_file_name', Blockly.Python.ORDER_ATOMIC);
    var checkbox_print_status = block.getFieldValue('print_status') === 'TRUE';
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.file_rename(old_file_path = ${value_old_file_path}, new_file_name = ${value_new_file_name}, print_status = ${capitalize(checkbox_print_status.toString())})\n`;
    return code;
};

Blockly.Python['folder_get_all_filenames_as_list'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_strfolderpath = Blockly.Python.valueToCode(block, 'strFolderPath', Blockly.Python.ORDER_ATOMIC);
    var value_extension = Blockly.Python.valueToCode(block, 'extension', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.folder_get_all_filenames_as_list(strFolderPath = ${value_strfolderpath}, extension = ${value_extension})\n`;
    return code;
};

Blockly.Python['folder_read_text_file'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_txt_file_path = Blockly.Python.valueToCode(block, 'txt_file_path', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.folder_read_text_file(txt_file_path = ${value_txt_file_path})\n`;
    return code;
};

Blockly.Python['file_get_json_details'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_path_of_json_file = Blockly.Python.valueToCode(block, 'path_of_json_file', Blockly.Python.ORDER_ATOMIC);
    var value_section = Blockly.Python.valueToCode(block, 'section', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.file_get_json_details(path_of_json_file = ${value_path_of_json_file}, section = ${value_section})\n`;
    return code;
};

Blockly.Python['key_press'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var dropdown_key_1 = block.getFieldValue('key_1');
    var dropdown_key_2 = block.getFieldValue('key_2');
    var dropdown_key_3 = block.getFieldValue('key_3');
    var value_write_to_window = Blockly.Python.valueToCode(block, 'write_to_window', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.key_press(key_1 = ${dropdown_key_1}, key_2 = ${dropdown_key_2}, key_3 = ${dropdown_key_3}, write_to_window = ${value_write_to_window})\n`;
    return code;
};

Blockly.Python['key_write_enter'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_text_to_write = Blockly.Python.valueToCode(block, 'text_to_write', Blockly.Python.ORDER_ATOMIC);
    var value_write_to_window = Blockly.Python.valueToCode(block, 'write_to_window', Blockly.Python.ORDER_ATOMIC);
    var dropdown_key = block.getFieldValue('key');
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.key_write_enter(text_to_write = ${value_text_to_write}, write_to_window = ${value_write_to_window}, key = "${dropdown_key}")\n`;
    return code;
};

Blockly.Python['key_hit_enter'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_write_to_window = Blockly.Python.valueToCode(block, 'write_to_window', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.key_hit_enter(write_to_window = ${value_write_to_window})\n`;
    return code;
};

Blockly.Python['mail_send_via_desktop_outlook'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_to_email_id = Blockly.Python.valueToCode(block, 'to_email_id', Blockly.Python.ORDER_ATOMIC);
    var value_subject = Blockly.Python.valueToCode(block, 'subject', Blockly.Python.ORDER_ATOMIC);
    var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
    var value_attachment_path = Blockly.Python.valueToCode(block, 'attachment_path', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.mail_send_via_desktop_outlook(to_email_id=${value_to_email_id}, subject=${value_subject}, message=${value_message}, attachment_path=${value_attachment_path})\n`;
    return code;
};

Blockly.Python['mail_send_gmail_with_app_password'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_gmail_username = Blockly.Python.valueToCode(block, 'gmail_username', Blockly.Python.ORDER_ATOMIC);
    var value_gmail_app_password = Blockly.Python.valueToCode(block, 'gmail_app_password', Blockly.Python.ORDER_ATOMIC);
    var value_to_email_id = Blockly.Python.valueToCode(block, 'to_email_id', Blockly.Python.ORDER_ATOMIC);
    var value_subject = Blockly.Python.valueToCode(block, 'subject', Blockly.Python.ORDER_ATOMIC);
    var value_message = Blockly.Python.valueToCode(block, 'message', Blockly.Python.ORDER_ATOMIC);
    var value_attachment_path = Blockly.Python.valueToCode(block, 'attachment_path', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.mail_send_gmail_with_app_password(gmail_username=${value_gmail_username}, gmail_app_password=${value_gmail_app_password}, to_email_id=${value_to_email_id}, subject=${value_subject}, message=${value_message}, attachment_path=${value_attachment_path})\n`;
    return code;
};

Blockly.Python['msg_box_info'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_msg_for_user = Blockly.Python.valueToCode(block, 'msg_for_user', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.msg_box_info(msg_for_user=${value_msg_for_user})\n`;
    return code;
};

Blockly.Python['msg_box_ask_yes_no'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_msg_for_user = Blockly.Python.valueToCode(block, 'msg_for_user', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.msg_box_ask_yes_no(msg_for_user=${value_msg_for_user})\n`;
    return code;
};

Blockly.Python['msg_count_down'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_msg_for_user = Blockly.Python.valueToCode(block, 'msg_for_user', Blockly.Python.ORDER_ATOMIC);
    var value_default_time = Blockly.Python.valueToCode(block, 'default_time', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.msg_count_down(msg_for_user=${value_msg_for_user}, default_time=${value_default_time})\n`;
    return code;
};


Blockly.Python['print_ap'] = function (block) {
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `print(${variable_status})\n`;
    return code;
};

Blockly.Python['mouse_click'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var value_no_of_clicks = Blockly.Python.valueToCode(block, 'no_of_clicks', Blockly.Python.ORDER_ATOMIC);
    var dropdown_left_or_right = block.getFieldValue('left_or_right');
    var dropdown_type_of_movement = block.getFieldValue('type_of_movement');
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.mouse_click(x=${value_x}, y=${value_y}, no_of_clicks=${value_no_of_clicks}, left_or_right='${dropdown_left_or_right}', type_of_movement='${dropdown_type_of_movement}')\n`;
    return code;
};

Blockly.Python['mouse_move'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_x = Blockly.Python.valueToCode(block, 'x', Blockly.Python.ORDER_ATOMIC);
    var value_y = Blockly.Python.valueToCode(block, 'y', Blockly.Python.ORDER_ATOMIC);
    var dropdown_type_of_movement = block.getFieldValue('type_of_movement');
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.mouse_move(x=${value_x}, y=${value_y}, type_of_movement='${dropdown_type_of_movement}')\n`;
    return code;
};

Blockly.Python['mouse_drag_from_to'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
    var value_y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
    var value_x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
    var value_y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.mouse_drag_from_to(x1=${value_x1}, y1=${value_y1}, x2=${value_x2}, y2=${value_y2})\n`;
    return code;
};

Blockly.Python['mouse_search_snip_return_coordinates_x_y'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_img = Blockly.Python.valueToCode(block, 'img', Blockly.Python.ORDER_ATOMIC);
    var value_wait = Blockly.Python.valueToCode(block, 'wait', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.mouse_search_snip_return_coordinates_x_y(img=${value_img}, wait=${value_wait})\n`;
    return code;
};

Blockly.Python['pdf_extract_all_tables'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_pdf_file_path = Blockly.Python.valueToCode(block, 'pdf_file_path', Blockly.Python.ORDER_ATOMIC);
    var value_output_folder = Blockly.Python.valueToCode(block, 'output_folder', Blockly.Python.ORDER_ATOMIC);
    var value_output_file_name = Blockly.Python.valueToCode(block, 'output_file_name', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.pdf_extract_all_tables(pdf_file_path=${value_pdf_file_path}, output_folder=${value_output_folder}, output_file_name=${value_output_file_name})\n`;
    return code;
};

Blockly.Python['citrix_scrape_contents_by_search_copy_paste'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_highlight_text = Blockly.Python.valueToCode(block, 'highlight_text', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.citrix_scrape_contents_by_search_copy_paste(highlight_text=${value_highlight_text})\n`;
    return code;
};

Blockly.Python['citrix_window_clear_search'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.citrix_window_clear_search()\n`;
    return code;
};

Blockly.Python['clipboard_get_data'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.clipboard_get_data()\n`;
    return code;
};

Blockly.Python['clipboard_set_data'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.clipboard_set_data(data=${value_data})\n`;
    return code;
};

Blockly.Python['screen_clear_search'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_delay = Blockly.Python.valueToCode(block, 'delay', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.screen_clear_search(delay = ${value_delay})\n`;
    return code;
};

Blockly.Python['scrape_save_contents_to_notepad'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_folderpathtosavethenotepad = Blockly.Python.valueToCode(block, 'folderPathToSaveTheNotepad', Blockly.Python.ORDER_ATOMIC);
    var value_switch_to_window = Blockly.Python.valueToCode(block, 'switch_to_window', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.scrape_save_contents_to_notepad(folderPathToSaveTheNotepad = ${value_folderpathtosavethenotepad}, switch_to_window = ${value_switch_to_window})\n`;
    return code;
};

Blockly.Python['string_extract_only_alphabets'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_inputstring = Blockly.Python.valueToCode(block, 'inputString', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.string_extract_only_alphabets(inputString = ${value_inputstring})\n`;
    return code;
};

Blockly.Python['string_extract_only_numbers'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_inputstring = Blockly.Python.valueToCode(block, 'inputString', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.string_extract_only_numbers(inputString = ${value_inputstring})\n`;
    return code;
};

Blockly.Python['string_remove_special_characters'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_inputstr = Blockly.Python.valueToCode(block, 'inputStr', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.string_remove_special_characters(inputStr = ${value_inputstr})\n`;
    return code;
};

Blockly.Python['windows_show_desktop'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.windows_show_desktop()\n`;
    return code;
};

Blockly.Python['windows_launch_app'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_pathofexefile = Blockly.Python.valueToCode(block, 'pathOfExeFile', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.windows_launch_app(pathOfExeFile = ${value_pathofexefile})\n`;
    return code;
};

Blockly.Python['window_restore_windows'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_windowname = Blockly.Python.valueToCode(block, 'windowName', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.window_restore_windows(windowName = ${value_windowname})\n`;
    return code;
};

Blockly.Python['window_activate_and_maximize_windows'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_windowname = Blockly.Python.valueToCode(block, 'windowName', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.window_activate_and_maximize_windows(windowName = ${value_windowname})\n`;
    return code;
};

Blockly.Python['window_minimize_windows'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_windowname = Blockly.Python.valueToCode(block, 'windowName', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.window_minimize_windows(windowName = ${value_windowname})\n`;
    return code;
};

Blockly.Python['window_close_windows'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_windowname = Blockly.Python.valueToCode(block, 'windowName', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.window_close_windows(windowName = ${value_windowname})\n`;
    return code;
};

Blockly.Python['window_get_all_opened_titles_windows'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.window_get_all_opened_titles_windows()\n`;
    return code;
};

Blockly.Python['window_get_active_window'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    var variable_data = Blockly.Python.nameDB_.getName(block.getFieldValue('data'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}, ${variable_data}] = ap.window_get_active_window()\n`;
    return code;
};

Blockly.Python['window_activate_window'] = function (block) {
    Blockly.Python.definitions_["my_autopylot"] = "import my_autopylot as ap";
    var value_window_title = Blockly.Python.valueToCode(block, 'window_title', Blockly.Python.ORDER_ATOMIC);
    var variable_status = Blockly.Python.nameDB_.getName(block.getFieldValue('status'), 'VARIABLE');
    // TODO: Assemble Python into code variable.
    var code = `[${variable_status}] = ap.window_activate_window(window_title = ${value_window_title})\n`;
    return code;
};