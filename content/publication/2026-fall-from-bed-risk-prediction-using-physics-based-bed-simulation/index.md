---
title: "Fall-from-Bed Risk Prediction Using Physics-Based Bed Simulation"
authors:
  - jaeyong-kim
  - hyeonwoo-kim
  - jihwan-won
  - jiwoon-lee
  - hyeonjung-kim
  - sunwoo-yeon
  - Ryanghee Sohn
  - Youngho Cho
  - cheolsoo-park
date: '2026-05-09T00:00:00Z'
publishDate: '2026-05-09T00:00:00Z'
doi: "10.3390/s26102979"
publication_types:
  - article-journal
publication: "MDPI Sensors, Vol.26, No.10, 2979"
publication_short: ''
abstract: "Fall-from-bed is a critical safety issue in hospitals and long-term care; however, large-scale real-fall data are rare, and collecting the data is ethically constrained. This study examined whether the fall-from-bed risk can be inferred from single static in-bed postures without temporal motion. We developed a physics-based bed–human simulator in MuJoCo and generated labeled episodes by sampling diverse initial configurations, rolling out uncontrolled dynamics for three seconds, and detecting falls by floor contact. Each initial state was represented as a 13-keypoint 2D skeleton in a bed-centric coordinate frame, normalized to fixed bed bounds, and supervised with a continuous risk label derived from time-to-fall using per-frame discounting on a 30 frame-per-second grid. On a pose-balanced simulated test set of 50,000 initial postures, the best-performing multilayer-perceptron-based predictor attained an area under the receiver operating characteristic curve of 0.9755, area under the precision–recall curve of 0.9771, F1-score of 0.9138, and mean squared error of 0.0374 (mean over five random seeds). Pose-stratified initialization improved performance relative to fully random sampling. Consistently high performance was observed across supine/prone/lateral subgroups, which improved with training set size. These results suggest that a static posture contains predictive information about fall risk under matched simulator dynamics, supporting the feasibility of posture-based risk scoring in the controlled settings."
summary: ''
url_pdf: "https://doi.org/10.3390/s26102979"
tags: []
featured: false
draft: false
projects: []
slides: ''
---
