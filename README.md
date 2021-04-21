# 快站页面事件分发

在快站的页面上，便于其他插件或者模块得知一些关键事件的发生, 
依赖页面已经存在的[zepto](https://zeptojs.com/#$.Event)实现

## 官方事件列表

- form(普通表单)
  - 普通表单提交成功
    + event: `form:submit-success` 
    + callback: `(formId: number) => void`
  - 普通表单提交失败
    + event: `form:submit-fail` 
    + callback: `(formId: number) => void`
- survey(高级表单)
  - 高级表单提交成功
    + event: `survey:submit-success` 
    + callback: `(surveyId: number) => void`
  - 高级表单提交失败
    + event: `survey:submit-fail` 
    + callback: `(surveyId: number) => void`

## API

- registerEvents
```js
// 触发事件(一般在产生事件的插件里使用)
kzEvent.registerEvents([
  'form:submit-success',
  'form:submit-fail'
])
```

 - on
```js
// 监听事件
kzEvent.on('form:submit-success', function(formId) {
  console.log('formId: %s', formId)
})
```

- trigger
```js
// 触发事件
kzEvent.trigger('form:submit-success', [1573027116013])
```
