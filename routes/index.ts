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
		let obras: any[];

		await app.sql.connect(async (sql) => {
			obras = await sql.query("select id, titulo, prefacio, editora, autor, ano from obra order by titulo");
		});

		let opcoes = {
			titulo: "Acervo",
			obras: obras
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

		if (!obra.prefacio) {
			res.status(400).json("Prefácio inválido");
			return;
		}

		if (!obra.conteudo) {
			res.status(400).json("Conteúdo inválido");
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
