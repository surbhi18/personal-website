---
layout: default
title: Notes on Is Behavior Cloning All You Need? Understanding Horizon in Imitation Learning
date: 2025-10-12
mathjax: true

---

# Is Behavior Cloning All You Need? Understanding Horizon in Imitation Learning

## TL;DR

This paper shows that the infamous quadratic ($O(H^2)$) horizon dependence of Behavior Cloning is an artifact of using a 0-1 loss. In the realizable setting, switching to a logarithmic loss yields a much better linear ($O(H)$) or even horizon-independent regret bound, making simple offline BC competitive with complex online methods.

## Imitation Learning - What is it?

Imitation learning (IL) is the problem of "imitating" the behavior of an expert for sequential decision-making tasks. In contrast to Reinforcement Learning (RL), where the agent learns to maximize a reward signal, IL learns to mimic the behavior of an expert policy $\pi^*$ without any reward signal. This is motivated by the following observation: in many scenarios, it is easier to demonstrate the desired behavior to the agent than to define a reward function.

There are two approaches to IL:

- Offline IL: Learn a policy from logged trajectories of the expert policy $\pi^*$. A common instance is Behavior Cloning (BC), which reduces imitation learning to supervised learning, where the learner attempts to predict the expert's actions from the observation of the expert's state-action pairs. One challenge that BC completely ignores is that of distribution shift between the expert's and the learner's policies. In particular, small deviations from the expert's policy can lead the learner off-policy where the expert trajectories are less informative. This often leads to error amplification, often observed in practice.
- Online IL: Learn a policy by interactively querying the expert policy $\pi^*$ and learning to correct mistakes on-policy. While these methods avoid the distribution shift problem, they often require a lot of interaction with the expert policy, which can be expensive or even infeasible.


## Imitation Learning - Formal Definition
Let us formaly define the problem of IL. 

### (Reward-Free) Markov Decision Process (MDP)

An MDP $M$ is a tuple $(\mathcal{S}, \mathcal{A}, (\mathbb{P}\_h)\_{h\in {0,\ldots,H-1}})$, where:
- $\mathcal{S}$ is the (potentially large) state space.
- $\mathcal{A}$ is the action space.
- $\mathbb{P}\_0 \in\Delta(\mathcal{S})$ is the initial state distribution.
- For each $h \in [H-1]$, $\mathbb{P}\_h \in \Delta(\mathcal{S} \times \mathcal{A})$ is the transition distribution at step $h$.
- $H$ is the horizon, the length of the trajectory.

### Policy

A (randomized) policy $\pi$ is a mapping from states to actions per step $h$: $\pi = \{\pi\_h\}\_{h=1}^H$, where $\pi\_h: \mathcal{S} \rightarrow \Delta(\mathcal{A})$. The policy induces a distribution over trajectories $(s\_0, a\_1), \ldots, (s\_H, a\_H)$ via the following process:
- $s\_0 \sim \mathbb{P}\_0$.
- For $h = 1, \ldots, H$, we have:
    - $a\_h \sim \pi\_h(s\_h)$
    - $s\_{h+1} \sim \mathbb{P}\_{h+1}(s\_h, a\_h)$

To simplify the presentation we assume that the state and action spaces $\mathcal{S}$ and $\mathcal{A}$ are finite. These results can be extended to general spaces with a more careful measure-theoretic treatment.

### Goal of Imitation Learning

For an unknown reward function $r = \{r\_h: \mathcal{S} \times \mathcal{A} \rightarrow \mathbb{R}\}\_{h\in {1,\ldots,H}}$, the goal of IL is to find a policy $\hat{\pi} = \{ \hat{\pi}\_h: \mathcal{S} \rightarrow \Delta(\mathcal{A}) \}\_{h=1}^H$ that minimizes regret with respect to the expert policy $\pi^* = \{ \pi^*\_h: \mathcal{S} \rightarrow \Delta(\mathcal{A}) \}\_{h=1}^H$:
$$
\text{Regret} = J(\pi^*;r) - J(\hat{\pi}; r) \text{ where } J(\pi; r) = \mathbb{E}^\pi\left[\sum_{h=1}^H r\_h(s\_h, a\_h)\right].
$$
Note that neither the MDP $M$, the transition dynamics $\mathbb{P}\_h$ nor the reward function $r$ are known to the learner.

