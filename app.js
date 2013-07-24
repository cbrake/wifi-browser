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
    var cell = 0;
    var essid = 0;
    var quality = 0;
    var strength = 0;

    if (error == null) {
      stdout.split('\n').forEach(function(line) {

        if (match = /Cell(.*)/.exec(line)) {
          cell =  match[1];
        }

        if (match = /ESSID:"(.*)"/.exec(line)) {
          essid = match[1];
        }

        if (match = /Quality=(.*)  Signal/.exec(line)) {
          quality = match[1];
        }

        if (match = /Signal level=(.*)  /.exec(line)) {
          strength = match[1];
        }

        if(cell && essid && quality && strength) {
          var network = {};
          network['Cell'] = cell;
          network['ESSID'] = essid;
          network['Quality'] = quality;
          network['Strength'] = strength;

          wifi_networks.push(network);

          cell = 0;
          essid = 0;
          quality = 0;
          strength = 0;
        }
      })
    }
    setTimeout(scanForWifiNetworks, 1000);
  })
}

scanForWifiNetworks();

app.listen(3030);
console.log("Listening on port 3030");
