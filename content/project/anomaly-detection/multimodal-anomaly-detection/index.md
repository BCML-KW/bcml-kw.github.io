---
title: 'Multimodal Anomaly Detection Platform'
subtitle: 'Early warning system for hospitals, factories, and wearable fleets'
summary: 'Self-supervised representations combine CCTV, depth, audio, and biomedical sensors to detect rare events while preserving privacy.'
date: 2023-10-18
share: false
authors:
  - dongwook-kwon
  - jaeyong-kim
  - hyeonwoo-kim
  - cheolsoo-park

tags:
  - Anomaly Detection
  - Self-supervised Learning
  - Healthcare AI
  - IoT

categories:
  - Anomaly Detection

image:
  caption: 'Unified dashboard showing cross-sensor anomaly alerts in a smart ward.'
  focal_point: center
  preview_only: false
---

## Abstract

To ensure safety in smart hospitals and industrial labs, we built a multimodal anomaly detection platform that monitors RGB-D cameras, thermal feeds, audio sensors, and biomedical wearables. The system is privacy-aware—it converts raw inputs into latent embeddings on-site, then shares only anomaly scores and short textual explanations with caregivers.

## Technical Highlights

- **Self-supervised pretraining** with contrastive and masked reconstruction tasks for each modality
- **Cross-modal graph attention** that correlates patient posture, equipment usage, and biosignal trends
- **Edge deployment** options leveraging NVIDIA Jetson, ARM microcontrollers, and neuromorphic co-processors
- **Human-in-the-loop tooling** so clinicians can label new events and adapt thresholds quickly

## Impact

- Reduced false alarms in remote ICU pilots by combining DVS privacy cameras with wearable ECG signals
- Provided anomaly datasets for coursework, enabling students to experience end-to-end detection pipelines
- Created reusable APIs that other BCML projects (e.g., Nailfold Capillaroscopy, patient monitoring) can plug into for quality assurance
