<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;

class BlogPostSeeder extends Seeder
{
    /**
     * Seed the starter Captivating Construction blog posts.
     * Idempotent by slug — safe to re-run.
     */
    public function run(): void
    {
        $posts = [
            [
                'title' => 'What to Expect When Building on Your Own Lot in New Jersey',
                'slug' => 'building-on-your-own-lot-nj',
                'excerpt' => "Thinking about building on land you already own? Here's what to expect — from site evaluation and permits to timeline and budget — when you build a custom home on your own lot in New Jersey.",
                'image_path' => '/image/worker-site.png',
                'body' => "Building on your own lot is one of the most rewarding ways to create a home that's truly yours — but it comes with a few extra steps compared to buying an existing house. Before construction begins, your lot needs to be evaluated for grading, soil, drainage, utility access, and any zoning or setback requirements that affect what you can build.\n\nFrom there, the process moves through design, engineering, and permitting before a shovel ever hits the ground. A good builder will guide you through each stage, coordinate the required inspections, and keep your timeline and budget on track.\n\nAt Captivating Construction, we handle the entire journey — from your first site walk to the final walk-through — so building on your own lot feels exciting rather than overwhelming.",
            ],
            [
                'title' => 'Custom Home vs. Renovation: How to Decide What Makes Sense for Your Property',
                'slug' => 'custom-home-vs-renovation-nj',
                'excerpt' => 'Not sure whether to build new or renovate your existing home? We break down the costs, timelines, and trade-offs so you can decide what makes the most sense for your property.',
                'image_path' => '/image/gellory/24-West-4.webp',
                'body' => "The choice between building a custom home and renovating your existing one comes down to your goals, your budget, and the condition and location of your current property. Renovations are often the right call when you love your neighborhood and your home's structure is sound but the layout or finishes need updating.\n\nA custom build makes more sense when you want a fundamentally different floor plan, significantly more space, or a home designed around how you actually live. It can also be the smarter long-term investment when major systems are aging.\n\nWe help homeowners weigh both paths honestly — sometimes a renovation delivers exactly what you want for less, and sometimes building new is the better value over time.",
            ],
            [
                'title' => 'Can You Build a Home on Your Own Land? A Complete Guide for New Jersey Property Owners',
                'slug' => 'build-a-home-on-your-own-land-nj',
                'excerpt' => 'Yes — but there are important steps to know first. Our complete guide walks New Jersey property owners through zoning, permits, utilities, and what it takes to build on your own land.',
                'image_path' => '/image/gellory/21-Driftwood-5-1.webp',
                'body' => "If you own a parcel of land in New Jersey, you can almost always build on it — but local zoning, setbacks, and environmental rules determine exactly what and where. The first step is confirming the lot is buildable: checking zoning designations, wetlands or flood considerations, and access to water, sewer or septic, and power.\n\nOnce feasibility is confirmed, the path runs through design, engineering, permitting, and construction. Each township has its own approval process, and an experienced local builder makes that process far smoother.\n\nOur team has built across New Jersey and knows how to navigate municipal requirements so your project moves forward without costly surprises.",
            ],
            [
                'title' => 'How Long Do Home Additions Take? A Complete Timeline for New Jersey Homeowners',
                'slug' => 'how-long-do-home-additions-take-nj',
                'excerpt' => 'Planning an addition? Learn how long the process really takes — from design and permitting through construction — with a complete timeline for New Jersey homeowners.',
                'image_path' => '/image/gellory/36-HH-4.webp',
                'body' => "Most home additions take anywhere from three to six months of construction, but the full timeline — including design and permitting — often begins a few months earlier. Design and planning typically take four to eight weeks, followed by permit approval, which varies by township.\n\nOnce permits are in hand, construction moves through foundation, framing, mechanicals, insulation, drywall, and finishes. Weather, material lead times, and the complexity of the addition all affect the schedule.\n\nWe give every client a realistic, milestone-based timeline up front and keep you updated at each stage so you always know what's next.",
            ],
            [
                'title' => 'How Much Does a Home Addition Cost in New Jersey?',
                'slug' => 'home-addition-cost-nj',
                'excerpt' => 'Home addition costs vary widely by size, scope, and finishes. Here\'s a realistic look at what a home addition costs in New Jersey and what drives the price.',
                'image_path' => '/image/gellory/38-FH-4.webp',
                'body' => "The cost of a home addition in New Jersey depends heavily on size, complexity, and the level of finishes you choose. A simple single-room bump-out sits at the lower end, while a full second-story addition or a large primary-suite expansion costs considerably more.\n\nKey cost drivers include foundation work, whether you're adding plumbing or relocating mechanicals, roofline changes, and premium materials. Site conditions and township requirements can also affect the final number.\n\nWe provide detailed, transparent estimates so you understand exactly where your investment goes — no vague allowances or surprise line items.",
            ],
            [
                'title' => 'Do Home Additions Add Value to Your Home in Colts Neck, New Jersey?',
                'slug' => 'do-home-additions-add-value-colts-neck-nj',
                'excerpt' => "Additions don't just add space — they add value. Here's how a well-built home addition can boost your property's worth in Colts Neck and across New Jersey.",
                'image_path' => '/image/gellory/18-Am-4.webp',
                'body' => "A thoughtfully designed addition is one of the most reliable ways to increase both the livability and the resale value of your home. In desirable areas like Colts Neck, added square footage — especially a primary suite, an expanded kitchen, or a finished living space — can deliver a strong return on investment.\n\nThe value comes not just from the extra space but from how well the addition integrates with the existing home. A seamless roofline, matching materials, and a floor plan that flows naturally all protect and enhance your property's worth.\n\nOur team designs and builds additions that look like they were always part of the home — adding comfort today and value for years to come.",
            ],
        ];

        foreach ($posts as $post) {
            Post::updateOrCreate(['slug' => $post['slug']], array_merge($post, ['is_published' => true]));
        }
    }
}
