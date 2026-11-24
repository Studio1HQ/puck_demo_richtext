<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/puck_demo_richtext.webp" alt="Rich Text Editor with Puck: A constrained, extensible rich text field built with Puck and TipTap" width="100%" />

<br />
<br />

# Rich Text Editor with Puck

### A constrained, extensible rich text field built with Puck and TipTap

A Next.js demo of Puck's richtext field. It restricts formatting options, limits headings to H1 and H2, and adds a custom TipTap Superscript extension with its own toolbar control.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)
[![Built with Puck](https://img.shields.io/badge/Built_with_Puck-141414?style=for-the-badge)](https://puckeditor.com)

[Puck docs](https://puckeditor.com/docs) &nbsp;·&nbsp; [Puck](https://puckeditor.com) &nbsp;·&nbsp; [More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

This demo shows how to build a rich text editor in a React app from configuration instead of raw HTML strings and hand-wired editor code. It uses the `richtext` field type in [Puck](https://puckeditor.com), the open-source visual editor for React, which runs on top of the [TipTap](https://tiptap.dev) engine.

It is aimed at developers who want to control what content editors can do: which formatting is allowed, which heading levels exist, and which extra TipTap extensions show up in the toolbar.

## Features

- **Structured content**: rich text is defined as a Puck field in `puck.config.tsx`, not as raw HTML.
- **Controlled formatting**: formatting options such as bold can be disabled, and headings are restricted to H1 and H2.
- **Inline and sidebar editing**: the rich text field can be edited directly on the canvas or from the sidebar.
- **Custom toolbar**: the toolbar is rendered with `RichTextMenu`, so you can add your own groups and controls.
- **Custom TipTap extension**: a Superscript extension is registered through the field's `tiptap` option.
- **Publish and render**: edited pages are saved and rendered on the main page.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) 16, React 19 |
| Visual editor | [Puck](https://puckeditor.com) (`@puckeditor/core`) |
| Rich text engine | [TipTap](https://tiptap.dev) (`@tiptap/extension-superscript`) |
| AI plugin | `@puckeditor/plugin-ai`, `@puckeditor/cloud-client` |
| Icons | [Lucide](https://lucide.dev) |
| Language | TypeScript |

## Getting started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/Studio1HQ/puck_demo_richtext.git
cd puck_demo_richtext
npm install
```

### Environment variables

Copy `.env.example` to `.env.local` and fill in the value.

| Variable | Description |
| --- | --- |
| `PUCK_API_KEY` | Puck API key used by the AI handler. See [Puck AI getting started](https://puckeditor.com/docs/ai/getting-started#generate-an-api-key). |

### Run

```bash
npm run dev
```

Then:

1. Open the editor at [http://localhost:3000/edit](http://localhost:3000/edit).
2. Edit content with the rich text editor.
3. Publish your changes.
4. View the rendered output on [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build` and `npm run start`.

## How it works

Almost all behavior lives in `puck.config.tsx`. It defines two components: a plain `HeadingBlock` as a baseline, and a `RichTextBlock` with a `richtext` field. That field adds the Superscript extension through the `tiptap` option, exposes its state through a `selector`, and uses `renderMenu` to add a Superscript button to the toolbar.

```text
puck.config.tsx        Editor and rich text configuration
app/puck/              Puck editor route
app/[...puckPath]/     Rendered page routes
app/page.tsx           Rendered page output
app/api/puck/          Puck AI handler (puckHandler)
app/api/pages/         Page save endpoint
database.json         Saved page data
```

To extend the demo, add more TipTap extensions, add more editor constraints, try other toolbar layouts, or add persistence or collaboration.

## Resources

- [Puck documentation](https://puckeditor.com/docs): field types, rich text and AI.
- [Puck](https://puckeditor.com): the visual editor for React.
- [TipTap documentation](https://tiptap.dev/docs): extensions and the editor API.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams. Made with [Puck](https://puckeditor.com).<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
