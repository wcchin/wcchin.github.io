---
title: Open Projects
---

<p class="has-text-right">(updated: 2020-05-09)</p>
For more details: **[projects](/projects)**  

My Github contributions (open project). 
<a href="https://github.com/wcchin" target="_blank"><img src="https://grass-graph.appspot.com/images/wcchin.png" > </a>


<div class="tabs is-toggle is-toggle-rounded is-centered">
  <ul>
    <li class="tablink is-active"><a onclick="openTab(event, 'Algorithm')"><span class="is-small typcn typcn-chart-pie"></span>Algorithm</a></li>
    <li class="tablink"><a onclick="openTab(event, 'Tools')"><span class="is-small typcn typcn-spanner"></i></span>Tools</a></li>
    <li class="tablink"><a onclick="openTab(event, 'Research')"><span class="is-small typcn typcn-mortar-board"></span>Research</a></li><!--
    <li class="tablink"><a onclick="openTab(event, 'Other')"><span class="icon is-small typcn typcn-social-github"></span>Other</a></li>-->
  </ul>
</div>

<div class="block">
	
<!-- Tab content -->
<div id="Algorithm" class="box tabcontent active" style="display:block">
  <h2>Algorithm & Analysis</h2>
  <div class="card">
		<header class="card-header">
			<p class="card-header-title is-size-5">Geographical PageRank (GPR)</p>
			<button class="card-header-icon" onclick="expandCard(event, 'card-gpr')"><span class="typcn typcn-media-play-reverse"></span></button>
		</header>
		<div id="card-gpr" class="card-content is-hidden">
			<div class="content is-medium">a python package that provide functions of algorithms for measuring concentration distribution in a spatial network.
				<span class="tag is-dark">MIT license</span></div>
		</div>
		<footer id="card-gpr2" class="card-footer is-hidden"><a href="https://wcchin.github.io/projects/gpras.html" class="card-footer-item">Project page</a><a href="https://bitbucket.org/wcchin/gpras" class="card-footer-item">Repository</a></footer>
	</div>
  <div class="card">
		<header class="card-header">
			<p class="card-header-title is-size-5">Flow-based PageRank (FBPR)</p>
			<button class="card-header-icon" onclick="expandCard(event, 'card-fbpr')"><span class="typcn typcn-media-play-reverse"></span></button>
		</header>
		<div id="card-fbpr" class="card-content is-hidden">
			<div class="content is-medium">a python package that run an algorithm that calibrate the weight and PR score to meet the flow. 
				<span class="tag is-dark">MIT license</span></div>
		</div>
		<footer id="card-fbpr2" class="card-footer is-hidden"><a href="https://wcchin.github.io/projects/fbpr.html" class="card-footer-item">Project page</a><a href="https://bitbucket.org/wcchin/fbpr" class="card-footer-item">Repository</a></footer>
	</div>
  <div class="card">
		<header class="card-header">
			<p class="card-header-title is-size-5">TaPiTaS (tapitas)</p>
			<button class="card-header-icon" onclick="expandCard(event, 'card-tapitas')"><span class="typcn typcn-media-play-reverse"></span></button>
		</header>
		<div id="card-tapitas" class="card-content is-hidden">
			<div class="content is-medium">a data exploration and visualization algorithm for understanding diffusion process.
				<span class="tag is-dark">MIT license</span></div>
		</div>
		<footer id="card-tapitas2" class="card-footer is-hidden"><a href="https://wcchin.github.io/projects/tapitas.html" class="card-footer-item">Project page</a><a href="https://bitbucket.org/wcchin/tapitas" class="card-footer-item">Repository</a></footer>
	</div>
  <div class="card">
		<header class="card-header">
			<p class="card-header-title is-size-5">Hierarchical Edge Type Analysis (HETA)</p>
			<button class="card-header-icon" onclick="expandCard(event, 'card-heta')"><span class="typcn typcn-media-play-reverse"></span></button>
		</header>
		<div id="card-heta" class="card-content is-hidden">
			<div class="content is-medium">An algorithm for evaluating the strength of edges.  
				<span class="tag is-dark">MIT license</span></div>
		</div>
		<footer id="card-heta2" class="card-footer is-hidden"><a href="https://wcchin.github.io/HETA/index.html" class="card-footer-item">Project page</a><a href="https://github.com/wcchin/HETA" class="card-footer-item">Repository</a></footer>
	</div>
  <div class="card">
		<header class="card-header">
			<p class="card-header-title is-size-5">Hierarchical Arc Type Analysis (HATA)</p>
			<button class="card-header-icon" onclick="expandCard(event, 'card-hata')"><span class="typcn typcn-media-play-reverse"></span></button>
		</header>
		<div id="card-hata" class="card-content is-hidden">
			<div class="content is-medium">An algorithm for evaluating the strength of directed arcs.
				<span class="tag is-dark">MIT license</span></div>
		</div>
		<footer id="card-hata2" class="card-footer is-hidden"><a href="https://wcchin.github.io/projects/hata.html" class="card-footer-item">Project page</a><a href="https://github.com/wcchin/HATA" class="card-footer-item">Repository</a></footer>
	</div>
</div>

