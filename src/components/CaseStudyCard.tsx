'use client'

import React from 'react'
import SmoothLink from './SmoothLink'
import { CaseStudy } from '@/data/caseStudies'
import { ArrowUpRight } from 'lucide-react'

interface CaseStudyCardProps {
    study: CaseStudy;
    className?: string;
}

const getPlatformBadgeStyle = (platform: CaseStudy['platform']) => {
    switch (platform) {
        case 'DV360':
            return 'bg-blue-50 text-blue-700 border-blue-200';
        case 'YouTube':
            return 'bg-red-50 text-red-700 border-red-200';
        case 'Meta':
            return 'bg-indigo-50 text-indigo-700 border-indigo-200';
        case 'Pinterest':
            return 'bg-rose-50 text-rose-700 border-rose-200';
        case 'CTV / OTT':
            return 'bg-purple-50 text-purple-700 border-purple-200';
        case 'Prog. Video':
            return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        default:
            return 'bg-neutral-100 text-neutral-800 border-neutral-200';
    }
}

export default function CaseStudyCard({ study, className = '' }: CaseStudyCardProps) {
    return (
        <SmoothLink
            href={`/insights#${study.slug}`}
            className={`group block shrink-0 w-[300px] sm:w-[360px] md:w-[380px] bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-neutral-10/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(21,108,194,0.12)] hover:border-accent-blue/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${className}`}
        >
            <div>
                {/* Header: Brand + Platform Pill */}
                <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                        className="text-xl sm:text-2xl font-black tracking-tight text-neutral-30 group-hover:text-accent-blue transition-colors duration-300"
                        style={{ color: study.brandColor }}
                    >
                        {study.brand}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border ${getPlatformBadgeStyle(study.platform)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                        {study.platform}
                    </span>
                </div>

                {/* Campaign Title */}
                <h3 className="text-base sm:text-lg font-bold text-neutral-30 line-clamp-1 leading-snug mb-1">
                    {study.campaign}
                </h3>

                {/* Date / Location */}
                <p className="text-[12px] font-semibold text-neutral-10 tracking-wider uppercase mb-4">
                    {study.dateLocation}
                </p>

                {/* Metric Block - Dark theme box inside card without heartbeat lines */}
                <div className="bg-neutral-30 rounded-2xl p-4 sm:p-5 my-4 relative overflow-hidden group-hover:bg-black transition-colors duration-300 border border-neutral-20/40">
                    <p className="text-[11px] font-bold tracking-widest text-neutral-10 uppercase mb-1">
                        {study.metricLabel}
                    </p>
                    <div className="flex items-baseline justify-between">
                        <span className="text-3xl sm:text-4xl font-black text-emerald-400 tracking-tight">
                            {study.metricValue}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-emerald-400/80 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                </div>

                {/* Short Result Blurb */}
                <p className="text-sm text-neutral-20 leading-relaxed line-clamp-2">
                    {study.blurb}
                </p>
            </div>
        </SmoothLink>
    )
}
