# Day 29

## Prompt

You are an expert frontend developer, UX designer, game designer, and supply chain consultant.

Build it so a complete beginner can play it — plain language, context before every decision, 'why does this matter' explanations, and guidance that makes you feel smart rather than lost.

Build a complete single-file HTML app named 'Operation Lifeline: Supply Chain Crisis Lab'.

Requirements:
• Output ONLY one HTML file.
• React via CDN + Babel JSX.
• Plain HTML, CSS, and JavaScript only.
• No Tailwind, npm, backend, APIs, images, or external assets.
• Must run offline by opening the HTML file.
• No placeholders or incomplete features.

Flow:

1. Welcome screen with title, subtitle, and 'Start Simulation'.
2. Generate a random fictional company (industry, revenue, factories, warehouses, suppliers, inventory days, lead time, countries) displayed as modern cards.
3. Generate one random crisis (factory fire, supplier bankruptcy, port strike, cyberattack, flood, raw material shortage, political conflict, shipping delay) with urgency and business impact.
4. War Room: Present six response actions. The player chooses three. Simulate consequences by updating Cost, Inventory, Profit, Delivery Speed, and Customer Satisfaction using animated progress bars.
5. Negotiation: Branching supplier negotiation with four rounds. Each choice affects Trust, Price, and Lead Time. Display a negotiation score.
6. CEO Boardroom: Five multiple-choice leadership questions. Score executive decision-making.
7. AI Strategy: Let the player choose two AI investments from Demand Forecasting, Inventory Optimization, Supplier Risk Monitoring, Warehouse Vision, and Procurement Copilot. Show expected business impact.
8. Final Dashboard: Display Overall Crisis Score (0-100), Leadership, Negotiation, Resilience, Cost Control, Risk Management, and Customer Satisfaction. Include personalized feedback, biggest mistake, best decision, expert recommendation, and lessons learned.

Design:
• Premium dark theme inspired by enterprise dashboards.
• Responsive.
• Rounded cards.
• Smooth transitions.
• Hover effects.
• Progress bars.
• Modern typography.
• Replay button.
• Every playthrough should randomize companies, crises, values, and outcomes.

Structure the React code into reusable components using useState. Ensure every button works, there are no console errors, and the final response contains only the complete HTML code inside a single code block.

## Response

I'm building a single-file HTML application with React and Babel that implements a complete flow through multiple screens—starting with a welcome, revealing the company and crisis details, moving through a war room and negotiation phase, then a boardroom strategy session, and finally an AI-driven dashboard. I'll set up a state machine in the main App component to manage which screen displays, along with global state tracking the company info, crisis parameters, and key metrics like costs and invention progress.

[Operation Lifeline: Supply Chain Crisis Lab](operation_lifeline_supply_chain.html)

## Screenshot

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

![alt text](image-4.png)

![alt text](image-5.png)

![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-8.png)

![alt text](image-9.png)

![alt text](image-10.png)

![alt text](image-11.png)

![alt text](image-12.png)

![alt text](image-13.png)

![alt text](image-14.png)

![alt text](image-15.png)

![alt text](image-16.png)

![alt text](image-17.png)

![alt text](image-18.png)

![alt text](image-19.png)

![alt text](image-20.png)
