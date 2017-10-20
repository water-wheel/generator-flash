###flash-mock-server
###特点
* 使用简单
* 提供部分server能力
  * 可以配置delay时间
  * 可以自定义配置路由

###使用方式
* step1: mock/config.js中配置router参数
```
const configList = [

	{

		url: '/test/listDate',
		type: 'post',
		dataPath: '/db/test.json'

	}

];
```
* step2: mock/db中添加对应的json文件

###配置router参数
* url (required)
* type 默认为get
* dataPath (required 与customRouter必选其一)
* delay number类型
* customRouter （function required 与dataPath必选其一）
```
customRouter: function (req, res) {
	
    const resulteData = fs.readFileSync(__dirname + '/db/test.json', 'utf-8');
    
    res.send(JSON.parse(resulteData))

}
```
