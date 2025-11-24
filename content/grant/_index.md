---
title: Grants
summary: 'Funding programs and institutional partners that support BCML research.'
description: 'Add grant entries in this folder to update the research area highlights and footer logos automatically.'
outputs: ["HTML", "JSON"]
---

Grant entries are managed as child pages in this section. Create a new folder under `content/grant/` (for example, `content/grant/nrf-neuromorphic/`) and include:

- Front matter fields such as `title`, `agency`, `amount`, `year`, `summary`, `link`, and optional `weight` for ordering.
- A logo file (e.g., `logo.png` or `logo.svg`) inside the same folder. The system automatically picks the first `logo*` resource.

Once added, the grant logo and metadata will appear beneath the Research Areas page and in the global footer.
