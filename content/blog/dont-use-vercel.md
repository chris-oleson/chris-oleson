---
title: Don't Use Vercel
date: 2025-03-08
---

{{ date }}

# {{ title }}

---

## The Pipeline

Whatever complaints you might have about React, no one can deny that it is the most widely used frontend Javascript framework. For better or worse, I'm sure it will stay that way far into the future. If companies want an easy time hiring front end developers, they will hire React devs, which incentivizes new developers looking for a job to learn React, perpetuating the cycle.

These days, however, you can't just use React; are you crazy? The [React installation docs](https://react.dev/learn/creating-a-react-app){target="_blank"} recommend using Next, another Javascript framework built around React; a "meta-framework" if you will. This isn't necessarily a problem; Next is very flexible and will give you lots of different rendering options and drop-in modules for whatever functionality you need.

The one thing that does cause problems, however, is that Next is developed by Vercel, a cloud hosting company. Now, it is technically possible to deploy Next to whatever server you'd like, but Vercel markets itself to new web developers as the default way to deploy Next applications. They show off proprietary performance features like their Edge Functions™ that these developers desparately want but never actually need. So we end up with a pipeline for new developers, who will go from React to Next to Vercel, and I'd like to demonstrate that the last step in this pipeline leads to a mindset of disregard for risk in both business and engineering.

---

## Risk Management

A big part of running a business and engineering a product is risk management. This obviously takes a different form in each discipline, but the common principle is to reduce the number of things that can go wrong, and reduce the negative impact when things do go wrong.

In software engineering, it's generally a good idea to reduce your dependencies on third party libraries and services, as each one can be a [point of failure](https://en.wikipedia.org/wiki/Npm_left-pad_incident){target="_blank"}. In business, it's a wise decision to in-house as much of your supply chain as you can. If this isn't possible and you do need to use vendors, it's always best to ensure that alternatives are available in case a vendor starts to have [issues](https://en.wikipedia.org/wiki/2020%E2%80%932023_global_chip_shortage){target="_blank"}.

Vercel fits into both of these cases as a single point of failure in both software engineering and business management. It is proprietary software. You do not own it. If Vercel increases their prices, you will just have to take it until you spend the resources to migrate to another platform. If you have any backend architecture at all, it will be built and optimized for Vercel's API. Because of this, if you do decide to move away from Vercel, you will have to rebuild your entire backend. Whether you are building software, or a business, or both, you should design its components to be modular and context-agnostic. Vercel is the opposite of this, and the fact that so many new web developers consider Vercel to be the default option is going to slowly destroy that mindset of risk management.

---

## A Cool Alternative

Vercel isn't the only platform with these issues; Netlify, Heroku, AWS and others all have similar problems. I'm calling out Vercel specifically because of the aforementioned pipeline that they seem to be encouraging and profiting from. So what's the alternative, if not another proprietary cloud platform? I'm just a developer. I just want to code features, run `git push`, and see the feature on my website. I don't know much about nginx, docker, or kubernetes, and honestly I don't have the time to learn how to manage infrastructure just to get my side project on the internet. Enter [Coolify](https://www.coolify.io){target="_blank"}.

Coolify is an open source, self-hostable alternative to Vercel. Basically you just rent a VPS for around $10 a month, run a one line command to install coolify, and then you have access to a beautiful UI that allows you to deploy your apps as docker containers without touching a Dockerfile. You don't get auto-scaling kubernetes clusters, but very few people actually need those. You also don't get to pay $0 while you have no users, but your costs are reasonable and fixed, so you can actually sleep at night without worrying about waking up to a [six figure bill](https://x.com/zemotion/status/1798558292681343039){target="_blank"} caused by an infinite loop that you deployed before going to bed. Another advantage is that you can deploy as many sites as you please on the same server without your bill increasing! I personally use Coolify for all of my own websites, and I will continue to do so for the foreseeable future.

You don't have to use Coolify though. You can learn how to do everything from scratch, and there is a good argument to be made for knowing how it all works under the hood. You can even stay on Vercel if you want; who am I to tell you how to live? But I beg you to consider the real costs (not just monetary) of locking yourself into Vercel's ecosystem.
