---
layout: page
title: Index
options: { toc: false, menuItem: false, hasHeader: false, archived: true }
---
<h1>Welcome page</h1>

<p>
    Pages :
</p>

{% for page in site.pages %}
<div>
    <a href="{{ site.path }}{{ page.url }}">{{ page.title }}</a>
</div>

{% endfor %}
