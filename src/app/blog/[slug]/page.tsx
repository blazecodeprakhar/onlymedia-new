'use client'

import React from 'react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Calendar, Clock, User, ArrowLeft, ChevronRight } from "lucide-react"
import SmoothLink from "@/components/SmoothLink"
import { notFound } from 'next/navigation'

// ─── Blog Data ────────────────────────────────────────────────────────────────
const POSTS: Record<string, {
    id: number
    title: string
    date: string
    readTime: string
    category: string
    author: string
    intro: string
    sections: {
        heading?: string
        body?: string
        items?: { label: string; text: string }[]
        table?: { headers: string[]; rows: string[][] }
        highlight?: { bad?: string; good?: string }
        note?: string
    }[]
    conclusion: string
}> = {
    'setting-smart-kpis': {
        id: 1,
        title: "Setting SMART KPIs for Your Digital Media Campaigns",
        date: "September 4, 2025",
        readTime: "5 min read",
        category: "Strategy",
        author: "OnlyMedia Team",
        intro: "Running a digital media campaign without clear KPIs is like sailing without a compass — you might move, but you won't know if you're headed in the right direction. Key Performance Indicators (KPIs) act as benchmarks for success, ensuring that every click, impression, and conversion serves a business goal. But not all KPIs are created equal. To truly drive measurable growth, your KPIs need to be SMART — Specific, Measurable, Achievable, Relevant, and Time-bound.",
        sections: [
            {
                heading: "Why KPIs Matter for Digital Media Campaigns",
                body: "Digital campaigns generate mountains of data — click-through rates, impressions, conversions, and more. But data without direction creates noise, not insight.",
                items: [
                    { label: "Alignment", text: "They align marketing efforts with business objectives" },
                    { label: "Clarity", text: "They provide clarity for teams and stakeholders" },
                    { label: "Optimization", text: "They enable real-time optimization" },
                    { label: "Accountability", text: "They ensure ROI accountability" },
                ],
                note: "Without KPIs, campaigns risk chasing vanity metrics instead of meaningful results."
            },
            {
                heading: "What Makes a KPI \"SMART\"?",
                body: "The SMART framework transforms vague ambitions into actionable targets:",
                items: [
                    { label: "Specific", text: "Clear and unambiguous" },
                    { label: "Measurable", text: "Quantifiable to track progress" },
                    { label: "Achievable", text: "Realistic within given resources" },
                    { label: "Relevant", text: "Directly tied to business outcomes" },
                    { label: "Time-bound", text: "Defined within a set timeframe" },
                ],
                highlight: {
                    bad: "Poor KPI: \"Increase brand awareness.\"",
                    good: "SMART KPI: \"Increase branded search volume by 20% within 3 months.\""
                }
            },
            {
                heading: "Common Digital Media KPIs",
                body: "Your KPIs should map to the marketing funnel stage and overall business goals:",
                items: [
                    { label: "Awareness Stage", text: "Impressions, Reach, Video Views — use for launch campaigns and brand building." },
                    { label: "Consideration Stage", text: "CTR, Engagement Rate, Traffic Volume — use for driving site traffic and generating interest." },
                    { label: "Conversion Stage", text: "Cost Per Acquisition (CPA), Conversion Rate, ROAS — use for sales-driven campaigns." },
                ]
            },
            {
                heading: "How to Set SMART KPIs: Step-by-Step",
                items: [
                    { label: "1. Start with Business Objectives", text: "Example: Increase online sales by 15% in Q4." },
                    { label: "2. Break Down into Media Metrics", text: "Which metrics influence sales? CTR, conversion rate, CPA." },
                    { label: "3. Apply SMART Criteria", text: "Specific — CTR from 1.5% to 2.5%. Measurable — via platform analytics. Achievable — based on history. Relevant — CTR impacts sales. Time-bound — within 6 weeks." },
                    { label: "4. Align to Funnel Stages", text: "Don't measure conversions on an awareness campaign." },
                    { label: "5. Set Benchmarks", text: "Use past campaign data, industry averages, and competitor insights." },
                    { label: "6. Monitor & Optimize", text: "KPIs aren't static. If CTR lags, tweak creatives, audience, or placements." },
                ]
            },
            {
                heading: "Tools to Track KPIs",
                items: [
                    { label: "Google Analytics", text: "Website traffic, conversions" },
                    { label: "Google Ads / Meta Ads Manager", text: "CTR, CPC, ROAS" },
                    { label: "Looker Studio / Power BI", text: "Custom dashboards for cross-channel KPIs" },
                    { label: "Affiliate Tracking Tools", text: "For CPA and performance campaigns" },
                ]
            },
            {
                heading: "Mistakes to Avoid",
                items: [
                    { label: "Too Many KPIs", text: "Focus on the 3–5 that matter most." },
                    { label: "Ignoring Funnel Stage", text: "Awareness ≠ Conversion KPIs." },
                    { label: "Unrealistic Goals", text: "\"Double sales in 10 days\" is not practical." },
                    { label: "Not Updating Post-Launch", text: "Campaign dynamics change; adjust accordingly." },
                ]
            },
            {
                heading: "Sample SMART KPI Table",
                table: {
                    headers: ["Objective", "KPI", "Target", "Timeline"],
                    rows: [
                        ["Drive awareness for new product", "Impressions", "1M impressions", "30 days"],
                        ["Increase engagement", "CTR", "From 1.2% to 2%", "6 weeks"],
                        ["Boost sales", "ROAS", "4:1 ratio", "3 months"],
                    ]
                }
            },
        ],
        conclusion: "Setting SMART KPIs transforms your digital media campaigns from trial-and-error experiments into data-driven growth engines. They provide clarity, accountability, and a roadmap for optimization. If your current campaigns lack measurable goals, now is the time to fix that. Define SMART KPIs and watch how much more efficient your media spend becomes."
    },

    'custom-media-plan': {
        id: 2,
        title: "Why Your Business Needs a Custom Media Plan (and How to Get One)",
        date: "September 4, 2025",
        readTime: "4 min read",
        category: "Planning",
        author: "OnlyMedia Team",
        intro: "In an age where generic, one-size-fits-all media approaches underperform, a custom media plan tailored precisely to your brand's objectives, audience, and budget is no longer a luxury — it's essential. Here's why and how to build one that truly works for you.",
        sections: [
            {
                heading: "1. Tailored Strategy Over Generic Tactics",
                body: "A custom media plan aligns every tactical choice — channels, timing, messaging — with your unique business goals. Unlike plug-and-play models, this is a blueprint built for your brand's context: your customers, your seasonality, your performance benchmarks. Media planning defines who to target, where to reach them, and what message to deliver — and a custom plan ensures each variable maps directly to your growth needs.",
            },
            {
                heading: "2. Efficient Budget Use Through Smarter Allocation",
                body: "A custom media plan protects your resources from waste and over- or under-delivery. Standard models apply rigid budgets per channel, making optimization hard during campaign runs. A custom plan remains flexible and dynamic, adapting allocation to performance in real time. This flexibility ensures you're always investing where efficiency and impact intersect.",
            },
            {
                heading: "3. Audience Insight, Not Assumption",
                body: "Generic plans assume cookie-cutter audiences. A custom plan dives deep — defining demographic, behavioral, and psychographic segments that truly matter to your brand. Understanding where your audience is, how frequently they engage, and on what platforms is vital. These insights elevate your targeting beyond guesswork and help optimize creative resonance.",
            },
            {
                heading: "4. Strategic Timing: Flighting, Pulsing, or Always-On?",
                body: "A one-size-fits-all approach may miss seasonal spikes or campaign-worthy moments. Custom plans let you define your strategy:",
                items: [
                    { label: "Continuous", text: "Ideal for brands with steady demand (e.g., subscription services)" },
                    { label: "Flighting", text: "Works best for seasonal products or one-time campaigns" },
                    { label: "Pulsing", text: "Combines sustained presence with strategic boosts during key periods" },
                ]
            },
            {
                heading: "5. Clarity Through Measurement & Optimization",
                body: "With your custom media plan, each campaign is measurable, accountable, and optimized. Media plan frameworks outline the right KPIs, then measure performance across reach, frequency, conversions, and ROI. This clarity enables real-time optimization and strategic adjustment — something generic models often lack.",
            },
            {
                heading: "6. Future-Proofed via Iteration",
                body: "Only a custom plan evolves. Through regular review of past performance, audience shifts, and market trends, your strategy strengthens — not stagnates. Add agile creative testing, channel reallocation, and message refinement, and your investment becomes future-ready.",
            },
            {
                heading: "How to Build Your Custom Media Plan",
                items: [
                    { label: "1. Define Clear Objectives", text: "Set SMART goals — awareness, lead generation, conversions — aligned with revenue or retention." },
                    { label: "2. Conduct Market & Audience Research", text: "Know your landscape and customer habits — where they listen, what they watch, how they act." },
                    { label: "3. Choose Your Media Mix", text: "Plan around platforms where your audience spends time — digital, social, native, programmatic." },
                    { label: "4. Set Reach & Frequency Goals", text: "Establish how often you want to reach your audience and how many impressions drive action." },
                    { label: "5. Allocate Budget Flexibly", text: "Prioritize high-performing channels but keep room to pivot based on campaign learnings." },
                    { label: "6. Develop Creative Messaging", text: "Tailor content to visitor intent and media formats — snappy visuals for social, long-form for search." },
                    { label: "7. Implement, Monitor & Optimize", text: "Use live dashboards, adjust bids, tweak messaging, shift budgets — always be refining." },
                    { label: "8. Review & Iterate", text: "Post-campaign, analyze what worked, then fold insights into the next cycle." },
                ]
            },
            {
                heading: "Quick Summary",
                table: {
                    headers: ["Benefit of Custom Plan", "Why It Matters"],
                    rows: [
                        ["Alignment to brand objectives", "Drives impact — not just effort"],
                        ["Efficient budget allocation", "Maximizes ROI"],
                        ["Accurate audience targeting", "Minimizes wasted impressions"],
                        ["Strategic timing flexibility", "Matches demand with attention peaks"],
                        ["Measurable performance signals", "Enables ongoing optimization"],
                        ["Continuous improvement", "Keeps strategy fresh and relevant"],
                    ]
                }
            }
        ],
        conclusion: "A custom media plan transforms media spend from a cost center into a growth engine. It ensures you reach the right people, with the right message, at the right time — and measure it all with purpose. Ready to build one for your brand? Let's talk."
    },

    'data-driven-media-strategy': {
        id: 3,
        title: "The Ultimate Guide to Developing a Data-Driven Media Strategy",
        date: "September 4, 2025",
        readTime: "6 min read",
        category: "Analytics",
        author: "OnlyMedia Team",
        intro: "In today's digital-first world, gut-driven campaigns no longer cut it. A smart media strategy leverages real-time insights to align every placement with your business goals. Data-driven efforts outperform traditional methods, often delivering 5× to 8× higher ROI.",
        sections: [
            {
                heading: "1. Start with Clear Objectives",
                body: "Success begins with clarity. Define what you want to achieve — brand awareness, lead generation, or sales growth. Tie media goals directly to business outcomes: revenue, retention, or customer Lifetime Value.",
            },
            {
                heading: "2. Centralize & Collect Quality Data",
                body: "Collecting relevant, high-quality data — from CRM systems, web analytics, social metrics, to behavioral insights — is critical. The goal is not data for data's sake, but to inform decisions.",
            },
            {
                heading: "3. Build Your Audience Intelligence",
                body: "Unified data across channels creates precise audience segments:",
                items: [
                    { label: "Demographics", text: "Age, location, income — foundational segmentation" },
                    { label: "Behavior", text: "How users interact with your brand across touchpoints" },
                    { label: "Engagement History", text: "Past interactions that signal purchase intent" },
                ],
                note: "These insights let you tailor content and refine targeting with surgical precision."
            },
            {
                heading: "4. Forecast & Plan Proactively",
                body: "Leverage predictive analytics and modeling to forecast campaign outcomes, optimize budget allocation, and plan around seasonality and market shifts. This approach is proactive — not purely reactionary.",
            },
            {
                heading: "5. Activate Across the Right Channels",
                body: "Media works best when coordinated across the full ecosystem using the PESO model:",
                items: [
                    { label: "Paid", text: "Meta, Google, DV360 — targeted reach and retargeting" },
                    { label: "Owned", text: "Web, email, social — your controlled properties" },
                    { label: "Shared", text: "Social engagement, community-driven content" },
                    { label: "Earned", text: "Press coverage, organic reviews, referrals" },
                ],
                note: "The PESO model ensures media is not siloed, but orchestrated for impact."
            },
            {
                heading: "6. Visualize & Interpret Insights",
                body: "Data without clarity is noise. Use effective visual storytelling — match formats to your audience's knowledge level, prioritize relevance over complexity, and narrate insights, not just numbers.",
            },
            {
                heading: "7. Attribution That Reflects Reality",
                body: "Instead of last-click bias, invest in data-driven attribution models. Machine learning lets you assign appropriate credit across touchpoints, revealing what truly drives conversion.",
            },
            {
                heading: "8. Iterate, Refine, Improve",
                body: "Campaigns must never be \"set and forget.\" Continuously revisit performance metrics, segment shifts, creative resonance, and ROI per touchpoint. Let insights guide adaptations in real time.",
            },
            {
                heading: "9. Encourage a Data-Driven Culture",
                body: "Even the best strategies fail without organizational buy-in. A healthy data culture empowers every team member to use metrics for decisions — empowering growth, not just execution.",
            },
            {
                heading: "Quick Reference",
                table: {
                    headers: ["Phase", "Activity", "Purpose"],
                    rows: [
                        ["Define Goals", "Set clear objectives", "Align media with business outcomes"],
                        ["Collect Data", "Centralize insights", "Build a single source of truth"],
                        ["Segment Intelligence", "Audience profiling", "Tailored targeting and creative insight"],
                        ["Predict & Plan", "Forecast, budget", "Preemptive optimization"],
                        ["Multi-Channel Activation", "PESO framework", "Holistic media orchestration"],
                        ["Visualization", "Clarity-driven storytelling", "Decision-friendly insight delivery"],
                        ["Attribution", "ML-driven credit assignment", "Understand true impact"],
                        ["Iteration", "Test, tweak, repeat", "Continuous performance improvements"],
                        ["Culture Building", "Team-wide data fluency", "Sustained strategic wins"],
                    ]
                }
            }
        ],
        conclusion: "A data-driven media strategy isn't an optional upgrade — it's essential. By combining clear goals, integrated data, predictive models, cross-channel execution, and a data-first culture, brands can ensure media investments drive real business outcomes."
    }
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params)
    const post = POSTS[slug]
    if (!post) notFound()

    return (
        <main className="flex flex-col bg-beige-0 min-h-screen">
            <Navbar />

            {/* Hero */}
            <div className="pt-40 pb-16 px-6 bg-gradient-to-b from-blue-10 via-beige-10 to-beige-0">
                <div className="max-w-4xl mx-auto">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-neutral-10 mb-8">
                        <SmoothLink href="/blog" className="hover:text-accent-blue transition-colors flex items-center gap-1">
                            <ArrowLeft className="w-4 h-4" />
                            Blog
                        </SmoothLink>
                        <ChevronRight className="w-4 h-4 opacity-40" />
                        <span className="text-accent-blue font-semibold">{post.category}</span>
                    </div>

                    {/* Category pill */}
                    <span className="inline-flex px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6">
                        {post.category}
                    </span>

                    {/* Title */}
                    <h1 className="text-[32px] sm:text-[40px] md:text-[52px] font-black leading-[1.1] tracking-[-0.03em] text-neutral-30 mb-6">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-5 text-sm text-neutral-10 pb-8 border-b border-neutral-10/10">
                        <span className="flex items-center gap-1.5">
                            <div className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center">
                                <User className="w-4 h-4 text-accent-blue" />
                            </div>
                            <span className="font-semibold text-neutral-30">{post.author}</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </span>
                    </div>
                </div>
            </div>

            {/* Article Body */}
            <article className="w-full px-6 py-16 bg-beige-0">
                <div className="max-w-4xl mx-auto">

                    {/* Intro */}
                    <p className="text-lg md:text-xl text-neutral-20 leading-[1.8] mb-12 font-normal">
                        {post.intro}
                    </p>

                    {/* Sections */}
                    {post.sections.map((section, i) => (
                        <div key={i} className="mb-12">
                            {section.heading && (
                                <h2 className="text-2xl md:text-3xl font-bold text-neutral-30 mb-4 tracking-tight">
                                    {section.heading}
                                </h2>
                            )}

                            {section.body && (
                                <p className="text-neutral-20 leading-[1.8] mb-5 text-base md:text-lg">
                                    {section.body}
                                </p>
                            )}

                            {section.items && (
                                <ul className="space-y-3 mb-5">
                                    {section.items.map((item, j) => (
                                        <li key={j} className="flex gap-3 items-start">
                                            <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-blue flex-shrink-0" />
                                            <span className="text-neutral-20 leading-relaxed text-base md:text-lg">
                                                <strong className="text-neutral-30 font-semibold">{item.label}:</strong>{" "}
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {section.highlight && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                                    {section.highlight.bad && (
                                        <div className="bg-red-50 border border-red-200/60 rounded-2xl p-5">
                                            <span className="text-red-500 font-bold text-lg mr-2">❌</span>
                                            <span className="text-neutral-20 text-sm">{section.highlight.bad}</span>
                                        </div>
                                    )}
                                    {section.highlight.good && (
                                        <div className="bg-green-50 border border-green-200/60 rounded-2xl p-5">
                                            <span className="text-green-600 font-bold text-lg mr-2">✅</span>
                                            <span className="text-neutral-20 text-sm">{section.highlight.good}</span>
                                        </div>
                                    )}
                                </div>
                            )}

                            {section.note && (
                                <div className="bg-blue-10/60 border-l-4 border-accent-blue rounded-r-2xl p-5 my-5">
                                    <p className="text-accent-blue font-semibold text-sm">{section.note}</p>
                                </div>
                            )}

                            {section.table && (
                                <div className="overflow-x-auto rounded-2xl border border-neutral-10/20 mb-4">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-accent-blue/5">
                                                {section.table.headers.map((h, k) => (
                                                    <th key={k} className="text-left px-5 py-4 text-accent-blue font-bold text-xs uppercase tracking-wider border-b border-neutral-10/15">
                                                        {h}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section.table.rows.map((row, k) => (
                                                <tr key={k} className={k % 2 === 0 ? 'bg-white' : 'bg-beige-10/40'}>
                                                    {row.map((cell, l) => (
                                                        <td key={l} className="px-5 py-4 text-neutral-20 border-b border-neutral-10/10 last:border-b-0 leading-snug">
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Conclusion */}
                    <div className="mt-12 p-8 md:p-10 bg-gradient-to-br from-blue-10 to-beige-10 rounded-3xl border border-blue-20/40">
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-30 mb-4">Conclusion</h2>
                        <p className="text-neutral-20 leading-[1.8] text-base md:text-lg">{post.conclusion}</p>
                    </div>

                    {/* Back navigation */}
                    <div className="mt-16 pt-8 border-t border-neutral-10/15 flex justify-between items-center">
                        <SmoothLink
                            href="/blog"
                            className="flex items-center gap-2 text-accent-blue font-bold hover:gap-4 transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            All Blogs
                        </SmoothLink>
                        <SmoothLink
                            href="/contact"
                            className="px-6 py-3 bg-accent-blue text-white rounded-full font-bold text-sm hover:bg-neutral-30 transition-colors duration-300"
                        >
                            Work With Us
                        </SmoothLink>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    )
}
