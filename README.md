# Projeto Interdisciplinar II - Sistemas de Informação ESPM

<p align="center">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://raw.githubusercontent.com/tech-espm/misc-template/main/logo.png" alt="Sistemas de Informação ESPM" style="width: 375px;"/></a>
</p>

# PraCegoLer

### 2024-02

## Integrantes
- Bianca Cristine Fagundes de Araújo (https://github.com/araujozb)
- Gabriel Cardoso Campos Rodrigues (https://github.com/gabrielccr-555)
- Gustavo Dutra Telles (https://github.com/snowdutra)
- Luzivania de Jesus Bonfim
- Maria Gabriela Vieira dos Santos (https://github.com/mgabriel4)
- Mateus Carnevale Colmeal (https://github.com/colmeal)

## Descrição do Projeto

Nosso projeto, intitulado “PRACEGOLER”, possui como objetivo principal ampliar as oportunidades de inserção no ensino superior para pessoas cegas através da tradução de obras acadêmicas para braille, promovendo assim maior acessibilidade e inclusão na educação. Sobre o funcionamento do site, na página inicial, o usuário pode fazer realizar a transcrição e baixá-las no formato de PDF para a impressão. A função de alto contraste está disponível para melhorar a navegação. O acesso completo ao site, inicialmente será restrito a alunos da ESPM, mediante login ou cadastro. A motivação do nosso projeto está estritamente ligada ao Objetivo de Desenvolvimento Sustentável 4: educação de qualidade, que visa garantir uma educação de qualidade e inclusiva para todos. Nosso projeto não foca na monetização, pois se trata de um projeto social sem arrecadação de fundos. A nossa divulgação será no intuito de captar mais alunos com deficiência visual para a ESPM. 

# Detalhes de Configuração

Para funcionar corretamente, devem ser criados os seguintes arquivos/pastas nos caminhos especificados, com o conteúdo especificado:

- O arquivo `.env` deve ser criado em `/`, com o conteúdo abaixo:
```
app_localIp=0.0.0.0
app_port=3000
app_root=
# Não pode terminar com barra /
app_urlSite=http://localhost:3000
app_cookie=[NOME DO COOKIE]
app_cookieSecure=0
app_staticFilesDir=public
app_disableStaticFiles=0
app_sqlConfig_connectionLimit=30
app_sqlConfig_waitForConnections=1
app_sqlConfig_charset=utf8mb4
app_sqlConfig_host=localhost
app_sqlConfig_port=3306
app_sqlConfig_user=[USUÁRIO DO BANCO]
app_sqlConfig_password=[SENHA DO USUÁRIO DO BANCO]
app_sqlConfig_database=[NOME DO BANCO]
app_usuarioSenhaPadrao=[SENHA PADRÃO PARA NOVOS USUÁRIOS]
app_usuarioHashSenhaPadrao=[HASH DA SENHA PADRÃO PARA NOVOS USUÁRIOS]
# Não utilizar números > 0x7FFFFFFF pois os XOR resultarão em -1
app_usuarioHashId=[HASH DE 32 BITS PARA O ID EM HEXADECIMAL, COMO 0x1234ABCD]
```

- A pasta `dados` deve ser criada em `/`
- A pasta `imagens` dee ser criada em `/dados`

# Licença

Este projeto é licenciado sob a [MIT License](https://github.com/tech-espm/misc-template/blob/main/LICENSE).

<p align="right">
    <a href="https://www.espm.br/cursos-de-graduacao/sistemas-de-informacao/"><img src="https://raw.githubusercontent.com/tech-espm/misc-template/main/logo-si-512.png" alt="Sistemas de Informação ESPM" style="width: 375px;"/></a>
</p>
