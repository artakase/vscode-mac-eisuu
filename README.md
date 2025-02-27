# Mac Japanese Eisuu

VS Code のウィンドウがアクティブになった際、Mac の英数キーを送信する拡張機能です。英数キーやかなキーを送信するコマンドも提供します。

## 設定

### `mac-eisuu.turnImeOffWhenGainFocus`

ウィンドウがアクティブになったとき、英数キーを送信するかどうかを制御します。
デフォルトでは `true` です。

## イベント

### `onDidChangeWindowState`

ウィンドウがアクティブになったとき、`config.mac-eisuu.turnImeOffWhenGainFocus` が `true` であれば英数キーを送信します。

## コマンド

### `mac-eisuu.sendEisuu`

英数キーを送信します。

### `mac-eisuu.sendKana`

かなキーを送信します。
