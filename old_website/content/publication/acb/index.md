---
title: "Anti-Concentrated Confidence Bonuses for Scalable Exploration"
publication_types:
  - "1"
authors:
  - Jordan Ash
  - Cyril Zhang
  - admin
  - Akshay Krishnamurthy
  - Sham Kakade

publication: International Conference on Learning Representations (ICLR) 2020
publication_short: ICLR 2022

abstract: >-
  Intrinsic rewards play a central role in handling the exploration-exploitation trade-off when designing sequential decision-making algorithms, in both foundational theory and state-of-the-art deep reinforcement learning. The LinUCB algorithm, a centerpiece of the stochastic linear bandits literature, prescribes an elliptical bonus which addresses the challenge of leveraging shared information in large action spaces. This bonus scheme cannot be directly transferred to high-dimensional exploration problems, however, due to the computational cost of maintaining the inverse covariance matrix of action features. We introduce \emph{anti-concentrated confidence bounds} for efficiently approximating the elliptical bonus, using an ensemble of regressors trained to predict random noise from policy network-derived features. Using this approximation, we obtain stochastic linear bandit algorithms which obtain Õ(d√T) regret bounds for poly(d) fixed actions. We develop a practical variant for deep reinforcement learning that is competitive with contemporary intrinsic reward heuristics on Atari benchmarks.
draft: false
featured: false
url_pdf: https://arxiv.org/abs/2110.11202.pdf
featured: false
date: "2022-01-20"
---
