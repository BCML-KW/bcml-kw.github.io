---
title: 'Reinforcement Learning for ECG Personal Authentication'
summary: 'Adaptive ECG feature weighting that feeds high-value descriptors into classical classifiers for secure biometric login.'
date: 2019-02-01
share: false

tags:
  - Reinforcement Learning
  - ECG
  - Biometrics
  - Security

categories:
  - Reinforcement Learning

image:
  caption: 'Pipeline combines RL-driven feature selection with SVM/RF classifiers.'
  focal_point: center
  preview_only: false
---

## Workflow

Electrocardiogram (ECG) signals exhibit user-specific patterns but vary with electrode placement and daily conditions. This project filters ECG streams, extracts 31 canonical features (amplitude, interval, slope, angle, etc.), and employs a reinforcement learning agent to identify the high-cost subset most useful for authentication.

## Results

- RL-ranked features significantly improved SVM and Random Forest classifiers compared to uniform feature sets
- Demonstrated robustness to daily ECG variability, enabling practical biometric login for medical and wearable devices

## Description

Electrocardiogram (ECG) data changes daily basis as the measuring point and environment changes. Since ECG data has unique characteristics for individual, we measured and test the dataset for personal authentication. 
After the measuring process, we reduced its noise by using Finite Impulse Response(FIR) filter. Additionally, we extracted the 31 features such as amplitude, interval, slope, and angle etc. Then those 31 features are entered into reinforcement learning network and received the high-cost features for its outcome. Now, using the high-cost features and previous 31 features are plugged into Support Vector Machine (SVM) and Random Forest (RF) to get the final output of the following features: amplitude, interval, and angles.  As a result, accuracy of combined feature classification are varied. However, the obtained features by reinforcement learning is considerably high.
