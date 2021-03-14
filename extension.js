// The module 'vscode' contains the VS Code extensibility API
const vscode = require("vscode");

// utils
const { findFiles } = require("./utils");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "indexify" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "indexify.contextMenu",
    ({ path }) => {
      findFiles(path);

      // TODO: find named exports, e.g. export const Component, module.exports.Component = "", module.exports={activate,deactivate};
      // TODO: find default exports, e.g. export default function Component(){...}, module.exports = Component
      // TODO: find anonymous exports, e.g. export default function (){...}, module.exports = function(){...}
      // TODO: export typescript interface and type

      // Display a message box to the user
      vscode.window.showInformationMessage(path);
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
