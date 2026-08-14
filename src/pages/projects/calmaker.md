---
layout: ../../layouts/ProjectLayout.astro
title: Calmaker
links:
  - label: Calmaker
    url: https://calendar.unwieldycat.com/
  - label: GitHub
    url: https://github.com/unwieldycat/calmaker
---

Calmaker is a calendar generator I built to export time tables from my school's
Workday SIS into a standard `.ics` file that can be imported into any calendar
application.

## Motivation

I built this because digital calendars are awesome, and Workday (to my
knowledge) has no way to export your class schedule to one. Making calendar
events for long-lived recurring events is annoying, especially if your schedule
changes, so I made a tool to automate it. It's the classic tale of spending 10
hours to automate a 10 minute task - except I probably spent quite a bit more
time on it than that.

## Personal Remarks

This app was my first real React project, and I learned a lot about React and
the React ecosystem while building it. Vite is _soooo_ nice to work with. I had
held off learning React earlier due to how intimidating the tooling was with
tools like Webpack, and how flaky create-react-app seemed to be.

The importance of thorough testing - both automated and manual - also became
very clear to me while developing Calmaker. In the first release of the app, the
calendar output had not been configured to account for daylight savings time.
Even better, I had not noticed this until a bunch of people had already used it.
Whoops. To prevent future regressions, I implemented automated testing with
Vitest and was able to fix all the issues with the tool.

Finally, I have so much respect for devs who deal with dates, time, and
"standard" formats that aren't so standard in practice. By far the biggest pain
point in this project was just creating the ics file. There were so many strange
behaviors that would happen on certain calendar platforms as a result of
slightly misconfiguring the ics. Timezones and daylight savings also kept biting
me in all sorts of frustrating ways, where the first/last day of events just
wouldn't be correct, or alternate schedule days wouldn't generate properly.
