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
          <Link href="#hypotest" className="hover:text-highlight/[80%] transition-basic">Hypothesis Testing</Link>
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
        <p className="mb-4 dark:text-gray-300 text-gray-700">
          The Consumer Price Index (CPI) serves as a relative measure of the cost of a standard basket of goods and services consumed by households. Calculated as a weighted average of these prices, the CPI establishes a baseline value of 100 for its starting year (2018). Tracking movements in regional CPI allows for a quantitative assessment of inflation, regional purchasing power disparities, and shifting costs of living across the Philippines.
        </p>

        <h3 className="text-xl font-medium mt-6 mb-2">Research Questions & Problems</h3>
        <ul className="list-disc pl-6 mb-4 dark:text-gray-300 text-gray-700 space-y-2">
          <li>Which Philippine regions have the highest and lowest rates of change in CPI?</li>
          <li>Which specific commodities have significantly differing CPI rates of change across Philippine regions?</li>
          <li>Are there recurring seasonal patterns of prices of particular commodity groups?</li>
          <li>Which time periods have the lowest and highest rates of change in CPI?</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">Research Objectives & Proposed Solutions</h3>
        <p className="mb-3 dark:text-gray-300 text-gray-700">
          To address these questions, this study will analyze historical monthly CPI data extracted from national statistical repositories using statistical analysis and exploratory data modeling. The core objectives are:
        </p>
        <ul className="list-disc pl-6 mb-4 dark:text-gray-300 text-gray-700 space-y-2">
          <li>Determine if geographic location is a significant factor for inflation rates, identifying which regions experience the fastest and slowest inflation rates from 2018 to 1st Quarter 2026.</li>
          <li>Identify which specific commodity groups serve as primary drivers of CPI per region.</li>
          <li>Determine if there are recurring seasonal patterns in the prices of certain commodity groups across regions.</li>
          <li>Pinpoint the specific time periods corresponding to the fastest and slowest changes in national and regional CPI.</li>
        </ul>

        <h3 className="text-xl font-medium mt-6 mb-2">Hypotheses</h3>
        <div className="space-y-4 text-gray-700">
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
        <ul className="list-disc pl-6 mb-4 dark:text-gray-300 text-gray-700 space-y-1">
          <li><strong>Source:</strong> OpenStat — Philippine Statistics Authority (PSA)</li>
          <li><strong>Temporal Scope:</strong> January 2018 to 1st Quarter 2026</li>
          <li><strong>Baseline Year:</strong> 2018 = 100</li>
          <li><strong>Collection Method:</strong> Public database extraction</li>
        </ul>

        <h3 className="text-xl font-medium mt-4 mb-2">PSA Collection Methodology & Sampling</h3>
        <ul className="list-disc pl-6 mb-4 dark:text-gray-300 text-gray-700 space-y-2">
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
        <p className="mb-4 dark:text-gray-300 text-gray-700">
          The extracted dataset contains multi-index time-series rows organized by geographic location (National, NCR, and Areas Outside NCR / individual administrative regions) and commodity breakdown (All-Items, Food and Non-Alcoholic Beverages, Cereals, etc.) across monthly intervals. Preprocessing steps will include reshaping wide monthly columns into long format, checking for missing entries across administrative shifts, and calculating period-over-period percentage changes to measure inflation velocity.
        </p>

        <p className="mb-4 dark:text-gray-300 text-gray-700">
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
        
        {/* Research Question 1 */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4 text-blue-800">
            RQ1: Which Philippine regions have the highest and lowest rates of change in CPI?
          </h3>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6">
            <h4 className="text-lg font-medium mb-2 text-center text-gray-700">
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
            <h4 className="text-lg font-medium mb-2 text-center text-gray-700">
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

        {/* Research Question 2 */}
        <div className="mb-10 mt-10">
          <h3 className="text-xl font-medium mb-4 text-blue-800">
            RQ2: Which specific commodities have significantly differing CPI rates of change across Philippine regions?
          </h3>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-medium mb-2 text-center text-gray-700">
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

        {/* Research Question 3 */}
        <div className="mb-10 mt-10">
          <h3 className="text-xl font-medium mb-4 text-blue-800">
            RQ3: Are there recurring seasonal patterns of prices of particular commodity groups?
          </h3>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-medium mb-2 text-center text-gray-700">
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
              <h4 className="text-lg font-medium mb-2 text-center text-gray-700">
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
          <h3 className="text-xl font-medium mb-4 text-blue-800">
            RQ4: Which time periods have the lowest and highest rates of change in CPI?
          </h3>
          
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-medium mb-2 text-center text-gray-700">
                Monthly Inflation Velocity (CPI % Change) - All Items (2018-2026)
              </h4>
              <img 
                src="//rq1-bar-chart.jpg" 
                alt="Line chart showing macro monthly inflation velocity for NCR, AONCR, and National levels" 
                className="w-full h-auto rounded"
              />
              <p className="text-sm text-gray-500 mt-3 text-center">
                Figure 6: A macro-level time-series line chart comparing the month-over-month inflation velocities between Philippine regions.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="text-lg font-medium mb-2 text-center text-gray-700">
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
          <h3 className="text-xl font-medium mb-4 text-blue-800">
            Nutshell Plot: Overall Distribution of Inflation Velocity
          </h3>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-lg font-medium mb-2 text-center text-gray-700">
              Normality Test & Distribution overview
            </h4>
            <img 
              src="/nutshell-plot.png" 
              alt="Histogram and Q-Q plot showing the non-normal distribution of inflation velocity" 
              className="w-full h-auto rounded"
            />
            <p className="text-sm text-gray-500 mt-3 text-center">
              Figure 1 (Nutshell Plot): A macro-level view of our primary variable. The distribution histogram and Q-Q plot, alongside D'Agostino's K-squared test (p-value: 0.0), demonstrate a highly leptokurtic, non-normal distribution. This fundamental characteristic informs the statistical approaches required for subsequent hypothesis testing.
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
        <p className="mb-6 text-gray-700">
          Due to the non-normal distribution of our inflation velocity data, we utilized the Kruskal-Wallis H-test (a non-parametric equivalent to ANOVA) across all hypotheses to determine statistical significance at an alpha level of 0.05.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Hypothesis 1 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Hypothesis 1: Regional Variation</h3>
            <div className="text-sm text-gray-700 space-y-2 mb-4">
              <p><strong>H₀:</strong> There is no difference between the CPI rates of change across different Philippine regions.</p>
              <p><strong>H₁:</strong> There are significant differences in the CPI rates of change across different Philippine regions.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800">
              <p>Test: Kruskal-Wallis H-test</p>
              <p>H-Statistic: 46.7930</p>
              <p>P-Value: 0.9999999996959154</p>
            </div>
            <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 font-medium text-sm">
              Verdict: Fail to reject H₀. No significant difference across regions.
            </div>
          </div>

          {/* Hypothesis 2 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Hypothesis 2: Temporal Variation</h3>
            <div className="text-sm text-gray-700 space-y-2 mb-4">
              <p><strong>H₀:</strong> There are no time periods of significantly different rates of change for CPI.</p>
              <p><strong>H₁:</strong> There are time periods of significantly different rates of change for CPI.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800">
              <p>Test: Kruskal-Wallis H-test (Grouped by Year)</p>
              <p>H-Statistic: 745.6781</p>
              <p>P-Value: 1.042e-155</p>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700 font-medium text-sm">
              Verdict: Reject H₀. There are time periods with significantly different rates of change.
            </div>
          </div>

          {/* Hypothesis 3 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Hypothesis 3: Commodity Differences</h3>
            <div className="text-sm text-gray-700 space-y-2 mb-4">
              <p><strong>H₀:</strong> There is no difference in commodity group CPI rates of change across Philippine Regions.</p>
              <p><strong>H₁:</strong> There are significant differences in commodity group CPI rates of change across Philippine Regions.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800">
              <p>Test: Kruskal-Wallis H-test (Top 10 Volatile Commodities)</p>
              <p>H-Statistics: Ranged from 0.005 to 53.65</p>
              <p>P-Values: Ranged from 0.877 to 1.000</p>
            </div>
            <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 font-medium text-sm">
              Verdict: Fail to reject H₀. There is no difference in commodity group CPI rates of change across Philippine Regions.
            </div>
          </div>

          {/* Hypothesis 4 */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-3">Hypothesis 4: Seasonality</h3>
            <div className="text-sm text-gray-700 space-y-2 mb-4">
              <p><strong>H₀:</strong> There are no recurring seasonal patterns in commodity group CPI prices across Philippine Regions.</p>
              <p><strong>H₁:</strong> There are recurring seasonal patterns in commodity group CPI prices across Philippine Regions.</p>
            </div>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-800">
              <p>Test: Kruskal-Wallis H-test (Grouped by Month)</p>
              <p>H-Statistic: 288.8594</p>
              <p>P-Value: 1.941e-55</p>
            </div>
            <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-700 font-medium text-sm">
              Verdict: Reject H₀. There are recurring seasonal patterns across months.
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}