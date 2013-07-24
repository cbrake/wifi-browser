var express = require('express'),
    exec = require('child_process').exec;

var app = express();

var wifi_networks = []

app.get('/', function(req, res) {
  res.send(wifi_networks);
})

function scanForWifiNetworks() {
  exec('iwlist wlan0 scan', function(error, stdout, stderr) {
    wifi_networks = [];

    if (error == null) {
      stdout.split('\n').forEach(function(line) {
        var match = /ESSID:"(.*)"/.exec(line);
        if (match) {
          wifi_networks.push(match[1])
        }
      })
    }
    setTimeout(scanForWifiNetworks, 1000);
  })
}

scanForWifiNetworks();

app.listen(3030);
console.log("Listening on port 3030");
