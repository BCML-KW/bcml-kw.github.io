---
title: 'Deep-ACTINet: End-to-End Sleep/Wake Detection'
summary: 'A wrist-actigraphy deep learning pipeline that beats classical sleep scoring without handcrafted features.'
date: 2019-05-01
share: false

tags:
  - Sleep Staging
  - Actigraphy
  - Deep Learning
  - Wearable AI

categories:
  - Machine Learning / Deep Learning

image:
  caption: 'Deep-ACTINet converts raw wrist activity into accurate hypnograms.'
  focal_point: center
  preview_only: false
---

## Overview

Sleep scoring is the first diagnostic step for many chronic sleep disorders. Deep-ACTINet is an end-to-end neural architecture that processes noise-cancelled raw wrist activity (three-axis accelerometer) to classify sleep and wake states with high fidelity—eliminating the need for hand-crafted actigraphy features.

## Benchmark Results

- Eight-hour, in-bed recordings from 10 participants
- Compared against two rule-based algorithms and four feature-engineered ML baselines
- Achieved **89.65% accuracy**, **92.99% recall**, and **92.09% precision**, outperforming traditional models by 4–5 percentage points

## Why It Matters

- Demonstrates that wearable-grade signals can feed directly into a deep network
- Provides a generalizable model that can replace legacy sleep/wake scoring algorithms already embedded in wristband devices
- Supplies interpretable neuron activations that correlate with established sleep features, building clinician trust

## Description

Sleep scoring is the first step for diagnosing sleep disorders. A variety of chronic diseases related to sleep disorders could be identified using sleep-state estimation. This paper presents an end-to-end deep learning architecture using wrist actigraphy, called Deep-ACTINet, for automatic sleep-wake detection using only noise canceled raw activity signals recorded during sleep and without a feature engineering method. As a benchmark test, the proposed Deep-ACTINet is compared with two conventional fixed model based sleep-wake scoring algorithms and four feature engineering based machine learning algorithms. The datasets were recorded from 10 subjects using three-axis accelerometer wristband sensors for eight hours in bed. The sleep recordings were analyzed using Deep-ACTINet and conventional approaches, and the suggested end-to-end deep learning model gained the highest accuracy of 89.65%, recall of 92.99%, and precision of 92.09% on average. These values were approximately 4.74% and 4.05% higher than those for the traditional model based and feature based machine learning algorithms, respectively. In addition, the neuron outputs of Deep-ACTINet contained the most significant information for separating the asleep and awake states, which was demonstrated by their high correlations with conventional significant features. Deep-ACTINet was designed to be a general model and thus has the potential to replace current actigraphy algorithms equipped in wristband wearable devices.
