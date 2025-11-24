---
title: 'RL-driven EMG Feature Selection'
summary: 'Using reinforcement learning to choose discriminative EMG features for prostheses, assistive robots, and rehabilitation devices.'
date: 2018-07-01
share: false

tags:
  - Reinforcement Learning
  - Feature Selection
  - EMG
  - Rehabilitation

categories:
  - Reinforcement Learning

image:
  caption: 'Policy agent ranks EMG-derived descriptors for prosthetic control.'
  focal_point: center
  preview_only: false
---

## Summary

Surface myoelectric (EMG) signals are notoriously noisy, yet they encode the intent required to control upper-limb prostheses and rehabilitation robots. We framed feature selection as a reinforcement learning problem: the agent iteratively selects high-value EMG descriptors, receiving rewards when downstream classifiers improve.

## Highlights

- Produces compact, high-performing feature sets for SVM and Random Forest classifiers
- Accelerates adaptation to new users and electrode placements
- Demonstrates how RL can directly optimize biosignal pipelines prior to model training

## Description

Analysis of EMG signal has been an interested topic in recent years for classifying surface myoelectric signal patterns. Myoelectric control is an unconventional method to control the upper limb prostheses, human assisting robots and rehabilitation devices.
