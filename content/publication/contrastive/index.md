---
title: Understanding Contrastive Learning Requires Incorporating Inductive Biases
publication_types:
  - "1"
authors:
  - Nikunj Saunshi
  - Jordan T. Ash
  - admin
  - Dipendra Misra
  - Cyril Zhang
  - Sanjeev Arora
  - Sham Kakade
  - Akshay Krishnamurthy

publication: International Conference on Machine Learning 2022
publication_short: ICML 2022
abstract: "Contrastive learning is a popular form of self-supervised learning that encourages augmentations (views) of the same input to have more similar representations compared to augmentations of different inputs. Recent attempts to theoretically explain the success of contrastive learning on downstream classification tasks prove guarantees depending on properties of augmentations and the value of contrastive loss of representations. We demonstrate that such analyses, that ignore inductive biases of the function class and training algorithm, cannot adequately explain the success of contrastive learning, even provably leading to vacuous guarantees in some settings. Extensive experiments on image and text domains highlight the ubiquity of this problem -- different function classes and algorithms behave very differently on downstream tasks, despite having the same augmentations and contrastive losses. Theoretical analysis is presented for the class of linear representations, where incorporating inductive biases of the function class allows contrastive learning to work with less stringent conditions compared to prior analyses."
draft: false
featured: true
url_pdf: https://arxiv.org/abs/2202.14037.pdf
date: "2022-02-28"
---
