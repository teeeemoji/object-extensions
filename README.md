# safe-get

一种安全获取 Javascript Object 内部多层嵌套的**某一属性**的方法, 避免因为这个**某一属性**的某一层父级为*null*, *undifined* 导致的**类型错误**.

## 安装要求
```npm install sget```
or
```yarn add sget```

## 上手指南
```javascript
import sget from 'sget'

// here is an object for example
const testObj = {
    a: null,
    one:{
        two: {
            three: 4
        }
    },
    arr: [{
      value: 2  
    }]
}

sget(testObj, 'one.two.three') // 4
sget(testObj, 'three.two.one.zero') // undefined
sget(testObj, 'a.b.c') // undefined
sget(testObj, 'arr.0.value') // 2
sget(testObj, 'arr.1.value') // undefined
```

## 测试

## 代码风格测试

## 贡献者
暂无其他贡献者

## 作者
teeeemoji

## 版权说明
该项目签署了MIT 授权许可，详情请参阅 [LICENSE](./LICENSE)

## 鸣谢