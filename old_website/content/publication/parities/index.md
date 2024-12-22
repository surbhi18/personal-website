---
title: "Hidden Progress in Deep Learning: SGD Learns Parities Near the Computational Limit"
publication_types:
  - "1"
authors:
  - Boaz Barak
  - Benjamin L. Edelman
  - admin
  - Sham Kakade
  - Eran Malach
  - Cyril Zhang
author_notes:
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
abstract: "There is mounting empirical evidence of \emph{emergent phenomena} in the capabilities of deep learning methods as we scale up datasets, model sizes, and training times. While there are some accounts of how these resources modulate statistical capacity, far less is known about their effect on the \emph{computational} problem of model training. This work conducts such an exploration through the lens of learning $k$-sparse parities of $n$ bits, a canonical family of problems which pose theoretical computational barriers. In this setting, we find that neural networks exhibit surprising phase transitions when scaling up dataset size and running time. In particular, we demonstrate empirically that with standard training, a variety of architectures learn sparse parities with $n^{O(k)}$ examples, with loss (and error) curves abruptly dropping after $n^{O(k)}$ iterations. These positive results nearly match known SQ lower bounds, even without an explicit sparsity-promoting prior. We elucidate the mechanisms of these phenomena with a theoretical analysis: we find that the phase transition in performance is \emph{not} due to SGD ``stumbling in the dark'' until it finds the hidden set of features (a natural algorithm which also runs in $n^{O(k)}$ time); instead, we show that SGD gradually amplifies a \emph{Fourier gap} in the population gradient."
draft: false
featured: true
url_pdf: https://arxiv.org/abs/2207.08799.pdf
publication_short: NeurIPS 2022
publication: Neural Information Processing Systems (NeurIPS) 2022
date: "2022-07-18"
---
