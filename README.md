# Is het online service
Simple node application for the Raspberry Pi checking the network connection...

![wifi](https://media.giphy.com/media/6HZ0P9IkUSfgk/giphy-downsized.gif)

## Start-up script
Let's create a new service using the following command:  
`sudo systemctl edit --force --full start-ishetonline.service`

Paste the following code:
```
[Unit]
Description=IsHetOnlineService
Wants=network-online.target
After=network-online.target
StartLimitIntervalSec=90
StartLimitBurst=3

[Service]
Type=simple
User=pi
WorkingDirectory=/home/pi/ishetonline/
ExecStart=/home/pi/ishetonline/start_service.sh
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Save and exit the file.

Check the status of the service:  
`systemctl status start-ishetonline.service`

Enable the service:  
`sudo systemctl enable start-ishetonline.service`

Start the service:  
`sudo systemctl start start-ishetonline.service`

More information: [Running a script after an internet connection is established](https://raspberrypi.stackexchange.com/questions/78991/running-a-script-after-an-internet-connection-is-established)
