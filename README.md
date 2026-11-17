# Azza Hamdi — Creative Engineering Portfolio

A responsive, editorial-style personal portfolio built with **plain HTML, CSS, and JavaScript**. It has no framework or package-install requirement.

## Run locally

1. Unzip `Azza_Hamdi_Portfolio.zip`.
2. Open the `azza-portfolio` folder in Visual Studio Code (`File → Open Folder`).
3. Optionally install the free **Live Server** extension.
4. Right-click `index.html` → **Open with Live Server**. You can also open `index.html` directly in a browser.

## Project structure

This tree reflects the files and folders currently on disk. The `.gitkeep` entries keep empty upload folders in the project; they are not media files.

```text
azza-portfolio/
├── .vscode/
│   └── settings.json
├── assets/
│   ├── Azza_Hamdi_CV.pdf              [present]
│   ├── certificates/
│   │   ├── cisco-ccna-introduction-to-networks.jpg
│   │   ├── nvidia-building-rag-agents.png
│   │   ├── nvidia-rapid-application-development-llms.png
│   │   ├── stmicroelectronics-training.jpg
│   │   └── .gitkeep
│   ├── education/
│   │   ├── preparatory-studies-diploma.jpg
│   │   ├── enit-logo.png
│   │   ├── ipeib-logo.png
│   │   ├── ipein-logo.png
│   │   └── .gitkeep
│   ├── images/
│   │   ├── about.jpg                  [present]
│   │   ├── circuitmind.png
│   │   ├── crochet.png
│   │   ├── drone.jpg
│   │   ├── internships/
│   │   │   ├── avempace-internship.png [present; Avempace logo]
│   │   │   ├── tunisie-telecom-internship.png [present; Tunisie Telecom logo]
│   │   │   └── .gitkeep
│   │   ├── fieldsense.jpg
│   │   ├── ieee.jpg                  [original retained; gallery uses its dedicated copy]
│   │   ├── portrait.jpg               [present and displayed in the Home hero]
│   │   ├── surveillance.jpg
│   │   ├── tuner.jpg
│   │   ├── wdm.jpg
│   │   ├── designs/
│   │   │   ├── ieee-enit-posters.jpg
│   │   │   ├── pes-tgm-branding.jpg
│   │   │   ├── tuned-campaign.jpg
│   │   │   └── .gitkeep
│   │   └── ieee/
│   │       ├── gallery/
│   │       │   ├── ieee-gallery-1.jpg
│   │       │   └── .gitkeep
│   │       ├── ieee-enit-announcement.jpg [retained; not rendered]
│   │       ├── ieee.jpg               [IEEE event poster collage]
│   │       ├── pes-tgm-6-announcement.jpg [retained; not rendered]
│   │       ├── pestgm.jpg              [source artwork retained]
│   │       ├── tuned.jpg               [source artwork retained]
│   │       ├── wie-act-4-announcement.jpg [retained; not rendered]
│   │       ├── wie-enit-affinity-announcement.jpg [retained; not rendered]
│   │       └── .gitkeep
│   ├── logos/
│   │   ├── 35 SVG logo/symbol files   [present; names listed below]
│   │   └── .gitkeep
│   └── reports/
│       ├── drone-optical-transmission.pdf
│       ├── fieldsense.pdf
│       ├── smart-surveillance.pdf
│       ├── wdm-optical-link.pdf
│       └── .gitkeep
├── index.html
├── README.md
├── script.js
├── shot-desktop.png                   [preview screenshot; not loaded by the site]
├── shot-mobile.png                    [preview screenshot; not loaded by the site]
└── style.css
```

There are no `assets/images/projects/`, `music/`, or `crochet/` folders. IEEE activity photos belong in `assets/images/ieee/gallery/`; Creative Studio artwork belongs in `assets/images/designs/`. Legacy source files remain on disk, but the live IEEE and design galleries use their separate folders.

## Complete Image Upload Guide

The website uses image media only; it has no video players. Most general website images are configured in the `MEDIA` object near the top of `script.js`; the Home portrait is referenced directly in `index.html`. IEEE photos and Creative Studio artwork use their own dedicated data arrays in `script.js`. The `expectedSrc` value documents the intended filename; **the site loads `src` only**. Confirmed image files are configured directly; missing files remain `src: null`, so their placeholders show without requesting absent files. A file whose contents conflict with its role is also left unconfigured rather than displayed inaccurately.

The checklist below was checked against the current HTML, CSS, JavaScript, and files on disk. “Present” means the exact file exists. “Missing” means the slot is reserved but the file is not uploaded; missing slots show a neutral placeholder or are not rendered. “Unused” files are retained in the folder but are not displayed by the site. CSS uses gradients and shapes for decoration; there are no CSS `background-image` file references. `index.html` directly references the Home portrait; the other active image paths are generated or configured in `script.js`.

