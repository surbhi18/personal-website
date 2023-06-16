---
title: "Transformers Learn Shortcuts to Automata"
publication_types:
  - "1"
authors:
  - Bingbin Liu
  - Jordan T. Ash
  - admin
  - Akshay Krishnamurthy
  - Cyril Zhang
publication: Intenational Conference on Representation Learning (ICLR) 2023 [notable-top-5%]
publication_short: ICLR 2023 [notable-top-5%]
abstract: "Algorithmic reasoning requires capabilities which are most naturally understood through recurrent models of computation, like the Turing machine. However, Transformer models, while lacking recurrence, are able to perform such reasoning using far fewer layers than the number of reasoning steps. This raises the question: what solutions are these shallow and non-recurrent models finding? We investigate this question in the setting of learning automata, discrete dynamical systems naturally suited to recurrent modeling and expressing algorithmic tasks. Our theoretical results completely characterize shortcut solutions, whereby a shallow Transformer with only o(T) layers can exactly replicate the computation of an automaton on an input sequence of length T. By representing automata using the algebraic structure of their underlying transformation semigroups, we obtain O(logT)-depth simulators for all automata and O(1)-depth simulators for all automata whose associated groups are solvable. Empirically, we perform synthetic experiments by training Transformers to simulate a wide variety of automata, and show that shortcut solutions can be learned via standard training. We further investigate the brittleness of these solutions and propose potential mitigations."
draft: false
featured: true
url_pdf: https://arxiv.org/abs/2210.10749.pdf
date: "2022-10-01"
---
