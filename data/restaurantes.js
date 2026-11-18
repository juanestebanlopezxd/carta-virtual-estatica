// ============================================================
//  DATOS DE LA CARTA  (edita aquí precios, productos, horario…)
//  Es JavaScript: respeta comillas, comas y llaves.
//
//  HORARIO: "dias" puede llevar lun mar mie jue vie sab dom.
//  "desde" y "hasta" en formato 24 h (16:00 = 4 p. m.).
//  Si un día cambia, agrega otra línea, por ejemplo:
//    { "dias": ["vie", "sab"], "desde": "16:00", "hasta": "01:00" }   <- hasta la 1 a. m.
//  "abierto": false cierra la carta a mano (festivos, imprevistos).
// ============================================================
window.RESTAURANTES = [
  {
    "slug": "hard-burgers",
    "nombre": "Hard Burgers",
    "eslogan": "Hamburguesas y sándwiches",
    "colorPrimario": "#111111",
    "logo": "img/logo-hard-blanco.png",
    "logoAncho": true,
    "whatsapp": "573185255540",
    "direccion": "Por definir",
    "abierto": true,
    "soloDomicilio": true,
    "horario": [
      { "dias": ["lun", "mar", "mie", "jue", "vie", "sab", "dom"], "desde": "16:00", "hasta": "23:00" }
    ],
    "domicilioAparte": true,
    "costoDomicilio": 0,
    "pedidoMinimo": 0,
    "adicionales": [
      {
        "id": "ad-carne",
        "nombre": "Carne de res 150 g",
        "precio": 7000
      },
      {
        "id": "ad-tocineta",
        "nombre": "Tocineta",
        "precio": 3000
      },
      {
        "id": "ad-cheddar",
        "nombre": "Queso cheddar",
        "precio": 2500
      },
      {
        "id": "ad-mozzarella",
        "nombre": "Queso mozzarella",
        "precio": 2500
      },
      {
        "id": "ad-cebolla",
        "nombre": "Cebolla caramelizada",
        "precio": 2000
      },
      {
        "id": "ad-pepinillos",
        "nombre": "Pepinillos",
        "precio": 2000
      },
      {
        "id": "ad-salsa",
        "nombre": "Salsa de la casa extra",
        "precio": 1500
      }
    ],
    "maxPorAdicional": 3,
    "pago": {
      "efectivo": true,
      "qr": "img/qr-hard-burgers.png",
      "cuentas": [
        {
          "tipo": "Llave Bre-B · Nequi Negocios",
          "numero": "0093626961",
          "titular": "Tairona Food · Alejandro Bernal"
        }
      ],
      "instrucciones": "Escanea el QR o envía a la llave desde cualquier banco (opción «Enviar con llave Bre-B»). Verifica que salga a nombre de Tairona Food, paga el total exacto y toma la captura del pago aprobado.",
      "qrDescarga": "img/qr-hard-burgers-tarjeta.png"
    },
    "categorias": [
      {
        "id": "hamburguesas",
        "nombre": "Hamburguesas",
        "productos": [
          {
            "id": "A-HAM-001",
            "nombre": "La Clasic",
            "precio": 24900,
            "disponible": true,
            "ingredientes": [
              {
                "nombre": "Carne de res 150 g",
                "fijo": true
              },
              {
                "nombre": "Pan",
                "fijo": true,
                "oculto": true
              },
              {
                "nombre": "Queso mozzarella"
              },
              {
                "nombre": "Queso cheddar"
              },
              {
                "nombre": "Cebolla caramelizada"
              },
              {
                "nombre": "Tomate"
              },
              {
                "nombre": "Lechuga"
              },
              {
                "nombre": "Salsa R"
              },
              {
                "nombre": "Rub de la casa",
                "fijo": true,
                "oculto": true
              }
            ]
          },
          {
            "id": "A-HAM-002",
            "nombre": "Hard Bacon",
            "precio": 26900,
            "disponible": true,
            "ingredientes": [
              {
                "nombre": "Carne de res 150 g",
                "fijo": true
              },
              {
                "nombre": "Pan",
                "fijo": true,
                "oculto": true
              },
              {
                "nombre": "Queso mozzarella"
              },
              {
                "nombre": "Queso cheddar"
              },
              {
                "nombre": "Cebolla caramelizada"
              },
              {
                "nombre": "Tomate"
              },
              {
                "nombre": "Lechuga"
              },
              {
                "nombre": "Tocino (2 unidades)"
              },
              {
                "nombre": "Salsa R"
              },
              {
                "nombre": "Rub de la casa",
                "fijo": true,
                "oculto": true
              }
            ]
          },
          {
            "id": "A-HAM-003",
            "nombre": "Doble Hard",
            "precio": 43900,
            "disponible": true,
            "ingredientes": [
              {
                "nombre": "Doble carne de res (2 × 150 g)",
                "fijo": true
              },
              {
                "nombre": "Pan",
                "fijo": true,
                "oculto": true
              },
              {
                "nombre": "Doble queso mozzarella"
              },
              {
                "nombre": "Doble queso cheddar"
              },
              {
                "nombre": "Cebolla caramelizada"
              },
              {
                "nombre": "Tomate"
              },
              {
                "nombre": "Lechuga"
              },
              {
                "nombre": "Tocineta"
              },
              {
                "nombre": "Salsa R"
              },
              {
                "nombre": "Rub de la casa",
                "fijo": true,
                "oculto": true
              }
            ]
          },
          {
            "id": "A-HAM-004",
            "nombre": "Chicken Hard",
            "precio": 31900,
            "disponible": true,
            "ingredientes": [
              {
                "nombre": "Carne de res 150 g",
                "fijo": true
              },
              {
                "nombre": "Pollo desmechado 150 g",
                "fijo": true
              },
              {
                "nombre": "Pan",
                "fijo": true,
                "oculto": true
              },
              {
                "nombre": "Queso mozzarella"
              },
              {
                "nombre": "Queso cheddar"
              },
              {
                "nombre": "Cebolla caramelizada"
              },
              {
                "nombre": "Tomate"
              },
              {
                "nombre": "Lechuga"
              },
              {
                "nombre": "Salsa R"
              },
              {
                "nombre": "Salsa A"
              },
              {
                "nombre": "Rub de la casa",
                "fijo": true,
                "oculto": true
              }
            ]
          },
          {
            "id": "A-HAM-005",
            "nombre": "The Hard Burger",
            "precio": 49900,
            "disponible": true,
            "ingredientes": [
              {
                "nombre": "Pulled pork 150 g",
                "fijo": true
              },
              {
                "nombre": "Carne de res 150 g",
                "fijo": true
              },
              {
                "nombre": "Pan",
                "fijo": true,
                "oculto": true
              },
              {
                "nombre": "Doble queso mozzarella"
              },
              {
                "nombre": "Doble queso cheddar"
              },
              {
                "nombre": "Tocineta"
              },
              {
                "nombre": "Cebolla caramelizada"
              },
              {
                "nombre": "Salsa R"
              },
              {
                "nombre": "Salsa M"
              },
              {
                "nombre": "Rub de la casa",
                "fijo": true,
                "oculto": true
              }
            ]
          },
          {
            "id": "A-HAM-006",
            "nombre": "The Smash",
            "precio": 28900,
            "disponible": true,
            "ingredientes": [
              {
                "nombre": "Carne smash (2 × 75 g)",
                "fijo": true
              },
              {
                "nombre": "Pan",
                "fijo": true,
                "oculto": true
              },
              {
                "nombre": "Doble queso cheddar"
              },
              {
                "nombre": "Tocineta"
              },
              {
                "nombre": "Pepinillos"
              },
              {
                "nombre": "Cebolla caramelizada"
              },
              {
                "nombre": "Salsa M"
              },
              {
                "nombre": "Salsa A"
              },
              {
                "nombre": "Rub de la casa",
                "fijo": true,
                "oculto": true
              }
            ]
          },
          {
            "id": "A-HAM-007",
            "nombre": "Doble Smash",
            "precio": 43900,
            "disponible": true,
            "ingredientes": [
              {
                "nombre": "Carne smash (4 × 75 g)",
                "fijo": true
              },
              {
                "nombre": "Pan",
                "fijo": true,
                "oculto": true
              },
              {
                "nombre": "Cuádruple queso cheddar"
              },
              {
                "nombre": "Tocineta"
              },
              {
                "nombre": "Pepinillos"
              },
              {
                "nombre": "Cebolla caramelizada"
              },
              {
                "nombre": "Salsa A"
              },
              {
                "nombre": "Salsa M"
              },
              {
                "nombre": "Sazonado de carne",
                "fijo": true,
                "oculto": true
              }
            ]
          },
          {
            "id": "A-HAM-008",
            "nombre": "Hard Christmas",
            "precio": 29900,
            "disponible": true,
            "ingredientes": [
              {
                "nombre": "Carne de res 150 g",
                "fijo": true
              },
              {
                "nombre": "Pan",
                "fijo": true,
                "oculto": true
              },
              {
                "nombre": "Queso mozzarella"
              },
              {
                "nombre": "Queso cheddar"
              },
              {
                "nombre": "Cebolla caramelizada"
              },
              {
                "nombre": "Tomate"
              },
              {
                "nombre": "Lechuga"
              },
              {
                "nombre": "Queso crema de tocineta"
              },
              {
                "nombre": "Mermelada de frutos rojos"
              },
              {
                "nombre": "Salsa R"
              },
              {
                "nombre": "Salsa M"
              },
              {
                "nombre": "Rub de la casa",
                "fijo": true,
                "oculto": true
              }
            ]
          }
        ]
      },
      {
        "id": "sandwiches",
        "nombre": "Sándwiches",
        "productos": [
          {
            "id": "A-SAN-001",
            "nombre": "Sándwich de Pollo",
            "precio": 20900,
            "disponible": true,
            "ingredientes": [
              {
                "nombre": "Pollo D 150 g",
                "fijo": true
              },
              {
                "nombre": "Pan",
                "fijo": true,
                "oculto": true
              },
              {
                "nombre": "Jamón"
              },
              {
                "nombre": "Queso mozzarella"
              },
              {
                "nombre": "Cebolla caramelizada"
              },
              {
                "nombre": "Tomate"
              },
              {
                "nombre": "Lechuga"
              },
              {
                "nombre": "Pepinillos"
              },
              {
                "nombre": "Salsa A"
              },
              {
                "nombre": "Salsa M"
              }
            ]
          },
          {
            "id": "A-SAN-002",
            "nombre": "Sándwich Pulled Pork",
            "precio": 23900,
            "disponible": true,
            "ingredientes": [
              {
                "nombre": "Pulled pork 150 g",
                "fijo": true
              },
              {
                "nombre": "Pan",
                "fijo": true,
                "oculto": true
              },
              {
                "nombre": "Jamón"
              },
              {
                "nombre": "Queso mozzarella"
              },
              {
                "nombre": "Cebolla caramelizada"
              },
              {
                "nombre": "Tomate"
              },
              {
                "nombre": "Lechuga"
              },
              {
                "nombre": "Pepinillos"
              },
              {
                "nombre": "Salsa A"
              },
              {
                "nombre": "Salsa M"
              }
            ]
          },
          {
            "id": "A-SAN-003",
            "nombre": "Sándwich Mixto",
            "precio": 29900,
            "disponible": true,
            "ingredientes": [
              {
                "nombre": "Pollo D 75 g",
                "fijo": true
              },
              {
                "nombre": "Pulled pork 75 g",
                "fijo": true
              },
              {
                "nombre": "Pan",
                "fijo": true,
                "oculto": true
              },
              {
                "nombre": "Jamón"
              },
              {
                "nombre": "Queso mozzarella"
              },
              {
                "nombre": "Cebolla caramelizada"
              },
              {
                "nombre": "Tomate"
              },
              {
                "nombre": "Lechuga"
              },
              {
                "nombre": "Pepinillos"
              },
              {
                "nombre": "Salsa A"
              },
              {
                "nombre": "Salsa M"
              }
            ]
          }
        ]
      }
    ]
  }
];
