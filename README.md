#前言
微信小程序，简称小程序，是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或搜一下即可打开应用。

小程序是一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播，同时具有出色的使用体验。

#小程序构建目的
##沈杨书社的背景材料
沈杨书社，创建于1994年10月13日，是西安交通大学第一家学生自己创办的书社。沈志江，杨浩，沈小华，杨博为书社的创始人，取四位创始人的姓氏为书社社名。

沈杨书社逐渐发展成为交大令人瞩目的实践社团，成为交大德育教育的一块重要基地。书社累计会员近千名，现有藏书三千余册，工作人员五十九名，社员八百余名，固定资产五万余元，具有一系列完善管理制度与财务制度。

沈杨书社亦受到学校及社会各界的关注。前教育部副部长吴启迪莅临书社指导，西安交通大学蒋德明老校长为书社题写社名，徐通模校长题词：“人类的财富，服务于人类”给予勉励；“211工程”部门预审中，书社被国家教育部领导誉为“交大的特色”；《党建》（中央宣传部主办）、《陕西日报》、《河南高教》、《绍兴县报》、《女友》、《西安交大》、陕西电视台、陕西人民广播电台、西安交大电视台等新闻媒体都曾给予报道。

#沈杨书社与微信小程序
沈杨书社的图书管理系统经过了几代的发展，从最开始在PC上运行的软件到在线的网址，再到微信小程序，时代再变化，我们书社的图书管理系统也随之变化。从软件到小程序，用户越来越方便去操作，系统也变得越来越小，越来越轻便，这不仅得益于科技的进步，也得益于我们不懈进取的态度。

#微信小程序的创新之处及实用之处
“沈杨书社”微信小程序相比于之前老旧的系统来说，有以下几大创新之处：

1. 系统变得更加轻量化，用户即用即走，无需等待停留；
1. 微信小程序将图书管理与活动管理巧妙结合到一起，使得用户在短时间内能迅速掌握书社动态。
1. 此小程序可以拓展到其他的图书管理系统，拓展性极强。
1. 支持在线入会，相比之前现场入会方便不少。（需要微信支付api，个人账户暂不支持，将在注册完企业账户后支持）
1. 实现了微信公众平台与小程序的灵活互动。
#小程序功能介绍
##图书查阅与详情
小程序可以现在当前书社已购入图书。
![](https://i.imgur.com/eF3hlrP.jpg)

也可查询豆瓣上的所有图书。
![](https://i.imgur.com/Czslhq6.jpg)

点击便可进入查询详情。
![](https://i.imgur.com/FHsNP1R.jpg)
##书社现有活动查询
可以查询书社在办活动。
![](https://i.imgur.com/Ejx8LyE.jpg)

可以一键报名活动。（此功能仍在开发中，预计七月上线）

也可以点击进入微信推送查看详情与评论。（此功能需要webview支持，暂时不可开发）
##个人信息查询
可以查询当前所借阅图书以及预约的活动。
![](https://i.imgur.com/scq5pex.jpg)

可以一键续借图书。

![](https://i.imgur.com/fpd5H8H.jpg)
##一键入会
此功能需要微信支付api，暂时不可开发，但预期七月份申请企业/组织认证后便进入开发。
##管理员入口（仍在开发，预计七月上线）
1.	扫码录入图书
2.	扫码还书（对会员）
3.	添加新活动
4.	查看书社所有图书及会员
#小程序技术方案
##总体设计
###设计目标
实现管理沈杨书社图书及活动。
###总体逻辑框架设计
![](https://i.imgur.com/ceXKtL6.png)

三者紧密结合，完成功能。
##系统设计
###微信小程序
本小程序主要调用微信平台提供的api，进行了大量测试。
###服务器
本小程序参与新浪云作为云服，主要原因有下：

1. 新浪云可用python进行开发，学习成本降低，便于维护
1. 新浪云不用做备案，降低时间成本
###数据库
本小程序主要采用了美橙互联上原有的书社数据库，不在此多赘述。
#后记与启发
开发者我是一门本科生，在读物理专业，平日对计算机知识非常着迷，本程序是我闲暇时间努力学习做出来的，深知有太多不足，也知道自己本身在知识上也有太多欠缺。但我从制作这个小程序的过程在体会到了不同于物理学习的快乐，这种快乐是创造产生的，尤其是当我终于将微信平台、新浪云和美橙互联互联起来的时候，这种快乐是无与伦比的，自中辛苦只有我自己知道，但是我认为这种快乐却能因为这个成品传递给大家。

我也深知自身能力欠缺，但这不是我止步不前的理由，我会一直学习下去，体会这种快乐并将这种快乐传递下去。
#参考文献
[1] 微信小程序官方文档

[2] https://github.com/glore/library
