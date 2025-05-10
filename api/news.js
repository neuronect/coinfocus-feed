// Datei: api/news.js

export default async function handler(req, res) {
  const articles = [
    {
      title: "Bitcoin über 70.000 USD – Was bedeutet das für Altcoins?",
      content: "Bitcoin hat erneut ein Rekordhoch erreicht und überschreitet die Marke von 70.000 USD...",
      status: "publish",
      created_at: "2025-05-10T08:00:00Z"
    },
    {
      title: "Ethereum-Upgrade bringt mehr Skalierbarkeit",
      content: "Das lang erwartete Ethereum-Upgrade wurde aktiviert und soll die Transaktionskosten dauerhaft senken...",
      status: "publish",
      created_at: "2025-05-10T09:00:00Z"
    }
  ];

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(articles);
}
