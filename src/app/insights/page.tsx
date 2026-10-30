'use client'

import React, { useEffect, useState } from 'react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { caseStudies, CaseStudy } from '@/data/caseStudies'
import { ArrowUpRight, Filter, TrendingUp, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles, Layers } from 'lucide-react'

const CATEGORIES = ['All', 'DV360', 'Meta', 'YouTube', 'Pinterest', 'CTV / OTT', 'Prog. Video'] as const

export default function InsightsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All')
    const [visibleCount, setVisibleCount] = useState<number>(6)
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)
    const [activeZoomImage, setActiveZoomImage] = useState<{ src: string; title: string; brand: string; metric: string } | null>(null)

    // Deep-linking hash check
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '')
            if (hash) {
                const matched = caseStudies.find(s => s.slug === hash || s.id === hash)
                if (matched) {
                    setSelectedStudy(matched)
                }
            }
        }

        handleHashChange()
        window.addEventListener('hashchange', handleHashChange)
        return () => window.removeEventListener('hashchange', handleHashChange)
    }, [])

    // Escape key and scroll locking
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (activeZoomImage) {
                    setActiveZoomImage(null)
                } else if (selectedStudy) {
                    setSelectedStudy(null)
                }
            }
        }

        if (selectedStudy || activeZoomImage) {
            window.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'unset'
        }
    }, [selectedStudy, activeZoomImage])

    const filteredStudies = selectedCategory === 'All'
        ? caseStudies
        : caseStudies.filter(s => s.platform === selectedCategory)

    const visibleStudies = filteredStudies.slice(0, visibleCount)

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat)
        setVisibleCount(6)
    }

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6)
    }

    const handlePrevStudy = () => {
        if (!selectedStudy) return
        const currentIndex = filteredStudies.findIndex(s => s.id === selectedStudy.id)
        if (currentIndex > 0) {
            setSelectedStudy(filteredStudies[currentIndex - 1])
        } else {
            setSelectedStudy(filteredStudies[filteredStudies.length - 1])
        }
    }

    const handleNextStudy = () => {
        if (!selectedStudy) return
        const currentIndex = filteredStudies.findIndex(s => s.id === selectedStudy.id)
        if (currentIndex < filteredStudies.length - 1) {
            setSelectedStudy(filteredStudies[currentIndex + 1])
        } else {
            setSelectedStudy(filteredStudies[0])
        }
    }

    return (
        <main className="flex flex-col bg-white min-h-screen">
            <Navbar />

            {/* Premium Insights Hero Section */}
            <div className="pt-44 md:pt-48 pb-14 bg-gradient-to-b from-[#F6FAFF] via-[#FBFCFE] to-white flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-blue/20 bg-accent-blue/10 text-accent-blue text-xs font-bold tracking-widest uppercase shadow-2xs">
                        <TrendingUp className="w-3.5 h-3.5" />
                        Campaign Case Studies & Insights
                    </span>
                </div>

                <h1 className="text-[36px] sm:text-[52px] md:text-[68px] font-black leading-[1.05] tracking-[-0.03em] text-neutral-900 max-w-5xl">
                    Data-Driven Strategy <br className="hidden sm:inline" />
                    <span className="text-accent-blue italic font-serif font-normal">Real Campaign Outcomes</span>
                </h1>

                <p className="max-w-2xl mx-auto mt-5 text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed font-normal">
                    Explore our work across programmatic video, connected TV, performance media, and high-impact creative activations.
                </p>

                {/* Category Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-10 max-w-4xl">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-400 uppercase tracking-wider mr-2">
                        <Filter className="w-3.5 h-3.5 text-accent-blue" />
                        Format:
                    </div>
                    {CATEGORIES.map((cat) => {
                        const count = cat === 'All'
                            ? caseStudies.length
                            : caseStudies.filter(s => s.platform === cat).length

                        const isSelected = selectedCategory === cat

                        return (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${isSelected
                                    ? 'bg-neutral-900 text-white shadow-md shadow-neutral-900/10'
                                    : 'bg-white text-neutral-700 hover:bg-neutral-100/80 border border-neutral-200/80 shadow-2xs'
                                    }`}
                            >
                                <span>{cat}</span>
                                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-500'}`}>
                                    {count}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* 3-Column Case Studies Grid */}
            <div className="w-full bg-white pb-24 pt-4 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Results Count Summary */}
                    <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-200/70 text-xs sm:text-sm font-semibold text-neutral-500">
                        <span>
                            Showing {visibleStudies.length} of {filteredStudies.length} {filteredStudies.length === 1 ? 'campaign' : 'campaigns'}
                        </span>
                        {selectedCategory !== 'All' && (
                            <button
                                onClick={() => handleCategoryChange('All')}
                                className="text-accent-blue hover:underline cursor-pointer"
                            >
                                Clear filter
                            </button>
                        )}
                    </div>

                    {/* The 3-Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {visibleStudies.map((study) => (
                            <article
                                key={study.id}
                                id={study.slug}
                                onClick={() => setSelectedStudy(study)}
                                className="group bg-white rounded-3xl border border-neutral-200/80 hover:border-accent-blue/50 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
                            >
                                {/* Campaign Creative Thumbnail */}
                                <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-50 to-blue-50/40 p-4 flex items-center justify-center overflow-hidden border-b border-neutral-100">
                                    {study.image ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={study.image}
                                            alt={`${study.brand} - ${study.campaign}`}
                                            className="w-full h-full object-contain rounded-xl drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-neutral-400">
                                            <Layers className="w-8 h-8 opacity-40" />
                                        </div>
                                    )}

                                    {/* Platform Badge Overlay */}
                                    <div className="absolute top-3 left-3">
                                        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-neutral-800 border border-neutral-200/70 shadow-xs backdrop-blur-md">
                                            {study.platform}
                                        </span>
                                    </div>

                                    {/* Hover Click to Expand Badge */}
                                    <div className="absolute inset-0 bg-neutral-900/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                        <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                            View Full Study <ArrowUpRight className="w-3.5 h-3.5 text-accent-blue" />
                                        </span>
                                    </div>
                                </div>

                                {/* Card Content Body */}
                                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                                    <div>
                                        {/* Brand Logo & Name Header */}
                                        <div className="flex items-center justify-between gap-3 mb-3">
                                            <div className="flex items-center gap-2">
                                                {study.brandLogo ? (
                                                    <div className="h-6 max-w-[90px] flex items-center shrink-0">
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img
                                                            src={study.brandLogo}
                                                            alt={study.brand}
                                                            className="max-h-full max-w-full object-contain"
                                                        />
                                                    </div>
                                                ) : (
                                                    <span className="text-xs font-black text-neutral-800 tracking-tight" style={{ color: study.brandColor || undefined }}>
                                                        {study.brand}
                                                    </span>
                                                )}
                                            </div>
                                            <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                                                {study.dateLocation}
                                            </span>
                                        </div>

                                        {/* Campaign Title */}
                                        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight group-hover:text-accent-blue transition-colors duration-200 line-clamp-1">
                                            {study.campaign}
                                        </h3>

                                        {/* Blurb */}
                                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal mt-2 line-clamp-2">
                                            {study.blurb}
                                        </p>
                                    </div>

                                    {/* Key Performance Metric Footer */}
                                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto bg-slate-50/70 -mx-6 -mb-6 p-4 px-6">
                                        <div>
                                            <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 block">
                                                {study.metricLabel}
                                            </span>
                                            <span className="text-base sm:text-lg font-black text-emerald-600 tracking-tight">
                                                {study.metricValue}
                                            </span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:text-accent-blue group-hover:border-accent-blue transition-colors shadow-2xs">
                                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {filteredStudies.length > visibleStudies.length && (
                        <div className="flex flex-col items-center justify-center mt-14 gap-3">
                            <button
                                onClick={handleLoadMore}
                                className="px-8 py-4 rounded-full bg-neutral-900 text-white font-bold text-sm sm:text-base hover:bg-accent-blue transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer flex items-center gap-2 group"
                            >
                                <span>Load More Case Studies</span>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white">
                                    +{filteredStudies.length - visibleStudies.length}
                                </span>
                            </button>
                            <p className="text-xs text-neutral-400 font-medium">
                                Showing {visibleStudies.length} of {filteredStudies.length} total studies
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Interactive Expanded Case Study Modal Popup */}
            {selectedStudy && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/60 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
                    onClick={() => setSelectedStudy(null)}
                >
                    <div
                        className="relative max-w-5xl w-full bg-white rounded-3xl border border-neutral-200 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="w-full flex items-center justify-between p-5 sm:p-7 border-b border-neutral-100 bg-white">
                            <div className="flex items-center gap-4">
                                {selectedStudy.brandLogo ? (
                                    <div className="h-10 max-w-[130px] flex items-center shrink-0">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={selectedStudy.brandLogo}
                                            alt={selectedStudy.brand}
                                            className="max-h-full max-w-full object-contain rounded-md border border-neutral-200/60 p-1 bg-white shadow-2xs"
                                        />
                                    </div>
                                ) : (
                                    <span className="text-xl font-black text-neutral-900" style={{ color: selectedStudy.brandColor || undefined }}>
                                        {selectedStudy.brand}
                                    </span>
                                )}
                                <div>
                                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-accent-blue bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                                        {selectedStudy.fullDetail.platformFull}
                                    </span>
                                    <h2 className="text-lg sm:text-2xl font-bold text-neutral-900 tracking-tight mt-1">
                                        {selectedStudy.campaign}
                                    </h2>
                                </div>
                            </div>

                            {/* Controls: Prev/Next & Close */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handlePrevStudy}
                                    className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
                                    title="Previous Case Study"
                                    aria-label="Previous Case Study"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={handleNextStudy}
                                    className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
                                    title="Next Case Study"
                                    aria-label="Next Case Study"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => setSelectedStudy(null)}
                                    className="p-2 ml-1 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors cursor-pointer"
                                    title="Close modal (Esc)"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body: Two-Column Detailed View */}
                        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                {/* Left Column: Metrics & Narrative */}
                                <div className="lg:col-span-7 flex flex-col gap-6">
                                    {/* Headline Outcome Metric */}
                                    <div className="p-5 sm:p-6 bg-gradient-to-br from-emerald-50/80 via-slate-50 to-blue-50/40 rounded-2xl border border-emerald-200/60 shadow-2xs">
                                        <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-500 block mb-1">
                                            Headline Performance Outcome
                                        </span>
                                        <p className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
                                            {selectedStudy.fullDetail.headlineMetric}
                                        </p>
                                    </div>

                                    {/* Timing & Scope */}
                                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-neutral-500">
                                        <span className="px-3 py-1 rounded-lg bg-neutral-100 border border-neutral-200/60">
                                            {selectedStudy.fullDetail.dateLocation}
                                        </span>
                                        <span className="px-3 py-1 rounded-lg bg-neutral-100 border border-neutral-200/60">
                                            Platform: {selectedStudy.platform}
                                        </span>
                                    </div>

                                    {/* Strategy Blurb */}
                                    <div>
                                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-2">
                                            Campaign Strategy
                                        </h4>
                                        <p className="text-base text-neutral-800 font-medium leading-relaxed">
                                            "{selectedStudy.blurb}"
                                        </p>
                                    </div>

                                    {/* Detailed Narrative */}
                                    <div>
                                        <h4 className="text-xs font-extrabold uppercase tracking-wider text-neutral-400 mb-2">
                                            Execution & Impact
                                        </h4>
                                        <p className="text-base text-neutral-600 leading-relaxed font-normal">
                                            {selectedStudy.fullDetail.paragraph}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Column: Campaign Creative Visual */}
                                {selectedStudy.image && (
                                    <div className="lg:col-span-5 flex flex-col items-center">
                                        <div
                                            onClick={() => setActiveZoomImage({
                                                src: selectedStudy.image!,
                                                title: selectedStudy.campaign,
                                                brand: selectedStudy.brand,
                                                metric: selectedStudy.fullDetail.headlineMetric
                                            })}
                                            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-slate-50 p-4 w-full flex items-center justify-center hover:shadow-lg transition-all"
                                            title="Click to zoom in"
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={selectedStudy.image}
                                                alt={`${selectedStudy.brand} - ${selectedStudy.campaign}`}
                                                className="max-h-[360px] w-auto max-w-full object-contain rounded-xl drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] rounded-2xl">
                                                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-md">
                                                    <ZoomIn className="w-3.5 h-3.5 text-accent-blue" />
                                                    Click to Zoom
                                                </span>
                                            </div>
                                        </div>
                                        <span className="text-[11px] text-neutral-400 font-medium mt-2">
                                            Live ad unit & creative execution
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-4 sm:p-5 border-t border-neutral-100 bg-neutral-50/70 flex items-center justify-between px-6">
                            <span className="text-xs text-neutral-500 font-medium hidden sm:inline">
                                Use ← / → keys or arrows to browse
                            </span>
                            <div className="flex items-center gap-3 ml-auto">
                                <a
                                    href="/contact"
                                    className="px-5 py-2 rounded-full bg-neutral-900 text-white text-xs font-bold hover:bg-accent-blue transition-colors"
                                >
                                    Activate Similar Campaign
                                </a>
                                <button
                                    onClick={() => setSelectedStudy(null)}
                                    className="px-5 py-2 rounded-full bg-white border border-neutral-200 text-neutral-700 text-xs font-bold hover:bg-neutral-100 transition-colors cursor-pointer"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Standalone Lightbox Zoom (when clicking image inside modal) */}
            {activeZoomImage && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-neutral-950/80 backdrop-blur-lg p-4 sm:p-8 animate-in fade-in duration-200"
                    onClick={() => setActiveZoomImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full bg-white border border-neutral-200 rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col items-center max-h-[92vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full flex items-center justify-between pb-3 mb-3 border-b border-neutral-100">
                            <div>
                                <span className="text-xs font-extrabold text-accent-blue uppercase tracking-wider block">
                                    {activeZoomImage.brand} · {activeZoomImage.metric}
                                </span>
                                <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                                    {activeZoomImage.title}
                                </h3>
                            </div>
                            <button
                                onClick={() => setActiveZoomImage(null)}
                                className="p-2 rounded-full bg-neutral-100 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="w-full flex-1 flex items-center justify-center overflow-auto p-2 bg-slate-50 rounded-xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={activeZoomImage.src}
                                alt={activeZoomImage.title}
                                className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-sm"
                            />
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </main>
    )
}