| Website section | Image description | Exact filename | Exact folder | Status |
| --- | --- | --- | --- | --- |
| Home | Hero portrait | `portrait.jpg` | `assets/images/` | Present and displayed |
| About | No photo slot; retained profile image | `about.jpg` | `assets/images/` | Present, unused |
| Academic Journey | Preparatory Studies Diploma preview | `preparatory-studies-diploma.jpg` | `assets/education/` | Present and displayed |
| Academic Journey — Mathematics Baccalaureate | High-school logo; school name is not specified | `high-school-logo.png` | `assets/education/` | Missing; HS placeholder shown |
| Academic Journey — IPEIB | Institution logo | `ipeib-logo.png` | `assets/education/` | Present and displayed |
| Academic Journey — IPEIN | Institution logo | `ipein-logo.png` | `assets/education/` | Present and displayed |
| Academic Journey — ENIT | Institution logo | `enit-logo.png` | `assets/education/` | Present and displayed |
| Certifications | NVIDIA — Building RAG Agents with LLMs | `nvidia-building-rag-agents.png` | `assets/certificates/` | Present and displayed |
| Certifications | NVIDIA — Rapid Application Development with LLMs | `nvidia-rapid-application-development-llms.png` | `assets/certificates/` | Present and displayed |
| Certifications | STMicroelectronics training | `stmicroelectronics-training.jpg` | `assets/certificates/` | Present and displayed |
| Certifications | Cisco — CCNA: Introduction to Networks | `cisco-ccna-introduction-to-networks.jpg` | `assets/certificates/` | Present and displayed |
| Things I’ve Built | FieldSense | `fieldsense.jpg` | `assets/images/` | Present and displayed |
| Things I’ve Built | CircuitMind AI | `circuitmind.png` | `assets/images/` | Present and displayed |
| Things I’ve Built | RTOS Instrument Tuner | `tuner.jpg` | `assets/images/` | Present and displayed |
| Things I’ve Built | Smart Surveillance | `surveillance.jpg` | `assets/images/` | Present and displayed |
| Things I’ve Built | WDM Optical Link | `wdm.jpg` | `assets/images/` | Present and displayed |
| Things I’ve Built | Drone Optical Transmission | `drone.jpg` | `assets/images/` | Present and displayed |
| Internships | Avempace Technologies image | `avempace-internship.png` | `assets/images/internships/` | Present; this file is the company logo, not an internship photo |
| Internships | Tunisie Telecom image | `tunisie-telecom-internship.png` | `assets/images/internships/` | Present and displayed; this file is the company logo |
| Behind the Spotlight | Shared IEEE gallery, slot 1 | `ieee-gallery-1.jpg` | `assets/images/ieee/gallery/` | Present and displayed |
| Behind the Spotlight | Shared IEEE gallery, slot 2 | `ieee-gallery-2.jpg` | `assets/images/ieee/gallery/` | Present and displayed |
| Behind the Spotlight | Shared IEEE gallery, slot 3 | `ieee-gallery-3.jpg` | `assets/images/ieee/gallery/` | Present and displayed |
| Behind the Spotlight | Shared IEEE gallery, slot 4 | `ieee-gallery-4.jpg` | `assets/images/ieee/gallery/` | Present and displayed |
| Creative Studio | IEEE ENIT event posters | `ieee-enit-posters.jpg` | `assets/images/designs/` | Present and displayed |
| Creative Studio | PES TGM branding artwork | `pes-tgm-branding.jpg` | `assets/images/designs/` | Present and displayed |
| Creative Studio | TunED campaign artwork | `tuned-campaign.jpg` | `assets/images/designs/` | Present and displayed |
| Music | Music performance photo | `music.jpg` | `assets/images/` | Present and displayed |
| Crochet | Twins Crochet brand image | `crochet.png` | `assets/images/` | Present and displayed |
| Toolkit — Embedded Systems & IoT | Raspberry Pi | `raspberrypi.svg` | `assets/logos/` | Present |
| Toolkit — Embedded Systems & IoT | Embedded Linux | `linux.svg` | `assets/logos/` | Present |
| Toolkit — Embedded Systems & IoT | ESP32 | `espressif.svg` | `assets/logos/` | Present |
| Toolkit — Embedded Systems & IoT | Heltec board symbol | `heltec-board.svg` | `assets/logos/` | Present |
| Toolkit — Embedded Systems & IoT | Arduino | `arduino.svg` | `assets/logos/` | Present |
| Toolkit — Embedded Systems & IoT | STM32 | `stmicroelectronics.svg` | `assets/logos/` | Present |
| Toolkit — Embedded Systems & IoT | MicroPython | `micropython.svg` | `assets/logos/` | Present |
| Toolkit — Embedded Systems & IoT | FreeRTOS | `freertos.svg` | `assets/logos/` | Present |
| Toolkit — Embedded Systems & IoT | MQTT | `mqtt.svg` | `assets/logos/` | Present |
| Toolkit — Embedded Systems & IoT | REST API symbol | `rest-api.svg` | `assets/logos/` | Present |
| Toolkit — Embedded Systems & IoT | LoRa radio symbol | `lora-radio.svg` | `assets/logos/` | Present; also used for LoRa Networks |
| Toolkit — Embedded Systems & IoT | RFID | `rfid.svg` | `assets/logos/` | Present |
| Toolkit — Telecommunications & Networking | Optical fiber symbol | `optical-fiber.svg` | `assets/logos/` | Present |
| Toolkit — Telecommunications & Networking | Cisco Packet Tracer | `cisco.svg` | `assets/logos/` | Present |
| Toolkit — Programming Languages | Python | `python.svg` | `assets/logos/` | Present |
| Toolkit — Programming Languages | C | `c.svg` | `assets/logos/` | Present |
| Toolkit — Programming Languages | C++ | `cplusplus.svg` | `assets/logos/` | Present |
| Toolkit — Programming Languages | Java | `java.svg` | `assets/logos/` | Present |
| Toolkit — Programming Languages | HTML5 | `html5.svg` | `assets/logos/` | Present |
| Toolkit — Programming Languages | CSS | `css.svg` | `assets/logos/` | Present |
| Toolkit — Programming Languages | JavaScript | `javascript.svg` | `assets/logos/` | Present |
| Toolkit — AI & Intelligent Systems | Edge AI chip symbol | `edge-ai.svg` | `assets/logos/` | Present |
| Toolkit — AI & Intelligent Systems | Machine learning symbol | `machine-learning.svg` | `assets/logos/` | Present |
| Toolkit — AI & Intelligent Systems | Reinforcement learning symbol | `reinforcement-learning.svg` | `assets/logos/` | Present |
| Toolkit — AI & Intelligent Systems | OpenCV | `opencv.svg` | `assets/logos/` | Present |
| Toolkit — AI & Intelligent Systems | LangGraph workflow symbol | `langgraph.svg` | `assets/logos/` | Present |
| Toolkit — AI & Intelligent Systems | FAISS similarity-search symbol | `faiss.svg` | `assets/logos/` | Present |
| Toolkit — Databases | MySQL | `mysql.svg` | `assets/logos/` | Present |
| Toolkit — Databases | SQLite | `sqlite.svg` | `assets/logos/` | Present |
| Toolkit — Databases | MongoDB | `mongodb.svg` | `assets/logos/` | Present |
| Toolkit — Databases | Oracle | `oracle.svg` | `assets/logos/` | Present |
| Toolkit — Engineering & Development Tools | MATLAB | `matlab.svg` | `assets/logos/` | Present |
| Toolkit — Engineering & Development Tools | Proteus circuit symbol | `proteus-circuit.svg` | `assets/logos/` | Present |
| Toolkit — Engineering & Development Tools | OptiSystem symbol | `optisystem.svg` | `assets/logos/` | Present |
| Toolkit — Engineering & Development Tools | TouchGFX symbol | `touchgfx.svg` | `assets/logos/` | Present |
| IEEE archive | Original IEEE event photo source | `ieee.jpg` | `assets/images/` | Present, unused; gallery uses its dedicated copy |
| IEEE archive | Original IEEE poster collage | `ieee.jpg` | `assets/images/ieee/` | Present, unused |
| IEEE archive | PES TGM artwork source | `pestgm.jpg` | `assets/images/ieee/` | Present, unused; design has its own copy |
| IEEE archive | TunED artwork source | `tuned.jpg` | `assets/images/ieee/` | Present, unused; design has its own copy |
| IEEE archive | IEEE ENIT announcement | `ieee-enit-announcement.jpg` | `assets/images/ieee/` | Present, unused |
| IEEE archive | PES TGM 6.0 announcement | `pes-tgm-6-announcement.jpg` | `assets/images/ieee/` | Present, unused |
| IEEE archive | WIE ACT 4.0 announcement | `wie-act-4-announcement.jpg` | `assets/images/ieee/` | Present, unused |
| IEEE archive | WIE ENIT Affinity Group announcement | `wie-enit-affinity-announcement.jpg` | `assets/images/ieee/` | Present, unused |

