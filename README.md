# Paleo Today

## Integrantes

- Samuel Pontes Madruga - 41046196
- Geysianne Silva dos Santos - 40502881

## Nome do Projeto

Paleo Today

## Definição do Problema

### Contexto

O Paleo Today é uma aplicação web voltada para a divulgação de notícias paleontológicas, descobertas científicas e discussões sobre teorias relacionadas à vida pré-histórica. Atualmente, conteúdos sobre paleontologia costumam estar espalhados em sites, vídeos, redes sociais e artigos isolados, dificultando a organização das informações para usuários interessados no tema.

### Público-alvo

O público-alvo do projeto é formado por estudantes, curiosos, entusiastas de dinossauros e pessoas interessadas em paleontologia, principalmente jovens que acessam conteúdos pelo celular e buscam informações rápidas, organizadas e fáceis de navegar.

### Dor principal

O usuário tem dificuldade para encontrar, em um único ambiente, notícias paleontológicas organizadas por categoria e um espaço simples para acompanhar teorias, comentários e discussões da comunidade.

### Critério de sucesso

O usuário consegue acessar notícias, categorias e salas de discussão sobre paleontologia em poucos segundos, tanto pelo celular quanto pelo computador.

## Wireframe da Página Principal

O wireframe representa a estrutura da página inicial antes da aplicação de cores, fontes e imagens finais.

### Wireframe Desktop

```txt
┌────────────────────────────────────────────────────────────┐
│ HEADER                                                     │
│ Logo Paleo Today | Início | Notícias | Fórum | Sobre       │
├────────────────────────────────────────────────────────────┤
│ HERO                                                       │
│ H1: Notícias e teorias paleontológicas                     │
│ Texto de apresentação                                      │
│ [Botão: Ver notícias]                                      │
├────────────────────────────────────────────────────────────┤
│ LAYOUT PRINCIPAL                                           │
│                                                            │
│ [Categorias] [Cards de Notícias] [Destaques]               │
│              [Card] [Card]                                 │
│              [Card]                                        │
├────────────────────────────────────────────────────────────┤
│ FÓRUM DE TEORIAS                                           │
│ [Sala 1] [Sala 2] [Sala 3]                                 │
├────────────────────────────────────────────────────────────┤
│ SOBRE                                                      │
├────────────────────────────────────────────────────────────┤
│ FOOTER                                                     │
└────────────────────────────────────────────────────────────┘
```

### Wireframe Mobile

```txt
┌──────────────────────┐
│ HEADER               │
│ Logo                 │
│ Menu                 │
├──────────────────────┤
│ HERO                 │
│ H1                   │
│ Texto                │
│ Botão                │
├──────────────────────┤
│ CATEGORIAS           │
├──────────────────────┤
│ NOTÍCIAS             │
│ [Card]               │
│ [Card]               │
│ [Card]               │
├──────────────────────┤
│ DESTAQUES            │
├──────────────────────┤
│ FÓRUM                │
│ [Sala]               │
│ [Sala]               │
│ [Sala]               │
├──────────────────────┤
│ SOBRE                │
├──────────────────────┤
│ FOOTER               │
└──────────────────────┘
```

## Arquitetura de Informação

1. Header
   - Identidade visual do projeto
   - Navegação principal

2. Hero
   - Apresentação do propósito do site
   - Botão de chamada para as notícias

3. Categorias
   - Dinossauros
   - Fósseis recentes
   - Mamíferos pré-históricos
   - Extinções em massa
   - Paleontologia no Brasil

4. Notícias
   - Cards com imagem, categoria, título, resumo e botão "Leia mais"

5. Comentários
   - Simulação de participação da comunidade

6. Destaques
   - Curiosidades e teorias em alta

7. Fórum
   - Salas de discussão sobre comportamento, descobertas e extinções

8. Sobre
   - Explicação do objetivo acadêmico do projeto

9. Footer
   - Créditos dos integrantes

## Tipografia

O projeto utiliza as fontes Poppins e Inter via Google Fonts.

- Poppins: utilizada em títulos e elementos de destaque.
- Inter: utilizada nos textos principais, por oferecer boa legibilidade.

## Sistema de Cores

A paleta foi inspirada em tons de terra, fósseis, madeira e natureza.

- Cor primária: #6b3f21
- Cor secundária: #2f5d50
- Cor de destaque: #c47f33
- Cor de fundo: #f4efe6
- Cor de superfície: #ffffff
- Cor de texto principal: #2c241c
- Cor de borda: #e4d8c8
- Cor de sucesso: #107c41

As combinações de texto e fundo foram pensadas para manter boa legibilidade e contraste adequado.

## Organização CSS

O CSS foi dividido em arquivos seguindo a ideia de organização ITCSS:

- variables.css: variáveis de cores, fontes, espaçamentos e sombras.
- reset.css: reset moderno para padronizar estilos entre navegadores.
- base.css: estilos gerais de elementos HTML.
- layout.css: estrutura principal da página e responsividade.
- components/: componentes específicos como navegação, hero, cards e footer.
- utilities.css: classes auxiliares e ajustes de acessibilidade.
