import app = require("teem");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		res.render("index/index");
	}

	public async sobre(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Sobre"
		};

		res.render("index/sobre", opcoes);
	}

	public async empresa(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Empresa"
		};

		res.render("index/empresa", opcoes);
	}

	public async orientacoes(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Orientações"
		};

		res.render("index/orientacoes", opcoes);
	}

	public async login(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Login"
		};

		res.render("index/login", opcoes);
	}

	public async acervo(req: app.Request, res: app.Response) {
		let produtoA = {
			id: 1,
			nome: "Produto A",
			valor: 25
		};

		let produtoB = {
			id: 2,
			nome: "Produto B",
			valor: 15
		};

		let produtoC = {
			id: 3,
			nome: "Produto C",
			valor: 100
		};

		let produtosVindosDoBanco = [ produtoA, produtoB, produtoC ];

		let opcoes = {
			titulo: "Acervo",
			produtos: produtosVindosDoBanco
		};

		res.render("index/acervo", opcoes);
	}

	@app.http.post()
	public async criarObra(req: app.Request, res: app.Response) {
		let obra = req.body;

		if (!obra.titulo) {
			res.status(400).json("Título inválido");
			return;
		}

		if (!obra.nome) {
			res.status(400).json("Título inválido");
			return;
		}

		if (!obra.autor) {
			res.status(400).json("Autor inválido");
			return;
		}

		if (!obra.editora) {
			res.status(400).json("Editora inválida");
			return;
		}

		if (!obra.ano) {
			res.status(400).json("Ano inválido");
			return;
		}

		await app.sql.connect(async (sql) => {
			await sql.query("insert into obra (titulo, prefacio, editora, autor, ano, conteudo) values (?, ?, ?, ?, ?, ?)", [obra.titulo, obra.prefacio, obra.editora, obra.autor, obra.ano, obra.conteudo]);
		});

		res.json(true);
	}

	public async leitura(req: app.Request, res: app.Response) {
		let id = parseInt(req.query["id"] as string);

		let obra;

		await app.sql.connect(async (sql) => {
			let lista = await sql.query("select id, titulo, prefacio, editora, autor, ano, conteudo from obra where id = ?", [id]);
			obra = lista[0];
		});

		let opcoes = {
			layout: "layout-simples",
			titulo: "Leitura",
			obra: obra
		};

		res.render("index/leitura", opcoes);
	}
}

export = IndexRoute;
