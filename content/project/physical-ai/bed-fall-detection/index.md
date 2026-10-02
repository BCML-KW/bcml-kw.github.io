---
title: 'Sim-to-Real Fall Detection for ICU Beds'
subtitle: 'Physics-based bed simulation for synthetic fall data and risk prediction'
summary: 'Physics-based bed simulation that generates synthetic fall data and transfers fall-risk prediction to real-world video.'
date: 2026-05-09
share: false
authors:
  - hyeonwoo-kim
  - jaeyong-kim

tags:
  - Physical AI
  - Simulation
  - Fall Detection
  - Healthcare

categories:
  - Physical AI & Sim-to-Real

image:
  caption: 'Physics-based bed simulator generating synthetic fall and non-fall episodes.'
  focal_point: center
  preview_only: false
---

## Overview

Falls from ICU beds are a serious and persistent patient-safety concern, but real fall events are rare, dangerous to reproduce, and ethically difficult to collect at scale. This project asks whether that gap can be closed with simulation: we build a physics-based bed environment that synthesizes a wide range of in-bed postures and movements, including both falls and ordinary non-fall motion, and uses the resulting episodes to design a continuous fall-risk label rather than a simple fall/no-fall flag.

Training directly on raw simulated video or dense sensor output is often too heavy for the embedded boards found in real ICU settings. To keep the model deployable, we represent each posture with a compact set of body joint coordinates and train a lightweight predictor on top of that representation, so the resulting fall-risk model stays small and fast enough to run in real time on constrained hardware.

Because the model is trained in simulation, a central part of this work is understanding how well it transfers to the real world. We study the gap between simulated dynamics and real-world video, examining where risk predictions stay reliable and where simulation-only training falls short, to guide how much real-world data and calibration a deployed system would still need.

## Related Publication

This project's methodology is detailed in our paper, [*Fall-from-Bed Risk Prediction Using Physics-Based Bed Simulation*]({{< relref "/publication/2026-fall-from-bed-risk-prediction-using-physics-based-bed-simulation" >}}), published in MDPI Sensors (2026).
