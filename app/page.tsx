export default function PortfolioPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto font-sans leading-relaxed dark:text-white text-gray-900">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">CS 132 Data Collection Document</h1>
        <p className="text-2xl font-semibold dark:text-blue-400 text-blue-700 mb-1">
          Saan Aabot 20 PHP Mo? Regional CPI Analysis from 2018 to 1st Quarter 2026
        </p>
        <p className="text-lg dark:text-gray-300 text-gray-600">Group Name: Cornetto</p>
        <p className="text-md dark:text-gray-300 text-gray-500">
          Members: Bugaoan, Buizon, Calinawan, Magpantay
        </p>
        <p className="text-sm text-green-700 font-medium mt-1">
          Target Alignment: SDG 8: Decent Work and Economic Growth
        </p>
      </header>

      {/* 1. Research Overview Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          1. Research Overview
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
        <div className="space-y-4 dark:text-gray-300 text-gray-700">
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

      {/* 2. Data Collection Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          2. Data Collection Process
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
            <strong>Market Basket Selection:</strong> The PSA monitors a representative "market basket" consisting of goods and services commonly consumed by average households and consistently available within target localities.
          </li>
          <li>
            <strong>On-the-Ground Price Collectors:</strong> Up to six trained enumerators per province physically survey sample retail outlets, local public markets, and commercial establishments.
          </li>
          <li>
            <strong>Collection Timing:</strong> In-person gathering targets peak marketing hours—typically before 10:00 AM—to ensure consistent transaction observations.
          </li>
          <li>
            <strong>Bi-Weekly Survey Phases:</strong> Price monitoring is executed in two survey rounds monthly, with provincial data processed around the 17th and 30th of each month.
          </li>
          <li>
            <strong>Validation and Processing:</strong> Collected price indexes pass through a multi-tier verification process across provincial, regional, and central PSA offices.
          </li>
        </ul>

        <h3 className="text-xl font-medium mt-4 mb-2">Preprocessing & Data Structure</h3>
        <p className="mb-4 dark:text-gray-300 text-gray-700">
          The extracted dataset contains multi-index time-series rows organized by geographic location (National, NCR, and Areas Outside NCR / individual administrative regions) and commodity breakdown (All-Items, Food and Non-Alcoholic Beverages, Cereals, etc.) across monthly intervals. Preprocessing steps will include reshaping wide monthly columns into long format, checking for missing entries across administrative shifts, and calculating period-over-period percentage changes to measure inflation velocity.
        </p>
      </section>

      {/* 3. Raw Data Access Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b-2 border-gray-200 pb-2">
          3. Raw Data Access
        </h2>
        <p className="mb-4 dark:text-gray-300 text-gray-700">
          The full dataset extracted from PSA OpenStat is structured in the linked Google Sheet workbook.
        </p>

        <div className="bg-blue-50 p-5 rounded-md border border-blue-200 shadow-sm">
          <h3 className="font-semibold dark:text-blue-400 text-blue-900 mb-2">Dataset Repository</h3>
          <a
            href="https://docs.google.com/spreadsheets/d/1xKBvrqKmKKXB3nJWSXhC1xhRSfNOmXmITkU8WHeWlIQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            📊 Open Google Sheets Data
          </a>
        </div>
      </section>
    </main>
  );
}