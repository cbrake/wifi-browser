Wifi Browser
============

Simple Nodejs app that scans for wifi networks and makes a list of ones available
to a HTTP interface in JSON format.  It can be run on any Linux system, but
these instructions are for a BeagleBone Black.

* Set up BBB as described in this document
* wget http://\<bbb ip\>:3030/
* something like the following is returned:

```json
[
  "bec3",
  "bec",
  "DeviceX-8220012"
]
```

Setup on BeagleBone Black
-------------------------

* log into BBB via serial console or ssh
* git clone https://github.com/cbrake/wifi-browser.git

To Develop on BBB
-----------------

* set up ssh key
 * opkg install openssh-keygen
 * ssh-keygen
 * add key to git system you might be using (only required if you want to modify code)
* npm config set registry "http://registry.npmjs.org/"