There are often two types of rewards:
- Dense rewards: $r\_h \in [0,1]$ for each $h$.
- Sparse rewards: $\sum_{h=1}^H r\_h \in [0,R]$ for some $R \in \mathbb{R}$ independent of $H$.

### Our focus: Autoregressive MDP

For ease of exposition, we will focus on autoregressive MDPs. The proofs for general MDPs are straightforward to generalize.

For a context space $\mathcal{X}$ with context distribution $\mu \in \Delta(\mathcal{X})$, and token space $\mathcal{A}$ an $H$-step autoregressive MDP is a MDP where:
- State space $\mathcal{S} = \mathcal{X} \times \mathcal{A}^*$
- Initial state $s\_0 = x \sim \mu$.
- The transition dynamics are deterministic concatenation: $s\_{h+1} = [s\_h || a\_h] = [x || a\_{1:h}]$.

Note that the trajectory $(s\_1, a\_1), \ldots, (s\_{h-1}, a\_{h-1})$ is a measurable function of $s\_h$. Since the state is determined by the context $x$ and the previously generated tokens $a\_{1:h-1}$, we often will write the trajectory as $(x, a\_{1:H})$.


## Behavior Cloning

The simplest approach to imitation learning is **Behavior Cloning (BC)**. It reduces the problem to supervised learning. Given a dataset of expert trajectories $\mathcal{D} = \{o^{(i)}\}_{i=1}^n$, the goal is to learn a policy $\hat{\pi}$ that mimics the expert's actions on the states visited by the expert.

Traditionally, for a deterministic expert, this is framed as a classification problem, where the learner minimizes the 0-1 loss (or a surrogate like the hinge or square loss) on the expert's state-action pairs:
$$
\hat{\pi} = \arg\min_{\pi \in \Pi} \sum_{i=1}^n \sum_{h=1}^H \mathbf{1}\{\pi\_h(s^{(i)}\_h) \neq a^{(i)}\_h\}.
$$
It is the traditional formulation with the 0-1 loss that leads to the compounding error problem, a classic issue in imitation learning. In contrast, this paper shows that the seemingly small change of using the logarithmic loss has profound implications, allowing us to largely sidestep this problem.

### The Compounding Error Problem in 0-1 Loss BC

A central theme in imitation learning is how a learner's performance depends on the horizon, $H$. For BC with a 0-1 loss, there is a classic negative result: in the dense reward setting, regret can scale quadratically with the horizon, $O(H^2)$.

This quadratic dependence arises from **distribution shift**. A policy trained with BC learns to perform well on states visited by the expert. However, once the policy makes a single mistake, it can find itself in a state that the expert has never visited. Errors accumulate, leading the policy further and further away from the expert's state distribution, causing performance to degrade rapidly.

This intuition is formalized by a lower bound showing that this is not just an artifact of a loose analysis but a fundamental problem. We can construct a simple autoregressive MDP where any learner with a small per-step error $\epsilon$ on the expert's data will suffer $\Omega(H^2\epsilon)$ regret. This classic result is the primary motivation for developing more complex, interactive online algorithms.

#### Formal Lower Bound Construction

Let's define a simple "chain" MDP in the autoregressive framework.

*   **Spaces:** The context space is a single point $\mathcal{X}=\{c\}$, and the action space is $\mathcal{A} = \{0, 1\}$
*   **Expert Policy $\pi^*$**: The expert always chooses action 1: $\pi^*\_h(s\_h) = 1$ for all states $s\_h$ and steps $h$. The expert's trajectory is a sequence of all 1s.
*   **Learned Policy $\hat{\pi}$**: The learned policy has a per-step error probability of $\epsilon$. On the expert's path (i.e., when the history of actions is all 1s), it erroneously chooses action 0 with probability $\epsilon$:
    $$
    \hat{\pi}\_h(a\_h=0 | s\_h=(c, \underbrace{1,...,1}\_{h-1})) = \epsilon.
    $$
*   **Reward Function $r$**: We use a dense reward function. The agent receives a reward of 1 at step $h$ if and only if it has followed the expert's path (all 1s) up to and including step $h$. Otherwise, the reward is 0. Once the agent takes action 0, it receives no further rewards.

Now, we can calculate the regret. The expert always stays on the correct path, so it receives a reward of 1 at every step.
    $$
    J(\pi^*;r) = \sum_{h=1}^H 1 = H.
    $$
