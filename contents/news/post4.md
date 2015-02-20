---
title: Summer Updates on SlugCam
date: 2014-08-5
---

This Summer has been extremely productive for the project! We've had 3 more students join our research team. John Rinehart and Guilherme Silva joined us from Brazil through an international summer internship program. Leland Miller who is an undergraduate here at UCSC has also joined the team through UCSC's summer internship program and plans on continuing work through the summer and into the following year.<br><br>

Guilherme has helped design the energy harvesting component by calculating the panel and battery size required to achieve optimal performance through times when sun light is unavailable. Although SlugCam will not be able to be powered on 24/7, we believe the system doesn't need this level of availability and with the help of the motion detection sensors the system will still be able to detect all important events. We were surprised that a solar panel of only 9 inches in length would help us achieve this, along with a reasonably large lithium ion battery. We ran some energy consumption tests using an on-board current sensor, the figure below shows the massive energy gains achieved even with the motion sensor being set off consecutively.

<div style="text-align:center;">
	<img id="relayvson"></img>
</div>	 

We plan on publishing our energy consumption evaluation along with a description of our monitoring application in an ACM journal. We were about to do some deployment tests as well, even though using our phone as a wireless access point ended up being quite painful, our hardware tests were successful besides a few kinks and you can view our first prototype below!

<div style="text-align:center;">
	<img id="firstProto"></img>
</div>	

Kevin, John, and Leland have been designing and improving system architecture modules for slugCam. The node is now running a custom embedded Linux operating system and is sending analyzed video data and alerts to a local web-server in the i-NRG lab. The software architecture and a demonstration of how the node is used in an application is shown in this photo.

<div style="text-align:center;">
	<img id="softRec"></img>
</div>	

Not only has Leland worked on setting up our back-end web servers to receive data and started development of our system's API server, but he has also started the design and implementation of our web-app using AngularJS. Here's a screen shot of the system allowing you to highlight an area for alarming when an object is detected as moving into that area.

<div style="text-align:center;">
	<img id="alarmdetection"></img>
</div>	

As said before we have a pending journal publication that will highlight all our research and our current design and implementations. Our wiki page will detail how a lot of our features were designed and also take a look at our Github repository for the actual implementations.