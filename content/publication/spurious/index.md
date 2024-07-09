---
title: "Complexity Matters: Dynamics of Feature Learning in the Presence of Spurious Correlations"
publication_types:
  - "1"
authors:
  - GuanWen Qiu
  - Da Kuang
  - admin
publication: International Conference on Machine Learning 2024
publication_short: ICML 2024
abstract: "Existing research often posits spurious features as \"easier\" to learn than core features in neural network optimization, but the impact of their relative simplicity remains under-explored. Moreover they mainly focus on the end performance intead of the learning dynamics of feature learning. In this paper, we propose a theoretical framework and associated synthetic dataset grounded in boolean function analysis which allows for fine-grained control on the relative complexity (compared to core features) and correlation strength (with respect to the label) of spurious features to study the dynamics of feature learning under spurious correlation. Our setup uncovers several interesting phenomenon: (1) stronger spurious correlations or simpler spurious features slow down the rate of learning for the core features, (2) learning phases of spurious features and core features are not always separable, (3) spurious features are not forgotten even after core features are fully learned. We show that our findings justify the success of retraining the last layer to remove spurious correlation and also identifies limitations of popular debiasing algorithms that exploit early learning of spurious features. We support our empirical findings with theoretical analyses for the case of learning XOR features with a one-hidden-layer ReLU network."
draft: false
featured: true
url_pdf: https://arxiv.org/pdf/2403.03375.pdf
date: "2024-03-05"
---
