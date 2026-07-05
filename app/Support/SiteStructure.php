<?php

namespace App\Support;

/**
 * Central taxonomy for the marketing site's URL structure.
 *
 * Defines the trade service pages and their sub-service pages, the
 * service-area counties and cities, and the cost guides. Routes, templates,
 * and SEO meta are generated from this single source so the structure stays
 * consistent and easy to extend.
 *
 * URL structure:
 *   /{trade}                         core service page (parent targets the primary keyword)
 *   /{trade}/{service}               sub-service page
 *   /{trade}/{county|city}           trade-in-location page (generated from counties/cities)
 *   /service-areas                   local hub index
 *   /service-areas/{county}          county hub
 *   /service-areas/{city}            flat city hub (county dropped from URL)
 *   /cost-guides , /cost-guides/{slug}
 */
class SiteStructure
{
    public static function trades(): array
    {
        return [
            'heating' => [
                'label' => 'Heating',
                // Used for /{trade}/{location} combo page titles & H1s.
                'locationName' => 'Furnace Repair',
                'services' => [
                    'furnace-replacement' => [
                        'name' => 'Furnace Replacement',
                        'title' => 'Furnace Replacement & Installation in NJ | Guardian Air',
                        'description' => 'Need furnace replacement in NJ? Guardian Air installs high-efficiency furnaces across Monmouth, Middlesex & Ocean counties. Licensed & insured — call now!',
                        'h1' => 'Furnace Replacement & Installation in New Jersey',
                        'intro' => "<p>When repairs no longer make sense, professional furnace replacement in NJ restores reliable, efficient heat for years to come. Guardian Air helps homeowners <a href='/service-areas'>across Monmouth, Middlesex, and Ocean counties</a> — from Toms River to Freehold — choose a properly sized, high-efficiency system and install it cleanly, with a clear quote and no pressure.</p>",
                        'highlights' => ['Free replacement estimates', 'Properly sized systems', 'High-efficiency options', 'Flexible financing'],
                        'sections' => [
                            ['heading' => 'When to Replace vs. Repair', 'body' => "<p>If your furnace is over 15 years old, needs frequent repairs, heats unevenly, or is driving up your energy bills, replacement is usually the smarter long-term investment. A single minor repair on a newer system is worth fixing — but once <a href='/cost-guides/furnace-repair-cost'>repair costs</a> start adding up on aging equipment, a new high-efficiency furnace pays you back in lower bills and reliability.</p><p>Two numbers make the decision easier: multiply the repair quote by the furnace's age in years, and if the result tops $5,000, replacement usually wins. It's a rule of thumb, not gospel — but it keeps emotion out of an expensive decision.</p><p>We give you an honest recommendation either way. If a repair or tune-up makes more sense, we'll tell you.</p>"],
                            ['heading' => 'Furnace Sizing & Efficiency', 'body' => "<p>A furnace that's too small struggles on the coldest nights; one that's too large short-cycles and wastes fuel. We perform a proper load calculation based on your home's square footage, insulation, and layout to size the system correctly — the same care we bring to <a href='/heating/heat-pump'>heat pump installations</a>.</p><p>We install high-efficiency furnaces with AFUE ratings from 90% to 98%, meaning up to 98 cents of every fuel dollar becomes heat for your home — a major upgrade over older 70–80% units that often pairs well with an efficient boiler or hydronic system.</p>"],
                            ['heading' => 'Our Installation Process', 'body' => "<p>Every replacement starts with a free in-home assessment and a written, flat-rate quote. On installation day, our licensed technicians protect your floors, remove the old unit, install and test the new system, and clean up completely — most installs are done in a single day.</p><p>We handle permitting and code compliance so your new furnace is documented, inspected, and backed by warranty — the same standard we apply to every <a href='/heating'>heating service</a> we perform.</p>"],
                            ['heading' => 'Financing & Rebates', 'body' => "<p>A new furnace is a big purchase, so we offer flexible financing options to fit your budget — see our current <a href='/offers'>offers and promotions</a>. We'll also help you take advantage of available manufacturer rebates and NJ energy-efficiency incentives on qualifying high-efficiency equipment, lowering your out-of-pocket cost.</p><p>Most financing approvals take only minutes, with terms that spread the cost into manageable monthly payments. Bring a recent utility bill to your estimate — comparing it against the projected usage of a new unit turns the payback period from a sales pitch into simple arithmetic.</p>"],
                            ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>From older colonials in Freehold to newer builds off the Parkway in Brick, our installers have replaced furnaces in just about every style of central New Jersey home. We're on the road in Monmouth, Middlesex, and Ocean counties every day, so in-home estimates are easy to schedule and follow-up service is never far away.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does furnace replacement cost in NJ?', 'a' => 'Most furnace replacements in New Jersey range from about $4,000 to $8,000 depending on the size, efficiency, and type of system, plus any ductwork or venting changes. We provide a free, written, flat-rate quote upfront and offer financing.'],
                            ['q' => 'How long does a furnace installation take?', 'a' => 'A standard furnace replacement is usually completed in a single day — typically four to eight hours. Switching fuel types or modifying ductwork can add time, which we explain in your estimate.'],
                            ['q' => 'What furnace efficiency rating should I choose?', 'a' => 'Furnace efficiency is measured by AFUE. Standard units start around 80%, while high-efficiency models reach 90–98%. A higher AFUE costs more upfront but lowers your heating bills — we help you weigh the payback for your home.'],
                            ['q' => 'Are there rebates for a high-efficiency furnace in NJ?', 'a' => 'Often, yes. Manufacturer promotions and New Jersey energy-efficiency programs frequently offer rebates on qualifying high-efficiency furnaces. We help you identify and apply any available incentives.'],
                        ],
                    ],
                    'boiler-repair' => [
                        'name' => 'Boiler Repair',
                        'title' => 'Boiler Repair & Service in NJ | Guardian Air',
                        'description' => 'Need boiler repair in NJ? Guardian Air fixes hot water & steam boilers across Monmouth, Middlesex & Ocean counties — licensed, insured, fast. Call today!',
                        'h1' => 'Boiler Repair & Service in New Jersey',
                        'intro' => "<p>Reliable boiler repair in NJ keeps your home warm when you need it most. Guardian Air services hot water and steam boilers of every age across Monmouth, Middlesex, and Ocean counties — from Red Bank to Lakewood — fixing leaks, low pressure, and no-heat problems fast, with upfront flat-rate pricing.</p>",
                        'highlights' => ['Hot water & steam boilers', 'Leak & pressure diagnostics', 'No-heat emergency service', 'Repair or replace guidance'],
                        'sections' => [
                            ['heading' => 'Boiler Repair in NJ', 'body' => "<p>Boilers deliver steady, comfortable radiant heat — until a leak, low pressure, a failed circulator pump, or a faulty control leaves you in the cold. Our licensed technicians diagnose the real problem and repair it on the spot whenever possible, restoring safe, reliable warmth, and we'll quote it against typical <a href='/cost-guides/furnace-repair-cost'>heating repair costs</a>.</p><p>We service boilers across central New Jersey with honest quotes and clean workmanship, and we offer emergency service when your heat goes out.</p>"],
                            ['heading' => 'Boiler Types We Service', 'body' => "<p>We repair and maintain every common residential boiler type: natural gas, oil, and electric; hot water (hydronic) and steam systems; and high-efficiency condensing boilers. Whether your home in Freehold or Toms River runs cast-iron radiators, baseboard, or in-floor radiant heat, we have the parts and expertise to fix it.</p><p>Steam systems deserve special mention: they're common in pre-war homes around Monmouth County and unforgiving of amateur work. Our technicians understand pressure controls, low-water cutoffs, and proper venting — the details that keep steam heat safe and quiet.</p>"],
                            ['heading' => 'Boiler Maintenance', 'body' => "<p>Annual boiler maintenance prevents the most common breakdowns and keeps your system running efficiently, much like a yearly <a href='/heating/furnace-tune-up'>furnace tune-up</a>. We check pressure and water levels, inspect for leaks and corrosion, test safety controls, and clean key components — protecting your investment and your warranty.</p><p>Fall is the smart time to book, before the season's first cold snap exposes every neglected boiler in the region at once. A maintenance visit takes about an hour and ends with a written report on your system's condition.</p>"],
                            ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>Steam radiators in a Red Bank Victorian or baseboard hydronics in a Howell split-level — our boiler technicians work on both every week. With crews based throughout <a href='/service-areas/monmouth-county'>Monmouth</a>, Middlesex, and Ocean counties, help gets to you quickly when the radiators go cold.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does boiler repair cost in NJ?', 'a' => 'Most boiler repairs in New Jersey range from about $200 to $700 depending on the failed part — a circulator pump, valve, or control board, for example. We provide a flat-rate quote before any work begins.'],
                            ['q' => 'What are common boiler problems?', 'a' => 'The most common issues are low pressure, leaks from valves or fittings, a failed circulator pump, no heat from a faulty control or thermostat, and strange banging (kettling) from scale buildup. We diagnose and fix all of these.'],
                            ['q' => 'Should I repair or replace my boiler?', 'a' => 'Most boiler problems are repairable. A leaking heat exchanger or a unit over 15–20 years old with frequent failures usually points to replacement. We give you an honest recommendation either way.'],
                            ['q' => 'How often should a boiler be serviced?', 'a' => 'At least once a year, ideally in early fall before heating season. Annual maintenance catches small problems early, keeps the boiler efficient, and helps avoid mid-winter breakdowns.'],
                        ],
                    ],
                    'heat-pump' => [
                        'name' => 'Heat Pump Service',
                        'title' => 'Heat Pump Installation & Repair in NJ | Guardian Air',
                        'description' => 'Heat pump installation in NJ — Guardian Air installs & repairs efficient heat pumps across Monmouth, Middlesex & Ocean counties. Licensed & insured — call!',
                        'h1' => 'Heat Pump Installation & Repair in New Jersey',
                        'intro' => "<p>Professional heat pump installation in NJ delivers efficient heating and cooling from a single system. Guardian Air installs, repairs, and maintains heat pumps across Monmouth, Middlesex, and Ocean counties — from Toms River to Old Bridge — for dependable year-round comfort and lower energy bills.</p>",
                        'highlights' => ['Install, repair & replace', 'Year-round heating & cooling', 'Energy-efficient systems', 'Rebates & financing'],
                        'sections' => [
                            ['heading' => 'Heat Pump Installation in NJ', 'body' => "<p>A properly sized, professionally installed heat pump is one of the most efficient ways to heat and cool a New Jersey home. We help you choose between air-source and <a href='/cooling/ductless-mini-split'>ductless (mini-split) systems</a>, perform a load calculation for correct sizing, and install it cleanly with a clear, flat-rate quote.</p><p>We install heat pumps across central New Jersey, handling permitting and code compliance so the job is documented and warranty-backed.</p><p>Installation quality matters as much as the equipment itself: refrigerant charge, line-set length, and airflow setup all affect real-world efficiency. Our installers commission every system against the manufacturer's specifications and walk you through the thermostat before leaving.</p>"],
                            ['heading' => 'How Heat Pumps Work', 'body' => "<p>Instead of burning fuel, a heat pump moves heat — pulling warmth from outdoor air into your home in winter and reversing in summer to cool, which can replace a separate <a href='/cooling/ac-installation'>central air conditioner</a>. Because it transfers heat rather than generating it, a heat pump can deliver several times more energy than it consumes, which is why it's so efficient.</p>"],
                            ['heading' => 'Efficiency & Savings', 'body' => "<p>Modern heat pumps carry high SEER2 (cooling) and HSPF2 (heating) ratings, often cutting energy use compared with older systems and electric resistance heat. Pairing one system for heating and cooling also simplifies maintenance and can qualify for valuable rebates and tax incentives — ask about current <a href='/offers'>seasonal offers</a>.</p><p>For homes currently heating with oil or propane, the savings are usually dramatic — electricity beats both per unit of delivered heat in most of central New Jersey. We'll run the numbers against your actual usage during the estimate.</p>"],
                            ['heading' => 'Cold-Climate Performance, Repair & Service', 'body' => "<p>Today's cold-climate heat pumps perform efficiently well below freezing, making them a strong fit for New Jersey winters. We also repair and tune up existing heat pumps — addressing refrigerant, defrost, and airflow issues — across Monmouth, Middlesex, and Ocean counties, including Freehold, Brick, Red Bank, and Lakewood.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does heat pump installation cost in NJ?', 'a' => 'Heat pump installation in New Jersey typically ranges from about $5,000 to $12,000 depending on system type (ducted or ductless), capacity, and the number of zones. We provide a free written quote and offer financing.'],
                            ['q' => 'Are heat pumps energy efficient?', 'a' => 'Very. Because a heat pump moves heat rather than generating it, it can deliver two to four times more energy than it uses, often lowering both heating and cooling costs compared with older systems.'],
                            ['q' => 'Do heat pumps work in cold New Jersey winters?', 'a' => 'Yes. Modern cold-climate heat pumps are designed to heat efficiently well below freezing. For the coldest snaps, we can pair one with backup heat or recommend a dual-fuel setup.'],
                            ['q' => 'Are there rebates for heat pumps in NJ?', 'a' => 'Often, yes. New Jersey energy programs and federal incentives frequently offer rebates and tax credits on qualifying high-efficiency heat pumps. We help you identify and apply any available savings.'],
                        ],
                    ],
                    'furnace-tune-up' => [
                        'name' => 'Furnace Tune-Up',
                        'title' => 'Furnace Tune-Up & HVAC Maintenance in NJ | Guardian Air',
                        'description' => 'Book a furnace tune up in NJ with Guardian Air — maintenance across Monmouth, Middlesex & Ocean counties that prevents breakdowns. Licensed & insured!',
                        'h1' => 'Furnace Tune-Up & HVAC Maintenance in New Jersey',
                        'intro' => "<p>A professional furnace tune up in NJ keeps your heating system safe, efficient, and reliable all winter. Guardian Air provides multi-point furnace maintenance across Monmouth, Middlesex, and Ocean counties — from Brick to Old Bridge — catching small problems before they become no-heat emergencies.</p>",
                        'highlights' => ['Multi-point safety inspection', 'Prevents winter breakdowns', 'Improves energy efficiency', 'Maintenance plans available'],
                        'sections' => [
                            ['heading' => 'Furnace Tune-Up in NJ', 'body' => "<p>Most no-heat emergencies are preventable with a short annual tune-up that costs far less than a <a href='/heating/furnace-replacement'>full furnace replacement</a>. Our licensed technicians inspect, clean, and test your furnace so it runs safely and efficiently through the coldest months — and we recommend scheduling in early fall, before the first cold snap.</p><p>We provide furnace tune-ups across central New Jersey with flat-rate pricing and no upsells.</p>"],
                            ['heading' => "What's Included", 'body' => "<p>Our multi-point tune-up covers the components that matter: we inspect and clean the burners and flame sensor, check the heat exchanger for cracks, test the ignition and safety controls, verify gas pressure and airflow, replace or check the filter, and run a carbon monoxide safety check — then give you a clear report on your system's condition, including any <a href='/heating/boiler-repair'>boiler concerns</a> we spot.</p><p>The visit ends with a conversation, not just a checklist: we explain what we measured, what's wearing, and what — if anything — to budget for. You'll know your system's true condition before winter tests it.</p>"],
                            ['heading' => 'HVAC Maintenance Plans', 'body' => "<p>Our maintenance plans bundle your annual heating and <a href='/cooling/ac-tune-up'>cooling tune-ups</a> with priority scheduling and discounts on repairs. It's the easiest way to protect your equipment, keep warranties valid, and never forget seasonal service — popular with homeowners in Brick, Old Bridge, and Red Bank.</p><p>Members never have to remember to book: we reach out when each season's visit comes due and schedule around your calendar. Plans run month to month, with no long-term commitment required.</p>"],
                            ['heading' => 'Why It Matters & Where We Serve', 'body' => "<p>An hour of maintenance each fall beats a no-heat emergency in January: lower bills, longer equipment life, and a documented safety check for your records. Our tune-up routes run through all three counties weekly — from Middletown and Howell down to Jackson and Barnegat — so a convenient appointment is easy to find.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does a furnace tune-up cost in NJ?', 'a' => 'A single furnace tune-up in New Jersey typically runs about $100 to $200, and is often discounted or included with a maintenance plan. We quote the price upfront with no hidden fees.'],
                            ['q' => 'How often should I tune up my furnace?', 'a' => 'At least once a year, ideally in early fall before heating season. An annual tune-up keeps the system efficient, catches issues early, and helps avoid mid-winter breakdowns.'],
                            ['q' => "What's included in a furnace tune-up?", 'a' => 'A full tune-up covers inspecting and cleaning the burners and flame sensor, checking the heat exchanger, testing ignition and safety controls, verifying gas pressure and airflow, checking the filter, and a carbon monoxide safety check.'],
                            ['q' => 'Do you offer HVAC maintenance plans?', 'a' => 'Yes. Our maintenance plans include seasonal heating and cooling tune-ups, priority scheduling, and repair discounts — tailored to your equipment and budget.'],
                        ],
                    ],
                ],
            ],
            'cooling' => [
                'label' => 'Cooling',
                'locationName' => 'AC Repair',
                'services' => [
                    'ac-installation' => [
                        'name' => 'AC Installation',
                        'title' => 'AC Installation & Central Air in NJ | Guardian Air',
                        'description' => 'Need AC installation in NJ? Guardian Air installs right-sized central air across Monmouth, Middlesex & Ocean counties. Licensed & insured — call today!',
                        'h1' => 'AC Installation & Central Air in New Jersey',
                        'intro' => "<p>Professional AC installation in NJ gives you years of reliable, low-cost cooling — when the system is sized and installed correctly. Guardian Air installs central air and high-efficiency systems for homeowners <a href='/service-areas'>across Monmouth, Middlesex, and Ocean counties</a>, from Barnegat to Woodbridge, with a clear, written quote and no pressure.</p>",
                        'highlights' => ['Free installation estimates', 'Properly sized systems', 'High-efficiency central air', 'Flexible financing'],
                        'sections' => [
                            ['heading' => 'AC Installation in NJ', 'body' => "<p>Whether you're replacing a worn-out unit or adding cooling to a home that never had it, our licensed technicians handle the entire installation — from load calculation to startup and testing. We install central air, <a href='/heating/heat-pump'>heat pumps</a>, and ductless systems from every major brand.</p><p>Every installation begins with a free in-home assessment and a flat-rate quote, so you know exactly what you're paying before any work starts.</p><p>Replacing an aging system is also the moment to fix what the old one got wrong: undersized returns, a coil mismatched to the condenser, or a thermostat mounted in the wrong spot. We look at the whole airflow path, not just the box outside.</p>"],
                            ['heading' => 'Central Air Installation', 'body' => "<p>Central air conditioning cools your whole home evenly and quietly through your existing ductwork. We install efficient condensers, coils, and air handlers matched to your home, and we inspect and seal ductwork so you don't lose cooling to leaks — pairing well with professional duct cleaning.</p><p>Matched components matter more than brand names: the condenser, coil, and air handler are certified together as a system, and mixing mismatched parts is the quickest way to lose both efficiency and the manufacturer's warranty. Every quote we write specs the full matched set, with model numbers you can verify.</p><p>If your home doesn't have ducts, we'll walk you through <a href='/cooling/ductless-mini-split'>ductless options</a> too.</p>"],
                            ['heading' => 'Sizing Your System', 'body' => "<p>Proper sizing is the single biggest factor in comfort and efficiency. An undersized AC runs constantly and struggles on the hottest days; an oversized one short-cycles, wastes energy, and leaves humidity behind — which a whole-home dehumidifier can help manage. We perform a Manual J load calculation based on your home's square footage, insulation, windows, and layout to size the system right.</p><p>Sizing also drives humidity control: a correctly sized system runs long, steady cycles that wring moisture out of the air — exactly what New Jersey's muggy summers call for. Oversized units satisfy the thermostat quickly and shut off before the air is dry, leaving rooms cold but clammy.</p>"],
                            ['heading' => 'Financing', 'body' => "<p>A new air conditioner is a major purchase, so we offer flexible financing to fit your budget — see current <a href='/offers'>offers</a> — and we help you take advantage of manufacturer rebates and New Jersey energy-efficiency incentives on qualifying high-efficiency systems.</p><p>Timing is worth a conversation too: ordering in the shoulder seasons — early spring or fall — often means better equipment availability and a more flexible installation calendar than mid-July.</p>"],
                            ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>Shore humidity in Point Pleasant, tree-shaded colonials in Middletown, new construction in Jackson — we've sized and installed cooling for all of it. Wherever you are in Monmouth, Middlesex, or Ocean county, the crew that installs your system is the same local team that services it afterward.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does AC installation cost in NJ?', 'a' => 'Most central air installations in New Jersey range from about $5,000 to $10,000 depending on system size, efficiency, and any ductwork changes. We provide a free, written, flat-rate quote and offer financing.'],
                            ['q' => 'What size air conditioner does my home need?', 'a' => 'Proper sizing depends on your home\'s square footage, insulation, windows, and layout — not a rule of thumb. We run a Manual J load calculation so your system is sized correctly for comfort and efficiency.'],
                            ['q' => 'Should I choose central air or a ductless system?', 'a' => 'Central air is ideal for homes with existing ductwork and whole-home cooling. Ductless mini-splits are perfect for homes without ducts, additions, or room-by-room control. We help you compare based on your home.'],
                            ['q' => 'How long does AC installation take?', 'a' => 'A standard central air installation is usually completed in one to two days. Adding ductwork or switching system types can take longer, which we explain in your estimate.'],
                        ],
                    ],
                    'ductless-mini-split' => [
                        'name' => 'Ductless Mini-Split',
                        'title' => 'Ductless Mini-Split Installation in NJ | Guardian Air',
                        'description' => 'Ductless AC installation in NJ — mini-splits sized & installed by licensed Guardian Air techs across Monmouth, Middlesex & Ocean counties. Book now!',
                        'h1' => 'Ductless Mini-Split Systems in New Jersey',
                        'intro' => "<p>Ductless AC installation in NJ delivers efficient, room-by-room comfort without any ductwork. Guardian Air sizes, installs, and services ductless mini-split systems for homeowners across Monmouth, Middlesex, and Ocean counties — from <a href='/cooling/old-bridge'>Old Bridge</a> to Toms River — for quiet, energy-saving heating and cooling.</p>",
                        'highlights' => ['No ductwork required', 'Room-by-room control', 'Heating & cooling in one', 'Quiet, efficient operation'],
                        'sections' => [
                            ['heading' => 'Ductless Mini-Splits in NJ', 'body' => "<p>A ductless mini-split pairs a small outdoor unit with one or more indoor air handlers, delivering targeted heating and cooling without ducts — a great alternative to <a href='/cooling/ac-installation'>traditional central air</a>. Our licensed technicians install single-zone and multi-zone systems cleanly, with a flat-rate quote upfront.</p><p>We install ductless systems across central New Jersey for homes of every age and layout. Indoor units come in more shapes than most homeowners expect — high-wall heads, low-profile floor consoles, and ceiling cassettes that all but disappear — and we help you pick the style that fits each room, visually and mechanically.</p>"],
                            ['heading' => 'Where They Fit (Older Homes, Additions)', 'body' => "<p>Ductless mini-splits shine where traditional ducted AC can't easily go: older homes in Red Bank or Freehold without existing ductwork, finished attics and basements, garages, sunrooms, and home additions. They're also great for cooling a single hot room or adding zoned comfort to specific areas.</p><p>Mini-splits solve the second-floor problem, too: if upstairs bakes every July while the thermostat downstairs reads fine, a single zone in the hottest room is often cheaper and more effective than reworking the whole duct system.</p>"],
                            ['heading' => 'Benefits', 'body' => "<p>Because there are no ducts to leak, mini-splits are extremely efficient — often the lowest-operating-cost option available. Each zone has its own thermostat for personalized comfort, they run very quietly, and they provide both heating and cooling from one system year-round, much like an air-source <a href='/heating/heat-pump'>heat pump</a>.</p><p>Upkeep is simple as well — washable filters in each indoor head and an annual professional check keep the system at rated efficiency, and most homeowners handle the filter rinses themselves between visits.</p>"],
                            ['heading' => 'Installation & Serving 3 Counties', 'body' => "<p>We handle sizing, mounting, and refrigerant line work for a clean, professional install — most completed in a day. Mini-splits are especially popular in the duct-free older housing around Red Bank and New Brunswick, and we install them anywhere in our three-county service area.</p><p>A typical single-zone install needs only a three-inch wall opening and a level spot for the outdoor unit; multi-zone layouts get a site visit to plan line-set routes. Either way, you'll have a fixed written price before we drill anything.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does a ductless mini-split cost in NJ?', 'a' => 'A single-zone ductless system in New Jersey typically runs about $3,500 to $6,000 installed, while multi-zone systems cost more depending on the number of indoor units. We provide a free written quote and offer financing.'],
                            ['q' => 'How does a ductless mini-split work?', 'a' => 'A small outdoor compressor connects to one or more wall- or ceiling-mounted indoor units through a thin refrigerant line, delivering heating and cooling directly to each room — no ductwork required.'],
                            ['q' => 'Single-zone or multi-zone — which do I need?', 'a' => 'A single-zone system is ideal for one room or addition. Multi-zone systems run several indoor units off one outdoor unit, giving independent temperature control in multiple rooms. We help you choose based on your home.'],
                            ['q' => 'Are ductless mini-splits energy efficient?', 'a' => 'Very. With no duct losses and inverter-driven compressors, mini-splits are among the most efficient systems available and often qualify for rebates and tax incentives.'],
                        ],
                    ],
                    'ac-tune-up' => [
                        'name' => 'AC Tune-Up',
                        'title' => 'AC Tune-Up & Maintenance in NJ | Guardian Air',
                        'description' => 'Book an AC tune up in NJ with Guardian Air — licensed air conditioner maintenance across Monmouth, Middlesex & Ocean counties. Prevent breakdowns — call!',
                        'h1' => 'AC Tune-Up & Maintenance in New Jersey',
                        'intro' => "<p>An AC tune up in NJ each spring is the difference between a system that coasts through August and one that quits during the first heatwave. Guardian Air performs multi-point air conditioner maintenance for homeowners from Old Bridge to Point Pleasant, finding worn parts and dirty coils while they're still cheap to address.</p>",
                        'highlights' => ['Coil cleaning & inspection', 'Refrigerant level check', 'Prevents summer breakdowns', 'Maintenance plans available'],
                        'sections' => [
                            ['heading' => 'AC Tune-Up in NJ', 'body' => "<p>Air conditioners quit on the hottest days because that's when they work hardest — and most of those failures start as small faults a spring visit would have caught. For a fraction of what a new <a href='/cooling/ac-installation'>AC installation</a> costs, our licensed technicians clean, inspect, and test the whole system before the cooling season puts it under load.</p><p>Tune-up pricing is flat-rate, and our techs are there to maintain your equipment — not to sell you parts you don't need.</p><p>There's a warranty angle as well: most manufacturers require proof of annual professional maintenance to honor parts claims. A skipped year can turn a covered compressor failure into a four-figure bill — your tune-up record protects you.</p>"],
                            ['heading' => "What's Included", 'body' => "<p>Our multi-point tune-up covers the components that matter: we clean the condenser and evaporator coils, check refrigerant levels, test the capacitor and electrical connections, clear the condensate drain, inspect the blower, replace or check the filter, and verify the system is cooling efficiently — and we'll flag any repair against typical <a href='/cost-guides/ac-repair-cost'>AC repair costs</a>.</p>"],
                            ['heading' => 'Pre-Summer Checklist', 'body' => "<p>Before the heat hits, we make sure your AC is ready: clear debris from the outdoor unit, confirm proper airflow, calibrate the thermostat, and flag any worn parts so you can address them on your schedule — not during a 95-degree emergency. Book your spring tune-up early to lock in a convenient slot.</p><p>Between visits, two habits do the most good: swap the filter on schedule, and keep shrubs and grass clippings a couple of feet clear of the outdoor unit so the condenser can breathe.</p>"],
                            ['heading' => 'Maintenance Plans & Service Area', 'body' => "<p>Our maintenance plans bundle your seasonal cooling and <a href='/heating/furnace-tune-up'>heating tune-ups</a> with priority scheduling and repair discounts. Spring tune-up routes cover everywhere from Aberdeen and Edison down the shore to Barnegat, so booking around your schedule is simple.</p><p>Plan members also get first pick of appointment windows during the spring crunch, when one-off bookings can run several weeks out.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does an AC tune-up cost in NJ?', 'a' => 'Plan on roughly $100 to $200 for a standalone visit; maintenance-plan members get it included along with priority scheduling. The price is confirmed when you book — no on-site surprises.'],
                            ['q' => 'How often should I tune up my AC?', 'a' => 'At least once a year, ideally in early spring before cooling season. Annual maintenance keeps the system efficient, catches issues early, and helps avoid mid-summer breakdowns.'],
                            ['q' => "What's included in an AC tune-up?", 'a' => 'A full tune-up covers cleaning the coils, checking refrigerant, testing the capacitor and electrical connections, clearing the condensate drain, checking the filter and blower, and verifying the system cools efficiently.'],
                            ['q' => 'When is the best time to schedule an AC tune-up?', 'a' => 'Early spring is ideal — before the first stretch of hot days fills the calendar. Booking ahead of the rush means more appointment choices and a system proven ready before you actually need it.'],
                        ],
                    ],
                ],
            ],
            'plumbing' => [
                'label' => 'Plumbing',
                'locationName' => 'Licensed Plumber',
                'services' => [
                    'emergency-plumber' => [
                        'name' => 'Emergency Plumber',
                        'title' => 'Emergency Plumber NJ — 24/7 | Guardian Air',
                        'description' => 'Need an emergency plumber in NJ? Guardian Air offers 24/7 licensed & insured emergency plumbing across Monmouth, Middlesex & Ocean counties. Call now!',
                        'h1' => '24/7 Emergency Plumber in New Jersey',
                        'intro' => "<p>When water is pouring through your ceiling at midnight, you need an emergency plumber in NJ who actually answers. Guardian Air provides 24/7 licensed and insured emergency plumbing across <a href='/service-areas'>Monmouth, Middlesex, and Ocean counties</a> — from Jackson to Aberdeen — responding fast to stop the damage and get your home back to normal.</p>",
                        'highlights' => ['24/7 emergency response', 'Burst pipes & major leaks', 'Fast water shutoff & repair', 'Flat-rate pricing, even after hours'],
                        'sections' => [
                            ['heading' => 'Emergency Plumber NJ', 'body' => "<p>Plumbing emergencies never wait for business hours. Our licensed plumbers respond day or night to burst pipes, overflowing toilets, sewage backups, and no-water situations — arriving stocked to handle most repairs on the first visit.</p><p>We serve homeowners across central New Jersey with honest, flat-rate pricing benchmarked to typical <a href='/cost-guides/plumber-cost'>plumber costs</a>, so you'll never pay extra for nights, weekends, or holidays.</p><p>Speed matters because water damage compounds by the minute: a half-inch supply line releases roughly fifty gallons in ten minutes, and soaked drywall, subfloor, and insulation rarely dry in place. Getting the flow stopped and repairs started the same night is the difference between a plumbing bill and an insurance claim.</p>"],
                            ['heading' => '24 Hour Plumber', 'body' => "<p>As a true 24 hour plumber, we keep technicians on call around the clock. Save our number now so that when a pipe bursts in Brick or a <a href='/plumbing/water-heater'>water heater fails</a> in Old Bridge, help is one call away — not a voicemail you won't hear back from until morning.</p><p>Night calls get the same crew quality as day calls — no third-party answering service handing your address to whoever bites. The plumber who answers the phone is briefed on exactly what you described before the truck rolls.</p>"],
                            ['heading' => 'What Counts as a Plumbing Emergency', 'body' => "<p>Call immediately for burst or frozen pipes, major <a href='/plumbing/leak-detection'>leaks</a>, sewage backups, no water, a gas-line odor, or an overflowing toilet you can't stop. These can cause fast, expensive damage. For dripping faucets or a single slow drain, same-day or next-day service is usually fine — and we'll tell you honestly which one you have.</p>"],
                            ['heading' => 'Our Response Time', 'body' => "<p>Because our plumbers are local to Monmouth, Middlesex, and Ocean counties, we can often reach you within the hour for true emergencies. The first thing we'll do is help you shut off the water to limit damage, then diagnose and repair the problem with a clear, flat-rate quote.</p><p>While the truck is en route we stay available by phone: walking you through the shutoff, confirming any gas smell is handled safely, and telling you what to move out of the water's path. Those first minutes matter as much as the repair itself.</p>"],
                            ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>Our on-call plumbers live and work around the region — they aren't dispatched from out of the area. That's why a burst pipe in Long Branch or a backed-up line in South Amboy gets a fast knock on the door at 2 AM instead of a callback in the morning.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does an emergency plumber cost in NJ?', 'a' => 'Emergency plumbing in New Jersey typically ranges from about $150 to $500+ depending on the problem and parts. Guardian Air charges flat-rate pricing with no extra fees for nights, weekends, or holidays, and quotes the full cost before any work begins.'],
                            ['q' => 'How fast can an emergency plumber reach me?', 'a' => "Because our plumbers are local to all three counties, we can often be on-site within the hour for true emergencies, and we'll guide you on shutting off the water while we're on the way."],
                            ['q' => 'Do you offer 24-hour plumbing in Monmouth County?', 'a' => 'Yes — Monmouth County is home turf for us. Plumbers are on call overnight near Freehold and Red Bank year-round, and the after-hours price is the same flat rate as a weekday afternoon.'],
                            ['q' => 'What should I do first in a plumbing emergency?', 'a' => 'Shut off the water — either at the fixture valve or your main shutoff — to limit damage, then call us. For a suspected gas leak, leave the home first and call from outside.'],
                        ],
                    ],
                    'water-heater' => [
                        'name' => 'Water Heater Service',
                        'title' => 'Water Heater Repair & Replacement in NJ | Guardian Air',
                        'description' => 'Need water heater repair in NJ? Guardian Air repairs & replaces tank and tankless units across Monmouth, Middlesex & Ocean counties. Licensed — call today!',
                        'h1' => 'Water Heater Repair & Replacement in New Jersey',
                        'intro' => "<p>Reliable water heater repair in NJ gets your hot water back fast. Guardian Air repairs, replaces, and installs both tank and tankless water heaters for homeowners across Monmouth, Middlesex, and Ocean counties — from Toms River to Old Bridge — with upfront, flat-rate pricing.</p>",
                        'highlights' => ['Tank & tankless service', 'Repair or replace guidance', 'Fast, clean installation', 'Reliable hot water restored'],
                        'sections' => [
                            ['heading' => 'Water Heater Repair in NJ', 'body' => "<p>No hot water, rusty water, popping noises, or a leaking tank? Our licensed plumbers diagnose the real cause — a failed heating element, thermostat, anode rod, or valve — and repair it fast, often for less than typical <a href='/cost-guides/plumber-cost'>plumber costs</a>.</p><p>We service every major brand of gas, electric, and tankless water heater across <a href='/service-areas'>central New Jersey</a> with honest, flat-rate quotes.</p><p>Diagnosis starts with the symptom pattern: water that runs hot then turns cold fast points to a failed dip tube or lower element, while lukewarm-at-best suggests thermostat or burner trouble. Reading those signs correctly is why our first-visit fix rate stays high.</p>"],
                            ['heading' => 'Water Heater Replacement', 'body' => "<p>When a tank is leaking from the bottom or simply past its prime, replacement is the smart move. We help you choose the right size and type — including efficient <a href='/plumbing/tankless-water-heater'>tankless models</a> — haul away the old unit, and install the new one cleanly and to code, usually the same day.</p><p>Code catches many homeowners by surprise: a replacement often requires updated venting, a drain pan, or an expansion tank that the old install never had. We fold those requirements into the quote upfront rather than springing them on installation day.</p>"],
                            ['heading' => 'Signs of Failure', 'body' => "<p>Watch for water that never gets hot enough or runs out quickly, rusty or discolored hot water, rumbling or popping sounds from sediment, moisture or rust around the base, and rising energy bills. Catching these early often means a simple repair instead of calling an <a href='/plumbing/emergency-plumber'>emergency plumber</a> for water damage from a burst tank.</p><p>The age check takes ten seconds: the serial number on the manufacturer's label encodes the production date, usually in its first few characters. Not sure how to read yours? Snap a photo and send it over — we'll decode it and tell you honestly where the unit stands.</p>"],
                            ['heading' => 'Tank vs Tankless', 'body' => "<p>A tank water heater costs less upfront and lasts 8–12 years. A tankless unit delivers endless hot water on demand, takes up far less space, and can last 20+ years. We'll explain the trade-offs and help you pick what fits your home and budget.</p><p>Household rhythm decides it more than math: back-to-back showers and a big soaking tub favor tankless endurance, while a predictable two-person routine rarely outruns a well-sized tank. We ask how you actually live before recommending either.</p>"],
                            ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>Hard water and shore humidity shorten tank life in plenty of Ocean County homes, so we keep common sizes stocked for same-day swaps. From Perth Amboy down to Point Pleasant, hot water is usually restored the day you call.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does water heater repair cost in NJ?', 'a' => 'Most water heater repairs in New Jersey run about $150 to $600 depending on the part — a thermostat or element is lower, while a gas valve is higher. We provide a flat-rate quote before any work begins.'],
                            ['q' => 'Should I repair or replace my water heater?', 'a' => 'If the unit is under 8 years old and the issue is a single component, repair usually makes sense. A leaking tank or an older unit with repeated problems is better replaced. We give you an honest recommendation.'],
                            ['q' => 'How long does a water heater last?', 'a' => 'A traditional tank water heater typically lasts 8 to 12 years; a tankless unit can run 20 years or more with maintenance. Annual flushing extends the life of either.'],
                            ['q' => 'Is a tankless water heater worth it?', 'a' => 'For many homes, yes — endless hot water, lower energy bills, a smaller footprint, and a longer lifespan. We help you decide whether the upfront cost pays off for your household.'],
                        ],
                    ],
                    'tankless-water-heater' => [
                        'name' => 'Tankless Water Heater',
                        'title' => 'Tankless Water Heater Installation in NJ | Guardian Air',
                        'description' => 'Tankless water heater installation in NJ — Guardian Air installs efficient units across Monmouth, Middlesex & Ocean counties. Licensed & insured — call!',
                        'h1' => 'Tankless Water Heater Installation in New Jersey',
                        'intro' => "<p>A tankless water heater in NJ delivers endless hot water on demand while saving space and energy. Guardian Air sizes and installs high-efficiency tankless systems for homeowners across <a href='/service-areas/monmouth-county'>Monmouth</a>, Middlesex, and Ocean counties — from Middletown to Lakewood — with a clear, flat-rate quote.</p>",
                        'highlights' => ['Endless hot water on demand', 'Lower energy bills', 'Space-saving design', 'Longer lifespan than tanks'],
                        'sections' => [
                            ['heading' => 'Tankless Water Heaters in NJ', 'body' => "<p>Unlike a <a href='/plumbing/water-heater'>traditional tank that constantly reheats stored water</a>, a tankless unit heats water only when you need it. Our licensed plumbers install gas and electric tankless systems from every major brand across central New Jersey, handling venting, gas, and code compliance for a clean, professional result.</p><p>Annual descaling is the one maintenance habit tankless owners need: hard water deposits scale inside the heat exchanger, and a yearly flush keeps efficiency at spec and the warranty intact. We offer it as a quick standalone visit or as part of a maintenance plan.</p>"],
                            ['heading' => 'Benefits vs Tank', 'body' => "<p>Tankless systems never run out of hot water during back-to-back showers, use less energy because there's no standby heat loss, free up valuable floor space, and typically last 20+ years — roughly double a conventional tank's lifespan. Many models also qualify for rebates and tax incentives.</p><p>There's also the failure mode to consider: when a tank dies, it usually dies wet — forty gallons on the utility room floor. A tankless unit simply stops heating, which makes its end-of-life a scheduling question rather than a cleanup.</p>"],
                            ['heading' => 'Installation', 'body' => "<p>Switching from a tank to tankless can involve upgrading the gas line and venting, which is why professional installation matters. We assess your home, size the unit to your hot-water demand, and install it to code — most jobs completed in a day, so <a href='/contact'>schedule your estimate</a> to get started.</p><p>Placement is flexible in ways tanks never were: a garage wall, a closet, even an exterior-rated model outdoors where conditions allow. Reclaiming that floor space is a quiet renovation bonus in smaller homes.</p>"],
                            ['heading' => 'Sizing & Serving 3 Counties', 'body' => "<p>Proper sizing (measured in gallons per minute) ensures the unit keeps up with your household. We've converted homes from Woodbridge to Barnegat to on-demand hot water, and every install is matched to your fixtures and incoming water temperature — never a guess.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does a tankless water heater cost in NJ?', 'a' => 'Installed, a tankless water heater in New Jersey typically runs about $2,500 to $5,000 depending on the model and any gas or venting upgrades. We provide a free written quote and offer financing.'],
                            ['q' => 'Do tankless water heaters really save money?', 'a' => 'Yes — by heating water only on demand, they eliminate standby heat loss and usually lower energy bills. Combined with a 20+ year lifespan, they often pay off over time, and may qualify for rebates.'],
                            ['q' => 'What size tankless water heater do I need?', 'a' => 'Sizing is based on your peak hot-water demand in gallons per minute and your incoming water temperature. We calculate the right capacity so the unit keeps up with your household.'],
                            ['q' => 'How long does a tankless water heater installation take?', 'a' => 'A straightforward swap of an existing tankless unit takes a few hours. Converting from a tank — which can involve new venting and a gas-line upgrade — is typically a full day. Your written quote includes the timeline.'],
                        ],
                    ],
                    'leak-detection' => [
                        'name' => 'Leak Detection',
                        'title' => 'Leak Detection & Pipe Repair in NJ | Guardian Air',
                        'description' => 'Need leak detection in NJ? Guardian Air finds & fixes hidden leaks across Monmouth, Middlesex & Ocean counties — non-invasive, licensed & insured. Call!',
                        'h1' => 'Leak Detection & Pipe Repair in New Jersey',
                        'intro' => "<p>Professional leak detection in NJ finds hidden leaks before they cause thousands in damage. Guardian Air uses non-invasive equipment to pinpoint leaks behind walls, under floors, and in slabs for homeowners across Monmouth, Middlesex, and Ocean counties — from Toms River to Red Bank — then repairs the source fast.</p>",
                        'highlights' => ['Non-invasive detection', 'Finds hidden & slab leaks', 'Stops costly water damage', 'Permanent repairs'],
                        'sections' => [
                            ['heading' => 'Leak Detection in NJ', 'body' => "<p>A hidden leak can quietly rot framing, ruin drywall, and spike your water bill for months. Our licensed plumbers use acoustic sensors, thermal imaging, and pressure testing to locate the exact source — no demolition guesswork — then repair it cleanly, calling in an <a href='/plumbing/emergency-plumber'>emergency plumber</a> if a pipe has already burst.</p><p>Watch for an unexplained jump in your water bill, the sound of running water when everything is off, damp spots or stains, low pressure, or a musty smell that may point to <a href='/indoor-air-quality/mold-testing'>hidden mold</a>.</p><p>The meter test is a homeowner's first tool: shut every fixture, note the meter reading, wait thirty minutes, and check again. Movement with everything off confirms water is escaping somewhere — and that's when precision location equipment earns its keep.</p>"],
                            ['heading' => 'Slab Leaks', 'body' => "<p>Leaks in the pipes beneath your concrete slab are especially damaging and hard to spot. Signs include warm spots on the floor, cracks, and the sound of running water. We locate slab leaks precisely and repair or reroute the line with minimal disruption — and if the line ties into your <a href='/drains/sewer-repair'>main sewer</a>, we handle that too.</p><p>Repair strategy depends on the run: a single bad spot can be opened and patched, but aging copper that's failed once often gets rerouted overhead instead — abandoning the slab run entirely so the same pipe can't fail twice.</p>"],
                            ['heading' => 'Burst Pipes', 'body' => "<p>From frozen winter pipe bursts to corroded older lines, we repair and replace damaged pipe fast — and our 24/7 emergency team responds the moment a line lets go. For aging galvanized or polybutylene plumbing common in older New Jersey homes, we offer repiping with modern, long-lasting materials.</p><p>Prevention is mostly about the freeze points: hose bibs left connected, uninsulated runs along rim joists, and pipes in exterior walls. A quick fall visit hardens all three before the first deep freeze.</p>"],
                            ['heading' => 'Non-Invasive Detection & Service Area', 'body' => "<p>Our goal is to find the leak with the least possible disruption to your home. Slab-on-grade ranches near the shore hide leaks differently than basemented colonials inland — our technicians chase down both every week, in all three counties we serve.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does leak detection cost in NJ?', 'a' => 'Professional leak detection in New Jersey typically ranges from about $150 to $450 depending on the complexity, and the cost is well worth avoiding thousands in water damage. We quote it upfront and credit it toward the repair when possible.'],
                            ['q' => 'What are the signs of a slab leak?', 'a' => 'Common signs include warm spots on the floor, the sound of running water when nothing is on, an unexplained spike in your water bill, and cracks or damp areas in flooring. We confirm and locate it with non-invasive tools.'],
                            ['q' => 'How do you find a hidden water leak?', 'a' => 'We use acoustic listening equipment, thermal imaging, and pressure testing to pinpoint the exact location behind walls, under floors, or in the slab — no unnecessary demolition.'],
                            ['q' => 'Is a hidden leak a plumbing emergency?', 'a' => 'A fast leak or burst pipe is an emergency — shut off the water and call us right away. A slow hidden leak still needs prompt attention to prevent mold and structural damage, but can usually be scheduled same- or next-day.'],
                        ],
                    ],
                ],
            ],
            'indoor-air-quality' => [
                'label' => 'Indoor Air Quality',
                'locationName' => 'Air Duct Cleaning',
                'services' => [
                    'duct-cleaning' => [
                        'name' => 'Duct Cleaning',
                        'title' => 'Air Duct Cleaning in NJ | Guardian Air',
                        'description' => 'Need air duct cleaning in NJ? Guardian Air clears dust & allergens from your ducts across Monmouth, Middlesex & Ocean counties. Licensed & insured — call!',
                        'h1' => 'Air Duct Cleaning in New Jersey',
                        'intro' => "<p>Professional air duct cleaning in NJ clears the dust, pollen, and debris that build up inside your ductwork and recirculate through every room. Guardian Air cleans residential duct systems across Monmouth, Middlesex, and Ocean counties — from New Brunswick to the shore — so your system runs efficiently and the air your family breathes is noticeably cleaner.</p>",
                        'highlights' => ['Removes dust & allergens', 'Improves airflow & efficiency', 'Reduces household dust', 'Healthier air in every room'],
                        'sections' => [
                            ['heading' => 'Air Duct Cleaning in NJ', 'body' => "<p>Over years of use, ductwork collects dust, pet dander, pollen, and construction debris that your system pushes back into your living space every time it runs. Our technicians clean the full system — supply and return ducts, registers, and the air handler — leaving your home cleaner across central New Jersey.</p><p>Timing the job right multiplies its value: after any renovation (drywall dust travels), when moving into a previously owned home, or after discovering pest activity. Those three triggers account for most of the heavy debris loads we pull out of central New Jersey duct systems.</p><p>We provide honest, flat-rate quotes and treat your home with care — and if you'd like a written estimate, just get in touch to schedule.</p>"],
                            ['heading' => 'Our Process', 'body' => "<p>We use professional negative-air equipment and agitation tools to dislodge and capture debris without scattering it through your home. We protect floors and furnishings, clean each vent and trunk line, sanitize where needed, and verify airflow when we're done — a thorough job, not a quick vacuum at the register. Wondering what it costs? See our <a href='/cost-guides/duct-cleaning-cost'>duct cleaning cost guide</a>.</p><p>We follow the source-removal method industry bodies recommend: the system goes under negative pressure first, so dislodged debris is pulled into the collector rather than pushed into your rooms. Order of operations is the difference between cleaning ducts and just stirring them.</p><p>A word of caution on the '$99 whole house special': a legitimate source-removal cleaning takes a crew several hours with serious equipment. If a visit is quick and quiet, the debris stayed put — and the low price usually funds an upsell pitch.</p>"],
                            ['heading' => 'Health & Efficiency Benefits (Up to 30%)', 'body' => "<p>Clean ducts mean fewer airborne irritants for allergy and asthma sufferers, less dust resettling on surfaces, and fresher-smelling air. Pairing a cleaning with a whole-home <a href='/indoor-air-quality/air-purifier'>air purifier</a> can capture even more. Clearing blocked ducts also restores airflow, which can improve HVAC efficiency by up to 30% — lowering energy bills and easing strain on your system.</p><p>The gain is most dramatic where registers were partially blocked: restoring full airflow lets the blower hit its designed static pressure, shortening run times and easing motor wear. Many customers notice that rooms which 'never cooled right' suddenly keep up — and for allergy households, cleaning removes the settled reservoir of dander and pollen while an upgraded filter keeps new accumulation slow.</p>"],
                            ['heading' => 'Before & After', 'body' => "<p>Most homeowners are surprised by what comes out of their ducts — years of gray dust, pet hair, and debris. After cleaning, vents deliver stronger, cleaner airflow, and the difference in household dust is often noticeable within days. If you also notice musty odors, ask about <a href='/indoor-air-quality/mold-testing'>mold testing</a>.</p><p>We document the difference, too: photos inside the trunk lines before and after, so you're not taking the result on faith — and you get a dated baseline for judging when the next cleaning is actually due, rather than guessing.</p>"],
                            ['heading' => 'Air Duct Cleaning in Monmouth County', 'body' => "<p>We're a popular choice for air duct cleaning in <a href='/service-areas/monmouth-county'>Monmouth County</a>, serving Freehold, Red Bank, Middletown, and Howell. The area's mix of older homes and humid summers makes regular duct cleaning especially worthwhile for cleaner, healthier air.</p><p>Duct layouts differ across the county's housing stock — slab ranches with attic runs near the shore, basement trunk-and-branch in the older boroughs — and access points change the job plan. Our crews quote after seeing the layout, so the price reflects your house, not an average.</p>"],
                            ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>Booking is simple: one visit, one flat-rate price, and a crew that treats your home like their own. Our duct-cleaning routes also run through Middlesex and Ocean counties — from Edison and Woodbridge down to Lakewood and Barnegat.</p><p>Bundling saves a trip charge: pairing duct cleaning with dryer-vent cleaning or a seasonal tune-up gets your whole air path serviced in one appointment.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does air duct cleaning cost in NJ?', 'a' => 'Air duct cleaning in New Jersey typically ranges from about $300 to $1,000 depending on the size of your home and the number of vents. We provide a flat-rate quote upfront with no hidden fees.'],
                            ['q' => 'What are the signs my ducts need cleaning?', 'a' => 'Watch for visible dust puffing from vents, excessive household dust, musty odors when the system runs, allergy flare-ups indoors, or visible debris and pet hair in the registers.'],
                            ['q' => 'Does duct cleaning really improve air quality?', 'a' => 'Yes — removing accumulated dust, dander, and debris reduces the irritants recirculated through your home, which is especially helpful for allergy and asthma sufferers, and it can improve airflow and efficiency.'],
                            ['q' => 'What pollutants are common in New Jersey homes?', 'a' => "Common culprits are dust, pollen, pet dander, mold spores, and construction debris. New Jersey's humid summers also encourage mold growth in ducts, while tightly sealed winters trap pollutants indoors."],
                            ['q' => 'Can mold grow in air ducts?', 'a' => 'Yes. Humidity and condensation in ductwork can lead to mold growth, which then spreads spores through your home. If we find signs of mold, we recommend mold testing and the right remediation plan.'],
                            ['q' => 'How often should air ducts be cleaned?', 'a' => 'Most homes benefit from duct cleaning every three to five years, and sooner if you have pets, allergies, recent renovations, or signs of mold or heavy dust.'],
                        ],
                    ],
                    'mold-testing' => [
                        'name' => 'Mold Testing',
                        'title' => 'Mold Testing & Detection in NJ | Guardian Air',
                        'description' => 'Need mold testing in NJ? Guardian Air detects hidden mold & moisture across Monmouth, Middlesex & Ocean counties. Licensed & insured — call today!',
                        'h1' => 'Mold Testing & Detection in New Jersey',
                        'intro' => "<p>Professional mold testing in NJ finds the hidden moisture and mold behind musty odors and persistent allergy symptoms. Guardian Air assesses indoor air quality across Monmouth, Middlesex, and Ocean counties — from Toms River to Red Bank — and gives you a clear plan to fix the problem at its source.</p>",
                        'highlights' => ['Identifies hidden moisture', 'Clear, honest assessment', 'Targeted remediation plan', 'Healthier indoor air'],
                        'sections' => [
                            ['heading' => 'Mold Testing in NJ', 'body' => "<p>Musty smells, allergy flare-ups, and visible spots all point to a possible mold problem. We assess your home, identify moisture sources and affected areas, and recommend the right mix of remediation, filtration, ventilation, and <a href='/indoor-air-quality/humidifier-dehumidifier'>humidity control</a>.</p><p>Testing answers three questions remediation depends on: whether the growth is active, how far spores have traveled beyond the visible patch, and — most importantly — where the moisture is coming from. Killing mold without cutting off its water supply just schedules a rematch.</p><p>We serve homeowners across central New Jersey with honest, clear assessments — no scare tactics.</p>"],
                            ['heading' => 'Mold in HVAC Ducts', 'body' => "<p>Ductwork is a common hiding place for mold because condensation and humidity collect there, then spores spread to every room. We check your duct system and air handler, and pair testing with <a href='/indoor-air-quality/duct-cleaning'>air duct cleaning</a> when mold is present.</p><p>The giveaway is a musty smell that intensifies when the blower kicks on, then fades — the system is distributing spores from a colony somewhere in the air path. Coil pans, humidifier housings, and the first few feet of supply trunk are the usual suspects we check.</p>"],
                            ['heading' => 'Coastal Humidity & Mold', 'body' => "<p>New Jersey's humid summers — especially near the <a href='/service-areas/ocean-county'>Ocean County</a> shore in Toms River and Brick — create ideal conditions for mold. Homes with basements, crawl spaces, or past water damage are particularly at risk, which is why humidity control matters.</p><p>Crawl spaces deserve special attention near the bay: ground moisture rising into uninsulated floor cavities feeds growth you'll never see from the living space. Our inspections include those hidden zones, not just the rooms you live in.</p>"],
                            ['heading' => 'When to Test & Serving 3 Counties', 'body' => "<p>Test after water damage or flooding, when you notice musty odors or unexplained symptoms, or before buying a home. Shore-area basements and crawl spaces generate our most frequent calls, but our assessors cover every corner of Monmouth, Middlesex, and Ocean counties.</p><p>Real-estate timing matters too — testing before listing avoids surprises during the buyer's inspection, and testing before closing protects the purchase. Reports are written, dated, and usable in negotiations either way.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does mold testing cost in NJ?', 'a' => 'Mold assessments in New Jersey typically range from a basic visual evaluation to a few hundred dollars for detailed sampling, depending on the size of the area and number of samples. We explain your options upfront.'],
                            ['q' => 'What are the signs of mold in my home?', 'a' => 'Common signs include musty odors, visible spots on walls or ceilings, allergy or respiratory symptoms that improve when you leave, past water damage, and persistent humidity or condensation.'],
                            ['q' => 'Can mold grow in my HVAC ducts?', 'a' => 'Yes. Humidity and condensation in ductwork can cause mold that spreads spores through your home. We check the duct system and recommend cleaning or remediation when needed.'],
                            ['q' => 'Is household mold a health risk?', 'a' => 'It can be. Mold spores commonly trigger allergies and asthma and can cause respiratory irritation, especially for sensitive individuals. Identifying and removing the moisture source is the key to a lasting fix.'],
                        ],
                    ],
                    'air-purifier' => [
                        'name' => 'Air Purifier',
                        'title' => 'Air Purifier Installation in NJ | Guardian Air',
                        'description' => 'Air purifier installation in NJ — whole-home & UV systems installed across Monmouth, Middlesex & Ocean counties by licensed Guardian Air techs. Call today!',
                        'h1' => 'Air Purifier & UV System Installation in New Jersey',
                        'intro' => "<p>Professional air purifier installation in NJ captures allergens, dust, smoke, and microscopic particles before they circulate through your home. Guardian Air installs whole-home purifiers, UV systems, and advanced filtration across Monmouth, Middlesex, and Ocean counties — from Toms River to <a href='/service-areas/old-bridge'>Old Bridge</a>.</p>",
                        'highlights' => ['Whole-home & UV options', 'Captures microscopic particles', 'Reduces allergens & odors', 'Works with your HVAC system'],
                        'sections' => [
                            ['heading' => 'Air Purifier Installation in NJ', 'body' => "<p>A whole-home air purifier installs directly into your HVAC system, treating all the air your system moves — far more effective than a portable unit in one room. We size and install the right solution for your home and concerns across central New Jersey.</p><p>Matching technology to the complaint is the real skill: pollen and dander call for media filtration, odors and VOCs respond to carbon, and biological concerns favor UV. The wrong technology installed beautifully still won't fix the symptom you bought it for.</p><p>We explain your options clearly and provide an upfront, flat-rate quote — contact us to set up a visit.</p>"],
                            ['heading' => 'UV Germicidal Systems', 'body' => "<p>UV germicidal lights installed at the coil neutralize <a href='/indoor-air-quality/mold-testing'>mold</a>, bacteria, and viruses as air passes through, keeping your system cleaner and the circulating air healthier — a great fit for homes dealing with humidity and mold in the Ocean County shore area.</p><p>UV also keeps the coil itself clean: biofilm on a wet evaporator coil quietly steals capacity and breeds odors. Lamps need annual replacement to stay effective, which we fold into maintenance plans.</p>"],
                            ['heading' => 'HEPA Filtration', 'body' => "<p>High-efficiency media and HEPA-style filtration captures fine particles — dust, pollen, dander, and smoke — that standard one-inch filters miss. Pairing it with <a href='/indoor-air-quality/duct-cleaning'>duct cleaning</a> keeps the whole system clean, and we make sure any upgrade is matched to your system so airflow stays healthy.</p><p>That check matters: dense media on a blower that wasn't designed for it chokes airflow and can do more harm than good. We verify static pressure before and after, so the upgrade actually helps.</p>"],
                            ['heading' => 'Air Scrubbers & Serving 3 Counties', 'body' => "<p>Active air-scrubbing systems treat both the air and surfaces throughout your home. Most installations take a single visit, and we service every unit we install — anywhere in our three-county coverage area.</p><p>Most systems mount in the return plenum or at the air handler in a few hours, work invisibly, and need only periodic media or lamp changes thereafter.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does air purifier installation cost in NJ?', 'a' => 'Whole-home air purifier installation in New Jersey typically ranges from about $500 to $2,500 depending on the technology (media, UV, or active air scrubber). We provide a free written quote.'],
                            ['q' => 'UV light or HEPA filtration — which is better?', 'a' => 'They do different jobs: HEPA-style media captures particles like dust and pollen, while UV light neutralizes mold, bacteria, and viruses. Many homes benefit from both, and we recommend the right mix.'],
                            ['q' => 'Whole-home or portable air purifier?', 'a' => 'A whole-home system treats all the air your HVAC moves and runs quietly out of sight, outperforming portable units that only clean one room. We help you choose based on your home and goals.'],
                            ['q' => 'Who benefits most from an air purifier?', 'a' => 'Households with allergies, asthma, pets, smokers, or anyone sensitive to dust and odors see the biggest difference — as do homes in humid areas prone to mold.'],
                        ],
                    ],
                    'humidifier-dehumidifier' => [
                        'name' => 'Humidifier & Dehumidifier',
                        'title' => 'Whole-Home Humidifiers & Dehumidifiers in NJ | Guardian Air',
                        'description' => 'Need a whole home humidifier in NJ? Guardian Air installs humidifiers & dehumidifiers across Monmouth, Middlesex & Ocean counties. Licensed — call today!',
                        'h1' => 'Humidity Control for New Jersey Homes',
                        'intro' => "<p>A whole home humidifier in NJ — or a dehumidifier for damp summers — keeps your home at a healthy, comfortable balance year-round. Guardian Air installs whole-home humidity control across Monmouth, Middlesex, and Ocean counties, from Toms River to <a href='/service-areas/freehold'>Freehold</a>.</p>",
                        'highlights' => ['Balanced year-round humidity', 'Protects health & comfort', 'Prevents mold & dry air', 'Whole-home solutions'],
                        'sections' => [
                            ['heading' => 'Whole-Home Humidifiers', 'body' => "<p>Dry winter air causes static, cracked skin, irritated sinuses, and damage to woodwork and furniture. A whole-home humidifier installs into your HVAC system to add balanced moisture throughout the house automatically — no refilling portable units. We install and service them across central New Jersey.</p><p>Bypass, fan-powered, and steam models suit different homes: bypass units are economical for moderate needs, fan-powered cover more square footage, and steam delivers precise humidity regardless of furnace runtime. We size to your home's tightness as much as its square footage.</p>"],
                            ['heading' => 'Dehumidifiers', 'body' => "<p>Too much moisture breeds <a href='/indoor-air-quality/mold-testing'>mold</a> and dust mites and leaves the air feeling heavy and clammy. A whole-home dehumidifier removes excess humidity to protect your home and comfort, especially valuable for basements and crawl spaces.</p><p>Unlike portable units that fill a bucket and quit, a ducted dehumidifier drains automatically and treats the whole envelope — including the storage areas where dampness does its quietest damage.</p>"],
                            ['heading' => 'Coastal Humidity (Ocean County)', 'body' => "<p>Homes near the shore in Toms River, Brick, and across <a href='/service-areas/ocean-county'>Ocean County</a> deal with high summer humidity that strains comfort and encourages mold. Whole-home humidity control keeps these homes healthier and more comfortable all season.</p><p>Set point matters: holding a shore home near 50% in summer protects woodwork and electronics without the energy cost of over-drying, and a built-in humidistat handles the adjustment as the weather swings.</p>"],
                            ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>Whether it's static shocks and dry sinuses in a Freehold winter or a clammy Barnegat basement in July, one properly sized unit usually solves it. Flat-rate installation quotes are free anywhere we work.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does a whole-home humidifier or dehumidifier cost in NJ?', 'a' => 'Installed, whole-home humidifiers in New Jersey typically run about $400 to $1,000, while whole-home dehumidifiers range from about $1,500 to $2,800 depending on capacity. We provide a free written quote.'],
                            ['q' => 'What indoor humidity level is ideal?', 'a' => 'Most homes are most comfortable between 30% and 50% relative humidity. Too low causes dry skin and static; too high encourages mold and dust mites. Whole-home systems hold the right balance automatically.'],
                            ['q' => 'Do shore homes really need a dehumidifier?', 'a' => "Often, yes. Coastal Ocean County homes in Toms River and Brick face high summer humidity that encourages mold and that clammy feeling — a whole-home dehumidifier makes a noticeable difference."],
                            ['q' => 'Can one system handle both humidifying and dehumidifying?', 'a' => 'They are separate units doing opposite jobs: a humidifier adds moisture in winter, a dehumidifier removes it in summer. Many central New Jersey homes benefit from both, each holding its target level automatically.'],
                        ],
                    ],
                ],
            ],
            'drains' => [
                'label' => 'Drains',
                'locationName' => 'Drain Cleaning',
                'services' => [
                    'sewer-repair' => [
                        'name' => 'Sewer Repair',
                        'title' => 'Sewer Repair & Line Replacement in NJ | Guardian Air',
                        'description' => 'Sewer repair in NJ — Guardian Air fixes & replaces failed lines across Monmouth, Middlesex & Ocean counties. Trenchless options, licensed & insured — call!',
                        'h1' => 'Sewer Repair & Line Replacement in New Jersey',
                        'intro' => "<p>Professional sewer repair in NJ stops the repeat backups, foul odors, and health hazards a failing line causes. Guardian Air repairs and replaces cracked, collapsed, and root-invaded sewer lines across Monmouth, Middlesex, and Ocean counties — from Long Branch to South Amboy — and restores reliable flow with upfront, flat-rate pricing.</p>",
                        'highlights' => ['Cracked & collapsed lines', 'Root intrusion repair', 'Trenchless options', 'Camera-verified results'],
                        'sections' => [
                            ['heading' => 'Sewer Repair in NJ', 'body' => "<p>When sewage backs up repeatedly or you smell it in the yard, the problem is usually in the main line. Our licensed technicians start with a <a href='/drains/camera-inspection'>camera inspection</a> to pinpoint the exact cause and location, then repair the line — often without tearing up your whole yard.</p><p>Depth and location drive the approach: a shallow front-yard line is a different job than one running under a driveway or mature tree. The camera tells us depth and position before anyone quotes digging.</p><p>We serve homeowners across central New Jersey with honest assessments and flat-rate quotes, not guesswork.</p>"],
                            ['heading' => 'Sewer Line Replacement', 'body' => "<p>When a line is too damaged to repair — collapsed, badly corroded, or invaded by roots throughout — full replacement is the lasting fix. We remove and replace failing sections (or the entire run) with durable modern materials and verify the result with a camera inspection.</p>"],
                            ['heading' => 'Trenchless Options', 'body' => "<p>Where conditions allow, trenchless methods like pipe lining and pipe bursting let us repair or replace your sewer with minimal digging — protecting driveways, landscaping, and walkways. It's faster, cleaner, and often more cost-effective than traditional excavation — see our <a href='/cost-guides/drain-cleaning-cost'>drain cleaning cost guide</a> for pricing context.</p><p>Lining works best when the host pipe still holds its shape; bursting handles collapsed sections by pulling a new pipe through the old path. Which applies — or whether open excavation is honestly cheaper — comes down to the footage, and we review it with you.</p>"],
                            ['heading' => 'Signs You Need Replacement', 'body' => "<p>Watch for multiple drains backing up at once, gurgling toilets, sewage odors, soggy or unusually green patches in the yard, and recurring clogs that keep coming back. A <a href='/drains/hydro-jetting'>hydro jetting</a> service can sometimes clear stubborn buildup, but many older New Jersey homes have clay or cast-iron lines that crack and attract roots over decades.</p>"],
                            ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>The clay and cast-iron mains under the region's older boroughs fail in predictable spots, and our crews have repaired — or trenchlessly avoided digging up — most of them. Need a faster clean-out first? Ask about hydro jetting.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does sewer repair cost in NJ?', 'a' => 'Sewer repairs in New Jersey vary widely — a spot repair may run $1,000 to $3,000, while a full line replacement can range from $5,000 to $15,000+ depending on length, depth, and method. We camera-inspect first and quote the exact scope upfront.'],
                            ['q' => 'What are the signs I need a sewer line replacement?', 'a' => 'Frequent main-line backups, multiple drains clogging at once, sewage odors, soggy yard patches, and recurring root intrusion all point to a failing line. A camera inspection confirms whether a spot repair or full replacement is needed.'],
                            ['q' => 'Do you offer trenchless sewer repair?', 'a' => 'Yes, where conditions allow. Trenchless pipe lining and pipe bursting repair or replace the line with minimal digging, protecting your yard and hardscaping and usually saving time and money.'],
                            ['q' => 'Why do older NJ sewer lines fail?', 'a' => 'Many older New Jersey homes have clay or cast-iron sewer lines that crack, corrode, and develop joints where tree roots intrude over the decades, leading to repeat backups until the line is repaired or replaced.'],
                        ],
                    ],
                    'hydro-jetting' => [
                        'name' => 'Hydro Jetting',
                        'title' => 'Hydro Jetting Services in NJ | Guardian Air',
                        'description' => 'Need hydro jetting in NJ? Guardian Air scours pipes clean of grease, scale & roots across Monmouth, Middlesex & Ocean counties. Licensed & insured — call!',
                        'h1' => 'Hydro Jetting Services in New Jersey',
                        'intro' => "<p>Professional hydro jetting in NJ uses high-pressure water to scrub the inside of your pipes completely clean — blasting away the grease, scale, and roots that snaking leaves behind. Guardian Air provides hydro jetting across Monmouth, Middlesex, and Ocean counties, from Toms River to Old Bridge, for stubborn and recurring clogs.</p>",
                        'highlights' => ['Clears grease, scale & roots', 'Best for recurring clogs', 'Scours pipes like new', 'Safe for healthy pipes'],
                        'sections' => [
                            ['heading' => 'Hydro Jetting in NJ', 'body' => "<p>Hydro jetting sends water through a specialized nozzle at up to 4,000 PSI, scouring the full diameter of the pipe rather than just punching a hole through a clog. For a line that's actually damaged, a <a href='/drains/sewer-repair'>sewer repair</a> may be the better fix, but for buildup the result is a like-new line that flows freely and stays clear far longer.</p><p>We provide hydro jetting across central New Jersey with flat-rate pricing, often pairing it with a <a href='/drains/camera-inspection'>camera inspection</a> to confirm the line is fully clear.</p>"],
                            ['heading' => 'Jetting vs Snaking', 'body' => "<p>Snaking is great for breaking through a single clog quickly and is sometimes all you need. Hydro jetting cleans the entire interior of the pipe — removing built-up grease, scale, and roots — so for recurring or severe clogs, it delivers a far more thorough and longer-lasting result. Curious about pricing? See our <a href='/cost-guides/drain-cleaning-cost'>drain cleaning cost guide</a>.</p><p>The honest comparison: snaking is cheaper today, jetting is cheaper per year. If a line clogs once, snake it; if it clogs every season, the full cleaning ends the cycle and the repeat service calls.</p>"],
                            ['heading' => 'When You Need It', 'body' => "<p>Consider hydro jetting for repeat clogs in the same line, grease buildup in kitchen lines, root intrusion, or slow main-line drainage. It's also ideal as preventive maintenance for restaurants and older homes prone to buildup — and a camera inspection first confirms it's the right approach.</p><p>Jetting is also the standard prep for trenchless repair: a lined pipe needs a clean host surface to bond to, so the two services often travel together.</p>"],
                            ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>Restaurant grease lines in New Brunswick, root-bound mains in Middletown, sandy shore laterals in Brick — our jetting rigs see them all. If the camera shows the pipe itself is damaged, we'll quote a repair on the spot.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does hydro jetting cost in NJ?', 'a' => 'Hydro jetting in New Jersey typically ranges from about $400 to $800 depending on the line size, severity, and access. We provide a flat-rate quote upfront, and we often camera-inspect first to confirm it is the right approach.'],
                            ['q' => 'Is hydro jetting better than snaking?', 'a' => 'For recurring or severe clogs, yes. Snaking breaks through a single blockage, while hydro jetting cleans the entire pipe interior of grease, scale, and roots for a longer-lasting result. We recommend the right method for your situation.'],
                            ['q' => 'How often should I have my pipes jetted?', 'a' => 'For most homes, only as needed. Homes or businesses with recurring grease or root problems may benefit from preventive jetting every one to two years to avoid backups.'],
                            ['q' => 'Is hydro jetting safe for older pipes?', 'a' => 'In sound pipes, yes — water at the right pressure cleans without damaging the line. For older or fragile pipes we run a camera first and adjust the pressure to match, or recommend a different approach if the pipe is compromised.'],
                        ],
                    ],
                    'camera-inspection' => [
                        'name' => 'Camera Inspection',
                        'title' => 'Video Camera Sewer Inspection in NJ | Guardian Air',
                        'description' => 'Need a video camera sewer inspection in NJ? Guardian Air diagnoses drains & sewers across Monmouth, Middlesex & Ocean counties. Licensed & insured — call!',
                        'h1' => 'Video Camera Drain & Sewer Inspection in New Jersey',
                        'intro' => "<p>A video camera sewer inspection in NJ shows the exact cause and location of a drain or sewer problem — no guesswork, no unnecessary digging. Guardian Air runs waterproof camera inspections across Monmouth, Middlesex, and Ocean counties, from Toms River to <a href='/service-areas/red-bank'>Red Bank</a>, so you know precisely what's wrong before spending a dollar on repairs.</p>",
                        'highlights' => ['See the real problem', 'Pinpoints exact location', 'No demolition guesswork', 'Verifies a clean line'],
                        'sections' => [
                            ['heading' => 'Camera Inspection in NJ', 'body' => "<p>We feed a high-resolution waterproof camera through your drain or sewer line and watch a live feed as it travels, locating clogs, cracks, bellies, and root intrusion. You see exactly what we see, and we can pinpoint the depth and position of any problem.</p><p>The transmitter in the camera head lets us mark the lawn directly above any defect, with its depth — so if digging ever happens, the hole is exactly where it needs to be and no bigger.</p><p>We serve homeowners across central New Jersey and often pair inspections with <a href='/drains/hydro-jetting'>hydro jetting</a> or repair.</p>"],
                            ['heading' => 'We Diagnose Before We Dig', 'body' => "<p>A camera inspection means no exploratory digging and no guesswork. We confirm the real issue first, so any <a href='/drains/sewer-repair'>sewer repair</a> is targeted and minimally invasive — saving you money and protecting your yard. It's also smart before buying a home: a sewer lateral isn't covered by a standard home inspection, and replacing one costs more than most roof repairs. An hour with a camera before closing removes the biggest unknown under the yard.</p>"],
                            ['heading' => 'Root Intrusion', 'body' => "<p>Tree roots are a leading cause of sewer trouble in older New Jersey neighborhoods, growing into joints and cracks. A camera inspection confirms root intrusion and its location so we can clear it with hydro jetting and recommend a lasting fix.</p>"],
                            ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>An inspection takes under an hour in most homes, and you walk away with the footage and a straight answer about what — if anything — actually needs fixing. We scope lines everywhere in Monmouth, Middlesex, and Ocean counties.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'How much does a sewer camera inspection cost in NJ?', 'a' => 'A drain or sewer camera inspection in New Jersey typically runs about $150 to $350, and we often credit it toward any repair or cleaning that follows. We quote the price upfront.'],
                            ['q' => 'What can a camera inspection find?', 'a' => 'It reveals clogs, grease and scale buildup, cracks and collapses, pipe bellies (low spots), root intrusion, and the exact location and depth of each issue — so repairs are precise.'],
                            ['q' => 'When do I need a sewer camera inspection?', 'a' => 'Consider one for recurring backups, before buying a home, after root problems, or any time you want to confirm the condition of your line before committing to a repair.'],
                            ['q' => 'Do you provide the inspection footage?', 'a' => 'Yes. You can watch the live feed during the inspection, and we share the recording along with a plain-English summary of what we found and where — useful for home purchases, insurance claims, and comparing repair quotes.'],
                        ],
                    ],
                ],
            ],
            'commercial-hvac' => [
                'label' => 'Commercial HVAC',
                'locationName' => 'Commercial HVAC',
                // The core content page lives under this ContentBlock key.
                'contentPage' => 'commercial',
                'services' => [
                    'maintenance-contracts' => [
                        'name' => 'Maintenance Contracts',
                        'title' => 'Commercial HVAC Maintenance Contracts in NJ | Guardian Air',
                        'description' => 'Commercial HVAC maintenance contracts in NJ — scheduled visits, priority response & documented service across central New Jersey. Licensed & insured, call!',
                        'h1' => 'Commercial HVAC Maintenance Contracts in New Jersey',
                        'intro' => "<p>A commercial HVAC maintenance contract in NJ protects your operation and your bottom line. We build custom preventative programs for <a href='/commercial-hvac'>commercial HVAC</a> equipment with regular visits, priority response, and detailed service records, so problems get caught before they become emergencies.</p>",
                        'highlights' => ['Custom scheduled visits', 'Priority emergency response', 'Documented service history', 'Lower long-term costs'],
                        'sections' => [
                            ['heading' => 'What Your Contract Includes', 'body' => "<p>Every agreement is built around your actual equipment list: scheduled seasonal inspections, filter and belt changes, coil cleaning, refrigerant and combustion checks, and a written condition report after each visit. You choose the visit frequency — quarterly, semi-annual, or monthly for critical facilities.</p><p>Filters deserve their own line: commercial rooftop units go through them faster than owners expect, and skipped changes show up as frozen coils and tripped limit switches. Your plan specifies the right filter grade and change cadence for each unit's duty cycle.</p>"],
                            ['heading' => 'Priority Response & Repair Discounts', 'body' => "<p>Contract clients jump the queue when something breaks — in most cases a technician is on-site the same day, even in peak season, through our <a href='/commercial-hvac/repair'>commercial repair</a> team. Plan members also receive preferred repair pricing and waived diagnostic fees, which for many buildings covers the cost of the plan by itself.</p>"],
                            ['heading' => 'Request a Maintenance Quote', 'body' => "<p>Quoting starts with a free site walk-through: we inventory your equipment, note access and condition, and deliver a written proposal with per-visit scope and annual price — usually within two business days. Multi-location operators get one consolidated agreement covering every property.</p>"],
                            ['heading' => 'Commercial Properties We Maintain Across Central NJ', 'body' => "<p>We maintain rooftop units, boilers, and split systems for offices, restaurants, retail centers, and multi-family buildings throughout Monmouth, Middlesex, and Ocean counties — from the Red Bank and Freehold business districts to the Route 9 corridor through Lakewood and Howell.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'What equipment can be covered under a maintenance contract?', 'a' => 'Packaged rooftop units, split systems, ductless heads, commercial boilers, chillers, make-up air units, and exhaust fans can all be included. We inventory your equipment during a free site walk-through and quote a plan that covers exactly what you run.'],
                            ['q' => 'How often will technicians visit my facility?', 'a' => 'Most properties choose quarterly or semi-annual visits. High-demand facilities — restaurants, server rooms, medical offices — often opt for monthly checks. The schedule is set in the agreement, and every visit is coordinated around your business hours.'],
                            ['q' => 'Does a maintenance contract include repairs?', 'a' => 'The contract covers scheduled preventive work; repairs are quoted separately but at preferred member pricing, with diagnostic fees typically waived. You approve every repair in writing before work begins.'],
                            ['q' => 'Can a maintenance plan really extend equipment life?', 'a' => 'Yes — rooftop units that get regular coil cleaning, belt adjustments, and refrigerant checks routinely outlast neglected ones by years, and documented maintenance also keeps manufacturer warranties enforceable.'],
                            ['q' => 'Can one contract cover multiple locations?', 'a' => 'Yes — multi-site operators consolidate all their properties under one agreement with shared terms, one invoice, and one phone number. Visit schedules are coordinated per location so every site stays current.'],
                        ],
                    ],
                    'repair' => [
                        'name' => 'Commercial HVAC Repair',
                        'title' => 'Commercial HVAC Repair in NJ | Guardian Air',
                        'description' => 'Commercial HVAC repair in NJ for offices, restaurants & retail across Monmouth, Middlesex & Ocean counties — licensed, 24/7 response. Call Guardian Air!',
                        'h1' => 'Commercial HVAC Repair in New Jersey',
                        'intro' => "<p>When you need commercial HVAC repair in NJ, every minute of downtime costs money. We repair rooftop units, boilers, and chillers fast — diagnosing the real problem and getting your space comfortable again with minimal disruption to your business. Need a plan to prevent the next breakdown? Ask about <a href='/commercial-hvac/maintenance-contracts'>maintenance contracts</a>.</p>",
                        'highlights' => ['Rooftop units, boilers & chillers', '24/7 emergency response', 'Minimal business disruption', 'Licensed for commercial work'],
                        'sections' => [
                            ['heading' => 'Equipment We Repair', 'body' => "<p>Our commercial technicians work on packaged rooftop units, VRF/VRV systems, split and ductless equipment, hydronic and steam boilers, chillers, and make-up air units from every major manufacturer. Trucks are stocked with common commercial parts — contactors, motors, belts, and controls — to maximize first-visit fixes.</p><p>Controls are half the battle in modern buildings: thermostats fighting each other, economizers stuck open, schedules nobody remembers programming. We diagnose the control logic along with the mechanical hardware, because either one can present as 'no cooling.'</p>"],
                            ['heading' => 'Minimizing Your Downtime', 'body' => "<p>A comfort failure during business hours costs sales and productivity, so we triage commercial calls by urgency. Wherever possible we restore temporary heating or cooling first, then complete the permanent repair on a schedule that works around your customers and staff.</p>"],
                            ['heading' => 'Business Corridors We Cover', 'body' => "<p>Our commercial crews work throughout central New Jersey — downtown Red Bank and Freehold, the retail strips of Edison and Woodbridge, and the shore commercial districts of Toms River and Brick. After-hours emergency response is available around the clock, every day of the year.</p>"],
                        ],
                        'faqs' => [
                            ['q' => 'Do you repair rooftop units (RTUs)?', 'a' => 'Yes — RTUs make up the bulk of our commercial repair work. We handle compressor and fan failures, economizer faults, control issues, and gas-heat sections, and we arrange roof access for multi-story buildings when needed.'],
                            ['q' => 'Can you do commercial repairs after business hours?', 'a' => 'Absolutely. Many clients prefer evening or early-morning repair windows so the workday is never interrupted. Emergency coverage runs around the clock, and maintenance-contract clients get priority dispatch.'],
                            ['q' => 'Will I get documentation for the repair?', 'a' => 'Every job closes with a written service record: the fault found, parts replaced, readings taken, and any recommendations. Property managers use these records for budgeting, warranties, and tenant communication.'],
                            ['q' => 'Should I repair or replace a failing commercial unit?', 'a' => 'We weigh the unit\'s age, the cost and frequency of recent repairs, and its energy usage, then give you both numbers in writing. If replacement is smarter we quote it — but we never use a breakdown to push new equipment.'],
                        ],
                    ],
                ],
            ],
        ];
    }

    /**
     * Per-trade copy used to generate the trade-in-location pages
     * (/{trade}/{location}) — common problems we fix in that area, plus
     * trade-specific intro and "why choose us" paragraphs (`:city` and
     * `:county` placeholders are filled in per location) so each trade's
     * location pages read differently from the other trades'.
     */
    public static function tradeLocationInfo(): array
    {
        return [
            'heating' => [
                'issues' => ['A furnace that won\'t ignite or start', 'No heat or weak, uneven heat', 'Short-cycling or constant running', 'Strange banging or rattling noises', 'A cracked heat exchanger or pilot/ignition faults'],
                'intro' => [
                    'Cold nights don\'t wait for business hours, and neither do we. Guardian Air handles furnace repair in :city — plus boilers and heat pumps — with licensed technicians and flat-rate quotes you approve before any work starts.',
                    'We\'ve worked on the heating systems common to :county homes for years — from aging oil furnaces to brand-new high-efficiency units — so diagnosis is fast and the fix holds.',
                ],
                'why' => [
                    ':city homeowners call us back winter after winter because we show up when we say we will, explain the problem in plain English, and charge the price we quoted.',
                    'Every technician is licensed and insured, every truck is stocked for first-visit fixes, and no-heat calls jump to the front of the line.',
                ],
            ],
            'cooling' => [
                'issues' => ['An AC blowing warm air', 'Frozen evaporator coils', 'Water leaks around the unit', 'A failed capacitor, contactor, or compressor', 'Weak airflow or short-cycling'],
                'intro' => [
                    'When you need AC repair in :city during a heatwave, you want a technician nearby — not a dispatcher three counties away. Guardian Air repairs and installs central air, heat pumps, and ductless systems across :city with same-day response in season.',
                    'Humid summers and long cooling seasons work :county equipment hard. Our technicians see what that wear does up close every week — and it shows in how quickly they find the real fault.',
                ],
                'why' => [
                    'Families in :city choose Guardian Air because the quote comes before the work, the truck arrives stocked, and the repair is explained before a single panel comes off.',
                    'We\'re local to :county, licensed and insured, and we stand behind the work — peak-season emergencies included.',
                ],
            ],
            'plumbing' => [
                'issues' => ['Burst or leaking pipes', 'No hot water or a failing water heater', 'Clogged or slow drains', 'Running or leaking toilets', 'Low water pressure and hidden leaks'],
                'intro' => [
                    'From dripping faucets to burst pipes, Guardian Air is the licensed plumber :city homeowners call for the full range of residential work — repairs, water heaters, repiping, and around-the-clock emergencies.',
                    'Homes across :county mix older galvanized lines with modern PEX, and our plumbers carry parts for both. Most fixes happen on the first visit, at a flat rate you approve upfront.',
                ],
                'why' => [
                    'Nobody in :city plans for a plumbing emergency, which is why our phone is answered around the clock and our after-hours price is the same as our weekday price.',
                    'Licensed, insured, and local to :county — with clean workmanship and a guarantee behind every job.',
                ],
            ],
            'indoor-air-quality' => [
                'issues' => ['Excess dust that resettles quickly', 'Allergy and asthma triggers', 'Musty or stale odors', 'Humidity that\'s too high or too low', 'Poor ventilation and airflow'],
                'intro' => [
                    'Dust that resettles overnight, allergies that flare indoors, rooms that smell musty — Guardian Air fixes indoor air problems for :city families with testing, air duct cleaning, purification, and humidity control.',
                    'The mix of humid summers and tightly sealed winters in :county makes indoor air work harder than most homeowners realize. We find what\'s circulating in yours and fix it at the source.',
                ],
                'why' => [
                    'We start with an honest assessment in :city — no scare tactics, no overselling — and recommend only what your home\'s air actually needs.',
                    'Our air quality technicians are licensed, insured, and local to :county, and every recommendation comes with a flat-rate quote.',
                ],
            ],
            'drains' => [
                'issues' => ['Slow or fully clogged drains', 'Recurring backups', 'Main sewer line blockages', 'Foul drain odors', 'Tree-root intrusion in the line'],
                'intro' => [
                    'A slow drain is annoying; a backed-up main is an emergency. Guardian Air provides drain cleaning in :city along with camera inspections and sewer repair — usually the same day you call.',
                    'We don\'t just punch a hole through the clog. Camera inspections show the real cause, and the right tool — from motorized snakes to hydro jetting — clears :county lines completely, so the problem stays fixed.',
                ],
                'why' => [
                    ':city homeowners call us when the same drain keeps clogging, because we fix causes — roots, grease, scale — not just symptoms.',
                    'Flat-rate pricing, licensed and insured technicians, and emergency response across :county, day or night.',
                ],
            ],
            'commercial-hvac' => [
                'issues' => ['Rooftop unit (RTU) failures', 'No heat or cooling during business hours', 'Boiler and chiller problems', 'Poor or uneven airflow', 'After-hours emergency breakdowns'],
                'intro' => [
                    'Downtime is expensive. Guardian Air keeps commercial HVAC in :city running — rooftop units, boilers, and chillers — with 24/7 response and maintenance plans that catch failures before they close your doors.',
                    'From restaurants to offices to multi-family buildings, our commercial team services :county facilities with documented work, code compliance, and a single point of contact.',
                ],
                'why' => [
                    'Businesses in :city stay with us because we schedule around their hours, respond fast when equipment fails, and put every quote in writing.',
                    'Our commercial crew carries the credentials :county property managers ask for, and every visit ends with documented service records for your files.',
                ],
            ],
        ];
    }

    /**
     * Hand-written per-location copy for /{trade}/{location} pages, keyed by
     * location slug. Overrides the templated tradeLocationInfo() text so no
     * two location pages of the same trade share paragraphs.
     */
    public static function tradeLocationCopy(string $trade): array
    {
        $file = __DIR__."/TradeLocationCopy/{$trade}.php";

        return is_file($file) ? require $file : [];
    }

    /**
     * A standalone "Commercial Plumbing" service page at /commercial-plumbing.
     */
    public static function commercialPlumbing(): array
    {
        return [
            'name' => 'Commercial Plumbing',
            'title' => 'Commercial Plumbing in NJ | Guardian Air',
            'description' => 'Commercial plumbing in NJ for water heaters, drain lines, fixtures & backflow across Monmouth, Middlesex & Ocean counties. Licensed & insured — call today!',
            'h1' => 'Commercial Plumbing Services in New Jersey',
            'intro' => "Commercial plumbing in NJ demands more than a residential fix. From water heaters and drain lines to fixtures and backflow testing, we keep your facility running with code-compliant work sized for the higher demands of a busy property.",
            'highlights' => ['Water heaters & drain lines', 'Backflow testing & repair', 'Code-compliant work', 'Built for high-demand use'],
            'sections' => [
                ['heading' => 'High-Capacity Water Heating', 'body' => "<p>Restaurants, salons, gyms, and multi-family buildings live and die by hot-water capacity. We size, install, and service commercial tank and tankless systems — including recirculation loops that put hot water at the farthest fixture without the wait — and we plan replacements so a failing unit never closes the business.</p>"],
                ['heading' => 'Backflow Testing & Compliance', 'body' => "<p>New Jersey requires annual certified testing of backflow prevention devices on most commercial water services. Our certified testers handle the test, the paperwork, and the repair if a device fails — one appointment, documented for the water authority, with a reminder before next year's deadline.</p>"],
                ['heading' => 'Grease Lines & Commercial Drains', 'body' => "<p>Kitchen drain lines and grease-trap plumbing take a beating in food service. We maintain, clear, and repair them on schedules that respect health-code inspections and service hours — and we coordinate with our <a href='/drains/hydro-jetting'>hydro jetting</a> crews when a line needs a full cleanout.</p>"],
            ],
            'faqs' => [
                ['q' => 'Do you handle annual backflow testing in NJ?', 'a' => 'Yes — our certified testers perform the annual test required on most commercial water services, file the paperwork with your water purveyor, and quote any repair on the spot if a device fails. We also track your renewal date.'],
                ['q' => 'Can you work around our business hours?', 'a' => 'That is the default, not the exception. Most commercial plumbing work — fixture swaps, water heater changes, drain maintenance — is scheduled before opening, after closing, or on your slow days.'],
                ['q' => 'What types of commercial properties do you serve?', 'a' => 'Restaurants and food service, offices, retail, salons and gyms, medical suites, and multi-family buildings across Monmouth, Middlesex, and Ocean counties. Each gets a plumber familiar with that property type\'s codes and demands.'],
            ],
        ];
    }

    public static function counties(): array
    {
        return [
            'monmouth-county' => [
                'slug' => 'monmouth-county',
                'name' => 'Monmouth County',
                'title' => 'HVAC, Plumbing & Drains — Monmouth County NJ',
                'description' => 'HVAC Monmouth County NJ — licensed heating, cooling, plumbing & drain service across Freehold, Red Bank, Middletown & the Jersey Shore. Call Guardian Air!',
                'intro' => [
                    "Guardian Air is your trusted choice for HVAC in Monmouth County, NJ. From the Jersey Shore in Long Branch to the boroughs around <a href='/service-areas/red-bank'>Red Bank</a> and inland Freehold, Howell, and Middletown, our licensed technicians deliver fast, reliable heating, cooling, plumbing, and drain service — often the same day.",
                    "Monmouth County homes range from historic shore cottages near Sandy Hook to newer developments off the Garden State Parkway, and we know the systems each one runs. Whether you're near Monmouth Park, the <a href='/service-areas/freehold'>Freehold</a> Raceway Mall, or the PNC Bank Arts Center in Holmdel, honest, flat-rate service is just a call away.",
                    "The work changes block by block here — emergency no-heat calls in Colts Neck horse country one morning, an AC tune-up in an Asbury Park walk-up that afternoon — and that's exactly why a local team beats a regional dispatcher. Jump straight to <a href='/heating/monmouth-county'>heating</a> or <a href='/plumbing/monmouth-county'>plumbing</a> in Monmouth County, or browse the towns below.",
                ],
                'faqs' => [
                    ['q' => 'How fast can you get to homes in Monmouth County?', 'a' => 'Same-day in most of the county. Crews work daily routes through Freehold, Middletown, Howell, and the shore towns, so a morning call usually means an afternoon visit — sooner for emergencies.'],
                    ['q' => 'Do you handle older homes near the Navesink and Shrewsbury rivers?', 'a' => 'All the time. Riverside boroughs like Red Bank and Rumson mix century-old radiator systems with modern condos, and our technicians carry parts and experience for both ends of that spectrum.'],
                    ['q' => 'Is there a travel charge for Monmouth County visits?', 'a' => 'No. Monmouth County sits inside our core service area, so you pay the same flat-rate price as everywhere else we work — no trip fees, no fuel surcharges.'],
                ],
                'cities' => [
                    'freehold' => 'Freehold',
                    'red-bank' => 'Red Bank',
                    'middletown' => 'Middletown',
                    'aberdeen' => 'Aberdeen',
                    'long-branch' => 'Long Branch',
                    'howell' => 'Howell',
                ],
            ],
            'middlesex-county' => [
                'slug' => 'middlesex-county',
                'name' => 'Middlesex County',
                'title' => 'HVAC, Plumbing & Drains — Middlesex County NJ',
                'description' => 'HVAC Middlesex County NJ — licensed heating, cooling, plumbing & drain service across Edison, Woodbridge, Old Bridge & New Brunswick. Call Guardian Air!',
                'intro' => [
                    "Looking for dependable HVAC in Middlesex County, NJ? Guardian Air serves homeowners and businesses across Edison, Woodbridge, <a href='/service-areas/old-bridge'>Old Bridge</a>, New Brunswick, South Amboy, and Perth Amboy with licensed heating, cooling, plumbing, and drain service.",
                    "From the busy commercial corridors near Menlo Park Mall to the neighborhoods around Rutgers University and along the Raritan River, our local technicians respond fast with honest, flat-rate <a href='/plumbing'>plumbing</a> and HVAC pricing. Wherever you are in Middlesex County, the same trusted team keeps your home comfortable year-round.",
                    "Commuter schedules shape how we work in this county: early-morning arrival windows before the train, evening slots after it, and weekend installs that don't burn a vacation day. Tell us what your week looks like — and see <a href='/cooling/middlesex-county'>cooling</a> or <a href='/drains/middlesex-county'>drain service</a> in Middlesex County for specifics.",
                ],
                'faqs' => [
                    ['q' => 'Which Middlesex County towns do you cover?', 'a' => 'All of them — Edison, Woodbridge, Old Bridge, New Brunswick, Perth Amboy, South Amboy, and the surrounding townships. If you are inside the county line, you are inside our service area.'],
                    ['q' => 'Can you service multi-family and rental properties in Middlesex County?', 'a' => 'Yes — landlords across New Brunswick and Perth Amboy use us for turnovers, tenant calls, and building-wide maintenance, with written documentation provided after every visit.'],
                    ['q' => 'Do Middlesex County jobs cost more than shore-area jobs?', 'a' => 'No. Our flat-rate book is identical across all three counties — the price quoted in Edison matches the price quoted in Toms River for the same job.'],
                ],
                'cities' => [
                    'old-bridge' => 'Old Bridge',
                    'edison' => 'Edison',
                    'woodbridge' => 'Woodbridge',
                    'new-brunswick' => 'New Brunswick',
                    'south-amboy' => 'South Amboy',
                    'perth-amboy' => 'Perth Amboy',
                ],
            ],
            'ocean-county' => [
                'slug' => 'ocean-county',
                'name' => 'Ocean County',
                'title' => 'HVAC, Plumbing & Drains — Ocean County NJ',
                'description' => 'HVAC Ocean County NJ — licensed heating, cooling, plumbing & drain service across Toms River, Brick, Lakewood & Point Pleasant. Call Guardian Air today!',
                'intro' => [
                    "Guardian Air delivers trusted HVAC in Ocean County, NJ to homes and businesses from the <a href='/service-areas/toms-river'>Toms River</a> and Brick area down the shore to Point Pleasant, Barnegat, and Lakewood. Our licensed technicians handle heating, cooling, plumbing, and drains with fast, same-day response.",
                    "Ocean County's shore climate is hard on equipment — salt air, humid summers, and seasonal homes near Barnegat Bay all take their toll. From the boardwalk at Point Pleasant Beach to the neighborhoods near Six Flags Great Adventure in Jackson, we keep your <a href='/cooling'>cooling</a> systems running with upfront, flat-rate pricing.",
                    "Year-round residents and summer homeowners need different things, and we serve both: maintenance plans that watch an empty house through January freezes, and fast response when a full one loses cooling in July. Start with <a href='/heating/ocean-county'>heating</a> or <a href='/plumbing/ocean-county'>plumbing</a> in Ocean County, or pick your town below.",
                ],
                'faqs' => [
                    ['q' => 'Do you work on seasonal and shore homes in Ocean County?', 'a' => 'Constantly. We winterize, de-winterize, and service second homes from Point Pleasant to Barnegat, and we can coordinate access while you are away — with photos and a written report after the visit.'],
                    ['q' => 'How does salt air affect HVAC equipment in Ocean County?', 'a' => 'Coastal salt corrodes condenser coils and electrical contacts years ahead of inland equipment. We recommend coastal-rated units and a yearly coil rinse for homes within a mile or two of the water.'],
                    ['q' => 'How quickly can you reach Toms River, Brick, or Lakewood?', 'a' => 'Those three towns anchor our Ocean County routes, so same-day response is the norm and emergency calls often see a truck within the hour.'],
                ],
                'cities' => [
                    'toms-river' => 'Toms River',
                    'brick' => 'Brick',
                    'lakewood' => 'Lakewood',
                    'jackson' => 'Jackson',
                    'barnegat' => 'Barnegat',
                    'point-pleasant' => 'Point Pleasant',
                ],
            ],
        ];
    }

    /**
     * Flat lookup of every location (county + city) keyed by its globally
     * unique slug. Powers /service-areas/{slug} and /{trade}/{slug} combos.
     */
    public static function locationLookup(): array
    {
        $out = [];
        foreach (self::counties() as $countySlug => $county) {
            $out[$countySlug] = [
                'slug' => $countySlug,
                'name' => $county['name'],
                'type' => 'county',
                'county_slug' => $countySlug,
                'county_name' => $county['name'],
            ];
            foreach ($county['cities'] as $slug => $name) {
                $out[$slug] = [
                    'slug' => $slug,
                    'name' => $name,
                    'type' => 'city',
                    'county_slug' => $countySlug,
                    'county_name' => $county['name'],
                ];
            }
        }

        return $out;
    }

    /**
     * Unique, hand-written intro copy for priority city hubs so each
     * /service-areas/{city} page has distinct local content (towns,
     * landmarks, why-choose) rather than templated duplication. Cities not
     * listed here fall back to a localized intro generated in the view.
     */
    public static function cityContent(): array
    {
        return [
            'toms-river' => [
                "Guardian Air is a trusted name for HVAC in Toms River, NJ. As the seat of <a href='/service-areas/ocean-county'>Ocean County</a>, Toms River blends busy Route 37 corridors with quiet bayside neighborhoods near Barnegat Bay — and our licensed technicians serve them all with fast, same-day heating, cooling, plumbing, and drain service.",
                "From homes near downtown and Ocean County Mall to shore properties out toward Seaside Heights, the salt air and humid summers here are hard on equipment. We keep your <a href='/cooling'>cooling and heating</a> systems running with honest, flat-rate pricing and clean workmanship on every visit.",
            ],
            'freehold' => [
                "Looking for dependable HVAC in Freehold, NJ? Guardian Air serves both Freehold Borough and Freehold Township throughout <a href='/service-areas/monmouth-county'>Monmouth County</a> with licensed heating, cooling, plumbing, and drain service — often the same day.",
                "From the shops around Freehold Raceway Mall to the historic neighborhoods near Monmouth Battlefield and the Route 9 and Route 33 corridors, our local technicians respond fast with upfront, flat-rate <a href='/heating'>heating</a> and cooling service and friendly, professional workmanship.",
            ],
            'brick' => [
                "Guardian Air delivers reliable HVAC in Brick, NJ to homes and businesses across Brick Township. From neighborhoods along the Metedeconk River to bayside homes near Barnegat Bay, our licensed technicians handle heating, cooling, <a href='/plumbing'>plumbing</a>, and drains with fast, same-day response.",
                "Brick's shore-area climate puts real strain on AC systems and <a href='/plumbing/water-heater'>water heaters</a>. Whether you're off Route 70, Route 88, or near the Brick Reservoir, we keep your home comfortable with honest, flat-rate pricing year-round.",
            ],
            'old-bridge' => [
                "Guardian Air is your local choice for HVAC in Old Bridge, NJ. We serve Old Bridge Township throughout <a href='/service-areas/middlesex-county'>Middlesex County</a> and nearby Sayreville and Matawan with licensed heating, cooling, plumbing, and drain service.",
                "From neighborhoods near Cheesequake State Park to homes along Route 9 and the Garden State Parkway, our technicians respond fast with upfront, flat-rate <a href='/drains'>drain and sewer</a> service — no overtime fees and no surprises.",
            ],
            'red-bank' => [
                "Guardian Air provides trusted HVAC in Red Bank, NJ to homes and businesses throughout this riverside <a href='/service-areas/monmouth-county'>Monmouth County</a> town. Our licensed technicians deliver fast, same-day heating, cooling, plumbing, and drain service.",
                "From the historic homes near the Navesink River and the shops along Broad Street to the neighborhoods around the Count Basie Center for the Arts, we keep Red Bank comfortable with honest, flat-rate <a href='/heating'>heating</a> and cooling service on every visit.",
            ],
            'lakewood' => [
                "Guardian Air is a trusted provider of HVAC in Lakewood, NJ, serving one of <a href='/service-areas/ocean-county'>Ocean County</a>'s largest and fastest-growing communities. Our licensed technicians handle heating, cooling, plumbing, and drains with fast, same-day response.",
                "From neighborhoods near Lake Carasaljo and FirstEnergy Park to homes along Route 9 and Route 70, we deliver honest, flat-rate pricing and clean, professional service — whether it's a no-heat morning or an <a href='/cooling'>AC failure</a> in peak summer.",
            ],
            'middletown' => [
                "Guardian Air provides dependable HVAC in Middletown, NJ — one of <a href='/service-areas/monmouth-county'>Monmouth County</a>'s largest townships. From Lincroft and Navesink to the streets near Sandy Hook Bay, our licensed technicians handle heating, cooling, plumbing, and drains, often the same day you call.",
                "Middletown's housing runs from historic homes near the Navesink River to busy commuter neighborhoods off Route 35, and we service the systems in all of them with upfront, flat-rate <a href='/heating'>heating</a> and cooling pricing.",
            ],
            'aberdeen' => [
                "Guardian Air serves Aberdeen, NJ with licensed heating, cooling, plumbing, and drain service. From Cliffwood Beach on Raritan Bay to the blocks around the Aberdeen-Matawan train station, our local technicians respond fast throughout northern <a href='/service-areas/monmouth-county'>Monmouth County</a>.",
                "Bayshore humidity is tough on AC condensers and <a href='/plumbing/water-heater'>water heaters</a> alike. We keep Aberdeen homes comfortable year-round with honest quotes and clean workmanship on every visit.",
            ],
            'long-branch' => [
                "Guardian Air delivers trusted HVAC in Long Branch, NJ — from the oceanfront condos near Pier Village to the family neighborhoods inland off Route 36. Our licensed technicians handle heating, cooling, <a href='/plumbing'>plumbing</a>, and drains with fast, same-day response.",
                "Salt air ages outdoor equipment quickly along the Long Branch oceanfront. We help systems last longer with smart maintenance and honest repair-or-replace advice, backed by flat-rate <a href='/cooling'>cooling</a> service all summer.",
            ],
            'howell' => [
                "Looking for reliable HVAC in Howell, NJ? Guardian Air serves Howell Township's neighborhoods from Ramtown to Candlewood and out by the Manasquan Reservoir with licensed heating, cooling, plumbing, and drain service throughout <a href='/service-areas/monmouth-county'>Monmouth County</a>.",
                "Howell's mix of established developments and newer construction off Route 9 keeps our techs busy with everything from <a href='/heating/furnace-tune-up'>furnace tune-ups</a> to full system installs — always at an upfront, flat-rate price.",
            ],
            'edison' => [
                "Guardian Air provides licensed HVAC in Edison, NJ, serving one of <a href='/service-areas/middlesex-county'>Middlesex County</a>'s biggest townships — from Menlo Park and Clara Barton to the neighborhoods off Oak Tree Road — with heating, cooling, plumbing, and drain service, often same-day.",
                "Edison's housing stock spans decades, and so do its furnaces and air conditioners. Our technicians service every era of equipment with flat-rate <a href='/cooling'>cooling</a> and heating pricing and no overtime fees.",
            ],
            'woodbridge' => [
                "Guardian Air is a trusted choice for HVAC in Woodbridge, NJ, covering the township's many communities — Iselin, Colonia, Fords, Avenel, and beyond — with licensed heating, cooling, plumbing, and drain service across <a href='/service-areas/middlesex-county'>Middlesex County</a>.",
                "Sitting at the crossroads of the Parkway and Turnpike, Woodbridge homes count on fast response. Our local techs arrive stocked and quote flat rates upfront — from <a href='/drains'>drain clearing</a> to full HVAC replacement.",
            ],
            'new-brunswick' => [
                "Guardian Air provides dependable HVAC in New Brunswick, NJ, from the historic homes near Rutgers to two-family houses across the Hub City. Our licensed technicians deliver heating, cooling, <a href='/plumbing'>plumbing</a>, and drain service with fast response.",
                "Older city housing means older pipes, radiators, and ductwork — exactly what our techs work on every week. Landlords and homeowners alike rely on our flat-rate pricing and clean, code-compliant <a href='/heating'>heating</a> work.",
            ],
            'south-amboy' => [
                "Guardian Air serves South Amboy, NJ with licensed heating, cooling, plumbing, and drain service. From the waterfront near Raritan Bay to the close-knit blocks off Bordentown Avenue, our <a href='/service-areas/middlesex-county'>Middlesex County</a> technicians are minutes away.",
                "South Amboy's compact older homes often hide aging supply lines and tight mechanical spaces — no problem for a team that works in them daily. Expect tidy workmanship on every <a href='/plumbing'>plumbing</a> and HVAC visit.",
            ],
            'perth-amboy' => [
                "Guardian Air delivers trusted HVAC in Perth Amboy, NJ, serving the historic waterfront city from Harbortown to the neighborhoods near Brighton Avenue with licensed heating, cooling, plumbing, and drain service throughout <a href='/service-areas/middlesex-county'>Middlesex County</a>.",
                "Many Perth Amboy homes date back a century, with the radiators, boilers, and galvanized lines to match. Our technicians specialize in keeping older systems safe and efficient — see our <a href='/heating/boiler-repair'>boiler repair</a> service.",
            ],
            'jackson' => [
                "Guardian Air provides reliable HVAC in Jackson, NJ, from the neighborhoods near Six Flags Great Adventure to the developments off County Line Road — licensed heating, cooling, <a href='/plumbing'>plumbing</a>, and drain service across one of Ocean County's largest townships.",
                "Jackson's newer construction means high-efficiency systems that still need proper care to hit their rated performance. We keep them running right with seasonal <a href='/cooling/ac-tune-up'>tune-ups</a> and flat-rate repairs.",
            ],
            'barnegat' => [
                "Guardian Air serves Barnegat, NJ with licensed heating, cooling, plumbing, and drain service — from the marshside streets near Barnegat Bay to the 55+ communities off Route 9 in southern <a href='/service-areas/ocean-county'>Ocean County</a>.",
                "Coastal humidity and salt air put extra strain on condensers and water heaters here. Our local techs respond fast with honest advice on repair versus replacement — including <a href='/indoor-air-quality/humidifier-dehumidifier'>humidity control</a> for damp summers.",
            ],
            'point-pleasant' => [
                "Guardian Air delivers trusted HVAC in Point Pleasant, NJ, serving year-round residents and seasonal homes alike — from the canal-front streets to the neighborhoods near the boardwalk — with licensed heating, cooling, <a href='/plumbing'>plumbing</a>, and drain service.",
                "Shore properties juggle salt air, humidity, and winterization, and we plan around all three. Point Pleasant homeowners protect their systems year-round with our maintenance plans and flat-rate <a href='/cooling'>cooling</a> repairs.",
            ],
        ];
    }

    /**
     * Optional hand-written per-city FAQ blocks, rendered on
     * /service-areas/{city}. Cities without an entry fall back to a
     * localized generic set generated in the view.
     */
    public static function cityFaqs(): array
    {
        return [
            'freehold' => [
                ['q' => 'Do you cover both Freehold Borough and Freehold Township?', 'a' => "Yes. We serve the dense borough around Main Street and the spread-out township developments off Route 9 and Route 33 alike — the same local crew and the same flat-rate pricing, wherever you are in Freehold."],
                ['q' => 'Can you service the older boiler and radiator systems in downtown Freehold?', 'a' => "Definitely. Many homes near Main Street and Monmouth Battlefield still run hot-water or steam boilers with cast-iron radiators, and we repair, tune, and replace them — along with the oil and gas furnaces common in the surrounding neighborhoods."],
                ['q' => 'My cooling bills spike every summer in Freehold — what helps?', 'a' => "Inland Freehold gets long, hot summers that push older AC units hard. On a tune-up we check refrigerant charge, coil cleanliness, and airflow, and where a system is past its prime we size an efficient replacement that brings those July and August bills back down."],
                ['q' => 'Do you install smart thermostats and high-efficiency systems in Freehold?', 'a' => "Yes. The newer township homes are a natural fit for high-efficiency furnaces, heat pumps, and smart thermostats, and we retrofit the older borough homes too — matching the right equipment to each house for real comfort and lower running costs."],
            ],
            'middletown' => [
                ['q' => 'Can you come out the same day in Middletown?', 'a' => "Usually, yes. Middletown is right in our backyard, so most days we can have a technician at your door within hours — and we treat a dead furnace or a failed AC as the emergency it is, any day of the week."],
                ['q' => 'What system issues do Middletown homes run into most?', 'a' => "Along the Bayshore we often find corroded outdoor AC units, aging boilers and oil furnaces in older homes, and water heaters worn down early by coastal moisture. We track each issue to its source and fix it for good, not just for the season."],
                ['q' => 'Do you service the Middletown Bayshore neighborhoods?', 'a' => "Yes. We cover the whole township — Belford, Port Monmouth, Leonardo, Navesink, Lincroft, and River Plaza — so wherever you are in Middletown, a local technician is close by."],
                ['q' => 'Do you handle plumbing and drains in Middletown too?', 'a' => "Absolutely. Beyond HVAC, we clear clogged drains, repair and replace water heaters, track down hidden leaks, and handle sewer trouble across Middletown — one local team for your whole home."],
            ],
            'old-bridge' => [
                ['q' => 'Do you offer same-day HVAC service in Old Bridge?', 'a' => "Yes. Old Bridge sits right in our core service area, so we can usually have a licensed technician at your door the same day — and fast for heating or cooling emergencies across Old Bridge Township, Sayreville, and Matawan."],
                ['q' => 'What HVAC and plumbing problems are common in Old Bridge homes?', 'a' => "Around Old Bridge we frequently see furnaces and AC units nearing the end of their life, water heaters past their prime, and clogged or root-invaded drain lines in the older neighborhoods. We find the real cause and fix it, rather than just chasing the symptom."],
                ['q' => 'Are you licensed to work in Old Bridge, NJ?', 'a' => "Yes. Guardian Air is fully licensed and insured for heating, cooling, plumbing, and drain work throughout Old Bridge and the rest of Middlesex County, with NATE-certified technicians on every call."],
                ['q' => 'Do you give free estimates in Old Bridge?', 'a' => "For replacements and larger projects — a new furnace, AC system, or water heater — we provide a free written estimate in Old Bridge. Repairs are quoted at a flat rate upfront, before any work begins."],
            ],
        ];
    }

    public static function costGuides(): array
    {
        return [
            'furnace-repair-cost' => [
                'name' => 'Furnace Repair Cost',
                'title' => 'How Much Does Furnace Repair Cost in NJ? | Guardian Air',
                'description' => 'Furnace repair costs in NJ run $150–$750 by part. See 2026 ranges for Monmouth, Middlesex & Ocean counties from licensed Guardian Air — call for a quote!',
                'h1' => 'How Much Does Furnace Repair Cost in New Jersey?',
                'intro' => "<p>Wondering how much furnace repair costs in NJ? Most <a href='/heating'>furnace repairs</a> across Monmouth, Middlesex, and Ocean counties fall between $150 and $750 depending on the failed part. This 2026 guide breaks down the typical ranges New Jersey homeowners can expect so there are no surprises — and if cooling is on your mind too, see our <a href='/cost-guides/ac-repair-cost'>AC repair cost guide</a>.</p>",
                'serviceLink' => ['label' => 'Furnace & Heating Repair', 'href' => '/heating'],
                'rows' => [
                    ['Igniter or flame sensor replacement', '$150 – $350'],
                    ['Blower motor repair / replacement', '$300 – $700'],
                    ['Control board replacement', '$400 – $750'],
                    ['Gas valve replacement', '$300 – $600'],
                    ['Diagnostic / service call', '$89 – $150'],
                ],
                'sections' => [
                    ['heading' => 'Average Furnace Repair Cost', 'body' => "<p>Across New Jersey, the average <a href='/heating/furnace-tune-up'>furnace repair</a> runs about $150 to $750, with most homeowners landing in the middle for common fixes like an igniter, flame sensor, or capacitor. A diagnostic service call typically costs $89 to $150 and is often applied toward the repair. Guardian Air provides a flat-rate quote before any work begins, so you approve the price first.</p>"],
                    ['heading' => 'Cost by Problem', 'body' => "<p>The table above shows typical ranges by part. Igniters and flame sensors are on the lower end; blower motors, control boards, and gas valves cost more because the parts and labor are greater. Older or specialty systems can run higher if parts are harder to source.</p><p>Two NJ-specific factors nudge prices: older oil-burning equipment common in the region needs specialty parts that cost more to source, and township permit requirements add a fixed fee to certain jobs — both spelled out in your quote rather than discovered later.</p>"],
                    ['heading' => 'Repair vs. Replace', 'body' => "<p>If your furnace is under 15 years old and the repair is minor, fixing it is usually the better value. For aging systems with frequent or expensive failures, a new high-efficiency unit often pays off in lower bills — see our <a href='/heating/furnace-replacement'>furnace replacement</a> guide, or learn about routine <a href='/heating/furnace-tune-up'>furnace tune-ups</a> that prevent costly repairs.</p>"],
                    ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>These ranges hold steady across our coverage area — a flame sensor costs the same in Freehold as it does in Toms River — and flat-rate pricing means no after-hours surcharges anywhere we work. Ready for an exact number? Book a diagnostic through our <a href='/heating'>heating service</a> page.</p>"],
                ],
                'faqs' => [
                    ['q' => 'How much does furnace repair cost in NJ?', 'a' => 'Most furnace repairs in New Jersey cost $150 to $750 depending on the part. A diagnostic visit runs $89 to $150 and is often credited toward the repair. We quote a flat rate before any work.'],
                    ['q' => 'What affects the price of a furnace repair?', 'a' => 'The failed part, parts availability, your furnace type and age, and whether it is an emergency or after-hours call all affect the price. Our flat-rate pricing never adds overtime surcharges.'],
                    ['q' => 'Is it worth repairing an old furnace?', 'a' => 'If the unit is over 15 years old and repairs are adding up, replacement is usually the smarter long-term investment. We give you an honest repair-or-replace recommendation.'],
                    ['q' => 'Do you charge extra for emergency furnace repair?', 'a' => 'No. Guardian Air charges flat-rate pricing with no extra fees for nights, weekends, or holidays, so emergency repairs cost the same as scheduled ones.'],
                ],
            ],
            'ac-repair-cost' => [
                'name' => 'AC Repair Cost',
                'title' => 'How Much Does AC Repair Cost in NJ? | Guardian Air',
                'description' => 'AC repair cost in NJ — 2026 prices for capacitors, refrigerant & compressors across Monmouth, Middlesex & Ocean counties. Licensed Guardian Air — call!',
                'h1' => 'How Much Does AC Repair Cost in New Jersey?',
                'intro' => "<p>Wondering how much AC repair costs in NJ? Most <a href='/cooling'>air conditioning repairs</a> across Monmouth, Middlesex, and Ocean counties range from $150 to $600, though a compressor can cost more. This 2026 guide covers the most common AC repairs and their typical New Jersey prices.</p>\n\n<p>If your system is also due for heat-season attention, our <a href='/cost-guides/furnace-repair-cost'>furnace repair cost guide</a> walks through those numbers too.</p>",
                'serviceLink' => ['label' => 'AC Repair & Cooling', 'href' => '/cooling'],
                'rows' => [
                    ['Capacitor replacement', '$150 – $400'],
                    ['Refrigerant recharge', '$200 – $600'],
                    ['Contactor replacement', '$150 – $350'],
                    ['Compressor replacement', '$1,200 – $2,800'],
                    ['Diagnostic / service call', '$89 – $150'],
                ],
                'sections' => [
                    ['heading' => 'Average AC Repair Cost', 'body' => "<p>Across New Jersey, the average <a href='/cooling/ac-tune-up'>AC repair</a> runs about $150 to $600 for common issues like a failed capacitor, contactor, or a refrigerant recharge. A diagnostic service call is $89 to $150 and is often applied to the repair. Guardian Air quotes a flat rate upfront before any work begins.</p>"],
                    ['heading' => 'Cost by Problem', 'body' => "<p>Capacitors and contactors are inexpensive parts on the lower end. Refrigerant recharges depend on the amount and type, and a leak repair adds to the cost. A compressor replacement is the most expensive AC repair, which is why it often tips the decision toward replacement on older units.</p><p>Refrigerant type is the wildcard: systems still running phased-out R-22 pay a steep premium per pound, which often makes a major leak the financial tipping point toward a new system on a modern refrigerant.</p>"],
                    ['heading' => 'Repair vs. Replace', 'body' => "<p>If your AC is under 10 years old and the repair is minor, fixing it makes sense. For older systems or a failed compressor, a new high-efficiency unit is often the better value — see our <a href='/cooling/ac-installation'>AC installation</a> options, or keep your system healthy with an <a href='/cooling/ac-tune-up'>AC tune-up</a>.</p>"],
                    ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>Whether you're in Brick, Old Bridge, or anywhere between, we quote from the same flat-rate book — a capacitor swap on the shore costs what it costs inland. To get a firm number, schedule a diagnostic through our <a href='/cooling'>cooling service</a> page.</p>"],
                ],
                'faqs' => [
                    ['q' => 'How much does AC repair cost in NJ?', 'a' => 'Most AC repairs in New Jersey cost $150 to $600 depending on the part, while a compressor replacement runs $1,200 to $2,800. A diagnostic visit is $89 to $150, often credited toward the repair.'],
                    ['q' => 'What affects the price of an AC repair?', 'a' => 'The failed component, refrigerant type and amount, your system size and age, and accessibility all affect the price. We provide a flat-rate quote with no overtime surcharges.'],
                    ['q' => 'Is it worth repairing an old air conditioner?', 'a' => 'If the unit is over 10 years old and faces an expensive repair like a compressor, replacement is usually the smarter investment. We give you an honest recommendation either way.'],
                    ['q' => 'Do you charge extra for emergency AC repair?', 'a' => 'No. Our flat-rate pricing applies day or night, so emergency AC repair during a heatwave costs the same as a scheduled visit.'],
                ],
            ],
            'plumber-cost' => [
                'name' => 'Plumber Cost',
                'title' => 'How Much Does a Plumber Cost in NJ? | Guardian Air',
                'description' => 'What a plumber charges in NJ in 2026 — flat rates for drains, faucets & water heaters across Monmouth, Middlesex & Ocean counties. Call Guardian Air today!',
                'h1' => 'How Much Does a Plumber Cost in New Jersey?',
                'intro' => "<p>Wondering how much a plumber costs in NJ? Rates across Monmouth, Middlesex, and Ocean counties vary widely by job — from about $150 for a clogged drain to $2,500 for a <a href='/plumbing/water-heater'>water heater replacement</a>. This 2026 guide outlines typical New Jersey prices so you know what to expect before you call.</p>\n\n<p>For drain-specific jobs, our <a href='/cost-guides/drain-cleaning-cost'>drain cleaning cost guide</a> breaks those prices down by method.</p>",
                'serviceLink' => ['label' => 'Licensed Plumbing', 'href' => '/plumbing'],
                'rows' => [
                    ['Clogged drain clearing', '$150 – $400'],
                    ['Faucet repair / replacement', '$150 – $350'],
                    ['Water heater replacement', '$1,200 – $2,500'],
                    ['Leak detection', '$150 – $450'],
                    ['Service call', '$89 – $150'],
                ],
                'sections' => [
                    ['heading' => 'Average Plumber Rates', 'body' => "<p>Most New Jersey plumbers charge either a flat rate per job or an hourly rate of roughly $100 to $200, plus a service call fee of $89 to $150. Guardian Air uses flat-rate pricing, so you get one clear price for the job before we start — no hourly meter running.</p>"],
                    ['heading' => 'Cost by Job', 'body' => "<p>Simple jobs like clearing a drain or swapping a faucet are on the lower end. <a href='/plumbing/water-heater'>Water heater replacement</a> and <a href='/plumbing/leak-detection'>leak detection</a> cost more due to parts, labor, and equipment. The table above lists typical ranges for the most common requests.</p><p>Access drives plumbing labor more than most homeowners expect: a water heater in an open basement swaps faster than the same unit wedged in an attic closet, and older homes with corroded shutoffs add prep time. The flat rate absorbs that uncertainty — you pay the quoted number either way.</p>"],
                    ['heading' => 'Emergency Pricing', 'body' => "<p>Many companies add overtime for after-hours work — we don't. Our <a href='/plumbing/emergency-plumber'>24/7 emergency plumber</a> service is billed at the same flat rate, so a burst pipe at midnight costs no more than a scheduled visit.</p>"],
                    ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>Our plumbers carry the same flat-rate book in all three counties, so a faucet swap in Red Bank prices identically to one in Jackson. Browse <a href='/service-areas'>where we work</a>, or head to our <a href='/plumbing'>plumbing page</a> to book a visit.</p>"],
                ],
                'faqs' => [
                    ['q' => 'How much does a plumber cost in NJ?', 'a' => 'New Jersey plumbers typically charge $100 to $200 per hour or a flat rate per job, plus an $89 to $150 service call. Guardian Air quotes a flat rate upfront so there are no surprises.'],
                    ['q' => 'What affects what a plumber charges?', 'a' => 'The job type, parts required, difficulty and access, and whether it is an emergency all affect the price. Flat-rate pricing keeps it predictable regardless of how long the job takes.'],
                    ['q' => 'How much is an emergency plumber in NJ?', 'a' => 'Emergency plumbing typically ranges from $150 to $500+ depending on the problem. Guardian Air does not add overtime fees, so emergency calls cost the same flat rate as scheduled service.'],
                    ['q' => 'Do you offer free plumbing estimates?', 'a' => 'We provide upfront, flat-rate quotes before any work begins. For larger projects like repiping or water heater installs, we provide a free written estimate.'],
                ],
            ],
            'duct-cleaning-cost' => [
                'name' => 'Air Duct Cleaning Cost',
                'title' => 'How Much Does Air Duct Cleaning Cost in NJ? | Guardian Air',
                'description' => 'Air duct cleaning prices in NJ by home size across Monmouth, Middlesex & Ocean counties. Licensed Guardian Air gives free flat-rate quotes — call today!',
                'h1' => 'How Much Does Air Duct Cleaning Cost in New Jersey?',
                'intro' => "<p>Wondering about air duct cleaning cost in NJ? Most New Jersey homes pay between $300 and $1,000 depending on the size of the home and number of vents. This guide breaks down the typical ranges across Monmouth, Middlesex, and Ocean counties so you know what to expect.</p>\n\n<p>Clean ducts are one part of healthier air — explore our full <a href='/indoor-air-quality'>indoor air quality</a> services to see what else helps.</p>",
                'serviceLink' => ['label' => 'Air Duct Cleaning', 'href' => '/indoor-air-quality/duct-cleaning'],
                'rows' => [
                    ['Small home (1–10 vents)', '$300 – $500'],
                    ['Average home (10–20 vents)', '$450 – $750'],
                    ['Large home (20+ vents)', '$700 – $1,000'],
                    ['Dryer vent cleaning (add-on)', '$100 – $200'],
                    ['Inspection / quote', 'Free'],
                ],
                'sections' => [
                    ['heading' => 'Average Duct Cleaning Cost', 'body' => "<p>Across New Jersey, professional <a href='/indoor-air-quality/duct-cleaning'>air duct cleaning</a> averages $300 to $1,000, with most homes in the $450 to $750 range. We provide a flat-rate quote based on your home rather than a vague per-vent fee, and inspections are free.</p>"],
                    ['heading' => 'What Affects Price', 'body' => "<p>The number of vents and returns, the size and layout of your home, system accessibility, and add-ons like dryer-vent cleaning or sanitizing all affect the price. Homes with heavy buildup, pets, or recent renovations may take longer.</p><p>A quick way to estimate your own vent count: walk the house and tally supply registers and return grilles, then add the two. A typical three-bedroom colonial lands between 12 and 16 — squarely in the average pricing tier above.</p>"],
                    ['heading' => 'Is It Worth It?', 'body' => "<p>For homes with excess dust, allergies, pets, or visible debris in the vents, yes — clean ducts reduce recirculated allergens and can improve airflow and efficiency by up to 30%. Learn more on our <a href='/indoor-air-quality/duct-cleaning'>air duct cleaning</a> page, or explore <a href='/indoor-air-quality/mold-testing'>mold testing</a> if you suspect moisture.</p>"],
                    ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>Home size drives the price far more than location — a 20-vent colonial in Howell quotes the same as its twin in Edison. Request a free estimate through our <a href='/indoor-air-quality/duct-cleaning'>duct cleaning</a> page; we cover all of Monmouth, Middlesex, and Ocean counties.</p>"],
                ],
                'faqs' => [
                    ['q' => 'How much does air duct cleaning cost in NJ?', 'a' => 'Most New Jersey homes pay $300 to $1,000 for professional air duct cleaning depending on size and number of vents, with the average home around $450 to $750.'],
                    ['q' => 'What affects the price of duct cleaning?', 'a' => 'The number of vents and returns, home size and layout, accessibility, level of buildup, and add-ons like dryer-vent cleaning all influence the final price.'],
                    ['q' => 'Is air duct cleaning worth the cost?', 'a' => 'For homes with allergies, pets, heavy dust, or visible debris, yes — it reduces recirculated allergens and can improve airflow and efficiency. We give an honest assessment first.'],
                    ['q' => 'How often should ducts be cleaned?', 'a' => 'Most homes benefit every three to five years, and sooner with pets, allergies, renovations, or signs of mold.'],
                ],
            ],
            'drain-cleaning-cost' => [
                'name' => 'Drain Cleaning Cost',
                'title' => 'How Much Does Drain Cleaning Cost in NJ? | Guardian Air',
                'description' => 'Drain cleaning prices in NJ by method — snaking, hydro jetting & cameras across Monmouth, Middlesex & Ocean counties. Flat-rate Guardian Air quotes, call!',
                'h1' => 'How Much Does Drain Cleaning Cost in New Jersey?',
                'intro' => "<p>Wondering about drain cleaning cost in NJ? Most New Jersey <a href='/drains'>drain cleanings</a> run $150 to $500, while hydro jetting a main line costs more. This guide covers typical prices by method across Monmouth, Middlesex, and Ocean counties so there are no surprises.</p>\n\n<p>If the problem turns out to be plumbing rather than just a clog, our <a href='/cost-guides/plumber-cost'>plumber cost guide</a> covers those rates.</p>",
                'serviceLink' => ['label' => 'Drain Cleaning & Sewer', 'href' => '/drains'],
                'rows' => [
                    ['Sink, tub, or shower drain', '$150 – $350'],
                    ['Main line snaking', '$250 – $500'],
                    ['Hydro jetting', '$400 – $800'],
                    ['Camera inspection', '$150 – $350'],
                    ['Service call', '$89 – $150'],
                ],
                'sections' => [
                    ['heading' => 'Average Drain Cleaning Cost', 'body' => "<p>Across New Jersey, clearing a typical sink, tub, or shower drain runs $150 to $350, while a main-line snaking is $250 to $500. We provide a flat-rate quote upfront, and a <a href='/drains/camera-inspection'>camera inspection</a> can confirm the cause before you commit to a bigger job.</p>"],
                    ['heading' => 'Cost by Method', 'body' => "<p>Snaking (augering) is the most economical method for a single clog. <a href='/drains/hydro-jetting'>Hydro jetting</a> costs more but scours the entire pipe for recurring or severe clogs. A <a href='/drains/camera-inspection'>camera inspection</a> is often added to diagnose chronic problems or root intrusion.</p><p>Severity scales the price within each method: a soft blockage near the fixture clears in minutes, while a compacted main-line clog forty feet out takes heavier cable and more time. That's why we confirm the price after locating the clog, not before.</p>"],
                    ['heading' => 'When to Call', 'body' => "<p>Call when a drain is slow, gurgling, or backing up — and right away for multiple drains backing up at once, which points to a main-line issue that may need <a href='/drains/sewer-repair'>sewer repair</a>. Catching it early keeps the cost down.</p>"],
                    ['heading' => 'Serving Monmouth, Middlesex & Ocean County', 'body' => "<p>From shore bungalows to Middlesex split-levels, what you pay depends on the clog — not the zip code. See our <a href='/drains'>drain services</a> to book, or check the <a href='/service-areas'>service areas</a> page for your town.</p>"],
                ],
                'faqs' => [
                    ['q' => 'How much does drain cleaning cost in NJ?', 'a' => 'Most drain cleanings in New Jersey cost $150 to $500 depending on the clog location and method, with hydro jetting on the higher end at $400 to $800.'],
                    ['q' => 'What affects drain cleaning price?', 'a' => 'The location and severity of the clog, the method (snaking vs hydro jetting), and whether a camera inspection is needed all affect the price.'],
                    ['q' => 'Is hydro jetting worth the extra cost?', 'a' => 'For recurring or severe clogs, yes — it cleans the full pipe interior of grease, scale, and roots for a longer-lasting result than snaking.'],
                    ['q' => 'When should I call for drain cleaning?', 'a' => 'Call when drains are slow, gurgling, or smelly, and immediately if multiple drains back up at once, which usually signals a main-line problem.'],
                ],
            ],
        ];
    }

    /**
     * Hub copy for the /cost-guides index page.
     */
    public static function costGuidesHub(): array
    {
        return [
            'faqs' => [
                ['q' => 'Why are your prices shown as ranges?', 'a' => 'Every home and system is different, so we publish typical New Jersey ranges for transparency. Your exact price is confirmed with a flat-rate quote before any work begins — no surprises.'],
                ['q' => 'Do you charge for estimates?', 'a' => 'Diagnostic service calls carry a small fee that is often credited toward the repair, and we provide free written estimates for larger installations and replacements.'],
                ['q' => 'Are these prices for all of New Jersey?', 'a' => 'These ranges reflect typical pricing across our service area — Monmouth, Middlesex, and Ocean counties — and may vary with your specific system and situation.'],
            ],
        ];
    }
}
