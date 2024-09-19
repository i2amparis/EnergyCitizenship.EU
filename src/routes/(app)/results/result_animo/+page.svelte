<script>
    import Toc from 'svelte-toc'
    
    import guardian_icon from "$lib/assets/Results/result1/guardian.png"
    import sceptic_icon from "$lib/assets/Results/result1/sceptic.png"
    import colab_icon from "$lib/assets/Results/result1/colab.png"
    import trailblazer_icon from "$lib/assets/Results/result1/trailblazer.png"
    import reliant_icon from "$lib/assets/Results/result1/reliant.png"
    import consious_icon from "$lib/assets/Results/result1/consious.png"

    import { PUBLIC_MAPBOX_TOKEN } from "$env/static/public";
    import { Map, controls } from "$lib/components.js";
    const { NavigationControl } = controls;

    import CeiResult1 from '$lib/components/_CEI_result1.svelte';
    import MultiLineChart from '$lib/components/_MultiLineChart.svelte'

    import RadioButton from '$lib/components/RadioButton.svelte'

    import ENC_results from '$lib/assets/ENCLUDE_Models_Results.json'

    let center = { lat: 47.90448841507046, lng: 9.619435626967515 };
    let zoom = 3.2;
    let mapComponent;
    let mapStyle = 'mapbox://styles/steftsotras/cln8vlqvp03ih01qxgs7583d7'
                // 'mapbox://styles/steftsotras/clhbb2mb2013n01p65kz10ffq'

    function recentre({ detail }) {
        center = detail.center;
    }

    const regions = ['Cloughjordan Ecovillage - Ireland','Energie C Midden Delfland - The Netherlands','Belica Energy Community - North Macedonia'];
    const variables = ['Collective Energy Initiative (CEI) Percentage growth | Average', 'Collective Energy Initiative (CEI) Percentage growth | Min', 'Collective Energy Initiative (CEI) Percentage growth | Max']
    let currVariable = variables[0];
</script>



