# 微信小游戏

1. weapp-adapter
    全局的window canvas 对象
    降低了游戏开发的难度， dom的感觉出来了

2. canvas 的比例问题
    宽度是手机的宽度
    设计稿 750
    设计稿大小 * canvas 大小/750
    canvas.width 和image 都可以直接设置width

3. 游戏框架已经准备好大多数的对象 Game State
    cocos-2d 2d
    phaher 2d
    Egret 2d typescript
    three.js 3d
    js/libs/
    js/states 场景-> 界面
        preload  加载资源 create 绘制
    es6 extends 模块化机制， 封装
