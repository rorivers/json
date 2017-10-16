var express = require('express');
var app = express();

// app.use(express.static('public'));

app.get('/.well-known/assetlinks.json', function(req, res){
	var jsonStr = [{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.example.robertjiang.androidstart1",
    "sha256_cert_fingerprints":
    ["EF:1B:7D:49:8B:AA:B7:A4:B4:85:92:4B:9D:4A:12:38:23:C2:09:13:89:F2:21:3E:3A:C3:E8:AB:8D:2B:7F:51"]
  }
}];

	res.json(jsonStr);
});

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.listen('80');
