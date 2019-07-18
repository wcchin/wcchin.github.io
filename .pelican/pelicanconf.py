#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Benny Chin'
SITENAME = u'Chin.Mini Lab'
SITEURL = 'https://wcchin.github.io'
SITESUBTITLE = u'a Geographer, Cartographer, & GIScientist'

PATH = 'content'

TIMEZONE = 'Asia/Taipei'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
THEME = "./themes/spectree"
OUTPUT_PATH = '../'

# Blogroll
LINKS = (('My Google Scholar', 'https://scholar.google.com.tw/citations?user=P2IJvyQAAAAJ&hl=zh-TW'),
		 ('Some current works', 'https://chin-minilab.surge.sh'), 
         ('Singapore University of Technology and Design', 'https://sutd.edu.sg/'),
         ('Applied Complexity Group (ACG) ', 'https://people.sutd.edu.sg/acg/home/'),
         ('Benny.foto', 'http://wcchin.github.io/foto/'),)

# Social widget
SOCIAL = (('Facebook', 'https://www.facebook.com/wcchin88'),
          ('Google-Plus', 'https://plus.google.com/105690138384754434725'),
          ('Github', 'https://github.com/wcchin'),
          ('Bitbucket', 'https://bitbucket.org/wcchin/'),
          ('Instagram', 'https://www.instagram.com/wcchin88/'),)

DEFAULT_PAGINATION = 8
articles_paginator = 8
PAGINATED_TEMPLATES = {'categories': 8, 'archives': 8}
PAGINATED_DIRECT_TEMPLATES = ('categories', 'archives', 'tag', 'category', 'author')
STATIC_PATHS = ['images', 'svgs', 'pdfs']
PROFILE_IMAGE = '/images/benny.jpg'
SITE_DESCRIPTION = 'I am Wei-Chien-Benny Chin, a PhD research fellow at Signgapore University of Technology and Design. I work with the Applied Complexity Group, doing researches on vertical movements and agent-based modelling in urban spatial analysis.'
BACKDROP_IMAGE = '/images/bg3.jpg'
DISQUS_SITENAME = 'chinminilab'
YEAR = 2019
EMAIL = 'wcchin.88@gmail.com'

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

USE_FOLDER_AS_CATEGORY = True
#DEFAULT_CATEGORY = 'General'

DISPLAY_PAGES_ON_MENU = True
DISPLAY_CATEGORIES_ON_MENU = True
SHARE_BUTTONS = ('twitter', 'facebook', 'whatsapp', 'mail')
tag_cloud = True
TAG_CLOUD_STEPS = 5
TAG_CLOUD_MAX_ITEMS = 50
TAG_CLOUD_BADGE = True
TAG_CLOUD_SORTING = 'size'

# Plugins
#PLUGIN_PATHS = ["/home/benny/pelican-plugins"]
PLUGIN_PATHS = ["./plugins"]
PLUGINS = ["tag_cloud", "share_post", "render_math", "sitemap"]
READERS = {'html': None}

SITEMAP = {
    'format': 'xml',
    'priorities': {
        'articles': 0.5,
        'indexes': 0.5,
        'pages': 0.5
    },
    'changefreqs': {
        'articles': 'monthly',
        'indexes': 'daily',
        'pages': 'monthly'
    }
}
