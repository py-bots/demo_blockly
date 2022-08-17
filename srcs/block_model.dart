import 'package:another_flushbar/flushbar.dart';
import 'package:flutter/material.dart';
import 'package:my_autopylot/constants/app_colors.dart';
import 'package:webview_windows/webview_windows.dart';

@immutable
class Block {
  const Block({
    required this.blockXml,
    required this.name,
    required this.keywords,
    required this.fullDescription,
    required this.shortDescription,
  });

  final String blockXml;
  final String name;
  final List<String> keywords;
  final String fullDescription;
  final String
      shortDescription; // id for fast search capabilities , later to be a hashed index of the name , trying to average O(1)
  //TODO: implement stateof the art search algorithm here
  @override
  String toString() {
    return '${name.toLowerCase()} $blockXml, $keywords block_id ';
  }

  static Block toBlock(String blockString) {
    //print("block id received: ${blockString.split("block_id")[1]}");
    int id = int.parse(blockString.split("block_id")[1]);
    return Block.blockOptions2[id];
  }

  @override
  bool operator ==(Object other) {
    if (other.runtimeType != runtimeType) {
      return false;
    }
    return other is Block &&
        other.name == name &&
        other.blockXml == blockXml &&
        other.keywords.any((k) => keywords.contains(k));
  }

  @override
  int get hashCode => hashValues(blockXml, name, keywords);

