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
            className={`group block shrink-0 w-[300px] sm:w-[350px] md:w-[370px] bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(21,108,194,0.14)] hover:border-accent-blue/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${className}`}
        >
            <div>
                {/* Header: Normalized Brand Logo Image + Platform Pill */}
                <div className="flex items-center justify-between gap-3 mb-4 h-11 border-b border-slate-100 pb-3">
                    {study.brandLogo ? (
                        <div className="h-9 w-32 flex items-center justify-start shrink-0 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={study.brandLogo}
                                alt={study.brand}
                                className="max-h-8 max-w-[120px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    ) : (
                        <span
                            className="text-xl font-black tracking-tight text-neutral-900 group-hover:text-accent-blue transition-colors duration-300"
                            style={{ color: study.brandColor }}
                        >
                            {study.brand}
                        </span>
                    )}

                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase border shrink-0 ${getPlatformBadgeStyle(study.platform)}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
                        {study.platform}
                    </span>
                </div>

                {/* Campaign Title */}
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 line-clamp-1 leading-snug mb-1 group-hover:text-accent-blue transition-colors">
                    {study.campaign}
                </h3>

                {/* Date / Location */}
                <p className="text-[11px] font-semibold text-neutral-400 tracking-wider uppercase mb-4">
                    {study.dateLocation}
                </p>

                {/* Metric Block */}
                <div className="bg-gradient-to-br from-accent-blue via-[#0E5196] to-[#0A3D73] rounded-2xl p-4 sm:p-5 my-4 relative overflow-hidden group-hover:from-[#0E5196] group-hover:to-accent-blue transition-all duration-500 border border-blue-400/30 shadow-md shadow-accent-blue/15">
                    <p className="text-[10px] font-extrabold tracking-widest text-white/80 uppercase mb-1">
                        {study.metricLabel}
                    </p>
                    <div className="flex items-baseline justify-between">
                        <span className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-sm">
                            {study.metricValue}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-white/90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                </div>

                {/* Short Result Blurb */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2 font-normal">
                    {study.blurb}
                </p>
            </div>
        </SmoothLink>
    )
}

