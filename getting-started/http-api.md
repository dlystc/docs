# HTTP API

每日一句的 HTTP API 设计非常简单 😋

端点: [https://dlystc.unknownmp.top/api/](https://dlystc.unknownmp.top/api/)

::: warning 关于缓存

目前所有接口都有 30s 的 CDN 侧缓存

在这个时间范围内的请求 *理论上* 会返回同样的内容
:::

## v2 版本

前缀: `v2/`

### JSON 格式

前缀: [`sentence`](https://dlystc.unknownmp.top/api/v2/sentence)

返回包含句子信息的 JSON 数据

#### 字段

| 名称       | 可空? | 描述           |
|------------|-------|----------------|
| content    | 否    | 句子内容       |
| source     | 是    | 句子来源       |
| author     | 是    | 句子作者       |
| created_at | 否    | 句子提交日期   |

#### 示例返回

``` json
{
    "content": "人们渴望像鸟儿一样自由自在地飞翔，可他们并没有想过，鸟儿也并不自由，它们之所以飞翔，是为了生存。",
    "source":"奈克瑟斯奥特曼",
    "author":null,
    "created_at":"2019-09-24T20:42:20.000Z"
}
```

### 纯文本格式

前缀: [`sentence/text`](https://dlystc.unknownmp.top/api/v2/sentence/text)

返回纯文本数据

默认只返回 句子内容

可通过添加 `format=full` 查询参数来获得以 `{content} {author} {source}` 格式化的完整内容

#### 示例返回

默认

```
生活，不是选择，而是热爱。
```

设置 `format=full`

```
落峰长日坠，起笔叠嶂升。 夕 明日方舟
```

### ~~Hitokoto 兼容 JSON 响应格式~~

还未做 😭

### ~~SVG 图像格式~~

还未做 😭 x2

有点不会做 😭