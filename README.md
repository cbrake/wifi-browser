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

* update BBB to know software (this may not be required)
    * download images from:
        * http://beagleboard.org/latest-images
        * https://s3.amazonaws.com/angstrom/demo/beaglebone/BBB-eMMC-flasher-2013.06.20.img.xz
    * program to SD card
        * sudo umount /dev/devicenode 
        * sudo dd if=/path/to/downloaded.img of=/dev/devicenode bs=1M
        * install in BBB, and boot
        * will take 30-45m to complete -- where 4 LEDS are all blue, it is finished.
        * remove power, remove SD card, and power on
        * should now boot from on-board eMMC flash memory
* log into BBB via serial console or ssh
* wget https://github.com/cbrake/wifi-browser/archive/master.zip
* unzip master.zip
* cp wifi-browser-master/wif-browser.service /lib/systemd/system/
* systemctl --system daemon-reload
* systemctl enable wifi-browser
* reboot

To Develop on BBB
-----------------

* set up ssh key
 * opkg install openssh-keygen
 * ssh-keygen
 * add key to git system you might be using (only required if you want to modify code)
* npm config set registry "http://registry.npmjs.org/"