<div class="flex m-auto place-content-center">
<div class="max-w-md">
<Toc 
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
    
    <h2 class="toc-exclude">
        Driving factors and citizen personas towards the further growth and
        diffusion of Collective Energy Initiatives in Europe by 2030
    </h2>

    <section>
    <h2>Introduction</h2>
    <p>
        As Europe transitions to a sustainable energy system, achieving climate
        neutrality by 2050 hinges on the rise of collaborative <em
            ><strong>energy citizenship</strong></em
        >. The ENCLUDE
        <em><strong>&ldquo;Band Together&rdquo; </strong></em>storyline
        highlights the collective actions that
        <em><strong>energy citizens </strong></em>are poised to undertake- such
        as forming energy communities, ecovillages, and other Collective Energy
        Initiatives (CEIs). These grassroot movements are driving localized
        green energy production and maximizing resource efficiency, with their
        numbers steadily growing in recent years. To accelerate this progress,
        we analyzed and mapped out pathways for expanding CEIs, with the goal of
        better understanding and supporting their growth and influence. Our aim
        was to decode the mechanisms and motivations driving the establishment
        and spread of these innovative structures, helping them translate,
        replicate, and scale to a wider audience. To apply and test our
        approach, we selected <strong>three </strong>(<strong>3</strong>)
        <strong>CEIs </strong>that differ in lifespan, population, and location:
    </p>
    <p>&ldquo;<strong>Cloughjordan Ecovillage</strong>&rdquo; in Ireland,</p>
    <p>
        &ldquo;<strong>EnergieC Midden-Delfland</strong>&rdquo; in The
        Netherlands,
    </p>
    <p>
        &ldquo;<strong>Belica Energy Community</strong>&rdquo; in North
        Macedonia.
    </p>
    <!-- <p>&nbsp;</p> -->

    <div class="mt-4 mb-4" id="map">
        <div class="map-container">
            <div class="map-wrap">
                <Map
                    bind:this={mapComponent}
                    accessToken={PUBLIC_MAPBOX_TOKEN}
                    on:recentre={recentre}
                    {center}
                    bind:zoom
                    style={mapStyle}
                >
                    <CeiResult1 />
                    <NavigationControl />
                </Map>
            </div>
        </div>
    </div>

    <p>
        To model diffusion processes, the gr<strong>A</strong>ssroot i<strong
            >N</strong
        >novation d<strong>I</strong>ffusion <strong>MO</strong>del (ANIMO) was
        designed and developed in the context of ENCLUDE and applied to the
        real-life case studies above. ANIMO delves into how envisaged social
        innovations are adopted by, and disseminated among, a network of
        individuals, with diverse socioeconomic, behavioral, and lifestyle
        profiles. In this particular application, the model is employed to
        simulate the further growth and diffusion of the 3 CEIs under study.
    </p>
    <p>
        Within the &ldquo;<em>Band Together</em>&rdquo; storyline, the modeling
        analysis provided valuable insights into the motivations driving
        residents to participate in CEIs. Additionally, the model examined the
        influence of social, cultural, and demographic factors on the expansion
        of these initiatives.
    </p>
    <p>
        Building on these insights, the analysis also projected the potential
        decarbonization impact that the growth of CEIs could have on the broader
        energy system.
    </p>
    <p>
        The results of this work reveal ways in which the presented approach can
        be useful in formulating policies to encourage the development or future
        growth of CEIs, as it can:
    </p>
    <ul>
        <li data-list-text="o">
            <p>
                <strong>Identify and prioritize high-potential CEIs, optimizing resource
                allocation:</strong> By pinpointing which CEIs are most likely to
                succeed, policymakers and stakeholders can strategically
                allocate resources to maximize impact and ensure sustainable
                growth.
            </p>
        </li>
        <li data-list-text="o">
            <p>
                <strong>Enhance citizen participation through optimized interventions
                and tailored strategies:</strong> The model enables the design of
                targeted engagement and communication strategies, which can
                increase the likelihood of citizen involvement by addressing
                specific needs and motivations. Tailored initiatives can further
                boost participation rates and create more inclusive energy
                communities.
            </p>
        </li>
        <li data-list-text="o">
            <p>
                <strong>Demonstrate the CO2 reduction potential of CEIs at the local
                level:</strong> By illustrating the tangible decarbonization effects of
                CEI expansion, results can motivate citizens to take part in
                such initiatives and incentivize investors to fund
                community-driven projects.
            </p>
        </li>
        <li data-list-text="o">
            <p>
                <strong>Enable proactive infrastructure development:</strong> Anticipating the
                future growth of energy communities and ecovillages allows for
                informed and timely infrastructure investment decisions. This
                proactive approach ensures that infrastructure is ready to
                support expansion, avoiding delays and bottlenecks that could
                otherwise hinder the growth of CEIs.
            </p>
        </li>
    </ul>
    <p>
        <a href="https://zenodo.org/records/11190946" target="_blank"
            >More details about the ENCLUDE scenario space and the modelling
            process can be found in
        </a><a href="https://zenodo.org/records/11190946" target="_blank"
            >Deliverable 5.3: Report on the decarbonisation impact of energy
            citizenship at the local level</a
        ><a href="https://zenodo.org/records/11190946" target="_blank">.</a>
    </p>

    </section>



    <section class="mt-12">


    <h2>Research/ Policy questions</h2>
    <h3>
        What are potential driving factors that could support the diffusion and
        further growth of Collective Energy Initiatives in Europe by 2030?
    </h3>
    <p>
        Findings revealed a strong correlation between population density and
        projected growth of the CEIs under study. Densely populated areas
        facilitate faster CEI expansion, likely due to the enhanced effect of
        the &ldquo;<em>word-of-mouth</em>&rdquo; phenomenon. This is clearly
        demonstrated in the case of the &ldquo;EnergieC Midden-Delfland&rdquo;
        energy community, which is the most densely populated area out of the 3
        case studies. This trend is further supported when comparing case study
        results across the &ldquo;future-world&rdquo; narratives.
    </p>
    <p>
        However, another key differentiator impacting growth appears to be the
        level of interconnectedness within a society, or, in other words, the
        number of social connections. In essence, closely knit societies, either
        purely due to size of population or due to the existence of strong
        social bonds facilitate faster dissemination of information about the
        benefits of collectivism, leading to higher growth rates.
    </p>
    <p>
        Interestingly, even in the case of the &ldquo;<em>Fragmented World</em
        >&rdquo; narrative, characterized by limited interaction and skepticism,
        high population density manages to circulate information about the
        benefits of CEIs and propagate it throughout the community over time.
        The graphs further illustrate periods of rapid growth triggered by the
        cascade effect of influence. As more individuals join the CEI, the
        information spreads more readily through the social network,
        accelerating expansion.
    </p>
    <p>
        This contrasts with the initial stagnant growth phase, where
        establishing a core group is crucial. Once a core foundation is laid, it
        facilitates influence on a larger audience, leading to both higher
        overall growth and a faster growth trajectory. This trend is most
        prominently emphasized in the Dutch case study and less so in the Irish
        and the North Macedonian ones.
    </p>
    <p>
        In conclusion, <em>population density </em>and
        <em>social connectivity </em>were identified as
        <em>key drivers of further CEI growth</em>. Remote locations, like the
        cases of Ireland and even more of North Macedonia, face inherent
        limitations due to lower population density. The graphs clearly
        demonstrate the cascade effect of mass participation that is encouraged
        by dense areas in terms of population such as the one in the
        Netherlands, highlighting a "<em>ripple effect</em>" that can
        significantly accelerate adoption of sustainable practices. This
        phenomenon holds immense potential for achieving the EU&rsquo;s
        ambitious decarbonization goals, particularly when combined with
        targeted policy actions designed to achieve widespread adoption of CEIs.
    </p>
    <p>
        Focusing on the &ldquo;<em>Familiar World</em>&rdquo; narrative, in the
        case of the "EnergieC Midden-Delfland" energy community, data on CEIs in
        the Netherlands suggests an anticipated growth rate of approximately 8%
        based on historical trends. However, this figure serves as a broad
        approximation, and the projection of the growth percentage in a 5-year
        time span is based on the assumption of steady compound annual increase.
    </p>
    <p>
        A crucial limitation of relying solely on such an approach for
        projections lies mainly in its inability to capture the dynamic nature
        of energy communities&rsquo; diffusion and expansion, which should be
    </p>
    <p>
        taken into consideration during the design of policy schemes that aim at
        the support and integration of energy communities into the existing
        grid.
    </p>
    <p>
        For example, in a scenario where a rapidly growing community surpasses
        initial projections for on-site solar power generation, further growth
        could be met with inability to be realized due to the unpreparedness of
        the existing infrastructure.
    </p>
    <p>
        By gauging the potential rate of community growth based on simulations
        such as this, informed and proactive infrastructure investment decisions
        are possible. This can prompt policymakers and planners to ensure that
        the current infrastructure can accommodate the projected increase in
        population, which, in turn, can save valuable resources and reduce the
        time until carbon neutrality is achieved.
    </p>
    <p>
        This forward-thinking approach can be applied not only when grid
        integration matters but also in other infrastructure issues. This can be
        somewhat showcased in the Irish case study, in which the feedback we
        received via direct communication with community members, revealed the
        critical role of infrastructure planning in enabling growth. While the
        project demonstrates success in certain sustainability metrics, further
        expansion has remained stagnant and dependent on resolving limitations
        within the existing wastewater treatment system.
    </p>
    <p>
        More specifically, according to project leaders there is currently an <em
            >embargo
        </em>on planning permissions in &ldquo;Cloughjordan Ecovillage&rdquo;
        because the local town wastewater treatment plant is at capacity. This
        has resulted in the number of dwellings and residents in the village
        remaining static for the last 14 years, pointing to the fact that if the
        situation remains as is, there will be no further growth.
    </p>
    <p>
        The case of the &ldquo;Cloughjordan Ecovillage&rdquo; is a prime example
        of how unforeseen hurdles, particularly infrastructure constraints, can
        impede the progress of otherwise well-designed sustainable community
        structures. This underlines the importance of collaborative efforts
        between CEIs, local authorities, and relevant stakeholders combined with
        a strategic approach to ensure that infrastructure keeps pace with
        sustainable development plans.
    </p>
    <div class="mt-12">
        <RadioButton
            bind:selected={currVariable}
        ></RadioButton>
        {#key currVariable}
            {#each regions as region}
                <MultiLineChart
                    data={ENC_results}
                    region={region}
                    bind:variable={currVariable} 
                    unit='Percentage growth from initial population'
                ></MultiLineChart>
            {/each}
        {/key}
    </div>

    </section>

    <section class="mt-12">
    <h3>
        What is the emission reduction (decarbonization) potential related to
        the further growth of CEIs around Europe?
    </h3>
    <p>
        As expected, the most significant emission reduction (decarbonization)
        potential is correlated with increased participation in energy
        communities, highlighting the positive impact of collective expressions
        of energy citizenship on advancing energy transition endeavors. Having
        utilized country specific data, these outcomes produce insights not only
        for the CEIs under study, but also the broader contexts of the countries
        hosting them.
    </p>
    <p>
        In this regard, the &ldquo;EnergieC Midden-Delfland&rdquo; energy
        community in the Netherlands showcases the highest capacity for reducing
        carbon emissions, which also highlights the efficacy of the
        energy-related Dutch policy framework. On the other hand,
        &ldquo;Cloughjordan Ecovillage&rdquo; in Ireland, while exhibiting
        substantial promise for decarbonization, local infrastructure
        constraints stand in the way of further progress, despite its notable
        contributions to the carbon footprint reduction in the region during
        past years.
    </p>
    <p>
        Lastly, the North Macedonian case study showcases the lowest emission
        reduction (decarbonization) potential compared to the other case
        studies. This phenomenon, however, is possibly owed less so to the weak
        regulatory frameworks in place, but rather is attributable to factors
        such as social cohesion, demographic shifts, and a declining population
        in the region.
    </p>
    <p>
        Nonetheless, even in instances where the impact may seem marginal, the
        efforts of these local initiatives are noteworthy and warrant further
        encouragement and support. This underscores the importance of
        operationalizing their activities through targeted research and policy
        initiatives to maximize their potential in driving sustainable energy
        transitions and fostering collective energy citizenship practices at the
        local level.
    </p>

    {#each regions as region}
        <MultiLineChart
            data={ENC_results}
            region={region}
            variable={'Emissions avoided|CO2|Residential and Commercial|Residential'}
            unit='t CO2/yr'
        ></MultiLineChart>
    {/each}

    </section>
    

    <section class="mt-12">
    <h2>
        Citizen personas: what individual motivations are driving the further
        growth of Collective Energy Initiatives around Europe?
    </h2>
    <p>
        Leveraging ENCLUDE&rsquo;s questionnaire on members of CEIs, delving
        into both individual traits and collective aspects of life in the
        community, we categorized the questions that were asked and through this
        process we identified <strong>four </strong>(<strong>4</strong>)
        <strong>&ldquo;character attributes&rdquo;</strong>, deemed crucial in
        the decision- making process of individuals to join a CEI. By processing
        the survey data on participants&rsquo; income, lifestyle, education,
        etc., these character attributes were quantified and inserted as
        <em>agent-related parameters </em>into ANIMO for the CEIs under study.
        The identified character attributes are:
    </p>
    <ul>
        <li data-list-text="">
            <p>
                "Environmental Awareness": Captures individuals' knowledge and
                concern for environmental issues, often motivating them to
                participate in collective initiatives that address these
                challenges.
            </p>
        </li>
        <li data-list-text="">
            <p>
                "Energy Independence": Reflects individuals' desire for
                self-sufficiency and independence from the traditional power
                grid.
            </p>
        </li>
        <li data-list-text="">
            <p>
                "Sense of Community": Describes the feeling of belonging and
                connectedness, which strongly influences the willingness to
                engage in CEIs.
            </p>
        </li>
        <li data-list-text="">
            <p>
                "Financial Concern": Represents individuals' anxiety about their
                financial well-being, driving them to join CEIs for cost savings
                while also indicating their risk aversion.
            </p>
        </li>
    </ul>
    <p>
        Based on data analysis of real survey results, we then created <strong
            >six
        </strong>(<strong>6</strong>) <strong>personas</strong>, outlining
        different potential citizen profiles with
        <strong>potential motivations </strong>driving their
        <strong>decision to join </strong>a <strong>CEI</strong>:
    </p>

    <table cellspacing="0">
        <tbody>
            <tr>
                <td>
                    <!-- <h2 class="toc-exclude">Citizen Personas</h2> -->
                    <div class=" w-24 sm:w-32 lg:w-44"></div>
                </td>
                <!-- <td align="center">&nbsp;</td> -->
            </tr>
            <!-- Character 1: The Green Guardian -->
            <!-- <tr>
                <td align="center">
                    <h3>The Green Guardian</h3>
                </td>
                <td align="center">&nbsp;</td>
            </tr> -->
            <tr>
                <td align="center" valign="bottom">
                    <img src="{guardian_icon}" alt="" width="123" height="178" />
                </td>
                <td align="center" valign="top">
                    <h3>The Green Guardian</h3>
                    <p>
                        Environmentalists prioritizing sustainability and energy
                        independence. Concerned about traditional energy's impact,
                        they seek to reduce their carbon footprint through on-site
                        renewable energy and reduced grid reliance, aligning with
                        their desire for energy autonomy.
                    </p>
                </td>
            </tr>
    
            <!-- Character 2: The Security-Minded Sceptic -->
            <tr>
                <!-- <td align="center">
                    <h3>The Security-Minded Sceptic</h3>
                </td>
                <td align="center">&nbsp;</td> -->
            </tr>
            <tr>
                <td align="center" valign="bottom">
                    <img src="{sceptic_icon}" alt="" width="122" height="164" />
                </td>
                <td align="center" valign="top">
                    <h3>The Security-Minded Sceptic</h3>
                    <p>
                        These individuals are mainly attracted to the financial
                        benefits of an energy community. They value a strong sense
                        of community and trust their neighbors' positive experiences,
                        which can convince them of the financial advantages and
                        encourage adoption.
                    </p>
                </td>
            </tr>
    
            <!-- Character 3: The Eco-Collaborators -->
            <tr>
                <!-- <td align="center">
                    <h3>The Eco-Collaborators</h3>
                </td>
                <td align="center">&nbsp;</td> -->
            </tr>
            <tr>
                <td align="center" valign="bottom">
                    <img src="{colab_icon}" alt="" width="126" height="167" />
                </td>
                <td align="center" valign="top">
                    <h3>The Eco-Collaborators</h3>
                    <p>
                        Community-oriented people that value collective action to
                        address climate change. They are motivated by contributing
                        to a larger environmental movement with like-minded neighbors
                        and appreciate the focus on renewable energy to reduce their
                        environmental impact.
                    </p>
                </td>
            </tr>
    
            <!-- Character 4: The Tech Trailblazer -->
            <tr>
                <!-- <td align="center">
                    <h3>The Tech Trailblazer</h3>
                </td>
                <td align="center">&nbsp;</td> -->
            </tr>
            <tr>
                <td align="center" valign="bottom">
                    <img src="{trailblazer_icon}" alt="" width="123" height="187" />
                </td>
                <td align="center" valign="top">
                    <h3>The Tech Trailblazer</h3>
                    <p>
                        Excited about technologically innovative aspects of energy
                        communities, they value smart home integration &amp; increased
                        energy independence. The environmental benefits are a bonus,
                        but their primary interest is in experimenting with and
                        adopting the latest tech.
                    </p>
                </td>
            </tr>
    
            <!-- Character 5: The Self-Reliant Saver -->
            <tr>
                <!-- <td align="center">
                    <h3>The Self-Reliant Saver</h3>
                </td>
                <td align="center">&nbsp;</td> -->
            </tr>
            <tr>
                <td align="center" valign="bottom">
                    <img src="{reliant_icon}" alt="" width="135" height="167" />
                </td>
                <td align="center" valign="top">
                    <h3>The Self-Reliant Saver</h3>
                    <p>
                        These individuals seek self-sufficiency, valuing energy
                        independence and financial savings. They aim to reduce
                        reliance on the traditional grid, generate their own energy,
                        and are motivated by lower energy bills and shared investment
                        opportunities.
                    </p>
                </td>
            </tr>
    
            <!-- Character 6: The Eco-Conscious Saver -->
            <tr>
                <!-- <td align="center">
                    <h3>The Eco-Conscious Saver</h3>
                </td>
                <td align="center">&nbsp;</td> -->
            </tr>
            <tr>
                <td align="center" valign="bottom">
                    <img src="{consious_icon}" alt="" width="131" height="178" />
                </td>
                <td align="center" valign="top">
                    <h3>The Eco-Conscious Saver</h3>
                    <p>
                        Environmentally conscious and financially savvy, these
                        individuals want to reduce their carbon footprint and save
                        money or earn income by joining energy communities.
                        Demonstrating cost savings and other financial benefits
                        related to CEIs can influence their decision.
                    </p>
                </td>
            </tr>
        </tbody>
    </table>
    
    

    </section>

</article>

</div>

<style>
    .map-container {
      width: 100%;
      height: 400px;
  
      display: flex;
      align-items: stretch;
      position: relative;
    }
    .map-wrap {
      flex: 1;
      border-left: 1px solid #dedede;
      display: flex;
      flex-direction: column;
    }

    table td{
        vertical-align:  bottom!important;;
    }
  </style>