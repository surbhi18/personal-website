---
title: "Explicitly Encoding Structural Symmetry is Key to Length Generalization in Arithmetic Tasks"
publication_types:
  - "3"
authors:
  - Mahdi Sabbaghi
  - George Pappas
  - Hamed Hassani
  - admin
abstract: "Despite the success of Transformers on language understanding, code generation, and logical reasoning, they still fail to generalize over length on basic arithmetic tasks such as addition and multiplication. A major reason behind this failure is the vast difference in structure between numbers and text; For example, the numbers are typically parsed from right to left, and there is a correspondence between digits at the same position across different numbers. In contrast, for text, such symmetries are quite unnatural. In this work, we propose to encode these semantics explicitly into the model via modified number formatting and custom positional encodings. Empirically, our method allows a Transformer trained on numbers with at most 5-digits for addition and multiplication to generalize up to 50-digit numbers, without using additional data for longer sequences. We further demonstrate that traditional absolute positional encodings (APE) fail to generalize to longer sequences, even when trained with augmented data that captures task symmetries. To elucidate the importance of explicitly encoding structure, we prove that explicit incorporation of structure via positional encodings is necessary for out-of-distribution generalization. Finally, we pinpoint other challenges inherent to length generalization beyond capturing symmetries, in particular complexity of the underlying task, and propose changes in the training distribution to address them."
draft: false
featured: true
url_pdf: https://arxiv.org/abs/2406.01895.pdf
date: "2024-06-04"
---