The 35 unique toolkit SVGs above cover all 38 logo references in `script.js`; a few toolkit items intentionally share one logo file. English and French use text symbols, not image logos. The project-preview screenshots `shot-desktop.png` and `shot-mobile.png` are stored at the project root and are not loaded by the website.

### Home, About, and general images

| Website section | Image description | Filename and exact folder path | Recommended size / ratio | Required? | Present / placeholder |
| --- | --- | --- | --- | --- | --- |
| Home / Hero | Azza Hamdi portrait | `portrait.jpg` — `assets/images/portrait.jpg` | Portrait, 4:5 | Displayed | **Present and configured** |
| About Me | No profile photo is displayed | `about.jpg` — `assets/images/about.jpg` | Landscape, 4:3; about 1200 × 900 px | Not used | File retained on disk, no code reference |

The Home hero displays `assets/images/portrait.jpg`. The About Me profile photo was removed; its text and stats remain. The unused `assets/images/about.jpg` file was not deleted.

### My Academic Journey

| Item | Filename and folder | Recommended size / ratio | Required? | Present / placeholder |
| --- | --- | --- | --- | --- |
| Preparatory Studies Diploma (IPEIN) | `preparatory-studies-diploma.jpg` — `assets/education/preparatory-studies-diploma.jpg` | Landscape document scan; keep its full page visible | Optional | Present on the right below the IPEIN year badge; compact thumbnail and lightbox |
| Mathematics Baccalaureate — high-school logo | `high-school-logo.png` — `assets/education/high-school-logo.png` | Square or landscape; SVG, PNG, JPG, or WebP; displayed with `object-fit: contain` | Optional | Missing; “HS” placeholder shown. High-school name has not been specified. |
| IPEIB logo | `ipeib-logo.png` — `assets/education/ipeib-logo.png` | Square or landscape; SVG, PNG, JPG, or WebP; displayed with `object-fit: contain` | Optional | Present and displayed |
| IPEIN logo | `ipein-logo.png` — `assets/education/ipein-logo.png` | Square or landscape; SVG, PNG, JPG, or WebP; displayed with `object-fit: contain` | Optional | Present and displayed |
| ENIT logo | `enit-logo.png` — `assets/education/enit-logo.png` | Square or landscape; SVG, PNG, JPG, or WebP; displayed with `object-fit: contain` | Optional | Present and displayed |

