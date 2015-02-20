---

title: Preliminary testing
date: 2013-08-25
---

Software has been tested, we're currently using a USB WiFi module to do video transfer successfully. This has shown to be a problem however, because using any USB peripherals spikes the current usage on the Pi. We're planning to move to Micro Chip's [RN-171](http://www.microchip.com/wwwproducts/Devices.aspx?product=RN171) because of its amazing sleep mode in which it consumes 4 micro amps of current. Motion detection with the Passive infrared sensor is also working with the MSP430 and is triggering a shut down signal after a timer expires. This MSP430 power control is explained in the wiki page of our site.
<div style="text-align:center;">
	<img id="bgsubmotion"></img>
</div>	
Caio Porto has joined the team as a summer intern from Brazil and was able to work on this component all summer and colaborate with professor Roberto Manduchi who teaches classes in the computer vision field here on campus. Our image processing software is also now working using background subtraction, for its performance benefits, to accomplish object detection. The process is summarized in the figure above and described in more detail in our wiki page. We were able to test this software on the recently released raspberry pi camera module. The algorithm is also pretty efficient with occlusion detection, which is when objects overlap and is illustrated in the picture below.
<div style="text-align:center;">
	<img id="occlusion"></img>
</div>	