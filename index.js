var express = require('express');
var app = express();

// app.use(express.static('public'));

app.get('/.well-known/assetlinks.json', function(req, res){
	var jsonStr = [{
	  "relation": ["delegate_permission/common.handle_all_urls"],
	  "target": {
	    "namespace": "android_app",
	    "package_name": "com.rongjing.zwdai",
	    "sha256_cert_fingerprints":
	    ["9F:C6:33:7A:C0:8C:80:DF:3B:F9:01:C8:57:C3:D0:FD:00:87:FD:A6:9D:F8:21:01:99:43:E8:14:DD:A1:D0:29"]
	  }
	}];

	res.json(jsonStr);
});

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.listen('80');