Each timeline entry places its institution logo or abbreviation placeholder on the left, its existing academic information in the center, and its visible year badge on the right. Dates are 2022, 2022–2023, 2023–2024, and 2024–2027. The timeline lists the Mathematics-track Baccalaureate in 2022, IPEIB (2022–2023) and IPEIN (2023–2024), both for Preparatory Studies in Mathematics and Physics (MP), and ENIT (2024–2027). The IPEIB entry records a top-10 ranking out of 90 students. The IPEIN entry records a 229th-place ranking among more than 1,500 candidates in the National Engineering Entrance Examination and displays the preparatory diploma image with its existing lightbox. IPEIB, IPEIN, and ENIT logos are loaded from their actual files in `assets/education/`; only the unspecified high-school logo remains a placeholder.

#### Academic Institution Logos

The logo paths are listed in each `academicJourney` entry in `script.js`. The high-school name is not specified, so its slot uses the neutral **HS** abbreviation until you provide the genuine school logo. IPEIB, IPEIN, and ENIT logo files are present and displayed. Add only the genuine logo belonging to each institution.

| Institution | Exact filename | Exact folder |
| --- | --- | --- |
| Mathematics Baccalaureate — high school | `high-school-logo.png` | `assets/education/` (not uploaded) |
| IPEIB | `ipeib-logo.png` | `assets/education/` |
| IPEIN | `ipein-logo.png` | `assets/education/` |
| ENIT | `enit-logo.png` | `assets/education/` |

Folder structure:

```text
assets/
└── education/
    ├── preparatory-studies-diploma.jpg
    ├── ipeib-logo.png
    ├── ipein-logo.png
    ├── enit-logo.png
    └── high-school-logo.png (optional; not uploaded)
```

IPEIB, IPEIN, and ENIT logos are already present and configured. Only the optional high-school logo is still missing. To add it:

1. In VS Code Explorer, open `assets/education/`.
2. Copy the genuine high-school logo into this folder. Do not use another school's or institution's logo.
3. Keep the filename `high-school-logo.png` or update the Baccalaureate entry's `logo.src` in `script.js` to match your chosen filename.
4. Check the actual extension (`.png`, `.jpg`, `.jpeg`, `.webp`, or `.svg`). Changing the extension text does not convert an image.
5. In `script.js`, set that entry's `logo.src` to the exact uploaded path. The current IPEIB, IPEIN, and ENIT paths match their real `.png` extensions.
6. Save the files and refresh the page using Live Server. Confirm each logo appears beside the matching institution; images fit inside their containers with `object-fit: contain`.
7. If a logo is missing, the timeline displays its abbreviation instead. For a 404, compare the code path with the folder and filename, including capitalization, then check the browser Developer Tools **Network** and **Console** tabs. Filenames may be case-sensitive after deployment.

### My Certificates

The four certificate cards already exist in `certificates` in `script.js`. Their uploaded images are configured below; certificate PDFs are not configured.

| Certificate | Exact image path | Recommended size / ratio | Required? | Present / placeholder |
| --- | --- | --- | --- | --- |
| NVIDIA — Building RAG Agents with LLMs | `assets/certificates/nvidia-building-rag-agents.png` | Landscape certificate; scan around 2000 px wide | Optional | Present and configured |
| NVIDIA — Rapid Application Development with Large Language Models | `assets/certificates/nvidia-rapid-application-development-llms.png` | Landscape; scan around 2000 px wide | Optional | Present and configured |
| STMicroelectronics — STM32, Edge AI, TouchGFX, cryptography, and energy optimization training | `assets/certificates/stmicroelectronics-training.jpg` | Landscape; scan around 2000 px wide | Optional | Present and configured |
| Cisco — CCNA: Introduction to Networks | `assets/certificates/cisco-ccna-introduction-to-networks.jpg` | Landscape; scan around 2000 px wide | Optional | Present and configured |

To add a certificate image, copy the real image into `assets/certificates/` and set that certificate object's `image` value to the exact relative path. Set `pdfUrl` only when you have its real PDF. To add a certificate, add one object to `certificates` with `organization`, `title`, `image`, and `pdfUrl`; the gallery and lightbox are generated from that list. A configured image opens in the site's lightbox when selected.