The learner receives a reward of 1 at step $h$ only if it has chosen action 1 for all preceding steps $1, \dots, h$. The probability of this is $(1-\epsilon)^h$, thus:
    $$
    J(\hat{\pi};r) = \mathbb{E}^{\hat{\pi}}\left[\sum_{h=1}^H r\_h\right] = \sum_{h=1}^H (1-\epsilon)^h \approx \sum_{h=1}^H (1 - h\epsilon) = H - \epsilon\frac{H(H+1)}{2}.
    $$

The regret is then:
    $$
   J(\pi^*;r) - J(\hat{\pi};r) \approx \epsilon\frac{H(H+1)}{2} = \Omega(H^2\epsilon).
    $$


### Log-Loss BC Avoids Compounding Errors via Trajectory-Level Analysis

The paper shows that shifting from 0-1 loss to log loss allows for improved horizon-independent sample complexity bounds.

$$
\hat{\pi} = \arg\min_{\pi \in \Pi} \sum_{i=1}^n \sum_{h=1}^H \log \left(\frac{1}{\pi\_h(a^{(i)}\_h | s^{(i)}\_h)}\right).
$$

The key is that using the log loss shifts the analysis from the per-step level to the **entire trajectory level**. They show that minimizing the log loss is equivalent to performing Maximum Likelihood Estimation (MLE) on the trajectory distribution induced by the policy. Then they show that MLE guarantees a small Hellinger distance between the trajectory distributions, which implies a small regret bound.

#### LogLossBC as MLE
A quick manipulation shows that LogLossBC is equivalent to MLE over the density class $\mathcal{P} = \{\mathbb{P}^{\pi}: \pi \in \Pi\}$. Note that for autoregressive MDPs:
$$
\begin{aligned}
\sum_{i=1}^n \log \mathbb{P}^{\pi}(o^{(i)}) &= \sum_{i=1}^n \log\left(\mu(x^{(i)}) \prod_{h=1}^H \pi\_h(a^{(i)}\_h | [x^{(i)} || a^{(i)}\_{1:h-1}])\right) \\
&= \sum_{i=1}^n \left( \log\left(\mu(x^{(i)})\right) + \sum_{h=1}^H \log\left(\pi\_h(a^{(i)}\_h | [x^{(i)} || a^{(i)}\_{1:h-1}])\right) \right) \\
&= C(\mathcal{D}) - \hat{L}(\pi),
\end{aligned}
$$
where $C(\mathcal{D})$ is the log-likelihood of the contexts in the dataset and is independent of $\pi$. Maximizing the log-likelihood of the trajectories is therefore equivalent to minimizing the LogLossBC objective $\hat{L}(\pi)$.

This equivalence allows us to leverage standard results from density estimation to bound the sample complexity of LogLossBC. For a realizable policy class, MLE guarantees that the learned trajectory distribution $\mathbb{P}^{\hat{\pi}}$ will be close to the expert's $\mathbb{P}^{\pi^*}$, as measured by the squared Hellinger distance:
$$
D\_H^2(\mathbb{P}^{\hat{\pi}}, \mathbb{P}^{\pi^*}) \le 2\frac{\log\left(|\Pi|/\delta\right)}{n}.
$$

#### Small Hellinger Distance Implies Small Regret
Now the main challenge is to show that a small Hellinger distance between trajectory distributions implies small regret. 

We will focus on the case of a deterministic expert (the general case is more complex, and we refer the reader to the paper for the details). For a deterministic expert $\pi^*$, we have:
$$
J(\pi^*;r) - J(\hat{\pi};r) \le R \cdot D\_H^2(\mathbb{P}^{\hat{\pi}}, \mathbb{P}^{\pi^*}).
$$
Combining this with the MLE bound gives the final sample complexity bound for LogLossBC:
$$
J(\pi^*;r) - J(\hat{\pi};r) \le 2R \frac{\log\left(|\Pi|/\delta\right)}{n}.
$$
Crucially, this bound is **independent of the horizon H** for sparse rewards (where R is a constant) and scales **linearly with H** for dense rewards (where R scales with H). This is a significant improvement over the classic $O(H^2)$ bound for 0-1 loss BC. Furthermore, this analysis is robust to small optimization errors and misspecification, degrading gracefully rather than catastrophically.

Importantly, the paper complements this result with a lower bound showing that this linear horizon dependence is the best one can hope for. It proves that for any learning algorithm—online or offline—there exist simple MDPs where the regret is at least $\Omega(H/n)$. This establishes that LogLossBC is not just better than 0-1 BC; it is, in a sense, optimal with respect to the horizon.

