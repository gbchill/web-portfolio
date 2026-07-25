"use client";

import React from "react";
import { useSectionInView } from "@/lib/hooks";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/motion";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section ref={ref} id="about" className="section border-b-2 border-ink">
      <SectionHeading>About</SectionHeading>

      <div className="mt-8 space-y-5 text-base leading-relaxed text-subtle">
        <Reveal delay={0.05}>
          <p>
            I&apos;m a software engineer who recently earned my Computer Science
            degree from Arizona State University. Most of my work lives across
            the full stack, from database performance and APIs to the interfaces
            people actually touch, and I care most about shipping things that
            hold up in production and make someone&apos;s day a little easier. I
            learn fastest by building, so I tend to go deep on whatever a project
            needs.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            Over the last few years I have shipped software at startups,
            nonprofits, and a Fortune 500. Early on I got deep into cloud
            infrastructure and earned my AWS Solutions Architect certification.
            At Medtronic I built a manufacturing analytics dashboard that cut
            quality investigations from hours to minutes across several
            facilities. At Opportunity Hack I helped run a scholarship platform
            that got real money into students’ hands.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <p>
            Right now I am building Racket Vision, a SaaS for racket sport shops
            that is live in production with 230+ customers and 700+ rackets
            tracked. Away from the keyboard I play guitar
            and spend most of my free time on the tennis and pickleball courts,
            which is honestly where the idea for Racket Vision came from. I am
            looking for full time software engineering roles where I can keep
            shipping and work on hard problems with people I enjoy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
