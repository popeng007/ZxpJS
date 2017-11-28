# ZxpJS
JavaScript 获取 微信公众号 用户code，获取 Url 址址栏参数，设置、获取、删除 Cookie

## 安装
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>ZxpJS</title>
    <script src="ZxpJS.min.js" charset="utf-8"></script>
    <script type="text/javascript">
      // your code
    </script>
  </head>
  <body>

  </body>
</html>
```

## 示例

### Url 地址栏
```JavaScript
// current url: 'http://localhost/?code=NdK6RFVn'

var code = ZxpJS.Url.get('code');
// code => NdK6RFVn

// --- 简写 ---
var Url = ZxpJS.Url;
var code = Url.get('code');
```

### Cookie
```JavaScript
// 设置 Cookie, 时长24小时
ZxpJS.Cookie.set('code', 'NdK6RFVn', 24);

// 获取 Cookie
var code = ZxpJS.Cookie.get('code');
// code => NdK6RFVn

// 删除 Cookie
ZxpJS.Cookie.del('code');
// code => '';

// --- 简写 ---
var Cookie = ZxpJS.Cookie;
Cookie.set('code', 'NdK6RFVn', 24);
var code = Cookie.get('code');
Cookie.del('code');
```

### 微信公众号
```JavaScript
// 获取用户 code
var appid = 'eNPjIURC6AcG4tYlNY';
var code = ZxpJS.WeiXin.getOauthCode(appid);
// code => '3rMJR6ioyd5AuRALq3Lv63ErHav3fdIm'

// --- 简写 ---
var WeiXin = ZxpJS.WeiXin;
var code = WeiXin.getOauthCode(appid);
```
