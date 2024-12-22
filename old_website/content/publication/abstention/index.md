---
title: "Adversarial Resilience in Sequential Prediction via Abstention"
publication_types:
  - "1"
publication: Neural Information Processing Systems (NeurIPS) 2023
publication_short: NeurIPS 2023
authors:
  - admin
  - Steve Hanneke
  - Shay Moran
  - Abhishek Shetty
author_notes:
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
abstract: "We study the problem of sequential prediction in the stochastic setting with an adversary that is allowed to inject clean-label adversarial (or out-of-distribution) examples. Algorithms designed to handle purely stochastic data tend to fail in the presence of such adversarial examples, often leading to erroneous predictions. This is undesirable in many high-stakes applications such as medical recommendations, where abstaining from predictions on adversarial examples is preferable to misclassification. On the other hand, assuming fully adversarial data leads to very pessimistic bounds that are often vacuous in practice.
To capture this motivation, we propose a new model of sequential prediction that sits between the purely stochastic and fully adversarial settings by allowing the learner to abstain from making a prediction at no cost on adversarial examples. Assuming access to the marginal distribution on the non-adversarial examples, we design a learner whose error scales with the VC dimension (mirroring the stochastic setting) of the hypothesis class, as opposed to the Littlestone dimension which characterizes the fully adversarial setting. Furthermore, we design a learner for VC dimension~1 classes, which works even in the absence of access to the marginal distribution. Our key technical contribution is a novel measure for quantifying uncertainty for learning VC classes, which may be of independent interest."
draft: false
featured: true
url_pdf: https://arxiv.org/abs/2306.13119.pdf
date: "2023-06-22"
---
