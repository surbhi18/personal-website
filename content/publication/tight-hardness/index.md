---
title: Tight Hardness Results for Training Depth-2 ReLU Networks
publication_types:
  - "1"
authors:
  - admin
  - adamklivans
  - Pasin Manurangsi
  - Daniel Reichman
author_notes:
  - Equal contribution
  - Equal contribution
  - Equal contribution
  - Equal contribution
publication: Innovations in Theoretical Computer Science
publication_short: ITCS
abstract: "We prove several hardness results for training depth-2 neural networks with the ReLU activation function; these networks are simply weighted sums (that may include negative coefficients) of ReLUs. Our goal is to output a depth-2 neural network that minimizes the square loss with respect to a given training set. We prove that this problem is NP-hard already for a network with a single ReLU. We also prove NP-hardness for outputting a weighted sum of k ReLUs minimizing the squared error (for k>1) even in the realizable setting (i.e., when the labels are consistent with an unknown depth-2 ReLU network). We are also able to obtain lower bounds on the running time in terms of the desired additive error ϵ. To obtain our lower bounds, we use the Gap Exponential Time Hypothesis (Gap-ETH) as well as a new hypothesis regarding the hardness of approximating the well known Densest κ-Subgraph problem in subexponential time (these hypotheses are used separately in proving different lower bounds). For example, we prove that under reasonable hardness assumptions, any proper learning algorithm for finding the best fitting ReLU must run in time exponential in 1/ϵ2. Together with a previous work regarding improperly learning a ReLU (Goel et al., COLT'17), this implies the first separation between proper and improper algorithms for learning a ReLU. We also study the problem of properly learning a depth-2 network of ReLUs with bounded weights giving new (worst-case) upper bounds on the running time needed to learn such networks both in the realizable and agnostic settings. Our upper bounds on the running time essentially matches our lower bounds in terms of the dependency on ϵ."
draft: false
featured: false
url_pdf: https://arxiv.org/abs/2011.13550.pdf
date: "2021-01-01"
---
