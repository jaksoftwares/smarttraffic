interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  readMore: string;
  keywords: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "AI is Cutting Nairobi’s Traffic Jam by 40% – Here’s How",
    description: "How SmartTraffic AI’s adaptive signals and predictive analytics are transforming Thika Road and Mombasa Highway.",
    author: "Joseph Kirika",
    date: "March 10, 2025",
    category: "AI & Traffic",
    readMore: `
      <h2>The AI Solution Kenya Needed</h2>
      <p>Nairobi ranks as the <strong>4th most congested city in Africa</strong>, costing the economy <strong>KSh 50B yearly</strong>. Our AI tackles this with:</p>
      <ul>
        <li><strong>Dynamic Traffic Lights:</strong> Sensors at 20+ intersections (e.g., ABC Place) adjust timings in real-time. <em>Result: 27% faster commutes.</em></li>
        <li><strong>Matatu Flow Prediction:</strong> AI analyzes 500+ matatu GPS feeds to pre-empt bottlenecks.</li>
        <li><strong>Emergency Priority:</strong> Ambulances detected 500m away trigger green lights automatically.</li>
      </ul>
      <blockquote>“In Westlands, peak-hour delays dropped from 2 hours to 55 minutes.” — <strong>Felix Ombongi, CTO</strong></blockquote>
      <h3>Next Phase:</h3>
      <p>Integrating boda-boda data from <strong>SafeBoda</strong> for motorcycle-specific routing.</p>
    `,
    keywords: ["Nairobi traffic AI", "Thika Road", "adaptive traffic lights"]
  },
  {
    id: 2,
    title: "Smart Cities Kenya: How Mombasa is Using AI to Fix the Likoni Ferry Chaos",
    description: "IoT sensors and AI scheduling reduce ferry wait times from 3 hours to 45 minutes.",
    author: "Charles Chyna",
    date: "March 5, 2025",
    category: "Smart Cities",
    readMore: `
      <h2>Solving Mombasa’s Worst Bottleneck</h2>
      <p>The Likoni Ferry serves <strong>300,000+ people daily</strong>, with queues stretching 5km. Our solution:</p>
      <ol>
        <li><strong>Smart Queue Detection:</strong> 50+ cameras count vehicles and alert drivers via <strong>SMS</strong> when to avoid peak times.</li>
        <li><strong>Ferry Scheduling AI:</strong> Optimizes crossings based on demand, reducing idle time by 60%.</li>
        <li><strong>Matatu Priority Lanes:</strong> RFID tags let high-capacity vehicles board faster.</li>
      </ol>
      <p><strong>Impact:</strong> Fuel waste near Likoni dropped by <strong>18%</strong> in 3 months.</p>
      <p><em>“Next, we’re linking this to Mombasa’s new BRT system.”</em> — <strong>Charles Chyna</strong></p>
    `,
    keywords: ["Likoni Ferry AI", "Mombasa IoT", "smart ferry"]
  },
  {
    id: 3,
    title: "AI vs. Nairobi Rush Hour: How Algorithms Saved Waiyaki Way",
    description: "Machine learning reduced evening gridlock by 35% on Kenya’s busiest highway.",
    author: "Iyke Konzolo",
    date: "February 28, 2025",
    category: "Traffic Solutions",
    readMore: `
      <h2>Waiyaki Way’s Turnaround</h2>
      <p>Before AI: 7PM standstills. After deploying <strong>FlowOpt</strong>:</p>
      <table>
        <tr><th>Metric</th><th>Improvement</th></tr>
        <tr><td>Average Speed</td><td>11 km/h → 29 km/h</td></tr>
        <tr><td>Commute Time</td><td>↓ 42% (Now 38 mins from Kangemi to CBD)</td></tr>
      </table>
      <h3>How It Works:</h3>
      <ul>
        <li><strong>Dynamic Lane Allocation:</strong> AI shifts lanes based on truck/matatu ratios.</li>
        <li><strong>Accident Alerts:</strong> Detects crashes in <strong>8 seconds</strong> via CCTV AI.</li>
      </ul>
      <p><strong>Future:</strong> Linking to <strong>Google Maps</strong> for real-time driver alerts.</p>
    `,
    keywords: ["Waiyaki Way AI", "Nairobi traffic", "FlowOpt"]
  },
  {
    id: 4,
    title: "Smart Traffic Lights: Kenya’s Answer to Roundabout Deadlocks",
    description: "AI-powered signals at Uhuru Roundabout cut wait times by 50%.",
    author: "Felix Ombongi",
    date: "February 20, 2025",
    category: "Traffic Technology",
    readMore: `
      <h2>Uhuru Roundabout Revolution</h2>
      <p>Kenya’s first <strong>solar-powered AI traffic lights</strong>:</p>
      <ul>
        <li><strong>Matatu Clustering:</strong> Extends green time when 5+ matatus approach.</li>
        <li><strong>Pedestrian Safeguards:</strong> Crosswalk activation during lulls.</li>
      </ul>
      <p><strong>Results:</strong></p>
      <ul>
        <li>46% fewer accidents</li>
        <li>Saved 1,200+ driver-hours daily</li>
      </ul>
      <p><em>“We’re scaling to 30 roundabouts by 2026.”</em> — <strong>Felix Ombongi</strong></p>
    `,
    keywords: ["Uhuru Roundabout", "AI traffic lights", "Nairobi solar"]
  },
  {
    id: 5,
    title: "AI Cameras Catch 10,000 Traffic Violations Monthly in Nairobi CBD",
    description: "How computer vision reduced red-light jumping by 67%.",
    author: "Joseph Kirika",
    date: "February 15, 2025",
    category: "AI & Traffic",
    readMore: `
      <h2>The AI Traffic Police</h2>
      <p>Deployed at <strong>50 high-risk intersections</strong>:</p>
      <ol>
        <li><strong>Violation Detection:</strong> Illegal U-turns, overlapping, etc.</li>
        <li><strong>Automated Fines:</strong> Integrated with NTSA; KSh 120M generated in 3 months.</li>
      </ol>
      <p><strong>Public Impact:</strong> View live data at <a href="#">smarttraffic.ke/cbd-monitor</a>.</p>
      <blockquote>“Boda-boda plate recognition is next.” — <strong>Joseph Kirika</strong></blockquote>
    `,
    keywords: ["Nairobi AI cameras", "NTSA fines", "traffic violations"]
  },
  {
    id: 6,
    title: "IoT in Kenya: How Sensor Networks Are Easing Mombasa Traffic",
    description: "Real-time data from 200+ street sensors cuts congestion by 22%.",
    author: "Charles Chyna",
    date: "February 10, 2025",
    category: "Smart Cities",
    readMore: `
      <h2>Mombasa’s Sensor Grid</h2>
      <p>Partnering with <strong>Safaricom’s 5G</strong> for:</p>
      <ul>
        <li><strong>Dhow Traffic Monitoring:</strong> AI predicts port truck surges.</li>
        <li><strong>Beach Road Alerts:</strong> Warns drivers of tourist bus peaks.</li>
      </ul>
      <p><strong>Key Metric:</strong> 18% fewer idling cars near Fort Jesus.</p>
    `,
    keywords: ["Mombasa IoT", "Safaricom 5G", "smart sensors"]
  },
  {
    id: 7,
    title: "Predicting Accidents Before They Happen: AI on Kenyan Highways",
    description: "Machine learning forecasts blackspots with 89% accuracy.",
    author: "Iyke Konzolo",
    date: "February 5, 2025",
    category: "Traffic Solutions",
    readMore: `
      <h2>Saving Lives with AI</h2>
      <p>Piloted on <strong>Nairobi-Nakuru Highway</strong>:</p>
      <ul>
        <li><strong>Risk Factors Tracked:</strong> Fog, matatu speed, pothole density.</li>
        <li><strong>Alerts:</strong> SMS sent to drivers entering high-risk zones.</li>
      </ul>
      <p><strong>Result:</strong> 31% fewer accidents in 6 months.</p>
    `,
    keywords: ["Kenya highway AI", "accident prediction", "Nakuru road safety"]
  },
  {
    id: 8,
    title: "AI-Powered Matatus: How Tech is Fixing Kenya’s Public Transport",
    description: "Optimizing routes and schedules for 5,000+ matatus in Nairobi.",
    author: "Felix Ombongi",
    date: "January 30, 2025",
    category: "Public Transport",
    readMore: `
      <h2>The Smarter Matatu</h2>
      <p>Partnering with <strong>Ma3Route</strong> to:</p>
      <ol>
        <li><strong>Dynamic Routing:</strong> Avoids traffic using real-time AI.</li>
        <li><strong>Fair Pricing:</strong> AI suggests fares based on demand/distance.</li>
      </ol>
      <p><strong>Impact:</strong> 15% more daily trips for drivers.</p>
    `,
    keywords: ["matatu AI", "Nairobi public transport", "Ma3Route"]
  },
  {
    id: 9,
    title: "Self-Driving Cars in Kenya? The Future of Autonomous Traffic",
    description: "How AI prepares Kenya for autonomous vehicles.",
    author: "Joseph Kirika",
    date: "January 25, 2025",
    category: "Autonomous Vehicles",
    readMore: `
      <h2>Kenya’s AV Roadmap</h2>
      <p>Trials at <strong>Tatu City</strong> include:</p>
      <ul>
        <li><strong>AI Lane Marking:</strong> Adapts for AVs and boda-bodas.</li>
        <li><strong>Vehicle-to-Infrastructure (V2I):</strong> Traffic lights communicate with test AVs.</li>
      </ul>
      <p><em>“Full AV corridors by 2030.”</em> — <strong>Joseph Kirika</strong></p>
    `,
    keywords: ["Kenya autonomous vehicles", "Tatu City", "self-driving Africa"]
  },
  {
    id: 10,
    title: "AI Cuts Nairobi’s Transport Emissions by 15%",
    description: "How smarter traffic flows reduce carbon footprints.",
    author: "Charles Chyna",
    date: "January 20, 2025",
    category: "Sustainability",
    readMore: `
      <h2>Greener Cities with AI</h2>
      <p>By reducing idling:</p>
      <ul>
        <li><strong>CO2 Savings:</strong> Equivalent to planting 20,000 trees/year.</li>
        <li><strong>Electric Matatu Incentives:</strong> AI prioritizes EVs at charging lanes.</li>
      </ul>
    `,
    keywords: ["Nairobi emissions", "AI sustainability", "green transport"]
  },
  {
    id: 11,
    title: "Real-Time Data is Reshaping Kenya’s Urban Planning",
    description: "How counties use AI analytics to design better roads.",
    author: "Iyke Konzolo",
    date: "January 15, 2025",
    category: "Urban Mobility",
    readMore: `
      <h2>Data-Driven Roads</h2>
      <p>Kiambu County’s AI-powered decisions:</p>
      <ol>
        <li><strong>School Zone Expansions:</strong> Based on pedestrian heatmaps.</li>
        <li><strong>Roundabout Replacements:</strong> AI identified 12 inefficient intersections.</li>
      </ol>
    `,
    keywords: ["Kenya urban planning", "AI infrastructure", "Kiambu roads"]
  },
  {
    id: 12,
    title: "Ethics of AI Traffic Control: Balancing Safety and Privacy",
    description: "Addressing concerns over surveillance and data use.",
    author: "Felix Ombongi",
    date: "January 10, 2025",
    category: "AI Ethics",
    readMore: `
      <h2>Transparent AI</h2>
      <p>Our safeguards:</p>
      <ul>
        <li><strong>Anonymized Data:</strong> License plates blurred after 24 hours.</li>
        <li><strong>Public Oversight:</strong> County audits every 6 months.</li>
      </ul>
    `,
    keywords: ["AI ethics Kenya", "data privacy", "traffic surveillance"]
  },
  {
    id: 13,
    title: "Predictive AI: Stopping Nairobi Traffic Jams Before They Start",
    description: "How algorithms forecast and prevent gridlocks.",
    author: "Joseph Kirika",
    date: "January 5, 2025",
    category: "Predictive AI",
    readMore: `
      <h2>Seeing the Future</h2>
      <p>Our <strong>JamPredict</strong> tool analyzes:</p>
      <ul>
        <li><strong>Event Traffic:</strong> Stadium concerts, holidays.</li>
        <li><strong>Weather:</strong> Rain = 23% slower speeds.</li>
      </ul>
      <p><strong>Accuracy:</strong> 92% in pilot at Nyayo Stadium.</p>
    `,
    keywords: ["Nairobi traffic prediction", "AI gridlock", "JamPredict"]
  }
];


export default blogPosts;