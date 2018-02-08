/*!
 * ZxpJS v1.0.0
 * https://github.com/popeng007/ZxpJS
 *
 * (c) 2017 zhangxianpeng
 * Released under the MIT license
 *
 * Date: 2017-11-28
 * Update: 2018-02-08
 */

 var ZxpJS = {
   // 浏览器地址栏相关操作
   Url: {
     /**
     * 获取地址栏参数
     *
     * @param {String} name
     */
     get: function(name) {
       var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
       var r = window.location.search.substr(1).match(reg);
       if(r != null) return unescape(r[2]);
       return null;
     }
   },

   // Cookies相关操作
   Cookie: {
     /**
     * 设置 cookie
     *
     * @param {String} name
     * @param {String} value
     * @param {int} expireHours
     */
     set: function(name, value, expireHours) {
       var cookieString = name + "=" + escape(value) + "; path=/";
       //判断是否设置过期时间
       if(expireHours > 0) {
         var date = new Date();
         console.log(date);
         date.setTime(date.getTime() + expireHours * 3600 * 1000);
         console.log(date);
         cookieString = cookieString + "; expire=" + date.toGMTString();
         console.log(cookieString);
       }
       document.cookie = cookieString;
     },

     /**
     * 获取 cookie
     *
     * @param {String} name
     * @return {String}
     */
     get: function(name) {
       var strcookie = document.cookie;
       var arrcookie = strcookie.split("; ");
       for(var i = 0; i < arrcookie.length; i++) {
         var arr = arrcookie[i].split("=");
         if(arr[0] == name) return decodeURIComponent(arr[1]); //增加对特殊字符的解析
       }
       return "";
     },

     /**
     * 删除 cookie
     *
     * @param {String} name
     */
     del: function(name) {
       var exp = new Date();
       exp.setTime(exp.getTime() - 1);
       var cval = this.get(name);
       if(cval != null) document.cookie = name + "=" + cval + "; path=/;expires=" + exp.toGMTString();
     }
   },

   // 微信相关操作
   WeiXin: {
     /**
     * 获取微信用户code
     *
     * @param {String} appid
     * @return {String}
     */
     getOauthCode: function(appid) {
       var code = ZxpJS.Url.get('code');
       if (code == null || code == "") {
         var redirect_uri = location.href;
         redirect_uri = encodeURIComponent(redirect_uri);
         var u = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_base&state=001#wechat_redirect';
         location.href = u;
       } else {
         return code;
       }
     }
   }
 };
