'use client'

import React from 'react'
import { CaseStudy } from '@/data/caseStudies'
import {
    Play, Heart, Bookmark, Share2, ExternalLink, Tv, Smartphone,
    Sparkles, CheckCircle2, ShieldCheck, ShoppingBag, Radio
} from 'lucide-react'

interface Props {
    study: CaseStudy
}

export default function CampaignGraphicMockup({ study }: Props) {
    const { platform, brand, campaign, fullDetail } = study

    // Render YouTube Mockup
    if (platform === 'YouTube') {
        return (
            <div className="w-full bg-neutral-900 rounded-2xl p-4 sm:p-5 text-white border border-neutral-800 shadow-xl overflow-hidden relative group">
                <div className="flex items-center justify-between gap-3 mb-3 border-b border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-600 animate-pulse" />
                        <span className="text-xs font-bold tracking-wider text-red-500 uppercase flex items-center gap-1">
                            <Play className="w-3 h-3 fill-current" /> YouTube Ad Format
                        </span>
                    </div>
                    <span className="text-[11px] font-semibold bg-neutral-800 text-neutral-300 px-2.5 py-0.5 rounded-full border border-neutral-700">
                        12.42M Reach
                    </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-800 border border-neutral-800 p-6 flex flex-col justify-between min-h-[140px]">
                    <div className="flex items-center justify-between z-10">
                        <div className="flex items-center gap-2">
                            {study.brandLogo ? (
                                <img src={study.brandLogo} alt={brand} className="h-6 w-auto object-contain bg-white rounded p-0.5" />
                            ) : (
                                <span className="font-black text-sm text-white">{brand}</span>
                            )}
                            <span className="text-xs font-medium text-neutral-400">Sponsored</span>
                        </div>
                        <span className="bg-black/60 text-white/90 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-md">
                            Ad 1 of 2 · 0:15
                        </span>
                    </div>

                    <div className="my-3 z-10">
                        <h4 className="text-lg font-bold text-white tracking-tight line-clamp-1">{campaign}</h4>
                        <p className="text-xs text-neutral-400 mt-0.5">Non-Skip &amp; Shorts Multi-Format Strategy</p>
                    </div>

                    <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden z-10">
                        <div className="bg-red-600 h-full w-[78%] rounded-full relative">
                            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white rounded-full shadow-sm" />
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-3 text-xs text-neutral-400 pt-1">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <ShieldCheck className="w-4 h-4" /> +2.7% Brand Recall Lift
                    </span>
                    <span className="text-[11px] text-neutral-500 font-mono">BLS Verified</span>
                </div>
            </div>
        )
    }

    // Render Meta (Instagram/Facebook) Mockup
    if (platform === 'Meta') {
        return (
            <div className="w-full bg-slate-900 rounded-2xl p-4 sm:p-5 text-white border border-slate-800 shadow-xl overflow-hidden relative group">
                <div className="flex items-center justify-between gap-3 mb-3 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-pink-500" />
                        <span className="text-xs font-bold tracking-wider text-pink-400 uppercase">
                            Meta Sponsored Ad
                        </span>
                    </div>
                    <span className="text-[11px] font-semibold bg-slate-800 text-pink-300 px-2.5 py-0.5 rounded-full border border-slate-700">
                        High Intent Custom Audience
                    </span>
                </div>

                <div className="bg-slate-950 rounded-xl p-4 border border-slate-800/80 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            {study.brandLogo ? (
                                <img src={study.brandLogo} alt={brand} className="h-7 w-7 rounded-full object-cover bg-white p-0.5 border border-pink-500/50" />
                            ) : (
                                <div className="w-7 h-7 rounded-full bg-pink-600 flex items-center justify-center font-bold text-xs">{brand[0]}</div>
                            )}
                            <div>
                                <p className="text-xs font-bold text-white flex items-center gap-1">
                                    {brand} <CheckCircle2 className="w-3 h-3 text-blue-400 fill-current" />
                                </p>
                                <p className="text-[10px] text-slate-400">Sponsored · Feed Ad</p>
                            </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-pink-400 transition-colors" />
                    </div>

                    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-lg p-3 border border-slate-800 text-center">
                        <p className="text-sm font-semibold text-slate-200 line-clamp-1">{campaign}</p>
                    </div>

                    <div className="flex items-center justify-between text-slate-400 text-xs pt-1">
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-pink-500 fill-current" /> 4.8k</span>
                            <span className="flex items-center gap-1"><Share2 className="w-3.5 h-3.5" /> Share</span>
                        </div>
                        <span className="text-emerald-400 font-bold text-[11px]">{fullDetail.headlineMetric}</span>
                    </div>
                </div>
            </div>
        )
    }

    // Render Pinterest Mockup
    if (platform === 'Pinterest') {
        return (
            <div className="w-full bg-rose-950/40 rounded-2xl p-4 sm:p-5 text-white border border-rose-900/40 shadow-xl overflow-hidden relative group">
                <div className="flex items-center justify-between gap-3 mb-3 border-b border-rose-900/40 pb-3">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-rose-600 flex items-center justify-center font-bold text-xs">P</div>
                        <span className="text-xs font-bold tracking-wider text-rose-400 uppercase">
                            Pinterest Discovery Pin
                        </span>
                    </div>
                    <span className="text-[11px] font-semibold bg-rose-900/50 text-rose-200 px-2.5 py-0.5 rounded-full border border-rose-800">
                        Contextual Placement
                    </span>
                </div>

                <div className="bg-neutral-900 rounded-xl p-4 border border-rose-900/30 flex items-center gap-4">
                    <div className="w-16 h-20 rounded-lg bg-gradient-to-br from-rose-600 to-pink-700 flex flex-col items-center justify-center p-2 text-center shrink-0 shadow-md">
                        <ShoppingBag className="w-5 h-5 text-white mb-1" />
                        <span className="text-[8px] font-bold uppercase text-white/90">Inspiration Pin</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-between h-full">
                        <div>
                            <span className="text-[10px] uppercase tracking-wider font-extrabold text-rose-400">{brand}</span>
                            <h4 className="text-sm font-bold text-white leading-snug line-clamp-2 mt-0.5">{campaign}</h4>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-xs font-black text-emerald-400">{fullDetail.headlineMetric}</span>
                            <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                                Save <Bookmark className="w-3 h-3 fill-current" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Render CTV / OTT Mockup
    if (platform === 'CTV / OTT') {
        return (
            <div className="w-full bg-blue-950/60 rounded-2xl p-4 sm:p-5 text-white border border-blue-900/40 shadow-xl overflow-hidden relative group">
                <div className="flex items-center justify-between gap-3 mb-3 border-b border-blue-900/40 pb-3">
                    <div className="flex items-center gap-2">
                        <Tv className="w-4 h-4 text-blue-400" />
                        <span className="text-xs font-bold tracking-wider text-blue-300 uppercase">
                            Living Room CTV Broadcast
                        </span>
                    </div>
                    <span className="text-[11px] font-semibold bg-blue-900/60 text-blue-200 px-2.5 py-0.5 rounded-full border border-blue-800">
                        30s Premium Spot
                    </span>
                </div>

                <div className="bg-neutral-950 rounded-xl p-4 border border-blue-900/50 flex flex-col gap-3 relative overflow-hidden">
                    <div className="flex items-center justify-between z-10">
                        <span className="text-xs font-extrabold text-blue-400 tracking-wider uppercase">{brand}</span>
                        <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                            CTV High-Completion
                        </span>
                    </div>

                    <div className="z-10 my-1">
                        <h4 className="text-base font-bold text-white">{campaign}</h4>
                        <p className="text-xs text-neutral-400 mt-1">Aaj Tak · Jio TV+ · Sony LIV · CTV Ecosystem</p>
                    </div>

                    <div className="z-10 mt-1">
                        <div className="flex justify-between text-[11px] font-bold text-emerald-400 mb-1">
                            <span>Video Completion</span>
                            <span>80% VCR</span>
                        </div>
                        <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-emerald-500 h-full w-[80%] rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Default Programmatic DV360 / Display Mockup
    return (
        <div className="w-full bg-neutral-900 rounded-2xl p-4 sm:p-5 text-white border border-neutral-800 shadow-xl overflow-hidden relative group">
            <div className="flex items-center justify-between gap-3 mb-3 border-b border-neutral-800 pb-3">
                <div className="flex items-center gap-2">
                    <Radio className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold tracking-wider text-cyan-300 uppercase">
                        Programmatic Display &amp; Video Unit
                    </span>
                </div>
                <span className="text-[11px] font-semibold bg-neutral-800 text-cyan-200 px-2.5 py-0.5 rounded-full border border-neutral-700">
                    DV360 Premium
                </span>
            </div>

            <div className="bg-neutral-950 rounded-xl p-4 border border-neutral-800 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {study.brandLogo ? (
                            <img src={study.brandLogo} alt={brand} className="h-6 w-auto object-contain bg-white rounded p-0.5" />
                        ) : (
                            <span className="font-extrabold text-sm text-cyan-400">{brand}</span>
                        )}
                        <span className="text-[10px] text-neutral-400 font-medium">In-Banner High Impact</span>
                    </div>
                    <span className="text-xs font-black text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/80">
                        {fullDetail.headlineMetric}
                    </span>
                </div>

                <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 p-3 rounded-lg border border-neutral-800 flex items-center justify-between">
                    <div>
                        <h4 className="text-sm font-bold text-white line-clamp-1">{campaign}</h4>
                        <p className="text-[11px] text-neutral-400 mt-0.5">Interactive Engagement Unit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
