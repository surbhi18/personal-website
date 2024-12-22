---
title: Time/Accuracy Tradeoffs for Learning a ReLU with respect to Gaussian Marginals
publication_types:
  - "1"
authors:
  - admin
  - Sushrut Karmalkar
  - Adam Klivans
author_notes:
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
publication: Neural Information Processing Systems (NeurIPS) 2019 [Spotlight]
publication_short: NeurIPS 2019 [Spotlight]
abstract: >-
  We consider the problem of computing the best-fitting ReLU with respect to square-loss on a training set when the examples have been drawn according to a spherical Gaussian distribution (the labels can be arbitrary). Let $opt<1$ be the population loss of the best-fitting ReLU. We prove:

  1. Finding a ReLU with square-loss $opt+\epsilon$ is as hard as the problem of learning sparse parities with noise, widely thought to be computationally intractable. This is the first hardness result for learning a ReLU with respect to Gaussian marginals, and our results imply -$unconditionally$- that gradient descent cannot converge to the global minimum in polynomial time.

  2. There exists an efficient approximation algorithm for finding the best-fitting ReLU that achieves error $O(opt^{2/3})$. The algorithm uses a novel reduction to noisy halfspace learning with respect to 0/1 loss.

  Prior work due to Soltanolkotabi [Sol17] showed that gradient descent can find the best-fitting ReLU with respect to Gaussian marginals, if the training set is exactly labeled by a ReLU.
draft: false
featured: false
url_pdf: https://arxiv.org/abs/1911.01462.pdf
date: "2019-12-01"
---
