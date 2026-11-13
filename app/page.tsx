import { IceCream } from "lucide-react"
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="font-sans leading-relaxed dark:text-white text-gray-900">
      {/* Navbar */}
      <div className="relative flex flex-row sticky top-0 w-full h-[64px] gap-2 px-4 md:px-6 z-[100] items-center bg-black/[25%] backdrop-blur-lg border border-solid border-x-0 border-t-0 border-b-[1px] shadow-sm border-border justify-between">
        <div className="flex flex-row gap-2 items-center">
          <div className="rounded-full p-[6px] bg-highlight/[20%]"><IceCream className="-rotate-45"/></div>
          <span>Cornetto</span>
        </div>

        <div className="w-fit flex flex-row items-center gap-4 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
          <Link href="#overview" className="hover:text-highlight/[80%] transition-basic">Project Overview</Link>
          <Link href="#data" className="hover:text-highlight/[80%] transition-basic">Dataset</Link>
          <Link href="#eda" className="hover:text-highlight/[80%] transition-basic">EDA</Link>
          <Link href="#hypotest" className="hover:text-highlight/[80%] transition-basic">Hypotheses Testing</Link>
          <Link href="#discussion" className="hover:text-highlight/[80%] transition-basic">Results & Discussion</Link>
        </div>
        <span className="text-xs">Bugaoan, Buizon, Calinawan, Magpantay</span>
      </div>

      {/* Hero Section */}
      <div className="relative h-[100vh] w-full flex flex-col md:items-center gap-2 justify-center pb-32 px-4 md:px-6">
        {/* Grid */}
        <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #9cafb7 1px, transparent 1px), linear-gradient(to bottom, #9cafb7 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

        <span className="rounded-full w-fit px-4 py-1 text-sm bg-highlight/[5%] border border-solid border-border">SDG 8: Decent Work and Economic Growth</span>
        <span className="text-4xl md:text-7xl font-black font-mono md:text-center">&quot;Hanggang saan aabot ang <span className="text-highlight">20 pesos</span> mo?&quot;</span>
        <span className="mt-4 text-xl md:text-2xl tracking-wide">Regional CPI Analysis from 2018 to 1st Quarter 2026</span>
        
      </div>

      {/* Project Overview Section */}
      <section className="relative mb-12 px-4 md:px-6 py-4">
        <div className="absolute -top-[72px]" id="overview"/>
        <h2 className="text-2xl font-semibold mb-4 border-b-1 border-border pb-2">
          Project Overview
        </h2>

        <h3 className="text-xl font-medium mt-6 mb-2">Background</h3>
        <p className="mb-4 dark:text-gray-300 ">
          The Consumer Price Index (CPI) serves as a relative measure of the cost of a standard basket of goods and services consumed by households. Calculated as a weighted average of these prices, the CPI establishes a baseline value of 100 for its starting year (2018). Tracking movements in regional CPI allows for a quantitative assessment of inflation, regional purchasing power disparities, and shifting costs of living across the Philippines.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">Research Questions & Problems</h3>
        <ul className="list-disc pl-6 mb-4 dark:text-gray-300  space-y-2">
          <li>Which Philippine regions have the highest and lowest rates of change in CPI?</li>
          <li>Which specific commodities have significantly differing CPI rates of change across Philippine regions?</li>
          <li>Are there recurring seasonal patterns of prices of particular commodity groups?</li>
          <li>Which time periods have the lowest and highest rates of change in CPI?</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">Research Objectives & Proposed Solutions</h3>
        <p className="mb-3 dark:text-gray-300 ">
          To address these questions, this study will analyze historical monthly CPI data extracted from national statistical repositories using statistical analysis and exploratory data modeling. The core objectives are:
        </p>
        <ul className="list-disc pl-6 mb-4 dark:text-gray-300  space-y-2">
          <li>Determine if geographic location is a significant factor for inflation rates, identifying which regions experience the fastest and slowest inflation rates from 2018 to 1st Quarter 2026.</li>
          <li>Identify which specific commodity groups serve as primary drivers of CPI per region.</li>
          <li>Determine if there are recurring seasonal patterns in the prices of certain commodity groups across regions.</li>
          <li>Pinpoint the specific time periods corresponding to the fastest and slowest changes in national and regional CPI.</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">Hypotheses</h3>
        <div className="space-y-4 text-gray-600">
          <div className="bg-gray-50 p-3 rounded border border-gray-200">
            <p><strong>Hypothesis 1 (Regional Variation):</strong></p>
            <p><strong>H₀:</strong> There is no difference between the CPI rates of change across different Philippine regions.</p>
            <p><strong>H₁:</strong> There are significant differences in the CPI rates of change across different Philippine regions.</p>
          </div>

          <div className="bg-gray-50 p-3 rounded border border-gray-200">
            <p><strong>Hypothesis 2 (Temporal Variation):</strong></p>
            <p><strong>H₀:</strong> There are no time periods of significantly different rates of change for CPI.</p>
            <p><strong>H₁:</strong> There are time periods of significantly different rates of change for CPI.</p>
          </div>

          <div className="bg-gray-50 p-3 rounded border border-gray-200">
            <p><strong>Hypothesis 3 (Commodity Differences):</strong></p>
            <p><strong>H₀:</strong> There is no difference in commodity group CPI rates of change across Philippine Regions.</p>
            <p><strong>H₁:</strong> There are significant differences in commodity group CPI rates of change across Philippine Regions.</p>
          </div>

          <div className="bg-gray-50 p-3 rounded border border-gray-200">
            <p><strong>Hypothesis 4 (Seasonality):</strong></p>
            <p><strong>H₀:</strong> There are no recurring seasonal patterns in commodity group CPI prices across Philippine Regions.</p>
            <p><strong>H₁:</strong> There are recurring seasonal patterns in commodity group CPI prices across Philippine Regions.</p>
          </div>
        </div>
      </section>

      {/* Data Section */}
      <section className="relative mb-12 px-4 md:px-6 py-4">
        <div className="absolute -top-[72px]" id="data"/>
        <h2 className="text-2xl font-semibold mb-4 border-b-1 border-border pb-2">
          Data Collection Process
        </h2>

        {/* USE LATER
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-6">
          <p className="text-sm text-gray-600 mb-2">
            <em>Optional external documentation link:</em>
          </p>
          <a
            href="TEST MUNA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            📄 View Full Data Collection Google Doc
          </a>
        </div>
        */}

        <h3 className="text-xl font-medium mt-4 mb-2">Dataset Description & Scope</h3>
        <ul className="list-disc pl-6 mb-4 dark:text-gray-300  space-y-1">
          <li><strong>Source:</strong> OpenStat — Philippine Statistics Authority (PSA)</li>
          <li><strong>Temporal Scope:</strong> January 2018 to 1st Quarter 2026</li>
          <li><strong>Baseline Year:</strong> 2018 = 100</li>
          <li><strong>Collection Method:</strong> Public database extraction</li>
        </ul>

        <h3 className="text-xl font-medium mt-4 mb-2">PSA Collection Methodology & Sampling</h3>
        <ul className="list-disc pl-6 mb-4 dark:text-gray-300  space-y-2">
          <li>
            <strong>Market Basket Selection:</strong> The PSA tracks a specific "market basket" of goods and services that are regularly consumed by average households and consistently available in the target area.
          </li>
          <li>
            <strong>Price Collectors:</strong> Philippine Statistics Authority (PSA) field personnel gather prices directly from sample retail outlets using an Android-based Computer-Assisted Personal Interviewing (CAPI) app.
          </li>
          <li>
            <strong>Collection Timing (NCR):</strong> To maintain a reasonable degree of consistency, data gathering targets the time of day when most household marketing is done, usually before 10:00 AM.
          </li>
          <li>
            <strong>Collection Timing (Provincial Areas):</strong> Data is collected twice a month (1st–5th and 15th–17th days). The first phase gathers six price quotes, while the second gathers two.
          </li>
          <li>
            <strong>Validation and Processing:</strong> The collected data undergoes multiple validation stages involving provincial, regional, and central PSA offices.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-4 mb-2">Preprocessing & Data Structure</h3>
        <p className="mb-4 dark:text-gray-300 ">
          The extracted dataset contains multi-index time-series rows organized by geographic location (National, NCR, and Areas Outside NCR / individual administrative regions) and commodity breakdown (All-Items, Food and Non-Alcoholic Beverages, Cereals, etc.) across monthly intervals. To preprocess the data, the dataset was transformed from a wide dataset to a long dataset by creating a new column for Date and having each individual CPI value mapped to the unique 3-tuple (Geolocation, Commodity Description, Date). A derived feature (Inflation_Velocity_Pct) was calculated as the CPI percent change using the pct_change pandas function.
        </p>

        <p className="mb-4 dark:text-gray-300 ">
          The full dataset extracted from PSA OpenStat is structured in the linked <a target="_blank" className="hover:underline text-blue-600" href="https://docs.google.com/spreadsheets/d/1y2uXdRVz_6OgY_Tpw0D_Xo4CNo-W4QW6uuOzUe6kRF8/edit?usp=sharing">Google Sheet</a>.
        </p>

        <iframe className="w-full h-[50vh]" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRqfwWoGccUkJqrafQJR9hxblTia0VoJ-_6lzZ5nAGk4ejiMHgnFy7Pqnc9wpBLuAJGHyrCw1Xh8leN/pubhtml?widget=true&amp;headers=false"></iframe>
      
      </section>


      {/* EDA Section */}
      <section className="relative mb-12 px-4 md:px-6 py-4">
        <div className="absolute -top-[72px]" id="eda"/>
        <h2 className="text-2xl font-semibold mb-4 border-b-1 border-border pb-2">
          Exploratory Data Analysis
        </h2>

        <p>In this section, data visualizations were created for each research question using the preprocessed dataset. These visualizations helped in our explanation of our results in the Hypotheses Testing section.</p>
        
        {/* Research Question 1 */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 ">
            RQ1: Which Philippine regions have the highest and lowest rates of change in CPI?
          </h3>
          <div className="flex flex-row w-full gap-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
            <h4 className="text-lg font-medium mb-2 text-center ">
              Monthly Inflation Velocity (CPI % Change) - Selected Individual Regions (2018-2026)
            </h4>
            <img 
              src="/rq1-line-chart.jpg" 
              alt="Line chart showing monthly inflation velocity across regions" 
              className="w-full h-auto rounded"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">
              Figure 1: Time-series analysis of month-over-month CPI percentage changes across administrative regions.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-medium mb-2 text-center ">
              Top 5 Highest and Lowest Regions by Average MoM Inflation Velocity
            </h4>
            <img 
              src="/rq1-bar-chart.jpg" 
              alt="Bar chart showing top 5 highest and lowest regions by average MoM inflation velocity" 
              className="w-full h-auto rounded"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">
              Figure 2: A horizontal bar chart highlighting the geographic areas with the most and least volatile average inflation velocities.
            </p>
          </div>
          </div>
        </div>

        {/* Research Question 2 */}
        <div className="mb-10 mt-10">
          <h3 className="text-xl font-medium mb-4 ">
            RQ2: Which specific commodities have significantly differing CPI rates of change across Philippine regions?
          </h3>
            <div className="max-w-[800px]">
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-medium mb-2 text-center ">
              Regional Inflation Drivers: Average MoM Velocity by Major Commodity Group
            </h4>
            <img 
              src="/rq2-heatmap-drivers.jpg" 
              alt="Heatmap displaying regional inflation drivers by average MoM velocity across commodity groups" 
              className="w-full h-auto rounded"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">
              Figure 3: Heatmap illustrating which commodity groups (e.g., Food, Transport) act as the primary drivers of month-over-month inflation within specific regions.
            </p>
          </div>
        </div>
            </div>

        {/* Research Question 3 */}
        <div className="mb-10 mt-10">
          <h3 className="text-xl font-medium mb-4 ">
            RQ3: Are there recurring seasonal patterns of prices of particular commodity groups?
          </h3>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-medium mb-2 text-center ">
                Seasonality Heatmap: Average Monthly Inflation Velocity by Commodity Group
              </h4>
              <img 
                src="/rq3-heatmap-seasonality.jpg" 
                alt="Heatmap displaying average monthly inflation velocity by commodity group across the calendar year" 
                className="w-full h-auto rounded"
              />
              <p className="text-sm text-gray-500 mt-3 text-center">
                Figure 4: Average MoM % change organized by calendar month to identify recurring seasonal price spikes across different commodity groups.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-medium mb-2 text-center ">
                Outlier-Resistant Seasonality Heatmap (Ordered by Seasonality Strength)
              </h4>
              <img 
                src="/rq3-heatmap-seasonality-outlier.jpg" 
                alt="Outlier-resistant seasonality heatmap ordered by seasonality strength" 
                className="w-full h-auto rounded"
              />
              <p className="text-sm text-gray-500 mt-3 text-center">
                Figure 5: A median-based seasonality heatmap that mitigates the effect of extreme outliers, sorted vertically from most seasonal to least seasonal commodity groups.
              </p>
            </div>
          </div>
        </div>

        {/* Research Question 4 */}
        <div className="mb-10 mt-10">
          <h3 className="text-xl font-medium mb-4 ">
            RQ4: Which time periods have the lowest and highest rates of change in CPI?
          </h3>
          
          <div className="grid grid-cols-1 gap-6">
            

            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-medium mb-2 text-center ">
                Inflation Velocity Extremes (Lowest and Highest 5 MoM Changes)
              </h4>
              <img 
                src="/rq4-extremes-bar-chart.jpg" 
                alt="Bar charts showing the top 5 highest and lowest time periods for inflation velocity" 
                className="w-full h-auto rounded"
              />
              <p className="text-sm text-gray-500 mt-3 text-center">
                Figure 7: Dual bar charts isolating the specific time periods (months/years) that recorded the highest and lowest inflation spikes, split between the national aggregate and global dataset extremes.
              </p>
            </div>
          </div>
        </div>

        {/* Nutshell Plot */}
        <div className="mb-12">
          <h3 className="text-xl font-medium mb-4 ">
            Nutshell Plot: Overall Distribution of Inflation Velocity
          </h3>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-medium mb-2 text-center ">
              Normality Test & Distribution overview
            </h4>
            <img 
              src="/nutshell.png" 
              alt="Histogram and Q-Q plot showing the non-normal distribution of inflation velocity" 
              className="w-full h-auto rounded"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">
              Figure 1 (Nutshell Plot): CPI % Change over time across multiple regions with annotated peak rates.
            </p>
          </div>
        </div>

      </section>


        {/* Hypotheses Testing Section */}
      <section className="relative mb-12 px-4 md:px-6 py-4">
        <div className="absolute -top-[72px]" id="hypotest"/>
        <h2 className="text-2xl font-semibold mb-4 border-b-1 border-border pb-2">
          Hypotheses Testing
        </h2>
        <p className="mb-6 ">
          Due to the non-normal distribution of our inflation velocity data, we utilized the Kruskal-Wallis H-test (a non-parametric equivalent to ANOVA) across all hypotheses to determine statistical significance at an alpha level of 0.05.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Hypothesis 1 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold  mb-3">Hypothesis 1: Regional Variation</h3>
            <div className="text-sm  space-y-2 mb-4">
              <p><strong>H₀:</strong> There is no difference between the CPI rates of change across different Philippine regions.</p>
              <p><strong>H₁:</strong> There are significant differences in the CPI rates of change across different Philippine regions.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 flex-grow">
              <p>Test: Kruskal-Wallis H-test</p>
              <p>H-Statistic: 3.8930</p>
              <p>P-Value: 0.99991380</p>
            </div>
            <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 font-medium text-sm">
              Verdict: Fail to reject H₀. No significant difference across regions.
            </div>
          </div>

          {/* Hypothesis 2 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold  mb-3">Hypothesis 2: Temporal Variation</h3>
            <div className="text-sm  space-y-2 mb-4">
              <p><strong>H₀:</strong> There are no time periods of significantly different rates of change for CPI.</p>
              <p><strong>H₁:</strong> There are time periods of significantly different rates of change for CPI.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 flex-grow">
              <p>Test: Kruskal-Wallis H-test (Grouped by Year)</p>
              <p>H-Statistic: 194.1263</p>
              <p>P-Value: 1.102e-37</p>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700 font-medium text-sm">
              Verdict: Reject H₀. There are time periods with significantly different rates of change.
            </div>
            {/* Dunn's Test Results for H2 */}
            <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded text-sm text-purple-900">
              <p className="font-bold mb-2">Post-Hoc Analysis (Dunn's Test w/ Holm-Bonferroni correction):</p>
              <p className="text-xs mb-1">Significant temporal differences (adj. p &lt; 0.05) include:</p>
              <ul className="list-disc pl-5 text-xs space-y-1">
                <li><strong>2022</strong> vs. All other years (2018-2021, 2023-2026) (adj. p &le; 0.0001)</li>
                <li><strong>2018</strong> vs. 2019, 2020, 2021, 2023, 2024, 2025 (adj. p &lt; 0.02)</li>
                <li><strong>2026</strong> vs. 2019, 2020, 2024, 2025 (adj. p &lt; 0.02)</li>
              </ul>
            </div>
          </div>

          {/* Hypothesis 3 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold  mb-3">Hypothesis 3: Commodity Differences</h3>
            <div className="text-sm  space-y-2 mb-4">
              <p><strong>H₀:</strong> There is no difference in commodity group CPI rates of change across Philippine Regions.</p>
              <p><strong>H₁:</strong> There are significant differences in commodity group CPI rates of change across Philippine Regions.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 flex-grow">
              <p>Test: Kruskal-Wallis H-test (Top 10 Volatile Commodities)</p>
              <p className="mt-1">Significant Variations Found In:</p>
              <ul className="list-disc pl-5 mt-1 text-xs">
                <li>Restaurants & Accommodation (p = 1.13e-17)</li>
                <li>Recreation, Sport & Culture (p = 1.65e-16)</li>
                <li>Alcoholic Beverages & Tobacco (p = 4.42e-08)</li>
                <li>Health (p = 6.53e-08)</li>
                <li>Furnishings & Routine Maintenance (p = 3.65e-07)</li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700 font-medium text-sm">
              Verdict: Reject H₀. There are significant differences in commodity group CPI rates of change across Philippine Regions.
            </div>
            {/* Dunn's Test Results for H3 */}
            <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded text-sm text-purple-900">
              <p className="font-bold mb-2">Post-Hoc Analysis (Dunn's Test w/ Holm-Bonferroni correction):</p>
              <p className="text-xs mb-1">Pairwise regional differences by commodity group:</p>
              <ul className="list-disc pl-5 text-xs space-y-1">
                <li><strong>01 - Food and Non-Alcoholic Beverages:</strong> 0 statistically significant pairwise regional differences found.</li>
                <li><strong>02 - Alcoholic Beverages and Tobacco:</strong> Found 8 statistically significant pairwise regional differences.</li>
                <li><strong>03 - Clothing and Footwear:</strong> Found 34 statistically significant pairwise regional differences.</li>
                <li><strong>04 - Housing, Water, Electricity, Gas, and Other Fuels:</strong> 0 statistically significant pairwise regional differences found.</li>
                <li><strong>05 - Furnishings, Household Equipment and Routine Household Maintenance:</strong> Found 9 statistically significant pairwise regional differences.</li>
                <li><strong>06 - Health:</strong> Found 13 statistically significant pairwise regional differences.</li>
                <li><strong>07 - Transport:</strong> 0 statistically significant pairwise regional differences found.</li>
                <li><strong>08 - Information and Communication:</strong> 0 statistically significant pairwise regional differences found.</li>
                <li><strong>09 - Recreation, Sport and Culture:</strong> Found 29 statistically significant pairwise regional differences.</li>
                <li><strong>10 - Education Services:</strong> 0 statistically significant pairwise regional differences found.</li>
                <li><strong>11 - Restaurants and Accommodation Services:</strong> Found 32 statistically significant pairwise regional differences.</li>
                <li><strong>12 - Financial Services:</strong> 0 statistically significant pairwise regional differences found.</li>
                <li><strong>13 - Personal Care, and Miscellaneous Goods and Services:</strong> Found 14 statistically significant pairwise regional differences.</li>
              </ul>
            </div>
          </div>

          {/* Hypothesis 4 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col">
            <h3 className="text-lg font-bold  mb-3">Hypothesis 4: Seasonality</h3>
            <div className="text-sm  space-y-2 mb-4">
              <p><strong>H₀:</strong> There are no recurring seasonal patterns in commodity group CPI prices across Philippine Regions.</p>
              <p><strong>H₁:</strong> There are recurring seasonal patterns in commodity group CPI prices across Philippine Regions.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800 flex-grow">
              <p>Test: Kruskal-Wallis per Commodity Group</p>
              <p>Correction: Benjamini-Hochberg (FDR)</p>
              <p className="mt-1">Seasonally Significant Commodities:</p>
              <ul className="list-disc pl-5 mt-1 text-xs">
                <li>Food & Non-Alcoholic Beverages (adj. p = 0.0014)</li>
                <li>Education Services (adj. p = 0.0014)</li>
                <li>Recreation, Sport & Culture (adj. p = 0.0154)</li>
                <li>Health (adj. p = 0.0207)</li>
              </ul>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700 font-medium text-sm">
              Verdict: Partial Reject H₀. Significant recurring seasonal patterns exist, but only within specific commodity groups.
            </div>
            {/* Dunn's Test Results for H4 */}
            <div className="mt-4 p-3 bg-purple-50 border border-purple-200 rounded text-sm text-purple-900 max-h-64 overflow-y-auto">
              <p className="font-bold mb-2">Post-Hoc Analysis (Dunn's Test w/ Holm-Bonferroni correction):</p>
              <p className="text-xs mb-2">Significant monthly pairwise differences for seasonal commodities:</p>
              <ul className="list-disc pl-5 text-xs space-y-3">
                <li>
                  <strong>01 - Food & Non-Alcoholic Beverages:</strong> 4 significant monthly seasonal transitions found.
                  <ul className="list-[circle] pl-5 mt-1 space-y-1 text-purple-800">
                    <li>January vs. February (adj. p = 0.0021)</li>
                    <li>January vs. March (adj. p = 0.0027)</li>
                    <li>February vs. December (adj. p = 0.0348)</li>
                    <li>March vs. December (adj. p = 0.0429)</li>
                  </ul>
                </li>
                <li>
                  <strong>06 - Health:</strong> 2 significant monthly seasonal transitions found.
                  <ul className="list-[circle] pl-5 mt-1 space-y-1 text-purple-800">
                    <li>January vs. October (adj. p = 0.0208)</li>
                    <li>July vs. October (adj. p = 0.0047)</li>
                  </ul>
                </li>
                <li>
                  <strong>09 - Recreation, Sport and Culture:</strong> 1 significant monthly seasonal transition found.
                  <ul className="list-[circle] pl-5 mt-1 space-y-1 text-purple-800">
                    <li>February vs. March (adj. p = 0.0070)</li>
                  </ul>
                </li>
                <li>
                  <strong>10 - Education Services:</strong> 0 statistically significant monthly seasonal transitions found post-hoc (all adj. p &gt; 0.05).
                </li>
              </ul>
            </div>
          </div>
         </div> 
      </section>

      {/* Discussion Section */}
      <section className="relative mb-12 px-4 md:px-6 py-4">
        <div className="absolute -top-[72px]" id="discussion"/>
        <h2 className="text-2xl font-semibold mb-4 border-b-1 border-border pb-2">
          Results & Discussion
        </h2>
        <p>Discussion of results! To be done for final submission. Based off of the EDA and hypotheses testing.</p>
      </section>
    </main>
  );
}