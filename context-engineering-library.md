---
layout: page
title: Context Engineering Library
description: Transcript-derived prompt library from Claude workshop examples, split into exact quoted prompts and reconstructed prompts.
permalink: /context-engineering-library/
---

Based on workshop transcript extraction, this page lists prompts used by speaker.

## Notes

- **Exact Quoted Prompts** = captured from transcript as closely as possible.
- **Approximate / Reconstructed Prompts** = inferred from transcript where wording was incomplete, noisy, or clearly paraphrased.
- Some transcript lines contain transcription errors, such as punctuation, capitalization, duplicated words, or brand/tool names. These stay preserved where possible if line was presented as direct prompt.

---

## 1) Exact Quoted Prompts

### 1.1 Basic email prompt

```text
Write an e-mail to 10K subscribers inviting them for my generative AI workshop.
```

### 1.2 Save email writing style as a skill

```text
Hey, now that you understood how I write my emails based on the prompt that I gave, I want you to remember my e-mail writing style and save that as my e-mail writing skill.
```

### 1.3 Reuse saved email skill

```text
Write this e-mail using my writing skill.
```

### 1.4 Variant: write email using saved skill

```text
Write my write an e-mail on this topic using my e-mail writing skill.
```

### 1.5 Leave email prompt

```text
Write a e-mail so that I can get a leave for the next one week.
```

### 1.6 Leave email + saved skill

```text
Write this e-mail by using my writing skill.
```

## 2) Context-Engineered Email Prompt (Quoted in Parts)

These were presented as five layers of context and together form structured prompt.

### 2.1 Identity context

```text
You're a casual warm newsletter writer. Write like a smart friend sharing an opportunity, not a marketer.
```

### 2.2 World context

```text
My 100K subscribers of Staying Ahead newsletter are Indian professionals who tried AI but don't use AI at work consistently. They fear of falling behind.
```

### 2.3 Task context

```text
Invite them to the free live generative web show this Saturday, 11 AM IST. Hook: Save two hours daily using AI, not recorded. Registration link: outskill.com.
```

### 2.4 Example context — good example

```text
Feels like a friend texting about something useful. Short paragraphs, one CTA, repeat it twice.
```

### 2.5 Example context — bad example

```text
Event poster energy, should not feel like someone is reading an event poster. No bullet point agendas, no fancy words like unlock and freedom and transform.
```

### 2.6 Constraint context

```text
Keep it under 200 words. Subject line under 10 words. No bullet points. Keep it first person.
```

## 3) Deep Research Prompt

### 3.1 LATAM market research

```text
You're an expert management consultant who does extensive research on any topic using the best frameworks. Do research on a tech LATAM countries and see how well out skill can do. If we launch AI courses in LATAM Latin America, which is Brazil, Mexico, Peru, all those countries also do some research on changes we'll have to make in out skill offerings to win the LATAM market. Make sure all of this is as detailed as possible.
```

## 4) Social Research Prompt

### 4.1 X / Twitter sentiment research

```text
You're an expert social media researcher who analyzes real time public sentiment and conversations on X Search X and tell me what people are currently saying about Claude versus ChatGPT versus Grok. Find the top creators, common complaints, rising expectations, language people are posting in. Give me raw quotes, handles and patterns, not just summary.
```

## 5) Presentation Generation Prompts

### 5.1 Presentation generation prompt

```text
You are an expert when it comes to crafting incredible presentations, which is extremely data rich. You have the skill to not only write the presentation but also design the presentation. So use your PPT skill to be able to make this presentation. And I want you to create a presentation based on the research that I'm going to share with you below. I just want it to be like 5 slides where you capture everything in the best way possible for me.
```

### 5.2 Presentation skill instruction

```text
Use the presentation skill to make the presentation.
```

## 6) Data Analysis Prompts

### 6.1 Dataset analysis prompt

```text
You're a strategy consultant. Examine the uploaded data set and identify top four to five strategic questions that a Ceasefood executive must want them to be answered. Start by accessing the data and then identify one governing question.
```

### 6.2 Spreadsheet formula prompt

```text
I want the info present in F2G2H2I2 and J2 to be put together in one line which spaces between them.
```

### 6.3 Spreadsheet sentiment classification prompt

```text
Read the review and tell me if it's positive, negative or neutral.
```

