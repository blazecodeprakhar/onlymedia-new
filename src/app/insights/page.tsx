'use client'

import React, { useEffect, useState } from 'react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { caseStudies, CaseStudy } from '@/data/caseStudies'
import { ArrowUpRight, Filter, TrendingUp } from 'lucide-react'

export default function InsightsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All')
    const [activeHash, setActiveHash] = useState<string>('')

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '')
            setActiveHash(hash)
            if (hash) {
                const element = document.getElementById(hash)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
            }
        }

        handleHashChange()
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    const filteredStudies = selectedCategory === 'All'
        ? caseStudies
        : caseStudies.filter(s => s.platform === selectedCategory)

    return (
        <main className="flex flex-col bg-beige-0 min-h-screen">
            <Navbar />

            {/* Premium Insights Hero Section */}
            <div className="pt-48 pb-16 bg-gradient-to-b from-beige-10 via-beige-0 to-beige-0 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/20 bg-accent-blue/10 text-accent-blue text-xs font-bold tracking-widest uppercase">
                        <TrendingUp className="w-3.5 h-3.5" />
                        Campaign Case Studies & Insights
                    </span>
                </div>

                <h1 className="text-[38px] sm:text-[54px] md:text-[76px] font-black leading-[1.0] tracking-[-0.03em] text-neutral-30 max-w-5xl">
                    Data-Driven Strategy <br className="hidden sm:inline" />
                    <span className="text-accent-blue italic font-serif font-normal">Real Campaign Outcomes</span>
                </h1>

                <p className="max-w-2xl mx-auto mt-6 text-lg sm:text-xl text-neutral-20 leading-[1.6]">
                    Deep dives into programmatic execution, performance media, custom targeting, and high-impact format creative results across global platforms.
                </p>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 max-w-4xl">
                    <div className="flex items-center gap-1 text-xs font-bold text-neutral-10 uppercase tracking-wider mr-2">
                        <Filter className="w-3.5 h-3.5" />
                        Platform:
                    </div>
                    {['All', 'DV360', 'Meta', 'YouTube', 'Pinterest', 'CTV / OTT', 'Prog. Video'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${selectedCategory === cat
                                    ? 'bg-neutral-30 text-white shadow-md'
                                    : 'bg-white/80 text-neutral-20 hover:bg-neutral-30 hover:text-white border border-neutral-10/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Case Studies Detail List */}
            <div className="w-full bg-beige-0 pb-32 pt-8 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto flex flex-col gap-10">
                    {filteredStudies.map((study) => {
                        const isHighlighted = activeHash === study.slug

                        return (
                            <article
                                key={study.id}
                                id={study.slug}
                                className={`scroll-mt-36 bg-white rounded-3xl p-6 sm:p-10 border transition-all duration-500 shadow-[0_4px_25px_rgba(0,0,0,0.03)] ${isHighlighted
                                        ? 'border-accent-blue ring-4 ring-accent-blue/15 shadow-2xl bg-blue-50/20'
                                        : 'border-neutral-10/15 hover:border-accent-blue/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]'
                                    }`}
                            >
                                {/* Top Brand & Platform Badge Header */}
                                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-10/10">
                                    <div className="flex items-center gap-4">
                                        {study.brandLogo ? (
                                            <div className="h-11 max-w-[160px] flex items-center shrink-0">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={study.brandLogo}
                                                    alt={study.brand}
                                                    className="max-h-full max-w-[140px] w-auto object-contain rounded-md border border-neutral-200/60 p-1.5 bg-white shadow-2xs"
                                                />
                                            </div>
                                        ) : (
                                            <h2 className="text-2xl sm:text-3xl font-black text-neutral-30 tracking-tight" style={{ color: study.brandColor || '#1A1615' }}>
                                                {study.brand}
                                            </h2>
                                        )}
                                        <div>
                                            <h2 className="text-xl sm:text-2xl font-bold text-neutral-30 tracking-tight">
                                                {study.campaign}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                                            {study.fullDetail.platformFull}
                                        </span>
                                    </div>
                                </div>

                                {/* Meta Bar: Date/Location + Headline Metric */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 bg-beige-10/50 rounded-2xl px-6 my-6 border border-beige-20">
                                    <div className="flex flex-col justify-center">
                                        <span className="text-xs font-bold text-neutral-10 uppercase tracking-widest">Market & Timeline</span>
                                        <span className="text-sm font-bold text-neutral-30 mt-0.5">{study.fullDetail.dateLocation}</span>
                                    </div>
                                    <div className="flex flex-col justify-center md:items-end">
                                        <span className="text-xs font-bold text-neutral-10 uppercase tracking-widest">Headline Outcome</span>
                                        <span className="text-xl sm:text-2xl font-black text-emerald-600 mt-0.5">{study.fullDetail.headlineMetric}</span>
                                    </div>
                                </div>

                                {/* Detailed Narrative Paragraph */}
                                <p className="text-base sm:text-lg text-neutral-20 leading-relaxed font-normal">
                                    {study.fullDetail.paragraph}
                                </p>
                            </article>
                        )
                    })}
                </div>
            </div>

            <Footer />
        </main>
    )
}
