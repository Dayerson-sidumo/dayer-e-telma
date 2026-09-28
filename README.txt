DAYerson ❤️ TELMA — SITE V2
===========================

O QUE MUDOU NESTA VERSÃO
- Intro cinematográfica "Para Telma"
- Design mais premium e responsivo
- Contador em tempo real desde 29/04/2025
- Linha do tempo da relação
- Galeria com lightbox (abre a fotografia em tela cheia)
- Cartões interativos com pequenos corações
- Carta final em formato de papel
- Barra de progresso de leitura
- Animações suaves ao fazer scroll
- Botão preparado para a vossa música

FOTOGRAFIA PRINCIPAL
Este ZIP não inclui a fotografia original enviada anteriormente.
Se já tens a versão V1, copia:
  assets/foto-principal.jpg
para a pasta assets desta V2.

Se não colocares a foto, o site usa automaticamente um fundo D ♥ T como fallback.

COMO ADICIONAR A NOSSA MÚSICA
1. Escolhe um ficheiro MP3.
2. Renomeia para: nossa-musica.mp3
3. Coloca em: assets/nossa-musica.mp3
4. O botão "Nossa música" passa a tocar e pausar automaticamente.

COMO ADICIONAR MAIS FOTOS À GALERIA
No index.html, procura por:
  <div class="photo-slot ..."> ... </div>

Troca por algo assim:
  <button class="gallery-item reveal" data-src="assets/foto02.jpg">
    <img src="assets/foto02.jpg" alt="Nossa memória">
  </button>

Para a próxima evolução podemos criar a galeria automaticamente via JavaScript para ser ainda mais fácil adicionar fotos.

COMO ABRIR
Abre index.html no navegador, ou usa Live Server no VS Code.


V3:
- 9 fotografias adicionadas na galeria
- foto-principal.jpg agora está incluída
- basta abrir index.html ou publicar a pasta inteira


V4:
- Nossa música integrada: "Minha Bebé" — Anselmo Ralph feat. Sandokan
- Player abre dentro do site via Spotify oficial
- Link alternativo para a faixa oficial no YouTube
- Não é preciso colocar um MP3 na pasta assets
- É necessária internet para o player de streaming funcionar
