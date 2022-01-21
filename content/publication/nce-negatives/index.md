---
title: Investigating the Role of Negatives in Contrastive Representation Learning
publication_types:
  - "1"
authors:
  - Jordan Ash
  - admin
  - Akshay Krishnamurthy
  - Dipendra Misra
author_notes:
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
publication: International Conference on Artificial Intelligence and Statistics (AISTATS) 2022
publication_short: AISTATS 2022

abstract: >-
  Noise contrastive learning is a popular technique for unsupervised representation learning. In this approach, a representation is obtained via reduction to supervised learning, where given a notion of semantic similarity, the learner tries to distinguish a similar (positive) example from a collection of random (negative) examples. The success of modern contrastive learning pipelines relies on many parameters such as the choice of data augmentation, the number of negative examples, and the batch size; however, there is limited understanding as to how these parameters interact and affect downstream performance. We focus on disambiguating the role of one of these parameters: the number of negative examples. Theoretically, we show the existence of a collision-coverage trade-off suggesting that the optimal number of negative examples should scale with the number of underlying concepts in the data. Empirically, we scrutinize the role of the number of negatives in both NLP and vision tasks. In the NLP task, we find that the results broadly agree with our theory, while our vision experiments are murkier with performance sometimes even being insensitive to the number of negatives. We discuss plausible explanations for this behavior and suggest future directions to better align theory and practice.
draft: false
featured: false
url_pdf: https://arxiv.org/pdf/2106.09943.pdf
date: "2022-01-18"
---
