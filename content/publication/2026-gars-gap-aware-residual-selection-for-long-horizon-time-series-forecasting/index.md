---
title: "GARS: Gap-Aware Residual Selection for Long-Horizon Time-Series Forecasting"
authors:
  - sunwoo-yeon
  - jaeyong-kim
  - hyeonjung-kim
  - jihwan-won
  - hyeonwoo-kim
  - Donggyu Sim
  - cheolsoo-park
date: '2026-09-12T00:00:00Z'
publishDate: '2026-09-12T00:00:00Z'
doi: "10.3390/electronics15184137"
publication_types:
  - article-journal
publication: "MDPI Electronics, Vol.15, No.18, 4137"
publication_short: ''
abstract: "Intelligent systems deployed in smart cities, smart grids, environmental monitoring, and other data-driven applications increasingly depend on reliable multivariate time-series forecasting. Recent deep forecasting models have achieved strong performance on various benchmarks, but their final predictions are often generated through a fixed forecast-generation process. This one-size-fits-all approach may be suboptimal because input windows exhibit different values, trends, and periodic patterns. We propose gap-aware residual selection (GARS), a plug-in correction module for time-series forecasting that is attached to a base forecasting model and adjusts its initial forecast rather than replacing the model. From the observed input window and the initial forecast alone, GARS constructs deterministic reference forecasts, uses their differences from the initial forecast as gap-aware residual information, and forms three component forecasts: the initial forecast, a gap-aware residual component, and a direct residual component. GARS combines these components with soft weights over segments of the forecast horizon, and future target values are used only for training and evaluation. Experiments on five multivariate benchmark datasets related to solar energy, weather, electricity consumption, traffic, and exchange rates, using four representative forecasting models trained on the complete chronological training splits, show that GARS reduces the normalized-scale mean squared error by an average of 6.6% across the 80 evaluated settings. This comparison is between GARS trained jointly with each base model and the same base models trained without it. The mean absolute error is not consistently improved, and the difference between the two metrics is associated with a redistribution of error across the test samples. Under the same protocol, a direct conditional mixture without the gap signal performs at least as well as GARS on average and a parameter-matched control also improves on the base models, and thus the gain cannot be attributed to the gap-based construction. On two datasets not used elsewhere in this study, the same configuration increased the mean squared error, and thus the improvements are not established beyond the evaluated benchmarks."
summary: ''
url_pdf: "https://doi.org/10.3390/electronics15184137"
tags: []
featured: false
draft: false
projects: []
slides: ''
---
