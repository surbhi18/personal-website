---
title: Learning Neural Networks with Two Nonlinear Layers in Polynomial Time
publication_types:
  - "1"
authors:
  - admin
  - Adam Klivans
author_notes:
  - Alphabetical Ordering
  - Alphabetical Ordering
publication: Conference on Learning Theory (COLT) 2019
publication_short: COLT 2019
abstract: >-
  We give a polynomial-time algorithm for learning neural networks with one layer of sigmoids feeding into any Lipschitz, monotone activation function (e.g., sigmoid or ReLU). We make no assumptions on the structure of the network, and the algorithm succeeds with respect to $any$ distribution on the unit ball in n dimensions (hidden weight vectors also have unit norm). This is the first assumption-free, provably efficient algorithm for learning neural networks with two nonlinear layers.
  Our algorithm-- $Alphatron$-- is a simple, iterative update rule that combines isotonic regression with kernel methods. It outputs a hypothesis that yields efficient oracle access to interpretable features. It also suggests a new approach to Boolean learning problems via real-valued conditional-mean functions, sidestepping traditional hardness results from computational learning theory.
  Along these lines, we subsume and improve many longstanding results for PAC learning Boolean functions to the more general, real-valued setting of $probabilistic\ concepts$, a model that (unlike PAC learning) requires non-i.i.d. noise-tolerance.
draft: false
featured: true
url_pdf: https://arxiv.org/abs/1709.06010.pdf
date: "2019-07-01"
---