### Things I’ve Built — Engineering Projects

The `projects` list in `script.js` has six projects, each with one configured image. When a project description appears, its image stays visible in the upper part of the card while the description appears below. On desktop, hover or keyboard focus reveals the details; on mobile, tap **Explore** or the card. Project images display automatically and no **View image** button or image lightbox is used.

| Project | Image 1 (present) | Image 2 | Image 3 | Report |
| --- | --- | --- | --- | --- |
| FieldSense | `assets/images/fieldsense.jpg` | Not uploaded | Not uploaded | `assets/reports/fieldsense.pdf` |
| CircuitMind AI | `assets/images/circuitmind.png` | Not uploaded | Not uploaded | Not uploaded |
| RTOS Instrument Tuner | `assets/images/tuner.jpg` | Not uploaded | Not uploaded | Not uploaded |
| Smart Surveillance | `assets/images/surveillance.jpg` | Not uploaded | Not uploaded | `assets/reports/smart-surveillance.pdf` |
| WDM Optical Link | `assets/images/wdm.jpg` | Not uploaded | Not uploaded | `assets/reports/wdm-optical-link.pdf` |
| Drone Optical Transmission | `assets/images/drone.jpg` | Not uploaded | Not uploaded | `assets/reports/drone-optical-transmission.pdf` |

Sports Field Reservation Web Application has been removed from the project cards. Its old expected image path is not used, and no files were deleted. Internships appear once in their own **Learning through practice.** section, separate from Professional Experience.

To replace a project photo, upload its real image and update that project's first `images` entry in `script.js`. The current card displays that image automatically with the project description. Keep the path unique to the project and preserve its aspect ratio; project previews use `object-fit: contain`.

### Learning through practice. — Professional Internships

This is a standalone section with the ID `internships`, separate from `professional-experience`. Its two cards are rendered once from `professionalInternships` in `script.js`. The Professional Experience section contains education, leadership, and creative practice only.

| Company / role | Duration | Internship image | Report |
| --- | --- | --- | --- |
| Avempace Technologies — Engineering Intern | 2 Months | `assets/images/internships/avempace-internship.png` (present; company logo) | `assets/reports/drone-optical-transmission.pdf` |
| Tunisie Telecom — Intern | 1 Month | `assets/images/internships/tunisie-telecom-internship.png` (present; company logo) | No report is uploaded; **Report coming soon** is non-clickable |

The files currently at `assets/images/internships/avempace-internship.png` and `assets/images/internships/tunisie-telecom-internship.png` are company logos rather than internship photographs. Both are now configured and displayed. Keep them intact; to use actual internship photographs, add separate files under `assets/images/internships/` and update the corresponding `image.src` in `professionalInternships` in `script.js`. Do not reuse the Drone Optical Transmission project image (`drone.jpg`). Missing or unreadable image paths fall back to a neutral placeholder. The existing Avempace PDF link remains configured; no Tunisie Telecom report is currently uploaded or linked.

Project report links remain on their respective project cards when a real report is available. The project card links and internship links open PDFs in a new tab; visitors can use the browser's download controls.

### Behind the Spotlight — My IEEE Journey

The IEEE showcase is one compact layout with two **Current positions** and four **Previous roles & congress experiences**. It lists all six roles with short descriptions; it does not display role announcement imagery or individual role galleries.

- **Current:** IEEE ENIT Student Branch — Media Manager (leading five media managers); SDC 5.0 (SIGHT Day Congress) — Media Team Lead.
- **Previous:** IEEE WIE ENIT Student Branch Affinity Group — Media Manager (**2025 Mandate**); WIE ACT 4.0 — Media Manager; PES TGM 6.0 — Branding Co-Team Lead; Tunisian Engineering Day 8.0 (TunED) — Media Co-Team Lead.

IEEE ENIT Student Branch and IEEE WIE ENIT Student Branch Affinity Group are student organizations; SDC, WIE ACT, PES TGM, and TunED are congresses.

The one shared IEEE gallery always contains exactly four image slots for general IEEE activities, teamwork, and event participation. These are separate from official role-announcement photos; the old announcement files listed as unused above are not loaded by the gallery. Place the four shared photos in `assets/images/ieee/gallery/` using these exact filenames:

| Slot | Filename | Status |
| --- | --- | --- |
| 1 | `ieee-gallery-1.jpg` | Present and configured |
| 2 | `ieee-gallery-2.jpg` | Present and displayed |
| 3 | `ieee-gallery-3.jpg` | Present and displayed |
| 4 | `ieee-gallery-4.jpg` | Present and displayed |

All four IEEE gallery photos are present and configured from `assets/images/ieee/gallery/`. To replace a slot, put its image in this folder and set the matching `ieeeGallery` entry's `src` in `script.js` to its path. Keep the `alt` text descriptive. Any unconfigured empty slots remain neutral CSS placeholders. Photos preserve their aspect ratio and open in the site's lightbox when clicked. Old role-announcement files remain on disk but are no longer displayed in the IEEE showcase.