## 7) NotebookLM / Learning Prompts

### 7.1 Topic prompt

```text
How does AI actually work.
```

### 7.2 Variant from transcript

```text
I want to learn about how does AI actually work.
```

## 8) Website / Landing Page Prompts

### 8.1 Landing page prompt

```text
Build a single page website for out skill lat am launch and AI boot camp program in Spanish and Portuguese speaking people. And here's all the stuff I said use this font dark background, light green accent make it feel premium.
```

### 8.2 Landing page designer prompt fragment

```text
Then expert landing page designer who builds high converting landing pages for AI education.
```

### 8.3 Website prompt fragment captured in transcript

```text
build a website using using clod or in this case, build a website not using clod so much.
```

### 8.4 Ask for desktop version

```text
can you also make the desktop variant of this?
```

## 9) Resume / Job Search Prompts

### 9.1 Resume tailoring prompt

```text
rewrite my resume so that it matches the job description and I get a shot at the interview.
```

### 9.2 Resume personalization prompt

```text
personalize my resume for the above 4 job roles.
```

### 9.3 Export format request

```text
give it to me as a PDF
```

## 10) Long Transcript-to-Roadmap Prompt

### 10.1 Folder / transcript analysis prompt

```text
Hey, I want you to go through the folder that I've given you access to, which is the Lenny's Podcast Transcripts archive. Inside of that folder, there are a bunch of transcripts of Lenny's podcast with a lot of incredible people. You see all the podcasts are on AI or are about AI. And what I want to learn from all these podcasts is I don't have the time to watch all the podcasts. So I've got you all the transcripts. You can read all the transcripts, understand what's in the broadcast, and give me one final road map from all these files on how I can implement AI inside of my company. I understand AI really well, but I need some ideas. I'm sure a lot of ideas were shared inside of this podcast. I want you to read up all the transcripts, understand what is covered by all these top people, and build me a road map of implementing AI inside of my company. And every time you talk about a tactic, make sure you mention who recommended it and give me like a road map document that I could basically use. In fact, don't just give me a road map document. Convert that into A5 slide presentation for me, which I could just skim through and in a way do a presentation with all my leadership as well with the presentation skill.
```

### 10.2 Branding instruction for the deck

```text
convert this into presentation in black and neon green premium design which matches out skill.com branding.
```

## 11) Approximate / Reconstructed Prompts

These were described in transcript, but not always shown cleanly as exact quoted prompts.

### 11.1 Multi-model comparison

```text
Send the same prompt to GPT 5, ChatGPT, Claude 4, DeepSeek-R1, Gemini 3.1 Pro, Opus 4.6 for comparison.
```

### 11.2 Model council workflow

```text
Select GPT 5.4, Gemini 3.1 Pro, Opus 4.6; send same prompt; models work, debate, output agreements/disagreements/unique discoveries.
```

### 11.3 Job search with Indeed connector

```text
look up for these jobs on Indeed using the connector
```

### 11.4 Convert research into presentation

```text
Can you convert this into a presentation?
```

### 11.5 Design iteration feedback

```text
change this, change that, modify this, modify that
```

### 11.6 Generate a podcast-style explanation

```text
generate a podcast for me on this topic specialized for me
```

### 11.7 Generate a video lesson

```text
the kind of video that I want
```

## 12) Suggested Cleanup Notes for Repo Maintainers

If you plan to reuse these prompts in production:

- Fix obvious transcription errors such as:
  - `out skill` → `OutSkill`
  - `clod` / `cloud` where context suggests `Claude`
  - `Ceasefood` if this was actually different company or entity
- Consider maintaining two versions:
  - **raw-transcript-prompts.md** — preserve transcript wording
  - **cleaned-prompts.md** — grammar-corrected, reusable versions
- Keep exact vs reconstructed prompts separate so quoted transcript content does not get mixed with edited prompt templates.

## 13) Quick Reusable Set

If you only want most useful prompts to keep:

- Email invite prompt
- Save writing style as skill prompt
- LATAM deep research prompt
- X/Twitter social research prompt
- Presentation generation prompt
- Data analysis prompt
- Spreadsheet sentiment prompt
- Website landing page prompt
- Resume tailoring prompt
- Long transcript-to-roadmap prompt
