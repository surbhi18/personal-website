---
title: "Gone Fishing: Neural Active Learning with Fisher Embeddings"
publication_types:
  - "3"
authors:
  - Jordan Ash
  - Surbhi Goel
  - Akshay Krishnamurthy
  - Dipendra Misra
 
abstract: >-
  There is an increasing need for effective active learning algorithms that are compatible with deep neural networks. While there are many classic, well-studied sample selection methods, the non-convexity and varying internal representation of neural models make it unclear how to extend these approaches. This article introduces BAIT, a practical, tractable, and high-performing active learning algorithm for neural networks that addresses these concerns. BAIT draws inspiration from the theoretical analysis of maximum likelihood estimators (MLE) for parametric models. It selects batches of samples by optimizing a bound on the MLE error in terms of the Fisher information, which we show can be implemented efficiently at scale by exploiting linear-algebraic structure especially amenable to execution on modern hardware. Our experiments show that BAIT outperforms the previous state of the art on both classification and regression problems, and is flexible enough to be used with a variety of model architectures.
draft: false
featured: false
url_pdf: https://arxiv.org/pdf/2106.09675.pdf
date: "2021-06-01"
---
