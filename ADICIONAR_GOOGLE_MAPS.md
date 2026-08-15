# 🗺️ Adicionar Google Maps (Opcional)

Se quiser mostrar sua localização com Google Maps, siga este guia.

## Opção 1: Embed Simples (Mais Fácil)

### 1. Abra Google Maps

Vá em: https://www.google.com/maps

### 2. Procure sua localização

- Busque "Foz do Iguaçu" ou seu endereço exato
- Clique no seu local

### 3. Compartilhe

1. Clique no botão "Compartilhar"
2. Clique em "Embed um mapa"
3. Copie o código HTML

### 4. Cole no seu site

Abra `components/ContactSection.jsx` e procure por:

```jsx
<div className="bg-gray-200 dark:bg-gray-800 rounded-xl h-96 flex items-center justify-center">
  <div className="text-center">
    <p className="text-6xl mb-4">📍</p>
    <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">Foz do Iguaçu - PR</p>
    <p className="text-sm text-gray-500 dark:text-gray-500">
      Você pode encontrar um mapa aqui adicionando Google Maps
    </p>
  </div>
</div>
```

Substitua por:

```jsx
<iframe
  width="100%"
  height="400"
  style={{ border: 0, borderRadius: '8px' }}
  loading="lazy"
  allowFullScreen=""
  referrerPolicy="no-referrer-when-downgrade"
  src="COLE O SRC DO GOOGLE MAPS AQUI"
/>
```

O `src` vem do código que você copiou no Google Maps.

## Opção 2: Usar Componente React do Google Maps

Se preferir mais controle, instale:

```bash
npm install @react-google-maps/api
```

Depois crie um arquivo `components/Map.jsx`:

```jsx
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'COLOQUE_SUA_CHAVE_AQUI', // Obtenha em: https://cloud.google.com/console
  });

  const center = {
    lat: -25.5951,  // Coordenadas de Foz do Iguaçu
    lng: -54.5775,
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={{ width: '100%', height: '400px', borderRadius: '8px' }} zoom={12} center={center}>
      <Marker position={center} />
    </GoogleMap>
  ) : null;
};

export default Map;
```

## Como Obter Chave de API

1. Vá em: https://cloud.google.com/console
2. Crie um novo projeto
3. Ative "Maps JavaScript API"
4. Crie uma chave de API
5. Restrinja para seu domínio (importante por segurança!)

## Dicas

- A Opção 1 é mais simples e não precisa de chave
- A Opção 2 oferece mais customização
- Sempre restrinja suas chaves de API por domínio

---

**Quer mostrar exatamente onde entregar?** Adicione o mapa! 🗺️
