'use client'

import React, { useRef } from 'react'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import SmoothLink from "@/components/SmoothLink";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
    {
        id: 1,
        title: "Setting SMART KPIs for Your Digital Media Campaigns",
        excerpt: "Running a digital campaign without KPIs is like sailing without direction. SMART KPIs help you set clear, measurable goals so you can track performance and improve results.",
        date: "September 4, 2025",
        readTime: "5 min read",
        author: "OnlyMedia Team",
        category: "Strategy",
        featured: true
    },
    {
        id: 2,
        title: "Why Your Business Needs a Custom Media Plan",
        excerpt: "Every business has different goals and audiences. A custom media plan helps you target the right people with the right message and get better results.",
        date: "September 4, 2025",
        readTime: "4 min read",
        author: "OnlyMedia Team",
        category: "Planning",
        featured: false
    },
    {
        id: 3,
        title: "The Ultimate Guide to a Data Driven Media Strategy",
        excerpt: "Successful campaigns rely on data, not guesswork. Using insights and performance metrics helps you make smarter decisions and improve marketing results.",
        date: "September 4, 2025",
        readTime: "6 min read",
        author: "OnlyMedia Team",
        category: "Analytics",
        featured: false
    }
];

export default function BlogPage() {
    const mainRef = useRef<HTMLDivElement>(null)
    const postsRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from(".blog-reveal", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "expo.out",
        })

        gsap.fromTo(".blog-card",
            {
                y: 60,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: postsRef.current,
                    start: "top 80%",
                }
            }
        )
    }, { scope: mainRef })

    const featuredPost = blogPosts.find(post => post.featured)
    const regularPosts = blogPosts.filter(post => !post.featured)

    return (
        <main ref={mainRef} className="flex flex-col bg-beige-0 min-h-screen">
            <Navbar />

            {/* Premium Hero Section */}
            <div className="pt-48 pb-20 bg-linear-to-b from-beige-10 via-beige-0 to-beige-0 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <div className="flex items-center gap-4 mb-8 blog-reveal">
                    <p className="text-eyebrow-large text-accent-blue tracking-[0.5em] uppercase font-black text-xs">
                        INSIGHTS & UPDATES
                    </p>
                </div>

                <h1 className="text-[42px] sm:text-[48px] md:text-[80px] lg:text-[100px] font-black leading-[0.95] tracking-[-0.04em] text-neutral-30 blog-reveal max-w-5xl">
                    OnlyMedia <span className="text-accent-blue italic font-serif font-medium">Journal</span>
                </h1>

                <p className="max-w-2xl mx-auto mt-12 blog-reveal text-xl md:text-2xl text-neutral-20 leading-[1.6]">
                    Expert insights, strategies, and thought leadership from the forefront of digital media innovation.
                </p>
            </div>

            {/* Blog Posts Section */}
            <div ref={postsRef} className="w-full bg-beige-0 pb-32 pt-10 px-6">
                <div className="max-w-7xl mx-auto">
                    
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 blog-reveal">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-30 tracking-tight">Latest Articles</h2>
                            <p className="text-lg text-neutral-20 mt-3 max-w-xl">Explore our latest thinking on media strategy, data analytics, and digital transformation.</p>
                        </div>
                        <div className="flex gap-3">
                            {['All', 'Strategy', 'Planning', 'Analytics'].map((filter, index) => (
                                <button 
                                    key={filter}
                                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                        index === 0 
                                            ? 'bg-neutral-30 text-white' 
                                            : 'bg-white/50 text-neutral-20 hover:bg-neutral-30 hover:text-white'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Featured Post */}
                    {featuredPost && (
                        <div className="blog-card mb-16 group">
                            <SmoothLink href="#" className="block">
                                <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-500 border border-neutral-10/10">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                        {/* Image Side */}
                                        <div className="relative h-64 lg:h-auto bg-gradient-to-br from-blue-20 via-beige-20 to-beige-40 flex items-center justify-center overflow-hidden">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(21,108,194,0.1)_0%,transparent_50%)]" />
                                            <div className="relative z-10 text-center p-8">
                                                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                                    <span className="text-4xl font-black text-accent-blue">{featuredPost.id}</span>
                                                </div>
                                                <p className="text-sm font-semibold text-accent-blue uppercase tracking-widest">Featured Article</p>
                                            </div>
                                        </div>
                                        
                                        {/* Content Side */}
                                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                                            <div className="flex items-center gap-4 mb-4 text-sm text-neutral-10">
                                                <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full font-semibold text-xs uppercase tracking-wider">
                                                    {featuredPost.category}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {featuredPost.date}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {featuredPost.readTime}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-30 mb-4 leading-tight group-hover:text-accent-blue transition-colors duration-300">
                                                {featuredPost.title}
                                            </h3>
                                            
                                            <p className="text-neutral-20 text-lg leading-relaxed mb-6">
                                                {featuredPost.excerpt}
                                            </p>
                                            
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-beige-20 flex items-center justify-center">
                                                        <User className="w-5 h-5 text-neutral-10" />
                                                    </div>
                                                    <span className="font-semibold text-neutral-30">{featuredPost.author}</span>
                                                </div>
                                                
                                                <span className="flex items-center gap-2 text-accent-blue font-bold group-hover:gap-4 transition-all duration-300">
                                                    Read Article
                                                    <ArrowRight className="w-5 h-5" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SmoothLink>
                        </div>
                    )}

                    {/* Regular Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {regularPosts.map((post) => (
                            <div key={post.id} className="blog-card group">
                                <SmoothLink href="#" className="block h-full">
                                    <div className="bg-white rounded-3xl p-8 h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-500 border border-neutral-10/10 flex flex-col">
                                        {/* Card Header */}
                                        <div className="flex items-center gap-4 mb-5 text-sm text-neutral-10">
                                            <span className="px-3 py-1 bg-beige-20 text-neutral-30 rounded-full font-semibold text-xs uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {post.date}
                                            </span>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl font-bold text-neutral-30 mb-4 leading-tight group-hover:text-accent-blue transition-colors duration-300">
                                            {post.title}
                                        </h3>
                                        
                                        {/* Excerpt */}
                                        <p className="text-neutral-20 leading-relaxed mb-6 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        
                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-6 border-t border-neutral-10/10">
                                            <div className="flex items-center gap-2 text-sm text-neutral-10">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </div>
                                            
                                            <span className="flex items-center gap-2 text-accent-blue font-bold group-hover:gap-3 transition-all duration-300">
                                                Read More
                                                <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </SmoothLink>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter CTA */}
                    <div className="mt-20 blog-card">
                        <div className="bg-neutral-30 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-blue/10 blur-[100px] rounded-full pointer-events-none" />
                            
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                                    Never Miss an Insight
                                </h3>
                                <p className="text-white/60 text-lg mb-8">
                                    Subscribe to our newsletter for the latest strategies, tips, and industry updates delivered straight to your inbox.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent-blue/50 transition-colors"
                                    />
                                    <button className="bg-accent-blue text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-neutral-30 transition-all duration-300 whitespace-nowrap">
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
