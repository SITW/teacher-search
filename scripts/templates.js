define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/main.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="intro">\n\nSITW 代表 Student In TaiWan 的簡稱。<br>\n本組織致力讓全台灣的大學生有更優質的生活、和生活體驗。<br>\n歡迎有興趣的人一同來打造你我所幻想的大學生活<br>\n\n    <div class="slogan">\n        We Make Campus Awesome!!!\n    </div>\n\n\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/person.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table>\n\n    <tr>\n        <th>\n            姓名\n        </th>\n        <td>\n            ' +
((__t = ( personData[0]["姓名"] )) == null ? '' : __t) +
'\n        </td>\n    </tr>\n\n    <tr>\n        <th>\n            學歷\n        </th>\n        <td>\n            ';
 for(var i=0; i< personData[0]["學歷"].length; i++) { ;
__p += '\n            <li>' +
((__t = ( personData[0]["學歷"][i] )) == null ? '' : __t) +
'</li>\n            ';
 };
__p += '\n        </td>\n    </tr>\n\n    <tr>\n        <th>\n            職稱\n        </th>\n        <td>\n            ' +
((__t = ( personData[0]["職稱"] )) == null ? '' : __t) +
'\n        </td>\n    </tr>\n\n    <tr>\n        <th>\n            兼任職務(A. 期刊擔任職務)\n        </th>\n        <td>\n            ';
 for(var i=0; i< personData[0]["兼任職務"]["A. 期刊擔任職務"].length; i++) { ;
__p += '\n            <li>' +
((__t = ( personData[0]["兼任職務"]["A. 期刊擔任職務"][i] )) == null ? '' : __t) +
'</li>\n            ';
 };
__p += '\n        </td>\n\n    </tr>\n\n    <tr>\n\n        <th>\n            兼任職務(B. 擔任機關職務)\n        </th>\n        <td>\n            ';
 for(var i=0; i< personData[0]["兼任職務"]["B. 擔任機關職務"].length; i++) { ;
__p += '\n            <li>' +
((__t = ( personData[0]["兼任職務"]["B. 擔任機關職務"][i] )) == null ? '' : __t) +
'</li>\n            ';
 };
__p += '\n        </td>\n    </tr>\n\n    <tr>\n\n        <th>\n            學術活動(A. 受聘演講)\n        </th>\n        <td>\n            ';
 for(var i=0; i< personData[0]["學術活動"]["A. 受聘演講"].length; i++) { ;
__p += '\n            <li>' +
((__t = ( personData[0]["學術活動"]["A. 受聘演講"][i] )) == null ? '' : __t) +
'</li>\n            ';
 };
__p += '\n        </td>\n\n    </tr>\n\n    <tr>\n        <th>\n            學術活動(B. 邀請國內外學者)\n        </th>\n        <td>\n            ';
 for(var i=0; i< personData[0]["學術活動"]["B. 邀請國內外學者"].length; i++) { ;
__p += '\n            <li>' +
((__t = ( personData[0]["學術活動"]["B. 邀請國內外學者"][i] )) == null ? '' : __t) +
'</li>\n            ';
 };
__p += '\n        </td>\n    </tr>\n\n    <tr>\n\n        <th>\n            專利\n        </th>\n\n        <td>\n            ';
 for(var i=0; i< personData[0]["專利"].length; i++) { ;
__p += '\n            <li>' +
((__t = ( personData[0]["專利"][i] )) == null ? '' : __t) +
'</li>\n            ';
 };
__p += '\n        </td>\n    </tr>\n\n    <tr>\n        <th>\n            專長及研究領域\n        </th>\n\n        <td>\n            ' +
((__t = ( personData[0]["專長及研究領域"] )) == null ? '' : __t) +
'\n        </td>\n    </tr>\n\n    <tr>\n        <th>\n            著作(A. 期刊論文)\n        </th>\n\n        <td>\n            ';
 for(var i=0; i< personData[0]["著作"]["A. 期刊論文"].length; i++) { ;
__p += '\n            <li>' +
((__t = ( personData[0]["著作"]["A. 期刊論文"][i] )) == null ? '' : __t) +
'</li>\n            ';
 };
__p += '\n\n        </td>\n    </tr>\n\n    <tr>\n        <th>\n            著作(B. 研討會論文)\n        </th>\n\n        <td>\n            ';
 for(var i=0; i< personData[0]["著作"]["B. 研討會論文"].length; i++) { ;
__p += '\n            <li>' +
((__t = ( personData[0]["著作"]["B. 研討會論文"][i] )) == null ? '' : __t) +
'</li>\n            ';
 };
__p += '\n        </td>\n    </tr>\n\n\n    <tr>\n        <th>\n            著作(C. 專書)\n        </th>\n\n        <td>\n            ';
 for(var i=0; i< personData[0]["著作"]["C. 專書"].length; i++) { ;
__p += '\n            <li>' +
((__t = ( personData[0]["著作"]["C. 專書"][i] )) == null ? '' : __t) +
'</li>\n            ';
 };
__p += '\n        </td>\n    </tr>\n\n    <tr>\n        <th>\n            著作(D. Other publications)\n        </th>\n\n        <td>\n            ';
 for(var i=0; i< personData[0]["著作"]["D. Other publications"].length; i++) { ;
__p += '\n            <li>' +
((__t = ( personData[0]["著作"]["D. Other publications"][i] )) == null ? '' : __t) +
'</li>\n            ';
 };
__p += '\n        </td>\n    </tr>\n\n    <tr>\n        <th>\n            開授課程\n        </th>\n\n        <td>\n            ';
 for(var i=0; i< personData[0]["開授課程"].length; i++) { ;
__p += '\n            <li>' +
((__t = ( personData[0]["開授課程"][i] )) == null ? '' : __t) +
'</li>\n            ';
 };
__p += '\n        </td>\n    </tr>\n\n\n\n\n</table>\n';

}
return __p
};

this["JST"]["app/scripts/templates/teacher.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table>\n    <tr>\n        <th>\n            老師姓名：\n        </th>\n\n    </tr>\n\n    ';
 for(var i=0; i< data.length; i++) { ;
__p += '\n\n        <tr>\n            <td>\n                <a href="#major/' +
((__t = ( major )) == null ? '' : __t) +
'/' +
((__t = ( data[i]["姓名"] )) == null ? '' : __t) +
'">\n                ' +
((__t = ( data[i]["姓名"] )) == null ? '' : __t) +
'\n                </a>\n            </td>\n        </tr>\n\n    ';
 } ;
__p += '\n\n\n</table>\n';

}
return __p
};

  return this["JST"];

});