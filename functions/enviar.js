export async function onRequestPost(context) {

  const data = await context.request.json();

  const nome = data.nome;
  const email = data.email;
  const telefone = data.telefone;
  const assunto = data.assunto;
  const mensagem = data.mensagem;

  console.log(nome, email, mensagem);

  // aqui você chamaria API de email (resend / sendgrid)

  return new Response(
    JSON.stringify({ status: "ok" }),
    { headers: { "Content-Type": "application/json" } }
  );
}