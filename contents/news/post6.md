---
title: New Prototype Completed
date: 2015-6-3
---

The new SlugCam v2 node has been constructed. Using a weatherproof case and silicon sealant the node is weather proof and ready for deployment. We still are looking into improving some of the computer vision features and are testing how long it takes for the battery to deplete. 
<div style="text-align:center;">
	<img id="nodeV2"></img>
</div>	

While the node was being built, we also spent some time developing a simple adhoc routing protocol for the nodes to transfer video data in a more extended deployment. Leland miller, an undergraduate researcher, implemented the system in golang and it can be viewed in our repository. We are titling the system SCmesh and a paper was submitted to ICCCN 2015 and we expect to hear back from them soon. We implemented a version of the very well known dynamic source routing protocol for its reactive behavior and power saving characteristics. Below you can see video data packet transfers and effects on the routing protocol when battery levels change for certain nodes.
<div style="text-align:center;">
        <img id="nodesTransfer"></img>
</div>

