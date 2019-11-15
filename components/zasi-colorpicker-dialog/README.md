# 微信小程序HSV颜色选择器组件

分为两个部分，一个是选择器，一个是包含选择器的对话框。对话框为承载选择器的容器。

## 安装
直接下载组件代码，放入小程序后，在需要使用的页面json文件中指定，例如，组件被下载到小程序根目录，并且在某个叫做index的页面中使用，需要在index.json中加入：
```json
{
  "usingComponents":{
     "color-picker-dialog" :"存放组件的路径\colorPickerDialog\colorPickerDialog" 
  }
}
```
直接修改color-picker-dialog的showDialog属性，即可显示或者隐藏对话框。

整个项目就是一个小程序结构，可以下载后查看演示结果以及参考使用方法。

## 组件提供的属性以及事件等
### Color Picker属性

属性名 | 类型 | 值|描述
------ | ------- | ------- | -------
```maxRecentColorsNumber```|Number|整数，默认为10|显示“最近使用颜色”色卡的最大数目
```centerBackgroundColor```|String|颜色字符串，默认```#ffffff```|颜色选择器圆环中间的背景色
```showOpacity```|Boolean|默认```false```|是否显示可以调节透明度的滑动块
```sSliderPointerImage```|String|默认```null``` |调节亮度滑块指针图片
```vSliderPointerImage```|String|默认```null```|调节暗度滑块指针图片
```tSliderPointerImage```|String|默认```null``` |调节透明度滑块指针图片
```ringPointerImage```|String|默认```null``` |调节色彩滑块指针图片
```confirmImage```|String| |选择器中心确认图片
```sliderHeightPercent```|Number|数字，默认```0.2```|横向滑块（包括亮度，暗度和透明度）的高度和其所在容器高度的比值（倍数，即占其容器高度的百分比）。这里提到的"容器高度"是占整个颜色选择器总高度的10%
```sliderPointerHeightPercent```|Number|数字，默认```2```|横向滑块指针高度和滑块高度的比值，通常比1大，让指针能超过整个滑块
```sliderPointerWidthPercent```|Number|数字，默认```1```|横向滑块指针宽度和指针高度的比值，一半设为1，一个正方形区域
```pointerRadiusPercent```|Number|数字，默认```1.5```|圆环指针半径和圆环宽度的比值。这里要注意，因为技术原因，圆环的宽度不能直接设置，其宽度和整个圆环大小比值是固定的。
```colorRingWidthPercent```|Number|数字，默认```1```|圆环总宽和容器宽度以及50%高度的最小值之间的比值。
```centerColorRadiusPercent```|Number|数字，默认```0.3```|中心颜色块（即点击确认的那个颜色看）半径和圆环总宽的比值
```animationDuration```|Number|数字，单位毫秒，默认```500```|动画总时长
```ext-ring-pointer-class```|Class|扩展Class名|圆环指针的样式Class
```ext-center-color-class```|Class|扩展Class名|中心颜色块的样式Class
```ext-slider-pointer-class```|Class|扩展Class名|横向滑块（包括透明度，亮度，暗度）的样式Class

### Color Picker Dialog属性
Color Picker Dialog拥有所有Color Picker的属性，除此之外还具有自己的一些属性值

属性名 | 类型 | 值|描述
------ | ------- | ------- | -------
```showDialog```|Boolean| |是否显示对话框
```maskColor```|Array|RGB颜色值数组，默认```[0,0,0]```|对话框底部蒙版的颜色
```maskOpacity```|Number|0-1之间的数字，默认```0.5```|对话框底部蒙版的透明度
```ext-class```|Class|扩展Class名|对话框的样式Class


## 组件事件
监听事件方法是在组件标签中写上：```on[事件名字]="someMethod"```，例如：
```html
<color-picker-dialog oncolorConfirm="colorChoose">

</color-picker-dialog>

```

事件名 | 参数 | 描述
------ | ------- | ------- 
```colorConfirm```|一般事件参数，具体值从参数的detail属性中获取，其值结构为:```{value:Hex颜色值,opacity:透明度}```|该事件会在点击颜色选择器中心色块后触发，同时对话框将关闭
```colorChange```|一般事件参数，具体值从参数的detail属性中获取，其值结构为:```{value:Hex颜色值,opacity:透明度}```|该事件会在颜色选择器改变颜色值时候触发，包括：滑动任何一个指针，或者选择“常用色卡”或者“最近使用色卡”







