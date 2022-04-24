# 哈萨克语音节研究

本目录下，我们将通过代码实现哈萨克语的音节音素划分。以达到判断是否为哈萨克语词汇，并且作为音节划分的依据。

## 参考书目

- 《简明哈萨克语语法》格拉吉丁·欧斯满

## 理论研究

音节即说话声音的自然划分单位。一个音节中必须有一个元音，但不一定要有辅音。哈萨克语总共有六种音节，本篇将研究各种音节的区别，使用哈拼和老文字共同研究阐述。

哈萨克语总共有 9 个元音，分别是：`ا a` `ٴا xa` `و o` `ٴو o` `ى e` `ٴى xe` `ۇ u` `ٴۇ xu/yu` `ە ye`

我们使用 **A** 表示元音，**B** 表示辅音。

> 一个词或词组中，有几个元音就有几个音节。

### 音节构造

- 一个音素音节，即仅包含一个元音的音节；
- 两个音素音节，**AB** 或 **BA**；
- 三个音素音节，**BAB**；
- 四个音素音节，**BABB**。

### 音节分类

- 开音节：**A** 或 **BA**
- 闭音节：**AB** 或 **ABB**
- 幽音节： **BAB** 或 **BABB**

### 音节划分

如果前音节为开音节，分隔必须在元音之后。

元音之间有两个辅音之时，音节则划在两个辅音之间。