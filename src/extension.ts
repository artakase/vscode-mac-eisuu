// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as child_process from 'child_process';
import * as vscode from 'vscode';

const keyEisuu = 102;
const keyKana = 104;

function sendKeyCode(keyCode: number) {
    child_process.spawnSync('osascript', ['-e', `tell application "System Events" to key code ${keyCode.toFixed(0)}`]);
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('mac-eisuu.sendEisuu', () => {
            sendKeyCode(keyEisuu);
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand('mac-eisuu.sendKana', () => {
            sendKeyCode(keyKana);
        })
    );

    context.subscriptions.push(
        vscode.window.onDidChangeWindowState((state) => {
            if (state.focused) {
                sendKeyCode(keyEisuu);
            }
        })
    );
}
