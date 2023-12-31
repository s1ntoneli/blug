# SwiftUI 支持左键点击按钮出现菜单

[Alt text](<leftclickmenu.png>)

SwiftUI 的 contextMenu 只支持右键打开，有时候我们需要左键点击设置图标，显示菜单。可以这么做：



```
Menu("Label") {
      Button("Buttons") { }
}
.menuStyle(BorderlessButtonMenuStyle())
.menuIndicator(.hidden)
.fixedSize() // 如果不设置，宽度会和菜单项宽度一样，而我们只需要显示一个图标
```!

或者 
```
Menu("Label") {
      Button("Buttons") { }
}
.menuStyle(BorderlessButtonMenuStyle())
.menuIndicator(.hidden)
.fixedSize() // 如果不设置，宽度会和菜单项宽度一样，而我们只需要显示一个图标
.buttonStyle(.plain)
```