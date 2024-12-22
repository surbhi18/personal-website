---
title: "The Evolution of Statistical Induction Heads: In-Context Learning Markov Chains"
publication_types:
  - "1"
publication: Neural Information Processing Systems (NeurIPS) 2024
publication_short: NeurIPS 2024
authors:
  - Benjamin L. Edelman
  - Ezra Edelman
  - admin
  - Eran Malach
  - Nikos Tsilivis
author_notes:
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
abstract: "Large language models have the ability to generate text that mimics patterns in their inputs. We introduce a simple Markov Chain sequence modeling task in order to study how this in-context learning (ICL) capability emerges. In our setting, each example is sampled from a Markov chain drawn from a prior distribution over Markov chains. Transformers trained on this task form statistical induction heads which compute accurate next-token probabilities given the bigram statistics of the context. During the course of training, models pass through multiple phases: after an initial stage in which predictions are uniform, they learn to sub-optimally predict using in-context single-token statistics (unigrams); then, there is a rapid phase transition to the correct in-context bigram solution. We conduct an empirical and theoretical investigation of this multi-phase process, showing how successful learning results from the interaction between the transformer’s layers, and uncovering evidence that the presence of the simpler unigram solution may delay formation of the final bigram solution. We examine how learning is affected by varying the prior distribution over Markov chains, and consider the generalization of our in-context learning of Markov chains (ICL-MC) task to n-grams for n > 2."
draft: false
featured: true
url_pdf: https://arxiv.org/pdf/2402.11004.pdf
date: "2024-02-15"
---
