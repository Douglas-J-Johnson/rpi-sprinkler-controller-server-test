# rpi-sprinkler-controller-server-test
## Description
This server test application is adapted from the sample code provided by the manufacturer of the Waveshare 8 relay Raspberry Pi Board.  The general product page and documentation are listed below for reference.  The documentation details additional any additional steps (e.g., additional package downloads) required for the application to run.

[Product Page](https://www.waveshare.com/rpi-relay-board-b.htm)\
[Documentation](https://www.waveshare.com/wiki/RPi_Relay_Board_(B))


## config.js
In order to run this application, create a file called `config.js` in the top level directory with the content:

`const serverIP = 'http://###.###.###.###:####'`

`###.###.###.###:####` is the ip:port the python server is running on.
