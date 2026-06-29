---
title: Enhancement of RGB-Based Human Action Recognition via Event-Inspired Multitask Learning
authors:
- jihwan-won
- hanwoong-ryu
- junghwan-lee
- Danilo P. Madnic
- Youngho Cho
- cheolsoo-park
date: '2026-06-05T00:00:00Z'
publishDate: '2026-06-05T00:00:00Z'
doi: 10.1109/ACCESS.2026.3700580
publication_types:
- article-journal
publication: IEEE Access
publication_short: ''
abstract: Conventional human action recognition (HAR) using RGB cameras is often
  limited by challenges such as lighting variations and motion blur. While event cameras
  offer a promising alternative due to their high temporal resolution, they lack textural
  detail and are constrained by the scarcity of large-scale datasets. To address these
  issues, this paper proposes a multi-task learning training paradigm that uses event
  data exclusively as auxiliary supervision during training. Rather than replacing
  existing recognition architectures, the proposed approach introduces an auxiliary
  task that transforms RGB data into event-like representations, guiding a shared
  encoder to learn motion-sensitive features. Since the auxiliary branch is entirely
  discarded after training, the model operates on RGB input alone at inference, enabling
  deployment without event sensors. Training is optimized using a loss annealing strategy
  that gradually shifts focus from the auxiliary task to the primary HAR task. Experiments
  across five diverse backbones spanning CNN and transformer families show that the
  proposed framework improves RGB-only baselines across all five tested backbones,
  with the largest gains observed on transformer-based models in this setting. For
  select backbones, performance approaches or is slightly better than that of models
  trained on real event data.
summary: ''
url_pdf: https://doi.org/10.1109/ACCESS.2026.3700580
tags: []
featured: false
draft: false
projects: []
slides: ''
##url_code: 'https://github.com/HugoBlox/hugo-blox-builder'
#url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
#url_poster: ''
#url_project: ''
#url_slides: ''
#url_source: 'https://github.com/HugoBlox/hugo-blox-builder'
#url_video: 'https://youtube.com'
---
