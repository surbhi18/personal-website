---
layout: default
title: Research
---

## Publications
*Note: (α-β) indicates alphabetical ordering*

### Preprints

<ul>
{% for pub in site.data.publications.preprints %}{% include publication.html pub=pub %}
{% endfor %}</ul>

### Conference Papers

<ul>
{% for pub in site.data.publications.conference %}{% include publication.html pub=pub %}
{% endfor %}</ul>

### Reports

<ul>
{% for pub in site.data.publications.reports %}{% include publication.html pub=pub %}
{% endfor %}</ul>
