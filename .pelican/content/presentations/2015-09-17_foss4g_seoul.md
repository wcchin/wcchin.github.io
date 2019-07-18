title: A Web-based Framework for Monitoring Spatial-temporal Clustering of Epidemics in Taiwan
category: Presentation
tags: spatial-temporal, web-framework
what: FOSS4G
where: Seoul, South Korea
date: 2015/09/17
share_post: True

---

#### A Web-based Framework for Monitoring Spatial-temporal Clustering of Epidemics in Taiwan

- Conference: FOSS4G
- Year: 2015
- Location: Seoul, South Korea
- Language: English
- Authors: Wei-Chien Benny-Chin, Tzai-Hung Wen, Fei-Ying Kuo, Hwa-Lung Yu, Ming-Che Hu

#### Abstract
The aim of the study is to propose a web-based early-warning framework for monitoring spatial-temporal clustering of epidemics in Taiwan. The framework integrated disease surveillance data from difference sources, including Real-time Outbreak and Disease Surveillance (RODS) database, and LABoratory Surveillance (LABS) databases. RODS database is reported directly from the hospital emergency department (ED), whereas LABS is reported with detail information of the specific pathogen after the laboratory diagnosis procedures from contract hospitals. RODS could provide real-time information of patients’ symptoms but it provides nothing about confirmed disease or pathogens of a patient. LABS, on the other hand, could identify the specific infectious pathogen, which is the cause of disease, but the report time could have time lags due to laboratory diagnosis procedures. By combining open source tools and space-time clustering detections methods, we developed an early-warning framework for depicting space-time dynamics of clusters and identifying possible epidemic outbreaks. The framework is a web-based platform with several modules:1. Data Explore: it includes data management, data processing and space-time data visualization; 2. Space-Time Analyst: it analyzes space-time relationships of cases and depicts space-time dynamics of clusters by developing ST-DBSCAN algorithm, and 3. Early-Warning Alert: it provides real-time alerts when detecting possible disease outbreaks. The platform is established in Python environment. We used several open source components, including web2py as the web-based framework (system core component) and Bokeh for data visualization. The system core component is the control centers for dealing with requests/responses, scheduled analysis procedures and database updates. We also built a Postgresql/PostGIS database to store/manage the geographic information and disease data extracted from RODS and LABS databases. The visualization components used several javascript libraries, including leafletjs, mapbox, and bokehjs. The Space-Time Analyst and Early-Warning Alert modules were developed with open source Python libraries for identifying the space-time process of reported cases, including the dynamics of the core-border-noise changes, the space-time clusters, and the space-time association between RODS-LABS events. Our study built a web-based spatial decision support system with the two disease surveillance databases (RODS and LABS). With the integration of open source packages and libraries, we built the comprehensive prototype for early warning of detecting the disease clusters.

#### Link
https://www.meci.co.kr/societyevent/FOSS4G2015/program/program_view.asp?a_type=PT&a_idx=81

#### Presentation
http://bit.ly/foss4g2015chin  
http://wcchin.github.io/ipyslides/foss4g2015/FOSS4G_seoul2015.slides.html?theme=sky?transition=convex

<iframe width="800" height="600" src="http://wcchin.github.io/ipyslides/foss4g2015/FOSS4G_seoul2015.slides.html?theme=sky?transition=convex" frameborder="0" allowfullscreen></iframe>

