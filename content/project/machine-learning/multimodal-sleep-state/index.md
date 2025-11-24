---
title: 'Multimodal Sleep State Estimation'
subtitle: 'Explainable deep learning for EEG, ECG, and wearable fusion'
summary: 'Designing interpretable CNN-Transformer pipelines that estimate sleep stages from cross-modal biosignals collected in clinical studies and remote assignments.'
date: 2024-01-20
share: false
authors:
  - jaewoo-baek
  - suwhan-baek
  - hyunsoo-yu

tags:
  - Sleep Staging
  - EEG
  - Explainable AI
  - Multimodal Learning
  - Healthcare AI

categories:
  - Machine Learning / Deep Learning

image:
  caption: 'Prototype hypnogram viewer built for clinician validation.'
  focal_point: center
  preview_only: false
---

## Abstract

This project builds an explainable sleep-state estimation stack that fuses hospital-grade polysomnography (EEG, EOG, EMG) with wearable ECG and actigraphy data. By combining convolutional encoders with cross-modal Transformers, we produce consistent hypnogram predictions even when certain modalities are missing during home monitoring.

## Key Features

- **Cross-modal fusion** of EEG, ECG, and PPG streams for resilient inference
- **Attention-based explanations** that highlight waveform segments driving each sleep-stage decision
- **Domain adaptation** bridging in-lab PSG datasets and at-home wearable signals
- **Edge deployment** through model compression and on-device calibration workflows

## Research Outputs

- Sleep staging datasets curated from hospital studies and remote coursework assignments
- Visualization dashboards for clinicians and participants
- Transfer-learning recipes to personalize models with only a few calibration nights
