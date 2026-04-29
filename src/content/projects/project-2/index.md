---
title: "Smart Workflows — Simplifying complex scientific workflows creation"
description: "An interactive, engaging UI component for Beckman Coulter Life Sciences' scientific application workflows."
date: "2024-03-26"
image: "/astro-nano.png"
tags: ["UX", "Data Visualization", "Scientific Workflow"]
demoURL: "https://astro-nano-demo.vercel.app"
repoURL: "https://github.com/markhorn-dev/astro-nano"
---

## Summary

At Beckman Coulter Life Sciences, scientific workflows are one of the key elements of our resource pages. They help point customers towards instruments from our portfolio that best match their laboratory needs. However, the method for displaying these workflows was ineffective and technologically stagnant. By bridging the gap between UX research and frontend implementation, I built a code-driven UI component system, reduced development time and unified the brand’s workflows across our website.

- **The challenge:** Translating highly domain-specific, complex user needs into an intuitive, modular and flexible frontend solution which could be easily re-used by other designers and managers.

- **The stack:** Vanilla JavaScript, Semantic HTML5, CSS, and accessibility-first architecture.

- **Outcome:** Created a re-usable UI component and a tool for generating them without coding, now used by Digital Experience Managers globally.


## 👩🏻‍💻 My role
I was the sole designer and developer of SenseUI, responsible for all aspects of the project, from user research, design and the core development. I also led the community engagement efforts, recruiting volunteers for testing and co-development.

## The problem

Through an internal audit, I identified that our workflow visualizations were stuck in a cycle of inefficiency:

- The Digital Experience team previously relied on static workflow diagrams (PNGs) to communicate complex scientific processes. They weren't searchable (poor SEO), were completely inaccessible to screen readers, and forced users to "click-to-zoom" to see any detail.

- This experience lacked engagement and failed to provide direct conversion paths like integrated product links or contextual tooltips.

- No semantic data for search engines and poor mobile responsiveness that failed to meet modern Core Web Vital standards.

To solve the "static" problem, the team had started building workflows using code to increase engagement. While moving toward code-based workflows was a step in the right direction, the lack of a formal design system introduced a new layer of technical complexity and compromised our user experience:

- Digital experience managers were forced to "copy-paste" code for every new diagram, leading to a tedious, manual process that wasted significant working hours.

- These implementations lacked mobile responsiveness and suffered from inconsistent CSS, causing layout shifts and broken experiences on smaller screens.

- A lack of visual consistency in layout, graphic elements and color that undermined our professional reputation as a technical authority in Life Sciences.

## The goal

To address the current challenges, I proposed unifying and standardizing our workflow designs. By creating a cohesive visual and interaction pattern that is both informative and engaging, I aimed to improve the overall user experience across our digital platforms. This initiative supports showcasing our commitment to innovation and technological leadership while enhancing usability and consistency.

The goals of the project were to:
- Increase user engagement on Resource pages.
- Modernize and unify the visual design of workflows across the site.
- Improve conversion rates by helping users discover relevant products through intuitive workflow navigation.
-	Streamline workflow creation for Digital Experience Managers (DXMs) so any collaborator can build a high-performance, responsive, and accessible workflow without writing a single line of code.

## Research phase

Before starting to design or code, I needed to understand the complexity of the problem and our users' needs. I conducted:

- Internal Audit: An audit of existing workflows was conducted to assess their current state and identify areas for improvement. Screenshots of live workflows were collected and organized on a Miro board. Workflows were grouped by visual style and analyzed using a SWOT framework. The key issues identified were lack of responsivity, legibility issues violating accessibility standards, information overload, cognitive overload and visual inconsistency.

- Competitive Analysis: I analyzed how competitors handled workflow visualization, noting that most had a modular approach for better scalability and responsiveness. This also allowed for seamless addition or removal of steps depending on the specific workflow.

- Expert Interviews: I interviewed internal stakeholders who had scientific backgrounds and regularly interacted with customers, or even had been customers themselves. The goal was to gather qualitative insights into how our current workflows are perceived by our target audience and how they could be improved. 
I translated these interviews into a set of Functional Requirements, ensuring the final component could handle everything from simple 3-step processes to complex, multi-branch laboratory protocols.

## The solution: Architecting the workflow component

1. Systemic Design: I designed a system in Figma that mirrored the eventual technical functionality.

2. Modular Steps: Designed a "Step Indicator" system that could toggle between numbers or scientific icons.

3. Visual Hierarchy: Created a clear distinction between the "Active Step," "Sub-steps," and "Associated Products" to prevent cognitive overload.

### Engineering for Scale & Performance

The implementation focused on technical polish and scalability:

- CSS Variable Architecture: I used CSS variables for theming, ensuring that if the brand colors updated, the entire library of workflows could be updated from a single global file rather than hunting through hundreds of manual code snippets.

- Mobile-First Responsiveness: I replaced the broken legacy layouts with a robust CSS Flexbox implementation that automatically stacks elements on mobile, ensuring scientific data remains legible on any device.

- Accessibility (WCAG 2.1): I implemented semantic HTML5 and ARIA labels. I ensured that the interactive "Step Indicators" were fully keyboard-navigable, a critical requirement for our ADA compliance goals.

