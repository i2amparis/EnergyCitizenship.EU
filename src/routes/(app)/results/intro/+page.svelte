<script>
  import Toc from "svelte-toc";

  import expressions1 from "$lib/assets/Results/intro/expressions_1.png"
  import expressions2 from "$lib/assets/Results/intro/expressions_2.png"
  import expressions3 from "$lib/assets/Results/intro/expressions_3.png"
  import expressions4 from "$lib/assets/Results/intro/expressions_4.png"

  import scenario_space from "$lib/assets/Results/intro/scenario_space.png"

  import world1 from "$lib/assets/Results/intro/world_1.png"
  import world2 from "$lib/assets/Results/intro/world_2.png"
  import world3 from "$lib/assets/Results/intro/world_3.png"


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

  <article
    class="prose lg:prose-xl prose-p:mb-2 prose-p:mt-4 max-w-5xl m-auto mb-6 p-6"
  >
    <h2 class="toc-exclude">
        Combining &ldquo;people-centered&rdquo; with narratives of potential
        &ldquo;future-world&rdquo; evolutions towards transformative scenario
        design and the operationalization of energy citizenship
    </h2>

    <h2>Introduction</h2>

    <p>
      Since the early 2000s scholars have been increasingly recognizing the <strong
        >limitations</strong
      >
      of <strong>traditional top-down approaches</strong> to climate and energy
      policy, which fail to account for the <strong>social</strong> and
      <strong>cultural</strong>
      dimensions of energy use and production. In this context, the concept of
      <strong>energy citizenship</strong>
      has emerged and gained considerable attention in recent years due to its
      potential to bridge the gap between energy transition policies and social
      participation, by emphasizing the significance of
      <strong>participatory</strong>
      and <strong>democratic</strong> processes in relevant decision-making processes.
    </p>
    <p>
      Discourse surrounding energy matters has predominantly centered on <u
        >technical</u
      >
      and <u>economic</u> considerations, often overlooking discussions on
      <strong>inclusive</strong>
      and <strong>democratic</strong> <em>governance</em>. This is also reflected
      in contemporary energy <em>modelling practices</em> and
      <em>scenario-based research</em>, where focus is primarily placed on the
      technological optimization and economic implications of the energy
      transition, often disregarding social and environmental aspects, and
      treating them as external narratives, only to be considered &ldquo;<strong
        >on-top</strong
      >&rdquo; of modelling results, serving merely as a perspective for
      discussing scenarios and narratives.
    </p>
    <p>
      Underrepresentation of such elements combined with disproportionate
      emphasis on technoeconomic factors can lead to <strong
        >oversimplified</strong
      > <strong>scenarios</strong> that fail to inform policymakers about the multiple
      dimensions crucial for achieving a sustainable and inclusive energy transition.
      In this respect, there is a growing body of research seeking ways to integrate
      social sciences into scenario-based exploration.
    </p>
    <p>
      To this end, in ENCLUDE, we developed and applied a novel framework for <strong
        >transformative scenario design</strong
      >
      based on <strong>social innovations</strong> of
      <strong>energy citizenship</strong>
      and potential <strong>evolutions</strong> of the <strong>future</strong>,
      which encompasses a broad spectrum of uncertainties and embraces the depth
      of complexity of the energy landscape, at the <strong>local</strong>, the
      <strong>regional</strong>, the <strong>national</strong>, or the
      <strong>transnational</strong>
      level. The developed framework does not only consider regulatory
      influences and technological advancements, but also delves into the
      social, cultural, and behavioral manifestations of energy citizenship,
      envisioning energy futures that go <strong>beyond</strong> the
      <strong>comfort zone</strong>
      of <strong>current scenario-based research</strong> and examine
      <strong>out-of-ordinary extremes</strong>.
    </p>
    <p>
      To build the <strong>scenario design framework</strong>, we started with
      extensive desk research into various <strong>patterns </strong> and <strong>trends</strong> of <strong>energy citizenship</strong>. This allowed us to
      capture and map the full range of citizen involvement in the energy
      transition. Considering stakeholders&rsquo; insights, we then grouped
      patterns and trends into <em>thematic storylines</em> that highlight both
      <strong>individual</strong>
      and <strong>collective</strong> actions.
    </p>
    <p>
      <strong>Transformative scenario design </strong>should outline the
      transition to a decarbonized energy system while accounting for potential
      challenges and vulnerabilities humanity might face. To do this, we
      broadened the concept of the
      <strong>Shared Socioeconomic Pathways</strong>
      (SSPs) to capture how various types of &ldquo;<strong>environments</strong
      >&rdquo; may influence the ways citizens engage in the energy transition.
    </p>
    <p>
      This structured framework essentially aims to aid the design of transition
      scenarios towards the operationalization and the holistic understanding of
      the decarbonization potential of energy citizenship, also accounting for
      the uncertainty and the dynamic character of events surrounding the
      potential evolution of the future. The novelty of this work lies in the
      flexibility that the developed framework provides to potential users
      towards exploring &ldquo;what if&rdquo; scenarios of the decarbonization
      potential:
    </p>
    <ol type="i">
      <li>
        <p>
          attributed to <strong>individuals&rsquo;</strong> decision-making, while
          keeping constant potential future evolutions of the surrounding environment,
        </p>
      </li>
      <li>
        <p>
          attributed to <strong>different changes</strong> of the surrounding environment,
          as governmental and societal decisions, etc., while keeping constant individuals&rsquo;
          decisions and choices, isolating future conditions&rsquo; potential for
          climate change mitigation, and
        </p>
      </li>
      <li>
        <p>
          attributed to <strong>variance</strong> in both <strong>individuals&rsquo; decisions</strong> and <strong> choices</strong> and <strong>surrounding environment&rsquo;s conditions</strong
          >, enabling deep exploratory assessments of different potential
          futures, also accounting for future uncertainties and unexpected
          events.
        </p>
      </li>
    </ol>
    <p>
      More details about the ENCLUDE scenario space and its use in the
      project&rsquo;s modeling applications can be found in <a
        href="https://encludeproject.eu/sites/default/files/2023-02/ENCLUDE_D5.2%20Report%20on%20development%20of%20decarbonization%20pathways%20based%20on%20social%20innovations%20of%20energy%20citizenship.pdf"
        >Deliverable 5.2: Development of decarbonization pathways based on
        social innovations of energy citizenship</a
      >,
      <a href="https://zenodo.org/records/11190946"
        >Deliverable 5.3: Report on the decarbonization impact of energy
        citizenship at the local level</a
      >, and
      <a href="https://zenodo.org/records/12686859"
        >Deliverable 5.4: Report on the decarbonization potential of energy
        citizenship at the national and the EU levels</a
      >.
    </p>
    <h2>Research questions</h2>
    <h3>
      <strong
        >What are the patterns and trends through which energy citizenship is
        expressed?</strong
      >
    </h3>
    <p>
      The concept of energy citizenship, as an emergent concept itself, remains
      undertheorized and the boundaries surrounding it are not strictly defined.
      Varying manifestations of energy citizenship have emerged (and continue to
      emerge) within the energy domain, influenced and shaped by the
      sociopolitical, economic, and cultural specificities found in particular
      cases. To advance the research surrounding energy citizenship with an aim
      to operationalize the concept, we identified the following set of key
      patterns and trends:
    </p>
    <center>

      
    
    <table id="table1">
      <tr class=" bg-slate-400 text-black">
          <th>Level</th>
          <th>Category</th>
          <th>Patterns &amp; Trends</th>
      </tr>
      <tr>
          <td class="level-column bg-slate-200" rowspan="5">Individual</td>
          <td><strong>Active participation in the energy market</strong></td>
          <td>
              <ul class="level3">
                  <li>Prosumerism</li>
              </ul>
          </td>
      </tr>
      <tr>
          <td rowspan="2"><strong>Actions towards energy efficiency</strong></td>
          <td class="level3">
              <ul>
                  <li>Lifestyle changes</li>
                  <li>Energy efficiency measures</li>
              </ul>
          </td>
      </tr>
      <tr>
          <!-- <td>
              <ul>
                  <li>Energy efficiency measures</li>
              </ul>
          </td> -->
      </tr>
      <tr>
          <td rowspan="2"><strong>Behavioral aspects</strong></td>
          <td class="level3">
              <ul>
                  <li>Citizens’ behavior</li>
                  <li>Preferences towards RES</li>
              </ul>
          </td>
      </tr>
      <tr>
          <!-- <td>
              <ul>
                  <li>Preferences towards RES</li>
              </ul>
          </td> -->
      </tr>
      <tr>
          <td class="level-column bg-slate-200" rowspan="4">Collective</td>
          <td rowspan="2"><strong>Collective expressions of energy citizenship</strong></td>
          <td class="level3">
              <ul>
                  <li>Formation of energy communities</li>
                  <li>Establishment of eco-villages</li>
              </ul>
          </td>
      </tr>
      <tr>
          <!-- <td>
              <ul>
                  <li>Establishment of eco-villages</li>
              </ul>
          </td> -->
      </tr>
      <tr>
          <td rowspan="2"><strong>Political activities</strong></td>
          <td class="level3">
              <ul>
                  <li>Participation in energy transition movements</li>
                  <li>Participatory processes in energy sector planning &amp; decision-making</li>
              </ul>
          </td>
      </tr>
      <tr>
          <!-- <td>
              <ul>
                  <li>Participatory processes in energy sector planning &amp; decision-making</li>
              </ul>
          </td> -->
      </tr>
  </table>


    </center>
    <h3>
      &ldquo;<strong
        >People-centered&rdquo; storylines based on social innovations of energy
        citizenship?</strong
      >
    </h3>
    <p>
      Aiming to bring (energy) citizens at the core of the modeling exercises, <em
        >&ldquo;people-centered&rdquo;</em
      >
      storylines were developed, acting as the driving narratives of the
      simulations. These are a set of qualitative descriptions of the different
      citizen-specific manifestations- either at the <strong>individual</strong>
      or <strong>collective</strong> level- of energy citizenship.
    </p>
    <p>
      Each <em>&ldquo;people-centered&rdquo; </em>storyline focuses on a
      specific manifestation of energy citizenship, helping to structure and
      streamline the modeling process. By centering on individual storylines,
      modelers can examine the decarbonization impacts on various scales, while
      also having the flexibility to combine multiple storylines to assess how
      different forms of citizen engagement interact within the energy system.
      For instance, a modeling exercise might explore how increased public
      involvement in climate issues (e.g., political activities) could lead to
      stronger government action and policy measures that support prosumerism
      (e.g., active participation in the energy market).
    </p>
    <p>
      Additionally, storylines make the design of modeling exercises more
      accessible and engaging for stakeholders, policymakers, and non-experts.
      Their qualitative nature not only facilitates the incorporation of
      stakeholder feedback but also helps to effectively communicate the complex
      assumptions underpinning the modeling exercises, as well as their
      limitations. Moreover, storylines promote interdisciplinary collaboration
      by fostering communication between climate researchers, modelers, and
      experts from a variety of fields such as economics, policy, sociology, and
      technology. This interdisciplinary approach allows diverse insights to be
      integrated into a unified and comprehensive framework.
    </p>
    <center>

      <table id="table2" cellspacing="0">
        <tbody>
          <tr>
            <td>
                <div class=" w-24 sm:w-32 lg:w-44"></div>
                <h4><strong>Individual expressions</strong></h4>
            </td>
          </tr>

          <tr>
            <td align="center" valign="bottom">
                <img src="{expressions1}" alt="" />
            </td>
            <td align="center" valign="top">
                <p>
                  This storyline builds upon the concept of an increasingly
                  decentralized energy system e.g., with higher rates of
                  prosumerism. Citizens are thought to increasingly become
                  individual owners, thus consuming their own electricity, and
                  playing a facilitating and supportive role in driving the energy
                  transition. Within this storyline, various co-benefits can be
                  explored such as the resulting percentage of the simulated
                  population&rsquo;s access to energy and self-sufficiency.
                </p>
            </td>
          </tr>


          <tr>
            <td align="center" valign="bottom">
                <img src="{expressions2}" alt=""  />
            </td>
            <td align="center" valign="top">
                <p>
                  A storyline centered around the daily habits of citizens, and
                how incremental changes in everyday life can have an impact on
                the decarbonization of the energy system. In this storyline,
                people are becoming increasingly aware of the way their norms
                and culture directly correlate with their energy behavior and
                influence the level of their energy consumption. They start to
                reconsider aspects of their daily life such as consumption
                patterns, diet, and means of transportation.
                </p>
            </td>
          </tr>

          
          <tr>
            <td>
              <h4><strong>Collective expressions</strong></h4>
            </td>
          </tr>

          <tr>
            <td align="center" valign="bottom">
                <img src="{expressions3}" alt=""  />
            </td>
            <td align="center" valign="top">
                <p>
                  A storyline focused on the concept of collective actions of
                citizens in the energy system. Citizens, united by common
                environmental concerns and a strong sense of community are
                coming together and forming either energy communities or other
                various collective energy initiatives (CEIs), such as energy
                collectives and co-operatives, with a view to optimizing the
                usage of local resources and minimizing energy waste by engaging
                in communal activities to collectively address climate issues.
                </p>
            </td>
          </tr>

          <tr>
            <td align="center" valign="bottom">
                <img src="{expressions4}" alt=""  />
            </td>
            <td align="center" valign="top">
                <p>
                  A storyline based on political activism surrounding energy and
                participation in social movements and civil society initiatives
                advancing democratic visions of energy transition. These
                processes enhance the active role of citizens by considering
                their perspectives and giving them the opportunity to voice
                their opinions on matters that ultimately affect their own
                lives, thus exploring co-benefits such as energy justice and
                energy democracy, which are inherently abstract.
                </p>
            </td>
          </tr>

        </tbody>
      </table>
    </center>
    <h3>
      <strong>What are the &ldquo;future-world</strong><em
        ><strong>&rdquo;</strong></em
      ><strong> narratives?</strong>
    </h3>
    <p>
      The <em>&ldquo;future-world&rdquo; </em>narratives are a set of
      qualitative descriptions of potential future evolutions of the
      environments surrounding the different manifestations of energy
      citizenship, e.g., society, geopolitical developments, regulatory
      environment. Different future developments can result in fundamentally
      different states of human society, when considering the capability to
      mitigate and/ or adapt to climate change. The
      <em>&ldquo;future-world&rdquo; </em>narratives are utilized to provide a
      range of contexts to explore such effects, both positive and negative, and
      to assess the overall implications of climate change.
    </p>
    <p>
      These narratives may consider a broad spectrum of variables that influence
      decarbonization efforts at the local, national, or European levels. By
      capturing a range of possible futures, they help stakeholders envision how
      different factors may interact to shape energy systems and inform the
      development of strategies for sustainability. These factors can span
      various fields, each playing a significant role in determining the success
      of decarbonization efforts and correlated to specific parameters that can
      be modeled within energy system models:
    </p>
    <ul>
      <li>
        <p>
          <strong>Demographic Shifts</strong>: Population growth rates,
          migration trends, urbanization rates, age distribution, etc.
        </p>
      </li>
      <li>
        <p>
          <strong>Human Development</strong> &amp; <strong>Social Equity</strong
          >: Energy access, income inequality, education levels, etc.
        </p>
      </li>
      <li>
        <p>
          <strong>Economic Evolution</strong> &amp; <strong>Lifestyle Changes</strong
          >: GDP growth, income distribution, digital economy adoption, mobility
          patterns, etc.
        </p>
      </li>
      <li>
        <p>
          <strong>Policies, Governance</strong> &amp; <strong>Institutions</strong
          >: Carbon pricing schemes, international climate agreements, renewable
          energy mandates, etc.
        </p>
      </li>
      <li>
        <p>
          <strong>Technological Innovation</strong> &amp; <strong>Adoption</strong
          >: Adoption rates and advances in renewables, smart grid penetration,
          storage capacity, etc.
        </p>
      </li>
      <li>
        <p>
          <strong>Environmental</strong> &amp; <strong>Natural Resources</strong
          >: Resource availability, climate change impacts, biodiversity
          preservation, land use, etc.
        </p>
      </li>
      <li>
        <p>
          <strong>Global Geopolitics</strong> &amp; <strong>Energy Security</strong
          >: Energy resource distribution, trade alliances, geopolitical
          tensions, energy supply chains, etc.
        </p>
      </li>
      <li>
        <p>
          <strong>Behavioral Change</strong> &amp; <strong>Public Engagement</strong
          >: Public perception of climate change, technology adoption, societal
          shifts in energy behavior, etc.
        </p>
      </li>
      <li>
        <p>
          <strong>Infrastructure</strong> &amp; <strong>Urbanization</strong>:
          Grid modernization, electrification of transport, smart city
          development, urban planning, etc.
        </p>
      </li>
      <li>
        <p>
          <strong>Global</strong> &amp; <strong>Local Energy Markets</strong>:
          Energy pricing, deregulation policies, decentralized energy trading,
          market liberalization, etc.
        </p>
      </li>
    </ul>
    <p>
      The selection of fields and respective parameters can vary depending on
      the modeling scope, specific objectives and the modeling framework used.
      Their value range may also vary significantly based on the <em
        >&ldquo;future-world&rdquo;</em
      > narrative analyzed, ranging from best-case to worst-case, as well as business-as-usual
      scenarios, thus allowing for a more comprehensive exploration of possible futures.
    </p>
    
    <center>

      <table id="table2" cellspacing="0">
        <tbody>

          <tr>
            <td>
                <div class=" w-24 sm:w-32 lg:w-44"></div>
                
            </td>
          </tr>

          <tr>
            <td align="center" valign="bottom">
                <img src="{world1}" alt="" class=" w-60" />
            </td>
            <td align="center" valign="top">
                <h4><strong>Familiar World</strong></h4>
                <p>
                  A <strong>baseline</strong> narrative (<em>business-as-usual</em
                    >), in which the world evolves maintaining familiar trends with
                    <strong>minimal to no change</strong>
                    in the current <strong>status quo</strong>. The world is moving
                    in a direction where social, economic, and technological trends
                    do not differ substantially from historical patterns.
                    Institutions and organizations exhibit slow progress towards
                    sustainable development goals, resulting in persistent income
                    disparities among nations. Environmental systems see modest
                    advancements but are characterized by an overall state of
                    degradation. The scenario portrays a world where incremental
                    changes coexist with persistent challenges, which raise
                    questions about the sustainability of gradual progress in the
                    face of pressing global issues. &ldquo;<em>Familiar World</em
                    >&rdquo; is mainly utilized to establish a reference point to
                    assess not only the decarbonization potential, but also other
                    co-benefits of energy citizenship.
                </p>
            </td>
          </tr>

          <tr>
            <td align="center" valign="bottom">
                <img src="{world2}" alt="" class=" w-60 " />
            </td>
            <td align="center" valign="top">
                <h4><strong>Unified World</strong></h4>
                <p>
                  In this narrative, the world undergoes a shift towards <strong
                  >unity</strong
                >
                and <strong>inclusiveness</strong>. Institutions and
                organizations prioritize citizens as the driving force behind
                the energy transition. This evolution unfolds with a remarkable
                emphasis on human well-being, transcending the traditional focus
                on economic growth. Consumption patterns align with
                sustainability goals, promoting low material growth and
                minimizing resource and energy intensity. This narrative
                portrays a society in which governments and nations around the
                EU, but also at the global level,
                <strong>unite against climate change</strong>, considering it as
                the biggest crisis of our age. Policymaking processes promote
                acceleration of decarbonization through transnational
                collaboration and investments in green solutions as soon as
                possible. <em>&ldquo;Unified World&rdquo;</em> envisions a
                harmonious balance between societal progress and environmental
                preservation, promoting a future where the interconnectedness of
                nations becomes a driving force for
                <strong>positive change</strong>.
                </p>
            </td>
          </tr>

          <tr>
            <td align="center" valign="bottom">
                <img src="{world3}" alt="" class=" w-60" />
            </td>
            <td align="center" valign="top">
                <h4><strong>Fragmented World</strong></h4>
                <p>
                  A potential future evolution of undesired societies, which
                increasingly resemble a &ldquo;<strong>dystopia</strong>&rdquo;
                in the sense of extreme, or even exaggerated worst-case
                scenarios, e.g., rise of totalitarian regimes, social
                inequalities intensify, increased control over citizens through
                the usage of propaganda, censoring of information or denial of
                free thought, gradual loss of individuality, enforcement of
                conformity, heightened individualism and anti-collectivism, etc.
                Global dynamics take an unfavorable turn as nations prioritize
                domestic concerns and regional interests over global
                collaboration. Policies increasingly focus on national and
                regional security, diverting attention and resources from
                broader sustainable development goals. Educational and
                technological investments decline, hindering progress.
                <em>&ldquo;Fragmented World&rdquo;</em>
                pictures slower development and limited environmental concern,
                creating obstacles for sustainability. Regional conflicts,
                rivalry and competitiveness overshadow global unity against
                climate-related challenges, creating a narrative of
                <strong>missed opportunities</strong>
                and <strong>delayed progress</strong>.
                </p>
            </td>
          </tr>


        </tbody>
      </table>
    
    </center>
    
    
    <h2>The ENCLUDE scenario space</h2>
    <p>
      A broad and balanced scenario space is needed in order to implement
      scenario-based research effectively. By crafting diverse sets of
      storylines and narratives that encompass varying degrees of <strong
        >climate</strong
      >- and <strong>energy</strong>-related actions,
      <strong>technological</strong>
      advancements, <strong>societal</strong> shifts, and
      <strong>behavior</strong> adoption rates, a better coverage of future possibilities
      is attained. This offers a nuanced perspective on what the future may hold
      and supports not only preparing for potential challenges, but also illuminating
      pathways toward sustainable and resilient solutions.
    </p>
    <p>
      On the contrary, creating a limited and ill-defined scenario space may
      lead to <strong>failing to anticipate</strong> certain developments, or
      <strong>underestimating</strong>
      the complexities of societal transitions which in turn can result in the
      implementation of <strong>insufficient</strong> or
      <strong>misguided policies</strong>
      and <strong>biased decision-making</strong>. For instance, an overly
      optimistic scenario that neglects the challenges of transitioning to a
      renewable energy-based system and assumes rapid global cooperation without
      accounting for geopolitical challenges could result in delayed or
      ineffective policy responses. By anchoring decisions solely on best-case
      scenarios, a misleading perception of security and a failure to adequately
      prepare for contingencies can be created. Similarly, an excessively
      conservative scenario space- one that underestimates the pace of
      technological advancements, policy changes, or societal shifts- can stifle
      innovation and hinder progress.
    </p>
    <p>
      If policymakers are on the side of caution, overly conservative scenario
      space may perpetuate reliance on outdated technologies and impede the
      transition to more sustainable practices. For example, envisioning a
      future where the status quo prevails without accounting for breakthroughs
      in renewable energy or shifts in citizens&rsquo; behavior might discourage
      investments in cutting-edge technologies and sustainable energy sources.
      This can lead to missed opportunities for transformative change and result
      in inadequate preparations for a rapidly evolving climate landscape.
    </p>
    <p>
      All things considered, in both cases, the potential ripple effects of
      oversights and misjudges extend to economic repercussions, social
      disruptions, and exacerbation of climate-related vulnerabilities. It is
      imperative, thus, to design a scenario space which encompasses a broad
      spectrum of possible futures, acknowledging uncertainties and embracing
      the depth of complexity of the European landscape, at the local, the
      national, and the transnational level.
    </p>
    <p>
      Considering these insights, we present the final <strong
        >ENCLUDE scenario space</strong
      >, which, applied to specific case studies, can support the development of
      real-life decarbonization pathways based on social innovations of energy
      citizenship.
    </p>


    <img src="{scenario_space}" alt="" class=" w-full" />


    <h2>The ENCLUDE modeling ensemble</h2>
    <p>
      Given the broadness of the <em
        >&ldquo;people-centered&rdquo;
      </em>storylines, a diversity of modeling tools is required to capture the
      impact of the different manifestations of energy citizenship under study.
      For example, active participation in the energy market, or political
      activism would need different modeling tools. In addition, expressions of
      energy citizenship can be traced at a multitude of scales, e.g., at the
      individual, community, national or international level. As a result, a
      model that deals with the required resolution would be needed.
      Furthermore, certain aspects of energy citizenship would call for the
      employment of more than one model. In such cases, we developed several
      interface protocols to facilitate the soft linkage of the models, where
      necessary, and upscale results at the local level to the national level,
      were designed, concerning data transfer and model communication and
      interoperability.
    </p>
    <p>
      The models comprising the ENCLUDE modeling ensemble and used in the
      different project&rsquo;s applications span a range of architectural
      approaches and modeling scopes:
    </p>
    <center>

      <table class="border-3 border-black w-full">
        <thead>
          <tr class=" align-middle text-center">
            <th class="p-1 border-b-2 border-t-2 border-primary ">Modeling framework</th>
            <th class="p-1 border-b-2 border-t-2 border-primary ">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white">
            <td class="p-4 border-b border-gray-300">
              <p>grassroot <strong>Innovation</strong> Diffusion <strong>Model</strong> (<strong>ANIMO</strong>)</p>
            </td>
            <td class="p-4 border-b border-gray-300">
              <p>
                <strong>ANIMO</strong> is an agent-based model capable of simulating the diffusion of social innovations, such as the creation of, and participation in, energy community projects, and investigating how envisioned social improvements are embraced by, and distributed throughout, households and individuals with various socio-economic, behavioral, and lifestyle profiles.
              </p>
            </td>
          </tr>
          <tr class="bg-gray-100">
            <td class="p-4 border-b border-gray-300">
              <p><strong>Agent-based</strong> Technology <strong>Adoption</strong> <strong>Model</strong> (<strong>ATOM</strong>)</p>
            </td>
            <td class="p-4 border-b border-gray-300">
              <p>
                <strong>ATOM</strong> is an agent-based model, which based on the plausibility of its results compared to historical data and observations, simulates the expected effectiveness of various policy schemes on technology adoption (e.g., small-scale solar PV, battery energy storage systems, heat pumps, EVs, etc.) in the residential sector. Apart from exploring the expected effectiveness of technology adoption under policy schemes, the model allows for explicit quantification of uncertainties related to agents’ preferences and decision-making criteria (behavioral uncertainty).
              </p>
            </td>
          </tr>
          <tr class="bg-white">
            <td class="p-4 border-b border-gray-300">
              <p><strong>Dynamic</strong> high-<strong>Resolution</strong> demand-side <strong>Management</strong> (<strong>DREEM</strong>)</p>
            </td>
            <td class="p-4 border-b border-gray-300">
              <p>
                <strong>DREEM</strong> is a fully-integrated energy demand and demand-side management simulation model, focusing on the building sector. It assesses both energy demand and the benefits and limitations of demand flexibility, primarily for end-users and, subsequently, for other energy system actors involved, such as suppliers and retailers.
              </p>
            </td>
          </tr>
          <tr class="bg-gray-100">
            <td class="p-4 border-b border-gray-300">
              <p><strong>Integrated</strong> <strong>Model</strong> to <strong>Assess</strong> the <strong>Global</strong> <strong>Environment</strong> (<strong>IMAGE</strong>)</p>
            </td>
            <td class="p-4 border-b border-gray-300">
              <p>
                <strong>IMAGE</strong> is an IAM suited to large-scale, long-term assessments of interactions between human development and the natural environment. It integrates sectors, ecosystems, and indicators, identifying socio-economic pathways and projecting implications for energy, land, water, and other resources, based on availability and quality.
              </p>
            </td>
          </tr>
          <tr class="bg-white">
            <td class="p-4 border-b border-gray-300">
              <p><strong>Open-Source</strong> energy <strong>Modeling</strong> <strong>System</strong> for <strong>Greece</strong> (<strong>OSeMOSYS-GR</strong>)</p>
            </td>
            <td class="p-4 border-b border-gray-300">
              <p>
                <strong>OSeMOSYS</strong> is an energy system optimization and capacity expansion model generator that determines the most economically efficient pathway by minimizing system costs and optimizing technology capacity and electricity generation. <strong>OSeMOSYS-GR</strong> is a Greek-specific adaptation of OSeMOSYS developed to model the Greek power system for 2021-2050.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      


    </center>
  </article>
</div>




<style>
  #table1 {
      border-collapse: collapse;
      width: 100%;
  }
  #table1, #table1 th, #table1 td {
      border: 1px solid black;
  }
  #table1 th, td {
      padding: 10px;
      text-align: center;
      font-weight: normal;
  }
  .level3 {
      text-align: left;
  }
  #table1 td strong {
      font-weight: bold;
  }
  .level-column {
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      text-align: center;
      font-weight: bold;
  }

  #table2 td{
    vertical-align:  bottom!important;;
  }

  #table3 th{
    border-color: green;
    border-top: 2px;
  }

  #table3 strong{
    color:green;
  }

</style>
