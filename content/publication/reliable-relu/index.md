---
title: Reliably Learning the ReLU in Polynomial Time
publication_types:
  - "1"
authors:
  - admin
  - Varun Kanade
  - adamklivans
  - Justin Thaler
author_notes:
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
  - Alphabetical Ordering
publication: Conference on Learning Theory
publication_short: COLT
abstract: "We give the first dimension-efficient algorithms for learning Rectified Linear Units (ReLUs),
which are functions of the form x -> max(0, w · x) with w ∈ S
n−1
. Our algorithm works in
the challenging Reliable Agnostic learning model of Kalai, Kanade, and Mansour [18] where the
learner is given access to a distribution D on labeled examples but the labeling may be arbitrary.
We construct a hypothesis that simultaneously minimizes the false-positive rate and the loss on
inputs given positive labels by D, for any convex, bounded, and Lipschitz loss function.
The algorithm runs in polynomial-time (in n) with respect to any distribution on S
n−1
(the
unit sphere in n dimensions) and for any error parameter ǫ = Ω(1/ log n) (this yields a PTAS
for a question raised by F. Bach on the complexity of maximizing ReLUs). These results are
in contrast to known efficient algorithms for reliably learning linear threshold functions, where
ǫ must be Ω(1) and strong assumptions are required on the marginal distribution. We can
compose our results to obtain the first set of efficient algorithms for learning constant-depth
networks of ReLUs.
Our techniques combine kernel methods and polynomial approximations with a \\“dual-loss\\”
approach to convex programming. As a byproduct we obtain a number of applications including
the first set of efficient algorithms for \\“convex piecewise-linear fitting\\” and the first efficient
algorithms for noisy polynomial reconstruction of low-weight polynomials on the unit sphere."
draft: false
featured: false
url_pdf: https://arxiv.org/pdf/1611.10258.pdf
date: "2017-07-01"
---
