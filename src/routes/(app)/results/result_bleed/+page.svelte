<script>
    import Toc from "svelte-toc";

    import ENC_DREEM from '$lib/assets/ENCLUDE_DREEM_Results.json'
    import MultiLineChart from "$lib/components/_MultiLineChart.svelte";
    import MultiBarChart from "$lib/components/_MultiBarChart.svelte";
</script>

<div class="flex m-auto place-content-center">
    <div class="max-w-md">
        <Toc
            breakpoint={2000}
            --toc-desktop-aside-margin="10em 0 0 0"
            --toc-desktop-sticky-top="3em"
            --toc-desktop-width="2em"
        >
            <span class=" line-clamp-3 p-1" let:idx let:heading slot="toc-item">
                {heading.innerText}
            </span>
        </Toc>
    </div>

    <article class="prose lg:prose-xl prose-p:mb-2 prose-p:mt-4 max-w-5xl m-auto mb-6 p-6">
        <h2 class="toc-exclude">Citizen-led transitions towards justice and inclusivity: A “green”
                rebranding of a Coal and Carbon Intensive Region into a city of
                the people, by the people, for the people</h2>

        <h2>Introduction</h2>
        <p>
            The European Union’s strategic vision and respective national
            policies have created opportunities to transform <strong
                >Coal
            </strong>and <strong>Carbon Intensive Regions </strong>(<strong
                >CCIRs</strong
            >) in line with sustainable development goals. These regions, facing
            challenges like job losses, aging populations, migration, and poor
            environmental conditions, often resist change. Successful
            transformation requires addressing structural, cultural, and
            perceptual factors to foster local collaboration and achieve early
            justice gains, triggering broader positive changes.
        </p>
        <p>
            A notable example is the <strong>municipality</strong> of
            <strong>Megalopolis</strong>
            in <strong>Greece</strong>. Originally rural, Megalopolis became a
            lignite mining hub in the 1970s, hosting 5 different lignite power
            plants over the years, which have been providing the local community
            with <strong>several job opportunities</strong> and have been
            <strong>fostering</strong> the <strong>local economy</strong>. The
            2019 Greek National Energy and Climate Plan mandated phasing out
            lignite power plants by 2023, a very ambitious goal, which due to
            the extreme events of the past few years, led to a
            <strong>new dependence</strong> on <strong>natural gas</strong>.
            This planning risks long-term reliance on fossil fuels, leading to
            <em>higher energy costs</em>, <em>potential gas shortages</em>, and
            <em>delayed adoption</em> of green energy solutions.
        </p>
        <p>
            Over the past few years, local stakeholders have suggested a
            post-lignite trajectory for Megalopolis that includes <strong
                >renewable energy</strong
            >
            projects, <strong>eco-tourism</strong>,
            <strong>alternative agriculture</strong>, and
            <strong>infrastructure improvements</strong>. Key steps include
            establishing a secure legal framework for renewable energy
            investments and energy efficiency upgrades. Proposals also include
            forming <strong>energy communities</strong> and offering
            <strong>tax exemptions</strong> to attract investments in clean energy
            projects.
        </p>
        <p>
            However, the plan's success heavily relies on citizens' willingness
            to invest in new technologies, highlighting the need for <strong
                >innovative business models</strong
            >
            and the <strong>legal framework</strong> to demonstrate economic and
            environmental benefits. Given the growing involvement of citizens
            and other actors in combating the climate crisis and driving changes
            in the energy system, this case study explores whether a
            <strong>citizen-led transition</strong>
            based on <strong>energy efficiency</strong> investments as well as
            <strong>lifestyle</strong>
            and <strong>behavioral</strong> changes can lead to a
            <strong>just</strong>
            and <strong>inclusive</strong> transition in the municipality of Megalopolis.
        </p>
        <p>
            With the premise that citizens must first recognize the benefits of
            investing in new energy products and services to actively engage in
            the energy transition, using the <strong>D</strong>ynamic high-<strong
                >R</strong
            >esolution d<strong>E</strong>mand-sid<strong>E M</strong>anagement
            (<strong>DREEM</strong>) model, we modeled three (3) different
            transition pathways aiming to transform the energy landscape in
            Megalopolis. The transition pathways simulated were developed
            according to the ENCLUDE’s “<strong><em>future-world</em></strong>”
            <strong>narratives</strong>:
        </p>
        <ul>
            <li>
                “<strong><em>A Familiar World</em></strong>”: This transition
                pathway aligns with the
                <strong>current national policy planning</strong> in the municipality
                of Megalopolis and draws from the plan of substituting district and
                oil heating installations with natural gas by 2035. This means that
                citizens follow the current rates of decarbonization efforts and
                decide to invest in the technological solutions foreseen each time
                by current policymaking at the national and the EU level.
            </li>
        </ul>
        <ul>
            <li>
                “<strong><em>A Unified World</em></strong>”: This transition
                pathway builds on the premise that
                <strong>citizens come together united</strong>
                in the battle against climate change and decide to invest in
                green solutions (energy efficiency upgrades and electrification,
                i.e., heat pumps) as soon as possible, while they are also
                willing to adopt <strong>behavioral</strong> and
                <strong>lifestyle</strong> changes when it comes to managing their
                energy consumption patterns.
            </li>
        </ul>
        <ul>
            <li>
                “<strong><em>A Fragmented World</em></strong>”: This transition
                pathway envisions a future marked by distrust and skepticism,
                where individuals prioritize <strong>energy security</strong>
                and <strong>lower bills</strong> over climate action. Due to the
                potential worldwide disparities and the resulting energy crises,
                people turn to <strong>conventional sources</strong> of energy
                more and more, despite their increasing prices. The latter leads
                to the introduction of green solutions as heat pumps in 2040, at
                half the rate compared to the situation under the “<em
                    >Familiar World</em
                >” narrative.
            </li>
        </ul>
        <p>
            For each pathway, we modeled the post-lignite development trajectory
            and estimated the potential <strong>economic</strong> and
            <strong>environmental</strong>
            benefits for citizens and the local community. Our findings reveal
            that a citizen-led energy transition focused on energy efficiency
            investments, lifestyle adjustments, and behavioral changes offers a
            <strong>more cost-effective</strong>
            and <strong>sustainable</strong> solution for the future energy
            system in Megalopolis, compared to continued reliance on fossil
            fuels and natural gas. This transition results in
            <strong>lower cumulative costs</strong>, including emission trading
            system (ETS) expenses, fuel costs, and renovation investments, at
            both the <strong>household</strong> and the
            <strong>municipality</strong> level.
        </p>
        <p>
            Moreover, our analysis demonstrates that the “<em>Unified World</em
            >” pathway is not only financially advantageous but also the most
            efficient in terms of reducing energy demand, minimizing
            environmental impact, and mitigating additional charges on household
            energy bills. Conversely, continued investment in gas
            infrastructure- specifically the replacement of existing oil boilers
            with gas boilers- will exacerbate energy poverty at the municipality
            level by leading to long-term increases in energy costs. This
            suggests that even following the current policy trajectory risks
            <strong>locking</strong>
            the residential sector into a <strong>dependence</strong> on natural
            gas, burdening citizens and households with <strong>high</strong>
            energy <strong>bills</strong> for decades to come.
        </p>
        <p>
            Through this case study, we have shown that while a rapid green
            transition may require <strong>higher upfront investments</strong>,
            it can also yield substantial returns; both economic and
            environmental. This insight challenges the
            <strong>false narrative</strong>
            that energy transition is expected to impose
            <strong>heavy financial burdens</strong>
            on <strong>citizens</strong> and <strong>society</strong>,
            demonstrating, instead, that they can generate significant economic
            benefits over time.
        </p>
        <p>
            To further support this transition, we advocate that the Greek
            government not only allocate structural funds to drive technological
            innovation in the municipality of Megalopolis, but also adapt its
            policies to align with the <strong>cultural</strong> and the
            <strong>perceptual</strong>
            context of the local community. By fostering energy citizenship, the
            government can <strong>empower</strong> citizens to play an active
            role in driving systemic change, resulting in a more
            <strong>diversified</strong>, <strong>inclusive</strong>, and
            <strong>resilient</strong>
            local energy system. This approach has the potential to unlock the
            full potential of <strong>community-driven</strong> transitions, ultimately
            creating a more sustainable and equitable energy future.
        </p>
        <p>
            More details about the ENCLUDE scenario space and this modeling
            study can be found in <a href="https://zenodo.org/records/11190946"
                >Deliverable 5.3: Report on the decarbonisation impact of energy
                citizenship at the local level</a
            >.
        </p>




        <h2>Research Questions</h2>
        <h3>
            “<em
                >Can a citizen-led transition based on investments in energy
                efficiency solutions, and lifestyle and behavioral changes,
                support a just and inclusive energy transition in the Coal and
                Carbon Intensive Region of Megalopolis? </em
            >”
        </h3>
        <p>
            The following figures illustrate the projected evolution of the
            final energy mix and the total energy savings in the residential
            sector of Megalopolis through 2050.
        </p>
        <p>
            The data clearly demonstrate that a future transition pathway where
            citizens unite in the fight against climate change- investing as
            early as possible in green solutions, like energy efficiency and
            electrification, and adopting climate-friendly lifestyle and
            behavioral changes to manage their energy consumption (i.e., “<em
                >Unified World</em
            >” scenario)- leads to a swift and complete phase out of fossil
            fuels from the local energy mix <strong>by 2030</strong>. These
            results underscore the importance of collective actions against the
            climate crisis, and early investments in sustainable and green
            solutions in achieving total decarbonization.
        </p>

        <!-- Familiar World -->
        <MultiBarChart
            data={ENC_DREEM}
            groupKeys={
                [{'Scenario': 'Familiar World'},
                {'Unit': 'ktoe/yr'}]}
            groupBy='year'
            xkey='variable'
        ></MultiBarChart>

        <p>
            Similarly, under a transition pathway where citizens follow the
            current decarbonization trajectory investing in technological
            solutions as foreseen each time by current policymaking at the EU
            and the national level (i.e., “<em>Familiar World</em>” scenario),
            full decarbonization in the residential sector can also be achieved
            by 2050. However, the pace of transition is considerably slower
            compared to the "<em>Unified World</em>" scenario. In this case, the
            use of fossil fuel-based products shows no significant decline
            <strong>before 2035</strong>, with reductions in natural gas
            investments only becoming apparent thereafter, reflecting a more
            gradual shift in the energy mix.
        </p>

        <!-- Unified World -->
        <MultiBarChart
            data={ENC_DREEM}
            groupKeys={
                [{'Scenario': 'Unified World'},
                {'Unit': 'ktoe/yr'}]}
            groupBy='year'
            xkey='variable'
        ></MultiBarChart>

        <p>
            Conversely, in a future characterized by <strong>distrust</strong>
            and <strong>skepticism</strong>, where individuals prioritize energy
            security and lower bills over combating against the climate crisis
            (i.e., “<em>Fragmented World</em>” scenario), the use of fossil
            fuel-based products remains entrenched in the energy mix
            <strong>until 2050</strong>. In this scenario, the vision of
            <strong>decarbonization</strong>
            remains <strong>out</strong>-<strong>of</strong>-<strong
                >reach</strong
            >, as the persistence of fossil fuels in the energy mix undermines
            efforts to transition toward a sustainable energy future.
        </p>

        <!-- Fragmented World -->
        <MultiBarChart
            data={ENC_DREEM}
            groupKeys={
                [{'Scenario': 'Fragmented World'},
                {'Unit': 'ktoe/yr'}]}
            groupBy='year'
            xkey='variable'
        ></MultiBarChart>

        <p>
            Furthermore, to extract a meaningful evaluation of the economic
            implications and viability of the different transition pathways
            under study, we calculated the cumulative costs of the energy
            transition in the residential sector, by aggregating all the
            individual costs (i.e., ETS, fuel, and renovation costs), at both
            the <strong>household</strong> and the <strong>municipality</strong>
            level. For the sake of simplicity, it is assumed that the total
            costs of the energy transition at the municipality level are
            <em>equally</em> divided among households.
        </p>


        <!-- total cost at the muncipla lvl -->
        <MultiLineChart
            data={ENC_DREEM}
            region='MEGALOPOLIS-GREECE'
            variable='Total Fuel Costs (All Households)|Residential and Commercial|Residential'
            unit='euros/yr'
        ></MultiLineChart>

        <p>
            The figure below presents the evolution of the charges to be borne
            at the household level by 2050. It is noteworthy to mention that
            except for the “<em>Fragmented World</em>” scenario, the other 2
            transition pathways lead to reduced annual costs, showing the
            viability of investing in green solutions.
        </p>
        <p>
            Although citizens remain sceptic about climate change and reliant to
            the use of fossil fuels under the “<em>Fragmented World</em>”
            narrative, considering coal and natural gas as the most reliable
            solutions towards energy security and lower energy bills, it is the
            “<em>Unified World</em>” narrative that leads to lower energy bills
            by 2050.
        </p>
        <p>
            In particular, under the “<em>Unified World</em>” scenario, annual
            costs seem to drop
            <strong>below 1,000€ per household</strong> <strong>by 2030</strong>
            and <strong>stay below</strong> €1,000 with a
            <strong>decreasing trend by 2050</strong>. Cumulative costs per
            household by 2050, mark savings <strong>up to 4x </strong>more than
            if they remained reliant on fossil fuels, as in the “<em
                >Fragmented World</em
            >” scenario.
        </p>
        <p>
            Overall, a cumulative amount of around <strong>€300 million</strong>
            could be <strong>saved </strong>at the
            <strong>municipality level by 2050</strong>. Downscaling from the
            municipality to the household level, this is translated to total
            savings of around <strong>€60,000 per household</strong> (i.e.,
            <strong>~3 times the current GDP per capita</strong>
            in Greece). Considering that local economy, which is currently
            mainly dependent on the energy and the mining sector, will undergo
            an abrupt pathway towards the phase out of lignite, and that by 2025
            (when lignite-fired units are expected to close) employment and
            income levels could be significantly reduced, a citizen-led
            transition like the one studied, could decrease households’ energy
            costs, limiting the effect of wage decreases, and thus providing a
            significant helping hand to the most
            <strong>vulnerable citizen groups</strong>.
        </p>

        <!-- total cost per household -->
        <MultiLineChart
            data={ENC_DREEM}
            region='MEGALOPOLIS-GREECE'
            variable='Total Fuel Costs (Per Household)|Residential and Commercial|Residential'
            unit='euros/household/yr'
        ></MultiLineChart>

        <h3>
            <em
                >“What is the emission reduction (decarbonization) potential of different transition pathways at the municipality level?”
            </em>
        </h3>
        <p>
            When considering the environmental impact of the transition pathways
            under study, projections on CO<sub>2</sub> emissions serve as a key metric. The
            following figures illustrate the evolution of the annual CO<sub>2</sub>
            emissions under the 3 transition pathways under study.
        </p>

        <!-- emissions co2 -->
        <MultiLineChart
            data={ENC_DREEM}
            region='MEGALOPOLIS-GREECE'
            variable='Emissions|CO2|Residential and Commercial|Residential'
            unit='t CO2/yr'
        ></MultiLineChart>

        <p>
            It is shown that under both the “<em>Familiar World”</em> and the “<em
                >Unified World”</em
            >
            scenarios, decarbonization by 2050 is achieved, although under the “<em
                >Unified World”</em
            >
            scenario decarbonization is achieved at a much faster rate,
            achieving CO<sub>2</sub> emission reduction levels by 2030 that are attained
            more than a decade later under the “<em>Familiar World”</em> scenario.
        </p>
    </article>
</div>
