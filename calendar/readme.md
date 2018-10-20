# 使用插件

- component 组件
    来自于Facebook 用搭积木的概念来类比做网站。
    我们的网页不再是由标签这原子级别的的构成， dic+css
    有组件构成 swiper scroll-view mapview 一块积木， 具有特定的功能或表现
    区块， 功能快的
    calendar 组件， 第三方的

- 自定义的组件开发
    components是MVVM的架构核心， 它跟pages是平级的，
    component 构成page .json文件
    {
        'usingComponents': {
            'icon': '../../components/icon/index'
        }
    }
    icon 组件
    在应用中会用到图标， 字体图标
    edit add map home
    alley iconfont ttf 文件， 样式
    相对独立的 一个组件
    可以在多个页面复用？