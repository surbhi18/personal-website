---
layout: default
title: Research
---

# Research
*Note: (α-β) indicates alphabetical ordering*

## Preprints

<ul class="publication-list">
{% for pub in site.data.publications.preprints %}{% include publication.html pub=pub %}
{% endfor %}</ul>

## Conference Papers

{% assign conference_years = site.data.publications.conference | group_by: "year" | sort: "name" | reverse %}
{% for year in conference_years %}
<h3 class="publication-year" id="conference-{{ year.name }}">{{ year.name }}</h3>
<ul class="publication-list">
{% for pub in year.items %}{% include publication.html pub=pub %}
{% endfor %}</ul>
{% endfor %}

## Reports

<ul class="publication-list">
{% for pub in site.data.publications.reports %}{% include publication.html pub=pub %}
{% endfor %}</ul>
