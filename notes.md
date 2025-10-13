---
layout: default
title: Notes
---

## Notes

{% for note in site.notes %}
* **[{{ note.title }}]({{ note.url | relative_url }})**  
  {% if note.date %}{{ note.date | date: "%B %d, %Y" }}{% endif %}  
  {% if note.description %}{{ note.description }}{% endif %}
{% endfor %}

