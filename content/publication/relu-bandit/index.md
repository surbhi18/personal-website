---
title: "Stochastic Bandits with ReLU Neural Networks"
publication_types:
  - "1"
authors:
  - Kan Xu
  - Hamsa Bastani
  - admin
  - Osbert Bastani
publication: International Conference on Machine Learning 2024
publication_short: ICML 2024
abstract: "We study the stochastic bandit problem with ReLU neural network structure. We show that a square-root T regret (up to log factors) guarantee is achievable by considering bandits with one-layer ReLU neural networks; to the best of our knowledge, our work is the first to achieve such a guarantee. In this specific setting, we propose an OFU-ReLU algorithm that can achieve this upper bound. The algorithm first explores randomly until it reaches a linear regime, and then implements a UCB-type linear bandit algorithm to balance exploration and exploitation. Our key insight is that we can exploit the piecewise linear structure of ReLU activations and convert the problem into a linear bandit in a transformed feature space, once we learn the parameters of ReLU relatively accurately during the exploration stage. To remove dependence on model parameters, we design an OFU-ReLU+ algorithm based on a batching strategy, which can provide the same theoretical guarantee."
draft: false
featured: true
url_pdf: https://arxiv.org/abs/2405.07331.pdf
date: "2024-05-12"
---