  static String displayStringForOption(Block option) => option.name;
  static const List<Block> blockOptions2 = <Block>[
// Mouse Blocks 4
    Block(
      name: 'Mouse Click',
      blockXml:
          '<block type="mouse_click"><field name="left_or_right">left</field><field name="type_of_movement">abs</field> <field name="status" id="A3JH(F4iaa#67-C,*iE">STATUS</field> <value name="x"> <block type="math_number"> <field name="NUM">10</field> </block> </value> <value name="y"> <block type="math_number"> <field name="NUM">20</field> </block> </value> <value name="no_of_clicks"> <block type="math_number"> <field name="NUM">1</field> </block> </value> </block>',
      keywords: ['mouse', 'click'],
      shortDescription:
          'Clicks at the given X Y Co-ordinates on the screen using single / double / triple click(s). Default clicks on current position.',
      fullDescription:
          '''Clicks at the given X Y Co-ordinates on the screen using single / double / triple click(s). Default clicks on current position.
    Args:
        x (int): x-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        y (int): y-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        left_or_right (str, optional): Which mouse button.
        Eg: right or left, Defaults: left.
        no_of_click (int, optional): Number of times specified mouse button to be clicked.
        Eg: 1 or 2, Max 3. Defaults: 1.
        type_of_movement (str, optional): Type of movement.
    Returns: [status]
        bool: Whether the function is successful or failed.''',
    ),
    Block(
      name: 'Mouse Move',
      blockXml:
          '<block type="mouse_move"> <field name="type_of_movement">abs</field> <field name="status" id="A3JH(F4iaa#67-C,*iE">STATUS</field> <value name="x"> <block type="math_number"> <field name="NUM">10</field> </block> </value> <value name="y"> <block type="math_number"> <field name="NUM">20</field> </block> </value> </block>',
      keywords: ['mouse', 'move'],
      shortDescription: 'Moves the cursor to the given X Y Co-ordinates.',
      fullDescription: '''Moves the cursor to the given X Y Co-ordinates.
    Args:
        x (int): x-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        y (int): y-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        type_of_movement (str, optional): Type of movement.
    Returns: [status]
        bool: Whether the function is successful or failed.
''',
    ),
    Block(
      name: 'Mouse Drag',
      blockXml:
          '<block type="mouse_drag_from_to"> <field name="status" id="A3JH(F4iaa#67-C,*iE">STATUS</field> <value name="x1"> <block type="math_number"> <field name="NUM">10</field> </block> </value> <value name="y1"> <block type="math_number"> <field name="NUM">10</field> </block> </value> <value name="x2"> <block type="math_number"> <field name="NUM">500</field> </block> </value> <value name="y2"> <block type="math_number"> <field name="NUM">500</field> </block> </value> </block>',
      keywords: ['mouse', 'drag'],
      shortDescription: '',
      fullDescription:
          '''Clicks and drags from x1 y1 co-ordinates to x2 y2 Co-ordinates on the screen
    Args:
        x1 or x2 (int): x-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        y1 or y2 (int): y-coordinate on screen.
        Eg: 369 or 435, Defaults: ''.
        delay (float, optional): Seconds to wait while performing action.
        Eg: 1 or 0.5, Defaults to 0.5.
    Returns: [status]
        bool: Whether the function is successful or failed.
''',
    ),

// Keyboard Blocks 3
    Block(
      blockXml:
          '<block type="key_press"> <field name="key_1">a</field> <field name="key_2">a</field> <field name="key_3">a</field> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="write_to_window"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Keyboard Press',
      keywords: ['keyboard', 'key', 'press'],
      shortDescription: 'Emulates the given keystrokes.',
      fullDescription: '''Emulates the given keystrokes.
    Args:
        key_1 (str, optional): Enter the 1st key
        Eg: ctrl or shift. Defaults to ''.
        key_2 (str, optional): Enter the 2nd key in combination.
        Eg: alt or A. Defaults to ''.
        key_3 (str, optional): Enter the 3rd key in combination.
        Eg: del or tab. Defaults to ''.
        write_to_window (str, optional): (Only in Windows) Name of Window you want to activate. Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="key_write_enter"> <field name="key">e</field> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="text_to_write"> <block type="text"> <field name="TEXT">My AutoPylot is awesome</field> </block> </value> <value name="write_to_window"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Keyboard Write',
      keywords: ['keyboard', 'key', 'write', 'type', 'text'],
      shortDescription: 'Writes/Types the given text.',
      fullDescription: '''Writes/Types the given text.
    Args:
        text_to_write (str, optional): Text you wanted to type
        Eg: ClointFusion is awesome. Defaults to "".
        write_to_window (str, optional): (Only in Windows) Name of Window you want to activate
        Eg: Notepad. Defaults to "".
        delay_after_typing (int, optional): Seconds in time to wait after entering the text
        Eg: 5. Defaults to 1.
        key (str, optional): Press Enter key after typing.
        Eg: t for tab. Defaults to e
    Returns: [status]
        bool: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="key_hit_enter"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="write_to_window"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Keyboard Hit Enter',
      keywords: ['keyboard', 'key', 'press', 'enter'],
      shortDescription: 'Enter key will be pressed once.',
      fullDescription: '''Enter key will be pressed once.
    Args:
        write_to_window (str, optional): (Only in Windows)Name of Window you want to activate.
        Eg: Notepad. Defaults to "".
    Returns:[status]
        bool: Whether the function is successful or failed.''',
    ),
// Folder Blocks 8
    Block(
      blockXml:
          '<block type="folder_read_text_file"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <field name="data" id="!r=cbAny(v?V_m[/yjz4">DATA</field> <value name="txt_file_path"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Read Text File',
      keywords: ['folder', 'read', 'text', 'file'],
      shortDescription:
          'Reads from a given text file and returns entire contents as a single list.',
      fullDescription:
          '''Reads from a given text file and returns entire contents as a single list
    Args:
        txt_file_path (str, optional): Path of the text file.
        Eg: D:\\Files\\Text.txt, Defaults to "".
    Returns: [status,data]
        bool: If function is failed returns False.
        list: Text file contents.''',
    ),
    Block(
      blockXml:
          '<block type="folder_write_text_file"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <value name="txt_file_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="contents"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Write Text File',
      keywords: ['folder', 'write', 'text', 'file'],
      shortDescription: 'Writes given contents to a text file',
      fullDescription: '''Writes given contents to a text file
    Args:
        txt_file_path (str, optional): Path of the text file.
        Eg: D:\\Files\\Text.txt, Defaults to "".
        contents (str, optional): Text you want to write to the text file.
        Eg: ClointFusion is awesone. Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="folder_create"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <value name="strFolderPath"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Create Folder',
      keywords: ['folder', 'create'],
      shortDescription: 'Creates a folder at the given path',
      fullDescription: '''Creates a folder at the given path
    Args:
        strFolderPath (str, optional): Path of the folder.
        Eg: D:\\Files\\Text.txt, Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="folder_create_text_file"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <value name="textFolderPath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="txtFileName"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Create Text File',
      keywords: ['folder', 'create', 'text', 'file'],
      shortDescription: 'Creates a text file at the given path',
      fullDescription: '''Creates a text file at the given path
    Args:
        textFolderPath (str, optional): Path of the folder.
        Eg: D:\\Files\\Text.txt, Defaults to "".
        txtFileName (str, optional): Name of the text file.
        Eg: Text.txt, Defaults to "".
    Returns: [status]
        bool: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="folder_get_all_filenames_as_list"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <field name="data" id="!r=cbAny(v?V_m[/yjz4">DATA</field> <value name="strFolderPath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="extension"> <block type="text"> <field name="TEXT">all</field> </block> </value> </block>',
      name: 'Get Filenames in Folder',
      keywords: ['filenames', 'get', 'list'],
      shortDescription: 'Get all the files of the given folder in a list.',
      fullDescription: '''Get all the files of the given folder in a list.
    Parameters:
        strFolderPath  (str) : Location of the folder.
        extension      (str) : extension of the file. by default all the files will be listed regardless of the extension.
    returns: [status,data]
        allFilesOfaFolderAsLst (List) : all the file names as a list.''',
    ),
    Block(
      blockXml:
          '<block type="folder_delete_all_files"> <field name="print_status">TRUE</field> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <value name="fullPathOfTheFolder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="file_extension_without_dot"> <block type="text"> <field name="TEXT">all</field> </block> </value> </block>',
      name: 'Delete all files in folder',
      keywords: ['delete', 'folder', 'files'],
      shortDescription: 'Deletes all the files of the given folder',
      fullDescription: '''Deletes all the files of the given folder
    Parameters:
        fullPathOfTheFolder  (str) : Location of the folder.
        extension            (str) : extension of the file. by default all the files will be deleted inside the given folder
                                    regardless of the extension.
    returns:[status]
        bool: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="file_rename"> <field name="print_status">TRUE</field> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <value name="old_file_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="new_file_name"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Rename File',
      keywords: [
        'rename',
        'file',
        'change file path',
        'move',
        'change',
      ],
      shortDescription:
          'Renames the given file name to new file name with same extension.',
      fullDescription:
          '''Renames the given file name to new file name with same extension
    Args:
        old_file_path (str, optional): Path of the file.
        Eg: D:\\Files\\Text.txt, Defaults to "".
        new_file_name (str, optional): New name of the file.
        Eg: Text.txt, Defaults to "".
        print_status (bool, optional): Whether to print the status of the function. Defaults to True.
    Returns: [status]
        bool: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="file_get_json_details"> <field name="status" id="m,f^=#eZ|R*fFAlBL_f">STATUS</field> <field name="data" id="!r=cbAny(v?V_m[/yjz4">DATA</field> <value name="path_of_json_file"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="section"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Get JSON Data',
      keywords: ['json', 'get', 'data'],
      shortDescription:
          'Returns all the details of the given section in a dictionary',
      fullDescription:
          '''Returns all the details of the given section in a dictionary
    Args:
        path_of_json_file (str, optional): Path of the json file.
        Eg: D:\\Files\\Text.txt, Defaults to "".
        section (str, optional): Section of the json file.
        Eg: Text.txt, Defaults to "".
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Data of the given section in a dictionary.''',
    ),

// Windows Blocks 9
    Block(
      blockXml:
          '<block type="windows_show_desktop"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> </block>',
      name: 'Show Desktop',
      keywords: ['show', 'desktop'],
      shortDescription: 'Shows the desktop',
      fullDescription: ''' Minimizes all the applications and shows Desktop.
    Returns:
        bool: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="windows_launch_app"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="pathOfExeFile"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
      name: 'Launch App',
      keywords: ['launch', 'app'],
      shortDescription: 'Launches the given application',
      fullDescription: '''Launches any exe or batch file or excel file etc.
    Args:
        pathOfExeFile (str, optional): Location of the file with extension
        Eg: Notepad, TextEdit. Defaults to "".
    Returns:
        bool: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="window_activate_window"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="window_title"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
      name: 'Activate Window',
      keywords: ['activate', 'window'],
      shortDescription: 'Activates the given window',
      fullDescription: '''Activates the given window.
    Args:
        window_title (str, optional): Title of the window.
        Eg: Notepad, TextEdit. Defaults to "".
    Returns:
        bool: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="window_restore_windows"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="windowName"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
      name: 'Restore Window',
      keywords: ['restore', 'window'],
      shortDescription: 'Restores the given window',
      fullDescription: '''Restores the given window.
    Args:
        windowName (str, optional): Name of the window you want to restore.
        Eg: Notepad. Defaults to "".
    Returns: [status]''',
    ),
    Block(
      blockXml:
          '<block type="window_activate_and_maximize_windows"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="windowName"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
      name: 'Activate and Maximize Window',
      keywords: ['activate', 'maximize', 'window'],
      shortDescription: 'Activates and Maximizes the given window',
      fullDescription: '''Activates and maximizes the desired window.
    Parameters:
        windowName  (str) : Name of the window to maximize.
    Returns: [status]''',
    ),
    Block(
      blockXml:
          '<block type="window_minimize_windows"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="windowName"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
      name: 'Minimize Window',
      keywords: ['minimize', 'window'],
      shortDescription: 'Minimizes the given window',
      fullDescription: '''Activates and minimizes the desired window.
    Parameters:
        windowName  (str) : Name of the window to miniimize.
    Returns: [status]''',
    ),
    Block(
      blockXml:
          '<block type="window_close_windows"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="windowName"> <block type="text"> <field name="TEXT">Notepad</field> </block> </value> </block>',
      name: 'Close Window',
      keywords: ['close', 'window'],
      shortDescription: 'Closes the given window',
      fullDescription: '''Close the desired window.
    Args:
        windowName (str, optional): Name of the window you want to close.
        Eg: Notepad. Defaults to "".
    Returns: [status]''',
    ),
    Block(
      blockXml:
          '<block type="window_get_all_opened_titles_windows"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="YdnboV9d6Vt)7q.ejZ=]">DATA</field> </block>',
      name: 'Get All Opened Titles',
      keywords: ['get', 'opened', 'titles', 'windows'],
      shortDescription: 'Returns all the opened windows',
      fullDescription: '''Gives the title of all the existing (open) windows.
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: List of all the opened windows titles.''',
    ),
    Block(
      blockXml:
          '<block type="window_get_active_window"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="YdnboV9d6Vt)7q.ejZ=]">DATA</field> </block>',
      name: 'Get Active Window',
      keywords: ['get', 'active', 'window'],
      shortDescription: 'Returns the active window',
      fullDescription: '''Returns the active window title.
    Returns : [status,data]
        status: Whether the function is successful or failed.
        data: Active window title.''',
    ),
// String Blocks 3
    Block(
      blockXml:
          '<block type="string_extract_only_alphabets"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="H/Kebsqv]7?0xxje1=dQ">DATA</field> <value name="inputString"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Extract Only Alphabets',
      keywords: ['extract', 'alphabets'],
      shortDescription: 'Extracts only alphabets from the given string',
      fullDescription: '''Returns only alphabets from given input string
    Args:
        inputString (str, optional): Input string. Defaults to "".
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Only alphabets from given input string.''',
    ),
    Block(
      blockXml:
          '<block type="string_extract_only_numbers"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="H/Kebsqv]7?0xxje1=dQ">DATA</field> <value name="inputString"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Extract Only Numbers',
      keywords: ['extract', 'numbers'],
      shortDescription: 'Extracts only numbers from the given string',
      fullDescription: '''Returns only numbers from given input string
    Args:
        inputString (str, optional): Input string. Defaults to "".
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Only numbers from given input string.''',
    ),
    Block(
      blockXml:
          '<block type="string_remove_special_characters"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="H/Kebsqv]7?0xxje1=dQ">DATA</field> <value name="inputStr"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Remove Special Characters',
      keywords: ['remove', 'special', 'characters'],
      shortDescription: 'Removes special characters from the given string',
      fullDescription: '''Removes all the special character.
    Parameters:
        inputStr  (str) : string for removing all the special character in it.
    Returns : [status,data]
        outputStr (str) : returns the alphanumeric string''',
    ),
// Screen Scrap Blocks 2
    Block(
      blockXml:
          '<block type="citrix_scrape_contents_by_search_copy_paste"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="highlight_text"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Scrape Contents By Search Copy Paste',
      keywords: ['search', 'copy', 'paste', 'scrape'],
      shortDescription: 'Scrape Contents By Search Copy Paste',
      fullDescription: '''Scrapes the contents of the highlighted text.
    Parameters:
        highlight_text  (str) : text to be highlighted.
    Returns: [status,data]
        data (str) : scraped text.''',
    ),
    Block(
      blockXml:
          '<block type="citrix_window_clear_search"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> </block>',
      name: 'Clear Search',
      keywords: ['search', 'clear', 'window'],
      shortDescription: 'Clear Search',
      fullDescription: '''Clears previously found text (ctrl+f highlight)
    Returns: [status]''',
    ),
// Voice Blocks 2
    Block(
      blockXml:
          '<block type="speech_to_text"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="-#3/I+va-=*p3[jdPz0#">DATA</field> </block>',
      name: 'Speech to Text',
      keywords: ['speech', 'text', 'voice'],
      shortDescription: 'Speech to Text',
      fullDescription: '''Speech to Text using Google's Generic API
    Returns: [status,data]
        bool: Whether the function is successful or failed.
        data: Text converted from speech.
    ''',
    ),
// Computer Vision Blocks 2
    Block(
      blockXml:
          '<block type="image_to_text"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="-#3/I+va-=*p3[jdPz0#">DATA</field> <value name="img_path"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Image to Text',
      keywords: ['image', 'text', 'ocr'],
      shortDescription: 'Image to Text',
      fullDescription: '''Reads the text from the image.
    Args:
        img_path (str, optional): Path of the image.
        Eg: D:\\Files\\Image.png, Defaults to "".
    Returns: [status,data]
        bool: If function is failed returns False.
        str: Text from image.''',
    ),
// AR & VR Blocks 3
    Block(
      blockXml:
          '<block type="ar_facecam"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="left_eye_image"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="right_eye_image"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="mouth_animation"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'AR Facecam',
      keywords: ['ar', 'vr', 'facecam'],
      shortDescription: 'Starts AR session.',
      fullDescription: '''
        Starts AR session.
    Args:
        left_eye_image (str, optional): [description]. Defaults to "".
        right_eye_image (str, optional): [description]. Defaults to "".
        mouth_animation (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status].''',
    ),
    Block(
      blockXml:
          '<block type="ar_trackhands"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> </block>',
      name: 'AR Track Hands',
      keywords: ['ar', 'vr', 'track', 'hands'],
      shortDescription: 'Starts AR session for tracking hands.',
      fullDescription: '''
        Tracks the hands of the user.
    Returns:
        [bool]: [status].''',
    ),
    Block(
      blockXml:
          '<block type="ar_facemesh"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> </block>',
      name: 'AR Facemesh',
      keywords: ['ar', 'vr', 'facemesh'],
      shortDescription: 'Starts AR session for facemesh.',
      fullDescription: '''
        Starts face mesh.
    Returns:
        [bool]: [status].''',
    ),
// Utility Blocks 5
    Block(
      blockXml:
          '<block type="clipboard_get_data"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="Ky!2+OxBW3u1eN1+N]7m">DATA</field> </block>',
      name: 'Get Clipboard Data',
      keywords: ['clipboard', 'get', 'data'],
      shortDescription: 'Get Clipboard Data',
      fullDescription: '''Get data from clipboard
    Returns:
        [status, data]''',
    ),
    Block(
      blockXml:
          '<block type="clipboard_set_data"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="data"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Set Clipboard Data',
      keywords: ['clipboard', 'set', 'data'],
      shortDescription: 'Set Clipboard Data',
      fullDescription: '''Set data to clipboard
    Args:
        data: data to be set to clipboard
        format_id: format of data
    Returns:
        [status]''',
    ),
    Block(
      blockXml:
          '<block type="pause_program"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="seconds"> <block type="math_number"> <field name="NUM">5</field> </block> </value> </block>',
      name: 'Pause Program',
      keywords: ['pause', 'program', 'sleep', 'delay'],
      shortDescription: 'Pause Program for a given time',
      fullDescription: '''Stops the program for given seconds
    Args:
        seconds (str, optional): [description]. Defaults to "5".
    Returns:
        [status]''',
    ),
    Block(
      blockXml:
          '<block type="api_request"> <field name="method">get</field> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="-#3/I+va-=*p3[jdPz0#">DATA</field> <value name="url"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="headers"> <block type="text"> <field name="TEXT">{"charset": "utf-8", "Content-Type": "application/json"}</field> </block> </value> <value name="body"> <block type="text"> <field name="TEXT">{}</field> </block> </value> </block>',
      name: 'API Request',
      keywords: ['api', 'request'],
      shortDescription: 'API Request',
      fullDescription: '''This function is used to make API request.
    Args:
        url (str): _description_
        method (str, optional): _description_. Defaults to 'GET'.
        data (dict, optional): _description_. Defaults to None.
        headers (dict, optional): _description_. Defaults to None.

    Returns:
        [status, response]''',
    ),
// Artwork Blocks 2
    Block(
      blockXml:
          '<block type="art_simple_effects"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="user_input_img_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="name_required_on_image"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Simple Effects',
      keywords: ['art', 'simple', 'effects'],
      shortDescription: 'Simple Effects',
      fullDescription:
          '''Apply simple effects on the given image provided by default.

    Args:
        user_input_img_path (str): [description]. Defaults to "".
        name_required_on_image (str, optional): [description]. Defaults to "".
        output_folder (str, optional): [description]. Defaults to "".

    Returns:
        [status]''',
    ),
    Block(
      blockXml:
          '<block type="art_neural_effects"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_image_folder_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="style_image_folder_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_image_folder_path"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Neural Effects',
      keywords: ['art', 'neural', 'effects'],
      shortDescription: 'Neural Effects on the given images',
      fullDescription:
          '''Apply neural effects on the given image provided by default or specified by User.

    Args:
        input_image_folder_path (str, optional): [description]. Defaults to "".
        style_image_folder_path (str, optional): [description]. Defaults to "".
        output_image_folder_path (str, optional): [description]. Defaults to "".

    Returns:
        [status]''',
    ),
// PDF Blocks 1
    Block(
      blockXml:
          '<block type="pdf_extract_all_tables"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="pdf_file_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_file_name"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Extract All Tables from PDF',
      keywords: ['keywords'],
      shortDescription: 'Extract All Tables from PDF file',
      fullDescription:
          '''Extract all tables from a pdf file and save them to a text file.
    Args:
        pdf_file_path (str): [description]. Defaults to "".
        output_folder (str, optional): [description]. Defaults to "".
        output_file_name (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status].''',
    ),
// Mail Blocks 2
    Block(
      blockXml:
          '<block type="mail_send_via_desktop_outlook"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="to_email_id"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="subject"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="message"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="attachment_path"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Send Email via Desktop Outlook',
      keywords: ['mail', 'send', 'email'],
      shortDescription: 'Send Email via Desktop Outlook',
      fullDescription:
          '''Send email using Outlook from Desktop email application
    Args:
        to_email_id (str): [description]. Defaults to "".
        subject (str): [description]. Defaults to "".
        message (str): [description]. Defaults to "".
        attachment_path (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]''',
    ),
    Block(
      blockXml:
          '<block type="mail_send_gmail_with_app_password"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="gmail_username"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="gmail_app_password"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="to_email_id"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="subject"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="message"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="attachment_path"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Send Email via Gmail with App Password',
      keywords: ['mail', 'send', 'email'],
      shortDescription: 'Send Email via Gmail with App Password',
      fullDescription: '''Send email using Gmail with App Password
    Args:
        gmail_username (str): [description]. Defaults to "".
        gmail_app_password (str): [description]. Defaults to "".
        to_email_id (str): [description]. Defaults to "".
        subject (str): [description]. Defaults to "".
        message (str): [description]. Defaults to "".
        attachment_path (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]''',
    ),
// Converters Blocks 8
    Block(
      blockXml:
          '<block type="convert_image_to_base64"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="Dmyblwp+p99E[j[4[o1F">DATA</field> <value name="input_file"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Convert Image to Base64',
      keywords: ['convert', 'image', 'base64'],
      shortDescription: 'Convert Image to Base64',
      fullDescription: '''Description:
        Convert image to base64 string.
    Args:
        input_file (str, optional): [description]. Defaults to "".
    Returns:
        [bool, str]: [status, base64_string]''',
    ),
    Block(
      blockXml:
          '<block type="convert_excel_to_colored_html"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Convert Excel to Colored HTML',
      keywords: ['convert', 'excel', 'html'],
      shortDescription: 'Convert Excel to Colored HTML',
      fullDescription:
          '''Converts given Excel to HTML preserving the Excel format and saves in same folder as .html
    Args:
        input_filepath (str): The path of the input Excel file
        output_folder (str): The path of the output folder
        output_filename (str): The name of the output file
    Returns:
        [bool]: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="convert_png_to_jpg"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Convert PNG to JPG',
      keywords: ['convert', 'png', 'jpg'],
      shortDescription: 'Convert PNG to JPG',
      fullDescription: '''Convert the image from png to jpg

    Args:
        input_image_path (str): The path of the input image
        output_folder_path (str): The path of the output folder

    Returns:
        [bool]: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="convert_jpg_to_png"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Convert JPG to PNG',
      keywords: ['convert', 'jpg', 'png'],
      shortDescription: 'Convert JPG to PNG',
      fullDescription: '''Convert the image from jpg to png

    Args:
        input_image_path (str): The path of the input image
        output_folder_path (str): The path of the output folder

    Returns:
        [bool]: Whether the function is successful or failed.''',
    ),
    Block(
      blockXml:
          '<block type="convert_xls_to_xlsx"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_file"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Convert XLS to XLSX',
      keywords: ['convert', 'xls', 'xlsx'],
      shortDescription: 'Convert XLS to XLSX',
      fullDescription: '''Converts given XLS file to XLSX
    Args:
        input_file (str, optional): [description]. Defaults to "".
        output_folder (str, optional): [description]. Defaults to "".
        output_filename (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]''',
    ),
    Block(
      blockXml:
          '<block type="convert_csv_to_excel"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="csv_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="sep"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="excel_output_folder_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="excel_file_name"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Convert CSV to Excel',
      keywords: ['convert', 'csv', 'excel'],
      shortDescription: 'Convert CSV to Excel',
      fullDescription: '''Convert csv file to excel file.
    Args:
        csv_path (str): [description]. Defaults to "".
        sep (str): [description]. Defaults to "".
        excel_output_folder_path (str, optional): [description]. Defaults to "".
        excel_file_name (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]''',
    ),
    Block(
      blockXml:
          '<block type="convert_base64_to_img"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="imgBase64Str"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="img_folder_path"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="img_file_name"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Convert Base64 to Image',
      keywords: ['convert', 'base64', 'image'],
      shortDescription: 'Convert Base64 to Image',
      fullDescription:
          '''Convert base64 string to image and save it to the given folder path.
    Args:
        imgFileName (str, optional): [description]. Defaults to "".
        imgBase64Str (str, optional): [description]. Defaults to "".
        img_folder_path (str, optional): [description]. Defaults to "".
    Returns:
        [bool]: [status]''',
    ),
    Block(
      blockXml:
          '<block type="convert_change_corrupt_xls_to_xlsx"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_file"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_filename"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Convert Change Corrupt XLS to XLSX',
      keywords: ['convert', 'change', 'corrupt', 'xls', 'xlsx'],
      shortDescription: 'Convert Change Corrupt XLS to XLSX',
      fullDescription:
          '''Repair corrupt file to regular file and then convert it to xlsx.
        Args:
            input_file (str): [description]. Defaults to "".
            input_sheetname (str): [description]. Defaults to "".
            output_folder (str, optional): [description]. Defaults to "".
            output_filename (str, optional): [description]. Defaults to "".
        Returns:
            [bool]: [status]''',
    ),
// Alerts Blocks 3
    Block(
      blockXml:
          '<block type="msg_box_info"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="msg_for_user"> <block type="text"> <field name="TEXT">My AutoPylot</field> </block> </value> </block>',
      name: 'Message Box Info',
      keywords: ['message', 'box', 'info'],
      shortDescription: 'Message Box Info',
      fullDescription: ''' Message box to show info to the user.
    Args:
        msg_for_user (str): [description]

    Returns:
        [bool]: [status]''',
    ),
    Block(
      blockXml:
          '<block type="msg_box_ask_yes_no"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="msg_for_user"> <block type="text"> <field name="TEXT">Is My AutoPylot Awesome ?</field> </block> </value> </block>',
      name: 'Message Box Ask Yes No',
      keywords: ['message', 'box', 'ask', 'yes', 'no'],
      shortDescription: 'Message Box Ask Yes No',
      fullDescription: '''Message box to ask user to confirm something.
    Args:
        msg_for_user (str): [description]
    Returns:
        [bool]: [response] Whether the user has clicked yes(True) or no(False).''',
    ),
    Block(
      blockXml:
          '<block type="msg_count_down"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="msg_for_user"> <block type="text"> <field name="TEXT">Starting in</field> </block> </value> <value name="default_time"> <block type="math_number"> <field name="NUM">5</field> </block> </value> </block>',
      name: 'Message Count Down',
      keywords: ['message', 'count', 'down'],
      shortDescription: 'Message Count Down',
      fullDescription: '''Message box to show a countdown timer.
    Args:
        msg_for_user (str): [description]
        default_time (int, optional): [description]. Defaults to 5.
    Returns:
        [bool]: [status] ''',
    ),
// DataScience Blocks 4
    Block(
      blockXml:
          '<block type="ds_html_table_from_website"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="website_url"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="output_folder"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'HTML Table From Website',
      keywords: ['data', 'science', 'html', 'table', 'website'],
      shortDescription: 'HTML Table From Website',
      fullDescription:
          '''Web Scrape HTML Tables : Gets Website Table Data Easily as an Excel using Pandas. Just pass the URL of Website having HTML Tables.
    Args:
        website_url (str): URL of the website.
        output_folder (str): Folder path to save the Excel file.
    Returns:
        [bool]: [status]''',
    ),
    Block(
      blockXml:
          '<block type="ds_describe_excel_data"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <field name="data" id="dp[(M(Q!DY(N!,gRhscs">DATA</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> </block>',
      name: 'Describe Excel Data',
      keywords: ['data', 'science', 'describe', 'excel'],
      shortDescription: 'Describe Excel Data',
      fullDescription: '''Describe statistical data for the given excel
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str, optional): [description]. Defaults to "Sheet1".
        header (int, optional): [description]. Defaults to 0.
    Returns:
        [bool]: [status]''',
    ),
    Block(
      blockXml:
          '<block type="ds_pivot_excel_table"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="rows"> <block type="lists_create_with"> <mutation items="1"></mutation> <value name="ADD0"> <block type="text"> <field name="TEXT"></field> </block> </value> </block> </value> <value name="cols"> <block type="lists_create_with"> <mutation items="1"></mutation> <value name="ADD0"> <block type="text"> <field name="TEXT"></field> </block> </value> </block> </value> </block>',
      name: 'Pivot Excel Table',
      keywords: ['data', 'science', 'pivot', 'excel'],
      shortDescription: 'Pivot Excel Table',
      fullDescription: '''Pivot the given excel table

    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        rows (list): [description]. Defaults to [].
        cols (list): [description]. Defaults to [].
    Returns:
        [bool]: [status]''',
    ),
    Block(
      blockXml:
          '<block type="ds_draw_charts_from_excel"> <field name="chart_type">bar</field> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="input_filepath"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="input_sheetname"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="header"> <block type="math_number"> <field name="NUM">0</field> </block> </value> <value name="x_col"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="y_col"> <block type="text"> <field name="TEXT"></field> </block> </value> <value name="title"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Draw Charts From Excel',
      keywords: ['data', 'science', 'draw', 'charts', 'excel'],
      shortDescription: 'Draw Charts From Excel',
      fullDescription:
          '''Interactive data visualization function, which accepts excel file, X & Y column.
    Chart types accepted are bar , scatter , pie , sun , histogram , box  , strip.
    Args:
        input_filepath (str): [description]. Defaults to "".
        input_sheetname (str): [description]. Defaults to "Sheet1".
        header (int): [description]. Defaults to 0.
        x_col (str): [description]. Defaults to "".
        y_col (str): [description]. Defaults to "".
        chart_type (str, optional): [description]. Defaults to 'bar'.
        title (str, optional): [description]. Defaults to 'PyBOTs Chart'.
    Returns:
        [bool]: [status]''',
    ),
// Citrix Blocks 2
    Block(
      blockXml:
          '<block type="citrix_scrape_contents_by_search_copy_paste"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> <value name="highlight_text"> <block type="text"> <field name="TEXT"></field> </block> </value> </block>',
      name: 'Citrix Contents By Search Copy Paste',
      keywords: ['citrix', 'scrape', 'contents', 'search', 'copy', 'paste'],
      shortDescription: 'Citrix Contents By Search Copy Paste',
      fullDescription: '''Scrapes the contents of the highlighted text.
    Parameters:
        highlight_text  (str) : text to be highlighted.
    Returns: [status,data]
        data (str) : scraped text.''',
    ),
    Block(
      blockXml:
          '<block type="citrix_window_clear_search"> <field name="status" id=":ulA-E6LLi-c7ikn!(%">STATUS</field> </block>',
      name: 'Citrix Window Clear Search',
      keywords: ['citrix', 'window', 'clear', 'search'],
      shortDescription: 'Citrix Window Clear Search',
      fullDescription: '''Clears previously found text (ctrl+f highlight)
    Returns: [status]''',
    ),
// Excel Blocks 16
    Block(
      blockXml:
          '''<block type="authenticate_google_spreadsheet">        <field name="status" id="!;A!Jb25So.+N,Tg]3gS">STATUS</field>        <field name="data" id="Na]5qeWDGRI|LQU]5qqU">AUTH</field>        <value name="credential_file_path">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Authenticate Google Spreadsheet',
      keywords: [
        'Authenticate Google Spreadsheet',
        'Google Spreadsheet',
        'Authenticate Spreadsheet',
        'Authenticate',
        'Google',
        'Spreadsheet',
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        This function will authenticate the user to the google spreadsheet.
    Args:
        credential_file_path (str, optional): Path of credential file. Defaults to "".
    Returns:
        [bool, data]: Whether the function is successful or failed and data.
    ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_get_dataframe_from_google_spreadsheet">        <field name="status" id="!;A!Jb25So.+N,Tg]3gS">STATUS</field>        <field name="data" id="?[oo%UA9@tyW3.e3%=(8">DATA</field>        <value name="auth">            <block type="variables_get">                <field name="VAR" id="Na]5qeWDGRI|LQU]5qqU">AUTH</field>            </block>        </value>        <value name="spreadsheet_url">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="sheet_name">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Get Dataframe From Google Spreadsheet',
      keywords: [
        'Get Dataframe From Google Spreadsheet',
        'Google Spreadsheet',
        'Excel',
        'Dataframe',
        'Get Dataframe'
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
      Get dataframe from google spreadsheet.
    Args:
        URL (str, optional): (Only in Windows)Name of Window you want to activate.
        Eg: Notepad. Defaults to "".

    Returns:
        [bool, data]: Whether the function is successful or failed and data.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_upload_dataframe_to_google_spreadsheet">        <field name="status" id="!;A!Jb25So.+N,Tg]3gS">STATUS</field>        <value name="auth">            <block type="variables_get">                <field name="VAR" id="Na]5qeWDGRI|LQU]5qqU">AUTH</field>            </block>        </value>        <value name="spreadsheet_url">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="sheet_name">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="df">            <block type="variables_get">                <field name="VAR" id="?[oo%UA9@tyW3.e3%=(8">DATA</field>            </block>        </value>    </block>''',
      name: 'Upload Dataframe To Google Spreadsheet',
      keywords: [
        'Upload Dataframe To Google Spreadsheet',
        'Google Spreadsheet',
        'Upload',
        'Dataframe',
        'Excel'
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
      Uploads dataframe to google spreadsheet.
    Args:
        URL (str, optional): (Only in Windows)Name of Window you want to activate.
        Eg: Notepad. Defaults to "".

    Returns:
        [bool, data]: Whether the function is successful or failed and data.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_to_dataframe_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>        <value name="input_filepath">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="input_sheetname">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="header">            <block type="math_number">                <field name="NUM">1</field>            </block>        </value>    </block>''',
      name: 'Excel To Dataframe',
      keywords: ['Excel To Dataframe', 'Excel', 'Dataframe', 'To Dataframe'],
      shortDescription: '',
      fullDescription: '''
    Description:
        Converts excel to dataframe
    Args:
        input_filepath (str) : Complete path to the excel file.
        input_sheetname (str) : Sheet name of the excel file.
        header (int)         : Row number of the header.
    Returns:
        bool : [status] Whether the operation is successful or not.
        dataframe : [data] Dataframe of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="dataframe_to_excel_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>            </block>        </value>        <value name="output_sheetname">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="output_folder">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="output_filename">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Excel To Dataframe',
      keywords: ['Excel To Dataframe', 'Excel', 'Dataframe', 'To Dataframe'],
      shortDescription: '',
      fullDescription: '''
    Description:
        Converts dataframe to excel
    Args:
        df (dataframe) : Dataframe to be converted.
        output_sheetname (str) : Sheet name of the excel file.
        output_folder (str) : Folder path of the excel file.
        output_filename (str) : Filename of the excel file.
    Returns:
        bool : [status] Whether the operation is successful or not.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="dataframe_to_excel_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>            </block>        </value>        <value name="output_sheetname">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="output_folder">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="output_filename">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Excel To Dataframe',
      keywords: ['Excel To Dataframe', 'Excel', 'Dataframe', 'To Dataframe'],
      shortDescription: '',
      fullDescription: '''
    Description:
        Converts dataframe to excel
    Args:
        df (dataframe) : Dataframe to be converted.
        output_sheetname (str) : Sheet name of the excel file.
        output_folder (str) : Folder path of the excel file.
        output_filename (str) : Filename of the excel file.
    Returns:
        bool : [status] Whether the operation is successful or not.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_get_single_cell_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>            </block>        </value>        <value name="header">            <block type="math_number">                <field name="NUM">0</field>            </block>        </value>        <value name="column_name">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="cell_number">            <block type="math_number">                <field name="NUM">0</field>            </block>        </value>    </block>''',
      name: 'Excel Get Single Cell',
      keywords: [
        'Excel Get Single Cell',
        'Excel',
        'Cell',
        'Cell Number',
        'Get Single Cell',
        'Dataframe',
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Gets single cell from excel
    Args:
        df (dataframe) : Dataframe to be converted.
        header (int)         : Row number of the header.
        column_name (str)         : Column name of the excel file.
        cell_number (int)         : Cell number of the excel file.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_set_single_cell_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>            </block>        </value>        <value name="column_name">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="cell_number">            <block type="math_number">                <field name="NUM">0</field>            </block>        </value>        <value name="text">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Excel Set Single Cell',
      keywords: [
        'Excel Set Single Cell',
        'Excel',
        'Set',
        'Cell',
        'Cell Number',
        'Set Single Cell',
        'Dataframe',
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Sets single cell from excel
    Args:
        df (dataframe) : Dataframe to be converted.
        column_name (str)         : Column name of the excel file.
        cell_number (int)         : Cell number of the excel file.
        text (str)         : Text to be set.
    Returns:
        bool : [status] Whether the operation is successful or not.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_copy_range_from_sheet_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="H@JeN;pf,Rpec+P9x`U4">COPIED_DATA</field>        <value name="input_filepath">            <block type="text">                <field name="TEXT">Filepath</field>            </block>        </value>        <value name="input_sheetname">            <block type="text">                <field name="TEXT">Sheet 1</field>            </block>        </value>        <value name="start_col">            <block type="math_number">                <field name="NUM">1</field>            </block>        </value>        <value name="start_row">            <block type="math_number">                <field name="NUM">1</field>            </block>        </value>        <value name="end_col">            <block type="math_number">                <field name="NUM">3</field>            </block>        </value>        <value name="end_row">            <block type="math_number">                <field name="NUM">3</field>            </block>        </value>        <next>            <block type="excel_paste_range_to_sheet">                <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>                <value name="input_filepath">                    <block type="text">                        <field name="TEXT">Filepath</field>                    </block>                </value>                <value name="input_sheetname">                    <block type="text">                        <field name="TEXT">Sheet 1</field>                    </block>                </value>                <value name="start_col">                    <block type="math_number">                        <field name="NUM">1</field>                    </block>                </value>                <value name="start_row">                    <block type="math_number">                        <field name="NUM">1</field>                    </block>                </value>                <value name="copied_data">                    <block type="variables_get">                        <field name="VAR" id="H@JeN;pf,Rpec+P9x`U4">COPIED_DATA</field>                    </block>                </value>            </block>        </next>    </block>''',
      name: 'Excel Copy Range From Sheet',
      keywords: [
        'Excel Copy Range From Sheet',
        'Excel',
        'Copy',
        'Range',
        'From Sheet',
        'Copy Range From Sheet'
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Copies range from excel
    Args:
        input_filepath (str)         : Filepath of the excel file.
        input_sheetname (str)         : Sheet name of the excel file.
        start_col (int)         : Start column of the range.
        start_row (int)         : Start row of the range.
        end_col (int)         : End column of the range.
        end_row (int)         : End row of the range.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_get_all_header_columns_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>            </block>        </value>    </block>''',
      name: 'Excel Get All Header Columns',
      keywords: [
        'Excel Get All Header Columns',
        'Excel',
        'Header',
        'Columns',
        'Get All Header Columns',
        'Dataframe'
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Gets all header columns from excel
    Args:
        df (dataframe) : Dataframe to be converted.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_get_row_column_count_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>            </block>        </value>    </block>''',
      name: 'Excel Get Row Column Count',
      keywords: [
        'Excel Get Row Column Count',
        'Excel',
        'Row',
        'Column',
        'Count',
        'Get Row Column Count',
        'Dataframe',
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Gets row column count from excel
    Args:
        df (dataframe) : Dataframe to be converted.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_get_all_sheet_names_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>        <value name="input_filepath">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Excel Get All Sheet Names',
      keywords: ['Excel Get All Sheet Names', 'Excel', 'Sheet', 'Names'],
      shortDescription: '',
      fullDescription: '''
    Description:
        Gets all sheet names from excel
    Args:
        input_filepath (str)         : Filepath of the excel file.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          ''' <block type="excel_clear_sheet_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>            </block>        </value>    </block>''',
      name: 'Excel Clear Sheet',
      keywords: [
        'Excel Clear Sheet',
        'Excel',
        'Clear',
        'Sheet',
        'Dataframe',
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Clears sheet from excel
    Args:
        df (dataframe) : Dataframe to be converted.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          ''' <block type="excel_drop_columns_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>            </block>        </value>        <value name="cols">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Excel Drop Columns',
      keywords: [
        'Excel Drop Columns',
        'Excel',
        'Drop Columns',
        'Columns',
        'Drop',
        'Dataframe',
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Drops columns from excel
    Args:
        df (dataframe) : Dataframe to be converted.
        cols (str)         : Columns to be dropped.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_remove_duplicates_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>            </block>        </value>        <value name="column_name">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Excel Remove Duplicates',
      keywords: [
        'Excel Remove Duplicates',
        'Excel',
        'Remove Duplicates',
        'Duplicates',
        'Remove',
        'Dataframe',
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Removes duplicates from excel
    Args:
        df (dataframe) : Dataframe to be converted.
        column_name (str)         : Column name to be removed.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_group_by_column_values_n_split_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>            </block>        </value>        <value name="column_name">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="output_folder">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="output_filename">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Excel Group By Column Values and Split',
      keywords: [
        'Excel Group By Column Values N Split',
        'Excel',
        'Group By',
        'Split',
        'Column Values',
        'Values',
        'Split',
        'Dataframe',
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Groups by column values and splits the data into multiple excel files
    Args:
        df (dataframe) : Dataframe to be converted.
        column_name (str)         : Column name to be grouped.
        output_folder (str)         : Output folder path.
        output_filename (str)         : Output filename.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          ''' <block type="excel_if_value_exists_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>            </block>        </value>        <value name="cols">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="value">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Excel If Value Exists',
      keywords: [
        'Excel If Value Exists',
        'Excel',
        'Value Exists',
        'Value',
        'Exists',
        'Dataframe',
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Checks if value exists in excel
    Args:
        df (dataframe) : Dataframe to be converted.
        cols (str)         : Column name to be checked.
        value (str)         : Value to be checked.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_apply_template_format_new">        <field name="same_file">TRUE</field>        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <value name="input_filepath">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="input_sheetname">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="input_template_filepath">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="input_template_sheetname">            <block type="math_number">                <field name="NUM">0</field>            </block>        </value>        <value name="output_folder">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="output_filename">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Excel Apply Template Format',
      keywords: [
        'Excel Apply Template Format',
        'Excel',
        'Template',
        'Format',
        'Apply'
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Applies template format to excel
    Args:
        input_filepath (str)         : Input excel file path.
        input_sheetname (str)         : Input excel sheet name.
        input_template_filepath (str)         : Input template excel file path.
        input_template_sheetname (str)         : Input template excel sheet name.
        output_folder (str)         : Output folder path.
        output_filename (str)         : Output filename.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_merge_all_files_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <value name="input_filepath">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="output_folder">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="output_filename">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Excel Merge All Files',
      keywords: ['Excel Merge All Files', 'Excel', 'Merge', 'All', 'Files'],
      shortDescription: '',
      fullDescription: '''
    Description:
        Merges all excel files into one
    Args:
        input_filepath (str)         : Input excel file path.
        output_folder (str)         : Output folder path.
        output_filename (str)         : Output filename.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_create_file_new">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <value name="output_sheetname">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="output_folder">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="output_filename">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Excel Create File',
      keywords: ['Excel Create File', 'Excel', 'Create', 'File'],
      shortDescription: '',
      fullDescription: '''
    Description:
        Creates excel file
    Args:
        output_sheetname (str)         : Output excel sheet name.
        output_folder (str)         : Output folder path.
        output_filename (str)         : Output filename.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_tabular_data_from_website">        <field name="status" id="_HQ{;aZo^-dUfz*w]5-Y">STATUS</field>        <field name="data" id="G4~!gK1w3iCRU(iYUDLM">DATA</field>        <value name="website_url">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="table_number">            <block type="math_number">                <field name="NUM">0</field>            </block>        </value>    </block>''',
      name: 'Excel Tabular Data From Website',
      keywords: [
        'Excel Tabular Data From Website',
        'Excel',
        'Tabular Data',
        'Website',
        'From'
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Gets tabular data from website
    Args:
        website_url (str)         : Website url.
        table_number (int)         : Table number.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="df_from_list">        <field name="df" id=",j;+y6@nrq0T_ikaULiA">DF</field>        <value name="list_of_lists">            <block type="lists_create_with" inline="true">                <mutation items="2"></mutation>                <value name="ADD0">                    <block type="text">                        <field name="TEXT"></field>                    </block>                </value>                <value name="ADD1">                    <block type="text">                        <field name="TEXT"></field>                    </block>                </value>            </block>        </value>        <value name="column_names">            <block type="lists_create_with" inline="true">                <mutation items="2"></mutation>                <value name="ADD0">                    <block type="text">                        <field name="TEXT"></field>                    </block>                </value>                <value name="ADD1">                    <block type="text">                        <field name="TEXT"></field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'DataFrame From List',
      keywords: [
        'DataFrame From List',
        'DataFrame',
        'List',
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Creates dataframe from list of lists
    Args:
        list_of_lists (list)         : List of lists.
        column_names (list)         : Column names.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="df_from_string">        <field name="df" id=",j;+y6@nrq0T_ikaULiA">DF</field>        <value name="df_string">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="word_delimeter">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="line_delimeter">            <block type="text">                <field name="TEXT"></field>            </block>        </value>        <value name="column_names">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'DataFrame From String',
      keywords: ['DataFrame From String', 'DataFrame', 'String', 'From'],
      shortDescription: '',
      fullDescription: '''
    Description:
        Creates dataframe from string
    Args:
        df_string (str)         : Dataframe string.
        word_delimeter (str)         : Word delimeter.
        line_delimeter (str)         : Line delimeter.
        column_names (list)         : Column names.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="df_extract_sub_df">        <field name="status" id="_HQ{;aZo^-dUfz*w]5-Y">STATUS</field>        <field name="data" id="G4~!gK1w3iCRU(iYUDLM">DATA</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id=",j;+y6@nrq0T_ikaULiA">DF</field>            </block>        </value>        <value name="row_start">            <block type="math_number">                <field name="NUM">1</field>            </block>        </value>        <value name="row_end">            <block type="math_number">                <field name="NUM">1</field>            </block>        </value>        <value name="column_start">            <block type="math_number">                <field name="NUM">1</field>            </block>        </value>        <value name="column_end">            <block type="math_number">                <field name="NUM">1</field>            </block>        </value>    </block>''',
      name: 'DataFrame Extract Sub DataFrame',
      keywords: [
        'DataFrame Extract Sub DataFrame',
        'DataFrame',
        'Sub DataFrame',
        'Extract'
      ],
      shortDescription: '',
      fullDescription: '''
    Description:
        Extracts sub dataframe
    Args:
        df (dataframe)         : Dataframe.
        row_start (int)         : Row start.
        row_end (int)         : Row end.
        column_start (int)         : Column start.
        column_end (int)         : Column end.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="set_value_in_df">        <field name="status" id="_HQ{;aZo^-dUfz*w]5-Y">STATUS</field>        <field name="data" id="G4~!gK1w3iCRU(iYUDLM">DATA</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id=",j;+y6@nrq0T_ikaULiA">DF</field>            </block>        </value>        <value name="row_number">            <block type="math_number">                <field name="NUM">1</field>            </block>        </value>        <value name="column_number">            <block type="math_number">                <field name="NUM">1</field>            </block>        </value>        <value name="value">            <block type="text">                <field name="TEXT"></field>            </block>        </value>    </block>''',
      name: 'Set Value In DataFrame',
      keywords: ['Set Value In DataFrame', 'DataFrame', 'Set', 'Value'],
      shortDescription: '',
      fullDescription: '''
    Description:
        Sets value in dataframe
    Args:
        df (dataframe)         : Dataframe.
        row_number (int)         : Row number.
        column_number (int)         : Column number.
        value (str)         : Value.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="get_value_in_df">        <field name="status" id="_HQ{;aZo^-dUfz*w]5-Y">STATUS</field>        <field name="data" id="G4~!gK1w3iCRU(iYUDLM">DATA</field>        <value name="df">            <block type="variables_get">                <field name="VAR" id=",j;+y6@nrq0T_ikaULiA">DF</field>            </block>        </value>        <value name="row_number">            <block type="math_number">                <field name="NUM">1</field>            </block>        </value>        <value name="column_number">            <block type="math_number">                <field name="NUM">1</field>            </block>        </value>    </block>''',
      name: 'Get Value In DataFrame',
      keywords: ['Get Value In DataFrame', 'DataFrame', 'Get Value', 'Value'],
      shortDescription: '',
      fullDescription: '''
    Description:
        Gets value in dataframe
    Args:
        df (dataframe)         : Dataframe.
        row_number (int)         : Row number.
        column_number (int)         : Column number.
    Returns:
        bool : [status] Whether the operation is successful or not.
        data : [data] Data of the excel file.
  ''',
    ),
// Chrome Blocks
    Block(
      blockXml:
          '''<block type="chrome_instance_v2"><value name="chrome_driver"><block type="variables_get"> <field name="VAR" id="7E3|[}%GmC#yBWq|b=r">chrome_driver</field></block></value><value name="selenium_driver"><block type="variables_get"><field name="VAR">selenium_driver</field></block></value> </block>''',
      name: 'Chrome Instance',
      keywords: ['Chrome', 'Chrome Driver', 'Chrome Instance'],
      shortDescription: '',
      fullDescription: '''
      Description:
        The chrome instance block is used to represent getting a chrome driver instance.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="class_custom_code_chrome"><field name="code">.code_extension</field> <value name="var_a"> <block type="variables_get"><field name="VAR" id="-ox{Lr]0tF|q.SW},%{l">elements</field> </block></value> <value name="var_b"> <block type="variables_get"> <field name="VAR" id="D]naA4iv}As`MEnT77:">selenium_driver</field></block> </value>  </block>''',
      name: 'Custom Code Chrome',
      keywords: ['Custom Code', 'Custom Code Chrome'],
      shortDescription: '',
      fullDescription: '''
  Description:
    The custom code chrome block is used to represent running custom code on a chrome driver instance.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="status">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field>            </block>        </value>        <value name="function_variable">            <block type="chrome_navigate">                <value name="NAME">                    <block type="text">                        <field name="TEXT">pybots.ai</field>                    </block>                </value>                <value name="navigate">                    <block type="variables_get">                        <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Navigate Path',
      keywords: [
        'Chrome Navigate',
        'Chrome Navigate Path',
        'Navigate',
        'Chrome'
      ],
      shortDescription: '',
      fullDescription: '''
  Description:
    Navigate through the url after the session is started.
  Args:
    url (str, optional): Url which you want to visit. Defaults: "".
  Returns:
      bool: Whether the function is successful or failed.
          ''',
    ),
    Block(
      blockXml:
          '''<block type="status">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field>            </block>        </value>        <value name="function_variable">            <block type="chrome_download_path">                <value name="NAME">                    <block type="text">                        <field name="TEXT"></field>                    </block>                </value>                <value name="navigate">                    <block type="variables_get">                        <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Download Path',
      keywords: [
        'Chrome Download',
        'Chrome Download Path',
        'Download',
        'Chrome'
      ],
      shortDescription: '',
      fullDescription: '''
  Description:
    The status chrome block is used to represent getting the status of a chrome driver instance.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="status">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field>            </block>        </value>        <value name="function_variable">            <block type="chrome_write">                <value name="text">                    <block type="text">                        <field name="TEXT">MyAutoPylot is awesome</field>                    </block>                </value>                <value name="user_visible_text_element">                    <block type="text">                        <field name="TEXT">search</field>                    </block>                </value>                <value name="navigate">                    <block type="variables_get">                        <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Write',
      keywords: ['Chrome Write', 'Write', 'Chrome'],
      shortDescription: '',
      fullDescription: '''
  Description:
    Write a string in browser, if user_visible_text_element is given it writes on the given element.
  Args:
          text (str, optional): String which has be written.
          Defaults: "".
          user_visible_text_element (str, optional): The element which is visible(Like : Sign in).
          Defaults: "".
  Returns:
          bool: Whether the function is successful or failed.
          ''',
    ),
    Block(
      blockXml:
          '''<block type="status">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field>            </block>        </value>        <value name="function_variable">            <block type="chrome_mouse_click">                <field name="action_type">single</field>                <field name="value_type">text</field>                <value name="value">                    <block type="text">                        <field name="TEXT">Sign in</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Mouse Click',
      keywords: ['Chrome Mouse Click', 'Mouse Click', 'Chrome'],
      shortDescription: '',
      fullDescription: '''
          Description:
            Performs a Mouse Click on the given value.
          Args:
              value (str, optional): The value which has to be clicked.
              Defaults: "".
              action_type (str, optional): The type of click.
              Defaults: "single".
              value_type (str, optional): The type of value.
              Defaults: "text".
          Returns:
              bool: Whether the function is successful or failed.
          ''',
    ),
    Block(
      blockXml:
          '''<block type="status">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field>            </block>        </value>        <value name="function_variable">            <block type="chrome_scroll">                <field name="direction">down</field>                <field name="weight">300</field>                <value name="navigate">                    <block type="variables_get">                        <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Scroll',
      keywords: [
        'Chrome Scroll',
        'Scroll',
        'Scroll Down',
        'Scroll Up',
        'Chrome'
      ],
      shortDescription: '',
      fullDescription: '''
  Description:
    Scrolls the browser window.
  Args:
    direction (str, optional): The direction to scroll. Defaults: "down".u,d,l,r
    weight  : The weight of the scroll. Defaults: 3. 3 corresponds to 300 pixs
  Returns:
    bool: Whether the function is successful or failed.
        ''',
    ),
    Block(
      blockXml:
          '''<block type="status">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field>            </block>        </value>        <value name="function_variable">            <block type="chrome_key_press">                <field name="key_1">OPTIONNAME</field>                <field name="key_2">OPTIONNAME</field>                <value name="navigate">                    <block type="variables_get">                        <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Key Press',
      keywords: ['Chrome Key Press', 'Key Press', 'Chrome'],
      shortDescription: '',
      fullDescription: '''
  Description:
    Type text using Browser Helium Functions and press hot keys.
  id:0,Args:
    key_1 (str): Keys you want to simulate or string you want to press
    Eg: "tab" or "Murali". Defaults: ""
    key_2 (str, optional): Key you want to simulate with combination to key_1.
    Eg: "shift" or "escape". Defaults: ""

   Returns:
     bool: Whether the function is successful or failed.
    ''',
    ),
    Block(
      blockXml:
          '''<block type="status">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field>            </block>        </value>        <value name="function_variable">            <block type="chrome_hit_enter">                <value name="navigate">                    <block type="variables_get">                        <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Hit Enter',
      keywords: ['Chrome Hit Enter', 'Hit Enter', 'Enter', 'Hit', 'Chrome'],
      shortDescription: '',
      fullDescription: '''
  Description:
    Hits enter KEY in Browser
  Returns:
    bool: Whether the function is successful or failed.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="status">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field>            </block>        </value>        <value name="function_variable">            <block type="chrome_check_exists">                <field name="element">t</field>                <value name="text">                    <block type="text">                        <field name="TEXT">MyAutoPylot is awesome</field>                    </block>                </value>                <value name="navigate">                    <block type="variables_get">                        <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Check Exists',
      keywords: [
        'Chrome Check Exists',
        'Check Exists',
        'Element Exists',
        'Chrome'
      ],
      shortDescription: '',
      fullDescription: '''
  Description:
      Check if a specific element is found.
  Args:
      text (str, optional): To wait until the string appears on the screen.
            Eg: Export Successful Completed. Defaults: ""
            element (str, optional): Type of Element Whether its a Text(t) or Button(b).
            Defaults: "t - Text".
  Returns:
      bool: Whether the text is found or not.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="status">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field>            </block>        </value>        <value name="function_variable">            <block type="chrome_wait_until">                <field name="element">t</field>                <value name="text">                    <block type="text">                        <field name="TEXT">MyAutoPylot is awesome</field>                    </block>                </value>                <value name="navigate">                    <block type="variables_get">                        <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Wait Until',
      keywords: ['Chrome Wait Until', 'Wait Until', 'Wait', 'Chrome'],
      shortDescription: '',
      fullDescription: '''
  Description:
    Wait until a specific element is found.
  Args:
      text (str, optional): To wait until the string appears on the screen.
            Eg: Export Successful Completed. Defaults: ""
            element (str, optional): Type of Element Whether its a Text(t) or Button(b).
            Defaults: "t - Text".
  Returns:
      bool: Whether the function is successful or failed.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="status">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field>            </block>        </value>        <value name="function_variable">            <block type="chrome_refresh_page">                <value name="navigate">                    <block type="variables_get">                        <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Refresh Page',
      keywords: ['Chrome Refresh Page', 'Refresh Page', 'Refresh', 'Chrome'],
      shortDescription: '',
      fullDescription: '''
  Description:
    Refresh the current active browser page.
  Returns:
    bool: Whether the function is successful or failed.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="status">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="?3G|E*Aj5fWHvFDM}TU.">status</field>            </block>        </value>        <value name="function_variable">            <block type="chrome_set_waiting_time">                <value name="element">                    <block type="math_number">                        <field name="NUM">10</field>                    </block>                </value>                <value name="navigate">                    <block type="variables_get">                        <field name="VAR" id="]3qms+@Q(Gp:8RS4Ag^5">chrome_browser</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Set Waiting Time',
      keywords: [
        'Chrome Set Waiting Time',
        'Set Waiting Time',
        'Waiting Time',
        'Chrome'
      ],
      shortDescription: '',
      fullDescription: '''
  Description:
      Set the waiting time for the self.browser_driver. If element is not found in the given time, it will raise an exception.
  Args:
    time ([int]): The time in seconds to wait for the element to be found.
    element (str, optional): Type of Element Whether its a Text(t) or Button(b).
    Defaults: "t - Text".
  Returns:
    bool: Whether the function is successful or failed.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="status_data">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="EV/Gw}Bxj#rCpn4Gcgm">status</field>            </block>        </value>        <value name="data_variable">            <block type="variables_get">                <field name="VAR" id="+s^@u,R^NR,1+6*9c[;">data</field>            </block>        </value>        <value name="function_variable">            <block type="get_text">                <value name="get_element_image">                    <block type="text">                        <field name="TEXT"></field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Chrome Get Text',
      keywords: ['Text', 'Element'],
      shortDescription: '',
      fullDescription: '''
        Description:
            Get the text of the element.
        Args:
            element_xpath (str, optional): The xpath of the element. Defaults: ""
        Returns:
            bool: Whether the function is successful or failed.
            str: The text of the element.
  ''',
    ),
    Block(
      blockXml:
          '''<block type="status_data">        <value name="status_variable">            <block type="variables_get">                <field name="VAR" id="EV/Gw}Bxj#rCpn4Gcgm">status</field>            </block>        </value>        <value name="data_variable">            <block type="variables_get">                <field name="VAR" id="TSmlgrRk^^b{8tj5KF9">image_path</field>            </block>        </value>        <value name="function_variable">            <block type="get_element_image">                <field name="base64_image">FALSE</field>                <value name="get_element_image">                    <block type="text">                        <field name="TEXT"></field>                    </block>                </value>                <value name="image_name">                    <block type="text">                        <field name="TEXT">captcha</field>                    </block>                </value>            </block>        </value>    </block>''',
      name: 'Get Element Image',
      keywords: [
        'Chrome',
        'Image',
      ],
      shortDescription: '',
      fullDescription: '''
        Description:
          Get the image of the element.
        Args:
            element_xpath (str, optional): The xpath of the element. Defaults: ""
        Returns:
            bool: Whether the function is successful or failed.
            str: The image of the element.
  ''',
    ),
    // Python Starts
    Block(
      blockXml: '''<block type="controls_if"></block>''',
      name: 'If Condition',
      keywords: ['if', 'else', 'elif'],
      shortDescription: '',
      fullDescription: '''
      The if statement is used for conditional execution.
      It selects exactly one of the suites by evaluating the expressions one by one until one is found to be true; then that suite is executed (and no other part of the if statement is executed or evaluated). If all expressions are false, the suite of the else clause, if present, is executed.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="logic_compare"> <field name="OP">EQ</field></block>''',
      name: 'Logical Compare',
      keywords: ['Less than', 'Greater than', 'Equal to', 'Not equal to'],
      shortDescription: '',
      fullDescription: '''
      Logical Comparison
      ''',
    ),
    Block(
      blockXml:
          '''<block type="logic_operation"> <field name="OP">AND</field> </block>''',
      name: 'Logical Operation',
      keywords: ['AND'],
      shortDescription: '',
      fullDescription: '''
      The expression x and y first evaluates x; if x is false, its value is returned; otherwise, y is evaluated and the resulting value is returned.
      ''',
    ),
    Block(
      blockXml: '''<block type="logic_negate"></block>''',
      name: 'Logical Negate',
      keywords: ['NOT'],
      shortDescription: '',
      fullDescription: '''
      The operator not yields True if its argument is false, False otherwise.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="logic_boolean"> <field name="BOOL">TRUE</field> </block>''',
      name: 'Logical Boolean',
      keywords: ['True', 'False'],
      shortDescription: '',
      fullDescription: '''
      In the context of Boolean operations, and also when expressions are used by control flow statements, the following values are interpreted as false: False, None, numeric zero of all types, and empty strings and containers (including strings, tuples, lists, dictionaries, sets and frozensets). All other values are interpreted as true.
      ''',
    ),
    Block(
      blockXml: '''<block type="logic_null"></block>''',
      name: 'Logical Null',
      keywords: ['Null'],
      shortDescription: '',
      fullDescription: '''
      Logical Null
      ''',
    ),
    Block(
      blockXml: '''<block type="logic_ternary"></block>''',
      name: 'Logical Ternary',
      keywords: ['Ternary'],
      shortDescription: '',
      fullDescription: '''  Logical Ternary  ''',
    ),

// Logic  Ends
// Loops  Starts
    Block(
      blockXml:
          '''<block type="controls_repeat_ext"> <value name="TIMES"> <shadow type="math_number"><field name="NUM">10</field> </shadow> </value> </block>''',
      name: 'Repeat Number of Times',
      keywords: ['Repeat', 'Times', 'Repeat Times', 'Loop'],
      shortDescription: '',
      fullDescription: '''
      The repeat statement is used for looping. It executes the body of the loop a number of times.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="controls_whileUntil">   <field name="MODE">WHILE</field>  </block>''',
      name: 'While Loop',
      keywords: ['While', 'Until'],
      shortDescription: '',
      fullDescription: '''
      The while statement is used for repeated execution as long as an expression is true.\n
      while_stmt ::=  "while" assignment_expression ":" suite
                ["else" ":" suite]\n
      This repeatedly tests the expression and, if it is true, executes the first suite; if the expression is false (which may be the first time it is tested) the suite of the else clause, if present, is executed and the loop terminates.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="controls_for"> <field name="VAR" id="qoJ?{*TfEi0Ih%wOf|]n">i</field> <value name="FROM"> <shadow type="math_number"><field name="NUM">1</field>      </shadow>     </value>       <value name="TO">  <shadow type="math_number"> <field name="NUM">10</field>   </shadow>  </value>        <value name="BY">  <shadow type="math_number">   <field name="NUM">1</field>   </shadow>  </value> </block>''',
      name: 'For Loop',
      keywords: ['For', 'Loop'],
      shortDescription: '',
      fullDescription: '''
      The for statement is used for repeated execution of a suite of statements.
      for_stmt ::= "for" target_list "in" expression_list ":" suite
                ["else" ":" suite]\n
      The target_list is a list of targets, each of which is a name or a tuple of names. The target_list is executed once, before the first iteration through the loop. The expression_list is a list of expressions, each of which is evaluated and assigned to the target. The expression_list is executed once, before the first iteration through the loop. The suite is executed for each iteration through the loop.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="controls_forEach"> <field name="VAR" id="t{1q;_Q,8k@xCqy~aed=">j</field></block>''',
      name: 'For Each Loop',
      keywords: ['For Each', 'Loop'],
      shortDescription: '',
      fullDescription: '''
      The for each statement is used for repeated execution of a suite of statements.
      for_stmt ::= "for" target_list "in" expression_list ":" suite
                ["else" ":" suite]\n
      The target_list is a list of targets, each of which is a name or a tuple of names. The target_list is executed once, before the first iteration through the loop. The expression_list is a list of expressions, each of which is evaluated and assigned to the target. The expression_list is executed once, before the first iteration through the loop. The suite is executed for each iteration through the loop.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="controls_flow_statements"><field name="FLOW">BREAK</field></block>''',
      name: 'Flow Statements',
      keywords: ['Break', 'Continue', 'Return'],
      shortDescription: '',
      fullDescription: '''
      The break statement is used to terminate a loop.
      break_stmt ::= "break"\n
      The break statement terminates the closest enclosing loop.
      ''',
    ),

// Loops  Ends
// Math  Starts
    Block(
      blockXml:
          '''<block type="math_number"><field name="NUM">0</field></block>''',
      name: 'Number Constant',
      keywords: ['Number'],
      shortDescription: '',
      fullDescription: '''
      The number block is used to represent a number.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow> </value><value name="B"> <shadow type="math_number"> <field name="NUM">1</field> </shadow>  </value> </block>''',
      name: 'Arithmetic Operators',
      keywords: ['Add', 'Subtract', 'Multiply', 'Divide', 'Modulo'],
      shortDescription: '',
      fullDescription: '''
      The arithmetic block is used to represent arithmetic operations.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="math_single"> <field name="OP">ROOT</field> <value name="NUM"> <shadow type="math_number"> <field name="NUM">9</field>  </shadow>  </value> </block>''',
      name: 'Single Math',
      keywords: [
        'Root',
        'Square Root',
        'Absolute',
        'Logarithm',
        'Log',
        'Ln',
        'Exponential',
        'Exp'
      ],
      shortDescription: '',
      fullDescription: '''
      The single block is used to represent single-argument functions.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="math_trig"> <field name="OP">SIN</field> <value name="NUM"> <shadow type="math_number">  <field name="NUM">45</field> </shadow> </value> </block>''',
      name: 'Trignometric Functions',
      keywords: ['Sin', 'Cos', 'Tan', 'Asin', 'Acos', 'Atan'],
      shortDescription: '',
      fullDescription: '''
      The trig block is used to represent trigonometric functions.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="math_constant"> <field name="CONSTANT">PI</field> </block>''',
      name: 'Constant Math',
      keywords: ['Pi', 'E', 'Phi', 'Sqrt(2)', 'Sqrt', 'Sqrt(1/2)', 'infinity'],
      shortDescription: '',
      fullDescription: '''
      The constant block is used to represent constants.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="math_number_property"> <field name="PROPERTY">EVEN</field> <value name="NUM"><shadow type="math_number"> <field name="NUM">0</field></shadow></value> </block>''',
      name: 'Number Properties',
      keywords: [
        'Even',
        'Odd',
        'Prime',
        'Whole',
        'Fractional',
        'Positive',
        'Negative',
        'Divisible by'
      ],
      shortDescription: '',
      fullDescription: '''
      The number property block is used to represent number properties.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="math_round"><field name="OP">ROUND</field><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value> </block>''',
      name: 'Round Math',
      keywords: ['Round', 'Ceiling', 'Floor', 'Round Up', 'Round Down'],
      shortDescription: '',
      fullDescription: '''
      The round block is used to represent rounding functions.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="math_on_list"><mutation op="SUM"></mutation><field name="OP">SUM</field></block>''',
      name: 'Math on List',
      keywords: [
        'Sum',
        'Min',
        'Max',
        'Average',
        'Median',
        'Mode',
        'Variance',
        'Standard Deviation',
        'Random'
      ],
      shortDescription: '',
      fullDescription: '''
      The math on list block is used to represent math functions on lists.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="math_modulo"><field name="OP">MOD</field><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field> </shadow> </value> <value name="DIVISOR"> <shadow type="math_number"><field name="NUM">10</field></shadow> </value> </block>''',
      name: 'Modulo Math',
      keywords: ['Modulo', 'Remainder'],
      shortDescription: '',
      fullDescription: '''
      The modulo block is used to represent modulo operations.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="math_constrain"><field name="OP">CONSTRAIN</field><value name="VALUE"><shadow type="math_number"> <field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>''',
      name: 'Constrain Math',
      keywords: ['Constrain', 'Clamp'],
      shortDescription: '',
      fullDescription: '''
      The constrain block is used to represent constraining operations.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="math_random_int"><field name="OP">RANDOM</field><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"> <shadow type="math_number"><field name="NUM">100</field></shadow></value> </block>''',
      name: 'Random Int',
      keywords: ['Random', 'Random Int'],
      shortDescription: '',
      fullDescription: '''
      The random int block is used to represent random integer operations.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="math_random_float"><field name="OP">RANDOM</field><value name="FROM"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="TO"> <shadow type="math_number"><field name="NUM">1</field></shadow></value> </block>''',
      name: 'Random Float',
      keywords: ['Random', 'Random Float'],
      shortDescription: '',
      fullDescription: '''
      The random float block is used to represent random float operations.
      ''',
    ),

// Math  Ends
// Text  Starts
    Block(
      blockXml:
          '''<block type="text"> <field name="TEXT">abc</field> </block>''',
      name: 'Text Block',
      keywords: ['Text'],
      shortDescription: '',
      fullDescription: '''
      The text block is used to represent text.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="text_join"><mutation items="2"></mutation></block>''',
      name: 'Text Join',
      keywords: ['Join'],
      shortDescription: '',
      fullDescription: '''
      The text join block is used to represent joining text.
      ''',
    ),
    Block(
      blockXml:
          ''' <block type="text_append"> <field name="VAR" id="nxCmLAMDZttm*0VIwPod">item</field> <value name="TEXT"> <shadow type="text"><field name="TEXT"></field> </shadow></value></block>''',
      name: 'Append Text',
      keywords: ['Append', 'Concatenate'],
      shortDescription: '',
      fullDescription: '''
      The text append block is used to represent appending text.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="text_length"><field name="TEXT">abc</field></block>''',
      name: 'Length Text',
      keywords: ['Length', 'Length of'],
      shortDescription: '',
      fullDescription: '''
      The text length block is used to represent text length.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="text_isEmpty"><value name="VALUE"><shadow type="text"><field name="TEXT"></field></shadow></value> </block>''',
      name: 'Is Empty Text',
      keywords: ['Is Empty', 'Is Blank'],
      shortDescription: '',
      fullDescription: '''
      The text is empty block is used to represent text is empty.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="text_indexOf"><field name="END">FIRST</field> <value name="VALUE"> <block type="variables_get"><field name="VAR" id="a7+}Z-ROm?HQmPLp7j">text</field></block> </value><value name="FIND"><shadow type="text"><field name="TEXT">abc</field></shadow> </value> </block>''',
      name: 'Index of Text',
      keywords: ['Index of', 'Find', 'Find Index'],
      shortDescription: '',
      fullDescription: '''
      The text index of block is used to represent finding the index of a text.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="a7+}Z-ROm?HQmPLp7j">text</field> </block></value></block>''',
      name: 'Char At Text',
      keywords: ['Char At', 'Character At'],
      shortDescription: '',
      fullDescription: '''
      The text char at block is used to represent getting a character at a specific index.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="text_getSubstring"> <mutation at1="true" at2="true"></mutation> <field name="WHERE1">FROM_START</field> <field name="WHERE2">FROM_START</field> <value name="STRING"><block type="variables_get"> <field name="VAR" id="a7+}Z-ROm?HQmPLp7j">text</field></block></value></block>''',
      name: 'Get Substring Text',
      keywords: ['Get Substring', 'Substring'],
      shortDescription: '',
      fullDescription: '''
      The text get substring block is used to represent getting a substring.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="text_changeCase"> <field name="CASE">UPPERCASE</field><value name="TEXT"> <shadow type="text"> <field name="TEXT">abc</field> </shadow> </value></block>''',
      name: 'Change Case Text',
      keywords: ['Change Case', 'Case'],
      shortDescription: '',
      fullDescription: '''
      The text change case block is used to represent changing the case of a text.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="text_trim"> <field name="MODE">BOTH</field> <value name="TEXT"> <shadow type="text"> <field name="TEXT">abc</field>  </shadow>  </value> </block>''',
      name: 'Trim Text',
      keywords: ['Trim', 'Trim Spaces'],
      shortDescription: '',
      fullDescription: '''
      The text trim block is used to represent trimming a text.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="text_print"> <value name="TEXT"> <shadow type="text"> <field name="TEXT">abc</field> </shadow> </value> </block>''',
      name: 'Print Text',
      keywords: ['Print'],
      shortDescription: '',
      fullDescription: '''
      The text print block is used to represent printing a text.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="text_prompt_ext"> <mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"> <shadow type="text"> <field name="TEXT">abc</field> </shadow></value> </block>''',
      name: 'Prompt Text',
      keywords: ['Prompt'],
      shortDescription: '',
      fullDescription: '''
      The text prompt block is used to represent prompting for a text.
      ''',
    ),

// Text  Ends
// Lists  Starts
    Block(
      blockXml:
          '''<block type="lists_create_with"> <mutation items="0"></mutation></block> ''',
      name: 'Create Empty List',
      keywords: ['Create List', 'Create'],
      shortDescription: '',
      fullDescription: '''
      Create an empty list.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="lists_create_with"> <mutation items="3"></mutation></block>''',
      name: 'Create List With',
      keywords: ['Create List', 'Create'],
      shortDescription: '',
      fullDescription: '''
      The lists create with block is used to represent creating a list.
      ''',
    ),
    Block(
      blockXml:
          ''' <block type="lists_repeat"><value name="NUM"><shadow type="math_number"> <field name="NUM">5</field></shadow> </value> </block>''',
      name: 'Repeat List',
      keywords: ['Repeat', 'Repeat Times'],
      shortDescription: '',
      fullDescription: '''
      The lists repeat block is used to represent repeating a list.
      ''',
    ),
    Block(
      blockXml: '''<block type="lists_length"></block>''',
      name: 'Length List',
      keywords: ['Length', 'Count'],
      shortDescription: '',
      fullDescription: '''
      The lists length block is used to represent getting the length of a list.
      ''',
    ),
    Block(
      blockXml: '''<block type="lists_isEmpty"></block>''',
      name: 'Is Empty List',
      keywords: ['Is Empty', 'Empty'],
      shortDescription: '',
      fullDescription: '''
      The lists is empty block is used to represent checking if a list is empty.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="lists_indexOf"><field name="END">FIRST</field><value name="VALUE">  <block type="variables_get"> <field name="VAR" id="^NJv4Do)0]:J7ks)PYxU">list</field> </block> </value> </block>''',
      name: 'Index Of List',
      keywords: ['Index Of', 'Find', 'Find Index'],
      shortDescription: '',
      fullDescription: '''
      The lists index of block is used to represent finding the index of a list.
      ''',
    ),
    Block(
      blockXml:
          ''' <block type="lists_getIndex"> <mutation statement="false" at="true"></mutation> <field name="MODE">GET</field> <field name="WHERE">FROM_START</field> <value name="VALUE"><block type="variables_get"><field name="VAR" id="^NJv4Do)0]:J7ks)PYxU">list</field></block> </value> </block>''',
      name: 'Get Index from List',
      keywords: ['Get Index', 'Get', 'Get Item'],
      shortDescription: '',
      fullDescription: '''
      The lists get index block is used to represent getting the item at a specific index of a list.
      ''',
    ),
    Block(
      blockXml:
          ''' <block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field> <field name="WHERE">FROM_START</field> <value name="LIST"> <block type="variables_get"> <field name="VAR" id="^NJv4Do)0]:J7ks)PYxU">list</field> </block> </value> </block>''',
      name: 'Set Index of List',
      keywords: ['Set Index', 'Set', 'Set Item'],
      shortDescription: '',
      fullDescription: '''
      The lists set index block is used to represent setting the item at a specific index of a list.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="lists_getSublist"> <mutation at1="true" at2="true"></mutation><field name="WHERE1">FROM_START</field> <field name="WHERE2">FROM_START</field> <value name="LIST"><block type="variables_get"> <field name="VAR" id="^NJv4Do)0]:J7ks)PYxU">list</field> </block>  </value> </block>''',
      name: 'Get Sublist from List',
      keywords: ['Get Sublist', 'Get Sublist'],
      shortDescription: '',
      fullDescription: '''
      The lists get sublist block is used to represent getting a sublist of a list.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="lists_split"> <mutation mode="SPLIT"></mutation> <field name="MODE">SPLIT</field><value name="DELIM"><shadow type="text"> <field name="TEXT">,</field> </shadow></value></block>''',
      name: 'Split List',
      keywords: ['Split', 'Split String'],
      shortDescription: '',
      fullDescription: '''
      The lists split block is used to represent splitting a string into a list.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="lists_sort"> <field name="TYPE">NUMERIC</field><field name="DIRECTION">1</field> </block>''',
      name: 'Sort List',
      keywords: ['Sort', 'Sort List'],
      shortDescription: '',
      fullDescription: '''
      The lists sort block is used to represent sorting a list.
      ''',
    ),
    Block(
      blockXml: '''
      <block type="excel_concat_all_sheets_of_given_excel">        <field name="data" id="U#-~hkY|E~Kap0iE},[">DATA</field>        <value name="excel_file_path">          <block type="text">            <field name="TEXT"></field>          </block>        </value>        <value name="sheet_names_as_list">          <block type="lists_create_with" inline="true">            <mutation items="2"></mutation>            <value name="ADD0">              <block type="text">                <field name="TEXT"></field>              </block>            </value>            <value name="ADD1">              <block type="text">                <field name="TEXT"></field>              </block>            </value>          </block>        </value>      </block>''',
      name: 'Concat All Sheets of Given Excel',
      keywords: [
        'Concat All Sheets of Given Excel',
        'Concat',
        'Excel',
        'Dataframe',
        'Merge',
      ],
      shortDescription: '',
      fullDescription: '''
      The excel concat all sheets of given excel block is used to represent concatenating all sheets of a given excel file.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="folder_delete_file_or_folder">        <field name="print_status">TRUE</field>        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <value name="file_or_folder_path">          <block type="text">            <field name="TEXT"></field>          </block>        </value>      </block>''',
      name: 'Delete File or Folder',
      keywords: [
        'Delete File or Folder',
        'Delete',
        'Delete File',
        'Delete Folder'
      ],
      shortDescription: '',
      fullDescription: '''
      The folder delete file or folder block is used to represent deleting a file or folder.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="df_drop_rows">        <field name="data" id="U#-~hkY|E~Kap0iE},[">DATA</field>        <value name="df">          <block type="variables_get">            <field name="VAR" id="Ln(xNs527~EH0J!I1BOn">df</field>          </block>        </value>        <value name="row_start">          <block type="math_number">            <field name="NUM">1</field>          </block>        </value>        <value name="row_end">          <block type="math_number">            <field name="NUM">3</field>          </block>        </value>      </block>''',
      name: 'Drop Rows',
      keywords: ['Drop Rows', 'Drop', 'Drop Row'],
      shortDescription: '',
      fullDescription: '''
      This block is used to dropp a range of rows from a dataframe.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="df_vlookup">        <field name="data" id="U#-~hkY|E~Kap0iE},[">DATA</field>        <value name="df1">          <block type="variables_get">            <field name="VAR" id=";b;R)}l5g6Iv1)n`#|QL">df1</field>          </block>        </value>        <value name="df2">          <block type="variables_get">            <field name="VAR" id=";b;R)}l5g6Iv1)n`#|QL">df1</field>          </block>        </value>        <value name="column_name">          <block type="text">            <field name="TEXT"></field>          </block>        </value>        <value name="how">          <block type="text">            <field name="TEXT">left</field>          </block>        </value>      </block>''',
      name: 'VLookup',
      keywords: ['Vlookup', 'Merge', 'Dataframe', 'Excel'],
      shortDescription: '',
      fullDescription: '''
      This block is used to perform a vlookup on dataframes.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_get_single_cell">        <field name="data" id="U#-~hkY|E~Kap0iE},[">DATA</field>        <value name="df">          <block type="variables_get">            <field name="VAR" id="Ln(xNs527~EH0J!I1BOn">df</field>          </block>        </value>        <value name="header">          <block type="math_number">            <field name="NUM">1</field>          </block>        </value>        <value name="column_name">          <block type="text">            <field name="TEXT"></field>          </block>        </value>        <value name="cell_number">          <block type="math_number">            <field name="NUM">3</field>          </block>        </value>      </block>''',
      name: 'Get Single Cell',
      keywords: [
        'Get Single Cell',
        'Get',
        'Get Cell',
        'Cell',
        'Excel',
        'Dataframe',
      ],
      shortDescription: '',
      fullDescription: '''
      This block is used to get a single cell value from a dataframe.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="excel_set_single_cell">        <field name="data" id="U#-~hkY|E~Kap0iE},[">DATA</field>        <value name="df">          <block type="variables_get">            <field name="VAR" id="Ln(xNs527~EH0J!I1BOn">df</field>          </block>        </value>        <value name="column_name">          <block type="text">            <field name="TEXT"></field>          </block>        </value>        <value name="cell_number">          <block type="math_number">            <field name="NUM">3</field>          </block>        </value>        <value name="text">          <block type="text">            <field name="TEXT"></field>          </block>        </value>      </block>''',
      name: 'Set Single Cell',
      keywords: [
        'Set Single Cell',
        'Set',
        'Set Cell',
        'Cell',
        'Excel',
        'Dataframe',
      ],
      shortDescription: '',
      fullDescription: '''
      This block is used to set a single cell value in a dataframe.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="pdf_extract_table">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="U#-~hkY|E~Kap0iE},[">DATA</field>        <value name="pdf_file_path">          <block type="text">            <field name="TEXT"></field>          </block>        </value>        <value name="table_number">          <block type="math_number">            <field name="NUM">1</field>          </block>        </value>        <value name="page_number">          <block type="math_number">            <field name="NUM">1</field>          </block>        </value>      </block>''',
      name: 'Extract Specific Table from a Page of PDF',
      keywords: [
        'Extract',
        'Table',
        'PDF',
        'Excel',
        'extract single',
        'one table'
      ],
      shortDescription: '',
      fullDescription: '''
      This block is used to extract desired table from a page of a PDF file.
      ''',
    ),
    Block(
      blockXml: '''<block type="get_path"></block>''',
      name: 'Get Path',
      keywords: ['Path', 'Get', 'Choose', 'Browse', 'Upload', 'File'],
      shortDescription: '',
      fullDescription: '''
      This block is used to get the path of the file.
      ''',
    ),
    Block(
      blockXml:
          '''<block type="df_convert_column_to_type">        <field name="status" id=":ulA-E6LLi-c7ikn!`(%">STATUS</field>        <field name="data" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>        <value name="df">          <block type="variables_get">            <field name="VAR" id="fzNXQc/~4k|pC6r:o?/5">DATA</field>          </block>        </value>        <value name="column_name">          <block type="text">            <field name="TEXT"></field>          </block>        </value>        <value name="column_type">          <block type="text">            <field name="TEXT"></field>          </block>        </value>      </block>''',
      name: 'Dataframe Change Column Type',
      keywords: ['Dataframe', 'Change', 'Column', 'Type', 'Excel'],
      shortDescription: '',
      fullDescription: '''
      Description:
          Converts a column type of a dataframe to a given type
          Column type doesn't persist after writing to excel

      Args:
          df : dataframe

          column_name : Single column name or list of column names

          column_type : column type to be converted to like string, int, float, date, boolean, complex, bytes, etc.

      Returns:
          [data]
          data : The modified dataframe object
      ''',
    ),
    // Python  Ends
  ];
}

class AutoCompleteBlock extends StatelessWidget {
  const AutoCompleteBlock({
    Key? key,
    required this.controller,
  }) : super(key: key);

  final WebviewController controller;
  @override
  Widget build(BuildContext context) {
    return RawAutocomplete<Block>(
      optionsBuilder: (TextEditingValue textEditingValue) {
        return Block.blockOptions2.where((Block option) {
          return option
              .toString()
              .contains(textEditingValue.text.toLowerCase().trim());
        });
      },
      displayStringForOption: Block.displayStringForOption,
      fieldViewBuilder: (BuildContext context,
          TextEditingController textEditingController,
          FocusNode focusNode,
          VoidCallback onFieldSubmitted) {
        return TextFormField(
          controller: textEditingController,
          focusNode: focusNode,
          autofocus: true,
          onFieldSubmitted: (String value) {
            onFieldSubmitted();
          },
        );
      },
      optionsViewBuilder: (BuildContext context,
          AutocompleteOnSelected<Block> onSelected, Iterable<Block> options) {
        return Align(
          alignment: Alignment.topLeft,
          child: Material(
            elevation: 4.0,
            child: SizedBox(
              // height: 200.0,
              width: 278.0,
              child: ListView.builder(
                cacheExtent: 7,
                shrinkWrap: true,
                padding: const EdgeInsets.only(top: 5),
                itemCount: options.length,
                itemBuilder: (BuildContext context, int index) {
                  final Block option = options.elementAt(index);
                  return GestureDetector(
                      onTap: () {
                        onSelected(option);
                      },
                      child: ListTile(
                        shape: RoundedRectangleBorder(
                          side: BorderSide(color: kPacificBlue, width: 1),
                          borderRadius: BorderRadius.circular(5),
                        ),
                        tileColor: kPrussianBlue,
                        title: Text(Block.displayStringForOption(option)),
                        trailing:
                            Row(mainAxisSize: MainAxisSize.min, children: [
                          //  const Padding(padding: EdgeInsets.only(left: 100)),

                          ElevatedButton(
                            style: ElevatedButton.styleFrom(
                                primary: kBlueSapphire, onPrimary: kWhite),
                            child: const Icon(Icons.add),
                            onPressed: () async {
                              await controller.executeScript(
                                  "add_xml_to_workspace('${option.blockXml}')");
                              await Flushbar(
                                title:
                                    'Block ${option.name} Added to workspace',
                                message: 'Search for more blocks if wanted',
                                backgroundColor: kSuccessColor,
                                duration: const Duration(seconds: 3),
                              ).show(context);
                            },
                          ),
                          const Padding(padding: EdgeInsets.only(left: 10)),
                          ElevatedButton(
                              style: ElevatedButton.styleFrom(
                                  primary: kBlueSapphire, onPrimary: kWhite),
                              child: const Icon(Icons.info),
                              onPressed: () {
                                showDialog(
                                  context: context,
                                  builder: (BuildContext context) {
                                    return AlertDialog(
                                      title: const Text("Info"),
                                      content: Text(option.fullDescription),
                                      backgroundColor: kTitle,
                                    );
                                  },
                                );
                              })
                        ]),
                      ));
                },
              ),
            ),
          ),
        );
      },
    );
  }
}
