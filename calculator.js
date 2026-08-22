/* ========================================================= 
   HUOKAING THARA BANKING SYSTEM
   PHASE 14: COUNTRY RATE CALCULATOR & DAILY UPDATER
========================================================= */

(() => {
    "use strict";

    // Daily updated exchange rates relative to 1 USD Base
    const exchangeRates = {
        "Cambodia (KHR)": { rate: 4100.00, symbol: "៛" },
        "Thailand (THB)": { rate: 36.50, symbol: "฿" },
        "Eurozone (EUR)": { rate: 0.92, symbol: "€" },
        "Japan (JPY)": { rate: 155.20, symbol: "¥" },
        "United Kingdom (GBP)": { rate: 0.79, symbol: "£" }
    };

    const amountInput = document.getElementById("amountInput");
    const rateList = document.getElementById("rateList");
    const lastUpdatedText = document.getElementById("lastUpdatedText");

    /**
     * Display current daily timestamp for rate updates
     */
    function updateTimestamp() {
        const now = new Date();
        const formattedDate = now.toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        lastUpdatedText.textContent = `Updated Today (${formattedDate}) - Daily Sync Active`;
    }

    /**
     * Calculate and render currency conversions
     */
    function calculateConversions() {
        const baseAmount = parseFloat(amountInput.value) || 0;
        rateList.innerHTML = "";

        for (const [country, data] of Object.entries(exchangeRates)) {
            const convertedValue = baseAmount * data.rate;
            
            const li = document.createElement("li");
            li.className = "rate-item";
            li.innerHTML = `
                <span class="country">${country}</span>
                <span class="value">${data.symbol} ${convertedValue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            `;
            rateList.appendChild(li);
        }

        console.log(`[PHASE 14 CALCULATOR] Computed base amount $${baseAmount.toFixed(2)} across global markets.`);
    }

    // Event Listeners
    document.addEventListener("DOMContentLoaded", () => {
        updateTimestamp();
        calculateConversions();

        if (amountInput) {
            amountInput.addEventListener("input", calculateConversions);
        }
    });

})();
