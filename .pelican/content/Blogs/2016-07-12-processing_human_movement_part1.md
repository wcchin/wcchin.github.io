title: 'Processing' human movements in Taipei City
tags: python, processing
share_post: True

---

working on Taipei City's open data 
---
Taipei City's open data contain quite a lots and useful data about [human movement](https://taipeicity.github.io/traffic_realtime/), which included vehicle detector for street vehicles number, bus location data, bike sharing service available situation. 
Beside this, we have also obtained the bike sharing rental information, which include the timestamps and stations of rent/return for each rental event. 
Using these data, I created a animated visualization using the [Processing 3](https://processing.org/) tool.

Although there is an alternative to create a web-based processing script using the [processing.js](http://processingjs.org/) as a convertion tool, the data I included in the animation is too large for webpage and browser loading. 
So, instead of making a web-based viz, I recorded the results as video.

First, this is a simulation of moving vehicles on the streets network, that they turn randomly at the junctions.
<iframe src="https://player.vimeo.com/video/168713881" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/168713881">simulation - moving cars on streets taking turn randomly - v0.2</a> from <a href="https://vimeo.com/user11082431">Benny Chin</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

Using vehicle detector for the calibration in a modified PageRank, the moving process and turning proportion is simulated in this video:   
<iframe src="https://player.vimeo.com/video/168714357" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/168714357">simulation - moving cars on streets turning with the estimated probability - v0.2</a> from <a href="https://vimeo.com/user11082431">Benny Chin</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

Using the Taipei's Youbike (a Bike Sharing System) Origin-Destination data, the rental events is animated in this video:
<iframe src="https://player.vimeo.com/video/172241655" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/172241655">Taipei Youbike Origin-Destination rental movement - time data in May 2015</a> from <a href="https://vimeo.com/user11082431">Benny Chin</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

The comparison between the results of Taipei City's Youbike with the New York City's Citibike rental events:
<iframe src="https://player.vimeo.com/video/172311955" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/172311955">bike sharing trips temporal data visualization</a> from <a href="https://vimeo.com/user11082431">Benny Chin</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

The latest work is to show the location of buses in Taipei City and the area around:
<iframe src="https://player.vimeo.com/video/174331241" width="640" height="369" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/174331241">One day of Taipei City&#039;s buses</a> from <a href="https://vimeo.com/user11082431">Benny Chin</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
[go to google drive](https://drive.google.com/file/d/0B41yDf_RGLPSTFZrLXpmMW02TTA/view?usp=sharing)