The **Leadership — IEEE ENIT Student Branch** card in **“Building ideas, leading teams, and learning every day.”** is now text-only. Individual IEEE role galleries and the previous hover-to-reveal photo behavior have been removed; all IEEE activity photos shown by the site are in the shared four-slot gallery.

### Creative Studio — Designing visuals, shaping stories

Creative Studio is one unified, uncategorized gallery with three real design artworks. Each design has its own image entry in the dedicated folder below; no design falls back to an IEEE gallery or project image:

| Artwork | Exact path |
| --- | --- |
| IEEE ENIT event posters | `assets/images/designs/ieee-enit-posters.jpg` |
| PES TGM branding | `assets/images/designs/pes-tgm-branding.jpg` |
| TunED campaign | `assets/images/designs/tuned-campaign.jpg` |

The three artwork files were copied from their previous locations into `assets/images/designs/`; the original source files were retained. To add or replace a design, upload its own image to `assets/images/designs/` and edit the corresponding `creativeGallery` entry in `script.js`. Each design button opens its image in the lightbox. If a design file is unavailable, the broken image is replaced with a neutral CSS placeholder; no IEEE photo, project image, or other design is used as a fallback. Creative Studio has no event/position categories, filters, long per-design descriptions, or role-specific groupings. **Creative Note** and **SDC Visual Kit** remain removed.

### Beyond Engineering: Music and Crochet

| Section | Image | Recommended size / ratio | Required? | Present / placeholder |
| --- | --- | --- | --- | --- |
| Music | `music.jpg` — `assets/images/music.jpg`; music performance photo | Landscape, 4:3; about 1600 × 1200 px | Optional | Present and displayed |
| Crochet business | `crochet.png` — `assets/images/crochet.png`; Twins Crochet brand image | Square or landscape, 1:1 or 4:3 | Optional | Present and configured |

There are no separate violin and oud image slots, and crochet has one image slot. For multiple photographs, add additional cards/media entries and update the markup or gallery data; dropping extra files into a folder alone will not display them.

### My Toolkit logos

All technology logos and technical symbols below are local SVG files under `assets/logos/`. **All 35 SVG files currently exist.** Some files are purpose-made technical symbols rather than official company marks. English and French use text symbols and have no separate logo file.

| Toolkit category | Displayed items → exact logo file |
| --- | --- |
| Embedded Systems & IoT | Raspberry Pi → `assets/logos/raspberrypi.svg`; Embedded Linux → `assets/logos/linux.svg`; ESP32 → `assets/logos/espressif.svg`; Heltec → `assets/logos/heltec-board.svg` (board symbol); Arduino → `assets/logos/arduino.svg`; STM32 → `assets/logos/stmicroelectronics.svg`; MicroPython → `assets/logos/micropython.svg`; FreeRTOS → `assets/logos/freertos.svg` (scheduler symbol); MQTT → `assets/logos/mqtt.svg`; REST API → `assets/logos/rest-api.svg` (API flow symbol); LoRa → `assets/logos/lora-radio.svg`; RFID → `assets/logos/rfid.svg` |
| Telecommunications & Networking | Optical Fiber → `assets/logos/optical-fiber.svg` (fiber symbol); Cisco Packet Tracer → `assets/logos/cisco.svg`; LoRa Networks → `assets/logos/lora-radio.svg` |
| Programming Languages | Python → `assets/logos/python.svg`; C → `assets/logos/c.svg`; C++ → `assets/logos/cplusplus.svg`; Java → `assets/logos/java.svg`; HTML5 → `assets/logos/html5.svg`; CSS → `assets/logos/css.svg`; JavaScript → `assets/logos/javascript.svg` |
| AI & Intelligent Systems | Edge AI → `assets/logos/edge-ai.svg` (chip symbol); Machine Learning → `assets/logos/machine-learning.svg` (network symbol); Reinforcement Learning → `assets/logos/reinforcement-learning.svg` (decision graph); OpenCV → `assets/logos/opencv.svg`; LangGraph → `assets/logos/langgraph.svg` (workflow symbol); FAISS → `assets/logos/faiss.svg` (similarity-search symbol) |
| Databases | MySQL → `assets/logos/mysql.svg`; SQLite → `assets/logos/sqlite.svg`; MongoDB → `assets/logos/mongodb.svg`; Oracle → `assets/logos/oracle.svg` |
| Engineering & Development Tools | MATLAB → `assets/logos/matlab.svg`; Proteus → `assets/logos/proteus-circuit.svg` (circuit symbol); STM32CubeIDE → `assets/logos/stmicroelectronics.svg`; Arduino IDE → `assets/logos/arduino.svg`; OptiSystem → `assets/logos/optisystem.svg` (optical-system symbol); TouchGFX → `assets/logos/touchgfx.svg` (touch UI symbol) |
| Languages | English — B2 (Upper-Intermediate) and French — B2 (Upper-Intermediate); both use text symbols, not image logos. |

