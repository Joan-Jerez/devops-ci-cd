const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>DevOps App</title>

      <style>
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #1e1e2f, #2b5876);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
        }

        .card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          animation: fadeIn 1.5s ease;
        }

        h1 {
          margin: 0;
          font-size: 2.5rem;
          animation: slideDown 1s ease;
        }

        p {
          margin-top: 15px;
          color: #ddd;
          animation: fadeIn 2s ease;
        }

        .status {
          margin-top: 25px;
          font-weight: bold;
          color: #00ffcc;
          opacity: 0;
          animation: showStatus 2s ease forwards;
          animation-delay: 1.5s;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes showStatus {
          to {
            opacity: 1;
          }
        }

      </style>
    </head>

    <body>
      <div class="card">
        <h1>🚀 DevOps CI/CD</h1>
        <p>Aplicación desplegada automáticamente con GitHub Actions, Docker y Render.</p>
        <div class="status">✔ Sistema en línea y funcionando correctamente</div>
      </div>
    </body>

    </html>
  `);
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
  });
}