'use client'

import React, { useEffect, useState } from 'react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { caseStudies, CaseStudy } from '@/data/caseStudies'
import { ArrowUpRight, Filter, TrendingUp, ZoomIn, X } from 'lucide-react'

export default function InsightsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All')
    const [activeHash, setActiveHash] = useState<string>('')
    const [activeZoomImage, setActiveZoomImage] = useState<{ src: string; title: string; brand: string; metric: string } | null>(null)

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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveZoomImage(null)
            }
        }

        if (activeZoomImage) {
            window.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'unset'
        }
    }, [activeZoomImage])

    const filteredStudies = selectedCategory === 'All'
        ? caseStudies
        : caseStudies.filter(s => s.platform === selectedCategory)

    return (
        <main className="flex flex-col bg-white min-h-screen">
            <Navbar />

            {/* Premium Insights Hero Section */}
            <div className="pt-48 pb-16 bg-gradient-to-b from-blue-10/40 via-slate-50 to-white flex flex-col items-center justify-center text-center px-6 overflow-hidden">
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
            <div className="w-full bg-white pb-32 pt-8 px-4 sm:px-6">
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
                                            <p className="text-xs sm:text-sm font-semibold text-neutral-20/70 tracking-wide mt-0.5">
                                                {study.fullDetail.dateLocation}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                                            {study.fullDetail.platformFull}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Grid: Narrative on Left, Screenshot Card on Right */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
                                    {/* Left Column: Metric & Narrative */}
                                    <div className={`flex flex-col justify-between ${study.image ? 'lg:col-span-7' : 'lg:col-span-12'}`}>
                                        {/* Outcome Metric Display */}
                                        <div className="py-4 px-6 bg-slate-50 rounded-2xl mb-6 border border-slate-200/60 flex items-center justify-between shadow-2xs">
                                            <span className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
                                                {study.fullDetail.headlineMetric}
                                            </span>
                                        </div>

                                        {/* Detailed Narrative Paragraph */}
                                        <p className="text-base sm:text-lg text-neutral-20 leading-relaxed font-normal">
                                            {study.fullDetail.paragraph}
                                        </p>
                                    </div>

                                    {/* Right Column: Interactive Case Study Screenshot */}
                                    {study.image && (
                                        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
                                            <div
                                                onClick={() => setActiveZoomImage({
                                                    src: study.image!,
                                                    title: study.campaign,
                                                    brand: study.brand,
                                                    metric: study.fullDetail.headlineMetric
                                                })}
                                                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/80 bg-slate-50/80 hover:bg-slate-100/90 hover:border-accent-blue/50 shadow-xs hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center p-3 sm:p-3.5 max-w-full"
                                                title="Click to view enlarged screenshot"
                                            >
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={study.image}
                                                    alt={`${study.brand} - ${study.campaign}`}
                                                    className="max-h-[280px] sm:max-h-[320px] w-auto max-w-full object-contain rounded-xl drop-shadow-md transition-transform duration-500 group-hover:scale-[1.03]"
                                                    loading="lazy"
                                                />

                                                {/* Hover Zoom Overlay Badge */}
                                                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] rounded-2xl">
                                                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-xl transition-transform duration-300 group-hover:scale-105">
                                                        <ZoomIn className="w-4 h-4 text-accent-blue" />
                                                        Click to Zoom
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>

            {/* Interactive Lightbox Zoom Modal (Light Theme) */}
            {activeZoomImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
                    onClick={() => setActiveZoomImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full bg-white border border-neutral-200/80 rounded-3xl p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] flex flex-col items-center max-h-[92vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="w-full flex items-center justify-between pb-4 mb-3 border-b border-neutral-100 px-1">
                            <div>
                                <span className="text-xs font-extrabold text-accent-blue tracking-widest uppercase block mb-1">
                                    {activeZoomImage.brand} · {activeZoomImage.metric}
                                </span>
                                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
                                    {activeZoomImage.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setActiveZoomImage(null)}
                                className="p-2 rounded-full bg-neutral-100 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/80 transition-all duration-200 cursor-pointer"
                                aria-label="Close zoomed view"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Image Display Container */}
                        <div className="w-full flex-1 flex items-center justify-center overflow-auto p-3 bg-slate-50/60 rounded-2xl border border-slate-100">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={activeZoomImage.src}
                                alt={activeZoomImage.title}
                                className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-md border border-neutral-200/60"
                            />
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    )
}