Logos are configured on each item in the `techStack` data in `script.js` using its `logo` path. SVG is preferred for scalable marks; transparent PNG or WebP can also work if used in that `logo` property. The existing icon containers are 46 × 46 px and images use `object-fit: contain`; keep that container/layout unchanged. If a logo fails to load, the item's built-in symbol appears instead. The Languages category now lists only English — B2 (Upper-Intermediate) and French — B2 (Upper-Intermediate).

When sourcing logos, prefer the official manufacturer site or reputable libraries such as [Devicon](https://devicon.dev/) and [Simple Icons](https://simpleicons.org/). Check branding and usage terms, and use a descriptive `logoAlt` when the default `${name} logo` text would be inaccurate. To add a technology without changing the layout dimensions, add an item to the appropriate `techStack[].tools` array and give it a logo path or meaningful `icon` fallback; do not change the existing icon sizing or category CSS.

## Adding an image in VS Code

1. In VS Code Explorer, open the folder listed in the checklist (for example `assets/images/ieee/`). Create it only if it does not exist.
2. Make a copy of the photo, then rename that copy to the exact filename and spelling from the checklist. If you prefer a different name, update the matching code path.
3. Copy the renamed photo into the correct folder using File Explorer or drag it into the folder in VS Code. Keep the original unchanged.
4. Check the real file extension (`.jpg`, `.jpeg`, `.png`, `.webp`, or `.svg`). Renaming a file extension does not convert the image format. Keep your original file unchanged and do not overwrite unrelated images; choose a unique filename when adding a new item.
5. In `script.js`, find the relevant section's data and set its path to the exact uploaded file. For example, a Creative Studio item uses its own `image` field (this example path is not a file in the project until you upload it):

   ```js
   { title: 'Design Project', image: 'assets/images/designs/design-project.jpg', alt: 'Design Project artwork' }
   ```

   For a certificate, set the matching `image` field; for a toolkit mark, set the item's `logo` path. The Home portrait is displayed from `assets/images/portrait.jpg`; the About Me section has no profile-photo slot.
6. Save the file, refresh the local website, and check the browser's **Console** and **Network** tab if the image is not displayed.

Filenames are case-sensitive on many hosting platforms. `Portrait.JPG` and `portrait.jpg` can be different paths after deployment. Keep the capitalization and extension exactly the same in both the code and filesystem.

## Adding Certificates and Academic Diplomas

1. Copy the original certificate image into `assets/certificates/` and the preparatory diploma image into `assets/education/`.
2. In `script.js`, set the corresponding `certificates[].image` or `preparatoryDiploma.image` property to the relative path. Optionally set `pdfUrl` only when the matching real PDF exists.
3. Keep the whole certificate/diploma page in frame. The current gallery frame is landscape and uses `object-fit: contain`; scans should be high resolution and readable when enlarged.
4. Save and reload. Selecting the thumbnail opens the accessible lightbox.

To add another certificate without replacing existing cards, append an object to the `certificates` array with the real `organization`, `title`, `image`, and (if provided) `pdfUrl`. The current gallery supports the four listed NVIDIA, STMicroelectronics, and Cisco entries. Academic institution logo upload paths and instructions are in [Academic Institution Logos](#academic-institution-logos).

## Adding IEEE Gallery Photos

The shared gallery has four fixed slots in the `ieeeGallery` array in `script.js`. All four files `ieee-gallery-1.jpg` through `ieee-gallery-4.jpg` in `assets/images/ieee/gallery/` are now configured. For replacements, update the matching entry's `src` to the exact path. Slots with `src: null` remain neutral placeholders without broken-image requests. The six roles are text-only; individual role announcement galleries are not part of this layout.

## Managing Technology Logos

1. Put new SVG, PNG, or WebP logo files in `assets/logos/`.
2. Prefer recognizable official marks from the manufacturer or reputable icon libraries. Use the existing purpose-specific technical symbol style when no suitable logo exists.
3. In `script.js`, add or update the technology object in `techStack[].tools` and set `logo: 'assets/logos/your-file.svg'`. Add `logoAlt` if the default label would misdescribe the mark.
4. If a logo path is missing or fails, JavaScript reveals that tool's configured `icon` symbol rather than leaving a broken image. The category card, item dimensions, and 46 × 46 px icon frame should remain unchanged.

All current 35 local logo files are listed in the toolkit table. The two language entries intentionally use text symbols rather than image logos.

## PDF reports and documents

The real CV is present at `assets/Azza_Hamdi_CV.pdf`. Four project/internship reports are present in `assets/reports/`: `drone-optical-transmission.pdf`, `fieldsense.pdf`, `smart-surveillance.pdf`, and `wdm-optical-link.pdf`. There are no certificate PDFs or diploma PDFs in the project folder.

Available project and internship reports are configured through their `reportUrl` properties. Cards with no available report show their disabled or text-only state. To add another real report:

1. Copy the PDF into `assets/reports/`.
2. Set the corresponding `reportUrl` in `projects` or `professionalInternships` to the relative PDF path.
3. Save and reload, then test the link. Configured report links open in a new browser tab; visitors can use their browser's download control if needed.

Use only genuine reports. Suggested filenames for reports that are still missing are listed above and are not configured in the code.

## Recommended image formats and sizes

These are practical guidelines, not code-enforced minimums. Use the original aspect ratio where possible and export a sufficiently sharp image without excessive file size.

| Asset type | Format / suggested dimensions |
| --- | --- |
| Portrait | JPG or WebP; portrait 4:5 or 3:4; around 1200 × 1500 px |
| About / personal photos | JPG or WebP; 4:3; around 1200 × 900 px |
| Project screenshots and builds | PNG for interface/simulation text, JPG/WebP for photos; 16:9 or 4:3; around 1600 px wide |
| IEEE activity photos | JPG or WebP; use the original aspect ratio and around 1600 px on the long edge |
| Creative Studio artwork | PNG for text-heavy posters or JPG/WebP for artwork; use the original aspect ratio |
| Event photography | JPG or WebP; 4:3 or 3:2; around 1600 px wide |
| Certificates and diplomas | Sharp JPG/PNG/WebP scan; preserve full landscape page, around 2000 px wide or higher when available |
| Creative posters and designs | PNG for typography/transparency; JPG/WebP for photo compositions; around 1600 px wide |
| Toolkit logos | SVG preferred; transparent PNG/WebP also supported; square artboard with clear margins, e.g. 512 × 512 px |

- **JPG:** Good for photographs; usually smaller than a lossless image.
- **PNG:** Lossless and supports transparency; useful for text-heavy graphics and screenshots.
- **WebP:** Efficient modern format for photographs and graphics; use `.webp` and configure that exact path.
- **SVG:** Vector format for logos and symbols; remains sharp at different sizes. Use trusted SVG files.

Creative Studio and shared IEEE gallery images use `object-fit: contain` so the complete design or photograph remains visible. Certificate and diploma previews also use `object-fit: contain`; toolkit logos use `contain` inside their fixed icon boxes.

## Troubleshooting

### Image does not appear

- Check the filename, folder, and extension against the code. `MEDIA.expectedSrc` documents the intended filename, but `MEDIA.src` must be set for a general image to load.
- Check capitalization; hosting may distinguish `Photo.jpg` from `photo.jpg`.
- Confirm the image exists at that exact path and that the browser can read it.
- Open browser Developer Tools → **Console** and **Network**, reload, and look for a failed request or 404.
- For a certificate/diploma, check the `image` property; for a logo, check the `logo` property.

### Image is cropped

`object-fit: cover` fills the frame and can crop the edges. Reframe the image or use an image with a closer aspect ratio. `object-fit: contain` preserves the entire image but can leave unused space around it. The site uses `contain` for certificates/diplomas and toolkit logos.

### Image is blurry

Use a higher-resolution original, avoid enlarging a small thumbnail, and export with good quality. For a certificate, use a scan/photo with readable text rather than a compressed screenshot.

### Changes do not appear

Save the file and reload the page. Try a hard reload (`Ctrl+Shift+R` in most browsers) to bypass cached files. With Live Server, confirm it is serving the `azza-portfolio` folder you edited.

### PDF does not open

Check that the PDF exists, the path and capitalization match, and the correct `reportUrl` or `pdfUrl` is set. Use a relative path such as `assets/reports/fieldsense.pdf`. Paths marked as suggestions still need a real file and matching code configuration.

## Toolkit and project interactions

Toolkit categories and technology logos are maintained in `techStack` in `script.js`. Project cards are generated from `projects`; all six projects are shown together. Hover, keyboard focus, or the project detail control reveals project information and its report status.

## Customize before publishing

- **LinkedIn:** The site links to [Azza Hamdi’s profile](https://www.linkedin.com/in/azza-hamdi-6562451b6/).
- **Contact:** The website includes contact details and a CV telephone number. Review them before publishing publicly.
- **CV:** `assets/Azza_Hamdi_CV.pdf` is present and is a French CV; consider replacing it with an English version if desired.
- **IEEE leadership:** IEEE ENIT Student Branch is an association; Azza is its current Media Manager and leads five media managers. SDC 5.0 — Media Team Lead is also current. IEEE WIE ENIT Student Branch Affinity Group — Media Manager was a previous role during the 2025 Mandate. WIE ACT 4.0, PES TGM 6.0, and TunED 8.0 are previous congress experiences.
- **Music start date:** The website uses 2015; the attached CV says 2014. Confirm the correct date before publishing.
- **Media permissions:** Share only photos, internship content, or designs that you have permission to publish.

## Publish for free

- **GitHub Pages:** Create a repository, upload the website files, and enable Pages in `Settings → Pages` using the main branch and `/ (root)`.
- **Netlify:** Drag the unzipped folder into the Netlify deploy interface.
- **Vercel:** Import the repository. This static site needs no build command.

## Main files

- `index.html` — page structure and section content
- `style.css` — typography, colors, layout, motion, and responsive styles
- `script.js` — media map, project/certificate/education/role/toolkit data, and interactions
- `assets/` — CV and asset folders for images, education, certificates, logos, and reports

The website is an original pastel editorial design with pink, butter-yellow, and lavender accents.
