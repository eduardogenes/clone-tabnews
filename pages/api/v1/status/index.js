function status(request, response) {
  response.status(200).json({ chave: "eu sou acima da média! hihi" });
}

export default status;
