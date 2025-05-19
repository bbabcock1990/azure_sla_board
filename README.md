# Azure SLA Board

Azure SLA Board is an unofficial web application that provides a visual, interactive grid of Azure service SLAs (Service Level Agreements). It helps users quickly look up and compare the uptime guarantees and service credits for a wide range of Azure services.

## Features

- **Interactive SLA Grid:** Browse Azure services by category and SLA percentage in a responsive grid.
- **Service Details Tooltip:** Hover over any service to see detailed SLA information, service credits, and a link to the official SLA documentation.
- **Category Color Coding:** Each service category is color-coded for easy scanning.
- **Searchable Data:** All SLA data is loaded from a local JSON file ([azure_slas.json](azure_sla_board/azure_slas.json)).

## Tech Stack

- **Frontend:** HTML, CSS (with Tailwind CSS and custom styles), JavaScript
- **Data:** Static JSON file containing Azure SLA information

## Usage

1. Clone or download this repository.
2. Open `index.html` in your browser.
3. Browse the SLA grid and hover over services for more details.

> **Note:** This project is for informational purposes only and is not affiliated with Microsoft.

## Deploying to Azure Static Web Apps

You can easily deploy this project as an [Azure Static Web App](https://learn.microsoft.com/en-us/azure/static-web-apps/overview):

1. **Push your code to GitHub** (if not already).
2. **In the Azure Portal**, create a new Static Web App and link it to your GitHub repository.
3. **Build Details:**
    - **App location:** `azure_sla_board`
    - **Output location:** (leave blank)
    - **API location:** (leave blank)
4. **Azure will automatically build and deploy your site.**
5. After deployment, your app will be available at the provided Azure Static Web Apps URL.

**Tip:**  
If you update `azure_slas.json`, push your changes to GitHub and Azure will redeploy your site.

## Project Structure

```
azure_sla_board/
├── azure_slas.json   # Azure SLA data (services, categories, SLAs, descriptions, links)
├── index.html        # Main HTML file
├── script.js         # JavaScript for grid rendering and interactivity
├── style.css         # Custom and Tailwind-based styles
└── README.md         # Project documentation
```

## Data Source

SLA data is based on official Microsoft Azure SLA documentation, but this site is not an official Microsoft product.

## License

This project is provided for educational and informational purposes only.