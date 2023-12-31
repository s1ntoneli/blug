# SwiftUI 使用代码呼出菜单

## 1. 埋下不可见的 Menu 或 ContextMenu 按键，模拟发送 event
```
SwiftUI.Menu {
    Button {
    } label: {
        Label("Delete", systemImage: "trash")
            .frame(width: 100)
    }
    .keyboardShortcut(.init("d"), modifiers: .command)
} label: {
    Rectangle()
        .foregroundColor(.clear)
        .background(Color.clear)
        .frame(width: 10, height: 10)
        .contentShape(Rectangle())
}
.buttonStyle(.plain)
.menuStyle(.automatic)
.menuIndicator(.hidden)
.controlSize(.small)
.fixedSize()
.background(GeometryReader { geometry in
    Color.clear
        .onAppear {
            self.state.viewFrames[index ?? -1] = geometry.frame(in: .global)
            print("View frame: \(self.state.viewFrames)")
        }
})
```
## 使用 NSMenu
