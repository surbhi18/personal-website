---
layout: default
title: Research
---

# Research
*Note: (α-β) indicates alphabetical ordering*

<nav class="topic-filter" aria-label="Filter publications by topic" hidden>
<button type="button" class="topic-button" data-topic="" aria-pressed="true">All</button>
{% for topic in site.data.research_topics %}<button type="button" class="topic-button" data-topic="{{ topic.id }}" aria-pressed="false">{{ topic.label }}</button>
{% endfor %}</nav>

<section class="publication-section">
<h2 id="preprints">Preprints</h2>
<ul class="publication-list">
{% for pub in site.data.publications.preprints %}{% include publication.html pub=pub %}
{% endfor %}</ul>
</section>

<section class="publication-section">
<h2 id="conference-papers">Conference Papers</h2>
{% assign conference_years = site.data.publications.conference | group_by: "year" | sort: "name" | reverse %}
{% for year in conference_years %}
<div class="publication-group">
<h3 class="publication-year" id="conference-{{ year.name }}">{{ year.name }}</h3>
<ul class="publication-list">
{% for pub in year.items %}{% include publication.html pub=pub %}
{% endfor %}</ul>
</div>
{% endfor %}
</section>

<section class="publication-section">
<h2 id="reports">Reports</h2>
<ul class="publication-list">
{% for pub in site.data.publications.reports %}{% include publication.html pub=pub %}
{% endfor %}</ul>
</section>

<script src="{{ "/assets/js/topic-filter.js" | relative_url }}"></script>
