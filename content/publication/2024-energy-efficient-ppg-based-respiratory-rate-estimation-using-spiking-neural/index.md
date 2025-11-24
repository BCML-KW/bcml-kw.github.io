---
title: Energy-Efficient PPG-Based Respiratory Rate Estimation Using Spiking Neural
  Networks
authors:
- geunbo-yang
- youngshin-kang
- Peter H. Charlton
- Panayiotis A. Kyriacou
- Ko Keun Kim
- Ling Li
- cheolsoo-park
date: '2024-06-19T00:00:00Z'
publishDate: '2024-06-19T00:00:00Z'
doi: 10.3390/s24123980
publication_types:
- article-journal
publication: Sensors, Vol.24(12)
publication_short: ''
abstract: Respiratory rate (RR) is a vital indicator for assessing the bodily functions
  and health status of patients. RR is a prominent parameter in the field of biomedical
  signal processing and is strongly associated with other vital signs such as blood
  pressure, heart rate, and heart rate variability. Various physiological signals,
  such as photoplethysmogram (PPG) signals, are used to extract respiratory information.
  RR is also estimated by detecting peak patterns and cycles in the signals through
  signal processing and deep-learning approaches. In this study, we propose an end-to-end
  RR estimation approach based on a third-generation artificial neural network model—spiking
  neural network. The proposed model employs PPG segments as inputs, and directly
  converts them into sequential spike events. This design aims to reduce information
  loss during the conversion of the input data into spike events. In addition, we
  use feedback-based integrate-and-fire neurons as the activation functions, which
  effectively transmit temporal information. The network is evaluated using the BIDMC
  respiratory dataset with three different window sizes (16, 32, and 64 s). The proposed
  model achieves mean absolute errors of 1.37 ± 0.04, 1.23 ± 0.03, and 1.15 ± 0.07
  for the 16, 32, and 64 s window sizes, respectively. Furthermore, it demonstrates
  superior energy efficiency compared with other deep learning models. This study
  demonstrates the potential of the spiking neural networks for RR monitoring, offering
  a novel approach for RR estimation from the PPG signal.
summary: ''
url_pdf: https://doi.org/10.3390/s24123980
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
