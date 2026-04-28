---
title: "SenseUI — A web design assistant for blind and low vision developers"
description: "Browser extension that provides AI-assisted design feedback for web developers"
date: "03/18/2024"
image: "/senseui-portfolio.png"
tags: ["Browser Extension", "AI", "Front-end", "Project Management"]
tech: ["JavaScript", "HTML", "CSS", "Chrome Extension API"]
demoURL: "https://chromewebstore.google.com/detail/senseui/nolkkggkcmpjejlobeljmffhcmbaeflk?hl=en"
repoURL: "https://github.com/reginacas/sense-ui"
---

## What is SenseUI?

SenseUI is an open-source browser extension that gives blind and low-vision web developers real-time, actionable feedback on their web designs.

## Background and problem

While I was investigating the accessibility barriers that <i>blind and low-vision web developers</i> face when working on UI design, I found that many of them have the challengue of:
1. Applying visual styles using CSS
2. Confirming that their changes were applied
3. Getting feedback on their design decisions

In the past, they had to heavily rely on sighted colleagues, friends, family or crowd-sourcing services like BeMyEyes, which created delays and workflow interruptions. While AI has emerged as a powerful solution to this problem, current general-purpose and coding tools (ChatGPT, Copilot) are often inaccessible, provide overly vague feedback, and require repetitive, labor-intensive prompting.
Additioanlly, developers are forced to manually share screenshots and code contexts, a process that disrupts their workflow and efficency.


## Proposed solution

<img src="/src/assets/senseui-welcome.png" alt="SenseUI's welcome page opened in a browser" class="project-img">

This is what sparked the idea to create <i>the first web design focused AI tool for blind and low vision developers</i>: SenseUI, an open-source, AI-powered design tool co-designed with blind and low-vision developers. By embedding accessibility and design context directly into the tool’s architecture, SenseUI eliminates the need for sighted colleagues intervention, enabling developers to work independently, advance their careers, and participate fully in the frontend ecosystem. SenseUI is completely free to use and open to improvement suggestions and feature ideas.


## Process

To ensure SenseUI was truly effective, I employed a multi-stage, participatory methodology that blended rigorous user research with rapid, open-source development.


### 1. Understanding the user

My process began with interviews and contextual inquiries with blind and low-vision developers; observing their unique workflows when styling web projects and managing interactions and pain points with existing AI tools. These insights were materialized into design requirements.

**Participants' <i>current</i> workflow using general-purpose AI tools:**<br>
<br>
 ![Diagram showing participants' current workflow with general-purpose AI tools](src/assets/senseui-before.png)

---

**Participants' <i>ideal</i> workflow in an AI-assisted design feedback tool:**<br>
<br>
![Diagram showing participants' ideal workflow](src/assets/senseui-desired.png)<br>
<br>

### 2. Prototyping for validation

Before writing production code, I designed an inital interaction flowchart developed a non-functional Wizard-of-Oz prototype. This allowed me to simulate AI-driven design feedback in real-time. By testing this prototype with volunteers, I validated the core value proposition and established the essential feature set without committing to a premature technical architecture.

![A process flowchart showcasing the steps for the wizard-of-oz test, which included asking the user to type certain requests (visual description, issues, and recommendations), which in return would generate pre-scripted responses tailored to the user requirements gathered from previous research](src/assets/senseui-wizard.png)

### 3. Agile, co-development of SenseUI

Once the concept was validated, I shifted to implementation:

- I initialized the GitHub repository, establishing the open-source infrastructure for collaboration.
- I invited developers from the blind and low vision community to join in as either testers, contributors or simply observers.

### 4. Continuous testing

With the help of over 10 collaborators, we used the Agile framework to release every 2-3 weeks a build with a set of features to test. Each sprint culminated in a release, followed by testing phase where volunteers evaluate the tool's accessibility, utility, and AI response quality.

## Results

After 5 completed Sprints, SenseUI v1.0 is now live on the Chrome Web Store! 

<img class="project-img" alt="A screenshot showing SenseUI opened on a page, giving feedback about Regina Castro's website" src="/src/assets/senseui-description.png">


### Technical achievements

#### Context-aware automation

Unlike general-purpose AI tools, SenseUI autonomously extracts the DOM structure, CSS, and visual state of the current page. This eliminates the "extra labor" of manual screenshots and prompt engineering, allowing developers to focus on the code rather than the tooling.

<img class="project-img" alt="A screenshot showing SenseUI opened on a page, giving feedback about Regina Castro's website" src="/src/assets/senseui-issues.png">

<img class="project-img" alt="A screenshot showing SenseUI opened on a page, giving feedback about Regina Castro's website" src="/src/assets/senseui-settings.png">

#### Effective workflows for UI auditing

Users can now perform independent UI audits on their web projects; they can identify accessibility gaps, design issues and validate design decisions in real-time. By providing slash commands and buttons for common tasks, the system provides effective workflows and generates actionable feedback rather than generic suggestions.

<img class="project-img block mx-auto w-full md:w-2/3" alt="A screenshot showing SenseUI's available slash commands: /describe, /issues, /type, /color, /spacing, /alignment, /refresh, /clear" src="/src/assets/senseui-prompts.png">

#### Project-driven workflows

SenseUI supports project-level state management, allowing developers to align their codebase with project-specific design specifications and goals, bridging the gap between high-level vision and implementation.

<img class="project-img" alt="A screenshot showing SenseUI opened on a page, giving feedback about Regina Castro's website" src="/src/assets/senseui-projects.png">

## Takeaway

This project meant a lot to me, not only because I got to merge my passion for web design, accessibility, and open-source, but also because I got to collaborate with immensely talented developers who shared my enthusiasm for the potential of AI in the field of accessibility and assistive technology. The SenseUI community hopes that this tool shifts how blind and low-vision (BLV) developers approach web design and inspires similar tools to emerge.

I would like to give a shout-out to some of the most engaged people on this project; without them, it could not have turned out as well as it did:


- Paul Geoghegan
- Ángel Alcantara
- Josías Vázquez
- Muhammad Ammar Awaisi
- Anil Kumar
- Farhan Ishrak Fahim
- Alejkunkel 

## 🏛️ License

MIT
