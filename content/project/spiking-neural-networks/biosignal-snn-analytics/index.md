---
title: 'Bio-signal SNN Analytics'
subtitle: 'Spike-based intelligence for ECG and neuromorphic sensors'
summary: 'Designing third-generation neural networks that use discrete spikes to analyze ECG, PPG, and tactile sensing streams with neuromorphic efficiency.'
date: 2023-12-10
share: false
authors:
  - choongseop-lee
  - yuntae-park
  - geunbo-yang
  - jiwoon-lee
  - cheolsoo-park

tags:
  - Spiking Neural Networks
  - Biosignal Processing
  - Neuromorphic Computing
  - Edge AI

categories:
  - Spiking Neural Networks

image:
  caption: 'Event-driven ECG analysis pipeline implemented on neuromorphic hardware.'
  focal_point: center
  preview_only: false
---

## Abstract

Spiking neural networks (SNNs) provide a biologically plausible alternative to conventional deep learning by transmitting information through binary spikes. We harness this property to build ultra-low-power biosignal analytics pipelines that can run on neuromorphic chips and always-on wearable devices.

## Research Highlights

- **Neuron-level realism**: LIF and adaptive threshold neurons tuned with cardiology-inspired priors
- **Spike encoding**: Temporal coding schemes that convert ECG and PPG signals into spike trains without losing diagnostic cues
- **Hybrid learning**: Co-training with ANN teachers followed by spike-based fine-tuning on neuromorphic hardware
- **Interpretability**: Mapping spike bursts back to physiological events for clinician review

## Outcomes

- Prototype ECG arrhythmia monitor consuming <1 mW on neuromorphic fabric
- Tooling that auto-converts PyTorch models into event-driven graphs compatible with Intel Loihi and custom FPGA accelerators
- Joint publications connecting computational neuroscience theory with deployable SNN analytics