<div id="Tools" class="box tabcontent" style="display:none">
  <h2>Tools</h2>
  <div class="card">
		<header class="card-header">
			<p class="card-header-title is-size-5">Taiwan Geographic Open Data (TGOD)</p>
			<button class="card-header-icon" onclick="expandCard(event, 'card-tgod')"><span class="typcn typcn-media-play-reverse"></span></button>
		</header>
		<div id="card-tgod" class="card-content is-hidden">
			<div class="content is-medium">a python package that wrap some of the Taiwan open data real-time api, and some static map layers files inside the package, that can be called through some functions and get the data in dataframe  or geodataframe format.  
				<span class="tag is-dark">BSD-3-clause license</span></div>
		</div>
		<footer id="card-tgod2" class="card-footer is-hidden"><a href="https://wcchin.github.io/tgod/" class="card-footer-item">Project page</a><a href="https://github.com/wcchin/tgod" class="card-footer-item">Repository</a></footer>
	</div>
  <div class="card">
		<header class="card-header">
			<p class="card-header-title is-size-5">Carlae</p>
			<button class="card-header-icon" onclick="expandCard(event, 'card-carlae')"><span class="typcn typcn-media-play-reverse"></span></button>
		</header>
		<div id="card-carlae" class="card-content is-hidden">
			<div class="content is-medium">a python package that generate single page website for github projects from a simple markdown file. 
				<span class="tag is-dark">MIT license</span></div>
		</div>
		<footer id="card-carlae2" class="card-footer is-hidden"><a href="https://wcchin.github.io/carlae/" class="card-footer-item">Project page</a><a href="https://github.com/wcchin/carlae" class="card-footer-item">Repository</a></footer>
	</div>
  <div class="card">
		<header class="card-header">
			<p class="card-header-title is-size-5">pyreveal</p>
			<button class="card-header-icon" onclick="expandCard(event, 'card-pyreveal')"><span class="typcn typcn-media-play-reverse"></span></button>
		</header>
		<div id="card-pyreveal" class="card-content is-hidden">
			<div class="content is-medium">a python package that generate slides using markdown and reveal.js.  
				<span class="tag is-dark">MIT license</span></div>
		</div>
		<footer id="card-pyreveal2" class="card-footer is-hidden"><a href="https://wcchin.github.io/pyreveal/index.html" class="card-footer-item">Project page</a><a href="https://github.com/wcchin/pyreveal" class="card-footer-item">Repository</a></footer>
	</div>
  <div class="card">
		<header class="card-header">
			<p class="card-header-title is-size-5">PyRemark-slides</p>
			<button class="card-header-icon" onclick="expandCard(event, 'card-pyremark_slides')"><span class="typcn typcn-media-play-reverse"></span></button>
		</header>
		<div id="card-pyremark_slides" class="card-content is-hidden">
			<div class="content is-medium">a sister project of pyreveal, for using remark.js as base.  
				<span class="tag is-dark">MIT license</span></div>
		</div>
		<footer id="card-pyremark_slides2" class="card-footer is-hidden"><a href="https://wcchin.github.io/pyremark_slides/index.html" class="card-footer-item">Project page</a><a href="https://github.com/wcchin/pyremark_slides" class="card-footer-item">Repository</a></footer>
	</div>
  <div class="card">
		<header class="card-header">
			<p class="card-header-title is-size-5">Vector MAP ProducER (vmapper)</p>
			<button class="card-header-icon" onclick="expandCard(event, 'card-vmapper')"><span class="typcn typcn-media-play-reverse"></span></button>
		</header>
		<div id="card-vmapper" class="card-content is-hidden">
			<div class="content is-medium">a simple python library for creating SVG map in python.  
				<span class="tag is-dark">MIT license</span></div>
		</div>
		<footer id="card-vmapper2" class="card-footer is-hidden"><a href="https://wcchin.github.io/projects/vmapper.html" class="card-footer-item">Project page</a><a href="https://github.com/wcchin/vmapper" class="card-footer-item">Repository</a></footer>
	</div>
  <div class="card">
		<header class="card-header">
			<p class="card-header-title is-size-5">ColouringMap (colouringmap)</p>
			<button class="card-header-icon" onclick="expandCard(event, 'card-colouringmap')"><span class="typcn typcn-media-play-reverse"></span></button>
		</header>
		<div id="card-colouringmap" class="card-content is-hidden">
			<div class="content is-medium">a convenient mapping tool for generating categories and colors for making choropleth map from geopandas gdf.  
				<span class="tag is-dark">MIT license</span></div>
		</div>
		<footer id="card-colouringmap2" class="card-footer is-hidden"><a href="https://wcchin.github.io/projects/colouringmap.html" class="card-footer-item">Project page</a><a href="https://github.com/wcchin/colouringmap" class="card-footer-item">Repository</a></footer>
	</div>
</div>

<div id="Research" class="box tabcontent" style="display:none">
  <h2>Research Projects</h2>
  <p>Repositories for my researches and data (for open access journal).</p>
	
  <div class="card">
	<header class="card-header">
		<p class="card-header-title is-size-5">Spatial_Spreader_Susceptible_data</p>
		<button class="card-header-icon" onclick="expandCard(event, 'card-superspreader-data')"><span class="typcn typcn-media-play-reverse"></span></button>
	</header>
	<div id="card-superspreader-data" class="card-content is-hidden">
		<div class="content is-medium">This repository is prepared for storing the raw data, processed data, supporting files, and analysis results for the paper Identifying spatial super-spreader and spatial super susceptible locations from human movement networks.  
	</div>
	<footer id="card-superspreader-data2" class="card-footer is-hidden"><a href="github.com/wcchin/Spatial_Spreader_Susceptible_data" class="card-footer-item">Repository</a><a href="https://doi.org/10.1038/s41598-020-75697-z" class="card-footer-item">Article page</a></footer>
</div>
</div>
<!--
<div id="Other" class="box tabcontent" style="display:none">
  <h3>Other</h3>
  <p>Nothing</p>
</div>
-->

</div>