#### Proof: Small Hellinger Distance Implies Small Regret

Let us first define a trajectory-level distance function between two policies $\pi$ and $\pi'$:
$$
\begin{aligned}
\rho(\pi || \pi') &:= \mathbb{E}^\pi \mathbb{E}\_{a'_{1:H} \sim \pi'(s\_{1:H})} \left[ \mathbf{1}\{ \exists h \in [H]: a\_h \neq a'\_h\} \right]
\end{aligned}
$$
Here $a'_{1:H}\sim \pi'(s\_{1:H})$ is shorthand for $a'\_1 \sim \pi'(s\_1), \ldots, a'\_H \sim \pi'(s\_H)$. This is the probability that trajectories sampled from $\pi$ and $\pi'$ differ in at least one action.

It's crucial to distinguish $\rho$ from the standard 0-1 loss used in BC. The standard loss is a *per-step* metric, averaging the number of mistakes across all steps. In contrast, $\rho$ is a much stricter *trajectory-level* metric: it measures the probability that a trajectory has **at least one mistake**. 

The proof proceeds in three steps.

**Lemma 1 (Symmetry of $\rho$).** $\rho(\pi || \pi') = \rho(\pi' || \pi)$.

Expanding the definition of $\rho(\pi || \pi')$:
$$
\begin{aligned}
\rho(\pi || \pi') &= 1 - \mathbb{E}^\pi \mathbb{E}\_{a'_{1:H} \sim \pi'(s\_{1:H})} \left[ \mathbf{1}\{ \forall h \in [H]: a\_h = a'\_h\} \right] \\
& = 1 - \mathbb{E}\_{x\sim\mu}\left[ \sum\_{a\_{1:H}, a'_{1:H}} \left(\prod_{h=1}^H \pi\_h(a\_h|[x||a\_{1:h-1}]) \pi'\_h(a'\_h|[x||a\_{1:h-1}])\right) \mathbf{1}\{ \forall h \in [H]: a\_h = a'\_h\} \right] \\
& = 1 - \mathbb{E}\_{x\sim\mu}\left[ \sum\_{a\_{1:H}} \prod_{h=1}^H \pi\_h(a\_h|[x||a\_{1:h-1}]) \pi'\_h(a\_h|[x||a\_{1:h-1}]) \right]
\end{aligned}
$$
The third equality uses the fact that the non-zero terms in the sum are when $a\_h = a'\_h$ for all $h \in [H]$. The final expression is symmetric in $\pi$ and $\pi'$, so $\rho(\pi||\pi') = \rho(\pi'||\pi)$.

**Lemma 2 (Regret bound via $\rho$).** For any policies $\pi, \pi'$, we have
$$
J(\pi;r) - J(\pi';r) \le R \cdot \rho(\pi || \pi').
$$

Let $f(x, a\_{1:H}) = \sum_{h=1}^H r\_h([x || a\_{1:h-1}], a\_h)$. Then
$$
\begin{aligned}
J(\pi;r) &= \mathbb{E}^\pi \left[ f(x, a\_{1:H}) \right] \\
&= \underbrace{\mathbb{E}^\pi \mathbb{E}\_{a'_{1:H} \sim \pi'(s\_{1:H})} \left[ f(x, a\_{1:H}) \mathbf{1}\{\forall h \in [H]: a\_h = a'\_h\} \right]}\_{T\_1} \\
&\quad+ \underbrace{\mathbb{E}^\pi \mathbb{E}\_{a'_{1:H} \sim \pi'(s\_{1:H})} \left[ f(x, a\_{1:H}) \mathbf{1}\{\exists h \in [H]: a\_h \neq a'\_h\} \right]}\_{T\_2}. \\
\end{aligned}
$$
By the law of total probability. Now let us consider $T\_1$ and $T\_2$ separately.
$$
\begin{aligned}
T\_1 &= \mathbb{E}\_{x\sim\mu} \left[ \sum\_{a\_{1:H}} f(x, a\_{1:H}) \prod_{h=1}^H \pi\_h(a\_h|[x||a\_{1:h-1}]) \pi'\_h(a\_h|[x||a\_{1:h-1}])\right] \\ 
&\le \mathbb{E}\_{x\sim\mu} \left[ \sum\_{a\_{1:H}} f(x, a\_{1:H}) \prod_{h=1}^H \pi'\_h(a\_h|[x||a\_{1:h-1}])\right] = J(\pi';r).
\end{aligned}
$$
The inequality upper-bounds $\pi\_h(a\_h|[x||a\_{1:h-1}]) \le 1$.
$$
\begin{aligned}
T\_2 &\le R \cdot \mathbb{E}^\pi \mathbb{E}\_{a'_{1:H} \sim \pi'(s\_{1:H})} \left[\mathbf{1}\{\exists h \in [H]: a\_h \neq a'\_h\} \right] = R \cdot \rho(\pi || \pi').
\end{aligned}
$$
This follows from $f(x, a\_{1:H}) \le R$. Combining $T\_1$ and $T\_2$ and rearranging yields the claimed bound.

**Lemma 3 (Relating $\rho$ to Hellinger distance).** Let $\pi^*$ be a deterministic policy and $\pi$ be an arbitrary stochastic policy. Then
$$
\frac{1}{2} D\_H^2(\mathbb{P}^{\pi}, \mathbb{P}^{\pi^*}) \le  \rho(\pi|| \pi^*) \le D\_H^2(\mathbb{P}^{\pi}, \mathbb{P}^{\pi^*}).
$$

Let $\pi(a\_{1:H}|x) = \prod_{h=1}^H \pi\_h(a\_h|[x||a\_{1:h-1}])$. Since $\pi^*$ is deterministic, its trajectory distribution $\pi^*(a\_{1:H}|x)$ is 1 for the single expert trajectory $a^*\_{1:H}$ and 0 otherwise. The squared Hellinger distance is:
$$
\begin{aligned}
D\_H^2(\mathbb{P}^{\pi}, \mathbb{P}^{\pi^*}) &= \mathbb{E}\_{x \sim \mu}\left[ \left(\sqrt{\pi(a\_{1:H}^*|x)} - 1\right)^2 + \sum\_{a\_{1:H} \ne a^*\_{1:H}} \pi(a\_{1:H}|x) \right] \\
&= \mathbb{E}\_{x \sim \mu}\left[ 2\left( 1 - \sqrt{\pi(a\_{1:H}^*|x)} \right) \right].
\end{aligned}
$$
From the proof of Lemma 1, we have $\rho(\pi || \pi^*) = 1 - \mathbb{E}\_{x \sim \mu} \left[ \pi(a\_{1:H}^*|x) \right]$. The final bound follows from the inequalities $1-\sqrt{x} \le 1-x$ and $(1-\sqrt{x})^2 \le 1-x$.

Combining these lemmas gives the desired result. For stochastic experts, the analysis is more complex.

#### Why Hellinger distance?

One might wonder why we use the squared Hellinger distance ($D\_H^2$) instead of a more common metric like Total Variation (TV). A regret bound using TV distance, $J(\pi^*;r) - J(\hat{\pi};r) \le R \cdot \text{TV}(\mathbb{P}^{\pi^*}, \mathbb{P}^{\hat{\pi}})$, is often "vacuous." For complex, high-dimensional distributions like those over long trajectories, the TV distance is often close to its maximum value of 1, even for policies that are intuitively very similar. This makes the bound trivial. The Hellinger distance is more sensitive to the subtle overlaps between distributions, allowing us to derive non-trivial, informative regret bounds from the guarantees provided by MLE.

#### The Subtlety of 0-1 Loss

The bleak picture painted by the $O(H^2)$ lower bound for 0-1 loss BC has a subtle exception that reveals why the loss is problematic. Under very strict and often unrealistic assumptions—that the expert is deterministic and perfectly realizable by a deterministic policy in our class—0-1 loss BC can achieve a horizon-independent regret bound.

In this ideal scenario, the learner can achieve zero empirical error, meaning it agrees with the expert on *every single state-action pair* in the dataset. This implies that the number of *trajectories* with at least one error is also zero. So, minimizing the per-step loss is equivalent to minimizing a trajectory-level loss. This allows for a trajectory-level analysis that avoids the compounding error and yields a good bound: $J(\pi^*;r) - J(\hat{\pi};r) \le O(R) \cdot \frac{\log(|\Pi|/\delta)}{n}$.

The real difference lies in **robustness**. This favorable result is incredibly fragile. If there is any optimization error or misspecification, the guarantee of zero trajectory-level errors vanishes. A tiny, non-zero per-step error is enough to revert the regret bound back to the pessimistic $O(H^2)$ dependence. In contrast, the analysis for **LogLossBC is robust**, which is the key insight of the paper.


---
